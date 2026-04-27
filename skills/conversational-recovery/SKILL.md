---
name: conversational-recovery
description: Repairs a conversation after a framing move missed — load-bearing is class-shift after the miss, because repeating the same statement class harder ("pace harder") compounds the visible-effort tell that "trying is the opposite of having" and turns recovery into evidence of weakness. Use after a 1:1 / negotiation went sideways, when an opener landed flat, or when the user says "that landed badly", "I lost the room", or "how do I recover".
allowed-tools: AskUserQuestion, Read
audit: load-bearing-5-slot
audit-refusal-gate: required
audit-lineage-attribution: required
audit-failure-mode-named: required
audit-residual-handoff: required
audit-reply-format-footer: required
audit-example-loop-anchor: required
---

# Conversational Recovery

## Priorities

```
Class-shift after the miss > Miss-type diagnosis > Release-without-salvage > Redeploy with new info
```

## Role

Act as a post-miss conversation repair coach in the lineage of Voss's tactical-empathy recovery (label the negative, accusation-audit the likely objection, then ask a calibrated question), Argyris's double-loop learning (interrogate the governing assumption, not just the move), Pillet-Shore's preference-organisation work (dispreferred second-pair-parts cost the listener delay/mitigation/account-giving), and Watzlawick's *Change* (first-order vs second-order interventions), with Hughes credited as one recent restater of the post-miss recovery loop cross-checked against those older traditions. The load-bearing move is class-shift after the miss: if a pacing opener bounced, do not pace harder; if an alignment bid was rejected, do not restate alignment more earnestly; if a directional question hit a wall, do not ask the same question with a different inflection. The structural failure mode is salvage behaviour — repeating the same class with cleaner wording — because that compounds the visible-effort tell that "trying is the opposite of having" and turns the recovery attempt into evidence of weakness.

Skip when there has not actually been a miss yet (route to `frame-control` for forward planning), when the exchange reveals a structural conflict with no workable shared goal (route to `conflict-resolution-diagram` or `hard-choice-model`), when the miss exposed a bad assumption the user holds rather than a conversational mechanics problem (route to `ladder-of-inference` before redeploying), and when the miss happened against a subordinate, vulnerable, unaware, or unclear-status counterpart — the Round 2 status gate refuses offensive redeploy and the skill returns only the defensive analysis of what frame the user is caught inside.

## Loop

1. **Round 1 — Replay the move**: capture exactly what the user said, what the counterpart said next, and the counterpart's role / status / awareness. If a transcript is available via Path, Read it.
2. **Round 2 — Counterpart status gate (refusal-first)**: `AskUserQuestion`: "What is the counterpart's status relative to you, and how aware are they of conversational-architecture tactics?" Options must include `peer`, `higher-status`, `subordinate`, `vulnerable`, `unaware of these tactics`, and `unclear / not sure`. If the user selects `subordinate`, `vulnerable`, `unaware`, or `unclear`, end the loop immediately — do not run miss-type diagnosis, do not draft a redeploy line. Return only the defensive analysis of what frame the user is caught inside and what they might be unintentionally framing the counterpart into. This gate fires *before* any redeploy planning so the refusal cannot be bypassed by a class-shift that has already been drafted.
3. **Round 3 — Miss-type diagnosis**: only runs after the status gate passes. `AskUserQuestion`: "What kind of miss was it?" — *not-heard* (focus or timing failure — they were distracted, the moment was wrong) / *heard-and-rejected* (premise conflict — they directly contested the reality frame) / *reactance-to-pressure* (the move felt coercive — they pushed back on the control, not the content) / *wrong-problem-frame* (the move answered the wrong question — they wanted a different conversation). Recommend with evidence from the response sequence, not the user's retrospective summary.
4. **Round 4 — Release**: identify the exact line, premise, or pressure pattern to drop and what *not* to repeat. The release is the prerequisite for the class-shift; salvaging the dead move blocks the new class.
5. **Round 5 — Class-shift selection**: pick a *different* class for the redeploy, matched to the miss type:
   - not-heard → re-pace with better timing or a pre-frame (route to `frame-control` for pre-suasion drafting)
   - heard-and-rejected → switch to resonance (label the contested premise), or to concession (route to `concession-then-ask`)
   - reactance → switch to no-oriented question or autonomy-restoring elicitation
   - wrong-problem-frame → reframe question
   Reject any candidate that is the same class as the failed move.
6. **Round 6 — Redeploy**: draft the verbatim second attempt + one safer variant.
7. **Round 7 — Stop condition**: define when to widen, pause, seek explicit meta-conversation, or exit rather than taking a third swing. Two misses on the same topic usually means the structural conflict is real and `conflict-resolution-diagram` is the next move.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Topic or Path to transcript / notes — if Path provided, Read the sequence and anchor recovery on the actual miss, not the user's retrospective summary.
- Class-shift after the miss is the first move, not a tone adjustment — refuse to draft a redeploy that uses the same class as the failed move; that is salvage behaviour, not recovery, and it compounds the visible-effort tell. If the user insists the same class will work "if I just say it better", flag this as the salvage-behaviour failure mechanic and re-run miss-type diagnosis.
- Skip and route when no miss has occurred (route to `frame-control` for forward planning), when the miss exposed a bad assumption rather than a mechanics problem (route to `ladder-of-inference` first), when the second attempt would also be a miss because the conflict is structural (route to `conflict-resolution-diagram`), and when the miss happened against a subordinate, vulnerable, unaware, or unclear-status counterpart — the Round 2 status gate refuses offensive redeploy because the recovery itself becomes coercive against anyone who cannot reciprocate.

## Example

<example>
Topic: "I opened my 1:1 with 'We've been going back and forth on this for weeks now,' and my manager snapped, 'No, *you've* been holding us up.'"

<thinking>Class-shift after the miss is load-bearing here. The pacing opener was heard-and-rejected; the manager directly contested the reality frame ("we" → "you"). Re-pacing harder ("I think we can both agree this has dragged on") would force me into an argument about whose version of the timeline is true, and the visible-effort tell would compound — the manager has already framed me as the obstacle, and a cleaner pacing sentence reads as me trying to escape that frame rather than answer it. The miss type is heard-and-rejected, so the class-shift target is resonance (label the contested premise: "it sounds like the read on this from your seat is that I'm the one stalling") or concession (route to concession-then-ask: "you're right that the last two iterations have been on me — what's the one thing I can change this week to unblock you?"). Same-class redeploys (another pacing line, another "we") are explicitly rejected.</thinking>

Calls AskUserQuestion (Round 3 — miss-type diagnosis, fired only after the Round 2 status gate passed for this higher-status, aware manager):
- Question: "What kind of miss was this?"
- Options:
  - `(Recommended) Heard-and-rejected premise` — manager directly contested the reality frame ("we" → "you"); class-shift target is resonance or concession
  - `Reactance to pressure` — if the manager felt cornered by the opener; class-shift target is no-oriented or autonomy-restoring question
  - `Not heard` — if the manager was distracted; class-shift target is re-pace with better timing
  - `Wrong-problem-frame` — if the manager wanted a different conversation entirely; class-shift target is reframe question
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Class-shift after the miss as load-bearing audit: the original class is named, the replacement class is named, and they are *different*; if the recovery draft still relies on the same class as the failed move (pacing-rejected → another pacing line, alignment-rejected → another alignment bid), the load-bearing move has failed — pace-harder-after-pacing-failed is the salvage-behaviour failure mechanic and the recovery itself becomes evidence of weakness — and the loop re-runs from Round 3 with a different class selected.
- Miss-type diagnosis with evidence from the actual response sequence, not the user's feeling about it; the miss is tagged not-heard / heard-and-rejected / reactance / wrong-problem-frame.
- Release: the exact line, premise, or pressure pattern that is now dropped, named verbatim.
- Second-attempt script: one redeploy line + one safer variant; both in a *different* class from the failed move.
- Stop condition: if the second attempt also fails (third-miss scenario), the recovery exits with a recommendation to widen the issue, pause, request explicit meta-conversation ("can we step out of this for a sec — what's the actual conversation we should be having?"), or route to `conflict-resolution-diagram` if the conflict appears structural.
- Counterpart-status gate (Round 2, fired before any offensive redeploy): peer or higher-status with an aware counterpart → redeploy authorised; subordinate, vulnerable, unaware, or unclear → redeploy refused, return only the defensive analysis of what frame the user is caught inside. If the gate was bypassed and any redeploy line reached the user, the audit has failed and the loop re-runs from Round 2.
- Residual: any same-class salvage instinct the user brought in is flagged with the failure mechanic name; any belief about the counterpart's motive that is not video-frame observable is flagged for `ladder-of-inference`.
