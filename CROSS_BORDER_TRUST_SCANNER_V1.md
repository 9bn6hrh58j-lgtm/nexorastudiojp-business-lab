# Cross-Border Store Trust Scanner V1

## Purpose

Define the first version of the main business candidate:

```text
Cross-Border Store Trust Scanner
```

CEO goal:

```text
Build an AI-led business.
Human role is final approval only.
```

`Japan Readiness Audit` is no longer the main business. It remains as a learning-data line that helps create scanner rules, examples, and scoring logic.

## Executive Summary

Cross-Border Store Trust Scanner is a URL-based SaaS/API that scans ecommerce stores and identifies what may stop international buyers from trusting the store before purchase.

The product should start with ecommerce/DTC stores and later become:

- SaaS
- API
- Shopify app
- agency dashboard
- monitoring product

The wedge:

```text
Find what stops international buyers from trusting your store.
```

Not:

```text
We consult on global expansion.
```

## 1. Who Uses It

### Primary Users

| User | Why They Use It | Buying Trigger |
|---|---|---|
| Shopify / DTC founders | They want to sell internationally but do not know what blocks trust | Preparing international shipping or global ads |
| Ecommerce managers | They need a checklist of buyer-confidence gaps | Conversion drop-off or low international sales |
| Growth marketers | They want pre-ad fixes before spending on traffic | Before launching campaigns to new markets |
| Ecommerce agencies | They need repeatable audits for clients | Client onboarding or CRO retainers |
| Localization agencies | They need trust and policy gaps beyond translation | Before/after translation QA |

### Best First User

```text
Small-to-mid Shopify/DTC brand already shipping internationally or planning to.
```

Reason:

- pain is concrete
- website is public
- decision maker is reachable
- trust gaps are visible
- product can produce value without deep integration

### Bad First Users

Avoid at V1:

- large enterprise ecommerce
- heavily regulated products
- marketplaces without one clear store owner
- stores that sell only domestically
- stores that need legal/import advice

## 2. URL Input Flow

### User Flow

```text
1. User enters store URL.
2. Scanner detects ecommerce platform and public pages.
3. Scanner crawls key pages.
4. Rule engine detects trust gaps.
5. AI explains findings with evidence.
6. Scanner generates Trust Score.
7. User receives free summary.
8. User can pay for full report or monitoring.
```

### Pages To Crawl

| Page | Purpose |
|---|---|
| Home page | First trust impression |
| Product pages | Product clarity and purchase confidence |
| Shipping policy | Delivery, international shipping, duties/taxes |
| Return/refund policy | Post-purchase risk reduction |
| FAQ | Buyer objections and clarity |
| Contact page | Support visibility |
| About page | Business credibility |
| Footer | Policy accessibility |
| Reviews/testimonials | Social proof |
| Collection/category pages | Product range clarity |

### Required Input

```text
Store URL
```

### Optional Inputs

- target country
- product category
- store country
- email
- ecommerce platform

V1 should work with URL only. Optional fields should improve accuracy but not block the scan.

## 3. AI Diagnosis Items

### Diagnosable By Rules + AI

| Area | Diagnosis |
|---|---|
| Shipping clarity | Is international shipping visible and understandable? |
| Delivery expectations | Are delivery times or shipping methods clear? |
| Duties/taxes | Are import duties, taxes, DDP/DDU, or buyer responsibility explained? |
| Returns/refunds | Are return windows, costs, and international returns clear? |
| Contact/support | Can a buyer easily find help before purchase? |
| Business identity | Does the store explain who operates it? |
| Product clarity | Are specs, size, materials, ingredients, or usage clear? |
| Safety/suitability | Are category-specific concerns addressed? |
| Trust proof | Are reviews, guarantees, certifications, or press visible? |
| FAQ coverage | Are likely buyer objections answered? |
| Policy visibility | Are policies easy to find before checkout? |
| Payment confidence | Are secure payment and accepted payment methods clear? |
| Localization | Is the target-market experience understandable? |
| Mobile friction | Are key trust elements visible on mobile pages? |
| Cross-border objection gaps | What questions would an overseas buyer still have? |

### AI Output Rule

AI must not create findings without evidence.

Each finding needs:

```text
issue
severity
evidence URL
evidence snippet
why it matters
recommended fix
```

### Explicitly Out Of Scope

The scanner must not claim to diagnose:

- legal compliance
- tax correctness
- customs classification
- import eligibility
- product safety legality
- guaranteed conversion lift
- guaranteed international sales

This keeps the product automatable and reduces human/legal dependency.

## 4. Trust Score

### Overall Score

```text
Cross-Border Trust Score: 0-100
```

### Score Components

| Component | Weight |
|---|---:|
| Shipping & Delivery Clarity | 15 |
| Duties & Taxes Clarity | 12 |
| Returns & Refunds Clarity | 15 |
| Contact & Support Trust | 12 |
| Product Page Confidence | 15 |
| Business Identity | 10 |
| Social Proof & Guarantees | 8 |
| FAQ / Objection Coverage | 8 |
| Policy Visibility | 5 |

### Score Bands

| Score | Label | Meaning |
|---:|---|---|
| 80-100 | High Trust | Store gives enough reassurance for international buyers |
| 60-79 | Trust Gaps | Store is usable, but important doubts remain |
| 40-59 | Risky | Buyers may hesitate before checkout |
| 0-39 | Low Trust | Major trust and policy gaps likely block purchases |

### Country Modules

V1 can use a global cross-border score.

Then add modules:

- Japan Trust Module
- EU Trust Module
- US Trust Module
- Australia Trust Module

Japan module can be first because Audit learnings already exist.

## 5. Output Report

### Free Summary

The free scan should show:

- Cross-Border Trust Score
- top 3 issues
- one evidence snippet
- one suggested fix
- email capture / account creation CTA

### Paid Report

The paid report should include:

- full score breakdown
- top 10 issues
- severity ranking
- evidence links/snippets
- recommended fixes
- suggested policy/FAQ copy
- product-page trust recommendations
- target-country notes if selected
- PDF/export option

### Monitoring Output

Paid monitoring should include:

- monthly rescan
- score history
- new risk alerts
- policy-change alerts
- fixed/unfixed issue tracking

## 6. Competitors

### Direct / Adjacent Competitor Types

| Competitor Type | Examples | Threat |
|---|---|---|
| CRO audit tools | landing page/product page optimizers | They may claim conversion diagnosis |
| SEO/site audit tools | Semrush, Ahrefs-style site auditors | Strong distribution, but not trust-specific |
| Accessibility/performance scanners | Lighthouse-style tooling | Automatable scan expectation already exists |
| Policy generators | Shopify policy tools, legal template tools | Compete on policy pages |
| Translation/localization tools | Weglot/Lokalise-style tools | Adjacent to localization readiness |
| Review analytics tools | Review mining platforms | Compete on objection insights |
| Shopify CRO apps | store optimization apps | Could expand into trust scanning |

### Differentiation

The product should not compete as a generic CRO tool.

It should own:

```text
cross-border buyer trust
```

Specific angle:

- duties/taxes clarity
- international return reassurance
- cross-border support trust
- market-specific buyer hesitation
- policy visibility before checkout
- evidence-based score

### Main Competitive Risk

The feature is easy to copy if it is only "AI audits your store."

The moat must become:

- trust scoring dataset
- repeatable rulebase
- ecommerce category patterns
- country modules
- monitoring history
- API integrations
- Shopify app distribution

## 7. MVP

### MVP Goal

Produce a useful trust scan from a store URL in under 2 minutes.

### MVP Scope

V1 should include:

1. URL input
2. public page crawler
3. first 20 trust rules
4. LLM explanation layer
5. score generation
6. free summary page
7. paid report placeholder or manual payment link
8. scan result database

### First 20 Rules

1. Shipping policy page exists.
2. International shipping is mentioned.
3. Target country is mentioned if selected.
4. Delivery timing is visible.
5. Duties/taxes are explained.
6. DDP/DDU or buyer responsibility is clear.
7. Return policy page exists.
8. International returns are explained.
9. Return shipping cost responsibility is clear.
10. Refund timing is explained.
11. Contact page exists.
12. Support email/form is visible.
13. About page exists.
14. Product pages include key specs/materials/ingredients.
15. Product pages include reviews or proof.
16. FAQ page exists.
17. FAQ answers shipping.
18. FAQ answers returns.
19. Footer includes policy links.
20. Payment/security reassurance is visible.

### MVP Success Criteria

```text
10 stores scanned
5 users say the output is useful
3 users request a full report
1 user pays or agrees to pay
```

## 8. Revenue Model

### Recommended Pricing

| Offer | Price | Role |
|---|---:|---|
| Free Scan | $0 | Acquisition |
| Detailed Report | $49-$99 | First revenue |
| Monthly Monitoring | $29-$79/month | Recurring revenue |
| Agency Plan | $199/month | Higher ARPU |
| API | Usage-based | Scale channel |

### Best Initial Model

Start with:

```text
Free scan -> paid detailed report
```

Then add:

```text
monthly monitoring
```

Do not rely only on one-time reports. One-time reports require constant acquisition.

## 9. Path To JPY 1M/Month

Assume JPY 1M/month is roughly USD $6,500-$7,000 depending on FX.

### Possible Paths

| Model | Requirement |
|---|---|
| $49 one-time report | 140-150 purchases/month |
| $99 one-time report | 70-75 purchases/month |
| $29/month monitoring | 225-245 subscribers |
| $49/month monitoring | 135-145 subscribers |
| $79/month monitoring | 85-90 subscribers |
| $199/month agency plan | 33-36 customers |
| API at $499/month | 14-15 customers |

### Best Path

Most realistic path:

```text
Free scan
-> $49-$99 detailed report
-> $49/month monitoring
-> $199/month agency plan
-> API plan
```

### Hard Judgment

The business will not reach JPY 1M/month if it stays as one-off reports only.

It needs:

- recurring monitoring
- agency accounts
- API usage
- Shopify/app distribution

## 10. Human Dependency Rate

### V1 Human Dependency

```text
20-30%
```

Why:

- early reports need QA
- rules need tuning
- edge cases need review
- pricing/positioning needs validation

### Target Human Dependency

```text
5-15%
```

Human should only:

- review flagged edge cases
- approve high-risk report sections
- update rulebase
- decide product direction

Human should not:

- manually prospect
- manually diagnose every store
- manually write reports from scratch
- manually handle routine delivery

## 11. AI Autonomy Rate

### V1 AI Autonomy

```text
70-80%
```

AI/rules handle:

- crawling interpretation
- issue detection
- score drafting
- explanation writing
- recommendation generation
- report drafting

### Target AI Autonomy

```text
85-95%
```

Achieved by:

- deterministic rules
- evidence-required findings
- reusable recommendation library
- automated report generation
- automated payment/delivery
- automated rescans
- exception-only human review

## Final Judgment

```text
GO
```

This is a better main business than `Japan Readiness Audit`.

Reason:

- AI can operate most of it.
- SaaS and API paths are natural.
- Sales can be shifted toward inbound/free scan/app distribution.
- Audit learnings can become rules and data.
- Monthly recurring revenue is possible.

## Next File

Codex CLI should create:

```text
CROSS_BORDER_TRUST_SCANNER_ARCHITECTURE.md
```

Required contents:

- technical stack
- APIs
- crawling architecture
- LLM usage points
- data model
- MVP build order
- risk controls
