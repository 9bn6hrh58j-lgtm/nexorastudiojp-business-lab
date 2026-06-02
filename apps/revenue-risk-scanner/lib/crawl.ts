import type { CrawlPage, CrawlResult } from "@/lib/types";

const DEFAULT_TIMEOUT_MS = 15000;
const MAX_PAGES = 4;
const MAX_TEXT_LENGTH = 1200;
const MAX_LINKS_PER_PAGE = 12;

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

function extractMeta(html: string, name: string) {
  const patterns = [
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["'][^>]*>`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["'][^>]*>`, "i"),
    new RegExp(`<meta[^>]+property=["']og:${name}["'][^>]+content=["']([^"']+)["'][^>]*>`, "i"),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return decodeEntities(match[1].trim());
  }
  return "";
}

function extractTitle(html: string) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match?.[1] ? decodeEntities(match[1].replace(/\s+/g, " ").trim()) : "";
}

function extractHeadings(html: string) {
  const matches = html.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi) ?? [];
  return matches
    .map((item) => item.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
    .map(decodeEntities)
    .filter(Boolean)
    .slice(0, 10);
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

function summarizeText(html: string) {
  const text = stripHtml(html);
  return text.length > MAX_TEXT_LENGTH ? `${text.slice(0, MAX_TEXT_LENGTH).trim()}…` : text;
}

async function fetchHtml(url: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    const contentType = response.headers.get("content-type") ?? "";
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) {
      throw new Error(`Unsupported content type for ${url}: ${contentType || "unknown"}`);
    }
    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function parsePage(url: string): Promise<CrawlPage> {
  const parsedUrl = new URL(url);
  const html = await fetchHtml(parsedUrl.toString());
  const title = extractTitle(html);
  const description = extractMeta(html, "description");
  const headings = extractHeadings(html);
  const links = extractLinks(html, parsedUrl);
  const textSnippet = summarizeText(html);
  const formsCount = (html.match(/<form[\s>]/gi) ?? []).length;

  return {
    url: parsedUrl.toString(),
    title,
    description,
    headings,
    textSnippet,
    linkCount: links.length,
    formsCount,
    internalLinks: links,
  };
}

export async function crawlWebsite(startUrl: string): Promise<CrawlResult> {
  const root = new URL(startUrl);
  const queue = [root.toString()];
  const visited = new Set<string>();
  const pages: CrawlPage[] = [];

  while (queue.length > 0 && pages.length < MAX_PAGES) {
    const current = queue.shift();
    if (!current || visited.has(current)) continue;
    visited.add(current);

    try {
      const page = await parsePage(current);
      pages.push(page);
      for (const link of page.internalLinks) {
        if (!visited.has(link) && queue.length + pages.length < MAX_PAGES) {
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
        internalLinks: [],
      });
    }
  }

  return {
    rootUrl: root.toString(),
    visited: [...visited],
    pages,
  };
}
