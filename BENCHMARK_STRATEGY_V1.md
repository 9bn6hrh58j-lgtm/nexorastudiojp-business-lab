# Benchmark Strategy V1

## Decision

`BUILD_VS_BUY_ANALYSIS_V1.md` is adopted.

Revenue Risk Scanner should not be defined as:

```text
AI scanner
```

It should be defined as:

```text
Validated Finding Intelligence Platform
```

## Strategic Reframe

### Easy To Build Internally

Customers can build or approximate:

- AI analysis
- score
- PDF report
- generic recommendations
- basic policy review
- generic CRO checklist

### Harder To Build Internally

Customers are less likely to build:

- benchmarks
- finding history
- false-positive suppression
- industry comparison
- validation data
- repeated finding intelligence

## Current Phase

The company is not yet building full benchmark features.

Current phase:

```text
collect benchmark seeds
```

This means:

- collect structured finding data
- classify findings consistently
- collect user validation
- record objections and false positives
- identify repeated patterns

Do not delay MVP launch to build benchmark infrastructure.

## Product Definition

Revenue Risk Scanner is:

```text
A Validated Finding Intelligence Platform that identifies buyer-facing revenue risks, validates which findings matter, and eventually benchmarks stores against similar stores.
```

Short version:

```text
Validated Finding Intelligence Platform for ecommerce revenue risk.
```

## 1. Finding Taxonomy Design

### Taxonomy Purpose

The taxonomy exists to make findings comparable across stores.

Without taxonomy:

```text
Every scan is a one-off AI report.
```

With taxonomy:

```text
Every scan contributes to benchmark intelligence.
```

### Taxonomy Levels

| Level | Purpose | Example |
|---|---|---|
| Domain | broad risk area | Policy clarity |
| Category | repeatable finding group | Return cost ambiguity |
| Subcategory | specific pattern | Who pays return shipping is unclear |
| Evidence type | proof type | absence evidence |
| Buyer impact | revenue mechanism | checkout hesitation |
| Fix type | remediation pattern | add policy clause |

### Proposed Domains

| Domain | Description |
|---|---|
| Shipping & Delivery | delivery availability, timing, cost, supported countries |
| Duties & Taxes | customs, import fees, VAT, extra charges |
| Returns & Refunds | return eligibility, return cost, international returns |
| Product Confidence | size, material, ingredients, compatibility, usage clarity |
| Support & Contact | contact visibility, response expectations, help path |
| Business Legitimacy | company identity, location, founder/company story |
| Social Proof | reviews, testimonials, press, proof near CTA |
| FAQ & Objections | unanswered buyer questions |
| Policy Accessibility | whether key policies are easy to find |
| Payment Confidence | accepted payments, security reassurance |
| Consistency & Contradiction | conflicting claims across pages |

### Proposed Finding Categories

| Category ID | Category | Domain | Priority |
|---|---|---|---:|
| SHIP_COUNTRY_UNCLEAR | Supported countries unclear | Shipping & Delivery | 1 |
| SHIP_TIMING_UNCLEAR | Delivery timing unclear | Shipping & Delivery | 2 |
| SHIP_COST_UNCLEAR | Shipping cost unclear | Shipping & Delivery | 2 |
| TAX_DUTIES_UNCLEAR | Duties/taxes/import fees unclear | Duties & Taxes | 1 |
| RETURN_POLICY_MISSING | Return policy missing | Returns & Refunds | 1 |
| RETURN_COST_UNCLEAR | Return shipping cost unclear | Returns & Refunds | 1 |
| RETURN_INTL_UNCLEAR | International returns unclear | Returns & Refunds | 1 |
| PRODUCT_DETAIL_GAP | Product detail gap | Product Confidence | 2 |
| PRODUCT_OBJECTION_GAP | Product objection unanswered | Product Confidence | 2 |
| CONTACT_PATH_WEAK | Contact path weak | Support & Contact | 2 |
| SUPPORT_EXPECTATION_MISSING | Support response expectation missing | Support & Contact | 2 |
| BUSINESS_IDENTITY_WEAK | Business identity unclear | Business Legitimacy | 3 |
| SOCIAL_PROOF_NEAR_CTA_MISSING | Social proof missing near CTA | Social Proof | 3 |
| FAQ_NOT_FOUND | FAQ/help not found in scanned pages | FAQ & Objections | 3 |
| POLICY_LINKS_HIDDEN | Policy links hidden or hard to find | Policy Accessibility | 3 |
| PAYMENT_REASSURANCE_WEAK | Payment reassurance weak | Payment Confidence | 4 |
| POLICY_CONTRADICTION | Policy or promise contradiction | Consistency & Contradiction | 1 |

### Evidence Type

| Evidence Type | Meaning |
|---|---|
| positive | weak or risky phrase found |
| absence | expected language not found in scanned pages |
| contradiction | two pages conflict |
| coverage | finding depends on pages checked |
| structural | navigation/footer/page structure creates issue |

### Buyer Impact Type

| Impact | Meaning |
|---|---|
| conversion hesitation | buyer delays purchase |
| checkout abandonment | buyer stops before payment |
| cross-border order loss | international buyer drops out |
| refund/dispute risk | unclear expectations create post-purchase risk |
| support burden | unclear info creates support questions |
| repeat purchase risk | buyer avoids future purchases |

## 2. Finding Accumulation Design

### Purpose

Every scan should create reusable intelligence.

Even if the customer does not pay, the scan can contribute to:

- finding history
- false-positive suppression
- category frequency
- validation signal
- benchmark seed

### Minimum Data To Store

Do not build a complex system yet.

But every reviewed finding should be recordable with:

| Field | Purpose |
|---|---|
| finding_id | unique finding instance |
| scan_id | connect to scan |
| site_domain | store identity without full sensitive data |
| platform | Shopify / other / unknown |
| industry | apparel / beauty / jewelry / etc. |
| store_size_estimate | small / medium / large / unknown |
| cross_border_relevance | high / medium / low |
| category_id | taxonomy category |
| evidence_type | positive / absence / contradiction / coverage |
| evidence_page_type | home / product / policy / FAQ / contact |
| confidence | high / medium / low |
| quality_score | 0-10 |
| known_to_user | yes / no / partly / unknown |
| insight_created | yes / no / not sure |
| action_intent | yes / no / later |
| paid_value | yes / no / maybe |
| objection_type | false positive / known / not important / weak evidence / unrealistic fix |
| final_status | validated / weak / invalid / commercial signal |

### What Not To Store Yet

Avoid overbuilding:

- complex dashboards
- full analytics warehouse
- customer-facing benchmarks
- automated industry models
- paid benchmark UI

For now, a spreadsheet or simple database is enough.

## 3. Benchmark Candidate Design

Benchmark candidates should be selected based on:

- repeat frequency
- low objection rate
- high surprise rate
- high action intent
- clear industry relevance

### Candidate Benchmarks

| Benchmark Candidate | Example |
|---|---|
| Category frequency | 62% of scanned apparel stores have unclear return shipping cost |
| Industry comparison | Beauty stores more often miss ingredient-related objections |
| Platform comparison | Shopify stores show policy links more consistently than non-Shopify stores |
| Cross-border readiness | Stores shipping internationally often miss duties/taxes wording |
| Finding severity distribution | New stores have more support/contact clarity gaps |
| False-positive rate | FAQ gap findings are often disputed unless FAQ page crawl is confirmed |
| Action intent by category | Return-cost ambiguity produces more fix intent than generic social proof |
| Paid value by category | Benchmarks and fix copy produce stronger payment signals |

### First Benchmark Seeds To Collect

Prioritize:

1. Duties/taxes/import fees clarity
2. International return clarity
3. Return shipping cost clarity
4. Supported country clarity
5. Delivery timing clarity
6. Policy contradiction
7. Product objection gap

Reason:

These are more specific and harder to dismiss than generic trust advice.

## 4. Future Benchmark Structure

### Benchmark Layers

| Layer | Example |
|---|---|
| Global ecommerce benchmark | across all scanned stores |
| Platform benchmark | Shopify vs non-Shopify |
| Industry benchmark | footwear, beauty, jewelry, supplements, apparel |
| Store maturity benchmark | new/small vs mature/known brands |
| Cross-border benchmark | domestic-only vs international shipping stores |
| Finding category benchmark | return cost ambiguity rate by segment |

### Future Customer-Facing Output

Example:

```text
Your return shipping cost clarity is weaker than 68% of similar apparel stores we scanned.
```

Example:

```text
In our validated finding history, duties/taxes ambiguity is one of the top 3 most common cross-border purchase blockers for stores shipping internationally.
```

Example:

```text
Stores in your category most often miss: international returns, duties/taxes wording, and product-specific FAQ answers.
```

### Benchmark Confidence Levels

Future benchmarks must show confidence.

| Confidence | Data Requirement |
|---|---|
| Low | under 30 relevant stores |
| Medium | 30-100 relevant stores |
| High | 100+ relevant stores |

Do not claim benchmark authority too early.

## 5. Benchmark Seed Collection During Validation

During the first 10 users:

Collect:

- finding category
- user insight yes/no
- action intent
- paid value
- objection reason

Do not claim:

```text
benchmark
```

During first 100 scans:

Collect:

- category frequency
- industry/platform
- false positives
- repeated patterns

Still avoid strong benchmark claims.

After 100+ relevant scans:

Start internal benchmark tables.

After 300+ relevant scans:

Consider light customer-facing benchmark language.

After 1,000+ relevant scans:

Benchmark becomes a real product moat.

## 6. What This Means For MVP

### Do Not Add Features Now

Do not build:

- benchmark UI
- customer-facing comparison dashboard
- benchmark API
- complex analytics
- industry model

### Do Add Discipline

Every validation scan should produce structured rows that can become benchmark data later.

The MVP should not be delayed.

### Minimum Immediate Change

The only immediate operational change is:

```text
record finding categories and validation responses consistently.
```

This can be done manually.

## 7. Benchmark Moat Logic

### Weak Moat

```text
We use AI to scan your store.
```

Easy to copy.

### Medium Moat

```text
We have a structured taxonomy and suppress bad findings.
```

Better, but still early.

### Strong Moat

```text
We know which findings merchants actually found valuable across many stores.
```

Harder to copy.

### Very Strong Moat

```text
We benchmark your store against similar stores and know which findings create action/payment intent.
```

This is the target.

## 8. Strategic Rule

Do not say:

```text
AI scanner
```

Say:

```text
validated finding intelligence
```

But do not overclaim before the data exists.

Internally:

```text
Validated Finding Intelligence Platform
```

Externally in MVP:

```text
Find buyer-facing revenue risks your analytics tools do not explain.
```

## 9. CEO Dashboard For Benchmark Seeds

Weekly, track:

| Metric | Purpose |
|---|---|
| scans reviewed | validation volume |
| findings recorded | data volume |
| category frequency | benchmark seed |
| insight rate by category | value signal |
| action intent by category | monetization signal |
| paid value by category | payment signal |
| objection rate by category | false-positive suppression |
| top validated categories | future benchmark candidates |

## Final CEO Judgment

```text
GO
```

Adopt the strategic redefinition.

Revenue Risk Scanner should become:

```text
Validated Finding Intelligence Platform
```

But the immediate action is not feature expansion.

Immediate action:

```text
collect benchmark seeds during customer validation.
```

## Next Three Actions

1. Use the finding taxonomy in every validation scan.
2. Record validation responses by finding category.
3. After the first 30-100 scans, identify the first benchmark candidates.
