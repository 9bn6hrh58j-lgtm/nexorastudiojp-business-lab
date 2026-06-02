import { NextRequest, NextResponse } from "next/server";
import { analyzeCrawl } from "@/lib/analyze";
import { crawlWebsite } from "@/lib/crawl";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function validateUrl(raw: string) {
  const value = raw.trim();
  if (!value) throw new Error("URL is required.");
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("URL must start with http:// or https://");
  }
  return url.toString();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const url = validateUrl(String(body?.url ?? ""));

    const crawl = await crawlWebsite(url);
    const analysis = await analyzeCrawl(crawl);

    return NextResponse.json(
      {
        ok: true,
        inputUrl: url,
        crawl,
        analysis,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 }
    );
  }
}
