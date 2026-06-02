# Shopify Japan Readiness Scanner V1

## Purpose

Define the first practical version of `Shopify Japan Readiness Scanner`.

Audit line continues.

Scanner line is separate.

The purpose of Scanner V1 is:

```text
Convert learning from Japan Readiness Audit into automatic diagnosis.
```

## Product Concept

User enters a Shopify store URL.

Scanner returns:

1. Japan Readiness Score
2. Japan Trust Score
3. top risks
4. missing trust elements
5. priority fixes
6. short AI-generated explanation

V1 should not promise:

- legal compliance
- tax correctness
- customs correctness
- guaranteed Japan sales
- import eligibility

V1 should promise:

```text
We identify what may make Japanese buyers hesitate before purchasing from your overseas Shopify store.
```

## 1. URL-Only Diagnosis

The user submits:

```text
Store URL
```

Optional later fields:

- product category
- country
- whether the store already ships to Japan
- target market

V1 should work with URL only because lower friction matters.

### Pages To Scan

Scanner should attempt to detect and scan:

| Page Type | Why It Matters |
|---|---|
| Home page | First trust impression |
| Product pages | Product clarity, ingredients/materials, sizing, reviews |
| Shipping policy | Japan delivery, cost, timing, duties |
| Return/refund policy | International return confidence |
| FAQ | Buyer hesitation answers |
| Contact page | Support trust |
| About page | Brand credibility |
| Footer | Policy visibility and business signals |
| Cart/checkout-adjacent copy | Purchase confidence where accessible |

### URL-Only Output

V1 output:

```text
Japan Readiness Score: 0-100
Japan Trust Score: 0-100
Top 5 Issues
Priority Fixes
Evidence Snippets
Suggested Copy Improvements
```

## 2. AI-Only Diagnosable Items

These can be diagnosed mostly by AI/rules from public pages.

| Category | Item | AI-Only Feasibility |
|---|---|---:|
| Shipping | Does the store mention Japan or international shipping? | High |
| Shipping | Is delivery timing visible before checkout? | High |
| Shipping | Are shipping costs explained clearly? | Medium |
| Duties/Taxes | Are duties, taxes, DDP, or DDU responsibilities explained? | High |
| Returns | Are international returns explained? | High |
| Returns | Are return costs and conditions clear? | High |
| Support | Is contact information easy to find? | High |
| Support | Is support response expectation visible? | Medium |
| Trust | Are reviews/testimonials visible? | Medium |
| Trust | Is brand identity credible? | Medium |
| Product | Are ingredients/materials/specs clear? | High |
| Product | Are sizing/use instructions clear? | High |
| Product | Are safety/suitability notes present where relevant? | Medium |
| Localization | Is Japanese language available? | High |
| Localization | Is Japanese copy natural? | Medium |
| FAQ | Are Japan-specific questions answered? | High |
| Payment | Are payment/security cues visible? | Medium |
| Policy Visibility | Are policy links easy to find? | High |
| Buyer Hesitation | Does the site answer likely objections? | Medium |

### AI Should Use Evidence

Each finding must include:

```text
Detected issue
Evidence URL
Evidence snippet
Why it matters for Japanese buyers
Suggested fix
Severity
```

No evidence, no finding.

## 3. Diagnosis Score

### Japan Readiness Score

Overall score:

```text
0-100
```

Suggested weighting:

| Subscore | Weight |
|---|---:|
| Shipping & Delivery Clarity | 20 |
| Duties & Taxes Clarity | 15 |
| Returns & Refunds Clarity | 15 |
| Product Page Confidence | 15 |
| Contact & Support Trust | 10 |
| FAQ Coverage | 10 |
| Localization Readiness | 10 |
| Policy Visibility | 5 |

### Score Bands

| Score | Label | Meaning |
|---:|---|---|
| 80-100 | Ready | Store gives enough reassurance for a Japan-facing test |
| 60-79 | Needs Fixes | Store can test Japan, but key trust gaps may reduce conversion |
| 40-59 | Risky | Japanese buyers may hesitate before checkout |
| 0-39 | Not Ready | Major trust, policy, or clarity gaps exist |

### Severity

Each issue gets:

```text
Critical
High
Medium
Low
```

Critical examples:

- no international shipping information
- no return policy
- no contact method
- duties/taxes unclear for cross-border orders

## 4. Japan Trust Score

Japan Trust Score is separate from readiness.

Readiness answers:

```text
Can the store support Japan-facing purchase flow?
```

Trust answers:

```text
Would a cautious Japanese buyer feel safe buying from this overseas store?
```

### Trust Score Components

| Component | Weight |
|---|---:|
| Business identity clarity | 15 |
| Contact/support visibility | 15 |
| Review/social proof visibility | 15 |
| Return/refund reassurance | 15 |
| Shipping/delivery reassurance | 15 |
| Product safety/material clarity | 10 |
| Policy accessibility | 10 |
| Payment/security reassurance | 5 |

### Trust Score Output

Example:

```text
Japan Trust Score: 58/100
Label: Trust Gap

Main reason:
The store has attractive products, but Japanese buyers may hesitate because duties, returns, and support expectations are not visible before checkout.
```

## 5. Shopify App Potential

### App Fit

```text
Strong potential, but V1 should start as a web scanner.
```

Reason:

Shopify App Store adds:

- merchant discovery
- install flow
- recurring billing
- app credibility
- access to store data

But it also adds:

- review requirements
- OAuth implementation
- scope management
- App Bridge/UI requirements
- support obligations
- production-readiness bar

### When To Build Shopify App

Build Shopify app after:

1. 20+ stores scanned manually or via web prototype.
2. 5+ merchants say the score is useful.
3. 3+ merchants would pay for detailed report or monitoring.
4. Scanner rules repeat across stores.
5. AI output can be generated with low hallucination risk.

### App Version Later

Shopify App can add:

- automated weekly scan
- readiness history
- alerts when policies change
- one-click report export
- multi-market modules
- agency dashboard

## 6. MVP Specification

### MVP Goal

Produce a useful Japan Readiness + Trust scan from a store URL in under 2 minutes.

### MVP User Flow

```text
1. User enters Shopify store URL
2. Scanner crawls key public pages
3. Rule engine detects known readiness issues
4. AI writes explanations and fix suggestions
5. User sees free summary score
6. User can request/pay for detailed report
7. Human reviews first reports before delivery
```

### MVP Inputs

Required:

- store URL

Optional:

- email
- country
- product category
- already shipping to Japan: yes/no/unknown

### MVP Outputs

Free result:

- Japan Readiness Score
- Japan Trust Score
- top 3 issues
- high-level recommendation

Paid result:

- full score breakdown
- top 10 issues
- evidence links/snippets
- priority fixes
- suggested copy
- Japan buyer hesitation explanation
- PDF/exportable report

### MVP Rule Engine

First 20 rules:

1. Shipping policy page exists.
2. Japan is mentioned in shipping policy.
3. International shipping is mentioned.
4. Delivery timing is visible.
5. Duties/taxes are explained.
6. DDP/DDU responsibility is clear.
7. Return policy page exists.
8. International returns are explained.
9. Return cost responsibility is clear.
10. Contact page exists.
11. Support email/form is visible.
12. FAQ page exists.
13. FAQ includes shipping question.
14. FAQ includes returns question.
15. Product pages include material/ingredient/spec details.
16. Product pages include reviews or proof.
17. About page exists.
18. Footer includes policy links.
19. Japanese language/localization exists.
20. Payment/security reassurance is visible.

### MVP Data Model

For each scan:

```text
store_url
scan_date
detected_pages
industry_guess
readiness_score
trust_score
issues
evidence
recommendations
ai_summary
human_review_status
```

### Human Role In MVP

Human does not operate the business manually.

Human only:

- approves first report templates
- reviews edge cases
- checks hallucination risk
- approves paid report before delivery during early validation

Target human dependency after MVP:

```text
10-20%
```

### What V1 Must Not Include

Do not include:

- legal compliance scoring
- import regulation claims
- tax calculation
- customs HS-code advice
- guaranteed sales forecast
- full market entry roadmap

Those create human/legal dependency and break the autonomous-business goal.

## Relationship To Audit Line

Audit line continues for customer data.

Every Audit should feed Scanner:

| Audit Output | Scanner Use |
|---|---|
| Repeated customer concern | New rule |
| Repeated website issue | Detection pattern |
| Useful report section | AI output template |
| Buyer objection | Trust score adjustment |
| Manual fix suggestion | Recommendation library |
| Edge case | Human-review trigger |

## Final Judgment

```text
GO
```

Scanner V1 is aligned with the CEO's AI-autonomous business goal.

The correct next move is not full Shopify app development yet.

The correct next move is:

```text
Build a URL-only scanner MVP using the first 20 rules.
Use Audit data to improve scoring.
Convert to Shopify App after repeatable value is proven.
```

## Next Build File Needed

Create next:

```text
SCANNER_RULES_V1.md
```

Purpose:

Define the first 20 rules with:

- detection logic
- scoring impact
- evidence required
- AI explanation prompt
- false-positive risk
