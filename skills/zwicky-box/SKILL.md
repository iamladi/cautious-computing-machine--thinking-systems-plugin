---
name: zwicky-box
description: Generates novel solution combinations by building a morphological matrix of independent attributes × values, then combining in unexpected ways. Fritz Zwicky's morphological analysis. Use when brainstorming has stalled on the familiar, when a problem has multiple independent dimensions that could be reconfigured, when designing a new product/service and wanting to escape defaults, or when the user says "Zwicky box", "morphological analysis", "novel combinations", or "unexpected solutions".
allowed-tools: AskUserQuestion, Read
---

# Zwicky Box (Morphological Analysis)

## Priorities

```
Attribute independence > Combination novelty > Feasibility check > Closure
```

## Role

Act as a Zwicky-style combinatorial explorer. The method's power comes from attribute independence — if your columns are coupled, the combinations become redundant. Resist filtering combinations as they appear; a combination that looks odd often points at the genuinely novel direction. Evaluate feasibility only after generating.

Skip when the solution space has only one or two real axes — morphological combinations need 4+ independent attributes to earn their cost; below that, use first-principles or six-thinking-hats for ideation. Skip when combinations already exist and the task is to rank them (use decision-matrix). Skip when the problem itself is undefined — route to productive-thinking-model to frame the catalytic question before combinatorial generation.

## Loop

1. **Round 1 — Problem**: confirm the problem statement.
2. **Round 2 — Attributes**: `AskUserQuestion`: "Which 4–6 attributes define the solution space?" — recommend an independent set, warn about coupling.
3. **Rounds 3…N — Values per attribute**: one column at a time, generate 3–5 values. Include at least one unconventional option per column.
4. **Round N+1 — Combinations**: propose 3–5 complete combinations, each unconventional. `AskUserQuestion`: "Which combinations warrant deeper exploration?"
5. **Round N+2 — Feasibility**: test the picked combinations against real constraints.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Problem as topic — propose 3–5 candidate axes (parameters) in Round 1, each with 3+ independent values; reject axes where one value implies another.
- Path — Read the design brief first; extract stated requirements as axis candidates and flag any coupled pairs before building the grid.
- Single-axis problem (only one real parameter varies) — route to first-principles or six-thinking-hats; Zwicky adds no value without 2+ independent dimensions.

## Example

<example>
Problem: "Design a customer-feedback collection system."

<thinking>Coupled axes kill the method — if "format" implied "timing" (e.g., voice only works post-interaction), then every combination containing voice duplicates existing options and the 5×3×3×3×3 grid collapses back to defaults. Testing independence first: method (how-asked) doesn't dictate timing (when-asked), format (voice/text/video) doesn't dictate incentive, and analysis (AI/manual) is orthogonal to collection. That confirms 5 real axes, so the combinations will actually span novel territory rather than paraphrase the familiar.</thinking>

Calls AskUserQuestion (Round N+1 — Combinations):
- Question: "Which combination is worth prototyping?"
- Options:
  - `(Recommended) Weekly phone call + voice message + early access + AI sentiment` — voice-first, automated
  - `Post-interaction in-app pop-up + text + none + manual review` — standard baseline
  - `Monthly email + video + discount + AI sentiment` — rich but slow
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full matrix: attributes × values.
- 3–5 complete combinations highlighted.
- 1–2 selected for prototyping with feasibility rationale.
- Rejected combinations + why (drives the next iteration of attribute thinking).
