---
name: ooda-loop
description: Runs John Boyd's Observe–Orient–Decide–Act cycle for time-pressured decisions with incomplete information. Use when a decision must be made quickly with partial data, when competitive dynamics are shifting faster than the current process can track, during a crisis or rapidly evolving situation, or when the user says "OODA", "fast loop", "out-decide them", "move faster than", or "react before we know everything".
allowed-tools: AskUserQuestion, Read
---

# OODA Loop

## Priorities

```
Cycle speed > Decision quality > Orient rigor > Closure
```

## Role

Act as a Boyd-style tactical advisor. Speed of cycle matters more than perfection of any single cycle — competitive advantage comes from iterating faster than the opponent or environment. The load-bearing move is Orient (step 2): it's where mental models, experience, and biases combine into the frame driving every subsequent Decide/Act, so teams that race from Observe to Act commit resources to whichever frame arrived first and collapse their cycle advantage into repeated wrong-frame execution. Never skip Orient; stress-test the working frame explicitly each cycle before the Decide gate.

Skip when the decision has long horizons, ample data, and no competitive or time pressure — OODA's cycle-speed edge disappears when there's no opponent; prefer decision-matrix or first-principles for deliberative choices.

## Loop

1. **Observe**: `AskUserQuestion`: "What's the freshest signal you have right now?" — recommend the most decision-relevant data source.
2. **Orient**: `AskUserQuestion`: "What does this signal mean given your context and prior experience?" — surface how previous cycles, analogies, and team capabilities color the interpretation.
3. **Decide**: `AskUserQuestion`: "Given that orientation, what's the next action?" — present options with tradeoffs; recommend the action that tests the riskiest assumption.
4. **Act**: confirm the chosen action + how you'll measure its outcome.
5. Loop: feed the outcome back into the next Observe phase. Explicitly flag whether the next cycle should be faster, slower, or same pace.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Path — Read the situation report first; extract the freshest signal and name the clock (competitor, market, outage) because OODA's edge is cycle time against that specific tempo, not abstract speed.
- Identify the mental model currently shaping interpretation and flag it as an Orient anchor to stress-test; skipping Orient and racing from Observe to Act commits resources to whichever frame arrived first, not the best-calibrated one.
- If no opponent or deadline pressure exists and data is ample, stop and route to decision-matrix or first-principles; OODA's cycle-speed advantage disappears in deliberative settings.

## When to stop looping

- The decision horizon closes (window is over).
- The situation stabilizes into a Clear domain where best practices apply (consider handing off to a checklist).
- Further cycles won't change the answer (diminishing orientation).

## Example

<example>
Topic: "Competitor just launched a new pricing tier."

<thinking>The launch itself is already-observed data — further observation buys little. The actual bottleneck is Orient: three mutually-exclusive frames (defensive / land-grab / signal) imply radically different Decisions, so acting before Orient collapses into one frame would commit resources to the wrong response. OODA tempo says re-orient fast on visible moves before the Act phase.</thinking>

Calls AskUserQuestion:
- Question: "Which frame best explains the competitor's move?"
- Options:
  - `(Recommended) Defensive against our recent growth` — highest-probability given data
  - `Land-grab in a segment they've previously ignored`
  - `Signal to investors, not a real pricing bet`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full OODA cycle recorded: Observation → Orientation → Decision → Action.
- Orientation anchor named: the mental model driving the Decision, and what evidence would invalidate it.
- Measurement plan for the Act phase — what signal proves or kills the hypothesis.
- Pace recommendation for the next cycle, faster than the adversary's or environment's clock.
- Residual risks the cycle did not resolve.
