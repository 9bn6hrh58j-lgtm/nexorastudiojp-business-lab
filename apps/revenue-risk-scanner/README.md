# Revenue Risk Scanner

Next.js + TypeScript + Tailwind MVP.

## What it does

- Accepts a URL
- Fetches the page HTML
- Extracts shipping / returns / duties / contact / FAQ / trust signal clues
- Calculates a Revenue Risk Score from 0 to 100
- Returns JSON from `POST /api/scan`
- Shows the result in a React UI

The scanner is rules-based. It does not require OpenAI, authentication, payments, or a database.

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## API

`POST /api/scan`

Body:

```json
{ "url": "https://example.com" }
```

Response includes:

- `analysis.revenueRiskScore`
- `analysis.riskLevel`
- `analysis.decision`
- `analysis.findings`
- `analysis.extracted`
- `analysis.componentScores`
- `analysis.crawlSummary`
- `crawledPages`
- `json`

## Files

- `app/page.tsx` - UI
- `app/api/scan/route.ts` - scan API
- `lib/scan.ts` - fetch, extract, score

## Production check

```bash
npm run build
npm start
```
