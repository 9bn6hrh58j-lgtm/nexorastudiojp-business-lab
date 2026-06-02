# Site Validation Plan V1

## Purpose

Run Revenue Risk Scanner scoring against 50 real Shopify/DTC sites to:

1. Validate that the 12 rules in REVENUE_RISK_SCORING_V1.md produce consistent, meaningful scores.
2. Identify rule gaps, scoring edge cases, and calibration needs.
3. Build a reference dataset of scored sites across industries.
4. Produce proof-of-concept reports that can be shared with prospects.

This is not market research. This is scoring system validation.

---

## 1. Site Selection Criteria

### Must-Have Criteria (all 50 sites)

| Criterion | Reason |
|---|---|
| Live website with product pages accessible without login | Scanner must be able to read the site |
| Ships internationally or has a plausible cross-border audience | V1 focuses on cross-border revenue risk |
| Has a return/shipping/FAQ policy page (even if weak) | Tests policy detection rules |
| English-language primary or English version available | V1 scoring framework is in English |
| Sells physical products or digital downloads | Excludes pure service businesses from V1 |

### Preferred Criteria (for richer scoring variance)

- Mix of high and low trust signal density (to test both extremes)
- Mix of large brands (known trust signals) and small DTC brands (common gaps)
- Mix of industries (to validate rule applicability across contexts)
- Some sites with known Japan shipping pages (to test Japan-specific signals)

### Exclusion Criteria

- Sites requiring account login to view products
- Sites with no public shipping or return policy
- Purely B2B or wholesale-only stores
- Sites that are in maintenance or soft-launch
- Sites where the URL redirects to a marketplace (e.g., Amazon storefront only)

---

## 2. Industry Classification

Target distribution across 50 sites:

| Industry | Count | Reason |
|---|---:|---|
| Skincare / Beauty / Wellness | 10 | High Japan relevance; ingredient/safety trust signals; strong cross-border demand |
| Fashion / Apparel / Footwear | 8 | Size/fit trust gaps; return policy critical; high volume segment |
| Home Goods / Lifestyle / Interior | 7 | Shipping fragility signals; dimensions/materials clarity |
| Food / Supplements / Nutrition | 6 | Ingredients/allergens trust; customs/import rules; safety signals |
| Pet Products | 5 | Ingredient/safety trust; international shipping complexity |
| Stationery / Paper / Gift | 5 | Japan affinity category; duty/shipping clarity |
| Accessories / Jewelry / Bags | 5 | Material/size trust gaps; return concerns |
| Digital Products / SaaS / Templates | 4 | Control group: different trust profile, lower shipping risk |

Total: 50

---

## 3. Site Discovery Sources

Use these sources to find qualifying sites:

| Source | Type |
|---|---|
| Shopify store directories (myip.ms, shopify.com/examples) | Shopify-native sites |
| Target company lists from TARGET_100_COMPANIES.md | Pre-qualified outreach targets |
| Product Hunt (filter: ecommerce, shipped products) | Small DTC brands |
| Instagram / TikTok DTC brands with international shipping mentions | High-engagement DTC |
| Gumroad / Shopify free trial stores (digital products) | Digital product control group |
| Known brands shipping to Japan (check shipping FAQ for Japan mention) | Japan-specific validation |

---

## 4. Diagnosis Items

Apply all 12 V1 rules to each site. Record findings per rule.

### Rule Checklist

| Rule ID | Rule Name | Component | Default Severity |
|---|---|---|---|
| R01 | Shipping policy missing | Shipping & Delivery Risk | Critical |
| R02 | International shipping unclear | Shipping & Delivery Risk | High |
| R03 | Delivery timing missing | Shipping & Delivery Risk | Medium |
| R04 | Duties/taxes unclear | Duties & Taxes Risk | High |
| R05 | Return policy missing | Return/Refund Risk | Critical |
| R06 | International returns unclear | Return/Refund Risk | High |
| R07 | Return cost responsibility unclear | Return/Refund Risk | Medium |
| R08 | Contact/support hidden | Support Trust Risk | Critical |
| R09 | Product details insufficient | Product Confidence Risk | High |
| R10 | Business identity unclear | Business Legitimacy Risk | High |
| R11 | Reviews/social proof missing | Social Proof Risk | Medium |
| R12 | FAQ missing key objections | FAQ Gap Risk | Medium |

### Additional Japan-Specific Signals (bonus check, not scored in V1)

| Signal | What to look for |
|---|---|
| Japan shipping explicitly mentioned | "Ships to Japan" on shipping page |
| Japan customs/duties explained | Duties and import tax info for Japan |
| Japanese language support mentioned | Japanese support email/chat available |
| Payment methods for Japan | PayPay, konbini, bank transfer mentioned |

---

## 5. Data to Collect Per Site

Record each field for all 50 sites in a structured spreadsheet.

### Site Metadata

| Field | Format | Notes |
|---|---|---|
| site_id | S001–S050 | Sequential ID |
| url | https://... | Root domain or product page URL |
| industry | Category from Section 2 | |
| platform | Shopify / Other | Confirm via page source or Wappalyzer |
| ships_to_japan | Yes / No / Unknown | Check shipping page or FAQ |
| site_size_signal | Small / Medium / Large | Estimated by review count + product count |

### Scoring Data

| Field | Format | Notes |
|---|---|---|
| revenue_risk_score | 0–100 | Calculated from component scores |
| risk_level | Low / Moderate / High / Critical | Per score band |
| findings_count | Integer | Total number of issues found |
| critical_count | Integer | Issues with Critical severity |
| high_count | Integer | Issues with High severity |
| medium_count | Integer | Issues with Medium severity |

### Component Scores

Record a risk_points value (0 to component max) for each of the 10 components:

- shipping_delivery_risk (max 15)
- duties_taxes_risk (max 12)
- return_refund_risk (max 15)
- support_trust_risk (max 10)
- product_confidence_risk (max 15)
- business_legitimacy_risk (max 10)
- social_proof_risk (max 8)
- faq_gap_risk (max 8)
- policy_access_risk (max 5)
- payment_confidence_risk (max 2)

### Evidence Data

For each finding, record:

| Field | Format |
|---|---|
| rule_id | R01–R12 |
| severity | Critical / High / Medium / Low |
| confidence | 1.0 / 0.7 / 0.4 |
| evidence_url | Direct URL to the page where the gap was found |
| evidence_snippet | Quoted text or "absent" if the element is missing |
| revenue_loss_type | From the Revenue Loss Type table |

### Analyst Notes

| Field | Notes |
|---|---|
| diagnosis_time_minutes | Time taken per site (target: under 15 min/site) |
| rule_ambiguity_notes | Cases where a rule was hard to apply |
| japan_notes | Any Japan-specific observations beyond the 12 rules |

---

## 6. Good Diagnosis Example

### Site Profile

```
site_id: S011
url: https://northember.example.com
industry: Skincare / Beauty
platform: Shopify
ships_to_japan: Unknown (no explicit Japan mention)
site_size_signal: Small
```

### Score

```
Revenue Risk Score: 58/100
Risk Level: High
Findings: 7 issues (2 Critical, 3 High, 2 Medium)
```

### Component Breakdown

| Component | Risk Points | Status |
|---|---:|---|
| Shipping & Delivery Risk | 8/15 | Moderate |
| Duties & Taxes Risk | 10/12 | High |
| Return/Refund Risk | 11/15 | High |
| Support Trust Risk | 10/10 | Critical |
| Product Confidence Risk | 6/15 | Low |
| Business Legitimacy Risk | 5/10 | Moderate |
| Social Proof Risk | 5/8 | Moderate |
| FAQ Gap Risk | 4/8 | Moderate |
| Policy Access Risk | 2/5 | Low |
| Payment Confidence Risk | 1/2 | Low |

### Top Findings

**Finding 1**

```
rule_id: R08 (Contact/support hidden)
severity: Critical
confidence: 1.0
evidence_url: https://northember.example.com/pages/faq
evidence_snippet: No email address, contact form, or chat widget found anywhere on the site.
revenue_loss_type: Conversion Loss
risk_points: 10 * 1.0 * 1.0 = 10.0
why_it_matters: Buyers from international markets need to know that help is available if a problem occurs. No visible contact path signals that disputes will be difficult to resolve.
recommended_fix: Add a support email address or contact form link in the site footer, FAQ page, and order confirmation page.
```

**Finding 2**

```
rule_id: R04 (Duties/taxes unclear)
severity: High
confidence: 0.7
evidence_url: https://northember.example.com/pages/shipping
evidence_snippet: "Free international shipping on orders over $75." No mention of customs duties, import taxes, or who pays fees on arrival.
revenue_loss_type: Checkout Abandonment
risk_points: 12 * 0.75 * 0.7 = 6.3
why_it_matters: Buyers who do not see a clear answer about additional fees at delivery may abandon checkout to avoid surprise costs.
recommended_fix: Add one sentence to the shipping page: "Buyers are responsible for any local customs duties or import taxes upon delivery. Charges vary by country."
```

**Finding 3**

```
rule_id: R06 (International returns unclear)
severity: High
confidence: 1.0
evidence_url: https://northember.example.com/pages/returns
evidence_snippet: "Returns accepted within 30 days." No mention of international return eligibility, return shipping cost, or refund timeline for overseas orders.
revenue_loss_type: International Order Loss
risk_points: 15 * 0.75 * 1.0 = 11.25
why_it_matters: Cross-border buyers carry higher purchase anxiety. Without explicit international return information, many will not take the risk.
recommended_fix: Add a paragraph specifically for international buyers explaining return eligibility window, who pays return shipping, and expected refund timing.
```

### What Makes This a Good Diagnosis

- Evidence snippets are quoted directly from the page, not assumed.
- Each finding maps to exactly one rule, one severity, and one confidence level.
- Revenue loss type is specific to the mechanism, not generic.
- Recommended fix is actionable and copy-ready.
- Score reflects severity and weight accurately — Support Trust (Critical, weight 10) dominates.
- Japan-specific note: No Japan shipping mention detected. Site likely loses cross-border buyers silently.

---

## 7. Bad Diagnosis Example

The following illustrates a low-quality scan that should be rejected during quality review.

### Site Profile (same site)

```
site_id: S011
url: https://northember.example.com
```

### Score

```
Revenue Risk Score: 85/100
Risk Level: Critical
```

### Bad Findings (Do Not Use)

**Bad Finding 1**

```
rule_id: R09 (Product details insufficient)
severity: Critical
evidence_snippet: "The product page could have more information."
```

Problems:
- Severity marked Critical with no evidence that details are actually insufficient.
- Evidence snippet is analyst opinion, not page content.
- No evidence URL pointing to the specific product page reviewed.

**Bad Finding 2**

```
rule_id: R11 (Reviews/social proof missing)
severity: Critical
evidence_snippet: "No reviews visible."
confidence: 1.0
```

Problems:
- Reviews may be present on other product pages not checked.
- Default severity for R11 is Medium, not Critical. An upgrade to Critical requires specific evidence of zero reviews across the full product catalog.
- Overuse of Critical inflates the score and reduces credibility.

**Bad Finding 3**

```
rule_id: R04 (Duties/taxes unclear)
severity: High
confidence: 1.0
evidence_snippet: "Possibly unclear."
```

Problems:
- Confidence of 1.0 with no quoted evidence and a hedged phrase ("possibly") is contradictory.
- "Possibly unclear" is not a finding. It is uncertainty.
- The analyst should either find the evidence or assign confidence 0.4 (weak evidence) with a note.

### What Makes This a Bad Diagnosis

- Score of 85 is not justified by the evidence. Inflated scoring with weak evidence is the most common error.
- Critical severity is assigned without meeting the escalation standard.
- Evidence snippets are analyst opinion rather than page quotes.
- Confidence values do not match the quality of evidence cited.

### Bad Diagnosis Prevention Rules

1. Never assign Critical severity without quoting the exact page element that is missing or broken.
2. Never mark confidence 1.0 unless the element is definitively absent or definitively present.
3. Never override default severity without a written justification in the evidence field.
4. Always record an evidence_url. If no URL is available, record "absent from all checked pages" and use confidence 0.7 or lower.
5. Target score inflation: if a site scores above 70, manually verify that at least 2 Critical-severity findings are present with strong evidence.

---

## 8. Free Summary Template (Customer-Facing)

This is the output shown to a site owner who runs a free scan.

---

**Revenue Risk Scan**
**Store:** [store domain]
**Scan date:** [date]

---

**Revenue Risk Score: [X]/100**
**Risk Level: [Low / Moderate / High / Critical]**

---

**What this means**

[Conditional paragraph based on score band]

Score 0–24:
```
Your store has no major buyer-confidence blockers detected for cross-border customers.
A small number of clarity improvements may help reduce hesitation for international buyers.
```

Score 25–49:
```
Your store has some buyer-confidence gaps that may reduce international orders or increase checkout abandonment.
The issues below are the most likely to affect purchase decisions.
```

Score 50–74:
```
Your store has several buyer-confidence gaps that may be reducing international conversion.
The issues below include problems that commonly cause hesitation, checkout abandonment, or lost international orders.
```

Score 75–100:
```
Your store has significant buyer-confidence gaps that are likely blocking purchases, particularly from international customers.
The issues below need attention before active international promotion or paid traffic.
```

---

**Top 3 Revenue Risks**

| # | Issue | Likely Impact |
|---|---|---|
| 1 | [Issue name] | [Revenue Loss Type] |
| 2 | [Issue name] | [Revenue Loss Type] |
| 3 | [Issue name] | [Revenue Loss Type] |

---

**Why these matter**

[Issue 1]: [One sentence on buyer behavior / revenue mechanism]

[Issue 2]: [One sentence on buyer behavior / revenue mechanism]

[Issue 3]: [One sentence on buyer behavior / revenue mechanism]

---

**What the full report includes**

- All [N] detected revenue risks with evidence links
- Component-by-component score breakdown
- Recommended fixes for each issue
- Suggested copy blocks ready to use
- Priority order for implementation

---

**[Unlock full report — $49]**

---

### Free Summary Design Rules

- Score and risk level are always shown. No gating on the number.
- Top 3 issues are shown by name only. No evidence URLs, no copy suggestions, no recommended fixes.
- Revenue loss type is shown (Checkout Abandonment, International Order Loss, etc.) to connect to money.
- Language is outcome-focused. Never say "your site looks bad." Say "this may reduce conversion."
- CTA is single: unlock the full report. No secondary actions.
- Do not mention Japan specifically in the free summary unless the store has a visible Japan connection. Keep it general cross-border framing.

---

## 9. Validation Workflow

### Phase 1: Setup (before scanning)

1. Copy the scoring spreadsheet template.
2. Confirm all 50 sites are accessible and meet Must-Have Criteria.
3. Document any sites that fail qualification and replace with alternates.

### Phase 2: Scanning (per site, target 10–15 minutes)

1. Open root URL. Screenshot the homepage.
2. Locate shipping policy page. Apply R01, R02, R03.
3. Locate return/refund page. Apply R05, R06, R07.
4. Check for duties/customs mention. Apply R04.
5. Check contact/support visibility. Apply R08.
6. Review one core product page. Apply R09.
7. Check footer, about, and homepage. Apply R10, R11.
8. Review FAQ if present. Apply R12.
9. Calculate component scores and total Revenue Risk Score.
10. Write the free summary output.

### Phase 3: Quality Review

After completing all 50 sites:

1. Review all Critical findings. Confirm each has strong evidence (confidence 1.0) with quoted page text.
2. Review all sites with score above 70. Confirm at least 2 Critical findings justify the score.
3. Review all sites with score below 20. Confirm no High-severity findings were missed.
4. Flag any rules that were ambiguous or difficult to apply consistently. These become V2 rule refinement candidates.

### Phase 4: Analysis

After quality review:

1. Calculate average Revenue Risk Score across all 50 sites.
2. Calculate average score by industry.
3. Identify which rules fire most often (most common gaps).
4. Identify which rules are hardest to apply consistently (calibration targets).
5. Identify which industries have the highest average risk scores.
6. Note any patterns in Japan-shipping-ready vs. non-Japan-ready stores.

---

## 10. Success Criteria

The validation is successful when:

- All 50 sites are scored with evidence-backed findings.
- Scoring time per site averages under 15 minutes.
- Score variance across industries makes intuitive sense (e.g., small DTC brands score higher than established global brands on average).
- At least 3 free summary examples can be used as prospect-facing proof assets.
- At least 2 rule refinements are identified for V2.
- The scoring framework produces a consistent and explainable result that a non-technical reviewer can verify from the evidence table.
