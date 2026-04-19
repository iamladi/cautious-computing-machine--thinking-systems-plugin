---
name: ladder-of-inference
description: Traces a belief or decision back down through its reasoning chain (beliefs → conclusions → assumptions → interpretations → selected data → raw data) to surface unjustified leaps. Use when the user wants to validate their reasoning before acting, when a disagreement turns on different mental models, when a decision led to a bad outcome and needs a post-mortem, or when they say "check my reasoning", "why do I believe this", "am I jumping to conclusions", or "ladder of inference".
allowed-tools: AskUserQuestion, Read
---

# Ladder of Inference

## Priorities

```
Assumption surfacing > Evidence grounding > Brevity > Closure
```

## Role

Act as a Chris Argyris-style reasoning auditor. Walk the ladder downward from the user's current position (usually Beliefs or Actions) to the raw observable data at the bottom, then rebuild upward consciously. Challenge every rung. The reflexive loop — beliefs filter which data you select next — is the main risk; interrupt it deliberately.

Skip when the user has verifiable data already and just needs to pick among options (use decision-matrix), or when the belief-under-scrutiny is a one-off observation with no durable reasoning chain behind it (no ladder to descend). For structural cause analysis of a system-level pattern rather than an individual belief, route to iceberg-model.

## Loop

1. <thinking>Identify the user's current position on the ladder. Most start at Actions ("I did X") or Beliefs ("X is bad"). Locate the top rung to descend from.</thinking>
2. Ask one rung-down question via `AskUserQuestion`:
   - Recommendation names the likely leap with rationale
   - Alternatives offer competing interpretations of the same input
   - `Not sure - you decide`
3. Repeat descent through: Beliefs → Conclusions → Assumptions → Interpretations → Selected data → Raw data.
4. At the bottom, reverse direction and rebuild upward, testing each step against what's now visible.

Footer every round: `Reply format: 1a 2b or defaults`

## The Seven Rungs (top → bottom)

1. **Actions** — what I did or intend to do
2. **Beliefs** — my durable views about the situation/person
3. **Conclusions** — what I decided this particular case means
4. **Assumptions** — background beliefs I brought in
5. **Interpretations** — meaning I gave to the selected data
6. **Selected data** — what I chose to notice
7. **Available data** — everything observable (most is discarded)

## Input Handling

- Belief as topic — run the descent on it.
- Path — Read the note/doc, then identify the strongest claim and descend on that.

## Example

<example>
Topic: "Alex is not a team player."

<thinking>"Not a team player" is a trait judgment at the Beliefs rung — durable, generalized, and resistant to revision. The descent must surface the specific conclusion that generalized into this belief, before the reflexive loop filters future data to confirm it. Attachment to the trait label is the risk; naming the concrete event resets the ladder to something checkable.</thinking>

Calls AskUserQuestion:
- Question: "Which recent event gave you this conclusion?"
- Options:
  - `(Recommended) Missed the last two team standups` — observable, checkable
  - `Tone in the recent PR review`
  - `A pattern over the last six months`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- The full descent + ascent, rung by rung.
- Any leaps that rested on unverified assumptions.
- At least one plausible alternative interpretation surfaced at a lower rung.
- Revised belief/decision, or confirmation of the original with clearer grounds.
