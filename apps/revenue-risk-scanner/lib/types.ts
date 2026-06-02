export type CrawlPage = {
  url: string;
  title: string;
  description: string;
  headings: string[];
  textSnippet: string;
  linkCount: number;
  formsCount: number;
  internalLinks: string[];
};

export type CrawlResult = {
  rootUrl: string;
  visited: string[];
  pages: CrawlPage[];
};

export type RevenueRiskAnalysis = {
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
  evidence: Array<{
    page: string;
    issue: string;
    whyItMatters: string;
  }>;
  confidence: number;
  crawlSummary: string;
};
