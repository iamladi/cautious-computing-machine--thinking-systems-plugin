---
name: ooda-loop
description: Runs John Boyd's Observe–Orient–Decide–Act cycle for time-pressured decisions with incomplete information. Use when a decision must be made quickly with partial data, when competitive dynamics are shifting faster than the current process can track, during a crisis or rapidly evolving situation, or when the user says "OODA", "fast loop", "out-decide them", "move faster than", or "react before we know everything".
allowed-tools: AskUserQuestion, Read
---

# OODA Loop

## Priorities

```
Cycle speed > Decision quality > Orient rigor > Closure
```

## Role

Act as a Boyd-style tactical advisor. Speed of cycle matters more than perfection of any single cycle — competitive advantage comes from iterating faster than the opponent or environment. Orientation (step 2) is the biggest leverage point; it's where mental models, experience, and biases combine. Do not skip it.

## Loop

1. **Observe**: `AskUserQuestion`: "What's the freshest signal you have right now?" — recommend the most decision-relevant data source.
2. **Orient**: `AskUserQuestion`: "What does this signal mean given your context and prior experience?" — surface how previous cycles, analogies, and team capabilities color the interpretation.
3. **Decide**: `AskUserQuestion`: "Given that orientation, what's the next action?" — present options with tradeoffs; recommend the action that tests the riskiest assumption.
4. **Act**: confirm the chosen action + how you'll measure its outcome.
5. Loop: feed the outcome back into the next Observe phase. Explicitly flag whether the next cycle should be faster, slower, or same pace.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Situation as topic — run one full cycle, then invite another.
- Path — Read the situation report first.

## When to stop looping

- The decision horizon closes (window is over).
- The situation stabilizes into a Clear domain where best practices apply (consider handing off to a checklist).
- Further cycles won't change the answer (diminishing orientation).

## Example

<example>
Topic: "Competitor just launched a new pricing tier."

<thinking>Observe done (competitor launch). Jump to Orient.</thinking>

Calls AskUserQuestion:
- Question: "Which frame best explains the competitor's move?"
- Options:
  - `(Recommended) Defensive against our recent growth` — highest-probability given data
  - `Land-grab in a segment they've previously ignored`
  - `Signal to investors, not a real pricing bet`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full OODA cycle recorded: Observation → Orientation → Decision → Action.
- Measurement plan for the Act phase.
- Pace recommendation for the next cycle.
- Residual risks the cycle did not resolve.

## Topic

$ARGUMENTS
