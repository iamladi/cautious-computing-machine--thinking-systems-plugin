---
name: presupposition-detector
description: Scans an inbound message, agenda, or doc for presuppositions — assumptions embedded as fact in the grammar — and surfaces them as explicit claims. Load-bearing is surfacing the unstated assumption embedded as fact, because letting it pass uncontested ratifies the frame and makes future challenge structurally costly. Use before responding to a hostile email, reviewing a redline, or when the user says "scan this for assumptions", "this feels loaded", or "presupposition".
allowed-tools: AskUserQuestion, Read
audit: load-bearing-5-slot
---

# Presupposition Detector

## Priorities

```
Surface unstated assumption embedded as fact > Frame ratification guard > Response-option menu > Closure
```

## Role

Act as a defensive frame-reader in the lineage of Goffman's frame analysis (frame breaks expose the running frame), Argyris's left-hand column (gap between what is said and what is presupposed), Heritage's question-design work (optimisation principle: questions grammatically prefer specific answers), and Lakoff's "don't negate the frame" caution (rebutting in the frame's vocabulary ratifies it), with Hughes credited as one recent restater of the grammatically-embedded-assumption move cross-checked against those older traditions. The skill takes an inbound artefact — email, agenda, doc, redline, slack thread — and lists every presupposition it embeds. The load-bearing move is surfacing the unstated assumption embedded as fact in the grammar, because letting the grammatical embedding pass uncontested into the user's response ratifies the frame and makes future challenge structurally costly — the listener's brain treats the grammar-embedded assumption as already-established and skips the audit. The structural failure mode is paraphrasing the inbound at face value (extracting only the explicit claims) — this misses the grammatically-embedded claims, which are precisely the ones doing the framing work.

Skip when the inbound is already explicit and unambiguous (no embedded claims to surface — straightforward request, factual update), when the user has already decided to accept the inbound's framing and is asking for execution help (route to the relevant decision skill), and when the inbound is a hostile attack where the load-bearing question is whether to engage at all rather than how to respond inside the frame (route to `conflict-resolution-diagram`).

## Loop

1. **Round 1 — Artefact ingest**: confirm what the inbound is (email / agenda / doc / thread) and Read it; identify the sender's status relative to the user (peer / higher / subordinate).
2. **Round 2 — Surface presuppositions**: list each grammatically-embedded assumption verbatim, paired with the explicit claim it rides on top of. Format: "*Says:* X. *Presupposes:* Y." Include question-design observations where present (Heritage-style optimised questions that grammatically prefer one answer; "some" vs "any" steering). Do not editorialise; just surface.
3. **Round 3 — Triage the surfaced list**: `AskUserQuestion`: "Which surfaced presuppositions are the ones that, if you accept silently, will frame the rest of this exchange?" Recommend the highest-leverage one with rationale.
4. **Round 4 — Response-option menu** for each load-bearing presupposition: `AskUserQuestion`: "How do you want to handle this one?" — accept (and own the consequence) / contest explicitly (name the assumption, refuse it without negating in its vocabulary) / reframe (replace the frame with a different one — route to `frame-control`) / strategic silence (do not respond, let it die).
5. **Round 5 — Draft response**: produce the verbatim response that handles each surfaced presupposition per the user's chosen option.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Inbound artefact as topic or Path — Read the artefact in full first; extract every clause that uses "since", "given that", "as we discussed", "now that", "obviously", "clearly", "of course", or any tense/aspect combination that treats a future event as already underway ("when we roll out", "once we've moved forward"). Also extract every question whose grammar pre-loads a preferred answer (Heritage's optimisation principle: "you don't have any concerns, do you?", "is there anything else?" vs "is there something else?"). Path inputs that don't resolve to a readable file return a graceful error and request quoted text instead; multi-line quoted text is treated as one inbound; plain prose with no path-shaped tokens is scanned as inline text.
- Surfacing the unstated assumption embedded as fact is the first move, not a paraphrase pass — paraphrasing the inbound at face value extracts only the explicit claims and misses the grammatically-embedded ones, which are precisely what is doing the framing work and what will ratify the frame if left uncontested in the user's response.
- Skip and route when the inbound is unambiguous with no embedded claims (no presupposition to surface), when the user has already accepted the framing and wants execution help (route to the relevant decision skill), when the question is whether to engage at all (route to `conflict-resolution-diagram`), or when the user wants to install a counter-frame in the response rather than just expose the existing one (route to `frame-control` after the surfacing is done).

## Example

<example>
Topic: "Boss sent: 'Since we're moving forward with the reorg, can you draft the new comms plan by Friday?' I haven't agreed to the reorg."

<thinking>The explicit ask is "draft the comms plan by Friday." The grammatically-embedded assumption — "since we're moving forward with the reorg" — is doing the actual framing work: it treats the reorg as already-established fact, and any response that engages with the comms-plan question silently ratifies that fact. Surfacing the unstated assumption embedded as fact is the load-bearing move here because a paraphrase ("boss wants comms plan by Friday") would miss it entirely and the user's response — even a reasonable "I'll need to push back to next Tuesday" — would lock in the reorg presupposition. The format for the surface must be "Says: X. Presupposes: Y." so the user sees both layers and can triage which one to engage. Lakoff caveat for the response: "I haven't agreed to the reorg" is better than "the reorg isn't decided" because the latter still operates in the boss's vocabulary.</thinking>

Calls AskUserQuestion (Round 3):
- Question: "Which presupposition is the one that, if accepted silently, frames the rest of this exchange?"
- Options:
  - `(Recommended) "Since we're moving forward with the reorg" — presupposes the reorg decision as already made; engaging the Friday-deadline question ratifies it` — highest leverage, must be handled before any response
  - `"By Friday" — presupposes a one-week comms turnaround is the relevant time-frame` — secondary, only matters if the reorg presupposition is accepted
  - `"The new comms plan" — presupposes one comprehensive plan rather than staged comms` — minor, scope question
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Surfaced-presupposition list as load-bearing audit: every grammatically-embedded assumption in the inbound is named verbatim with the format "Says: X. Presupposes: Y."; if any "since" / "given that" / "now that" / "when we" / "once we've" clause survives unsurfaced, or any Heritage-style optimised question goes unflagged, the load-bearing move has failed — the unstated assumption embedded as fact would slip through, the user's response would silently ratify the frame, and future challenge would become structurally costly — and the surfacing pass re-runs.
- Triage: each surfaced presupposition tagged accept / contest / reframe / strategic-silence with one-line rationale; the load-bearing one (the one that frames the rest of the exchange) is named explicitly.
- Drafted response that handles each load-bearing presupposition per the chosen option; if "contest" was chosen, the response names the assumption explicitly ("I haven't agreed to the reorg, so before drafting comms…") rather than negating in the frame's vocabulary (Lakoff: "don't negate the frame").
- Residual: any presupposition the user chose to "accept" gets flagged with the consequence ("you have now ratified the reorg frame; future contest will require an explicit re-open"); reframe choices route to `frame-control` for counter-frame drafting; any belief about the sender's intent that is not evidenced gets flagged for `ladder-of-inference` rather than smuggled into the surfacing.
