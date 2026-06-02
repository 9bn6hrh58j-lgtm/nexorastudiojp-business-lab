"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

type ApiResult = {
  ok: boolean;
  inputUrl?: string;
  crawl?: {
    rootUrl: string;
    visited: string[];
    pages: Array<{
      url: string;
      title: string;
      description: string;
      headings: string[];
      textSnippet: string;
      linkCount: number;
      formsCount: number;
      internalLinks: string[];
    }>;
  };
  analysis?: {
    url: string;
    mode: "openai" | "heuristic";
    revenueRiskScore: number;
    riskLevel: "low" | "medium" | "high" | "critical";
    decision: "launch_ready" | "needs_fix" | "not_ready";
    summary: string;
    strengths: string[];
    risks: string[];
    recommendations: string[];
    topGaps: string[];
    evidence: Array<{ page: string; issue: string; whyItMatters: string }>;
    confidence: number;
    crawlSummary: string;
  };
  error?: string;
};

function badgeClass(level?: string) {
  switch (level) {
    case "low":
      return "bg-emerald-50 text-emerald-700 ring-emerald-200";
    case "medium":
      return "bg-amber-50 text-amber-700 ring-amber-200";
    case "high":
      return "bg-orange-50 text-orange-700 ring-orange-200";
    case "critical":
      return "bg-rose-50 text-rose-700 ring-rose-200";
    default:
      return "bg-slate-50 text-slate-700 ring-slate-200";
  }
}

export default function Page() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ApiResult | null>(null);

  const analysis = result?.analysis;
  const scoreLabel = useMemo(() => {
    if (!analysis) return "—";
    return `${analysis.revenueRiskScore}/100`;
  }, [analysis]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = (await response.json()) as ApiResult;
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Analysis failed.");
      }
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Revenue Risk Scanner
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Scan a website for revenue risk before you waste spend.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Enter a URL, crawl the site, send the page data to OpenAI, and get a structured JSON report with a Revenue Risk Score.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Website URL</span>
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-teal-500 focus:shadow-[0_0_0_4px_rgba(13,148,136,0.12)]"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Scanning..." : "Run scan"}
            </button>
          </form>

          {error ? (
            <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          ) : null}

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StatCard label="Crawling" value="URL + internal pages" />
            <StatCard label="Evaluation" value="OpenAI JSON output" />
            <StatCard label="Result" value="Revenue Risk Score" />
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-xl font-semibold">What the scanner returns</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
            <li>• Crawl summary and visited pages</li>
            <li>• Revenue Risk Score from 0 to 100</li>
            <li>• Risk level and decision state</li>
            <li>• Strengths, risks, recommendations, and evidence</li>
            <li>• JSON output suitable for downstream automation</li>
          </ul>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            Human input is not required. If `OPENAI_API_KEY` is missing, the app falls back to a heuristic risk report so the MVP still works.
          </div>
        </aside>
      </section>

      {analysis ? (
        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${badgeClass(analysis.riskLevel)}`}>
                {analysis.riskLevel.toUpperCase()}
              </span>
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {analysis.decision}
              </span>
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {analysis.mode}
              </span>
            </div>

            <div className="mt-5">
              <div className="text-sm font-medium text-slate-500">Revenue Risk Score</div>
              <div className="mt-1 text-5xl font-semibold tracking-tight text-slate-950">{scoreLabel}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{analysis.summary}</p>
            </div>

            <div className="mt-6 grid gap-4">
              <ListPanel title="Strengths" items={analysis.strengths} tone="emerald" />
              <ListPanel title="Risks" items={analysis.risks} tone="rose" />
              <ListPanel title="Recommendations" items={analysis.recommendations} tone="sky" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Top Gaps</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {analysis.topGaps.length > 0 ? analysis.topGaps.map((gap) => <li key={gap}>• {gap}</li>) : <li>• No top gaps returned.</li>}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Evidence</h3>
              <div className="mt-4 space-y-4">
                {analysis.evidence.length > 0 ? (
                  analysis.evidence.map((item, index) => (
                    <article key={`${item.page}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.page}</div>
                      <div className="mt-1 text-sm font-semibold text-slate-950">{item.issue}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.whyItMatters}</p>
                    </article>
                  ))
                ) : (
                  <p className="text-sm text-slate-600">No evidence entries returned.</p>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Crawl Summary</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{analysis.crawlSummary}</p>
              <pre className="mt-4 max-h-[420px] overflow-auto rounded-2xl bg-slate-950 p-4 text-xs leading-5 text-slate-100">
{JSON.stringify(result, null, 2)}
              </pre>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function ListPanel({ title, items, tone }: { title: string; items: string[]; tone: "emerald" | "rose" | "sky" }) {
  const toneStyles = {
    emerald: "border-emerald-200 bg-emerald-50",
    rose: "border-rose-200 bg-rose-50",
    sky: "border-sky-200 bg-sky-50",
  }[tone];

  return (
    <section className={`rounded-2xl border p-4 ${toneStyles}`}>
      <h4 className="text-sm font-semibold text-slate-950">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
        {items.length > 0 ? items.map((item) => <li key={item}>• {item}</li>) : <li>• No items returned.</li>}
      </ul>
    </section>
  );
}
