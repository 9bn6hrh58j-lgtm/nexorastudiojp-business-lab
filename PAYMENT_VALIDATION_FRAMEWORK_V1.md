# Payment Validation Framework V1

## Decision

`FINDING_VALIDATION_PLAN_V1.md` is adopted.

Add one more validation layer.

```text
Layer 1: Finding Validation
Layer 2: Payment Validation
```

Do not treat diagnosis count as the main indicator.

The business must validate:

```text
Will a real user pay instead of building this internally?
```

## Validation Layers

### Layer 1: Finding Validation

Question:

```text
Did the user get a useful finding?
```

Measures:

- known vs unknown
- insight
- action intent
- objection rate

### Layer 2: Payment Validation

Question:

```text
Would the user pay for this, use it monthly, or build it internally?
```

Measures:

- perceived value
- monthly usage intent
- build-vs-buy preference
- buying likelihood
- reason behind decision

## Primary KPI

```text
Payment Validation Rate
```

Formula:

```text
Payment Validation Rate =
users who say "would buy" or "maybe buy" / users who reviewed findings
```

However, `maybe buy` is weak unless paired with a reason.

Stronger formula:

```text
Qualified Payment Validation Rate =
users who say buy/maybe buy AND explain a concrete use case / users reviewed
```

## First Validation Target

For the first 10 users:

| Metric | Target |
|---|---:|
| Users reviewed | 10 |
| Users with new insight | 3+ |
| Users with action intent | 3+ |
| Users with buy/maybe-buy signal | 2+ |
| Users who prefer buying over building | 2+ |
| Users who clearly say they would build internally | Track, not failure by itself |

### Pass Condition

Proceed if:

```text
3+ users have insight
AND
2+ users show buy/maybe-buy signal
```

If insight exists but payment does not:

```text
The product may be useful but not yet monetizable.
```

## 1. Required Payment Questions

Add these questions to the diagnosis after-survey.

### Q1. Was this finding valuable?

Type:

```text
Multiple choice
```

Options:

- Yes, clearly valuable
- Somewhat valuable
- Not valuable
- Not sure

Measures:

```text
Finding value perception
```

### Q2. Would you want to use this monthly?

Type:

```text
Multiple choice
```

Options:

- Yes, monthly
- Maybe, only when making store changes
- Maybe, only before campaigns or launches
- No, one-time only
- No, not useful enough

Measures:

```text
recurring usage intent
```

### Q3. Would your team build this internally?

Type:

```text
Multiple choice
```

Options:

- Yes, we would likely build it ourselves
- Maybe, if it became important
- No, we would rather buy it
- No, we do not have time or capability
- Not sure

Measures:

```text
build risk
```

### Q4. Would you buy this if the findings were accurate and repeated over time?

Type:

```text
Multiple choice
```

Options:

- Yes
- Maybe
- No
- Only if it included fix copy
- Only if it included benchmarks
- Only if it monitored changes over time

Measures:

```text
buying intent and required value layer
```

### Q5. Why do you think so?

Type:

```text
Paragraph
```

Required:

```text
Yes
```

Measures:

```text
decision reason
```

This is the most important question.

Without the reason, a yes/no answer is too shallow.

## 2. Build Vs Buy Interview Design

### Purpose

The interview should reveal whether the user would:

- buy Revenue Risk Scanner
- build something similar internally
- use ChatGPT/Claude manually
- ask an agency/consultant
- ignore the issue

### Interview Questions

Ask after showing top findings.

#### Question 1

```text
If you wanted to get this type of diagnosis again next month, what would you do?
```

Listen for:

- use this tool
- ask ChatGPT
- ask internal team
- ask agency
- ignore it

#### Question 2

```text
Could your team create a similar diagnosis with ChatGPT, Claude, or internal tools?
```

Follow-up:

```text
If yes, what would make buying this still worth it?
```

#### Question 3

```text
Which part would be hardest for you to recreate internally?
```

Options to listen for:

- benchmark comparison
- repeated monitoring
- evidence extraction
- category-specific knowledge
- knowing what matters most
- saving time
- fix copy
- reporting

#### Question 4

```text
Would you trust this more if it compared your store against similar stores?
```

Follow-up:

```text
What comparison would be most useful?
```

#### Question 5

```text
At what price would this be an easy yes, a maybe, and a no?
```

Capture:

- easy yes price
- maybe price
- too expensive price

#### Question 6

```text
Would you prefer a one-time report, monthly monitoring, or API/export for your team?
```

Capture:

- one-time value
- recurring value
- API/agency value

## 3. Build Vs Buy Signal Classification

| Signal | Meaning | Action |
|---|---|---|
| Buy now | Strong payment signal | Interview deeply |
| Maybe buy with fix copy | Product needs implementation layer | Test copy-ready fixes |
| Maybe buy with benchmarks | Moat should prioritize benchmarks | Build benchmark collection |
| Maybe buy with monitoring | Recurring product angle | Test monthly plan |
| Would build internally | High build risk | Find missing moat |
| Would use ChatGPT manually | Product is not differentiated enough | Improve evidence/benchmarks |
| Would ask agency | Potential partner/API angle | Explore agency workflow |
| Would ignore | Weak pain | Do not prioritize segment |

## 4. Payment Validation Metrics

### Value Rate

Formula:

```text
Value Rate =
users saying clearly/somewhat valuable / users reviewed
```

Target first 10:

```text
50%+
```

### Monthly Intent Rate

Formula:

```text
Monthly Intent Rate =
users saying yes monthly or maybe for changes/campaigns / users reviewed
```

Target first 10:

```text
30%+
```

### Buy Preference Rate

Formula:

```text
Buy Preference Rate =
users saying they would rather buy than build / users reviewed
```

Target first 10:

```text
20%+
```

### Build Risk Rate

Formula:

```text
Build Risk Rate =
users saying they would likely build internally / users reviewed
```

Interpretation:

- High build risk is not automatically failure.
- It means the product must add benchmark/history/workflow value.

Target:

```text
Track only in first 10 users.
```

### Qualified Buy Signal

A qualified buy signal requires:

1. user says yes/maybe buy
2. user gives a concrete reason
3. user names a use case

Examples:

Strong:

```text
I would use this before product launches because it catches policy issues my team misses.
```

Weak:

```text
Interesting tool.
```

## 5. Survey Block To Add

Add this section after the Finding Validation questions.

### Section Title

```text
Payment & Build-vs-Buy
```

### Intro Text

```text
The next questions are not a sales pitch.
We are testing whether this type of finding is valuable enough to buy, or whether teams would rather create it internally with AI tools.
```

### Questions

1. Was this finding/report valuable?
   - Yes, clearly valuable
   - Somewhat valuable
   - Not valuable
   - Not sure

2. Would you want to use this monthly?
   - Yes, monthly
   - Maybe, only when making store changes
   - Maybe, only before campaigns or launches
   - No, one-time only
   - No, not useful enough

3. Would your team build this internally?
   - Yes, likely
   - Maybe, if it became important
   - No, we would rather buy
   - No, we do not have time/capability
   - Not sure

4. Would you buy this if findings were accurate and repeated over time?
   - Yes
   - Maybe
   - No
   - Only with fix copy
   - Only with benchmarks
   - Only with monitoring

5. Why do you think so?
   - Paragraph answer

6. What would make this worth paying for?
   - Paragraph answer

7. What price would feel reasonable?
   - Free text or multiple choice:
     - under JPY 3,000/month
     - JPY 3,000-9,800/month
     - JPY 9,800-29,800/month
     - JPY 29,800+/month
     - one-time report only

## 6. Decision After First 10 Users

### GO

Proceed if:

- 3+ users had a new insight
- 2+ users show qualified buy/maybe-buy signal
- at least 1 user prefers buying over building
- objections are not dominant

### CAUTION

Proceed carefully if:

- findings create insight
- but users say they would build internally
- or users only want one-time free usage

Action:

```text
Add benchmark/history/monitoring angle before paid push.
```

### STOP / Rework

Pause if:

- findings do not create insight
- users would not act
- users would not pay
- users say ChatGPT/Claude can do enough

Action:

```text
Do not scale acquisition. Rework finding quality and moat.
```

## 7. What This Means For Product Strategy

### If Users Say "I Would Build This"

Do not argue.

Ask:

```text
What would be hard for you to build?
```

Then build around that answer.

### If Users Say "I Would Use ChatGPT"

The product must add:

- benchmark comparison
- better evidence
- repeated monitoring
- faster workflow
- lower false positives
- category-specific knowledge

### If Users Say "I Would Buy With Benchmarks"

Prioritize:

```text
validated finding database + industry comparison
```

### If Users Say "I Would Buy With Fix Copy"

Prioritize:

```text
copy-ready fixes
```

### If Users Say "I Would Buy With Monitoring"

Prioritize:

```text
monthly monitoring
```

## Final CEO Judgment

```text
GO
```

Proceed with two-layer validation:

1. Finding Validation
2. Payment Validation

Do not treat scans as progress unless they produce payment insight.

The critical question is:

```text
Would the customer pay, or would they build/use AI internally?
```

## Next Three Actions

1. Add the Payment & Build-vs-Buy survey block to the diagnosis after-survey.
2. Run the first 10-user validation and record buy/build reasons, not just yes/no answers.
3. Decide whether the paid wedge is fix copy, benchmarks, monitoring, or API based on interview responses.
