# User Validation Plan V1

## Decision

`AI_INFRA_OPPORTUNITY_MAP_V1.md` is adopted.

Long-term watchlist:

- AI Usage Audit
- AI Cost Optimization
- AI Routing

However:

```text
Revenue Risk Scanner priority does not change.
```

The next phase is customer validation.

## Current Priority Order

1. Real user acquisition
2. Finding quality improvement
3. Email capture flow
4. Paid validation
5. AI Usage Audit logs

The company should not delay MVP exposure to build internal AI infrastructure features.

## Product Validation Goal

Validate whether ecommerce operators care about the output.

The core validation question is:

```text
Can Revenue Risk Scanner produce 3 findings that a real user did not notice and can act on?
```

Secondary validation question:

```text
Will users give an email or show paid intent after seeing the findings?
```

## 1. First 10 Users Acquisition Method

### Target User Definition

First users should be:

- ecommerce operators
- Shopify/DTC founders
- small brand owners
- ecommerce marketers
- CRO consultants
- Shopify agencies

Avoid:

- generic startup founders with no store
- people who only want to discuss AI
- enterprise teams needing procurement
- users who cannot provide feedback

### First 10 User Mix

| Source | Target Users | Why |
|---|---:|---|
| Warm founder/operator contacts | 3 | Fastest feedback, lower trust barrier |
| Ecommerce communities | 2 | Real operators, careful non-promotional approach |
| Shopify/CRO freelancers or agencies | 2 | Can judge finding quality quickly |
| Public DTC store owners via soft outreach | 2 | Tests cold relevance |
| Existing AI/business network | 1 | Fast feedback, but lower market purity |

Total:

```text
10 users
```

### Outreach Positioning

Do not pitch:

```text
Please buy my tool.
```

Ask:

```text
I am testing a URL-only ecommerce pre-audit. It tries to find buyer-facing reasons people may hesitate before buying. Could I run your store URL and ask whether the top 3 findings are useful or obvious?
```

### First 10 User Success Criteria

| Metric | Target |
|---|---:|
| Users who allow scan | 10 |
| Users who give feedback | 7 |
| Users who say at least 1 finding is useful | 5 |
| Users who say "I did not notice that" | 2 |
| Users who share email | 5 |
| Paid-intent signals | 1 |

If fewer than 3 of 10 users find the output useful, acquisition should pause and finding quality must improve.

## 2. First 100 Diagnosis Acquisition Method

### Goal

```text
100 completed scans
```

At least 50 should involve external feedback, email capture, or user-initiated submission.

### 100 Scan Mix

| Source | Target Scans | Primary Purpose |
|---|---:|---|
| Manual benchmark scans | 20 | Improve finding quality |
| First 10 user scans + referrals | 15 | Feedback loop |
| Soft outreach to DTC/Shopify stores | 20 | Test cold relevance |
| Ecommerce/community feedback posts | 15 | Learn objections |
| SEO landing pages | 10 | Test passive intent |
| Public teardown content | 10 | Build trust and examples |
| Agency/CRO partner feedback | 10 | Test B2B/API angle |

Total:

```text
100 scans
```

### 100 Scan Rule

Every scan must create one of:

- finding quality data
- email capture
- user feedback
- paid-intent signal
- repeated finding pattern

If a scan creates none of these, it is not useful validation.

## 3. MVP Inflow Routes

### Route 1: Direct Feedback Link

Use for first 10 users.

Flow:

```text
personal ask
-> scan URL
-> top 3 findings
-> feedback question
```

Best for:

- fast learning
- high feedback rate
- early trust

### Route 2: Public Free Scan Page

Flow:

```text
landing page
-> URL input
-> first finding shown
-> email capture for full finding list
```

Best for:

- email capture
- self-serve validation
- SEO/community traffic

### Route 3: Teardown Content

Flow:

```text
anonymized example finding
-> explanation of buyer hesitation
-> CTA to run free scan
```

Best for:

- trust building
- SEO
- community feedback

### Route 4: Agency/CRO Partner Feedback

Flow:

```text
ask expert to judge finding quality
-> scan 3 sample stores
-> ask which findings are client-useful
```

Best for:

- quality calibration
- future API/use-case validation

### Route 5: SEO Entry Pages

Initial pages:

- shipping policy checker
- return policy checker
- duties/taxes checker
- ecommerce revenue risk scanner

Best for:

- slow compounding
- high-intent discovery
- scan volume later

## 4. Measurement Metrics

### Acquisition Metrics

| Metric | Why It Matters |
|---|---|
| visits to scan page | top-of-funnel interest |
| URL submissions | core activation |
| completed scans | product usage |
| scan completion rate | technical/product friction |
| source channel | which channel brings serious users |

### Finding Quality Metrics

| Metric | Target |
|---|---:|
| top 3 findings generated | 100% of completed scans |
| findings with evidence URL | 100% |
| findings with evidence snippet or absence proof | 80%+ |
| findings rated useful | 50%+ |
| "I did not notice that" responses | 3+ in first 100 scans |
| false-positive rate | under 20% |

### Email Metrics

| Metric | Target |
|---|---:|
| email capture rate | 20-30% |
| email after first finding | higher than pre-scan gate |
| report request rate | 10%+ |

### Paid Validation Metrics

| Metric | Target |
|---|---:|
| asks for full report | 3+ |
| asks for fix copy | 2+ |
| asks for monitoring | 1+ |
| asks price | 1+ |
| pays | optional in first 100 scans |

In this phase, willingness-to-pay signals matter more than immediate revenue.

## 5. AI Usage Audit Log Feasibility

### Proposed Internal Log Fields

For each scan, the system could record:

| Field | Purpose |
|---|---|
| scan_id | trace one scan |
| created_at | timing |
| input_url_domain | scan target |
| model_name | model cost tracking |
| estimated_input_tokens | cost estimate |
| estimated_output_tokens | cost estimate |
| estimated_openai_cost_jpy | unit economics |
| response_time_ms | performance |
| finding_count | output density |
| top_finding_categories | quality analytics |
| error_flag | reliability |
| error_type | debugging |
| email_captured | conversion |
| feedback_value | quality validation |

### Should This Be Built Now?

```text
Only if it is lightweight.
```

Build now if:

- it takes less than half a day
- it does not block public MVP
- it uses simple DB table or JSON log
- it helps debugging and unit economics

Do not build now if:

- it requires dashboard work
- it requires complex analytics
- it delays first user acquisition
- it creates privacy/security questions
- it distracts from finding quality

### Minimum Acceptable Version

If implemented, keep it simple:

```json
{
  "model_name": "gpt-4.1-mini",
  "estimated_cost_jpy": 20,
  "response_time_ms": 4200,
  "finding_count": 5,
  "error": false
}
```

This is internal only.

It must not appear in customer-facing UI.

### Priority Judgment

```text
Priority 5
```

AI Usage Audit logging is strategically useful, but it is not the current bottleneck.

The current bottleneck is:

```text
real users + strong findings
```

## 6. Validation Workflow

### Per User

1. Receive or choose store URL.
2. Run scan.
3. Capture top 3 findings.
4. Ask user to classify each finding:
   - useful
   - already knew
   - wrong
   - want help fixing
5. Ask for email if not already captured.
6. Record paid-intent signal.

### Per 10 Users

Review:

- strongest repeated finding
- weakest repeated finding
- false positives
- unclear evidence
- best acquisition source
- email capture behavior

### Per 100 Scans

Decide:

```text
GO: Continue user acquisition and add paid offer
CAUTION: Improve finding quality before more traffic
STOP: Reposition if users do not care
```

## 7. First 14-Day Plan

### Days 1-2

- Prepare public scan page or shareable MVP URL.
- Add simple email capture if already easy.
- Prepare feedback form with 4 response options.

### Days 3-5

- Recruit first 10 users.
- Run scans.
- Collect feedback.

### Days 6-8

- Review first 10 users.
- Remove/refine weak finding categories.
- Improve evidence wording.

### Days 9-11

- Run 20 benchmark scans.
- Identify repeated findings.
- Prepare 3 teardown examples.

### Days 12-14

- Start community/SEO inflow.
- Reach 30-40 total scans.
- Decide whether to add paid report CTA.

## 8. Decision Gates

### Gate 1: First 10 Users

Proceed if:

- 5+ users say at least one finding is useful
- 2+ users say they did not notice a finding
- false positives do not dominate

### Gate 2: First 50 Scans

Proceed if:

- 10+ emails captured
- 2+ paid-intent signals
- repeated high-quality finding categories are visible

### Gate 3: First 100 Scans

Proceed if:

- 30+ emails captured
- 3+ "did not notice" confirmations
- 1+ strong paid-intent signal
- false-positive rate under 20%

## 9. What Not To Do

Do not:

- build dashboards before users
- build AI Usage Audit UI now
- prioritize Shopify App Store now
- hide weak findings behind a score
- turn user validation into consulting
- ask for email before showing value
- chase new business ideas before 100 scans

## Final CEO Judgment

```text
GO
```

Proceed with user validation.

Revenue Risk Scanner remains priority.

AI Usage Audit logging is allowed only as a lightweight internal log and must not delay MVP exposure.

## Next Three Actions

1. Recruit first 10 users with a feedback-first ask.
2. Run scans and record whether top findings are useful, obvious, wrong, or fix-worthy.
3. Build or defer minimal internal AI usage logging based on whether it can be done without delaying user acquisition.
