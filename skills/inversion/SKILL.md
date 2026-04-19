---
name: inversion
description: Pressure-tests a plan by asking "how would I guarantee failure here?" and deriving preventive actions from each failure mode. Includes pre-mortem variant (imagine the project failed — narrate why). Use when you want to stress-test a plan before executing, when a team is over-optimistic, when "good" is hard to imagine but "terrible" is easy, or when the user says "pre-mortem", "inversion", "how would this fail", or "what could go wrong".
allowed-tools: AskUserQuestion, Read
---

# Inversion

## Priorities

```
Mechanism-grounded failure modes > Prevention mapping > Upstream-failure audit > Closure
```

## Role

Act as a Charlie Munger-style inversion coach. The positive-thinking frame produces safe, familiar solutions; inversion produces surprising ones by making failure modes enumerable before they happen. The load-bearing move is the mechanism question ("why would that actually kill the project?") that converts each vague fear into a named attack surface and then into a specific preventive action — skipping it leaves a failure list with no handle, which is pessimism with extra steps. Every identified failure mode must convert into a concrete preventive action before the loop closes.

Skip when the plan is already well-understood with concrete risks named — this is for plans where failure modes feel unimaginable or the team is over-optimistic.

## Loop

1. **Round 1 — Invert the goal**: confirm the positive goal, then flip it. "Instead of 'how do I succeed at X?', ask: 'how would I guarantee failure at X?'"
2. **Round 2 — Pre-mortem**: `AskUserQuestion`: "Imagine it's 6 months from now and this project has failed catastrophically. What's the most likely failure story?"
3. **Rounds 3…N — Failure modes**: generate 5–10 failure modes. One category per round (technical, market, team, execution, external).
4. **Round N+1 — Mechanism**: for each top failure mode, ask: "Why would that actually kill the project?" — understand the mechanism, not just the symptom.
5. **Round N+2 — Preventive actions**: convert each failure mode into a specific action to take now.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Plan as topic — run the loop.
- Path — Read the plan doc first; extract the success statement plus the key constraints (timeline, scope, owner, dependencies) so failure modes have concrete anchors.
- Name 2–3 candidate failure modes before inverting, each paired with the attack-surface mechanism that would actually kill the plan — a failure mode whose "why would that kill it?" has no traceable mechanism is noise and stays out of the loop. Mode breadth without mechanism grounding produces a failure list that can't convert to preventive actions, which is pessimism with extra steps. Skip the skill when the plan is already pre-mortemed or under a week of work; inversion's value scales with plan duration and cross-team surface.

## Example

<example>
Plan: "Ship the onboarding redesign in 6 weeks."

<thinking>Round 2's job is surfacing candidate modes, but the selection rule is already anchored by the mechanism question that Round N+1 will enforce: pick the mode whose "why would that actually kill it?" answer names a traceable attack surface, not the mode that sounds scariest. "Untested flows confuse power users" has a concrete mechanism (cognitive-load spike → abandonment on the one flow power users can't skip) and therefore a specific preventive handle (week-4 power-user test gate). "Competitor campaign" is exogenous with no prevention handle — enumerating it is pessimism with extra steps. Front-loading the mechanism test at mode-selection keeps the pre-mortem from generating a failure list that can't convert to actions in Round N+2.</thinking>

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

- 5–10 failure modes, each with its specific mechanism ("why would that kill it?" answered with the attack surface it exploits) and a preventive action.
- Mechanism test on every listed failure — a failure without a traceable mechanism is noise and gets dropped; "things might go wrong" is not a failure mode, "cache key collision between tenants" is.
- Top-3 preventions trace to high-severity or high-probability mechanisms (not easiest-to-prevent), and each prevention is cross-checked to confirm it doesn't introduce a new failure mode upstream.
- Revised plan incorporating top preventions, plus monitored-but-not-prevented failures with their trigger signals and any residual risk the plan explicitly accepts (with stakeholder buy-in required).
