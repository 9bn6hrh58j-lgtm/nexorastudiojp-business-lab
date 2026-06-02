# Positioning Decision V1

## Purpose

Reduce development priority for the current Revenue Risk Scanner MVP and validate the market hypothesis first.

Compare three positioning options:

```text
A: Cross-Border Trust Scanner
B: Cross-Border Revenue Risk Scanner
C: Cross-Border Revenue Recovery Scanner
```

This document decides which positioning is easiest for customers to understand, most likely to justify payment, and most compatible with an AI-led SaaS/API business.

## Evaluation Summary

| Option | Customer Clarity | Reason To Pay Now | AI-Led Fit | SaaS Fit | API Fit | JPY 1M Difficulty | Differentiation | Overall |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| A: Cross-Border Trust Scanner | 3 | 2 | 5 | 5 | 5 | 3 | 3 | 26 |
| B: Cross-Border Revenue Risk Scanner | 4 | 4 | 5 | 5 | 5 | 4 | 4 | 31 |
| C: Cross-Border Revenue Recovery Scanner | 4 | 5 | 3 | 4 | 3 | 4 | 4 | 27 |

Score:

```text
5 = strongest
1 = weakest
```

## Recommendation

```text
Choose B: Cross-Border Revenue Risk Scanner
```

Reason:

It connects the technical scan to money without overpromising recovery.

It is stronger than `Trust Scanner` because merchants do not primarily buy trust. They buy revenue protection, conversion improvement, and fewer lost orders.

It is safer than `Revenue Recovery Scanner` because recovery implies the product can recover lost revenue, which is harder to prove and may require deeper analytics, abandoned cart data, email flows, ads, or retention data.

## A. Cross-Border Trust Scanner

### What Customers Understand

Customers may understand that "trust" matters, but it is abstract.

Likely reaction:

```text
Trust sounds important, but is this urgent?
```

### 1. Customer Clarity

```text
3/5
```

Clear enough for ecommerce operators, but weaker for founders who think in revenue, conversion, and order volume.

### 2. Reason To Pay Now

```text
2/5
```

Trust is valuable, but not always urgent.

The buyer may delay because "trust improvement" feels like brand polish rather than revenue leakage.

### 3. AI-Led Operation Fit

```text
5/5
```

Very AI-friendly:

- public page scan
- policy clarity check
- FAQ gap detection
- product page review
- evidence-based scoring

### 4. SaaS Fit

```text
5/5
```

Can become:

- scanner
- monthly monitoring
- Shopify app
- agency dashboard

### 5. API Fit

```text
5/5
```

URL-in, trust-score-out is clean.

### 6. JPY 1M Difficulty

```text
3/5
```

Possible, but may require education because the buyer must believe trust gaps map to revenue loss.

### 7. Differentiation

```text
3/5
```

Better than generic CRO, but still sounds close to UX/CRO/audit tools.

### Verdict

```text
CAUTION
```

Good internal engine name, weak customer-facing positioning.

## B. Cross-Border Revenue Risk Scanner

### What Customers Understand

Customers can understand:

```text
My store may be losing international revenue because buyers hesitate.
```

This is more concrete than trust and less aggressive than recovery.

### 1. Customer Clarity

```text
4/5
```

The phrase "Revenue Risk" clearly points to money at risk.

Potential weakness:

Some merchants may ask, "How do you know revenue is at risk without analytics?"

The answer:

```text
We identify buyer-facing risk signals, not exact lost revenue.
```

### 2. Reason To Pay Now

```text
4/5
```

If a store is running ads, shipping internationally, or planning expansion, revenue risk is urgent.

It frames the product as:

- conversion protection
- lost-order prevention
- international buyer friction detection

### 3. AI-Led Operation Fit

```text
5/5
```

Strong fit.

AI/rules can detect:

- unclear shipping
- missing duties/taxes clarity
- return ambiguity
- hidden support
- missing FAQ answers
- weak product confidence

### 4. SaaS Fit

```text
5/5
```

Natural SaaS:

- free scan
- paid full report
- monthly monitoring
- risk alerts
- score history

### 5. API Fit

```text
5/5
```

Strong API:

```json
{
  "url": "https://example-store.com",
  "revenue_risk_score": 62,
  "risk_level": "High",
  "findings": []
}
```

### 6. JPY 1M Difficulty

```text
4/5
```

More plausible than Trust Scanner because pricing can tie to revenue protection.

Possible paths:

- 150 customers at about $49/month
- 70 customers at about $99/month
- 35 agency/API customers at about $199/month

### 7. Differentiation

```text
4/5
```

Differentiates from:

- generic SEO scanners
- generic CRO tools
- trust badge apps
- policy generators

Specific positioning:

```text
Find buyer-facing revenue risks in cross-border ecommerce.
```

### Verdict

```text
GO
```

Best balance of clarity, urgency, AI automation, SaaS/API fit, and proof safety.

## C. Cross-Border Revenue Recovery Scanner

### What Customers Understand

Customers like "revenue recovery" because it sounds directly tied to money.

Likely reaction:

```text
Can this recover lost sales for me?
```

That is powerful, but risky.

### 1. Customer Clarity

```text
4/5
```

Very understandable, but may imply deeper functionality than V1 has.

### 2. Reason To Pay Now

```text
5/5
```

Strongest urgency. Recovery sounds like money is already being lost.

### 3. AI-Led Operation Fit

```text
3/5
```

Recovery usually implies action, not diagnosis.

It may require:

- abandoned cart data
- email/SMS recovery
- discount workflows
- analytics integration
- A/B testing
- post-scan automation

That increases implementation and data-dependency.

### 4. SaaS Fit

```text
4/5
```

Good SaaS potential, but scope expands quickly.

### 5. API Fit

```text
3/5
```

API is possible, but "recovery" needs action APIs or integrations, not just scan results.

### 6. JPY 1M Difficulty

```text
4/5
```

Customers may pay more if recovery is credible.

But credibility requires proof and integrations.

### 7. Differentiation

```text
4/5
```

Differentiated, but moves toward abandoned-cart/revenue-recovery competitors.

### Verdict

```text
CAUTION
```

Good future upsell, but too strong for V1.

Use later as:

```text
Revenue Recovery Recommendations
```

not the core product name now.

## Final Positioning Decision

### Customer-Facing Name

```text
Cross-Border Revenue Risk Scanner
```

### Short Description

```text
Find buyer-facing revenue risks that may be costing your ecommerce store international orders.
```

### Internal Engine

```text
Trust gap detection
```

### Customer Output

```text
Revenue Risk Score
Top revenue risks
Recommended fixes
```

## Messaging Rules

Use:

```text
revenue risk
lost orders
buyer hesitation
checkout abandonment risk
international buyer friction
```

Avoid:

```text
guaranteed recovery
guaranteed revenue lift
exact lost revenue
legal compliance
tax compliance
market entry consulting
```

## Delegation Decision

### Should This Go To Codex CLI?

```text
No, not yet.
```

Reason:

This is positioning validation, not implementation.

Codex CLI already has ongoing implementation changes under:

```text
apps/revenue-risk-scanner
```

Do not add more implementation churn until positioning is approved.

### Should This Go To Claude Code?

```text
不要
```

Reason:

- This is not a final customer-facing page.
- This is not a code review.
- Claude usage should be preserved.
- The decision can be made from current business reasoning.

### Should It Be Held In Codex Chat?

```text
Yes.
```

Codex Chat should own the positioning decision and only hand off implementation after CEO approval.

## Next Step

After CEO approval:

1. Update product docs from `Revenue Risk Scanner` to `Cross-Border Revenue Risk Scanner`.
2. Keep V1 output focused on `Revenue Risk Score`.
3. Do not use `Revenue Recovery` until the product can trigger or recommend concrete recovery actions.

## CEO Decision

```text
GO: Cross-Border Revenue Risk Scanner
CAUTION: Cross-Border Revenue Recovery Scanner
STOP AS CUSTOMER-FACING NAME: Cross-Border Trust Scanner
```
