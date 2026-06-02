"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

type ScanResponse = {
  ok: boolean;
  inputUrl?: string;
  url?: string;
  crawledPages?: Array<{
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
  }>;
  analysis?: {
    url: string;
    revenueRiskScore: number;
    riskLevel: "low" | "moderate" | "high" | "critical";
    decision: "launch_ready" | "needs_fix" | "not_ready";
    summary: string;
    findings: Array<{
      id: string;
      category: string;
      severity: string;
      evidenceUrl: string;
      evidenceSnippet: string;
      trustGap: string;
      revenueLossType: string;
      riskPoints: number;
      whyItMatters: string;
      recommendedFix: string;
    }>;
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
  json?: string;
  error?: string;
};

type ExtractedSignals = {
  shipping: boolean;
  returns: boolean;
  duties: boolean;
  contact: boolean;
  faq: boolean;
  trustSignals: boolean;
};

function badgeClass(level?: string) {
  switch (level) {
    case "low":
      return "bg-emerald-50 text-emerald-700 ring-emerald-200";
    case "moderate":
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
  const [result, setResult] = useState<ScanResponse | null>(null);

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
      const response = await fetch("/api/scan", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = (await response.json()) as ScanResponse;
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Scan failed.");
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
            Enter a URL, fetch the HTML, extract shipping / returns / duties / contact / FAQ / trust signals, and get a Revenue Risk Score with JSON output.
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
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:shadow-[0_0_0_4px_rgba(13,148,136,0.12)]"
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
            <StatCard label="Input" value="URL only" />
            <StatCard label="Scan" value="HTML fetch + rules" />
            <StatCard label="Output" value="JSON + score" />
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-xl font-semibold">What the scanner returns</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
            <li>• Crawl summary and visited pages</li>
            <li>• Revenue Risk Score from 0 to 100</li>
            <li>• Risk level and decision state</li>
            <li>• Findings with evidence and fixes</li>
            <li>• JSON output for automation</li>
          </ul>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            No authentication. No payment. No DB. No admin panel.
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
            </div>

            <div className="mt-5">
              <div className="text-sm font-medium text-slate-500">Revenue Risk Score</div>
              <div className="mt-1 text-5xl font-semibold tracking-tight text-slate-950">{scoreLabel}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{analysis.summary}</p>
            </div>

            <div className="mt-6 grid gap-4">
              <ListPanel title="Extracted Signals" items={formatSignals(analysis.extracted)} tone="sky" />
              <ListPanel title="Component Scores" items={formatScores(analysis.componentScores)} tone="emerald" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Findings</h3>
              <div className="mt-4 space-y-4">
                {analysis.findings.length > 0 ? (
                  analysis.findings.map((item) => (
                    <article key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
                          {item.category}
                        </span>
                        <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
                          {item.severity}
                        </span>
                        <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
                          {item.riskPoints.toFixed(2)} pts
                        </span>
                      </div>
                      <div className="mt-2 text-sm font-semibold text-slate-950">{item.trustGap}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.whyItMatters}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        <span className="font-semibold">Fix:</span> {item.recommendedFix}
                      </p>
                      <p className="mt-2 text-xs text-slate-500 break-all">
                        Evidence: {item.evidenceUrl}
                      </p>
                    </article>
                  ))
                ) : (
                  <p className="text-sm text-slate-600">No findings returned.</p>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Crawl Summary</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{analysis.crawlSummary}</p>
              <div className="mt-4 space-y-3">
                {result?.crawledPages?.map((page) => (
                  <div key={page.url} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{page.url}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-950">{page.title || "Untitled page"}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{page.description || page.textSnippet}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">JSON Output</h3>
              <pre className="mt-4 max-h-[420px] overflow-auto rounded-2xl bg-slate-950 p-4 text-xs leading-5 text-slate-100">
{result?.json ?? JSON.stringify(result, null, 2)}
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

function formatSignals(extracted: ExtractedSignals | undefined) {
  if (!extracted) return [];
  return [
    `Shipping: ${extracted.shipping ? "found" : "missing"}`,
    `Returns: ${extracted.returns ? "found" : "missing"}`,
    `Duties: ${extracted.duties ? "found" : "missing"}`,
    `Contact: ${extracted.contact ? "found" : "missing"}`,
    `FAQ: ${extracted.faq ? "found" : "missing"}`,
    `Trust signals: ${extracted.trustSignals ? "found" : "missing"}`,
  ];
}

function formatScores(scores: Record<string, number> | undefined) {
  if (!scores) return [];
  return Object.entries(scores).map(([key, value]) => `${key}: ${value.toFixed(2)}`);
}
