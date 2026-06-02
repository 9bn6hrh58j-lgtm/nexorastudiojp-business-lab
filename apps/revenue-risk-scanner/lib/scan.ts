export type ScanPage = {
  url: string;
  title: string;
  description: string;
  headings: string[];
  textSnippet: string;
  linkCount: number;
  formsCount: number;
  contactEmails: string[];
  contactPhones: string[];
  internalLinks: string[];
};

export type ScanFinding = {
  id: string;
  category:
    | "Shipping & Delivery Risk"
    | "Duties & Taxes Risk"
    | "Return/Refund Risk"
    | "Support Trust Risk"
    | "Product Confidence Risk"
    | "Business Legitimacy Risk"
    | "Social Proof Risk"
    | "FAQ Gap Risk"
    | "Policy Access Risk"
    | "Payment Confidence Risk";
  severity: "critical" | "high" | "medium" | "low";
  evidenceUrl: string;
  evidenceSnippet: string;
  trustGap: string;
  revenueLossType:
    | "Conversion Loss"
    | "Checkout Abandonment"
    | "International Order Loss"
    | "Repeat Purchase Loss"
    | "Support Cost Risk"
    | "Refund/Dispute Risk";
  riskPoints: number;
  whyItMatters: string;
  recommendedFix: string;
};

export type ScanAnalysis = {
  url: string;
  revenueRiskScore: number;
  riskLevel: "low" | "moderate" | "high" | "critical";
  decision: "launch_ready" | "needs_fix" | "not_ready";
  summary: string;
  findings: ScanFinding[];
  extracted: {
    shipping: boolean;
    returns: boolean;
    duties: boolean;
    contact: boolean;
    faq: boolean;
    trustSignals: boolean;
  };
  componentScores: Record<string, number>;
  crawlSummary: string;
};

export type ScanResult = {
  url: string;
  crawledPages: ScanPage[];
  analysis: ScanAnalysis;
  json: string;
};

const DEFAULT_TIMEOUT_MS = 12000;
const MAX_PAGES = 4;
const MAX_LINKS_PER_PAGE = 12;

const COMPONENT_WEIGHTS: Record<ScanFinding["category"], number> = {
  "Shipping & Delivery Risk": 15,
  "Duties & Taxes Risk": 12,
  "Return/Refund Risk": 15,
  "Support Trust Risk": 10,
  "Product Confidence Risk": 15,
  "Business Legitimacy Risk": 10,
  "Social Proof Risk": 8,
  "FAQ Gap Risk": 8,
  "Policy Access Risk": 5,
  "Payment Confidence Risk": 2,
};

const SEVERITY_MULTIPLIER: Record<ScanFinding["severity"], number> = {
  critical: 1,
  high: 0.75,
  medium: 0.5,
  low: 0.25,
};

const FINDING_CONFIDENCE: Record<"strong" | "medium" | "weak", number> = {
  strong: 1,
  medium: 0.7,
  weak: 0.4,
};

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function extractTitle(html: string) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match?.[1] ? decodeEntities(match[1].replace(/\s+/g, " ").trim()) : "";
}

function extractMeta(html: string, key: string) {
  const match = html.match(new RegExp(`<meta[^>]+(?:name|property)=["'](?:og:)?${key}["'][^>]+content=["']([^"']+)["'][^>]*>`, "i"));
  return match?.[1] ? decodeEntities(match[1].replace(/\s+/g, " ").trim()) : "";
}

function extractHeadings(html: string) {
  const matches = html.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi) ?? [];
  return matches
    .map((item) => item.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
    .map(decodeEntities)
    .filter(Boolean)
    .slice(0, 12);
}

function extractLinks(html: string, baseUrl: URL) {
  const links = new Set<string>();
  const regex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html))) {
    const href = match[1]?.trim();
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    try {
      const url = new URL(href, baseUrl);
      if (url.origin !== baseUrl.origin) continue;
      url.hash = "";
      links.add(url.toString());
    } catch {
      continue;
    }
    if (links.size >= MAX_LINKS_PER_PAGE) break;
  }
  return [...links];
}

function extractContactEmails(html: string) {
  const matches = html.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [];
  return [...new Set(matches.map((item) => item.toLowerCase()))].slice(0, 5);
}

function extractContactPhones(html: string) {
  const matches = html.match(/(\+?\d[\d\s().-]{7,}\d)/g) ?? [];
  return [...new Set(matches.map((item) => item.trim()))].slice(0, 5);
}

function summarizeText(html: string) {
  const text = stripHtml(html);
  return text.length > 1400 ? `${text.slice(0, 1400).trim()}…` : text;
}

async function fetchHtml(url: string) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
    }
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) {
      throw new Error(`Unsupported content type: ${contentType || "unknown"}`);
    }
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

function isSameOrigin(url: string, origin: string) {
  try {
    return new URL(url).origin === origin;
  } catch {
    return false;
  }
}

function keywordHit(text: string, patterns: string[]) {
  const haystack = text.toLowerCase();
  return patterns.some((pattern) => haystack.includes(pattern.toLowerCase()));
}

function firstMatch(text: string, patterns: string[]) {
  const haystack = text.toLowerCase();
  return patterns.find((pattern) => haystack.includes(pattern.toLowerCase())) ?? "";
}

function hasNumberNearWords(text: string, words: string[]) {
  const lower = text.toLowerCase();
  for (const word of words) {
    const idx = lower.indexOf(word.toLowerCase());
    if (idx >= 0) {
      const snippet = lower.slice(Math.max(0, idx - 80), Math.min(lower.length, idx + 120));
      if (/\d/.test(snippet)) return true;
      if (/\b(days?|weeks?|business days?|working days?|hrs?|hours?)\b/.test(snippet)) return true;
    }
  }
  return false;
}

async function parsePage(url: string) {
  const parsed = new URL(url);
  const html = await fetchHtml(parsed.toString());
  const title = extractTitle(html);
  const description = extractMeta(html, "description");
  const headings = extractHeadings(html);
  const internalLinks = extractLinks(html, parsed).slice(0, MAX_LINKS_PER_PAGE);
  const textSnippet = summarizeText(html);
  const contactEmails = extractContactEmails(html);
  const contactPhones = extractContactPhones(html);
  const formsCount = (html.match(/<form[\s>]/gi) ?? []).length;
  const linkCount = internalLinks.length;
  return { url: parsed.toString(), title, description, headings, textSnippet, linkCount, formsCount, contactEmails, contactPhones, internalLinks, rawHtml: html };
}

function buildEvidenceSnippet(page: ReturnType<typeof stripHtml>, keywords: string[]) {
  const lower = page.toLowerCase();
  const idx = keywords.reduce((best, keyword) => {
    const found = lower.indexOf(keyword.toLowerCase());
    return found >= 0 && (best < 0 || found < best) ? found : best;
  }, -1);
  if (idx < 0) return page.slice(0, 180);
  return page.slice(Math.max(0, idx - 80), Math.min(page.length, idx + 180)).replace(/\s+/g, " ").trim();
}

function makeFinding(params: {
  id: string;
  category: ScanFinding["category"];
  severity: ScanFinding["severity"];
  confidence: "strong" | "medium" | "weak";
  evidenceUrl: string;
  evidenceSnippet: string;
  trustGap: string;
  revenueLossType: ScanFinding["revenueLossType"];
  whyItMatters: string;
  recommendedFix: string;
}) {
  const riskPoints = COMPONENT_WEIGHTS[params.category] * SEVERITY_MULTIPLIER[params.severity] * FINDING_CONFIDENCE[params.confidence];
  return { ...params, riskPoints };
}

function summarizePages(pages: Awaited<ReturnType<typeof parsePage>>[]) {
  return `${pages.length} page(s) crawled from ${pages[0]?.url ?? "unknown"}`;
}

function scoreAndFindings(pages: Awaited<ReturnType<typeof parsePage>>[]): ScanAnalysis {
  const combinedText = pages
    .map((page) => [page.title, page.description, ...page.headings, page.textSnippet].join(" "))
    .join(" \n ")
    .toLowerCase();

  const allLinks = pages.flatMap((page) => page.internalLinks);
  const allText = pages.map((page) => [page.title, page.description, ...page.headings, page.textSnippet].join(" ")).join(" ");
  const anyEmail = pages.some((page) => page.contactEmails.length > 0);
  const anyPhone = pages.some((page) => page.contactPhones.length > 0);
  const hasFaq = keywordHit(allText, ["faq", "frequently asked", "questions", "q&a"]);
  const hasShipping = keywordHit(allText, ["shipping", "delivery", "ship", "fulfillment", "dispatch"]);
  const hasReturns = keywordHit(allText, ["return", "refund", "exchange", "returns"]);
  const hasDuties = keywordHit(allText, ["duty", "duties", "tax", "taxes", "customs", "import", "vat"]);
  const hasContact = keywordHit(allText, ["contact", "support", "help", "customer service"]) || anyEmail || anyPhone || pages.some((p) => p.formsCount > 0);
  const hasTrust = keywordHit(allText, ["review", "testimonial", "star", "rating", "press", "featured", "as seen on", "trusted by", "verified"]);
  const hasAbout = keywordHit(allText, ["about", "our story", "who we are", "founder", "company", "team", "address", "registered"]);
  const hasPolicies = keywordHit(allLinks.join(" "), ["privacy", "terms", "policy", "return", "refund", "shipping"]);
  const hasSecurePayment = keywordHit(allText, ["secure checkout", "paypal", "visa", "mastercard", "apple pay", "google pay", "shop pay"]);

  const findings: ScanFinding[] = [];

  if (!hasShipping) {
    findings.push(
      makeFinding({
        id: "shipping-policy-missing",
        category: "Shipping & Delivery Risk",
        severity: "critical",
        confidence: "strong",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["shipping", "delivery", "ship"]),
        trustGap: "Shipping policy missing",
        revenueLossType: "International Order Loss",
        whyItMatters: "Buyers may not know if the product ships to them or how long it will take.",
        recommendedFix: "Add a clear shipping section with destination coverage, timing, carrier, and tracking details.",
      })
    );
  } else if (!keywordHit(allText, ["international", "worldwide", "global", "ships to", "available in"])) {
    findings.push(
      makeFinding({
        id: "international-shipping-unclear",
        category: "Shipping & Delivery Risk",
        severity: "high",
        confidence: "medium",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["shipping", "delivery", "ship"]),
        trustGap: "International shipping unclear",
        revenueLossType: "International Order Loss",
        whyItMatters: "Cross-border buyers may drop off if they cannot tell whether the store serves their country.",
        recommendedFix: "State which countries are supported and whether international shipping is available.",
      })
    );
  }

  if (hasShipping && !hasNumberNearWords(allText, ["shipping", "delivery", "arrive", "ships", "dispatch"])) {
    findings.push(
      makeFinding({
        id: "delivery-timing-missing",
        category: "Shipping & Delivery Risk",
        severity: "medium",
        confidence: "medium",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["shipping", "delivery", "arrive"]),
        trustGap: "Delivery timing missing",
        revenueLossType: "Conversion Loss",
        whyItMatters: "Buyers often hesitate when arrival timing is not visible.",
        recommendedFix: "Add estimated delivery windows and tracking expectations.",
      })
    );
  }

  if (!hasDuties) {
    findings.push(
      makeFinding({
        id: "duties-taxes-unclear",
        category: "Duties & Taxes Risk",
        severity: "high",
        confidence: "strong",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["duty", "tax", "customs", "import"]),
        trustGap: "Duties/taxes unclear",
        revenueLossType: "Checkout Abandonment",
        whyItMatters: "Surprise fees can stop international buyers at checkout.",
        recommendedFix: "Explain whether duties, taxes, or import fees may apply and who pays them.",
      })
    );
  }

  if (!hasReturns) {
    findings.push(
      makeFinding({
        id: "return-policy-missing",
        category: "Return/Refund Risk",
        severity: "critical",
        confidence: "strong",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["return", "refund", "exchange"]),
        trustGap: "Return policy missing",
        revenueLossType: "Conversion Loss",
        whyItMatters: "Buyers are less likely to purchase when they do not know what happens if the item is wrong.",
        recommendedFix: "Publish a simple buyer-friendly return and refund policy.",
      })
    );
  } else {
    if (!keywordHit(allText, ["customer pays", "return shipping", "free return", "we cover", "we pay"])) {
      findings.push(
        makeFinding({
          id: "return-cost-unclear",
          category: "Return/Refund Risk",
          severity: "medium",
          confidence: "medium",
          evidenceUrl: pages[0]?.url ?? "",
          evidenceSnippet: buildEvidenceSnippet(allText, ["return", "refund", "exchange"]),
          trustGap: "Return cost responsibility unclear",
          revenueLossType: "Refund/Dispute Risk",
          whyItMatters: "If return shipping responsibility is unclear, buyers may avoid the purchase.",
          recommendedFix: "State who pays for return shipping and which cases qualify for a return.",
        })
      );
    }
    if (!keywordHit(allText, ["international return", "cross-border return", "overseas return"])) {
      findings.push(
        makeFinding({
          id: "international-returns-unclear",
          category: "Return/Refund Risk",
          severity: "high",
          confidence: "weak",
          evidenceUrl: pages[0]?.url ?? "",
          evidenceSnippet: buildEvidenceSnippet(allText, ["return", "refund", "exchange"]),
          trustGap: "International returns unclear",
          revenueLossType: "International Order Loss",
          whyItMatters: "Cross-border buyers want to know whether the store is set up for their location.",
          recommendedFix: "Add a section that explains whether international returns are supported.",
        })
      );
    }
  }

  if (!hasContact) {
    findings.push(
      makeFinding({
        id: "contact-hidden",
        category: "Support Trust Risk",
        severity: "critical",
        confidence: "strong",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["contact", "support", "help"]),
        trustGap: "Contact/support hidden",
        revenueLossType: "Conversion Loss",
        whyItMatters: "Buyers trust stores more when they can see a fast support path.",
        recommendedFix: "Expose a visible contact email, contact form, or support page.",
      })
    );
  }

  if (!keywordHit(allText, ["size", "dimensions", "material", "ingredients", "specifications", "specs", "what's included", "what is included", "how to use", "use instructions"])) {
    findings.push(
      makeFinding({
        id: "product-details-insufficient",
        category: "Product Confidence Risk",
        severity: "high",
        confidence: "strong",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["product", "details", "spec", "size", "material"]),
        trustGap: "Product details insufficient",
        revenueLossType: "Conversion Loss",
        whyItMatters: "Buyers need enough detail to decide confidently.",
        recommendedFix: "Add product specs, usage instructions, what is included, and important limitations.",
      })
    );
  }

  if (!hasAbout) {
    findings.push(
      makeFinding({
        id: "business-identity-unclear",
        category: "Business Legitimacy Risk",
        severity: "high",
        confidence: "medium",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["about", "founder", "company", "team"]),
        trustGap: "Business identity unclear",
        revenueLossType: "Conversion Loss",
        whyItMatters: "A buyer may hesitate if they cannot tell who is behind the store.",
        recommendedFix: "Add an About page, founder note, or company identity block.",
      })
    );
  }

  if (!hasTrust) {
    findings.push(
      makeFinding({
        id: "social-proof-missing",
        category: "Social Proof Risk",
        severity: "medium",
        confidence: "strong",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["review", "testimonial", "rating", "press", "featured"]),
        trustGap: "Reviews/social proof missing",
        revenueLossType: "Conversion Loss",
        whyItMatters: "Social proof lowers perceived risk and increases confidence.",
        recommendedFix: "Add reviews, testimonials, or press mentions near the main CTA.",
      })
    );
  }

  if (!hasFaq) {
    findings.push(
      makeFinding({
        id: "faq-gap",
        category: "FAQ Gap Risk",
        severity: "medium",
        confidence: "strong",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["faq", "questions"]),
        trustGap: "FAQ missing",
        revenueLossType: "Support Cost Risk",
        whyItMatters: "Buyers leave pages when obvious objections are not answered.",
        recommendedFix: "Add a visible FAQ section with the top buyer objections.",
      })
    );
  }

  if (!hasPolicies) {
    findings.push(
      makeFinding({
        id: "policy-access-hidden",
        category: "Policy Access Risk",
        severity: "medium",
        confidence: "medium",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allLinks.join(" "), ["privacy", "terms", "policy", "return", "refund"]),
        trustGap: "Policy links hidden",
        revenueLossType: "Checkout Abandonment",
        whyItMatters: "Buyers want to inspect policies before paying.",
        recommendedFix: "Show policy links in the header, footer, or checkout-adjacent area.",
      })
    );
  }

  if (!hasSecurePayment) {
    findings.push(
      makeFinding({
        id: "payment-confidence-weak",
        category: "Payment Confidence Risk",
        severity: "low",
        confidence: "medium",
        evidenceUrl: pages[0]?.url ?? "",
        evidenceSnippet: buildEvidenceSnippet(allText, ["secure checkout", "paypal", "visa", "mastercard", "apple pay"]),
        trustGap: "Payment reassurance weak",
        revenueLossType: "Checkout Abandonment",
        whyItMatters: "Even a small payment concern can stop a checkout.",
        recommendedFix: "Add accepted payment methods and a short secure checkout reassurance.",
      })
    );
  }

  const componentScores = Object.fromEntries(
    Object.keys(COMPONENT_WEIGHTS).map((component) => [component, 0])
  ) as Record<string, number>;

  for (const finding of findings) {
    componentScores[finding.category] = Math.min(
      COMPONENT_WEIGHTS[finding.category],
      Number((componentScores[finding.category] + finding.riskPoints).toFixed(2))
    );
  }

  const score = Math.min(
    100,
    Number(Object.values(componentScores).reduce((sum, value) => sum + value, 0).toFixed(2))
  );

  const extracted = {
    shipping: hasShipping,
    returns: hasReturns,
    duties: hasDuties,
    contact: hasContact,
    faq: hasFaq,
    trustSignals: hasTrust,
  };

  const riskLevel: ScanAnalysis["riskLevel"] =
    score <= 24 ? "low" : score <= 49 ? "moderate" : score <= 74 ? "high" : "critical";
  const decision: ScanAnalysis["decision"] =
    score <= 24 ? "launch_ready" : score <= 60 ? "needs_fix" : "not_ready";

  const summary =
    score <= 24
      ? "Low revenue risk detected. The site covers the major buyer-confidence basics."
      : score <= 49
      ? "Moderate risk detected. Several buyer-confidence gaps may reduce conversion."
      : score <= 74
      ? "High risk detected. Multiple missing trust elements may create measurable revenue loss."
      : "Critical risk detected. Major buyer-confidence gaps are likely blocking purchases.";

  const analysis: ScanAnalysis = {
    url: pages[0]?.url ?? "",
    revenueRiskScore: score,
    riskLevel,
    decision,
    summary,
    findings,
    extracted,
    componentScores,
    crawlSummary: summarizePages(pages),
  };

  return analysis;
}

export async function scanWebsite(startUrl: string): Promise<ScanResult> {
  const root = new URL(startUrl);
  const queue = [root.toString()];
  const visited = new Set<string>();
  const pages: Awaited<ReturnType<typeof parsePage>>[] = [];
  const candidateKeywords = ["shipping", "delivery", "return", "refund", "faq", "help", "contact", "about", "policy", "terms", "customs", "duties"];

  while (queue.length > 0 && pages.length < MAX_PAGES) {
    const current = queue.shift();
    if (!current || visited.has(current)) continue;
    visited.add(current);

    try {
      const page = await parsePage(current);
      pages.push(page);

      for (const link of page.internalLinks) {
        if (visited.has(link)) continue;
        const lower = link.toLowerCase();
        if (candidateKeywords.some((keyword) => lower.includes(keyword))) {
          queue.push(link);
        }
      }
    } catch (error) {
      pages.push({
        url: current,
        title: "",
        description: "",
        headings: [],
        textSnippet: error instanceof Error ? error.message : "Failed to crawl page.",
        linkCount: 0,
        formsCount: 0,
        contactEmails: [],
        contactPhones: [],
        internalLinks: [],
        rawHtml: "",
      });
    }
  }

  const analysis = scoreAndFindings(pages);
  return {
    url: root.toString(),
    crawledPages: pages.map(({ rawHtml, ...rest }) => rest),
    analysis,
    json: JSON.stringify(
      {
        url: root.toString(),
        crawledPages: pages.map(({ rawHtml, ...rest }) => rest),
        analysis,
      },
      null,
      2
    ),
  };
}
