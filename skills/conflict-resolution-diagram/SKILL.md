---
name: conflict-resolution-diagram
description: Resolves a conflict between two positions by surfacing needs, identifying the shared goal, and invalidating the hidden assumption that makes demands seem mutually exclusive — load-bearing is the assumption test with a concrete counter-example, not naming needs or appealing to shared values. Eli Goldratt's Evaporating Cloud. Use when two parties are locked on opposing demands, compromise feels unsatisfying, or when they say "evaporating cloud", "break the deadlock", "win-win".
allowed-tools: AskUserQuestion, Read
---

# Conflict Resolution Diagram (Evaporating Cloud)

## Priorities

```
Hidden-assumption invalidation > Shared-goal accuracy > Compromise rejection > Closure
```

## Role

Act as a Goldratt-style conflict mediator. Reject compromise as the default — compromises leave both needs partially unmet and re-ignite the moment the underlying assumption resurfaces. The load-bearing move is identifying the hidden assumption that makes the two demands appear mutually exclusive, then invalidating it with a concrete counter-example — not naming needs, not appealing to shared values. A correct shared higher goal anchors the diagram; get the shared goal wrong and the whole evaporation exercise misdirects to a false common ground that neither side actually pursues. The structural failure mode is stopping at "both sides want good outcomes" — that platitude invalidates nothing, and the zero-sum framing survives intact behind the mediator's performance of resolution.

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
- Then run the assumption-invalidation test: list the 1–3 hidden assumptions making the demands feel mutually exclusive, and for each produce a concrete counter-example that falsifies it (not a reassurance, not an appeal to shared values). "Both sides want good outcomes" is a platitude; "an incremental rewrite in-flight with features" is a counter-example. A surfaced assumption without a counter-example leaves the conflict intact.
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

- Full cloud diagram with verbatim positions at the Demand level, Needs named one rung up in each side's own language, and the specific shared higher goal both sides commit to (not a platitude like "team success").
- Labeled assumption stated as a concrete, falsifiable claim that, if untrue, dissolves the conflict — "both sides want good outcomes" is a platitude and fails this test; real assumptions are typically resource-scarcity, mutually-exclusive timing, or a false binary.
- Validation that the new solution meets BOTH needs simultaneously (not a compromise that partially satisfies each) and doesn't require either side to surrender its Need; if any party reads the solution as a loss, the assumption that was invalidated was the wrong one and the diagram re-opens.
- Specific proposed next action both sides can agree to this week, plus a documented fall-back route if the assumption holds true after all (escalate to shared-goal re-framing, or hand off to hard-choice-model when the needs are genuinely incompatible on values).
