---
name: concession-then-ask
description: Pairs a concession (acknowledging a cost the counterpart paid) with the hard question it earned the right to ask. Load-bearing is the pre-emptive disclosure that makes the hard question askable, because asking cold reads as arrogant and triggers the counterattack the concession was meant to disarm. Use before a sensitive negotiation, before asking for budget/time after a missed commitment, or when the user says "hard question", "concession", "accusation audit", or "Ackerman".
allowed-tools: AskUserQuestion, Read
audit: load-bearing-5-slot
---

# Concession-Then-Ask

## Priorities

```
Pre-emptive disclosure > Hard-question authorisation > Counterattack disarmament > Closure
```

## Role

Act as a negotiation coach in the lineage of Voss's accusation audit (list every negative the counterpart could be thinking and voice them first), the Ackerman bargaining model (concede in fixed decreasing increments — 65/85/95/100 — to anchor the deal range and signal "I'm at my limit" through reciprocity-norm activation), and Fisher-Ury's interest-based negotiation, with Hughes credited as one recent restater of the concession-statement class cross-checked against those older traditions. The skill drafts the two-move pair: the concession that gives ground first, then the hard question that the concession earned the right to ask. The load-bearing move is the pre-emptive disclosure that makes the hard question askable, because asking the hard question without conceding the cost first reads as arrogant — the counterpart hears the ask as entitled rather than direct, and the counterattack they had loaded (the magazine of objections) launches before the question can land. The structural failure mode is conceding nothing real (a fake or trivial concession — "I know your time is valuable" — does not earn the question) or conceding the wrong thing (acknowledging a cost the counterpart did not actually care about, while the cost they did care about goes unnamed).

Skip when the question is not hard (no concession needed; just ask), when the user has nothing real to concede (concession-then-ask is not the move; route to `frame-control` with a different statement class), when the relationship is purely transactional and concession would read as weakness with no upside (cold sales call to a stranger), when the hard question is actually feedback on a specific incident (route to `situation-behavior-impact` instead), and when the counterpart is subordinate, vulnerable, unaware of these tactics, or unclear in status — the asymmetry of "I concede my cost, now you owe me an answer" is coercive against anyone who cannot reciprocate; the Round 1 status gate refuses offensive deployment and the skill exits with "state your request plainly without earned-right pressure."

## Loop

1. **Round 1 — Counterpart status gate (refusal-first)**: `AskUserQuestion`: "What is the counterpart's status relative to you, and how aware are they of these tactics?" Options must include `peer`, `higher-status`, `subordinate`, `vulnerable`, `unaware of negotiation tactics`, and `unclear / not sure`. If the user selects `subordinate`, `vulnerable`, `unaware`, or `unclear`, end the loop immediately — do not run the accusation audit, do not draft a concession, do not draft the pair. Return only the alternative guidance: "state your request plainly without earned-right pressure." This gate fires *before* any concession-planning so the refusal cannot be bypassed by a concession that has already been drafted.
2. **Round 2 — Hard question**: only runs after the status gate passes. `AskUserQuestion`: "What is the hard question you want to be able to ask?" — extract the verbatim question, surface why it would land arrogant if asked cold.
3. **Round 3 — Accusation audit (Voss)**: list every negative the counterpart could be thinking — the costs they paid, the times you missed, the concerns they have about your ask. This is the surface-area for concession candidates.
4. **Round 4 — Concession candidate**: `AskUserQuestion`: "Which concession is real, costly to admit, and addresses what the counterpart actually cares about?" Recommend the one that names the specific cost the counterpart paid, with rationale. Reject trivial / fake / wrong-target concessions explicitly. If the negotiation is a numerical ask (budget, time, scope), offer the Ackerman 65/85/95/100 anchor pattern as an alternative concession discipline.
5. **Round 5 — Pair check**: produce the concession statement + hard question pair; verify the concession earns the question (would the question still read arrogant after this concession? if yes, concession is wrong or insufficient).
6. **Round 6 — Delivery script**: draft the verbatim two-move sequence with a beat between them.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Topic or Path describing the upcoming ask — extract the verbatim hard question first, then the relationship history (what costs has the counterpart paid? what commitments have been missed? what objections do they have loaded?). If Path provided, Read the thread and surface the counterpart's recent expressions of cost or frustration as concession-candidate evidence.
- The first move is always the pre-emptive disclosure that makes the hard question askable — refuse to draft the pair if the user proposes a concession that is trivial ("I know your time is valuable"), fake (acknowledges a cost they did not pay), or wrong-target (acknowledges a cost the counterpart did not care about). A concession that does not address what the counterpart actually paid does not earn the hard question and the counterattack they loaded launches anyway.
- Skip and route when the question is not hard (just ask), when there is nothing real to concede (route to `frame-control` for a different statement class — pacing, alignment, resonance, or presupposition), when the ask is feedback on a specific incident (route to `situation-behavior-impact`), and when the counterpart is subordinate, vulnerable, unaware, or unclear in status — the Round 1 gate refuses offensive deployment because the asymmetry of "I concede my cost, now you owe me an answer" is coercive against anyone who cannot reciprocate.

## Example

<example>
Topic: "I need to ask my client for an extension on the deliverable, but we already missed the last one."

<thinking>The hard question — "can we push the deliverable to next Friday?" — would read arrogant cold, because the counterpart's loaded objection is "you already missed the last one." The pre-emptive disclosure that makes the hard question askable here is naming that specific cost — the missed prior deadline and what it cost the client — before the ask. A trivial concession ("I know you're busy") would not earn the question because it does not address the cost the client actually paid. The load-bearing test: would the question still read arrogant after the concession? If the concession names "we missed the last one and that pushed your launch by a week," the answer is no — the concession has voiced the loaded objection and the question lands as direct rather than entitled. Ackerman pattern does not apply here because this is a yes/no extension, not a numerical bargain; the concession discipline is "name the specific paid cost", not the 65/85/95/100 ladder.</thinking>

Calls AskUserQuestion (Round 4 — concession candidate, fired only after the Round 1 status gate passed for this peer-status, aware client):
- Question: "Which concession is real, costly to admit, and addresses what the client actually cares about?"
- Options:
  - `(Recommended) "We missed the last deliverable and I know that pushed your launch by a week"` — names the specific cost the client paid, voices their loaded objection first
  - `"I know your time is valuable"` — trivial, does not address the missed-deliverable cost
  - `"This project has been complex"` — wrong target; concedes our pain, not theirs
  - `"I appreciate your patience"` — fake; presupposes patience that may not exist
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Pre-emptive disclosure as load-bearing audit: the concession names a specific real cost the counterpart paid (verbatim where possible — "the missed delivery cost you a week of launch runway"), and the question that follows would read direct-not-arrogant after that concession; if the concession is trivial, fake, or wrong-target — the pre-emptive disclosure that makes the hard question askable has not happened, the counterattack the concession was supposed to disarm will launch anyway because the loaded objection was not voiced — the load-bearing move has failed and the loop re-runs from the accusation audit in Round 3.
- Pair structure: verbatim concession statement + a beat (period and pause) + verbatim hard question; both lines are short enough to deliver in one breath each.
- Counterattack-disarmament check: the loaded objection the concession was meant to voice is named explicitly in the audit ("the client was going to say 'you already missed the last one'"), and the concession contains that objection's core in the user's own words.
- Counterpart-status gate (Round 1, fired before any offensive output): peer or higher-status with an aware counterpart → offensive deployment authorised; subordinate, vulnerable, unaware, or unclear → offensive deployment refused, return only the alternative "state your request plainly" guidance. If the gate was bypassed and any concession or hard-question pair reached the user, the audit has failed and the loop re-runs from Round 1.
- Ackerman discipline (when applicable): if the ask is numerical, the concession sequence is offered as 65/85/95/100 of target with the diminishing-increment rationale; if not numerical, this section is marked "N/A — yes/no ask, not numerical bargain".
- Residual: any concession candidate that was trivial / fake / wrong-target gets flagged with the reason and the loaded objection it failed to voice; if no real concession exists, the skill ends with "concession-then-ask is not the move" and routes to `frame-control` for a different statement-class selection.
