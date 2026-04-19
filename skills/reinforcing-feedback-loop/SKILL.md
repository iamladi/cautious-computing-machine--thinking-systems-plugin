---
name: reinforcing-feedback-loop
description: Maps a self-amplifying loop where two+ variables cause each other to grow (or decline), producing exponential change. Flywheel / vicious cycle / network effect / compounding. Use when growth or decline is accelerating and you want to understand the mechanism, when designing a system with an intentional flywheel, when distinguishing growth drivers from stability constraints, or when the user says "flywheel", "reinforcing loop", "why is this accelerating", or "compounding effect".
allowed-tools: AskUserQuestion, Read
---

# Reinforcing Feedback Loop

## Priorities

```
Ceiling naming > Sign correctness > Variable causality > Closure
```

## Role

Act as a systems-dynamics analyst in the Forrester/Senge tradition, specializing in reinforcing loops — flywheels, vicious cycles, compounding effects. The core identification test: trace the loop once; if you start with "A increases" you must end with "A increases" (even count of negative signs, or all positive). The load-bearing move is naming the ceiling *before* the loop trace completes — every real reinforcing loop has a balancing loop that will eventually constrain it, and candidate ceilings have very different timelines (hard budget constraint in weeks vs. segment saturation in quarters vs. speculative cost-curve bailout). The structural failure mode is diagramming the loop without a named ceiling, which lets the team plan against the comfortable ceiling while the hard one hits first and the flywheel breaks catastrophically.

Skip when the trend is one-shot, not compounding — no loop exists, use first-principles. Skip when 3+ variables interact in a tangled web — use connection-circles to map the full system before isolating one loop.

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

- Trend or system as topic or Path to metrics report/system description — extract the two+ variables that allegedly cause each other to grow (or decline), and check for exponential shape in the data; if Path provided, Read the metrics first and confirm the pattern is compounding, not one-shot linear growth.
- Name the likely ceiling *before* the loop trace completes — every real reinforcing loop has a balancing loop that will eventually constrain it, and candidate ceilings have very different timelines (hard budget constraint, segment saturation, cost-curve bailout). Picking the comfortable ceiling misses the hard one.
- Skip and route when the trend is one-shot not compounding (→ first-principles), when 3+ variables interact in a tangled web (→ connection-circles to map the full system first), or when the pattern is return-to-baseline rather than escalation (→ balancing-feedback-loop).

## Example

<example>
Trend: "Our AI-feature usage is growing exponentially; infra costs are outpacing revenue."

<thinking>The exponential shape ("infra costs outpacing revenue") means the reinforcing loop (more usage → more features → more usage) is real — but the load-bearing question isn't identifying the loop, it's naming the ceiling. Without a ceiling the system runs until it breaks catastrophically (unit economics collapse, forced emergency throttle). The candidate ceilings have very different timelines: budget constraint (hard, near-term), segment saturation (soft, slow), cost-curve bailout (speculative) — picking the wrong one lets the team plan against the comfortable ceiling while the real one hits first.</thinking>

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

- Full loop diagram with all arrows labeled (+/–) and classified reinforcing via the sign-test evidence (start "A increases" ends "A increases" — even negative count or all positive), with external drivers named as inputs that feed the loop but sit outside its closure.
- Named ceiling with its type (hard budget constraint / segment saturation / cost-curve bailout / regulatory cap) and estimated timeline, tied to the load-bearing move — a loop diagram without a named ceiling fails the audit as a catastrophic-break waiting to happen, because the team will plan against the comfortable ceiling while the hard one hits first.
- Intervention proposal validated against the named ceiling: if the intervention accelerates the loop (adds fuel), it must also extend or soften the ceiling on the same horizon, otherwise it pulls the break forward rather than buying runway; if the ceiling is speculative (cost-curve bailout, future fundraise), a second near-term ceiling must be flagged as the planning anchor.
- Route to balancing-feedback-loop if the pattern turns out to be return-to-baseline oscillation rather than escalation, to connection-circles if 3+ variables in a tangled web emerged during the trace, and to first-principles if the trend resolves to one-shot linear growth; flag candidate ceilings whose timelines need data before commitment.
