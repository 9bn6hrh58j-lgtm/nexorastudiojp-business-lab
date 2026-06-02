# Revenue Risk Scanner

Next.js + TypeScript + Tailwind MVP for website revenue risk analysis.

## What it does

- Accepts a URL
- Crawls the site
- Sends the crawl context to OpenAI for evaluation
- Returns JSON output
- Calculates a Revenue Risk Score
- Renders the result in a React UI

## Environment

Create `.env.local` with:

```bash
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-4.1-mini
```

If `OPENAI_API_KEY` is missing, the app falls back to a heuristic analysis so the UI can still work.

## Run

```bash
npm install
npm run dev
```

## Main files

- `app/page.tsx` - React UI
- `app/api/analyze/route.ts` - crawl + evaluation API
- `lib/crawl.ts` - shallow crawler
- `lib/analyze.ts` - OpenAI / heuristic analysis
- `lib/types.ts` - shared types
