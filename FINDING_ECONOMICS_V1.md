# Finding Economics V1

## Decision

`REVENUE_RISK_SCANNER_UNIT_ECONOMICS_V1.md` is adopted.

The core business issue is not:

- technology
- infrastructure
- gross margin

The core issue is:

```text
customer value
```

Therefore the most important KPI changes.

Old KPI:

```text
Revenue Risk Score
```

New KPI:

```text
Finding Quality
```

## Core Principle

Revenue Risk Scanner should not optimize for a better score.

It should optimize for:

```text
findings that customers did not notice, cannot easily refute, and can act on.
```

## 1. Finding Quality Evaluation Criteria

Each finding receives a `Finding Quality Score` from 0 to 10.

| Dimension | Points | Question |
|---|---:|---|
| Specificity | 0-2 | Is the finding concrete and page-specific? |
| Evidence strength | 0-2 | Is there exact proof or clear absence evidence? |
| Buyer impact | 0-2 | Does it explain why a buyer may hesitate or abandon? |
| Fixability | 0-2 | Can the merchant fix it without a consultant? |
| Surprise value | 0-2 | Is it likely the merchant did not notice it? |

### Quality Bands

| Score | Label | Product Action |
|---:|---|---|
| 8-10 | Premium finding | Show in paid/full report |
| 6-7 | Useful finding | Show in free top findings if evidence is clear |
| 4-5 | Weak finding | Keep internal for improvement |
| 0-3 | Bad finding | Suppress |

### Minimum Customer-Facing Standard

```text
Free output: 3 findings scoring 6+
Paid output: findings scoring 8+
```

If a scan cannot produce at least 3 findings scoring 6+, the scanner should say:

```text
We found limited public-page revenue risks in the scanned pages.
```

Do not fill the report with weak findings.

## 2. Finding Classification

Findings should be classified by business value, not only technical category.

### Business Value Classes

| Class | Definition | Example |
|---|---|---|
| Hidden blocker | Merchant likely missed it, buyer may hesitate | Duties/taxes not explained for international buyers |
| Policy ambiguity | A policy exists but leaves an important question unanswered | Return accepted, but return shipping cost unclear |
| Contradiction | Two parts of the site say conflicting things | Free returns on homepage, customer-paid returns in policy |
| Missing objection answer | Buyer question is not answered before purchase | Product page lacks size/material/compatibility details |
| Trust path weakness | Buyer cannot easily verify support or legitimacy | Contact exists, but response expectation missing |
| Generic improvement | Broad advice with weak evidence | Add more trust signals |

### Priority Order

| Priority | Class | Reason |
|---:|---|---|
| 1 | Contradiction | Very hard to dismiss when evidence is clear |
| 2 | Hidden blocker | High surprise value |
| 3 | Policy ambiguity | Common and fixable |
| 4 | Missing objection answer | Strong if product-page evidence exists |
| 5 | Trust path weakness | Useful but must be specific |
| 6 | Generic improvement | Usually too weak |

### Customer-Facing Rule

Customer-facing reports should avoid:

```text
Generic improvement
```

unless evidence is unusually strong.

## 3. Finding Objection Rate

### Definition

`Finding Objection Rate` measures how often users reject or dispute a finding.

Formula:

```text
Finding Objection Rate = disputed findings / reviewed findings
```

### Objection Types

| Objection Type | Meaning | Example |
|---|---|---|
| False positive | Finding is wrong | "We do have an FAQ page." |
| Already known | Merchant knew it already | "Yes, we know returns copy is weak." |
| Not important | Merchant does not care | "International buyers are not our target." |
| Evidence weak | Finding may be true, but proof is not convincing | "The page you checked is not the right page." |
| Fix unrealistic | Recommendation is not practical | "We cannot offer international returns." |

### Target

| Stage | Target Objection Rate |
|---|---:|
| First 10 users | under 40% |
| First 100 scans | under 25% |
| Paid report stage | under 15% |

### Kill Rule

If a finding category has:

```text
objection rate > 40%
```

after 20 reviewed examples, suppress it or rewrite it.

Do not keep findings that create arguments.

## 4. Finding Reproducibility Rate

### Definition

`Finding Reproducibility Rate` measures whether a finding category appears repeatedly across relevant stores.

Formula:

```text
Finding Reproducibility Rate = stores with finding category / relevant stores scanned
```

### Why It Matters

A finding category is valuable if it is:

- common enough to matter
- specific enough to be useful
- not so generic that everyone ignores it

### Expected Reproducibility

| Finding Category | Expected Rate Across 100 Ecommerce Sites | Notes |
|---|---:|---|
| Duties/taxes unclear | 50-75% | Strong cross-border category |
| International returns unclear | 45-70% | Common and high-value |
| Return shipping cost unclear | 35-60% | Often hidden or ambiguous |
| Supported countries unclear | 30-55% | Especially for "worldwide" stores |
| Delivery timing unclear | 30-55% | Often buried in policy |
| Contact response expectation missing | 30-50% | Contact exists, but expectation unclear |
| FAQ/help gap | 25-50% | Needs careful wording |
| Product detail gaps | 20-45% | Category-dependent |
| Social proof missing near CTA | 20-40% | Requires product-page crawl |
| Policy contradiction | 5-20% | Less frequent but very valuable |

### Interpretation

High reproducibility is not enough.

Bad:

```text
Generic trust signal missing appears in 80% of stores.
```

Good:

```text
International return cost is unclear in 55% of cross-border stores and 40% of merchants did not notice it.
```

## 5. Finding Value Evaluation

### Value Score

Each finding category should get a `Finding Value Score` from 0 to 100.

Formula:

```text
Finding Value Score =
  (Quality Score / 10 * 30)
+ (Surprise Rate * 25)
+ (Fix Intent Rate * 20)
+ (Reproducibility Rate * 15)
+ ((1 - Objection Rate) * 10)
```

Where:

- `Surprise Rate` = users saying "I did not notice that" / reviewed findings
- `Fix Intent Rate` = users saying "I want to fix this" / reviewed findings
- `Reproducibility Rate` = relevant stores where this appears
- `Objection Rate` = disputed findings / reviewed findings

### Value Bands

| Score | Label | Action |
|---:|---|---|
| 80-100 | Core finding | Prioritize in product and paid output |
| 60-79 | Strong finding | Keep and improve evidence |
| 40-59 | Experimental finding | Keep internal until validated |
| 0-39 | Weak finding | Suppress or remove |

## 6. Finding Hit Rate

### Definition

`Finding Hit Rate` is the percentage of scans that produce at least 3 useful findings.

Formula:

```text
Finding Hit Rate =
scans with 3+ useful findings / total completed scans
```

Useful finding:

```text
Finding Quality Score >= 6
```

Premium hit:

```text
Finding Quality Score >= 8
```

### Main KPI

The main KPI should be:

```text
3+ Useful Finding Hit Rate
```

Secondary KPI:

```text
3+ Premium Finding Hit Rate
```

### Target By Stage

| Stage | 3+ Useful Finding Hit Rate | 3+ Premium Finding Hit Rate |
|---|---:|---:|
| First 20 scans | 40% | 10% |
| First 100 scans | 60% | 20% |
| Public MVP | 70% | 30% |
| Paid readiness | 80% | 50% |

If the scanner cannot reach:

```text
60% useful hit rate across 100 scans
```

it is not ready for aggressive acquisition.

## 7. 100-Site Finding Hit Rate Measurement Design

### Sample Composition

Use 100 ecommerce sites.

Recommended mix:

| Site Type | Count | Reason |
|---|---:|---|
| Shopify DTC stores | 40 | Core target |
| Non-Shopify ecommerce stores | 20 | Test generality |
| Cross-border shipping stores | 20 | Test strongest category |
| Small/new brands | 10 | Likely trust gaps |
| Known/mature brands | 10 | Test false positives |

### Measurement Fields Per Site

Each scan record should include:

```json
{
  "site_url": "",
  "platform": "shopify | other | unknown",
  "store_type": "dtc | marketplace | brand | unknown",
  "cross_border_relevance": "high | medium | low",
  "pages_crawled": 0,
  "finding_count": 0,
  "useful_finding_count": 0,
  "premium_finding_count": 0,
  "top_3_finding_categories": [],
  "false_positive_count": 0,
  "user_feedback_available": false,
  "surprise_count": 0,
  "fix_intent_count": 0,
  "email_captured": false,
  "paid_intent": false
}
```

### Measurement Process

1. Scan 100 sites.
2. Score each finding from 0-10.
3. Count useful findings and premium findings.
4. Classify finding category.
5. Review a subset manually for false positives.
6. Collect user feedback where possible.
7. Calculate hit rates by site type and category.

### Required Output After 100 Sites

| Metric | Required |
|---|---:|
| Total completed scans | 100 |
| 3+ useful hit rate | Yes |
| 3+ premium hit rate | Yes |
| top 10 repeated finding categories | Yes |
| objection rate by category | Yes |
| surprise rate by category | Yes |
| fix intent rate by category | Yes |
| email capture by source | Yes |
| paid intent count | Yes |

## 8. Example Finding Economics Table

After 100 sites, maintain this table:

| Finding Category | Reproducibility | Objection Rate | Surprise Rate | Fix Intent Rate | Avg Quality | Value Score | Action |
|---|---:|---:|---:|---:|---:|---:|---|
| Duties/taxes unclear | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| International returns unclear | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Return shipping cost unclear | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Supported countries unclear | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Delivery timing unclear | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Contact response expectation missing | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| FAQ/help gap | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Product detail gap | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Social proof near CTA missing | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Policy contradiction | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## 9. Product Decisions Based On Finding Economics

### Keep

Keep finding categories that:

- appear often enough
- are difficult to refute
- produce surprise
- lead to fix intent
- have clear evidence

### Rewrite

Rewrite finding categories that:

- are directionally right but worded too strongly
- rely on absence evidence
- need clearer crawl coverage wording

### Suppress

Suppress finding categories that:

- are generic
- create frequent objections
- lack evidence
- do not create surprise
- do not lead to action

### Promote To Paid

Promote finding categories to paid output only if:

```text
Average Quality Score >= 8
Objection Rate <= 15%
Fix Intent Rate >= 30%
```

## 10. What This Means For The Product

### Do Not Optimize

Do not optimize for:

- higher Revenue Risk Score
- more findings
- more categories
- scarier language
- dashboard complexity

### Optimize

Optimize for:

- fewer but sharper findings
- clearer evidence
- lower objection rate
- higher surprise rate
- higher fix intent
- repeated high-value categories

## 11. CEO Dashboard

The CEO should see these metrics weekly:

| KPI | Meaning |
|---|---|
| completed scans | volume |
| 3+ useful finding hit rate | product usefulness |
| 3+ premium finding hit rate | paid readiness |
| average finding quality score | output quality |
| finding objection rate | trust risk |
| surprise rate | hidden value |
| fix intent rate | monetization potential |
| email capture rate | funnel traction |
| paid intent count | revenue signal |

Revenue Risk Score should not be the headline KPI.

## Final CEO Judgment

```text
GO
```

The product remains promising only if finding quality improves.

The company should treat each finding as an economic unit.

The question is:

```text
Does this finding create customer value?
```

not:

```text
Does this finding increase the score?
```

## Next Three Actions

1. Run 20 benchmark scans and manually score each finding.
2. Build the first Finding Economics table by category.
3. Suppress or rewrite any finding category with high objection risk before scaling to 100 scans.
