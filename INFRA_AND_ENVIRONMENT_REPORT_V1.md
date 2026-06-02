# Infra And Environment Report V1

## Purpose

Add `current environment fit` to all future business evaluation.

Current available company equipment:

- MacBook Pro 2017
- 16GB RAM
- iPad Pro M1
- iPhone 17 Pro Max

Constraint:

```text
No additional hardware investment until profit.
```

## Updated Evaluation Criteria

Future business evaluation must include:

1. AI autonomy rate
2. JPY 1M/month potential
3. sales dependency
4. SaaS/API potential
5. entry barrier
6. current environment fit

## Current Environment Fit Definition

`Current environment fit` means:

| Score | Meaning |
|---:|---|
| 5 | Can build and operate with current devices and low-cost cloud/API services |
| 4 | Can build locally, needs modest cloud/API usage |
| 3 | Possible, but performance or cloud cost needs close control |
| 2 | Possible only with frequent workarounds or paid infrastructure |
| 1 | Not suitable without new hardware or major infrastructure spend |

## Revenue Risk Scanner Fit

### Can It Be Implemented In Current Environment?

```text
YES
```

Reason:

- Next.js/TypeScript MVP is feasible on MacBook Pro 2017 with 16GB RAM.
- The crawler is shallow and does not require heavy local compute.
- LLM inference should use API calls, not local models.
- iPad/iPhone can be used for UI review, mobile QA, and customer-flow checks.

### What Must Not Be Done Locally

Do not run:

- large local LLMs
- high-volume crawling
- browser automation at scale
- long-running production workers
- local production database
- GPU-dependent inference

The current MacBook is enough for development, not production infrastructure.

## Can It Be Operated In Current Environment?

```text
YES, if production runs on managed cloud/API services.
```

Operating model:

```text
MacBook Pro = development and admin
iPad/iPhone = QA, dashboards, customer-flow checks
Cloud hosting = production
OpenAI/API model = inference
Managed DB/storage = scan history and leads
```

This fits the no-hardware-investment constraint.

## Recommended Low-Cost Stack

### MVP Stack

| Layer | Recommended Option | Reason |
|---|---|---|
| Frontend/API | Vercel Hobby or Pro | Next.js-native, fast deploy, no server maintenance |
| Database | Supabase Free, then Pro | Simple Postgres, auth/storage later |
| LLM | OpenAI API small/mini model | Avoid local inference |
| Crawl | Server-side fetch + HTML parser | Cheap and simple |
| Logs | Platform logs at first | Avoid extra observability cost |
| Payments | Stripe or Gumroad later | Not required for first internal MVP |

## Pricing References

Current checked references:

- Vercel pricing page states Hobby is free and Pro is `$20/mo + additional usage`, with `$20` included usage credit. Source: https://vercel.com/pricing
- Supabase pricing page lists Free at `$0/month` and Pro from `$25/month`. Source: https://supabase.com/pricing
- OpenAI GPT-4.1 mini docs list `$0.40` input and `$1.60` output per 1M tokens. Source: https://developers.openai.com/api/docs/models/gpt-4.1-mini
- Cloudflare Workers pricing examples show a `$5/month` paid plan baseline in examples, with usage-based additions. Source: https://developers.cloudflare.com/workers/platform/pricing/

## Monthly Infrastructure Cost Estimate

### Stage 0: Local MVP / Internal Testing

| Item | Monthly Cost |
|---|---:|
| Local development | $0 |
| Vercel Hobby | $0 |
| Supabase Free | $0 |
| OpenAI API | $5-$20 |
| Domain | $0 initially |
| Total | $5-$20/month |

Use this stage until:

- scanner returns stable JSON
- 20-50 test URLs are scanned
- scoring logic is not obviously broken

### Stage 1: Public MVP

| Item | Monthly Cost |
|---|---:|
| Vercel Pro | $20 |
| Supabase Free or Pro | $0-$25 |
| OpenAI API | $20-$100 |
| Domain | about $1-$2/month annualized |
| Total | $41-$147/month |

Recommendation:

Start with Vercel Hobby if permitted by usage/commercial constraints. Move to Pro before serious public launch.

### Stage 2: Early Revenue

| Item | Monthly Cost |
|---|---:|
| Vercel Pro | $20+ usage |
| Supabase Pro | $25+ usage |
| OpenAI API | $100-$500 |
| Email/transactional | $0-$20 |
| Monitoring/logging | $0-$50 |
| Total | $145-$615/month |

This is acceptable only after the product shows willingness to pay.

## OpenAI Cost Assumption

Assume one scan uses:

```text
20,000 input tokens
1,500 output tokens
```

Using GPT-4.1 mini pricing:

```text
input: 20,000 / 1,000,000 * $0.40 = $0.008
output: 1,500 / 1,000,000 * $1.60 = $0.0024
estimated LLM cost per scan = $0.0104
```

Estimated scan costs:

| Scans/month | Estimated LLM Cost |
|---:|---:|
| 100 | about $1.04 |
| 1,000 | about $10.40 |
| 10,000 | about $104 |

Reality may be higher if:

- pages are long
- retries happen
- multiple LLM calls are used
- higher-end models are used
- PDF reports require extra generation steps

MVP should keep the LLM call count to:

```text
1 call per scan
```

## Revenue Risk Scanner Environment Score

| Evaluation Item | Score | Reason |
|---|---:|---|
| AI autonomy rate | 4/5 | API inference + rules can automate most diagnosis |
| JPY 1M/month potential | 4/5 | SaaS/API pricing can reach target if demand exists |
| Sales dependency | 3/5 | Needs distribution, but not necessarily DM-led |
| SaaS/API potential | 5/5 | URL-in, JSON-out product is natural SaaS/API |
| Entry barrier | 3/5 | Basic scanner is copyable; rulebase/data must become moat |
| Current environment fit | 5/5 | Current devices are enough if cloud/API services handle production |

## Hardware Constraint Impact

The hardware constraint does not block this business.

It does affect implementation choices:

| Decision | Required Choice |
|---|---|
| AI inference | Use API, not local LLM |
| Crawling | Keep shallow, capped, and async later |
| Database | Managed DB, not local production |
| Hosting | Managed serverless/cloud |
| QA | Use iPad/iPhone for mobile checks |
| Scaling | Cloud usage after revenue, not hardware purchase |

## Main Risk

The main risk is not hardware.

The main risk is:

```text
Uncontrolled cloud/API cost before revenue.
```

Mitigation:

1. Hard cap scan limits.
2. Require email or account after free scans.
3. Cache scan results.
4. Limit pages per scan to 10.
5. Use one LLM call per scan.
6. Keep heuristic fallback when API is unavailable.
7. Add per-IP rate limits before public launch.

## Recommended MVP Limits

| Limit | Value |
|---|---:|
| Max pages per scan | 10 |
| Max product pages | 3 |
| Max HTML bytes per page | 500,000 |
| Max crawl time | 30 seconds |
| Max LLM calls per scan | 1 |
| Free scans per IP/day | 3 |
| Free scans per email/day | 5 |
| Store scan cache TTL | 7 days |

## Claude Code Delegation Decision

```text
不要
```

Reason:

- This is infrastructure/business fit analysis, not customer-facing copy review.
- Current facts can be verified from official pricing pages.
- Implementation is already underway in Codex CLI/Navigator.
- Claude usage should be preserved for later product quality review.

## Codex CLI / Navigator Decision

Do not give new implementation tasks until current `apps/revenue-risk-scanner` changes are completed or paused.

Recommended instruction after current work is committed:

```text
Apply MVP cost controls:
- max 10 pages per scan
- one LLM call per scan
- cache scan results
- add scan timeout
- return heuristic result if OpenAI fails
- prepare env vars for API cost control
```

## Final Judgment

```text
Revenue Risk Scanner is compatible with the current environment.
```

The company can build and operate the MVP with:

- MacBook Pro 2017 for development
- iPad/iPhone for QA
- Vercel/Supabase/OpenAI or equivalent low-cost managed services

No additional hardware is needed before profit.

The current environment fit score is:

```text
5/5
```
