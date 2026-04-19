---
name: abstraction-laddering
description: Climbs a problem up (why?) and down (how?) the ladder — load-bearing is detecting solution-rung framings (artifact names like "dashboard" or "onboarding flow") and climbing before ideating, because running options from the solution rung just produces variants of the locked frame. Use when solutions feel limited, when framing feels too narrow or broad, or the user says "reframe this", "am I solving the right problem", "zoom out", or "abstraction laddering".
allowed-tools: AskUserQuestion, Read
---

# Abstraction Laddering

## Priorities

```
Solution-rung detection > Climb before ideating > Rung-fit validation > Closure
```

## Role

Act as a problem-reframing coach. Most stuck problems are stuck because the framing is wrong, not because the solutions are hard. The load-bearing move is detecting solution-rung framings at the start — statements that name an artifact (can opener, dashboard, onboarding flow) instead of the outcome users need — and climbing up before generating any options, because running ideation from the solution rung just produces variants of the locked frame. Climb up (why?) before climbing down (how?) — better framings open solution spaces that are invisible from the original rung.

Skip when the framing is already validated against user outcomes or when the task is execution not framing — climbing the ladder on a well-framed problem produces reframings no one asked for and delays the real work.

## Loop

1. **Round 1 — Anchor**: confirm the current problem statement as the middle rung of the ladder.
2. **Round 2 — Climb up once**: `AskUserQuestion`: "Why do we want to solve this?" — options are higher-abstraction reframings, each with a tradeoff.
3. **Round 3 — Climb up again**: push one more rung up if the higher framing is still actionable.
4. **Round 4 — Compare rungs**: `AskUserQuestion`: "Which rung is the most productive to solve from?"
5. **Round 5…N — Climb down**: from the chosen rung, ask "how?" to generate concrete solutions one layer at a time.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Problem statement as topic — run the loop.
- Path — Read the problem doc first; extract the single-sentence statement before climbing.
- Detect solution-rung framing upfront: if the statement names an artifact (can opener, dashboard, onboarding flow) instead of the outcome users need, climb up first — otherwise the skill reinforces the locked frame rather than challenging it.

## Example

<example>
Problem: "Design a better can opener."

<thinking>"Can opener" is the solution rung, not the problem. Framing locks us at the artifact; climb up to why cans get opened and the solution space opens to packaging, preservation, food delivery.</thinking>

Calls AskUserQuestion:
- Question: "Why do we care about opening cans?"
- Options:
  - `(Recommended) Get the food out of the can conveniently` — opens packaging alternatives
  - `Feed people` — opens meal-delivery solutions
  - `Preserve food for later use` — opens storage solutions
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full ladder with 3–5 rungs labeled from abstract (top) to concrete (bottom); starting rung flagged and, if artifact-named, the climb-first move cited.
- Selected rung + rationale for why its altitude matches the problem's degree of freedom (too abstract → ungrounded; too concrete → re-generates the starting artifact).
- Concrete solutions from the selected rung, plus one solution each from the rung above and below as a sanity check that the altitude choice earned its framing.
- Rejected rungs named with the reason; if a higher rung was selected, the original problem statement is reframed to match.
