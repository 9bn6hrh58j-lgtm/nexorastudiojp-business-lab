# Finding Validation Plan V1

## Decision

`USER_VALIDATION_PLAN_V1.md` is adopted.

However, the KPI is revised.

Do not treat the number of scans as the primary KPI.

New primary KPI:

```text
Finding Validation
```

## Why This Change Matters

100 scans with weak findings is not progress.

10 users who say:

```text
I did not notice that.
```

is real signal.

Revenue Risk Scanner must validate customer value before scaling acquisition.

## Primary Validation Question

For each finding:

1. Did the customer already know this?
2. Did the customer gain a new insight?
3. Does the customer want to act on it?
4. Would the customer pay for this kind of finding?

## First Goal

```text
10 users
```

Pass condition:

```text
3 or more users answer that they had a new insight.
```

This is the first validation gate.

## KPI Hierarchy

### Primary KPI

```text
Finding Validation Rate
```

Formula:

```text
Finding Validation Rate =
users with at least 1 validated finding / users who reviewed findings
```

A validated finding means:

```text
The user says it created a new insight or made them want to act.
```

### Secondary KPIs

| KPI | Meaning |
|---|---|
| New Insight Rate | Share of users who say at least one finding was new |
| Action Intent Rate | Share of users who want to fix at least one finding |
| Payment Value Rate | Share of users who say the finding has paid value |
| Known Finding Rate | Share of findings the user already knew |
| Objection Rate | Share of findings the user says are wrong or not relevant |

### Scan Count Role

Scan count is only a volume metric.

It is not success by itself.

## 1. Finding Validation Framework

### Per Finding Questions

Each finding should be validated with four questions:

| Question | Answer Options | What It Measures |
|---|---|---|
| Did you already know this? | Yes / No / Partly | known vs new |
| Did this create a useful insight? | Yes / No / Not sure | insight value |
| Would you want to fix this? | Yes / No / Later | action intent |
| Would you pay for this kind of finding? | Yes / No / Maybe | commercial value |

### Finding Validation Status

| Status | Definition |
|---|---|
| Validated | New insight or action intent |
| Commercially validated | New insight + payment value |
| Known but useful | User knew it but still wants to fix |
| Weak | User already knew it and does not care |
| Invalid | User says it is wrong or irrelevant |

## 2. First 10 User Test

### Target Users

First 10 users should be real ecommerce-related people:

- Shopify/DTC founders
- ecommerce operators
- small brand owners
- ecommerce marketers
- Shopify freelancers
- CRO consultants

Avoid:

- people without stores
- people only interested in AI tools
- friends who will only be polite
- enterprise buyers requiring long sales cycles

### User Flow

```text
Ask permission
-> run scan
-> show top 3 findings
-> ask validation questions
-> ask optional email
-> record whether paid value exists
```

### Success Criteria

| Metric | Target |
|---|---:|
| Users reviewed | 10 |
| Users with new insight | 3+ |
| Users with action intent | 3+ |
| Users saying paid value maybe/yes | 1+ |
| Users objecting to most findings | fewer than 3 |

### Decision Gate

If:

```text
3+ users report a new insight
```

then:

```text
continue to 30-user validation
```

If fewer than 3 users report a new insight:

```text
pause acquisition and improve finding quality
```

## 3. Finding-Level Metrics

### New Insight Rate

Formula:

```text
New Insight Rate =
findings marked "new insight" / reviewed findings
```

Target:

```text
30%+ in first 10 users
```

### Action Intent Rate

Formula:

```text
Action Intent Rate =
findings users want to fix / reviewed findings
```

Target:

```text
25%+ in first 10 users
```

### Payment Value Rate

Formula:

```text
Payment Value Rate =
findings marked paid value yes/maybe / reviewed findings
```

Target:

```text
10%+ in first 10 users
```

### Known Finding Rate

Formula:

```text
Known Finding Rate =
findings already known / reviewed findings
```

Interpretation:

- high known rate is not always bad
- known + action intent can still be valuable
- known + no action is weak

### Invalid Finding Rate

Formula:

```text
Invalid Finding Rate =
findings marked wrong or irrelevant / reviewed findings
```

Target:

```text
under 20%
```

## 4. Finding Categories To Track

Track validation by category.

| Finding Category | Why Track |
|---|---|
| Duties/taxes unclear | likely high surprise in cross-border stores |
| International returns unclear | likely high buyer-risk value |
| Return shipping cost unclear | concrete and fixable |
| Supported countries unclear | high cross-border relevance |
| Delivery timing unclear | common but may be known |
| Contact response expectation missing | useful if specific |
| FAQ/help gap | can be useful, but easy to overstate |
| Product detail gap | category-dependent |
| Social proof near CTA missing | needs strong page evidence |
| Policy contradiction | rare but very high value |

After 10 users, identify:

- best insight category
- best action category
- most objected category
- most known category

## 5. Diagnosis After-Survey

### Survey Title

```text
Revenue Risk Scanner Finding Feedback
```

### Survey Intro

```text
Thanks for reviewing the scan. This is an early validation test.
The goal is not to rate your store, but to learn whether the findings are useful, obvious, wrong, or worth paying for.
```

### Required Questions

#### Q1. Which store URL did we scan?

Type:

```text
Short answer
```

Required:

```text
Yes
```

#### Q2. Which role best describes you?

Type:

```text
Multiple choice
```

Options:

- Founder / owner
- Ecommerce operator
- Marketer / growth
- Shopify developer / agency
- CRO / UX consultant
- Other

Required:

```text
Yes
```

#### Q3. Before seeing the findings, did you already know the issues?

Type:

```text
Multiple choice
```

Options:

- I knew most of them
- I knew some of them
- I did not know at least one important issue
- I am not sure

Required:

```text
Yes
```

#### Q4. Did any finding create a new insight?

Type:

```text
Multiple choice
```

Options:

- Yes, clearly
- Yes, somewhat
- No
- Not sure

Required:

```text
Yes
```

#### Q5. Which finding was most useful?

Type:

```text
Paragraph
```

Required:

```text
Yes
```

#### Q6. Did any finding feel wrong or irrelevant?

Type:

```text
Paragraph
```

Required:

```text
Yes
```

Prompt:

```text
If yes, please tell us which one and why.
```

#### Q7. Would you want to fix any of the findings?

Type:

```text
Multiple choice
```

Options:

- Yes, immediately
- Yes, later
- Maybe
- No

Required:

```text
Yes
```

#### Q8. Would this type of scan be worth paying for if the findings were accurate?

Type:

```text
Multiple choice
```

Options:

- Yes
- Maybe
- No
- Only if it included fix copy
- Only if it monitored changes over time

Required:

```text
Yes
```

#### Q9. What would make this valuable enough to pay for?

Type:

```text
Paragraph
```

Required:

```text
No
```

#### Q10. Can we contact you with the improved report?

Type:

```text
Short answer
```

Prompt:

```text
Email address
```

Required:

```text
No
```

### Optional Per-Finding Mini Survey

For each of the top 3 findings, ask:

```text
Finding #1: [finding summary]
```

Questions:

| Question | Options |
|---|---|
| Did you already know this? | Yes / No / Partly |
| Did this create a useful insight? | Yes / No / Not sure |
| Would you want to fix this? | Yes / No / Later |
| Would you pay for this kind of finding? | Yes / No / Maybe |

This is more accurate than only asking about the report overall.

## 6. Data Table

Track results in a simple sheet.

| Field | Type |
|---|---|
| user_id | text |
| date | date |
| store_url | text |
| role | text |
| acquisition_source | text |
| finding_1_category | text |
| finding_1_known | yes/no/partly |
| finding_1_insight | yes/no/not sure |
| finding_1_action_intent | yes/no/later |
| finding_1_paid_value | yes/no/maybe |
| finding_1_objection | text |
| finding_2_category | text |
| finding_2_known | yes/no/partly |
| finding_2_insight | yes/no/not sure |
| finding_2_action_intent | yes/no/later |
| finding_2_paid_value | yes/no/maybe |
| finding_2_objection | text |
| finding_3_category | text |
| finding_3_known | yes/no/partly |
| finding_3_insight | yes/no/not sure |
| finding_3_action_intent | yes/no/later |
| finding_3_paid_value | yes/no/maybe |
| finding_3_objection | text |
| user_had_new_insight | yes/no |
| user_wants_to_act | yes/no |
| user_sees_paid_value | yes/no/maybe |
| email | text |
| notes | text |

## 7. Interpretation Rules

### Strong Signal

```text
User did not know the issue + wants to act + maybe/yes paid value.
```

### Medium Signal

```text
User knew the issue but wants to act.
```

### Weak Signal

```text
User knew the issue and does not care.
```

### Negative Signal

```text
User says the finding is wrong or irrelevant.
```

## 8. Decision After First 10 Users

### GO

If:

- 3+ users had a new insight
- 3+ users want to act
- 1+ user sees paid value
- invalid finding rate is not dominant

Then:

```text
continue to 30 users and add lightweight email capture.
```

### CAUTION

If:

- 1-2 users had a new insight
- findings are useful but too obvious
- many findings need better evidence

Then:

```text
pause acquisition growth and improve top finding categories.
```

### STOP / REPOSITION

If:

- 0 users had a new insight
- users say findings are generic
- users say findings are wrong
- no one wants to act

Then:

```text
do not scale traffic. Rework the finding engine and positioning.
```

## 9. What Not To Optimize Yet

Do not optimize for:

- scan count
- score design
- dashboard polish
- paid plans
- API pricing
- Shopify App Store
- AI Usage Audit logs

until first 10-user finding validation is complete.

## Final CEO Judgment

```text
GO
```

Proceed with first 10-user validation.

The first milestone is not:

```text
100 scans
```

It is:

```text
3 out of 10 users report a new insight from the findings.
```

## Next Three Actions

1. Recruit 10 ecommerce-relevant users.
2. Show each user the top 3 findings and run the after-survey.
3. Decide GO / CAUTION / STOP based on new insight, action intent, paid value, and objection rate.
