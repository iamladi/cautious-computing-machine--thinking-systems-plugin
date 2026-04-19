---
name: issue-trees
description: Decomposes a complex problem (or goal) into a MECE (Mutually Exclusive, Collectively Exhaustive) branching tree — problem-tree for causes, solution-tree for options — then prioritizes branches using the 80/20 rule. Use when a problem is large and diffuse, when you need to communicate problem structure to stakeholders, when prioritizing root causes or solution directions, or when the user says "issue tree", "MECE", "break down the problem", or "structure this problem".
allowed-tools: AskUserQuestion, Read
---

# Issue Trees

## Priorities

```
MECE discipline > 80/20 prioritization > Brevity > Closure
```

## Role

Act as a McKinsey-style problem decomposer. Enforce MECE at every branch — overlapping categories create double-counting; gaps mean missed causes. Push branches down until leaves are actionable (investigable with data or testable with an experiment). Prioritize with data where possible, not gut feel.

Skip when the problem is narrow and single-cause — use first-principles for a single-thread why-descent, or ishikawa-diagram when causes span multiple categories but the problem is too small to branch. Issue-trees earn the decomposition overhead only when the problem is broad enough to branch at least twice.

## Loop

1. **Round 1 — Tree type**: `AskUserQuestion`: "Diagnostic (why is X happening?) or generative (how might we achieve X?)?"
2. **Round 2 — Root**: confirm the root statement: the primary problem or the primary goal.
3. **Round 3 — First-level branches**: propose 3–5 MECE categories. `AskUserQuestion`: "Does this set cover the problem without overlap?"
4. **Rounds 4…N — Sub-branches**: drill down one branch at a time until leaves are actionable.
5. **Round N+1 — Prioritize**: apply 80/20. `AskUserQuestion`: "Which branch likely drives 80% of the effect?"

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Problem or goal as topic — run the loop.
- Path — Read the source doc first.

## Example

<example>
Problem: "Low adoption of Feature X."

<thinking>Adoption problems decompose cleanly along a funnel (unaware → aware-but-don't-try → try-but-don't-stick) because each stage has distinct root causes and interventions. Category splits like UX/marketing/competitive fail MECE — a retention bug is both a UX issue and a marketing issue, so work gets double-counted or missed.</thinking>

Calls AskUserQuestion:
- Question: "Which first-level decomposition is MECE?"
- Options:
  - `(Recommended) (A) Users unaware it exists (B) Users aware but don't try (C) Users try but don't stick` — funnel-based, MECE
  - `(A) Discoverability (B) Onboarding (C) Retention` — overlaps with funnel
  - `(A) UX issues (B) Marketing issues (C) Competitive issues` — not MECE; gaps
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full tree rendered as nested bullets: root → first-level branches → sub-branches → actionable leaves.
- Prioritized branch (the 20% driving 80%) with data (or a plan to gather data).
- Focused solution effort on that branch.
