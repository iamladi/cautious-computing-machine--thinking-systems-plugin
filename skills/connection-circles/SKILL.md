---
name: connection-circles
description: Maps a system's 5–10 key elements around a circle and draws labeled causal arrows (+/–) between them to surface feedback loops. Use when a problem keeps cycling back and simple fixes don't hold, when you need to map causal relationships across a complex system, when you want to surface hidden feedback loops before intervening, or when the user says "connection circles", "feedback loops", "causal map", or "how does X cause Y".
allowed-tools: AskUserQuestion, Read
---

# Connection Circles

## Priorities

```
Closed-loop trace > Causal labeling > Element selection > Closure
```

## Role

Act as a causal-loop mapper. Keep the element count tight (5–10) — more makes the diagram unreadable, fewer collapses to a single loop that reinforcing-feedback-loop or balancing-feedback-loop handles better. The load-bearing move is tracing closed loops back to their origin: individual arrows only describe correlations, but the return arrow from downstream symptom to upstream driver is what explains why a pattern self-propels rather than resolves. Do not conflate correlation with causation when drawing arrows ("does A actually change B, or do they just co-occur?") — a diagram full of +/– with no closed loop is a mislabeled org chart, not a systems map.

Skip when causality is single-thread linear (no feedback) — use ishikawa-diagram or first-principles. Skip when only two variables interact — go straight to reinforcing-feedback-loop or balancing-feedback-loop.

## Loop

1. **Round 1 — Bounding**: `AskUserQuestion`: "What is the system you want to understand?" — recommend a crisp boundary.
2. **Round 2 — Elements**: propose 5–10 key variables (nouns that change over time and matter to the outcome). `AskUserQuestion`: "Which set of elements captures the system?"
3. **Round 3…N — Arrows**: one relationship per round. "Does A cause a change in B? Which direction (+ or –)?"
4. **Round N+1 — Loops**: trace closed loops (arrows that return to their starting element). Identify whether each loop is reinforcing (all +, or even number of –) or balancing.
5. **Round N+2 — Leverage**: identify where a small intervention could break a harmful reinforcing loop or strengthen a beneficial one.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- System as topic — elicit 5–10 variables (nouns that can go up/down) before drawing any arrows; the circle is only useful once variables close into at least one loop, so flag open-ended chains early as a routing signal rather than a valid circle.
- Path — Read the system description first; extract candidate variables and any stated causal claims to seed the circle, but reject arrows whose downstream path does not return to origin — an arrow with no return leg is a correlation, not a systems arrow, and a diagram with no closed loop fails the load-bearing test.
- Fewer than 5 variables or no plausible closed loop emerging — route to reinforcing-feedback-loop or balancing-feedback-loop if a single loop fits, or first-principles for a narrow single-thread cause.

## Example

<example>
System: "Customer-support spiral."

<thinking>"Spiral" signals reinforcing dynamics, not a single cause. Linear chains (team size → queue) don't explain why this worsens on its own — only a closed loop does. Look for the back-link from downstream symptoms (unhappy customers) to upstream drivers (pressure to ship features), since that return arrow is what makes the pattern self-propelling rather than a one-off incident.</thinking>

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

- Circle with 5–10 elements and labeled arrows (+/–), each arrow carrying a verb that names the mechanism (not just co-occurrence).
- Closed-loop trace: at least one loop whose arrows return to their starting element, classified reinforcing (even count of –) or balancing, with the loop's narrative stated as a self-propelling story ("pressure → bugs → tickets → pressure"); a diagram with no closed loop fails the load-bearing test and is a mislabeled org chart, not a systems map.
- Leverage-point validation: the proposed intervention must sit on an arrow inside the identified closed loop (breaking or redirecting the return leg) — interventions on non-loop arrows only change correlations and won't shift the pattern.
- Residual arrows flagged: correlations drawn without confirmed causal mechanism, variables proposed but excluded (with reason), and any single-thread sub-chain that escapes the circle (route to reinforcing-feedback-loop / balancing-feedback-loop if 2-var, first-principles if single-thread).
