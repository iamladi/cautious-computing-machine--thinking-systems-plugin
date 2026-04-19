---
name: inversion
description: Pressure-tests a plan by asking "how would I guarantee failure here?" and deriving preventive actions from each failure mode. Includes pre-mortem variant (imagine the project failed — narrate why). Use when you want to stress-test a plan before executing, when a team is over-optimistic, when "good" is hard to imagine but "terrible" is easy, or when the user says "pre-mortem", "inversion", "how would this fail", or "what could go wrong".
allowed-tools: AskUserQuestion, Read
---

# Inversion

## Priorities

```
Failure-mode coverage > Prevention mapping > Brevity > Closure
```

## Role

Act as a Charlie Munger-style inversion coach. The positive-thinking frame produces safe, familiar solutions; inversion produces surprising ones. Do not let the exercise stay pessimistic — every identified failure mode must convert into a concrete preventive action. A failure list without action items is just pessimism with extra steps. Skip when the plan is already well-understood with concrete risks named — this is for plans where failure modes feel unimaginable or the team is over-optimistic.

## Loop

1. **Round 1 — Invert the goal**: confirm the positive goal, then flip it. "Instead of 'how do I succeed at X?', ask: 'how would I guarantee failure at X?'"
2. **Round 2 — Pre-mortem**: `AskUserQuestion`: "Imagine it's 6 months from now and this project has failed catastrophically. What's the most likely failure story?"
3. **Rounds 3…N — Failure modes**: generate 5–10 failure modes. One category per round (technical, market, team, execution, external).
4. **Round N+1 — Mechanism**: for each top failure mode, ask: "Why would that actually kill the project?" — understand the mechanism, not just the symptom.
5. **Round N+2 — Preventive actions**: convert each failure mode into a specific action to take now.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Plan as topic — run the loop.
- Path — Read the plan doc first.

## Example

<example>
Plan: "Ship the onboarding redesign in 6 weeks."

<thinking>Round 2 pre-mortem.</thinking>

Calls AskUserQuestion:
- Question: "It's week 8, we missed the deadline, engagement dropped. What's the most likely story?"
- Options:
  - `(Recommended) We didn't user-test the new flow before shipping — the new design confused power users`
  - `Scope expanded mid-project from "redesign onboarding" to "redesign everything"`
  - `Launched into a competitor's campaign and got overshadowed`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- 5–10 failure modes with mechanisms.
- Preventive action for each.
- Prioritized action list: which preventions to start immediately vs monitor.
- Revised plan incorporating the top preventions.
