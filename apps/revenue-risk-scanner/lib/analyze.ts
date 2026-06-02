import type { CrawlResult, RevenueRiskAnalysis } from "@/lib/types";
import { DEFAULT_MODEL, getOpenAIClient } from "@/lib/openai";

function safeJsonParse(raw: string) {
  const trimmed = raw.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const match = trimmed.match(/\{[\s\S]*\}/);
    if (match) {
      return JSON.parse(match[0]);
    }
    throw new Error("Model did not return valid JSON.");
  }
}

function clampScore(value: unknown) {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return 50;
  return Math.max(0, Math.min(100, Math.round(n)));
}

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item)).filter(Boolean).slice(0, 8);
}

function riskLevelFromScore(score: number): RevenueRiskAnalysis["riskLevel"] {
  if (score <= 25) return "low";
  if (score <= 50) return "medium";
  if (score <= 75) return "high";
  return "critical";
}

function decisionFromScore(score: number): RevenueRiskAnalysis["decision"] {
  if (score <= 25) return "launch_ready";
  if (score <= 60) return "needs_fix";
  return "not_ready";
}

function heuristicAnalysis(crawl: CrawlResult): RevenueRiskAnalysis {
  const pageCount = crawl.pages.length;
  const hasFaq = crawl.pages.some((page) =>
    [page.title, page.description, page.textSnippet, ...page.headings].join(" ").toLowerCase().includes("faq")
  );
  const hasContact = crawl.pages.some((page) =>
    [page.title, page.description, page.textSnippet, ...page.headings].join(" ").toLowerCase().includes("contact")
  );
  const hasShipping = crawl.pages.some((page) =>
    [page.title, page.description, page.textSnippet, ...page.headings].join(" ").toLowerCase().includes("shipping")
  );
  const hasJapan = crawl.pages.some((page) =>
    [page.title, page.description, page.textSnippet, ...page.headings].join(" ").toLowerCase().includes("japan")
  );
  const hasSupport = crawl.pages.some((page) =>
    [page.title, page.description, page.textSnippet, ...page.headings].join(" ").toLowerCase().includes("support")
  );

  let score = 70;
  if (pageCount > 1) score -= 10;
  if (hasFaq) score -= 10;
  if (hasContact) score -= 7;
  if (hasShipping) score -= 8;
  if (hasJapan) score -= 8;
  if (hasSupport) score -= 7;

  const normalized = clampScore(score);
  const issues: string[] = [];
  if (!hasJapan) issues.push("No clear Japan-specific messaging found.");
  if (!hasFaq) issues.push("FAQ coverage looks thin.");
  if (!hasShipping) issues.push("Shipping / delivery details may be unclear.");
  if (!hasContact) issues.push("Contact or support visibility is weak.");
  if (!hasSupport) issues.push("Support reassurance is limited.");

  return {
    url: crawl.rootUrl,
    mode: "heuristic",
    revenueRiskScore: normalized,
    riskLevel: riskLevelFromScore(normalized),
    decision: decisionFromScore(normalized),
    summary: "Heuristic fallback analysis used because OpenAI API key was not available.",
    strengths: pageCount > 1 ? ["Multiple pages were crawlable."] : ["At least one page was crawlable."],
    risks: issues,
    recommendations: [
      "Add Japan-specific FAQ content.",
      "Clarify shipping and support details.",
      "Add trust signals near the primary CTA.",
    ].slice(0, 3),
    topGaps: issues.slice(0, 3),
    evidence: issues.slice(0, 3).map((issue, index) => ({
      page: crawl.pages[index]?.url ?? crawl.rootUrl,
      issue,
      whyItMatters: "Japanese buyers want lower risk before they buy from an overseas brand.",
    })),
    confidence: 0.45,
    crawlSummary: `${crawl.pages.length} page(s) crawled from ${crawl.rootUrl}`,
  };
}

export async function analyzeCrawl(crawl: CrawlResult): Promise<RevenueRiskAnalysis> {
  const client = getOpenAIClient();
  if (!client) {
    return heuristicAnalysis(crawl);
  }

  const prompt = {
    objective: "Evaluate the revenue risk of this website for a Japan market entry audit.",
    instructions: [
      "Return JSON only.",
      "Use a Revenue Risk Score from 0 to 100 where higher means riskier.",
      "Focus on trust, localization, FAQ, shipping, payment, returns, and Japan readiness.",
      "Keep the summary short and specific.",
    ],
    site: crawl.rootUrl,
    pages: crawl.pages.map((page) => ({
      url: page.url,
      title: page.title,
      description: page.description,
      headings: page.headings,
      textSnippet: page.textSnippet,
      linkCount: page.linkCount,
      formsCount: page.formsCount,
    })),
  };

  const response = await client.chat.completions.create({
    model: DEFAULT_MODEL,
    temperature: 0.2,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "You are a senior revenue risk analyst. Return only valid JSON with the required keys. Do not wrap the result in markdown.",
      },
      {
        role: "user",
        content:
          `${JSON.stringify(prompt, null, 2)}\n\nRequired JSON shape:\n` +
          `{\n` +
          `  "url": string,\n` +
          `  "revenueRiskScore": number,\n` +
          `  "riskLevel": "low" | "medium" | "high" | "critical",\n` +
          `  "decision": "launch_ready" | "needs_fix" | "not_ready",\n` +
          `  "summary": string,\n` +
          `  "strengths": string[],\n` +
          `  "risks": string[],\n` +
          `  "recommendations": string[],\n` +
          `  "topGaps": string[],\n` +
          `  "evidence": [{ "page": string, "issue": string, "whyItMatters": string }],\n` +
          `  "confidence": number,\n` +
          `  "crawlSummary": string\n` +
          `}`,
      },
    ],
  });

  const raw = response.choices[0]?.message?.content ?? "{}";
  const parsed = safeJsonParse(raw);
  const score = clampScore(parsed.revenueRiskScore);

  return {
    url: String(parsed.url || crawl.rootUrl),
    mode: "openai",
    revenueRiskScore: score,
    riskLevel: riskLevelFromScore(score),
    decision: decisionFromScore(score),
    summary: String(parsed.summary || "Analysis completed."),
    strengths: normalizeStringArray(parsed.strengths),
    risks: normalizeStringArray(parsed.risks),
    recommendations: normalizeStringArray(parsed.recommendations),
    topGaps: normalizeStringArray(parsed.topGaps),
    evidence: Array.isArray(parsed.evidence)
      ? parsed.evidence.slice(0, 6).map((item: any) => ({
          page: String(item?.page ?? ""),
          issue: String(item?.issue ?? ""),
          whyItMatters: String(item?.whyItMatters ?? ""),
        }))
      : [],
    confidence: Math.max(0, Math.min(1, Number(parsed.confidence ?? 0.7))),
    crawlSummary: String(parsed.crawlSummary || `${crawl.pages.length} page(s) crawled from ${crawl.rootUrl}`),
  };
}
