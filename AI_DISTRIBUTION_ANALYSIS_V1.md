# AI Distribution Analysis V1

## Purpose

Add `AI Sales Potential` as a required evaluation item for all future business decisions.

The company should not only ask:

```text
Can AI create the product?
```

It must also ask:

```text
Can AI sell the product without human-led sales?
```

This matters because the CEO's goal is not a labor-heavy consulting company. The goal is an AI-led business where humans mainly handle final approval, exceptions, and strategic decisions.

## New Required Evaluation Item

### AI Sales Potential

Every future business evaluation must include:

| Item | Question | Strong Signal | Weak Signal |
|---|---|---|---|
| SEO-only sales | Can buyers find and buy through search content without a sales call? | Clear problem keywords, free tool, self-serve checkout | Vague demand, education-heavy, unclear search intent |
| App Store sales | Can it sell through an ecosystem marketplace? | Shopify App Store, Chrome Web Store, Slack, Notion, Google Workspace, Apple App Store | No natural marketplace |
| API sales | Can developers/partners buy it as an API? | Clear endpoint, usage pricing, machine-readable output | Needs human interpretation |
| No-meeting purchase | Can customers buy without a meeting? | Free trial, instant result, transparent pricing | Custom quote, onboarding call, proposal |
| Human sales need | How much human sales is required? | Low-touch, product-led growth | Relationship sales, demos, enterprise procurement |

## External Distribution Signals

These are not proof of demand for any single idea, but they shape distribution assumptions:

- Gartner reported that 61% of B2B buyers prefer a rep-free buying experience, while buyers still seek seller input when they need help judging fit. Source: https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience
- Gartner Digital Markets reported that product trials are a major factor in software purchase decisions. Source: https://www.gartner.com/en/digital-markets/insights/2025-software-buying-trends
- Shopify states that app developers keep 100% of the first USD 1M in gross app revenue under its app revenue share plan, which makes the Shopify App Store attractive for small software businesses. Source: https://shopify.dev/apps/store/revenue-share
- Shopify describes a large app ecosystem serving merchants across many commerce categories. Source: https://www.shopify.com/news/billion-dollar-ecosystem
- Cloud and AI marketplaces increasingly support SaaS, APIs, AI agents, datasets, and deployable products. Source: https://cloud.google.com/marketplace

Interpretation:

Self-serve buying is real, but it works best when the product has:

- immediate output
- low setup friction
- clear ROI
- transparent pricing
- marketplace trust
- a free or low-cost first step

## Scoring

| Score | Meaning |
|---:|---|
| 5 | Very strong |
| 4 | Strong |
| 3 | Medium |
| 2 | Weak |
| 1 | Poor |

For human sales need:

```text
5 = almost no human sales required
1 = human sales is essential
```

## Comparison Summary

| Rank | Business | SEO Sales | App Store Sales | API Sales | No-Meeting Purchase | Low Human Sales Need | AI Sales Potential | Verdict |
|---:|---|---:|---:|---:|---:|---:|---:|---|
| 1 | Revenue Risk Scanner | 4 | 5 | 4 | 5 | 4 | 22/25 | Best fit |
| 2 | AI Education | 4 | 4 | 2 | 5 | 4 | 21/25 | Viable but crowded |
| 3 | 水商売SaaS | 2 | 2 | 2 | 2 | 2 | 10/25 | Operationally heavy |
| 4 | AI Consulting | 2 | 1 | 1 | 1 | 1 | 5/25 | Not fit as core business |

## 1. Revenue Risk Scanner

### Business Definition

A self-serve scanner for ecommerce businesses that identifies buyer-facing revenue risks:

- unclear shipping terms
- weak return/refund policy
- missing trust signals
- cross-border checkout uncertainty
- payment, duties, taxes, and delivery confusion
- product page friction

### AI Sales Potential

| Item | Rating | Assessment |
|---|---:|---|
| SEO-only sales | 4 | Strong if positioned around concrete search intent such as `shopify conversion audit`, `store trust audit`, `international checkout issues`, and `shipping policy checker`. |
| App Store sales | 5 | Strong natural fit for Shopify App Store. Merchants already buy store optimization apps there. |
| API sales | 4 | Strong if output is structured as risk scores, issue categories, page-level findings, and recommendations. |
| No-meeting purchase | 5 | URL-in, score-out product can be sold with free scan, paid report, and subscription without a call. |
| Low human sales need | 4 | Human involvement can be limited to QA, edge cases, and enterprise partnerships. |

### Strengths

- The product can show value before asking for money.
- Distribution can be product-led: free scan, report preview, paid unlock.
- Marketplace distribution is realistic through Shopify first.
- API path is credible because agencies, ecommerce tools, and platforms can consume risk scores.
- Human approval can be restricted to rule updates, high-risk recommendations, and quality review.

### Weaknesses

- `Revenue Risk Scanner` is clearer than `Trust Scanner`, but still needs careful wording so merchants understand the money impact.
- SEO competition around conversion optimization is heavy.
- A one-time scan alone is not defensible.
- The moat depends on benchmarks, integrations, recurring monitoring, and remediation workflows.

### Distribution Strategy

Best initial path:

1. Free web scan
2. Shopify App Store app
3. Paid detailed report
4. Monthly monitoring
5. API for ecommerce agencies and app developers

### CEO Judgment

```text
GO
```

Reason:

Among the four options, this has the best balance of AI delivery and AI sales. It can be sold without meetings, can enter an app marketplace, can become an API, and can compound into a data-driven platform.

## 2. 水商売SaaS

### Business Definition

A SaaS for nightlife or hospitality-style operations such as reservations, staff scheduling, customer management, sales tracking, shift reports, or internal workflows.

This analysis is generic. It does not rely on any prior project context.

### AI Sales Potential

| Item | Rating | Assessment |
|---|---:|---|
| SEO-only sales | 2 | Search demand exists, but buyers often need trust, local context, and operational fit before purchase. |
| App Store sales | 2 | Possible only if tied to an existing ecosystem, but there is no obvious dominant marketplace equivalent to Shopify. |
| API sales | 2 | API value is weak unless it connects to POS, reservations, accounting, or messaging systems. |
| No-meeting purchase | 2 | Many customers likely need setup help, onboarding, migration, or explanation. |
| Low human sales need | 2 | Sales and support are likely relationship-heavy. |

### Strengths

- Operational pain can be real.
- If embedded deeply, switching costs can become strong.
- Vertical SaaS can produce durable revenue once customers adopt it.

### Weaknesses

- Human onboarding risk is high.
- Sales may depend on relationships, trust, referrals, and local presence.
- Customer support may be messy because operations are not standardized.
- AI can assist workflows, but AI does not automatically solve distribution.
- App Store/API distribution is weak compared with ecommerce or developer products.

### Distribution Strategy

If pursued, it should not start as a custom SaaS. It would need a narrow self-serve wedge such as:

- automated shift report generator
- daily sales anomaly checker
- staff message summarizer
- reservation follow-up automation

But even then, customer acquisition is likely more manual than the CEO's preferred model.

### CEO Judgment

```text
CAUTION
```

Reason:

It may become a good vertical SaaS, but it is not ideal for AI-led autonomous sales. It likely requires human sales, local trust, and onboarding. This should not outrank Revenue Risk Scanner under the current company goal.

## 3. AI Education

### Business Definition

AI-led education products such as:

- tutoring
- assessment
- personalized learning plans
- exam preparation
- corporate learning
- language learning
- AI training platforms

### AI Sales Potential

| Item | Rating | Assessment |
|---|---:|---|
| SEO-only sales | 4 | Strong because users search for learning problems directly. |
| App Store sales | 4 | Strong for consumer learning apps and possible for browser/mobile apps. |
| API sales | 2 | Possible for assessment, tutoring, or content generation APIs, but harder for a small company without institutional buyers. |
| No-meeting purchase | 5 | B2C and small-team education can be sold self-serve. |
| Low human sales need | 4 | Self-serve is possible, though support and content quality can grow complex. |

### Strengths

- Huge market.
- Self-serve purchase is natural.
- Mobile/app distribution can work.
- AI can personalize learning at scale.
- Subscriptions are familiar to users.

### Weaknesses

- Extremely crowded.
- Content alone is not a moat.
- Many users churn quickly after motivation drops.
- Education outcomes are hard to prove.
- B2B education often becomes sales-led.
- Strong brands, credentials, curriculum, community, or distribution partnerships are needed.

### Distribution Strategy

Best path is not a generic AI tutor.

Better wedges:

- exam-specific AI assessment
- job-specific practice simulator
- compliance training with automated proof records
- language learning for a narrow professional use case
- AI roleplay for sales/support training

### CEO Judgment

```text
CAUTION
```

Reason:

AI Education can be sold by SEO and app stores, so the distribution score is good. But the market is crowded and generic products are weak. It should only be pursued with a narrow audience, measurable outcome, and retention mechanism.

## 4. AI Consulting

### Business Definition

Consulting services that use AI to help companies improve operations, marketing, automation, content, strategy, or internal workflows.

### AI Sales Potential

| Item | Rating | Assessment |
|---|---:|---|
| SEO-only sales | 2 | Leads can be generated by SEO, but purchase usually needs trust and discussion. |
| App Store sales | 1 | Consulting does not naturally sell through app stores. |
| API sales | 1 | Consulting is not API-native unless converted into software. |
| No-meeting purchase | 1 | Buyers usually require a call, proposal, scope, or custom plan. |
| Low human sales need | 1 | Human sales and delivery are central. |

### Strengths

- Fastest path to cash if the CEO personally sells.
- Can reveal real business pain.
- Can generate case studies and data for product ideas.

### Weaknesses

- Does not fit the CEO's AI-company objective.
- Revenue scales with human time.
- Sales requires trust and customization.
- Delivery can drift into bespoke work.
- Hard to turn into self-serve without narrowing the offer.

### Distribution Strategy

If used, it should only be a temporary data-gathering or cashflow bridge.

It should be productized into:

- audit tool
- fixed report
- template pack
- workflow generator
- SaaS/API

### CEO Judgment

```text
STOP as core business
```

Reason:

AI Consulting may create short-term revenue, but it fails the AI sales test. It requires human trust-building, human selling, and human scoping. It should not be the company's main direction.

## Updated Ranking Under AI Sales Potential

### 1. Revenue Risk Scanner

Best match for:

- self-serve sales
- Shopify App Store
- API path
- no-meeting purchase
- AI-led delivery
- low human sales

### 2. AI Education

Good distribution potential, but only if narrowly positioned. Generic AI education is too crowded.

### 3. 水商売SaaS

Potentially durable if it wins a vertical, but the sales and onboarding burden is too high for the current AI-autonomous goal.

### 4. AI Consulting

Useful only as temporary cashflow or learning input. Not suitable as the core AI business.

## Practical Decision

### Continue

```text
Revenue Risk Scanner
```

### Explore Only With Strict Wedge

```text
AI Education
```

### Deprioritize

```text
水商売SaaS
```

### Do Not Treat As Core

```text
AI Consulting
```

## Required Future Business Evaluation Format

Every future business ranking should include this block:

| AI Sales Potential Item | Rating | Notes |
|---|---:|---|
| SEO-only sales |  |  |
| App Store sales |  |  |
| API sales |  |  |
| No-meeting purchase |  |  |
| Human sales need |  |  |
| Total |  |  |

Required conclusion:

```text
Can this business sell itself through AI-led/product-led distribution?
Yes / Partially / No
```

## Final CEO Recommendation

```text
GO: Revenue Risk Scanner
CAUTION: AI Education
CAUTION/LOW PRIORITY: 水商売SaaS
STOP AS CORE: AI Consulting
```

The strict conclusion is:

```text
Revenue Risk Scanner remains the strongest current candidate because it can become a product-led, app-store-distributed, API-capable AI business.
```

The company should not choose a business only because AI can produce the output.

It should choose businesses where AI can also support:

- acquisition
- qualification
- onboarding
- delivery
- payment
- retention
- upsell

On that standard, Revenue Risk Scanner is still the best fit among the four.
