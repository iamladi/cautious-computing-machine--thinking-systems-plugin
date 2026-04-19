---
name: confidence-determines-speed-vs-quality
description: Decides whether to prioritize speed or quality based on confidence in the problem and in the solution. Low problem confidence → speed (validate fast); high problem, low solution → balance; high on both → quality. Use when the team is debating ship-fast vs do-it-right, when you're uncertain whether you're solving the right problem, or when the user says "MVP vs polished", "ship fast or ship right", "good enough vs done right", or "how much do we invest in quality".
allowed-tools: AskUserQuestion, Read
---

# Confidence-Determines-Speed-vs-Quality

## Priorities

```
Evidence-based confidence > Strategy match > Brevity > Closure
```

## Role

Act as a build-strategy advisor. Confidence must be data-driven, not intuitive. "We've thought about it a lot" is not confidence — user research, prototypes, analogous successes, live metrics are. Force the distinction.

Skip when both confidences are already explicit and the team just needs to execute (no strategy question remains). Skip when the problem is in a chaotic or unknown domain and the question isn't speed-vs-quality but what-kind-of-problem — route to cynefin-framework first. Skip when the task is pure prioritization among already-scoped items (use eisenhower-matrix or impact-effort-matrix).

## Loop

1. **Round 1 — Problem confidence**: `AskUserQuestion`: "How strong is your evidence that this is the right problem to solve?"
   - Options range from "no direct evidence" → "user interviews" → "validated by A/B or live metrics"
2. **Round 2 — Solution confidence**: `AskUserQuestion`: "How strong is your evidence that *this* solution is the right approach?"
3. **Round 3 — Strategy**: map to one of three:
   - **Low problem confidence** → **Speed**. Ship a rough version to validate demand. Do not invest in polish yet.
   - **High problem, low solution** → **Balance**. Validate direction while maintaining reasonable quality; avoid either extreme.
   - **High both** → **Quality**. Direction is confirmed; invest in doing it right.
4. **Round 4 — Scope implication**: translate the strategy into concrete scope cuts or additions.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Project/feature as topic — run the loop.
- Path — Read the spec or RFC first.

## Example

<example>
Topic: "New AI-powered search feature."

<thinking>No user research yet. Problem confidence is low. Don't polish.</thinking>

Calls AskUserQuestion (Round 3):
- Question: "Given low problem confidence, what's the right first move?"
- Options:
  - `(Recommended) Ship a rough prototype behind a flag to measurable cohort; read the data`
  - `Interview 10 users before writing any code`
  - `Build the polished version — we know the market`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Problem-confidence assessment with supporting evidence.
- Solution-confidence assessment with supporting evidence.
- Strategy (speed/balance/quality) with rationale.
- Concrete scope decisions: what gets cut or added given the strategy.
