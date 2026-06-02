# AI Business Ranking V2

## Purpose

Current purpose is not:

```text
Make Revenue Risk Scanner succeed at all costs.
```

Current purpose is:

```text
Select a business that can reach JPY 1M+/month within 1 year with AI as the main operator.
```

Work now runs on two lines:

| Line | Role |
|---|---|
| A: Revenue Risk Scanner MVP | Build and validate one strong candidate |
| B: AI Business Ranking | Keep evaluating whether it is still the best business |

## Evaluation Conditions

Required:

- human only gives final approval
- sales dependency is penalized
- SaaS/API is preferred
- target is JPY 1M+/month
- timeframe is within 1 year

Excluded as main business:

- sales agency
- DM outreach
- consulting
- custom manual diagnosis
- labor-heavy services

## Scoring Scale

| Score | Meaning |
|---:|---|
| 5 | Very strong |
| 4 | Strong |
| 3 | Acceptable |
| 2 | Weak |
| 1 | Poor |

For sales dependency and MVP difficulty:

```text
5 = low/easy
1 = high/hard
```

## Ranking Table

| Rank | Business | AI Automation | JPY 1M Difficulty | Sales Dependency | SaaS | API | Entry Barrier | Market Size | MVP Difficulty | Strategic Score |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | Revenue Risk Scanner | 4 | 4 | 3 | 5 | 5 | 3 | 4 | 4 | 35 |
| 2 | Ecommerce Policy Risk Monitor | 5 | 4 | 4 | 5 | 5 | 3 | 4 | 5 | 34 |
| 3 | FAQ Gap Scanner API | 5 | 3 | 4 | 5 | 5 | 2 | 3 | 5 | 31 |
| 4 | Product Page Revenue Loss Auditor | 4 | 4 | 3 | 5 | 4 | 2 | 5 | 4 | 30 |
| 5 | AI Review Objection Miner | 4 | 4 | 3 | 5 | 5 | 4 | 4 | 3 | 30 |
| 6 | Localization Revenue QA SaaS | 4 | 3 | 3 | 5 | 4 | 3 | 4 | 3 | 28 |
| 7 | Programmatic B2B Report API | 5 | 4 | 2 | 5 | 5 | 4 | 4 | 2 | 27 |
| 8 | Shopify App Listing Optimizer | 4 | 3 | 3 | 5 | 4 | 3 | 3 | 4 | 26 |
| 9 | AI Digital Product Generator | 5 | 2 | 4 | 4 | 3 | 1 | 4 | 5 | 23 |
| 10 | AI SOP/Policy Generator For Ecommerce | 5 | 3 | 4 | 5 | 4 | 2 | 3 | 5 | 22 |

## Important Ranking Note

The strategic score is not a pure sum.

`Revenue Risk Scanner` ranks first because it can absorb the narrower tools:

- policy risk
- FAQ gaps
- product page issues
- trust gaps
- revenue loss framing
- monitoring
- API

Therefore:

```text
Main business: Revenue Risk Scanner
First wedge/module: Policy + FAQ + Shipping/Returns risk
```

## 1. Revenue Risk Scanner

### What It Is

URL-based scanner that identifies buyer-facing issues that may create revenue loss:

- unclear shipping
- unclear duties/taxes
- unclear returns
- hidden support
- weak product confidence
- missing proof
- FAQ gaps

### Evaluation

| Item | Score | Reason |
|---|---:|---|
| AI automation rate | 4 | Rules + LLM can handle most diagnosis if evidence is required. |
| JPY 1M difficulty | 4 | Can combine reports, monitoring, agency plans, and API. |
| Sales dependency | 3 | Needs initial distribution, but can use free scan, SEO, and app/API channels. |
| SaaS potential | 5 | Natural SaaS product. |
| API potential | 5 | URL-in, JSON-out is API-friendly. |
| Entry barrier | 3 | Basic scanner is copyable; rulebase/data can become barrier. |
| Market size | 4 | Ecommerce/DTC market is broad enough; cross-border trust is a real recurring issue. |
| MVP difficulty | 4 | MVP is already in progress and technically manageable. |

### Judgment

```text
GO
```

Best current main candidate.

## 2. Ecommerce Policy Risk Monitor

### What It Is

SaaS/API that monitors ecommerce policy pages for buyer-facing revenue risk:

- shipping ambiguity
- return ambiguity
- duty/tax ambiguity
- refund timing
- support expectations

### Evaluation

| Item | Score | Reason |
|---|---:|---|
| AI automation rate | 5 | Text-only policy pages are easy to scan repeatedly. |
| JPY 1M difficulty | 4 | Recurring monitoring model is plausible. |
| Sales dependency | 4 | Clear pain for agencies and store operators if positioned as revenue leakage/risk. |
| SaaS potential | 5 | Strong. |
| API potential | 5 | Strong. |
| Entry barrier | 3 | Rulebase and monitoring history can become barrier. |
| Market size | 4 | Ecommerce stores all have policies, but urgency varies. |
| MVP difficulty | 5 | Easier than full Revenue Risk Scanner. |

### Judgment

```text
GO AS FIRST MODULE
```

Not separate main business yet. Use it inside Revenue Risk Scanner.

## 3. FAQ Gap Scanner API

### What It Is

Scans stores and detects missing FAQ answers that block purchase:

- shipping
- returns
- duties/taxes
- sizing
- ingredients/materials
- warranty
- support

### Evaluation

| Item | Score | Reason |
|---|---:|---|
| AI automation rate | 5 | Narrow and rule-friendly. |
| JPY 1M difficulty | 3 | Narrow product may need bundling to justify price. |
| Sales dependency | 4 | Can sell as API or module. |
| SaaS potential | 5 | Strong as narrow tool. |
| API potential | 5 | Very strong. |
| Entry barrier | 2 | Easy to copy unless backed by category rules. |
| Market size | 3 | Useful but narrower than full revenue risk. |
| MVP difficulty | 5 | Easy. |

### Judgment

```text
GO AS MODULE
```

Good component, not best standalone company.

## 4. Product Page Revenue Loss Auditor

### What It Is

Scans product pages for missing information that may reduce conversion:

- unclear benefits
- missing specs
- no reviews/proof
- missing sizing/material details
- weak shipping/returns reassurance

### Evaluation

| Item | Score | Reason |
|---|---:|---|
| AI automation rate | 4 | AI can review pages, but false positives need control. |
| JPY 1M difficulty | 4 | Large market and clear CRO value. |
| Sales dependency | 3 | Crowded category means differentiation is needed. |
| SaaS potential | 5 | Strong. |
| API potential | 4 | Good. |
| Entry barrier | 2 | Generic version is easy to copy. |
| Market size | 5 | Very broad ecommerce market. |
| MVP difficulty | 4 | Manageable. |

### Judgment

```text
CAUTION
```

Good market, but too crowded unless tied to revenue risk/cross-border friction.

## 5. AI Review Objection Miner

### What It Is

Analyzes product reviews and extracts objections that should be reflected in product pages, FAQs, and policies.

### Evaluation

| Item | Score | Reason |
|---|---:|---|
| AI automation rate | 4 | AI is strong at clustering review themes. |
| JPY 1M difficulty | 4 | Useful for brands and agencies. |
| Sales dependency | 3 | Needs data access and clear ROI. |
| SaaS potential | 5 | Strong. |
| API potential | 5 | Strong. |
| Entry barrier | 4 | Dataset and integrations can create barrier. |
| Market size | 4 | Large enough across ecommerce. |
| MVP difficulty | 3 | Data access makes MVP harder. |

### Judgment

```text
CAUTION
```

Strong later product, but not easiest first wedge.

## 6. Localization Revenue QA SaaS

### What It Is

Checks localized pages for revenue-harming issues:

- unnatural translation
- missing trust cues
- weak CTAs
- untranslated policies
- cultural mismatch

### Evaluation

| Item | Score | Reason |
|---|---:|---|
| AI automation rate | 4 | AI is strong at language QA. |
| JPY 1M difficulty | 3 | Strong but crowded. |
| Sales dependency | 3 | Needs positioning beyond translation quality. |
| SaaS potential | 5 | Strong. |
| API potential | 4 | Good. |
| Entry barrier | 3 | Medium if conversion/trust dataset is built. |
| Market size | 4 | Large localization market. |
| MVP difficulty | 3 | Needs language QA quality. |

### Judgment

```text
CAUTION
```

Good but not first priority.

## 7. Programmatic B2B Report API

### What It Is

API that generates structured company/store reports from public web data.

### Evaluation

| Item | Score | Reason |
|---|---:|---|
| AI automation rate | 5 | Highly automatable. |
| JPY 1M difficulty | 4 | High-ticket API path exists. |
| Sales dependency | 2 | B2B API sales usually require outbound or partnerships. |
| SaaS potential | 5 | Strong. |
| API potential | 5 | Core product. |
| Entry barrier | 4 | Good if data quality and schemas are strong. |
| Market size | 4 | Broad B2B use cases. |
| MVP difficulty | 2 | Harder to focus and sell. |

### Judgment

```text
LATER
```

Good company shape, but too broad for first execution.

## 8. Shopify App Listing Optimizer

### What It Is

Optimizes Shopify App Store listings for app developers.

### Evaluation

| Item | Score | Reason |
|---|---:|---|
| AI automation rate | 4 | Listing analysis is automatable. |
| JPY 1M difficulty | 3 | Smaller market. |
| Sales dependency | 3 | Clear buyer, but limited audience. |
| SaaS potential | 5 | Strong. |
| API potential | 4 | Possible. |
| Entry barrier | 3 | Medium if benchmarks are built. |
| Market size | 3 | Smaller than merchant-side ecommerce. |
| MVP difficulty | 4 | Manageable. |

### Judgment

```text
WATCH
```

Good niche, but not main candidate.

## 9. AI Digital Product Generator

### What It Is

Tool for generating niche digital products.

### Evaluation

| Item | Score | Reason |
|---|---:|---|
| AI automation rate | 5 | Highly automatable. |
| JPY 1M difficulty | 2 | Needs strong distribution. |
| Sales dependency | 4 | Can be self-serve, but competition is intense. |
| SaaS potential | 4 | Possible. |
| API potential | 3 | Possible but less obvious. |
| Entry barrier | 1 | Very low. |
| Market size | 4 | Broad creator market. |
| MVP difficulty | 5 | Easy. |

### Judgment

```text
STOP AS MAIN BUSINESS
```

Too easy to copy.

## 10. AI SOP/Policy Generator For Ecommerce

### What It Is

Generates SOPs and policy drafts for ecommerce operations.

### Evaluation

| Item | Score | Reason |
|---|---:|---|
| AI automation rate | 5 | Easy to generate. |
| JPY 1M difficulty | 3 | Needs volume or agency plans. |
| Sales dependency | 4 | Self-serve possible. |
| SaaS potential | 5 | Good. |
| API potential | 4 | Possible. |
| Entry barrier | 2 | Low unless templates/data become strong. |
| Market size | 3 | Moderate. |
| MVP difficulty | 5 | Easy. |

### Judgment

```text
MODULE ONLY
```

Useful inside Revenue Risk Scanner, not best standalone company.

## Final Ranking

### Main Candidate

```text
1. Revenue Risk Scanner
```

### First Modules To Build

```text
1. Policy Risk
2. FAQ Gap
3. Shipping/Returns Risk
4. Product Page Confidence
```

### Stop As Main Business

```text
Japan Readiness Audit
AI Digital Product Generator
Manual diagnostics
Consulting
DM-led services
```

## A/B Work Plan

### A: Revenue Risk Scanner MVP

Continue implementation.

Immediate focus:

1. URL input
2. crawl public pages
3. run 12 MVP rules
4. calculate Revenue Risk Score
5. output JSON
6. show free result

### B: AI Business Ranking

Re-evaluate after real signals:

1. scanner output quality
2. willingness to submit URL
3. willingness to pay for full report
4. repeatability of rules
5. feasibility of API/SaaS packaging

## Implementation Delegation Decision

### Current Codex Usage Context

Codex Chat is currently best used for:

- business ranking
- scoring logic
- product specs
- CEO-facing decisions
- implementation instructions

Codex CLI / Navigator is already working on implementation under:

```text
apps/revenue-risk-scanner
```

Navigator has reported:

- URL input
- shallow crawler
- OpenAI analysis path with heuristic fallback
- JSON API output
- React UI
- Tailwind scaffold

### Should Implementation Go To Codex CLI?

```text
YES
```

Reason:

The task is now concrete implementation:

- Next.js app
- API routes
- crawler
- scoring logic
- JSON output
- UI

Codex CLI/Navigator is the right owner.

### Should Claude Code Be Used?

```text
NO
```

Reason:

- This is not yet a customer-facing final review.
- Claude usage should be preserved.
- Current implementation is already underway in Codex CLI.
- Adding Claude now creates coordination overhead.

Claude Code instruction:

```text
No Claude Code task required at this stage.
Use Claude only after MVP output exists and needs quality/risk review.
```

### Codex CLI Instruction

```text
Continue Revenue Risk Scanner MVP implementation under apps/revenue-risk-scanner.

Use MVP_SPEC_V1.md and REVENUE_RISK_SCORING_V1.md as source of truth.

Priority:
1. Keep /api/scan as the canonical endpoint.
2. Implement URL validation.
3. Crawl up to 10 public pages.
4. Run the 12 MVP rules.
5. Calculate Revenue Risk Score.
6. Return consistent JSON for completed, partial, and failed scans.
7. Keep heuristic fallback if OpenAI is unavailable.
8. Do not add new business ideas or unrelated features.
```

## CEO Decision

```text
GO: Revenue Risk Scanner MVP
KEEP WATCHING: AI Business Ranking
NO CLAUDE TASK REQUIRED
IMPLEMENTATION OWNER: Codex CLI / Navigator
```
