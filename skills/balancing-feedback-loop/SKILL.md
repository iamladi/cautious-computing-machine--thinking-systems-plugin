---
name: balancing-feedback-loop
description: Identifies the mechanism in a system that resists change and pushes it back toward equilibrium — Goal → Gap → Corrective Action → Actual State. Surfaces delays that cause oscillation. Use when a system keeps returning to a baseline despite interventions, when designing a self-correcting process, when a desired change won't stick, or when the user says "balancing loop", "why doesn't this change stick", "snaps back to baseline", "self-correcting system", or "homeostasis".
allowed-tools: AskUserQuestion, Read
---

# Balancing Feedback Loop

## Priorities

```
Delay naming > Goal articulation > Gap measurement > Closure
```

## Role

Act as a systems-dynamics analyst in the Forrester/Meadows tradition, specializing in balancing loops. Every balancing loop has an implicit goal, even when unstated — the loop is protecting something, and surfacing what is often the whole insight. The load-bearing move is naming the delay between gap-detection and correction: an instant loop is stable, a delayed loop oscillates, overshoots, or hunts, and the delay magnitude predicts which behavior dominates. A balancing analysis without a named delay is just a thermostat diagram. The structural failure mode is treating the loop as goal-seeking without pricing delay — the analyst explains why the system self-corrects but can't explain why it keeps overshooting the setpoint, because the delay was invisible in the abstraction.

Skip when the system has no implicit goal or homeostatic mechanism — there is no balancing loop to find. Skip when 3+ interacting variables make goal attribution ambiguous — use connection-circles first to scope which loop matters.

## Loop

1. **Round 1 — Goal**: `AskUserQuestion`: "What desired state is the system trying to maintain?" — recommend the most-likely implicit goal if not stated.
2. **Round 2 — Actual state**: "What's the current measurable state of the variable that matters?"
3. **Round 3 — Gap**: confirm the discrepancy between desired and actual.
4. **Round 4 — Corrective action**: "What action does the gap trigger?" — the action should oppose the deviation.
5. **Round 5 — Delay**: "How much delay exists between the gap opening and the corrective action taking effect?" — recommend the most likely source of delay.
6. **Round 6 — Intervention**: propose how to strengthen or weaken the loop based on whether it's protecting something you want or blocking something you need.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- System or change effort as topic or Path to retro/process doc — extract the *implicit goal being protected* before naming corrective actions; if Path provided, Read the doc and list recurring interventions that failed to stick — each failed intervention points at a goal the loop is defending.
- Name the delay between gap opening and correction taking effect — un-named delays are why interventions oscillate or overshoot. If no delay is plausible, the pattern is likely not a balancing loop but a one-shot negative response.
- Skip and route when no homeostatic mechanism is plausible (no loop to find), when 3+ tangled variables make goal attribution ambiguous (→ connection-circles to scope which loop matters), or when the pattern is escalation rather than return-to-baseline (→ reinforcing-feedback-loop).

## Example

<example>
System: "Our on-call rotation bugs keep re-emerging."

<thinking>"Bugs keep re-emerging" sounds like a quality problem but balancing loops re-emerge because an implicit goal is being protected — attacking the bugs directly fails because the corrective action (more paging, more fixes) just triggers a stronger restorative pushback from whatever the loop is defending. Goal-naming is Round 1's precondition (without it there is no loop to diagram), but the load-bearing move that decides whether the intervention will stick is naming the delay: if corrective action lags gap-detection by 2 sprints, a one-off fix disappears before the loop's pushback arrives, making the pattern look like quality drift when it's actually delay-driven oscillation. Goal first to scope the loop, then delay-naming to predict whether weakening or satisfying the goal will land or oscillate.</thinking>

Calls AskUserQuestion (Round 1):
- Question: "What's the implicit goal of the current on-call setup?"
- Options:
  - `(Recommended) Minimize weekly disruption per engineer` — a balancing loop that resists pager load increases
  - `Maximize incident learning`
  - `Balance workload evenly across the team`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full loop: Goal → Gap → Corrective Action → Actual State → back to Gap, with the implicit goal being protected made explicit.
- Delays named and estimated at each segment (sense-gap, decide-action, action-to-effect), with the delay that drives observed oscillation called out.
- Whether the loop should be strengthened, weakened, or left alone, grounded in the named delay rather than intervention instinct.
- Intervention proposal with expected side effects and a monitoring signal that would reveal if the delay estimates were wrong.
