# Revenue Risk Scoring V1

## Purpose

Redefine `Cross-Border Trust Scanner` as:

```text
Revenue Risk Scanner
```

The product no longer only says:

```text
Your store has trust gaps.
```

It says:

```text
These gaps may cause revenue loss by making buyers hesitate, abandon checkout, or avoid repeat purchase.
```

This makes the product closer to a business outcome and easier to monetize.

## Product Definition

Revenue Risk Scanner is a URL-based SaaS/API that scans ecommerce stores and identifies buyer-facing issues that may create revenue loss.

V1 focuses on cross-border ecommerce, where revenue risk often comes from:

- unclear shipping
- unclear duties/taxes
- weak return reassurance
- missing support visibility
- insufficient product confidence
- unclear business identity
- missing proof
- unanswered buyer objections

## 1. Trust Items Reorganized

### Trust Categories

| Trust Area | What It Measures | Buyer Question |
|---|---|---|
| Shipping Clarity | Whether buyers understand delivery availability, timing, and cost | Can I receive this safely and predictably? |
| Duties & Taxes Clarity | Whether extra charges are explained | Will I be surprised by extra fees? |
| Return/Refund Confidence | Whether post-purchase risk is clear | What happens if this does not work for me? |
| Support Visibility | Whether help is easy to reach | Can I contact someone if there is a problem? |
| Product Confidence | Whether product details answer purchase doubts | Do I understand what I am buying? |
| Business Identity | Whether the store looks legitimate | Who is behind this store? |
| Social Proof | Whether other buyers validate the store/product | Do other people trust this? |
| FAQ Coverage | Whether common objections are answered | Are my obvious questions answered? |
| Policy Accessibility | Whether policies are visible before purchase | Can I check the terms before paying? |
| Payment Confidence | Whether payment/security reassurance is visible | Is payment safe and familiar enough? |

### Trust Is Not The Final Output

Trust categories are internal diagnosis categories.

The customer-facing output should be framed as revenue risk:

```text
This issue may reduce conversion, increase abandonment, or block international orders.
```

## 2. Trust To Revenue Loss Conversion

### Conversion Map

| Trust Gap | Revenue Loss Mechanism | Likely Buyer Behavior |
|---|---|---|
| Shipping unclear | Buyers delay or abandon purchase | "I do not know if this ships to me." |
| Delivery timing missing | Buyers avoid time-sensitive purchases | "This might arrive too late." |
| Duties/taxes unclear | Buyers fear surprise fees | "I might get charged extra." |
| Return policy unclear | Buyers avoid risky purchase | "If it does not fit/work, I am stuck." |
| International returns missing | Cross-border buyers drop off | "This store is not set up for my country." |
| Contact/support hidden | Buyers distrust problem resolution | "No one will help me if something goes wrong." |
| Product specs incomplete | Buyers cannot decide | "I do not have enough detail." |
| Size/material/ingredient unclear | Buyers fear wrong purchase | "This may not fit or suit me." |
| No reviews/proof | Buyers lack confidence | "I do not know if this is legitimate." |
| Weak business identity | Buyers suspect low legitimacy | "Who runs this store?" |
| FAQ gaps | Buyers leave to research elsewhere | "My question is not answered." |
| Policy links hidden | Buyers cannot verify terms | "I cannot check the rules before paying." |
| Payment reassurance weak | Buyers hesitate at checkout | "Is this payment safe?" |

### Revenue Loss Types

Each detected issue should map to one or more revenue loss types:

| Revenue Loss Type | Meaning |
|---|---|
| Conversion Loss | Buyer does not add to cart or buy |
| Checkout Abandonment | Buyer starts purchase but stops before payment |
| International Order Loss | Buyer outside store's home country does not purchase |
| Repeat Purchase Loss | Buyer avoids buying again due to uncertainty |
| Support Cost Risk | Buyer confusion creates support burden |
| Refund/Dispute Risk | Ambiguous expectations increase refunds or disputes |

## 3. Revenue Risk Score Design

### Overall Score

```text
Revenue Risk Score: 0-100
```

Higher score means higher estimated revenue risk.

This is intentionally the opposite of Trust Score:

```text
High Trust Score = good
High Revenue Risk Score = bad
```

### Score Bands

| Score | Label | Meaning |
|---:|---|---|
| 0-24 | Low Risk | Store has no major buyer-confidence blockers detected |
| 25-49 | Moderate Risk | Some issues may reduce conversion or international orders |
| 50-74 | High Risk | Multiple issues may create measurable revenue loss |
| 75-100 | Critical Risk | Major buyer-confidence gaps likely block purchases |

### Risk Components

| Component | Weight | Revenue Risk |
|---|---:|---|
| Shipping & Delivery Risk | 15 | International order loss, checkout abandonment |
| Duties & Taxes Risk | 12 | Checkout abandonment, international order loss |
| Return/Refund Risk | 15 | Conversion loss, refund/dispute risk |
| Support Trust Risk | 10 | Conversion loss, support cost risk |
| Product Confidence Risk | 15 | Conversion loss |
| Business Legitimacy Risk | 10 | Conversion loss |
| Social Proof Risk | 8 | Conversion loss |
| FAQ Gap Risk | 8 | Conversion loss, support cost risk |
| Policy Access Risk | 5 | Checkout abandonment |
| Payment Confidence Risk | 2 | Checkout abandonment |

Total:

```text
100
```

### Why Payment Confidence Is Low Weight In V1

Payment confidence matters, but V1 may not reliably inspect checkout unless platform access exists.

Keep it low until the scanner can access more checkout-adjacent data.

## 4. Scoring Logic

### Finding Structure

Each issue becomes a finding:

```text
id
category
severity
evidence_url
evidence_snippet
trust_gap
revenue_loss_type
risk_points
why_it_matters
recommended_fix
```

### Severity Multipliers

| Severity | Multiplier | Meaning |
|---|---:|---|
| Critical | 1.00 | Likely blocks purchase |
| High | 0.75 | Strong hesitation risk |
| Medium | 0.50 | Noticeable friction |
| Low | 0.25 | Minor clarity issue |

### Component Score

Each component starts at 0 risk.

For each finding:

```text
component_risk += component_weight * severity_multiplier * confidence
```

Confidence:

| Confidence | Value |
|---|---:|
| Strong evidence | 1.00 |
| Medium evidence | 0.70 |
| Weak evidence | 0.40 |

No evidence:

```text
0 points
```

### Overall Formula

```text
Revenue Risk Score = min(100, sum(component_risk_points))
```

### Example

Detected:

- no international return policy: Return/Refund Risk, High, confidence 1.0
- duties/taxes unclear: Duties & Taxes Risk, High, confidence 0.7
- no visible support email/contact form: Support Trust Risk, Critical, confidence 1.0

Calculation:

```text
Return/Refund Risk: 15 * 0.75 * 1.0 = 11.25
Duties & Taxes Risk: 12 * 0.75 * 0.7 = 6.3
Support Trust Risk: 10 * 1.0 * 1.0 = 10

Subtotal risk: 27.55
```

### Rule Design

Each rule should define:

```text
rule_id
rule_name
component
detection_logic
positive_evidence
negative_evidence
default_severity
confidence_logic
revenue_loss_type
recommended_fix_template
```

### First 12 Rules

| Rule | Component | Default Severity | Revenue Loss Type |
|---|---|---|---|
| Shipping policy missing | Shipping & Delivery Risk | Critical | International Order Loss |
| International shipping unclear | Shipping & Delivery Risk | High | International Order Loss |
| Delivery timing missing | Shipping & Delivery Risk | Medium | Conversion Loss |
| Duties/taxes unclear | Duties & Taxes Risk | High | Checkout Abandonment |
| Return policy missing | Return/Refund Risk | Critical | Conversion Loss |
| International returns unclear | Return/Refund Risk | High | International Order Loss |
| Return cost responsibility unclear | Return/Refund Risk | Medium | Refund/Dispute Risk |
| Contact/support hidden | Support Trust Risk | Critical | Conversion Loss |
| Product details insufficient | Product Confidence Risk | High | Conversion Loss |
| Business identity unclear | Business Legitimacy Risk | High | Conversion Loss |
| Reviews/social proof missing | Social Proof Risk | Medium | Conversion Loss |
| FAQ missing key objections | FAQ Gap Risk | Medium | Conversion Loss |

## 5. Free Version Output Example

### Free Scan Result

```text
Revenue Risk Score: 62/100
Risk Level: High
```

### Summary

```text
Your store has several buyer-confidence gaps that may reduce international orders.

The highest-risk issues are related to international returns, duties/taxes clarity, and support visibility.
```

### Top 3 Risks

| Risk | Revenue Loss Type | Why It Matters |
|---|---|---|
| Duties/taxes responsibility is unclear | Checkout Abandonment | Buyers may fear surprise fees before payment. |
| International returns are not clearly explained | Conversion Loss | Cross-border buyers may avoid purchasing if they feel stuck after purchase. |
| Contact/support is hard to find | Conversion Loss | Buyers may distrust the store if help is not visible. |

### Free CTA

```text
Unlock the full report to see all detected revenue risks, evidence links, and recommended fixes.
```

### Free Version Limits

Free version should show:

- score
- risk level
- top 3 issues
- limited explanation
- no full evidence table
- no copy suggestions
- no PDF export
- no monitoring

## 6. Paid Version Output Example

### Paid Report Header

```text
Revenue Risk Report
Store: example-store.com
Scan Date: 2026-06-03
Revenue Risk Score: 62/100
Risk Level: High
```

### Full Score Breakdown

| Component | Risk Points | Status |
|---|---:|---|
| Shipping & Delivery Risk | 9/15 | Moderate |
| Duties & Taxes Risk | 8/12 | High |
| Return/Refund Risk | 12/15 | High |
| Support Trust Risk | 10/10 | Critical |
| Product Confidence Risk | 7/15 | Moderate |
| Business Legitimacy Risk | 4/10 | Moderate |
| Social Proof Risk | 5/8 | Moderate |
| FAQ Gap Risk | 5/8 | Moderate |
| Policy Access Risk | 3/5 | Moderate |
| Payment Confidence Risk | 1/2 | Low |

### Finding Example

```text
Issue:
International return conditions are unclear.

Severity:
High

Revenue Loss Type:
Conversion Loss / International Order Loss

Evidence:
Return policy page does not mention international returns or who pays return shipping.

Why it matters:
Cross-border buyers often hesitate when they do not know what happens if the product does not fit, arrives late, or needs to be returned.

Recommended fix:
Add a short international returns section explaining eligibility, return window, return shipping cost responsibility, and refund timing.

Suggested copy:
"International customers may request a return within 14 days of delivery. Return shipping costs are the responsibility of the customer unless the item arrives damaged or incorrect. Refunds are issued after the returned item is received and inspected."
```

### Paid Report Sections

Paid report should include:

1. Executive summary
2. Revenue Risk Score
3. score breakdown
4. top 10 revenue risks
5. evidence table
6. recommended fixes
7. suggested copy blocks
8. priority order
9. before/after checklist
10. monitoring CTA

### Paid CTA

```text
Track these risks monthly and get alerts when policy, shipping, or product-page changes increase revenue risk.
```

## V1 Positioning

Best product sentence:

```text
Revenue Risk Scanner finds buyer-confidence gaps that may be costing your ecommerce store sales.
```

Avoid:

```text
AI trust audit
```

Reason:

Merchants pay for revenue protection and conversion improvement, not abstract trust.

## Final Decision

```text
Cross-Border Store Trust Scanner should be renamed and positioned as Revenue Risk Scanner.
```

Internal engine:

```text
trust gap detection
```

Customer-facing output:

```text
revenue risk and lost-sales prevention
```

This is a stronger business framing because it connects diagnosis to money.
