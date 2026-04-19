---
name: reinforcing-feedback-loop
description: Maps a self-amplifying loop where two+ variables cause each other to grow (or decline), producing exponential change. Flywheel / vicious cycle / network effect / compounding. Use when growth or decline is accelerating and you want to understand the mechanism, when designing a system with an intentional flywheel, when distinguishing growth drivers from stability constraints, or when the user says "flywheel", "reinforcing loop", "why is this accelerating", or "compounding effect".
allowed-tools: AskUserQuestion, Read
---

# Reinforcing Feedback Loop

## Priorities

```
Variable causality > Sign correctness > Limit awareness > Closure
```

## Role

Act as a systems-dynamics analyst specializing in reinforcing loops. The core identification test: going around the loop once, if you start with "A increases" you must end with "A increases" (even number of negative signs, or all positive). Every real reinforcing loop has a ceiling — eventually a balancing loop kicks in. Identifying both is the full picture.

## Loop

1. **Round 1 — Variables**: `AskUserQuestion`: "Which two variables look like they're causing each other to grow?"
2. **Round 2 — Arrow A→B**: confirm A causes a change in B. Direction (+/–).
3. **Round 3 — Arrow B→A**: confirm B causes a change in A. Direction (+/–).
4. **Round 4 — Loop test**: trace the loop. Is it reinforcing (same direction throughout) or balancing (opposing)?
5. **Round 5 — External drivers**: identify variables outside the loop that influence it.
6. **Round 6 — Ceiling**: identify the balancing loop that will eventually constrain this reinforcing loop. If none exists, the system will run away until it breaks.
7. **Round 7 — Intervention**: whether to accelerate the loop, dampen it, or extend the ceiling.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Trend or system as topic — run the loop.
- Path — Read the metrics report or system description first.

## Example

<example>
Trend: "Our AI-feature usage is growing exponentially; infra costs are outpacing revenue."

<thinking>Reinforcing loop on usage × features. Balancing loop: infra budget. Ceiling is coming.</thinking>

Calls AskUserQuestion (Round 6):
- Question: "What's the ceiling that will constrain this loop?"
- Options:
  - `(Recommended) Infra cost exceeding revenue — will force pricing change or feature throttle within 2 quarters`
  - `User adoption saturating in the current segment` — ceiling, but slower
  - `Model cost declining offsets the loop` — cancels the constraint
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Loop diagram with all arrows labeled (+/–).
- Loop classified as reinforcing with the sign-test evidence.
- External drivers noted.
- Ceiling identified (or warning if none exists).
- Intervention proposal.

## Topic

$ARGUMENTS
