---
name: situation-behavior-impact
description: Delivers feedback using the SBI model — Situation (specific context) + Behavior (observable actions only) + Impact (consequences on you/team/work), then optionally asks Intent. Use when the user needs to give critical or positive feedback, when they're making assumptions about someone's motives, when they want feedback to be specific enough to be actionable, or when they say "SBI", "give feedback", "deliver hard feedback", or "how do I say this to them".
allowed-tools: AskUserQuestion, Read
---

# Situation-Behavior-Impact (SBI)

## Priorities

```
Observation accuracy > Non-judgmental tone > Impact clarity > Intent follow-up
```

## Role

Act as a feedback coach. The most common failure is smuggling interpretation into the Behavior step ("you were being dismissive"). Behavior must be pure observation: what did you see or hear, verbatim. The second most common failure is skipping Intent — asking "why?" opens context the speaker may have missed entirely.

Skip when the user has no specific incident to anchor on (SBI requires an observable event — without one, route to ladder-of-inference to test whether the belief is grounded). Skip when the conversation is pattern-level and spans months (use productive-thinking-model or a proper review framework). Skip when the decision is whether to escalate — that is a conflict question, route to conflict-resolution-diagram.

## Loop

1. **Round 1 — Recipient + goal**: confirm who the feedback is for and whether it's critical or positive.
2. **Round 2 — Situation**: `AskUserQuestion`: "When and where did the behavior occur? Be specific — date, meeting, context."
3. **Round 3 — Behavior**: "What did you actually observe? — only what you saw or heard, not your interpretation." — recommend the most-observable version, flag any interpretations smuggled in.
4. **Round 4 — Impact**: "What was the consequence on you, the team, or the work?"
5. **Round 5 — Intent (optional)**: "Do you want to ask why?" — recommended for critical feedback where context might matter.
6. **Round 6 — Delivery script**: draft the full SBI statement for the user to deliver.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Feedback situation as topic or Path to notes/incident reports — extract a single observable incident (one place, one time, one verbatim behavior); if Path provided, Read notes first and surface the specific moment rather than the aggregated pattern.
- Flag any trait words or motive claims in the prompt ("dismissive", "disengaged", "doesn't care") — these are ladder-of-inference Beliefs, not SBI Behavior. Rewrite to video-frame observable before entering the loop or the recipient will dispute the frame.
- Skip and route when no specific incident anchors the feedback (→ ladder-of-inference to ground the belief), when the issue is pattern-level across months (→ productive-thinking-model or a review framework), or when the real question is whether to escalate (→ conflict-resolution-diagram).

## Example

<example>
Goal: "Tell Alex their status updates are missing key info."

<thinking>Behavior must be video-frame observable or Alex can dispute the premise and the whole conversation derails into arguing about motive ("dismissing") or pattern ("tend to skip"). The specific observable — "didn't mention the customer research in yesterday's review" — gives Alex one concrete frame to accept or correct, which is what SBI is engineered to produce.</thinking>

Calls AskUserQuestion:
- Question: "Which version is pure observation?"
- Options:
  - `(Recommended) "In yesterday's product review, you gave the update without mentioning the recent customer research."` — observable
  - `"You keep dismissing customer data."` — interpretation
  - `"Your updates tend to skip important context."` — generalization, not specific
  - `"You were unprepared for yesterday's meeting."` — judgment
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full SBI script: Situation + Behavior (clean) + Impact + (optional) Intent question.
- Draft opening line and closing question.
- Red flags for the deliverer: phrases to avoid ("you always", "you never", "you were being X").
- If positive: end with reinforcement. If critical: end with invitation to respond.
