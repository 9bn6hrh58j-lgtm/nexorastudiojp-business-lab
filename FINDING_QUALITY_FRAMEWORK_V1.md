# Finding Quality Framework V1

## Decision

`SAMPLE_SCAN_REVIEW_V1.md` is adopted.

Revenue Risk Scanner's value is no longer centered on:

```text
Score
```

It is centered on:

```text
Findings
```

The score can remain as a summary signal, but it is not the product's core value.

## New Success Condition

The scanner succeeds when a customer says:

```text
I did not notice that.
```

Minimum success threshold:

```text
At least 3 specific, evidence-backed, fixable findings per scanned store.
```

This is stricter than returning many findings. Five generic findings are worse than three sharp findings.

## Product Positioning

Revenue Risk Scanner is:

```text
A URL-only pre-audit that instantly explains why buyers may not purchase, beyond what analytics tools can explain.
```

It is not:

- a GA4 replacement
- a Microsoft Clarity replacement
- a Hotjar replacement
- a full CRO consultant replacement
- a generic SEO audit
- a generic store health checker

## 1. Finding Quality Evaluation

### Quality Score

Each finding should be evaluated on a 0-10 scale.

| Dimension | Points | Question |
|---|---:|---|
| Specificity | 0-2 | Is the issue concrete rather than generic? |
| Evidence strength | 0-2 | Does the finding show where the issue was found or not found? |
| Buyer impact | 0-2 | Does it explain how a buyer may hesitate or abandon? |
| Fixability | 0-2 | Can the merchant take a clear next action? |
| Surprise value | 0-2 | Is the finding likely to reveal something the merchant missed? |

### Quality Bands

| Score | Label | Action |
|---:|---|---|
| 8-10 | Strong finding | Show prominently |
| 6-7 | Useful finding | Show if evidence is clear |
| 4-5 | Weak finding | Keep internal or improve |
| 0-3 | Bad finding | Do not show |

### Paid-Quality Rule

Paid output should only include findings scoring:

```text
8+
```

Free output may include:

```text
Top 3 findings scoring 6+
```

but it should clearly state when evidence is based on scanned pages only.

## 2. Definition Of A Hard-To-Refute Finding

A hard-to-refute finding has all five elements:

1. Exact page checked
2. Exact evidence snippet or explicit absence proof
3. Buyer hesitation mechanism
4. Concrete fix
5. Confidence level

### Good Finding Template

```text
Risk:
International return policy is unclear.

Evidence:
Scanned the home page, help page, return policy, and shipping policy.
No text mentioning "international returns", "overseas returns", "return shipping from outside [country]", or "customs/duties on returns" was found.

Why this matters:
Cross-border buyers may hesitate if they do not know whether they can return the item from their country or who pays the return cost.

Fix:
Add a short "International Returns" section explaining eligibility, who pays return shipping, and whether duties/taxes are refundable.

Confidence:
High, if return/shipping policy pages were crawled.
```

### Bad Finding Template

```text
Risk:
Add more trust signals.

Evidence:
Homepage text.

Fix:
Improve trust.
```

Reason this fails:

- too generic
- no precise page check
- no buyer mechanism
- no concrete next action
- easy for the merchant to dismiss

## 3. Finding Categories

The current categories are directionally correct, but the product should prioritize categories with high surprise value and clear revenue mechanism.

### Tier 1: Highest Value Findings

These are most likely to make customers say "I did not notice that."

| Category | Example Finding | Why It Matters |
|---|---|---|
| Cross-border shipping ambiguity | Store says "free shipping" but does not state supported countries | International buyers hesitate before cart |
| Duties/taxes ambiguity | No customs/duties/import fee language found | Surprise-fee fear blocks checkout |
| International returns ambiguity | Returns exist, but overseas return rules are missing | Cross-border buyers avoid risky purchase |
| Return cost ambiguity | Returns are allowed, but who pays return shipping is unclear | Buyers fear hidden post-purchase cost |
| Policy contradiction | Homepage says one thing, policy page says another | Contradiction reduces trust |
| Missing buyer objection answer | Product page does not answer size/material/compatibility/usage concern | Buyer cannot decide confidently |
| Contact path weakness | Contact exists but support expectation is unclear | Buyers fear no help after purchase |

### Tier 2: Useful But Needs Strong Evidence

| Category | Example Finding | Caveat |
|---|---|---|
| Social proof weakness | Product page has no reviews near CTA | Must crawl product pages |
| FAQ gap | No FAQ or help answer for common buyer doubts | Must distinguish not found vs absent |
| Business identity weakness | No clear company/founder/location info found | Stronger for unknown brands than famous brands |
| Payment reassurance weakness | Accepted payment methods not visible | Hard to verify without checkout access |
| Mobile CTA friction | CTA hidden or low visibility on mobile | Requires rendering, not just HTML |

### Tier 3: Low Priority For MVP

| Category | Reason |
|---|---|
| Generic SEO issues | Too crowded and not positioning-aligned |
| Generic page speed issues | Already covered by existing tools |
| Generic design opinions | Too subjective |
| Generic "add trust badges" advice | Too easy to dismiss |
| Generic score-only output | Not the core value |

## 4. Crawl Target Improvements

The scanner should not crawl only whichever links appear first.

It should build a target page plan.

### Required Page Types

| Page Type | Required For | Priority |
|---|---|---:|
| Home page | Navigation, trust claims, policy visibility | 1 |
| Product page | product confidence, reviews, CTA, buyer objections | 2 |
| Shipping / delivery page | delivery timing, countries, carrier, tracking | 1 |
| Return / refund page | return eligibility, timing, cost responsibility | 1 |
| FAQ / help page | buyer objections, support clarity | 2 |
| Contact / support page | support path, response expectation | 2 |
| About / company page | legitimacy, identity | 3 |
| Policy / terms page | contradictions, legal clarity | 3 |

### Crawl Selection Logic

The scanner should:

1. Crawl homepage.
2. Extract all internal links.
3. Score links by page-type keywords.
4. Select at least one page from each high-priority page type when available.
5. Select 2-3 product pages.
6. Cap total crawl at MVP limit.

### MVP Crawl Target

```text
max_pages: 10
```

Recommended allocation:

| Page Type | Count |
|---|---:|
| Home | 1 |
| Product | 2 |
| Shipping | 1 |
| Return/refund | 1 |
| FAQ/help | 1 |
| Contact/support | 1 |
| About/company | 1 |
| Policy/terms | 1 |
| Extra relevant page | 1 |

## 5. Evidence Snippet Improvements

### Current Problem

The current scanner often returns generic snippets such as:

```text
FREE shipping & returns...
```

This is not enough.

The evidence must show:

- the exact text that triggered the finding, or
- the exact missing terms checked, and
- the pages checked.

### Evidence Types

| Evidence Type | Use Case | Example |
|---|---|---|
| Positive evidence | A weak/ambiguous phrase is found | "Free shipping & returns" appears, but no country coverage is stated |
| Absence evidence | Expected terms are not found | No `duties`, `customs`, `import fees`, or `VAT` terms found in scanned policy pages |
| Contradiction evidence | Two pages conflict | Homepage says "free returns"; policy says customer pays return shipping |
| Coverage evidence | Shows scan scope | Checked home, shipping, return, FAQ, and product pages |

### Required Evidence Fields

Each finding should include:

```json
{
  "evidence_type": "positive | absence | contradiction | coverage",
  "pages_checked": ["https://example.com", "https://example.com/shipping"],
  "trigger_terms_found": ["shipping", "returns"],
  "expected_terms_missing": ["customs", "duties", "import fees"],
  "evidence_snippet": "exact visible text",
  "confidence": "high | medium | low"
}
```

### Absence Finding Wording

Do not say:

```text
FAQ missing.
```

Unless the whole site was checked.

Say:

```text
FAQ was not found in the scanned pages.
```

Or:

```text
No FAQ/help page was found among the crawled navigation and footer links.
```

This reduces false-positive backlash.

## 6. Findings Likely To Repeat Across 10 Scanned Sites

If 10 small or mid-size ecommerce stores are scanned, the likely repeat findings are:

| Expected Repeat Finding | Expected Frequency | Why It Repeats | Quality Potential |
|---|---:|---|---|
| Duties/taxes/import fees unclear | 7-9 / 10 | Many stores avoid cross-border fee wording | High |
| International return rules unclear | 6-8 / 10 | Stores have domestic returns but vague overseas returns | High |
| Return shipping cost unclear | 5-7 / 10 | Policies say returns accepted but not who pays | High |
| Delivery timing not visible before purchase | 5-7 / 10 | Shipping details buried in policy pages | Medium-high |
| Supported countries unclear | 4-6 / 10 | Global shipping is implied but not explicit | High |
| FAQ not found in scanned pages | 4-6 / 10 | Smaller stores often lack objection handling | Medium |
| Contact response expectation missing | 4-6 / 10 | Contact exists but no response time/channel clarity | Medium-high |
| Product details insufficient | 3-5 / 10 | Depends heavily on product category | Medium |
| Policy links hidden or buried | 3-5 / 10 | Footer/nav structure varies | Medium |
| Social proof absent near product CTA | 3-5 / 10 | Must crawl product pages to verify | Medium |
| Homepage/policy contradiction | 1-3 / 10 | Less frequent but very valuable when found | Very high |
| Shipping/return promise contradiction | 1-3 / 10 | Less frequent but difficult to dismiss | Very high |

### Highest-Value Repeated Findings

For the MVP, prioritize repeated findings that combine:

- high frequency
- clear buyer hesitation
- low merchant awareness
- strong fixability

Top candidates:

1. Duties/taxes/import fees unclear
2. International return rules unclear
3. Return shipping cost unclear
4. Supported countries unclear
5. Delivery timing not visible

These are better than broad findings like:

```text
Add more trust signals.
```

## 7. Finding Ranking Logic

The scanner should rank findings by:

```text
finding_priority = buyer_impact * evidence_strength * fixability * surprise_value
```

Recommended weights:

| Factor | Weight |
|---|---:|
| Buyer impact | 35% |
| Evidence strength | 30% |
| Fixability | 20% |
| Surprise value | 15% |

The score should not decide what appears first.

The best finding appears first.

## 8. Free vs Paid Output

### Free Output

Show:

- top 3 findings
- short evidence summary
- risk category
- one-line fix

Hide:

- full evidence detail
- copy-ready fixes
- contradiction map
- page-by-page report
- monitoring

### Paid Output

Show:

- all strong findings
- pages checked
- exact snippets
- missing terms
- copy-ready fixes
- priority order
- exportable report

## 9. Implementation Requirements For Codex CLI

Codex CLI should improve:

1. Crawl target selection
2. Evidence structure
3. Absence finding wording
4. Finding ranking
5. Top 3 finding output

### Must Not Do

- Do not add new business ideas.
- Do not build analytics replacement features.
- Do not overemphasize the score.
- Do not show weak findings as paid-quality findings.
- Do not claim revenue loss is proven by URL-only scan.

## Final Judgment

The product should be judged by this question:

```text
Did the scan find 3 things the merchant probably missed and can fix?
```

Not by:

```text
Did the scan produce a score?
```

Current status:

```text
Technical scan: passed
Finding quality: partial
Paid readiness: not yet
Next milestone: 3 hard-to-dismiss findings from one sample URL
```
