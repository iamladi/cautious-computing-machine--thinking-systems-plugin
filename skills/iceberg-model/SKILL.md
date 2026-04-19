---
name: iceberg-model
description: Investigates why a problem recurs by descending Events → Patterns → Structures → Mental Models — load-bearing is descent-discipline: each rung must cite evidence from the rung above, since a mental model that doesn't explain the pattern just relocates the symptom. Use when the user keeps fixing the same event-level problem, when a recurring issue suggests something structural, or when they say "iceberg", "why does this keep happening", or "systemic cause".
allowed-tools: AskUserQuestion, Read
---

# Iceberg Model

## Priorities

```
Descent-discipline > Rung-evidence chain > Leverage identification > Closure
```

## Role

Act as a systems-thinking investigator in the Senge/Meadows tradition. Events are cheap to see; mental models are cheap to ignore. Most interventions fail because they stop at Events (the symptom) or Patterns (the trend) without reaching the Structures and Mental Models that generate them. The load-bearing move is descent-discipline: each rung must cite evidence from the rung above — the pattern must explain the repeated events, the structure must explain the pattern, the mental model must explain why the structure persists unchallenged — and skipping a rung leaves the next level as speculation. The structural failure mode is naming a mental model that doesn't generate the observed pattern: the analyst feels deep but has only relocated the symptom, and the intervention misses.

Skip when the problem is a one-off incident with a clear proximate cause — route to first-principles for a single-thread why-descent, or ishikawa-diagram when the incident spans multiple cause categories. Iceberg earns its overhead only on recurring problems where event-level fixes keep failing.

## Loop

1. **Level 1 — Events**: `AskUserQuestion`: "What's happening right now?" — capture the observable incident.
2. **Level 2 — Patterns**: `AskUserQuestion`: "Has this happened before? What's the trend over time?" — recommend a pattern that fits the evidence.
3. **Level 3 — Structures**: `AskUserQuestion`: "What rules, incentives, relationships, or feedback loops produce this pattern?" — recommend the most load-bearing structural driver.
4. **Level 4 — Mental Models**: `AskUserQuestion`: "What shared beliefs or assumptions make these structures feel natural or unavoidable?" — recommend the most challengeable belief.
5. **Leverage**: propose interventions at each level; point out that Structure and Mental Model interventions are more durable but harder.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Recurring problem as topic — confirm recurrence signal (2+ occurrences, not a one-off) before descending.
- Path — Read the incident log or retro doc first; extract the event timeline and any repeat-pattern signal before Round 1.
- No recurrence evidence yet — elicit it in Round 1; if none exists, route to first-principles instead.

## Example

<example>
Problem: "Bugs keep shipping in production despite multiple fixes."

<thinking>Event layer (latest bug) already fixed multiple times. Pattern (fix-and-reappear) is the signal that leverage sits below — descend to Structure to find what keeps producing the pattern, not another event-level fix.</thinking>

Calls AskUserQuestion (Level 3):
- Question: "Which structure is producing the pattern of 'bugs ship, fire-drills happen, nothing changes'?"
- Options:
  - `(Recommended) No pre-release QA gate; timelines are set by sales, not engineering` — structural
  - `Team has skill gaps in testing` — individual-level, not structural
  - `Tooling is outdated` — technical, not structural
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- All four levels filled out: Events, Patterns, Structures, Mental Models — each rung cites evidence from the rung above that forced the descent (pattern explains events, structure explains pattern, mental model explains structure).
- Leverage map: which interventions at which level, noting why Event/Pattern-only interventions are expected to fail on this specific problem.
- At least one Mental Model challenged explicitly, with the pattern the challenged belief generates — if the mental model doesn't generate the observed pattern, it's a relocated symptom, not leverage.
- Proposed intervention with its level labeled and the predicted signal that would prove it's working within a stated time window.
