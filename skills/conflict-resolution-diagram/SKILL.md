---
name: conflict-resolution-diagram
description: Resolves a conflict between two positions by surfacing each side's underlying needs, identifying the shared goal, and challenging the hidden assumption that makes the demands seem mutually exclusive. Eli Goldratt's Evaporating Cloud. Use when two parties are locked on opposing demands, when a compromise feels unsatisfying, or when the user says "evaporating cloud", "break the deadlock", "win-win", or "we're stuck on this conflict".
allowed-tools: AskUserQuestion, Read
---

# Conflict Resolution Diagram (Evaporating Cloud)

## Priorities

```
Shared-goal accuracy > Assumption surfacing > Brevity > Closure
```

## Role

Act as a Goldratt-style conflict mediator. Reject compromise as the default — compromises leave both needs partially unmet. Instead, find the hidden assumption that makes the two demands seem mutually exclusive, then invalidate it. Correct identification of the shared goal is load-bearing; if you get that wrong, the whole diagram is misdirected.

Skip when one side is plainly correct or when the conflict is values-based with no shared higher goal — evaporating-cloud assumes a common goal exists. Use hard-choice-model for true values tradeoffs and decision-matrix when criteria are agreed and only weighting differs.

## Loop

1. **Round 1 — Demands**: `AskUserQuestion`: "What is each side asking for?" — capture both demands verbatim.
2. **Round 2 — Need behind Demand A**: ask "Why do they want that?" — surface the underlying need, not the position.
3. **Round 3 — Need behind Demand B**: same for the other side.
4. **Round 4 — Shared goal**: `AskUserQuestion`: "What shared higher goal do both needs serve?" — recommend the most-specific shared goal.
5. **Round 5 — Assumption**: `AskUserQuestion`: "What assumption makes Demand A and Demand B look mutually exclusive?" — recommend the most challengeable one.
6. **Round 6 — Invalidate + rebuild**: propose a new solution that satisfies both needs by invalidating the assumption.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Conflict as topic or Path to thread/email/spec — extract the two *positions* (what each side is demanding) verbatim before reaching for needs or goals; if Path provided, Read the source and quote the demands as-stated. Paraphrasing demands into needs too early collapses the diagram's five nodes into three.
- Name the shared higher goal explicitly before surfacing assumptions — the diagram collapses if the goal is generic ("success") or actually two goals. A load-bearing shared goal is specific enough that both sides can say "yes, that's what we're both trying to serve".
- Skip and route when one side is plainly correct (no real conflict), when the conflict is values-based with no shared higher goal (→ hard-choice-model), or when criteria are agreed and only weighting is disputed (→ decision-matrix).

## Example

<example>
Conflict: "Eng wants a full rewrite; Product wants to keep shipping features."

<thinking>Picking a winner between rewrite and features reinforces the zero-sum framing the skill exists to break. The structural reason the conflict looks binary: both sides treat "rewrite" as a full-stop 6-month mode that halts shipping — that unstated assumption is what forces stability and revenue onto opposite sides of the scale. The load-bearing move is to surface and invalidate that assumption (incremental modernization in-flight with features), not to pick which need wins.</thinking>

Calls AskUserQuestion:
- Question: "What assumption makes 'rewrite' and 'ship features' look incompatible?"
- Options:
  - `(Recommended) Rewrite must be a full-stop, all-hands 6-month project` — challengeable
  - `Engineering can only work on one thing at a time`
  - `Customer-visible features can only come from the old codebase`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full cloud diagram: Demand A / Need A ← Shared Goal → Need B / Demand B + labeled assumption.
- Invalidated assumption.
- New solution that meets both needs.
- Specific proposed next action both sides can agree to.
