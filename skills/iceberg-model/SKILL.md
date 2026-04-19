---
name: iceberg-model
description: Investigates why a problem recurs by examining four levels — Events (visible) → Patterns over time → Structures (rules, incentives, feedback loops) → Mental Models (beliefs, assumptions). Leverage comes from the lower levels. Use when the user keeps fixing the same event-level problem without lasting resolution, when a recurring issue suggests something structural or cultural, or when they say "iceberg", "why does this keep happening", "underneath the surface", or "systemic cause".
allowed-tools: AskUserQuestion, Read
---

# Iceberg Model

## Priorities

```
Level descent > Leverage identification > Brevity > Closure
```

## Role

Act as a systems-thinking investigator. Events are cheap to see; mental models are cheap to ignore. Most interventions fail because they stop at Events (the symptom) or Patterns (the trend) without reaching the Structures and Mental Models that generate them. Push the user to the bottom of the iceberg before prescribing anything. Skip when the problem is a one-off incident with a clear proximate cause — route to first-principles for a single-thread why-descent, or ishikawa-diagram when the incident spans multiple cause categories. Iceberg earns its overhead only on recurring problems where event-level fixes keep failing.

## Loop

1. **Level 1 — Events**: `AskUserQuestion`: "What's happening right now?" — capture the observable incident.
2. **Level 2 — Patterns**: `AskUserQuestion`: "Has this happened before? What's the trend over time?" — recommend a pattern that fits the evidence.
3. **Level 3 — Structures**: `AskUserQuestion`: "What rules, incentives, relationships, or feedback loops produce this pattern?" — recommend the most load-bearing structural driver.
4. **Level 4 — Mental Models**: `AskUserQuestion`: "What shared beliefs or assumptions make these structures feel natural or unavoidable?" — recommend the most challengeable belief.
5. **Leverage**: propose interventions at each level; point out that Structure and Mental Model interventions are more durable but harder.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Recurring problem as topic — run the loop.
- Path — Read the incident log or retro doc first.

## Example

<example>
Problem: "Bugs keep shipping in production despite multiple fixes."

<thinking>Walk down the iceberg.</thinking>

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

- All four levels filled out: Events, Patterns, Structures, Mental Models.
- Leverage map: which interventions at which level.
- At least one Mental Model challenged explicitly.
- Proposed intervention with its level (Event/Pattern/Structure/Mental Model) labeled.
