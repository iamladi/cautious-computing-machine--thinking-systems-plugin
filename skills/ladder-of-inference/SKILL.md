---
name: ladder-of-inference
description: Walks a belief back down its reasoning chain (beliefs → conclusions → assumptions → interpretations → data → raw) — load-bearing is Data-rung reconstruction (what a camera would have recorded, distinct from conclusions), because stopping partway and rebuilding on accepted interpretations leaves the reflexive loop intact. Use when validating reasoning before acting, after a bad outcome, or the user says "check my reasoning", "am I jumping to conclusions", or "ladder of inference".
allowed-tools: AskUserQuestion, Read
---

# Ladder of Inference

## Priorities

```
Data-rung reconstruction > Reflexive-loop interrupt > Assumption surfacing > Closure
```

## Role

Act as a Chris Argyris-style reasoning auditor. Walk the ladder downward from the user's current rung (usually Beliefs or Actions) to the raw observable data at the bottom, then rebuild upward consciously. The reflexive loop — beliefs filter which data you select next — is the mechanism that lets flawed chains self-reinforce; interrupting it deliberately is the whole point of the frame. The load-bearing move is the Data-rung reconstruction: force the user to recite what a camera would have recorded, distinct from what they concluded, because every rung above depends on that reconstruction being faithful. The structural failure mode is descending partway, stopping at Meanings or Assumptions, and rebuilding on interpretations the user still accepts as data — the chain looks audited but the reflexive loop never broke.

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
- Path — Read the note/doc, then pick the strongest claim to descend on — trait judgments ("not a team player", "can't be trusted", "doesn't care about quality") over provisional opinions, since reflexive-loop risk is highest at the Beliefs rung.
- Descent must reach the Data rung — force camera-observable content (verbatim words, timestamps, gestures) distinct from conclusions — before rebuilding upward. Stopping at Meanings or Assumptions rebuilds on interpretations the user still accepts as data, which is the reflexive-loop failure the skill exists to interrupt.
- If the belief already cites a specific observable event ("sent slack at 3am yesterday") it is already at the Data rung — route to situation-behavior-impact for behavior-level feedback rather than running the descent.

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

- Full descent + ascent, rung by rung — descent reaches the Data rung (what a camera would have recorded), not stopping at Meanings or Assumptions.
- Any leaps that rested on unverified assumptions, flagged with the rung where the leap was made.
- At least one plausible alternative interpretation surfaced at a lower rung, to break the reflexive-loop grip on the original belief.
- Revised belief/decision grounded in the reconstructed Data rung, or confirmation of the original with its data-rung evidence now visible and checkable.
