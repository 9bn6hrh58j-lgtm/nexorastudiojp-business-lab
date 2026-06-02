# Shopify Japan Readiness Scanner

## Purpose

Evaluate whether `Shopify Japan Readiness Scanner` can become the autonomous-business version of `Japan Readiness Audit`.

Current `Japan Readiness Audit` continues as a customer-data acquisition line.

This document evaluates the separate product line:

```text
Shopify merchant installs app
-> app scans Japan readiness
-> AI generates score/report
-> merchant pays for report or monitoring
-> human only reviews exceptions
```

CEO goal:

```text
AI-operated business.
Human only gives final approval.
```

## Executive Conclusion

`Shopify Japan Readiness Scanner` is a better fit than the current manual audit.

It can become a real business if the product is framed as:

```text
Cross-border buyer trust scanner for Shopify stores, starting with Japan.
```

Not:

```text
Japan market entry consulting app.
```

Reason:

- Shopify merchants already install apps to solve store problems.
- Shopify App Store can become a distribution channel.
- Shopify billing can support subscriptions and one-time charges.
- AI can diagnose many store-readiness issues from public pages and Shopify store data.
- The current Audit line can provide real examples and scoring rules.

However, the app is not automatically successful.

The biggest risk is demand language. Many merchants may not search for "Japan readiness." They may search for:

- international shipping
- localization
- conversion
- trust badges
- returns policy
- duties and taxes
- cross-border sales

The wedge should be:

```text
Find what stops international buyers from trusting your Shopify store.
Japan readiness included.
```

## Source Notes

Current Shopify platform facts used in this evaluation:

- Public apps distributed through the Shopify App Store must go through Shopify review and meet app requirements. Source: https://shopify.dev/docs/apps/launch/shopify-app-store/app-store-requirements
- Apps need a working merchant UI, OAuth flow, secure data handling, necessary scopes only, and clear listing/pricing. Source: https://shopify.dev/docs/apps/launch/shopify-app-store/app-store-requirements
- Shopify App Store is a distribution surface for merchants to discover apps. Source: https://shopify.dev/docs/apps/launch/app-store-review
- Shopify App Pricing / billing supports subscriptions, usage-based pricing, free trials, one-time charges, and app billing events through Shopify-managed app pricing or billing APIs. Source: https://shopify.dev/docs/apps/billing/subscriptions/
- Shopify App Store apps generally need Shopify billing for App Store-distributed apps unless Shopify grants otherwise. Source: https://shopify.dev/docs/apps/launch/billing
- Shopify merchants configure shipping and delivery settings in Shopify admin, which are relevant to cross-border readiness. Source: https://help.shopify.com/en/manual/shipping/setting-up-and-managing-your-shipping/shipping-rates-and-methods

## 1. Can It Work As A Shopify App?

### Judgment

```text
YES, with caution.
```

It can work as a Shopify app if the core value is narrow and immediately visible:

```text
Scan my store and show why international/Japanese buyers may hesitate.
```

It should not start as a broad "Japan market entry" app. That is too advisory, vague, and low-frequency.

### Why Shopify App Format Fits

Shopify merchants already understand:

- app install
- store scan
- checklist
- score
- recommendations
- subscription

The app can produce value shortly after installation:

1. Read store configuration and public storefront pages.
2. Scan policy pages, FAQ, product pages, checkout-facing language where accessible, and shipping setup.
3. Produce a readiness score.
4. Show priority fixes.
5. Offer paid detailed report or recurring monitoring.

### App Store Reality

The app must be production-ready before submission.

Shopify requirements include:

- working UI
- correct OAuth installation flow
- accurate data synchronization
- secure TLS/SSL
- only necessary API scopes
- clear app listing
- no broken core functionality

This raises the build bar compared with a simple landing page, but it also creates some trust and distribution advantage once approved.

### Fit Score

```text
Shopify App viability: 78/100
```

Strong enough to investigate/build MVP, but not guaranteed until merchant demand is proven.

## 2. Can AI Diagnose It Alone?

### Judgment

```text
PARTIALLY.
```

AI can diagnose many visible readiness issues, but not everything.

The scanner can be AI-led if it uses a deterministic rulebase first and AI explanation second.

Correct architecture:

```text
Rules detect issues
AI explains and prioritizes issues
Human reviews edge cases only
```

Wrong architecture:

```text
AI reads the site and freely invents a diagnosis
```

### AI Can Handle

- page text review
- FAQ gap detection
- policy clarity checks
- tone/readability review
- Japan buyer hesitation explanation
- priority ranking
- suggested copy improvements
- report generation
- issue categorization

### AI Should Not Fully Own

- legal/regulatory claims
- customs/tax correctness
- guaranteed market-entry advice
- product import eligibility
- checkout behavior that cannot be accessed
- live shipping-rate accuracy unless the app has reliable store data

### Fit Score

```text
AI diagnosis feasibility: 80/100
```

Good if the product avoids legal/import promises and focuses on buyer-readiness and store clarity.

## 3. What Can Be Automatically Diagnosed?

### Storefront And Content

| Area | Auto-Diagnosis | Data Needed |
|---|---|---|
| Shipping clarity | Whether Japan/international shipping is mentioned clearly | Shipping policy page, FAQ, store settings if accessible |
| Duties/taxes clarity | Whether duties, taxes, and DDP/DDU responsibility are explained | Shipping policy, checkout text where available |
| Returns clarity | Whether international returns are explained | Return policy, FAQ |
| Delivery timing | Whether international delivery windows are visible | Shipping policy, product page |
| Support visibility | Whether support/contact route is easy to find | Contact page, footer, FAQ |
| Trust signals | Reviews, guarantees, secure payment copy, business identity | Storefront pages |
| Product page clarity | Size, ingredients/materials, use instructions, warnings | Product pages |
| Japan buyer hesitation | Category-specific concerns | Product category + rules |
| Localization gaps | No Japanese content, awkward machine translation, untranslated policy | Storefront text/locales |
| Payment reassurance | Whether common payment/security cues are visible | Storefront/checkout-adjacent copy |
| FAQ gaps | Missing Japan-specific answers | FAQ/policy pages |
| Mobile readability | Basic scan of page structure and text density | Public pages |

### Scoring Categories

Suggested score:

```text
Japan Readiness Score: 0-100
```

Subscores:

1. Shipping & Delivery
2. Duties & Taxes
3. Returns & Refunds
4. Product Trust
5. Contact & Support
6. Localization
7. Checkout Confidence
8. Buyer Education

### Report Output

MVP report:

- top 5 blocking issues
- severity
- evidence from page
- why Japanese/international buyers may hesitate
- suggested fix
- copy example
- priority order

## 4. What Cannot Be Fully Automated?

### Cannot Reliably Automate

| Area | Why Not |
|---|---|
| Legal import compliance | Requires legal/regulatory expertise and product-specific facts |
| Customs/tax correctness | Depends on product category, destination, carrier, and merchant setup |
| Real checkout shipping rates | Checkout access can be limited; rates vary by address/cart |
| Whether Japan demand exists | The app can diagnose readiness, not prove market demand |
| Brand trust in Japan | Needs customer behavior and reputation data |
| Translation quality for nuanced brand voice | AI can flag likely issues, but human review may be needed |
| Product-market fit | Outside scanner scope |
| Ads/SEO launch strategy | Separate go-to-market work |

### Product Boundary

The app should clearly say:

```text
This is a buyer-readiness and store-clarity scan.
It is not legal, tax, customs, regulatory, or sales-guarantee advice.
```

This boundary is critical. Without it, the app becomes a risky consulting/legal-advice product.

## 5. Path To JPY 1M/Month

### Revenue Model Options

Best model:

```text
Free scan
Paid detailed report
Monthly monitoring
Agency plan
```

Pricing ladder:

| Plan | Price | Purpose |
|---|---:|---|
| Free Scan | $0 | Lead capture, App Store installs |
| Detailed Report | $49 one-time | First monetization |
| Monitoring | $29/month | Recurring revenue |
| Pro | $79/month | Multi-scan, deeper rules, saved history |
| Agency | $199/month | Multiple stores/client reports |

### JPY 1M/Month Scenarios

Assume JPY 1M/month is roughly USD $6,500-$7,000 depending on FX.

Possible paths:

| Scenario | Requirement |
|---|---|
| $29/month monitoring | 225-245 paying stores |
| $49/month plan | 135-145 paying stores |
| $79/month pro plan | 85-90 paying stores |
| $199/month agency plan | 33-36 paying accounts |
| $49 one-time only | About 140-150 purchases every month, continuously |

### Hard Judgment

One-time $49 reports alone are not attractive enough for autonomous scale.

The app needs recurring revenue:

- monthly monitoring
- change alerts
- readiness history
- new-market modules
- agency reporting

If it remains a one-off scan, it risks becoming a low-ticket tool with constant acquisition pressure.

### Time To Revenue

Directional estimate:

| Milestone | Estimate | Reason |
|---|---:|---|
| First manual scanner sale | 7-21 days | Can use current Audit outreach and sell a scan/report manually |
| First self-serve web scanner sale | 30-60 days | Needs landing page, URL intake, payment, report automation |
| First Shopify app revenue | 60-120+ days | App build, Shopify review, listing, billing, merchant onboarding |
| JPY 1M/month | 12-24 months | Requires app installs, retention, reviews, and recurring plan adoption |

## 6. Entry Barrier

### Initial Barrier

```text
Medium-low
```

A basic AI website scanner is easy to copy.

### Real Barrier

The barrier must be built through operational learning:

1. Japan-readiness rulebase
2. Category-specific scoring
3. Shopify-specific data access
4. Real audit examples from Founder Beta
5. Merchant feedback loop
6. Benchmark dataset
7. App Store reviews
8. Integrations and reports agencies can reuse
9. Monitoring history and alerts

### What Is Not A Barrier

- "AI can generate a report"
- "We know Japan"
- "We have a checklist"
- "We can make a Shopify app"

Those are weak in 2026.

### What Can Become A Barrier

```text
Scoring accuracy + merchant trust + Shopify distribution + accumulated readiness data.
```

## Recommended MVP

Do not start with a full Shopify app immediately.

Start with:

```text
Self-serve scanner prototype
```

MVP flow:

1. Merchant enters Shopify store URL.
2. Scanner crawls public pages.
3. AI/rules generate score.
4. User sees free summary.
5. User pays for detailed report.
6. Human approves first reports.
7. Store issues are logged into a rulebase.

Then build Shopify app only if:

- merchants understand the value
- scans produce useful repeated patterns
- at least 5-10 merchants show willingness to pay
- recurring monitoring feels valuable

## Relationship To Current Audit

Do not stop `Japan Readiness Audit`.

But change its role:

```text
Manual Audit = customer data collection and rulebase creation
Scanner = autonomous business candidate
```

Every manual audit should feed:

- issue taxonomy
- scoring rules
- sample report sections
- category-specific objections
- before/after recommendations
- automation edge cases

## Biggest Risks

### Risk 1: Merchants Do Not Search For Japan Readiness

Mitigation:

Position broader:

```text
International Buyer Trust Scanner
```

Japan is the first destination module.

### Risk 2: App Store Discovery Is Slow

Mitigation:

Use parallel channels:

- current Audit outreach
- SEO pages
- Shopify community posts
- productized free scan
- agency partnerships

### Risk 3: AI Hallucinates Advice

Mitigation:

Use rules first.  
AI explains findings only after evidence is found.

### Risk 4: It Becomes Another Manual Service

Mitigation:

Set a rule:

```text
If a finding cannot be turned into a reusable rule after 3 occurrences, it is not core product scope.
```

### Risk 5: Japan Niche Is Too Narrow

Mitigation:

Keep architecture modular:

- Japan readiness
- EU readiness
- US readiness
- cross-border trust readiness

But do not expand before Japan module is validated.

## Final Judgment

```text
GO WITH CAUTION
```

`Shopify Japan Readiness Scanner` is aligned with the CEO's autonomous-business goal.

But the correct next step is not a full Shopify app build.

The correct next step is:

```text
Build a self-serve scanner prototype from current Audit learnings.
Use Founder Beta audits to create the scoring rulebase.
Convert to Shopify app only after demand and repeatable findings are proven.
```

## Next Actions

1. Keep sending Japan Readiness Audit outreach for customer reaction data.
2. Define the scanner's first 20 automatic rules.
3. Build a self-serve URL intake + free score prototype before full Shopify App Store submission.

## CEO Decision

Current manual Audit:

```text
CONTINUE AS DATA COLLECTION
```

Shopify Japan Readiness Scanner:

```text
START AS AUTONOMOUS PRODUCT LINE
```

Full Shopify app:

```text
DO NOT BUILD FULL APP YET
```

Reason:

The Shopify app is likely the right final form, but the first proof should be a lightweight scanner that validates demand and rules before App Store review complexity.
