# Revenue Risk Scanner Unit Economics V1

## Purpose

Design ideal unit economics for `Revenue Risk Scanner` using software / SaaS margin logic.

The goal is not only:

```text
Can this product sell?
```

It is:

```text
Can this become a high-margin IT business?
```

## Strategic Position

Revenue Risk Scanner remains the main business.

The product value is:

```text
Finding buyer-facing revenue risks that analytics tools do not explain.
```

The score is secondary.

## External Cost And Margin References

Pricing and benchmark references used:

- OpenAI GPT-4.1 mini official model page lists `$0.40 / 1M input tokens` and `$1.60 / 1M output tokens`. Source: https://developers.openai.com/api/docs/models/gpt-4.1-mini
- Vercel pricing lists Pro at `$20/month`. Source: https://vercel.com/pricing
- Supabase pricing lists a Free plan and Pro infrastructure options. Source: https://supabase.com/pricing
- SaaS gross margin benchmarks commonly place healthy SaaS around 70%+ gross margin and best-in-class software/SaaS around 75-85%+. Source example: https://saasdb.app/benchmarks/gross-margin/
- USD/JPY reference used for planning: about `1 USD = JPY 160` as of early June 2026. Source example: https://www.exchange-rates.org/converter/usd-jpy

These are planning assumptions, not guaranteed future costs.

## Core Assumptions

### Exchange Rate

```text
1 USD = JPY 160
```

### LLM Usage Per Scan

Base assumption:

```text
input tokens: 20,000
output tokens: 2,000
```

GPT-4.1 mini cost:

```text
Input: 20,000 / 1,000,000 * $0.40 = $0.008
Output: 2,000 / 1,000,000 * $1.60 = $0.0032
Total: $0.0112
JPY: about 1.8 yen
```

### Planning Cost Per Scan

Use a safety-loaded cost, not the theoretical minimum.

```text
Planning OpenAI cost per standard scan: JPY 20
```

Reason:

- retries
- longer pages
- multi-step extraction
- occasional stronger model use
- JSON repair
- report generation
- failed scans

### Infrastructure Cost

Early public MVP:

```text
JPY 6,000-25,000/month
```

Scale stage:

```text
JPY 50,000-500,000/month
```

Infrastructure includes:

- hosting
- database
- logs
- queue/workers
- email
- storage
- monitoring

## Target Margin Philosophy

Revenue Risk Scanner should target:

| Metric | Target |
|---|---:|
| Gross margin | 85-92% |
| Minimum acceptable gross margin | 75% |
| Mature operating margin | 25-40% |
| Early operating margin | 0-20% |

If gross margin drops below:

```text
70%
```

the business starts to look less like high-quality SaaS and more like compute-heavy AI service.

## Plan 1: Monthly JPY 9,800

### Intended Customer

Small Shopify / ecommerce operator who wants simple recurring monitoring.

### Included Usage

```text
30 scans/month
1 store
top findings
monthly re-scan
basic email report
```

### Unit Economics

| Item | Monthly Amount |
|---|---:|
| Revenue | JPY 9,800 |
| OpenAI cost | JPY 600 |
| Infrastructure allocation | JPY 250 |
| Email / storage / misc | JPY 100 |
| Total COGS | JPY 950 |
| Gross profit | JPY 8,850 |
| Gross margin | 90.3% |

### Operating Cost Allocation

At scale, allocate:

| Item | Monthly Amount |
|---|---:|
| Product/R&D allocation | JPY 1,200 |
| Support allocation | JPY 700 |
| Marketing allocation | JPY 1,500 |
| G&A allocation | JPY 300 |
| Total OpEx allocation | JPY 3,700 |

### Operating Profit

| Item | Monthly Amount |
|---|---:|
| Gross profit | JPY 8,850 |
| OpEx allocation | JPY 3,700 |
| Operating profit | JPY 5,150 |
| Operating margin | 52.6% |

### Judgment

```text
Good self-serve plan if support is controlled.
```

Risk:

At JPY 9,800, one human support interaction can destroy margin.

Rule:

```text
No manual review included.
```

## Plan 2: Monthly JPY 29,800

### Intended Customer

Growing ecommerce store or small agency that wants deeper scans and more practical fix notes.

### Included Usage

```text
150 scans/month
3 stores or projects
full finding list
copy-ready fix suggestions
weekly monitoring
CSV/JSON export
```

### Unit Economics

| Item | Monthly Amount |
|---|---:|
| Revenue | JPY 29,800 |
| OpenAI cost | JPY 3,000 |
| Infrastructure allocation | JPY 600 |
| Email / storage / misc | JPY 300 |
| Total COGS | JPY 3,900 |
| Gross profit | JPY 25,900 |
| Gross margin | 86.9% |

### Operating Cost Allocation

| Item | Monthly Amount |
|---|---:|
| Product/R&D allocation | JPY 3,000 |
| Support allocation | JPY 2,000 |
| Marketing allocation | JPY 4,000 |
| G&A allocation | JPY 800 |
| Total OpEx allocation | JPY 9,800 |

### Operating Profit

| Item | Monthly Amount |
|---|---:|
| Gross profit | JPY 25,900 |
| OpEx allocation | JPY 9,800 |
| Operating profit | JPY 16,100 |
| Operating margin | 54.0% |

### Judgment

```text
Best core plan.
```

Reason:

- enough ARPU to support product improvement
- still affordable for serious stores
- better margin buffer than JPY 9,800
- can include more value without adding human labor

Risk:

If this plan includes custom advice or manual review, margin collapses.

Rule:

```text
No custom consulting. Paid value must come from better findings, exports, monitoring, and copy-ready fixes.
```

## Plan 3: API Pricing

### Intended Customer

Agencies, CRO tools, ecommerce platforms, internal product teams, or AI agents that need structured scan output.

### Recommended API Pricing

| Tier | Price | Notes |
|---|---:|---|
| Starter API | JPY 30 / scan | Low volume |
| Growth API | JPY 20 / scan | Monthly commitment |
| Scale API | JPY 12-15 / scan | High volume, contract required |

### Unit Economics Per API Scan

Base case:

| Item | Amount Per Scan |
|---|---:|
| Revenue | JPY 30 |
| OpenAI cost | JPY 6 |
| Infrastructure cost | JPY 2 |
| Logging/storage/misc | JPY 0.5 |
| Total COGS | JPY 8.5 |
| Gross profit | JPY 21.5 |
| Gross margin | 71.7% |

Optimized case:

| Item | Amount Per Scan |
|---|---:|
| Revenue | JPY 30 |
| OpenAI cost | JPY 3 |
| Infrastructure cost | JPY 1 |
| Logging/storage/misc | JPY 0.5 |
| Total COGS | JPY 4.5 |
| Gross profit | JPY 25.5 |
| Gross margin | 85.0% |

### API Operating Margin

API operating margin depends on support and enterprise requirements.

| Scenario | Operating Margin |
|---|---:|
| Self-serve API | 35-50% |
| Partner API with light support | 20-35% |
| Enterprise API with custom support | 5-20% |

### API Judgment

```text
API is attractive only if usage is high and support is low.
```

API should not be sold too cheaply before cost behavior is known.

Rule:

```text
Start API at JPY 30/scan. Discount only with commitment and clear usage limits.
```

## Blended Model

Recommended mature revenue mix:

| Revenue Source | Share |
|---|---:|
| JPY 9,800 plan | 25% |
| JPY 29,800 plan | 45% |
| API | 25% |
| One-time reports / add-ons | 5% |

Blended target:

| Metric | Target |
|---|---:|
| Gross margin | 85-90% |
| Operating margin | 25-40% |

## Break-Even Example

Assume monthly fixed OpEx:

```text
JPY 1,500,000
```

Assume blended gross margin:

```text
88%
```

Break-even MRR:

```text
1,500,000 / 0.88 = JPY 1,704,545
```

This is roughly:

| Customer Mix | Monthly Revenue |
|---|---:|
| 50 customers at JPY 9,800 | JPY 490,000 |
| 40 customers at JPY 29,800 | JPY 1,192,000 |
| API revenue | JPY 100,000 |
| Total | JPY 1,782,000 |

## Annual Revenue JPY 100M Scenario

### Revenue Target

```text
Annual revenue: JPY 100,000,000
Monthly revenue: about JPY 8,333,000
```

### Possible Revenue Mix

| Source | Count / Usage | Monthly Revenue |
|---|---:|---:|
| JPY 9,800 plan | 250 customers | JPY 2,450,000 |
| JPY 29,800 plan | 150 customers | JPY 4,470,000 |
| API | 47,000 scans at JPY 30 | JPY 1,410,000 |
| Total |  | JPY 8,330,000 |

### Cost Structure

| Item | Monthly Amount |
|---|---:|
| Revenue | JPY 8,330,000 |
| COGS at 88% gross margin | JPY 999,600 |
| Gross profit | JPY 7,330,400 |
| OpEx | JPY 4,800,000-6,200,000 |
| Operating profit | JPY 1,130,400-2,530,400 |
| Operating margin | 13.6-30.4% |

### Organization At JPY 100M ARR

Lean organization:

| Role | Headcount |
|---|---:|
| CEO / product lead | 1 |
| Full-stack engineer | 1-2 |
| AI / data engineer | 1 |
| Growth / content | 1 |
| Customer success / support | 1 |
| Operations / finance part-time | 0.5 |
| Total | 5.5-6.5 |

### Judgment

At JPY 100M annual revenue, the company can remain lean.

The main risk is support load.

If customers require manual interpretation, headcount rises quickly.

## Annual Revenue JPY 1B Scenario

### Revenue Target

```text
Annual revenue: JPY 1,000,000,000
Monthly revenue: about JPY 83,333,000
```

### Possible Revenue Mix

| Source | Count / Usage | Monthly Revenue |
|---|---:|---:|
| JPY 9,800 plan | 2,000 customers | JPY 19,600,000 |
| JPY 29,800 plan | 1,500 customers | JPY 44,700,000 |
| API | 630,000 scans at JPY 30 | JPY 18,900,000 |
| Add-ons |  | JPY 1,000,000 |
| Total |  | JPY 84,200,000 |

### Cost Structure

| Item | Monthly Amount |
|---|---:|
| Revenue | JPY 84,200,000 |
| COGS at 86% gross margin | JPY 11,788,000 |
| Gross profit | JPY 72,412,000 |
| OpEx | JPY 42,000,000-55,000,000 |
| Operating profit | JPY 17,412,000-30,412,000 |
| Operating margin | 20.7-36.1% |

### Organization At JPY 1B ARR

Lean but real organization:

| Function | Headcount |
|---|---:|
| Executive / product leadership | 2 |
| Engineering | 8-12 |
| AI / data / evaluation | 4-6 |
| Product design | 2 |
| Growth / SEO / lifecycle | 4-6 |
| Partnerships / API sales | 3-5 |
| Customer success / support | 5-8 |
| Operations / finance / admin | 3-5 |
| Security / compliance | 1-2 |
| Total | 32-48 |

### Judgment

JPY 1B annual revenue is structurally possible if:

- the product remains self-serve
- API support does not become enterprise consulting
- findings are valuable enough to retain customers
- gross margin remains above 80%
- support is automated

## Operating Margin Lessons

### What Preserves Margin

- shallow but smart crawl limits
- one primary LLM call per scan
- caching repeated pages
- cheaper model for extraction
- stronger model only for final synthesis
- async scans
- no manual review in subscription plans
- self-serve onboarding
- clear usage limits
- automated support docs

### What Destroys Margin

- unlimited scans
- unlimited reports
- manual audits
- custom advice
- enterprise onboarding too early
- high-end model for every step
- repeated retries
- broad crawling
- PDF/report generation without pricing
- support-heavy low-price customers

## Pricing Rules

### Rule 1

Do not offer unlimited scanning.

### Rule 2

JPY 9,800 plan must be self-serve only.

### Rule 3

JPY 29,800 plan should be the main plan.

### Rule 4

API pricing must start high enough to protect gross margin.

### Rule 5

Manual review must be sold separately.

Suggested manual add-on:

```text
JPY 49,800-98,000 per reviewed report
```

But this should not become the main business.

## Ideal Unit Economics Summary

| Plan | Revenue | COGS | Gross Margin | Operating Margin Target |
|---|---:|---:|---:|---:|
| Monthly JPY 9,800 | JPY 9,800 | JPY 950 | 90.3% | 35-50% |
| Monthly JPY 29,800 | JPY 29,800 | JPY 3,900 | 86.9% | 35-55% |
| API JPY 30/scan | JPY 30 | JPY 4.5-8.5 | 71.7-85.0% | 20-50% |

## Final CEO Judgment

```text
GO
```

Revenue Risk Scanner can have excellent software economics if it avoids becoming a manual audit business.

The best business model is:

```text
Self-serve SaaS + high-margin API + paid add-ons, with strict usage limits.
```

The company should optimize for:

- 85%+ gross margin
- 25%+ mature operating margin
- JPY 29,800 plan as the core plan
- API only with usage limits and margin protection

The product should not compete on cheap scans.

It should compete on:

```text
high-quality findings that merchants did not notice.
```
