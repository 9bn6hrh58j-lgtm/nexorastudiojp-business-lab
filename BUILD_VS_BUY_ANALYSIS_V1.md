# Build Vs Buy Analysis V1

## Purpose

Analyze whether customers will build Revenue Risk Scanner internally instead of buying it.

Important objection:

```text
Target customers may already pay for Claude, ChatGPT, Codex, or other AI tools.
They may have enough internal capability to create their own audits.
```

This is a serious objection.

If Revenue Risk Scanner is only:

```text
an AI prompt that reviews a website
```

then it is easy to copy and weak as a business.

## Executive Conclusion

Revenue Risk Scanner is easy to partially internalize.

It becomes hard to replace only if it compounds proprietary assets:

- validated finding history
- benchmark data
- industry comparison
- repeated false-positive suppression
- page-type specific evidence logic
- workflow integration
- monitoring over time

The strongest long-term barrier is:

```text
benchmarks built from validated finding history
```

Not raw AI output.

## What Customers Can Build Internally

Customers with Claude, ChatGPT, Codex, or internal AI operators can likely build:

- basic store review prompts
- policy checklist generation
- generic CRO suggestions
- one-time audit reports
- website copy review
- FAQ improvement suggestions
- simple crawler scripts
- spreadsheet-based scoring

This means Revenue Risk Scanner cannot rely on:

```text
AI can review your store
```

as a moat.

## 1. Parts That Are Easy To Internalize

| Product Part | Build Risk | Why |
|---|---|---|
| Basic AI website review | Very high | Any user can paste URL/page text into ChatGPT or Claude |
| Generic trust checklist | Very high | Checklists are easy to create |
| Revenue Risk Score | High | Scores can be invented internally |
| Simple policy review | High | Shipping/returns/duties prompts are easy |
| Basic fix suggestions | High | LLMs can rewrite copy |
| One-time PDF report | High | Docs/PDF generation is easy |
| Generic CRO advice | Very high | Already abundant |
| Manual audit workflow | High | Agencies/founders can do it with AI |

### Implication

If the product remains a one-time scanner with generic findings, it will be copied or ignored.

## 2. Parts That Are Harder To Internalize

| Product Part | Build Risk | Why It Is Harder |
|---|---|---|
| Validated finding taxonomy | Medium-low | Requires many scans and feedback loops |
| False-positive suppression | Medium-low | Requires objection history from real users |
| Cross-store benchmark data | Low | Requires data across many stores |
| Industry-specific comparison | Low | Requires categorized datasets |
| Finding hit-rate analytics | Medium-low | Requires structured feedback and repeated measurement |
| Monitoring over time | Medium | Requires scheduled scans, diffing, storage, alerts |
| Evidence extraction by page type | Medium | Requires crawler quality and page-type logic |
| Workflow integration | Medium | Requires Shopify/API/email/report integrations |
| Agency/API use case | Medium | Requires reliability and structured output |
| Category-specific playbooks | Medium-low | Requires repeated pattern learning |

### Implication

The product must move from:

```text
AI-generated audit
```

to:

```text
validated finding intelligence system
```

## 3. Build Vs Buy By Customer Type

### Solo Founder / Small Store

Likely behavior:

- may not have time to run structured AI audits
- may use ChatGPT casually
- wants quick answer

Build risk:

```text
Medium
```

Why they may buy:

- faster than prompting AI
- no setup
- trusted examples
- clear top 3 findings
- fix copy included

Why they may not buy:

- budget sensitive
- can ask ChatGPT
- may not believe findings

### Growing DTC Brand

Likely behavior:

- has marketers or operators
- may already use AI tools
- may use Shopify analytics, Hotjar, Clarity

Build risk:

```text
High
```

Why they may buy:

- benchmark comparison
- monitoring
- category-specific findings
- less internal time
- evidence-backed reports

Why they may not buy:

- internal team can run analysis
- agency already handles CRO
- generic output is not enough

### Shopify Agency / CRO Consultant

Likely behavior:

- can create their own audit prompts
- may already have templates
- cares about speed and consistency

Build risk:

```text
High
```

Why they may buy:

- API
- white-label pre-audits
- consistent evidence extraction
- benchmark-backed talking points
- fast prospect triage

Why they may not buy:

- they can make a prompt stack
- they want ownership of methodology
- they avoid dependency on a small vendor

### Enterprise / Larger Ecommerce Team

Likely behavior:

- has internal analytics/AI teams
- requires governance and procurement
- can build if strategically important

Build risk:

```text
Very high
```

Why they may buy:

- only if benchmarks and integrations are strong
- only if product saves internal time at scale
- only if API/security/reliability are credible

Why they may not buy:

- procurement friction
- internal AI/data team can reproduce
- security concerns

## 4. What Must Be Defensible

### Not Defensible

Do not rely on:

- prompts
- score formulas
- generic audit reports
- surface-level AI reviews
- checklist content
- one-time PDF output
- "AI-powered" positioning

These are copyable.

### Defensible

Build around:

- validated finding data
- cross-store benchmarks
- industry comparison
- repeated user feedback
- false-positive history
- outcome-linked fix patterns
- monitoring history
- workflow integrations

## 5. Barrier Evaluation

The CEO asked which future barriers are strongest:

- data
- benchmarks
- finding history
- industry comparison

### Barrier Ranking

| Rank | Barrier | Strength | Why |
|---:|---|---|---|
| 1 | Benchmarks | Very strong | Customers cannot easily know if their issue is common, rare, severe, or category-specific |
| 2 | Finding history | Strong | Real validation/objection/fix-intent history improves finding quality |
| 3 | Industry comparison | Strong | More specific than generic benchmarks; useful for paid plans |
| 4 | Data | Medium | Raw data alone is weak unless structured and validated |

## 6. Barrier Detail

### Data

Strength:

```text
Medium
```

Raw scan data is useful but not enough.

Weak data:

- page text
- policy text
- scan outputs
- generic scores

Stronger data:

- finding category
- evidence type
- merchant feedback
- objection reason
- fix intent
- paid value signal
- industry/store type
- before/after change

Judgment:

```text
Data becomes a moat only when structured and validated.
```

### Benchmarks

Strength:

```text
Very strong
```

Benchmarks answer questions customers cannot answer alone:

- Is this issue common?
- Is this worse than similar stores?
- Which finding matters most?
- What do stores in my category usually miss?
- Which fixes are most often acted on?

Example:

```text
Your international return policy is less clear than 73% of similar footwear stores we scanned.
```

This is much harder to reproduce internally.

Judgment:

```text
Benchmarks are the strongest moat if built from validated findings.
```

### Finding History

Strength:

```text
Strong
```

Finding history includes:

- which findings repeat
- which findings users already knew
- which findings create surprise
- which findings get objections
- which findings create action intent
- which findings lead to paid interest

This improves the system over time.

Judgment:

```text
Finding history is the engine that creates benchmark quality.
```

### Industry Comparison

Strength:

```text
Strong
```

Industry comparison is valuable because:

- ecommerce categories differ
- beauty buyers ask different questions than footwear buyers
- supplements have different trust risks than apparel
- high-ticket products need different reassurance

Example:

```text
In skincare stores, ingredient clarity and return restrictions are more important than generic social proof.
```

Judgment:

```text
Industry comparison is a premium-plan moat.
```

## 7. Recommended Moat Strategy

### Phase 1: Validation Data

Collect:

- top finding category
- known/unknown
- insight yes/no
- action intent
- paid value
- objection reason

Goal:

```text
Know which findings are actually valuable.
```

### Phase 2: Finding History

Build:

- repeated finding table
- objection rate by category
- surprise rate by category
- fix intent by category
- paid value by category

Goal:

```text
Suppress weak findings and promote strong ones.
```

### Phase 3: Benchmarks

Build:

- store type benchmarks
- industry benchmarks
- platform benchmarks
- cross-border readiness benchmarks

Goal:

```text
Make the output hard to reproduce with a generic AI tool.
```

### Phase 4: Industry Comparison

Build:

- footwear benchmark
- beauty benchmark
- jewelry benchmark
- supplements benchmark
- apparel benchmark
- digital products benchmark

Goal:

```text
Move from generic scanner to category intelligence.
```

## 8. Product Changes Required

### Free Product

Free output should show:

- top 1-3 findings
- evidence
- simple fix

Do not show:

- generic score-heavy dashboard
- too many weak findings

### Paid Product

Paid output should show:

- full findings
- benchmark comparison
- industry comparison
- finding priority
- copy-ready fixes
- monitoring history

### API Product

API should return:

- structured finding category
- evidence
- confidence
- benchmark percentile
- industry comparison
- suggested fix

API without benchmarks is easier to copy.

## 9. Build Vs Buy Decision Logic

Customers will build internally if:

- output is generic
- no benchmark exists
- findings are obvious
- there is no history
- no monitoring exists
- no integration exists

Customers will buy if:

- output is faster than internal work
- findings are validated
- benchmark data is unavailable internally
- false positives are low
- reporting is consistent
- product improves over time
- it saves team/agency time

## 10. Harsh Conclusion

### If The Product Stays As A Scanner

```text
CAUTION
```

It is copyable.

### If The Product Becomes A Validated Finding Intelligence System

```text
GO
```

The moat becomes real.

## Final CEO Judgment

```text
CAUTION, unless benchmark/finding-history moat is built.
```

The company should not assume AI output is defensible.

The defensible asset is:

```text
validated, benchmarked finding intelligence.
```

## Next Three Actions

1. During the first 10-user validation, record known/unknown, insight, action intent, paid value, and objection reason for each finding.
2. After 30 users, calculate objection rate and surprise rate by finding category.
3. After 100 scans, create the first benchmark table by store type and finding category.
