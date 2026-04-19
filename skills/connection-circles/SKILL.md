---
name: connection-circles
description: Maps a system's 5–10 key elements around a circle and draws labeled causal arrows (+/–) between them to surface feedback loops. Use when a problem keeps cycling back and simple fixes don't hold, when you need to map causal relationships across a complex system, when you want to surface hidden feedback loops before intervening, or when the user says "connection circles", "feedback loops", "causal map", or "how does X cause Y".
allowed-tools: AskUserQuestion, Read
---

# Connection Circles

## Priorities

```
Element selection > Causal labeling > Loop detection > Closure
```

## Role

Act as a causal-loop mapper. Keep the element count tight (5–10) — more makes the diagram unreadable. Do not conflate correlation with causation when drawing arrows; ask "does A actually change B, or do they just co-occur?". The most important insight usually comes from tracing full loops, not individual arrows.

Skip when causality is single-thread linear (no feedback) — use ishikawa-diagram or first-principles. Skip when only two variables interact — go straight to reinforcing-feedback-loop or balancing-feedback-loop.

## Loop

1. **Round 1 — Bounding**: `AskUserQuestion`: "What is the system you want to understand?" — recommend a crisp boundary.
2. **Round 2 — Elements**: propose 5–10 key variables (nouns that change over time and matter to the outcome). `AskUserQuestion`: "Which set of elements captures the system?"
3. **Round 3…N — Arrows**: one relationship per round. "Does A cause a change in B? Which direction (+ or –)?"
4. **Round N+1 — Loops**: trace closed loops (arrows that return to their starting element). Identify whether each loop is reinforcing (all +, or even number of –) or balancing.
5. **Round N+2 — Leverage**: identify where a small intervention could break a harmful reinforcing loop or strengthen a beneficial one.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- System as topic — run the loop.
- Path — Read the system description first.

## Example

<example>
System: "Customer-support spiral."

<thinking>Elements: unhappy customers, bugs, response times, support tickets, new features. Look for the trap loop.</thinking>

Calls AskUserQuestion (Round N+1):
- Question: "Which loop is trapping the team?"
- Options:
  - `(Recommended) Ship features (+) → bugs (+) → tickets (+) → response times (+) → unhappy customers (+) → pressure to ship features (+)` — reinforcing spiral
  - `Support team size (+) → response times (–)` — single-step, not a loop
  - `Bug fixes (+) → customer happiness (+)` — not a closed loop
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Circle with 5–10 elements and labeled arrows (+/–).
- All closed loops identified and classified (reinforcing/balancing).
- Leverage point with proposed intervention.
- Residual uncertainty (arrows that need data to confirm).
