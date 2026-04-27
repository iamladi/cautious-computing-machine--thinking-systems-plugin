# Phase 2 — Claude Analysis: Framing Tactics for `thinking-systems-plugin`

**Analyst:** Claude (Opus 4.7, 1M context)
**Date:** 2026-04-26
**Inputs read in full:** `prompt.md`, `context.md`, `transcript.txt` (Hughes "5 Sentences" video), and the canonical skills (`six-thinking-hats`, `situation-behavior-impact`, `minto-pyramid`, `ladder-of-inference`, `abstraction-laddering`) + the canonical command wrapper (`commands/six-thinking-hats.md`) + plugin `README.md` and `CHANGELOG.md`.

## Breadth-first contents (every subtopic before any deep-dive)

- **A. Cross-validation of Hughes against the literature**
  - A1. The 5 statement classes vs. Voss / NLP / Cialdini / Lakoff / Schein / Goffman / CA
  - A2. Framing primitives Hughes does *not* cover (anchoring, accusation audit, no-oriented questions, contrast, identity-stake, temporal, Zeigarnik, Socratic elenchus)
  - A3. Recovery loop vs. Voss recovery, Argyris double-loop, Schein iterative inquiry
  - A4. Defensive read — frame-break detection, left-hand column, ladder-of-inference; offensive vs defensive split position
  - A5. Ethics — manipulation line, "doctor not consciously manipulating" claim, plugin position
- **B. Plugin extension proposals**
  - B1. Skill inventory (final list with route map)
  - B2. Mega-skill vs micro-skill verdict
  - B3. Three full audit-clean SKILL.md drafts (`frame-control`, `presupposition-detector`, `concession-then-ask`)
  - B4. Three matching command-wrapper drafts
  - B5. Cross-skill edits to existing skills (concrete line changes)
  - B6. README.md and CHANGELOG.md diffs
- **C. Stress-test of all open design questions in §5.3**
- **D. Risks and disclaimers**
  - D1. What in Hughes does *not* survive the literature
  - D2. When the plugin should *not* recommend these skills
  - D3. Citation hygiene — Hughes/NCI credibility issue, broader tradition

---

## A. Framing tactics — corroborate, extend, or challenge Hughes

### A1. Cross-validation of the 5+5 framework

The literature **converges** on Hughes's architecture under different vocabularies. None of the five statement classes is unique to him; what is somewhat unique is the explicit pairing rule (statement-then-question as a 2-move sequence) and the recovery loop. Mapping:

| Hughes class | Closest external primitive | Source | Evidence strength |
|---|---|---|---|
| **Pacing** | Mirroring (last 1-3 words); "yes-set"; small agreements ladder | Voss (Never Split the Difference, 2016); Bandler-Grinder (Structure of Magic, 1975); Cialdini (Influence, 1984) — commitment/consistency principle | Strong. The "yes-set" is empirically robust across consistency-principle replications; mirroring is field-tested in FBI hostage data. |
| **Alignment** | Shared-interest framing; "we" pronouns; common-ground move | Fisher & Ury (Getting to Yes, 1981 — interests-not-positions); Cialdini's "Unity" principle (Pre-Suasion, 2016) | Strong. Unity (shared identity) is the seventh principle Cialdini added in Pre-Suasion specifically because the data warranted it. |
| **Resonance** | Labeling ("It seems like…", "It sounds like…"); tactical empathy | Voss; Carl Rogers reflective listening; Schein humble inquiry | Strongest external corroboration. Voss explicitly attributes 14× speed-up to tactical empathy in field cases; labeling is the single most-cited Voss technique. |
| **Concession** | Accusation audit; pre-emptive disclosure; Ackerman 65/85/95/100 | Voss (accusation audit); Ackerman bargaining model; courtroom "get the uglies out first" | Strong. Voss's accusation audit is functionally identical to Hughes's concession-before-hard-question move. |
| **Presupposition** | NLP presupposition pattern; framing-as-grammatical-embedding; Lakoff's "every word evokes a frame" | Bandler-Grinder; Lakoff (Don't Think of an Elephant, 2004); Tversky-Kahneman (Science 1981) | Mixed. The cognitive-linguistics evidence (Thibodeau & Boroditsky 2011/2013 metaphor-frames-policy-preferences) supports the *effect*; the NLP lineage supports the *technique*; but NLP itself is largely rejected by mainstream psychology. The phenomenon is real even if NLP's wider claims are not. |

| Hughes question | Closest external primitive | Source | Evidence strength |
|---|---|---|---|
| **Directional** | Calibrated questions ("how" / "what"); Socratic elenchus | Voss; Plato/Socrates | Strong. Voss's calibrated-question taxonomy is the closest 1:1 match. |
| **Assumptive** | Embedded-decision question; "presuppositional question" | Bandler-Grinder; sales literature ("alternative close") | Moderate. Standard sales technique, repeatedly cautioned-against in consumer-protection literature when used coercively. |
| **Elicitation** | Indirect inquiry; humble inquiry; thinking-out-loud statements | Schein (Humble Inquiry, 2013); Voss "no-oriented question" overlaps | Strong. Schein's whole project is to legitimize curiosity-driven question-stems that lower defensiveness — same mechanism Hughes describes as "it doesn't feel like extraction." |
| **Reframe** | Frame contest (Goffman); reframing (Watzlawick; Bandler-Grinder); double-loop learning question (Argyris) | Goffman (Frame Analysis, 1974); Watzlawick et al. (Change, 1974); Argyris | Strong. The "what if this isn't a budget problem, it's a sequencing problem" move is textbook Watzlawick reframing. |
| **Diagnostic** | "Show your work"; expert-witness cross-examination; Schein process consultation question ("why did you decide to call me?") | Schein; legal cross-examination practice | Strong. Schein opens engagements with this exact move ("why did you decide to call me?") — same evaluator-flip, same warmth wrapper. |

**Where the literature names a primitive Hughes is missing** (full list in A2). Conversation Analysis (Sacks-Schegloff-Jefferson) names *adjacency pairs* and *preference organization* — these undergird Hughes's whole "the question forces the next move" intuition, and give it formal grounding Hughes does not provide. A statement+question is a designed first-pair-part; the listener is structurally pressured to produce a second-pair-part of a specific type, which is *why* the question locks them inside the frame. Hughes asserts the effect; CA explains the mechanism.

**Sources:**
- Voss, *Never Split the Difference* — labels/mirrors/calibrated questions/accusation audit/no-oriented questions: https://www.blackswanltd.com/the-edge/the-art-of-tactical-empathy
- Cialdini, *Pre-Suasion* — channel-of-attention, privileged moments, Unity principle: https://en.wikipedia.org/wiki/Pre-Suasion
- Tversky & Kahneman 1981, "The Framing of Decisions and the Psychology of Choice", Science — gain/loss framing replicates with attenuation: https://www.science.org/doi/10.1126/science.7455683 (replication discussion: https://en.wikipedia.org/wiki/Framing_effect_(psychology))
- Lakoff metaphor-framing experimental support (Thibodeau & Boroditsky 2011/2013): https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0016782
- Goffman, *Frame Analysis* — keying, frame breaks, primary frameworks: https://en.wikipedia.org/wiki/Frame_analysis
- Sacks/Schegloff/Jefferson 1974 turn-taking; preference organization: https://en.wikipedia.org/wiki/Conversation_analysis
- Schein, *Humble Inquiry* (2013): https://www.bkconnection.com/books/title/humble-inquiry-second-edition
- Fisher & Ury, *Getting to Yes* — interests vs positions: https://www.pon.harvard.edu/daily/negotiation-skills-daily/getting-to-yes-negotiating-agreement-without-giving-in/

### A2. Primitives Hughes does *not* cover but are well-attested

Five primitives merit consideration; only some belong in the plugin:

1. **Anchoring** (Tversky-Kahneman) — first number in a negotiation distorts the entire range. Distinct from presupposition (which is grammatical) — anchoring is *numerical*. **Plugin verdict:** Not a separate skill — anchoring lives inside `decision-matrix` (factor weighting) and inside the proposed `concession-then-ask` (the Ackerman 65/85/95/100 ladder is anchoring-as-concession). Mention only.

2. **Accusation audit** (Voss) — list every negative thing your counterpart could be thinking, then voice them first. **Plugin verdict:** This *is* one specific move inside `concession-then-ask`. Not separately worth a skill, but central to the Concession SKILL.md.

3. **No-oriented questions** (Voss) — "Is now a bad time?" inverts default refusal-cost. **Plugin verdict:** A move within `frame-control`'s question-class menu, not its own skill. Worth flagging because Hughes's question taxonomy *does not include it* and it is field-tested.

4. **Contrast principle** (Cialdini) — door-in-the-face / extreme anchor first. Manipulation-coded; the plugin should *not* productize this as a tactic for users to deploy. Defensive mention only.

5. **Identity-stake / values framing** (Cialdini Unity; Lakoff Strict-Father vs Nurturing-Parent) — frames that activate identity rather than interest. The parent example in Hughes's transcript ("the only thing I've ever wanted is what's best for you") is identity-stake framing in disguise; Hughes calls it Presupposition but the load-bearing move is the *identity claim*, not the grammatical embedding. **Plugin verdict:** Worth a sentence in the `frame-control` skill that names identity-stake as a sub-variant of Presupposition; not a separate skill.

6. **Temporal framing / 10-year-from-now lens** (Suzy Welch's 10/10/10; behavioral-economics future-self literature). Already covered in plugin by `second-order-thinking` — **explicitly not** new. The framing-tactics work should *route* to it rather than duplicate.

7. **Zeigarnik / "unfinished" attention-capture** (Cialdini Pre-Suasion). Useful for hooks/openings but extremely thin as a plugin skill. **Verdict:** mention only.

8. **Socratic elenchus** — ask questions that lead the interlocutor to contradict themselves. Closest single tradition to Hughes's Directional question. **Verdict:** cite as the historical anchor for Directional questions, do not separately skill it.

9. **Narrative reframing** (Watzlawick, *Change*, 1974). The "what if this isn't a budget problem, it's a sequencing problem" move. Hughes's Reframe question. Already covered. **Verdict:** the lineage is Watzlawick, not just Hughes; cite it.

### A3. Recovery loop — where Hughes is most distinctive

The recovery loop ("read the miss → release → shift class → redeploy") is the **most defensible original synthesis** in the talk, even if no individual step is novel:

- **Read the miss** — diagnostic empathy. Voss's "tactical empathy" includes diagnosing *why* a tactic failed (was the counterpart distracted? hostile? blocked by an unspoken accusation?). Argyris's double-loop learning is the deeper version: not just "pick a different move," but "interrogate the governing assumption." Hughes's empty-room-vs-held-frame distinction is a useful crude version of that.
- **Release the frame** — Voss frames this as "tactical empathy without ego attachment"; sales literature calls it "letting go of the close"; principled-negotiation literature calls it not getting anchored to a single proposal. The phenomenon is well-established; Hughes's vivid framing ("trying is the opposite of having") is rhetorically stronger than the academic versions.
- **Shift the class** — under-developed in the literature in this exact form. Voss's recovery is more granular (mirror → label → calibrated question, with retreat between each). Hughes's "don't pace harder, switch to resonance" is genuinely useful as a heuristic and worth preserving.
- **Redeploy with more information** — boxer-jab metaphor. Standard probing-and-adjustment from negotiation literature; not novel but well-said.

**Verdict:** the recovery loop is *the* differentiator and must survive into the plugin as a distinct, audited section of `frame-control` (or even its own skill — see B2). Losing it would reduce the plugin contribution to "5 statement classes + 5 question classes" which is ~80% redundant with Voss + Cialdini.

### A4. Defensive read — detect frames being installed *on* you

The defensive question (how do I notice frames being installed on me?) has its own literature distinct from offensive framing:

- **Goffman frame breaks** — when an event ruptures the frame (someone laughs at a funeral), the frame becomes momentarily visible. The defensive technique: deliberately produce small frame-breaks to test what frame is running. ("Wait, are we treating this as already decided?")
- **Argyris/Schein left-hand column** — write what you're *thinking* in the left column, what you're *saying* in the right; the gap reveals what frame you accepted without challenging.
- **Ladder-of-inference** (already in plugin) — descend from a belief to verify it isn't built on a presupposition smuggled into your selected-data rung.
- **Lakoff "don't negate the frame"** — when you say "I'm not a crook," you've activated the crook frame. Defensive countermove: refuse the frame's vocabulary entirely.

**Position:** defensive framing should be a **separate skill** (`presupposition-detector`), not a mode flag inside `frame-control`. The plugin precedent is clear: `ladder-of-inference` is defensive (audit my belief), `situation-behavior-impact` is offensive (deliver feedback). Splitting matches the existing house pattern, lowers cognitive load (the user knows which one they need by the verb in their prompt: "scan this email for…" vs. "help me write…"), and lets the load-bearing audit clauses be tighter (different moves are load-bearing for offense vs. defense).

### A5. Ethics — where the line sits

Hughes's claim that the doctor/boss/parent are "not consciously manipulating" is **partially defensible and partially convenient**. Defensible: most frame control is unconscious skill, learned through repetition (medical training, parenting, management experience). Convenient: it sidesteps the responsibility question — once you *know* the architecture, deploying it on a less-aware counterpart is asymmetric.

Three ethically distinct uses, each with a different plugin position:

1. **Defensive use** — notice frames being installed on you. **No ethical issue.** Plugin endorses without qualification.
2. **Symmetric use** — both parties know the game (negotiation, debate, sales-to-sales). **Acceptable.** Plugin teaches as standard professional skill, like negotiation itself.
3. **Asymmetric offensive use** — install frames on someone who doesn't know they're being framed and who has less power than you (employee, child, patient, vulnerable counterpart). **This is the manipulation case.** Plugin must refuse to be a coaching tool for it.

**Plugin position to adopt:** the framing-tactics skills are **diagnostic and defensive by default** and *opt-in to offensive only when the user names a peer or higher-status counterpart in a recognized adversarial context (negotiation, sales, debate)*. The Completion section of `frame-control` should include an audit clause that asks: *"Is the counterpart a peer or higher-status adversary? If they are subordinate, vulnerable, or unknowing, the offensive deployment is refused and the skill returns only the defensive read."* This is the closest the plugin can get to using the material without becoming a manipulation-coaching tool.

This position is consistent with Voss's own framing (he teaches FBI agents and business-school MBAs, not telemarketers targeting the elderly) and with Schein's humble-inquiry stance (the whole point of *humble* inquiry is asymmetric power awareness). Hughes himself does not draw this line in the transcript; the plugin should draw it for him.

---

## B. Plugin extension proposals

### B1. Skill inventory — the final recommended set

After cross-validation, four new skills earn their slot. Two candidates from the discovery brief are rejected.

| New skill | Load-bearing move | Category | Routes from / to |
|---|---|---|---|
| **`frame-control`** | Identifying the frame already running before speaking — installing without first reading is the failure mechanic, since any statement+question pair deployed into an unread room is a *naked* attempt that reveals the move | Communication | **Routes from:** `situation-behavior-impact` (when recipient is hostile/higher-status, frame-control runs first); `conflict-resolution-diagram` (when one "demand" is a presupposition not an interest); `ooda-loop` Orient stage (frame-reading *is* an Orient act). **Routes to:** `presupposition-detector` (defensive scan of incoming message); `concession-then-ask` (when authority frame detected); `ladder-of-inference` (when own belief about counterpart's frame is shaky) |
| **`presupposition-detector`** | Surfacing the unstated assumption embedded as fact in the input — failure mechanic is letting the grammatical embedding pass uncontested into your own response, which ratifies the frame and makes future challenge structurally costly | Communication (defensive sibling of `frame-control`) | **Routes from:** any inbound document review, hostile email, meeting prep. **Routes to:** `ladder-of-inference` (when the surfaced presupposition rests on an inference chain to audit); `frame-control` (when the user wants to install a counter-frame, not just expose the existing one) |
| **`concession-then-ask`** | The pre-emptive disclosure that makes a hard question askable — failure mechanic is asking the hard question without conceding the cost first, which reads as arrogant and triggers the counterattack the concession was supposed to disarm | Communication | **Routes from:** `situation-behavior-impact` Intent variant (asking "why" after critical feedback is structurally a concession-then-diagnostic); negotiation/escalation prep. **Routes to:** `frame-control` for full statement+question planning when one move is not enough |
| **`conversational-recovery`** | The class-shift after a missed frame — failure mechanic is repeating the same statement class harder ("pace harder") instead of switching to a different class, which compounds the visible-effort tell that "trying is the opposite of having" | Communication | **Routes from:** `frame-control` (when the planned move missed); standalone after a real conversation went sideways and the user wants to plan the recovery turn |

**Rejected candidates (with reason):**
- **`reframe`** — already covered by `abstraction-laddering` (climbing up the why-rung is the same primitive). Adding a separate `reframe` skill duplicates the climb-before-ideating load-bearing move. **Verdict:** instead, add a one-line cross-reference in `abstraction-laddering` noting that the same skill handles conversational reframe of a stuck position.
- **`pacing-and-leading` / `resonance-statement` standalones** — too granular. Splitting one statement class per skill produces 5 thin skills that each repeat the architecture overview. The plugin's split granularity (e.g., `balancing-feedback-loop` vs. `reinforcing-feedback-loop`) is justified because those are *structurally different mechanisms* (one self-correcting, one self-amplifying); the five Hughes statement classes are five *variants of the same mechanism* (statement-sets-frame), so they belong in one skill (`frame-control`) with a class-selection round, not five separate skills.
- **`tactical-empathy` (Voss-flavored)** — ~95% overlap with the Resonance class inside `frame-control`. Carving it out as a Voss-named skill would force the user to remember which lineage's vocabulary to invoke, and would produce two skills competing for the same trigger. **Verdict:** cite Voss heavily in `frame-control`'s Role section; do not split.

### B2. Mega-skill vs micro-skills — definitive position

**Verdict: ONE mega-skill (`frame-control`) for the offensive 5+5 architecture, plus THREE supporting skills (`presupposition-detector` defensive, `concession-then-ask` for the high-leverage pairing, `conversational-recovery` for the recovery loop).**

**Justification:**

1. **Hughes himself rejects the 25-cell flowchart.** The two routing questions (what frame is running? what do I need them to do next?) are the actual selection rule. A single skill with a routing-question round preserves Hughes's own design; five class-skills would force the user to know which class they need *before* invoking, which inverts the routing logic.

2. **Per-skill granularity precedent supports the bundle, not the split.** `six-thinking-hats` has six perspectives and is one skill; `productive-thinking-model` has six DRIVE stages and is one skill; `cynefin-framework` has five domains and is one skill. The plugin only splits when the *mechanism* differs (balancing vs reinforcing loops) — not when the *menu* differs.

3. **Three supporting skills are split out because their load-bearing moves are different from frame-control's.** `presupposition-detector` is *defensive* (load-bearing: surfacing the embedded assumption); `concession-then-ask` is a *specific 2-move pattern* with its own failure mode (concession-omission, not class-mis-selection); `conversational-recovery` is the *recovery loop* whose load-bearing move (class-shift, not pace-harder) is structurally different from frame-control's load-bearing move (frame-reading-before-speaking).

4. **Total new skills: 4.** Plugin grows 25 → 29. Communication category grows 2 → 6, finally giving it parity with Systems Thinking (5) and Decision Making (10).

### B3. Three full audit-clean SKILL.md drafts

The .gnhf audit checks that the load-bearing move named in the description appears verbatim or near-verbatim in: Priorities, Role, Input Handling, Example `<thinking>`, Completion. All three drafts below are written to that audit standard.

#### B3.1 — `skills/frame-control/SKILL.md`

```markdown
---
name: frame-control
description: Plans the conversational statement+question pair that installs a chosen frame — load-bearing is reading the frame already running in the room before speaking, because any statement+question deployed into an unread room is a naked move operating inside whichever frame is already there (typically the higher-status party's). Use before a hard 1:1, negotiation, escalation meeting, or any conversation where you suspect you're being framed-on-by-default; or when the user says "frame this", "frame control", "I keep losing this conversation", "I always end up agreeing", or "I need to set the tone".
allowed-tools: AskUserQuestion, Read
---

# Frame Control (Statement + Question Architecture)

## Priorities

```
Frame-already-running read > Statement-class fit > Question-class fit > Recovery plan
```

## Role

Act as a conversational-architecture coach in the lineage of Voss's tactical empathy, Cialdini's pre-suasion, Goffman's frame analysis, and Schein's process consultation. The skill plans a two-move sequence — a statement that installs a frame, followed by a question that locks the listener inside it — for one specific upcoming exchange. The load-bearing move is reading the frame already running in the room before drafting either move, because a statement+question deployed into an unread room is a naked attempt operating inside whichever frame is already there — typically the higher-status party's — and reinforces that frame instead of seizing it. The structural failure mode is selecting a statement class without first naming what the listener is currently holding (authority / adversarial / emotional / narrative) — every later step then optimizes the move for the wrong frame.

Skip when the conversation has not yet happened and the user wants pure introspection (route to `ladder-of-inference` to check own assumptions first), when the counterpart is subordinate, vulnerable, or unaware (the offensive deployment is refused on ethical grounds — return only the defensive frame-read), and when the upcoming exchange is delivery of specific feedback on a specific incident (route to `situation-behavior-impact` and let it consume the frame-read as input).

## Loop

1. **Round 1 — Frame-read**: `AskUserQuestion`: "What frame is already running in the room?" Recommend based on counterpart description (authority / adversarial / emotional / narrative / unread). Refuse to draft until this round is answered — this is the load-bearing move.
2. **Round 2 — Counterpart status check**: `AskUserQuestion`: "Is the counterpart a peer, higher-status, or subordinate?" If subordinate or vulnerable, end loop and return defensive frame-read only.
3. **Round 3 — Statement class**: Recommend the class that matches the read (authority → resonance or concession; adversarial → alignment; emotional → resonance; narrative → reframe via question, statement opens with pacing). 2-3 alternatives with tradeoffs.
4. **Round 4 — What-they-need-to-do-next**: `AskUserQuestion`: "What do you need them to do in the next 30 seconds?" — this picks the question class (arrive at conclusion → directional; act as if decided → assumptive; hand over information → elicitation; see different lens → reframe; cede evaluator role → diagnostic).
5. **Round 5 — Draft the pair**: produce the verbatim statement + verbatim question.
6. **Round 6 — Recovery plan**: name the *different* statement class to switch to if the first lands in dead air or hits a held frame; route to `conversational-recovery` for the full recovery loop if needed.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Topic or Path describing an upcoming conversation — extract the counterpart's role and status, the most recent friction point, and any verbatim phrases the counterpart has already used (these reveal the frame already running). If Path provided, Read the thread/email first and surface the counterpart's last 2-3 utterances as evidence of the running frame.
- The first move is always reading the frame already running before speaking — refuse to advance to statement-class selection if the user cannot name the running frame; offer the four standard frames (authority / adversarial / emotional / narrative) as recognition prompts. A statement+question deployed into an unread room is a naked move and will reinforce whatever frame is already there.
- Skip and route when the user has a specific incident to give feedback on (→ `situation-behavior-impact`), when the user wants to surface presuppositions in an inbound message (→ `presupposition-detector`), when an attempted move already missed and the user needs the recovery loop (→ `conversational-recovery`), when the counterpart is subordinate or vulnerable (refuse offensive use; return defensive frame-read only).

## Example

<example>
Topic: "I have a 1:1 with my VP tomorrow about the missed Q3 deadline. I always end up agreeing to more work."

<thinking>The "always end up agreeing to more work" tell is the load-bearing diagnostic: the user is operating inside an authority frame already running in the room, so any naked question they bring ("what should I prioritize?", "can we push the date?") will reinforce that frame and produce more agreement. Reading the frame already running before speaking is what discriminates this from a generic prep session — without it, the recommended statement would be optimized for the wrong frame and the meeting would replay the same dynamic. Authority frame is the read; resonance and concession are the only ways under it (you don't out-authority a VP), so the statement-class recommendation is constrained by the frame-read, not by user preference.</thinking>

Calls AskUserQuestion (Round 1):
- Question: "What frame is already running in the room before you speak?"
- Options:
  - `(Recommended) Authority` — VP holds positional power; your prep is happening inside their frame. Resonance or concession will be the only statement classes that get under it.
  - `Adversarial` — both braced for a fight. Alignment opens.
  - `Emotional` — VP is angry / scared / checked out. Resonance opens.
  - `Narrative` — team has agreed on a story about whose fault Q3 was. Reframe question is the move.
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Frame-already-running read as load-bearing audit: the running frame is named (authority / adversarial / emotional / narrative) with one piece of evidence from the counterpart's recent behavior or words; if the frame was not read before the statement was drafted, the load-bearing move has failed — the planned statement+question is a naked move operating inside whichever frame was already there — and the loop re-runs from Round 1 with the frame-read filled in.
- Counterpart-status check: peer or higher-status → offensive deployment authorized; subordinate or vulnerable → offensive deployment refused, return only the defensive read of what the *user* is being framed into.
- Verbatim statement + verbatim question pair, with statement class and question class named, and a one-line justification linking each class back to the frame-read in Round 1.
- Recovery plan: the *different* statement class to switch to if the planned move lands in dead air (empty-room miss → focus-generation problem, not tactic problem) or hits a held frame (held-frame miss → switch class, do not deploy the same class harder); recovery follows `conversational-recovery` if the user wants the full loop.
- Residual: any naked-question instinct the user brought in ("just ask the VP what they want") is flagged with the frame it would have reinforced; any motive inference about the counterpart that is not video-frame observable is flagged for `ladder-of-inference` rather than smuggled into the frame-read.
```

#### B3.2 — `skills/presupposition-detector/SKILL.md`

```markdown
---
name: presupposition-detector
description: Scans an inbound message, meeting agenda, or document for presuppositions — assumptions embedded as already-established fact in the grammar — and surfaces them as explicit claims the user can choose to accept, contest, or reframe. Load-bearing is surfacing the unstated assumption embedded as fact, because letting the grammatical embedding pass uncontested into your own response ratifies the frame and makes future challenge structurally costly. Use before responding to a hostile email, prepping for a meeting where the agenda already reads as decided, reviewing a contract redline, or when the user says "what am I missing here", "this feels off", "scan this for assumptions", or "presupposition".
allowed-tools: AskUserQuestion, Read
---

# Presupposition Detector

## Priorities

```
Embedded-assumption surfacing > Frame ratification guard > Response-option menu > Closure
```

## Role

Act as a defensive frame-reader in the lineage of Goffman's frame analysis (frame breaks expose the running frame), Argyris's left-hand column (gap between what is said and what is presupposed), and Lakoff's "don't negate the frame" caution (rebutting in the frame's vocabulary ratifies it). The skill takes an inbound artifact — email, agenda, doc, redline, slack thread — and lists every presupposition it embeds. The load-bearing move is surfacing the unstated assumption embedded as fact in the grammar, because letting the grammatical embedding pass uncontested into the user's response ratifies the frame and makes future challenge structurally costly — the listener's brain treats the grammar-embedded assumption as already-established and skips the audit. The structural failure mode is paraphrasing the inbound at face value (extracting only the explicit claims) — this misses the grammatically-embedded claims, which are precisely the ones doing the framing work.

Skip when the inbound is already explicit and unambiguous (no embedded claims to surface — straightforward request, factual update), when the user has already decided to accept the inbound's framing and is asking for execution help (route to the relevant decision skill), and when the inbound is a hostile attack where the load-bearing question is whether to engage at all rather than how to respond inside the frame (route to `conflict-resolution-diagram`).

## Loop

1. **Round 1 — Artifact ingest**: confirm what the inbound is (email / agenda / doc / thread) and Read it; identify the sender's status relative to the user (peer / higher / subordinate).
2. **Round 2 — Surface presuppositions**: list each grammatically-embedded assumption verbatim, paired with the explicit claim it rides on top of. Format: "*Says:* X. *Presupposes:* Y." Do not editorialize; just surface.
3. **Round 3 — Triage the surfaced list**: `AskUserQuestion`: "Which surfaced presuppositions are the ones that, if you accept silently, will frame the rest of this exchange?" Recommend the highest-leverage one with rationale.
4. **Round 4 — Response-option menu** for each load-bearing presupposition: `AskUserQuestion`: "How do you want to handle this one?" — accept (and own the consequence) / contest explicitly (name the assumption, refuse it) / reframe (replace the frame with a different one — route to `frame-control`) / strategic silence (do not respond, let it die).
5. **Round 5 — Draft response**: produce the verbatim response that handles each surfaced presupposition per the user's chosen option.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Inbound artifact as topic or Path — Read the artifact in full first; extract every clause that uses "since", "given that", "as we discussed", "now that", "obviously", "clearly", "of course", or any tense/aspect combination that treats a future event as already underway ("when we roll out", "once we've moved forward").
- Surfacing the unstated assumption embedded as fact is the first move, not a paraphrase pass — paraphrasing the inbound at face value extracts only the explicit claims and misses the grammatically-embedded ones, which are precisely what is doing the framing work and what will ratify the frame if left uncontested in the user's response.
- Skip and route when the inbound is unambiguous with no embedded claims (no presupposition to surface), when the user has already accepted the framing and wants execution help (route to the relevant decision skill), when the question is whether to engage at all (route to `conflict-resolution-diagram`), or when the user wants to install a counter-frame in the response rather than just expose the existing one (route to `frame-control` after the surfacing is done).

## Example

<example>
Topic: "Boss sent: 'Since we're moving forward with the reorg, can you draft the new comms plan by Friday?' I haven't agreed to the reorg."

<thinking>The explicit ask is "draft the comms plan by Friday." The grammatically-embedded assumption — "since we're moving forward with the reorg" — is doing the actual framing work: it treats the reorg as already-established fact, and any response that engages with the comms-plan question silently ratifies that fact. Surfacing the unstated assumption embedded as fact is the load-bearing move here because a paraphrase ("boss wants comms plan by Friday") would miss it entirely and the user's response — even a reasonable "I'll need to push back to next Tuesday" — would lock in the reorg presupposition. The format for the surface must be "Says: X. Presupposes: Y." so the user sees both layers and can triage which one to engage.</thinking>

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

- Surfaced-presupposition list as load-bearing audit: every grammatically-embedded assumption in the inbound is named verbatim with the format "Says: X. Presupposes: Y."; if any "since" / "given that" / "now that" / "when we" / "once we've" clause survives unsurfaced, the load-bearing move has failed — the user's response would silently ratify the frame and make future challenge structurally costly — and the surfacing pass re-runs.
- Triage: each surfaced presupposition tagged accept / contest / reframe / strategic-silence with one-line rationale; the load-bearing one (the one that frames the rest of the exchange) is named explicitly.
- Drafted response that handles each load-bearing presupposition per the chosen option; if "contest" was chosen, the response names the assumption explicitly ("I haven't agreed to the reorg, so before drafting comms…") rather than negating in the frame's vocabulary (Lakoff: "don't negate the frame").
- Residual: any presupposition the user chose to "accept" gets flagged with the consequence ("you have now ratified the reorg frame; future contest will require an explicit re-open"); reframe choices route to `frame-control` for counter-frame drafting; any belief about the sender's intent that is not evidenced gets flagged for `ladder-of-inference` rather than smuggled into the surfacing.
```

#### B3.3 — `skills/concession-then-ask/SKILL.md`

```markdown
---
name: concession-then-ask
description: Pairs a concession statement (acknowledging a cost, limitation, or mistake before the counterpart forces it) with the hard question the concession earned the right to ask. Load-bearing is the pre-emptive disclosure that makes the hard question askable, because asking the hard question without conceding the cost first reads as arrogant and triggers the counterattack the concession was supposed to disarm. Use before raising a sensitive negotiation point, before asking for budget/time/scope after a missed commitment, after delivering critical SBI feedback when you want to ask "why", or when the user says "I need to ask a hard question", "they're going to push back", "concession", or "Voss accusation audit".
allowed-tools: AskUserQuestion, Read
---

# Concession-Then-Ask

## Priorities

```
Pre-emptive disclosure > Hard-question authorization > Counterattack disarmament > Closure
```

## Role

Act as a negotiation coach in the lineage of Voss's accusation audit (list every negative the counterpart could be thinking and voice them first), the Ackerman bargaining model (concede precisely to anchor the deal range), and Hughes's concession-statement class. The skill drafts the two-move pair: the concession that gives ground first, then the hard question that the concession earned the right to ask. The load-bearing move is the pre-emptive disclosure that makes the hard question askable, because asking the hard question without conceding the cost first reads as arrogant — the counterpart hears the ask as entitled rather than direct, and the counterattack they had loaded (the magazine of objections) launches before the question can land. The structural failure mode is conceding nothing real (a fake or trivial concession — "I know your time is valuable" — does not earn the question) or conceding the wrong thing (acknowledging a cost the counterpart did not actually care about, while the cost they did care about goes unnamed).

Skip when the question is not hard (no concession needed; just ask), when the user has nothing real to concede (concession-then-ask is not the move; route to `frame-control` with a different statement class), when the relationship is purely transactional and concession would read as weakness with no upside (cold sales call to a stranger), and when the hard question is actually feedback on a specific incident (route to `situation-behavior-impact` instead).

## Loop

1. **Round 1 — Hard question**: `AskUserQuestion`: "What is the hard question you want to be able to ask?" — extract the verbatim question, surface why it would land arrogant if asked cold.
2. **Round 2 — Accusation audit (Voss)**: list every negative the counterpart could be thinking — the costs they paid, the times you missed, the concerns they have about your ask. This is the surface-area for concession candidates.
3. **Round 3 — Concession candidate**: `AskUserQuestion`: "Which concession is real, costly to admit, and addresses what the counterpart actually cares about?" Recommend the one that names the specific cost the counterpart paid, with rationale. Reject trivial / fake / wrong-target concessions explicitly.
4. **Round 4 — Pair check**: produce the concession statement + hard question pair; verify the concession earns the question (would the question still read arrogant after this concession? if yes, concession is wrong or insufficient).
5. **Round 5 — Delivery script**: draft the verbatim two-move sequence with a beat between them.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Topic or Path describing the upcoming ask — extract the verbatim hard question first, then the relationship history (what costs has the counterpart paid? what commitments have been missed? what objections do they have loaded?). If Path provided, Read the thread and surface the counterpart's recent expressions of cost or frustration as concession-candidate evidence.
- The first move is always the pre-emptive disclosure that makes the hard question askable — refuse to draft the pair if the user proposes a concession that is trivial ("I know your time is valuable"), fake (acknowledges a cost they did not pay), or wrong-target (acknowledges a cost the counterpart did not care about). A concession that does not address what the counterpart actually paid does not earn the hard question and the counterattack they loaded launches anyway.
- Skip and route when the question is not hard (just ask), when there is nothing real to concede (route to `frame-control` for a different statement class — pacing, alignment, resonance, or presupposition), when the ask is feedback on a specific incident (route to `situation-behavior-impact`), or when the counterpart is subordinate (the asymmetry of "I concede my cost, now you owe me an answer" is coercive — refuse).

## Example

<example>
Topic: "I need to ask my client for an extension on the deliverable, but we already missed the last one."

<thinking>The hard question — "can we push the deliverable to next Friday?" — would read arrogant cold, because the counterpart's loaded objection is "you already missed the last one." The pre-emptive disclosure that makes the hard question askable here is naming that specific cost — the missed prior deadline and what it cost the client — before the ask. A trivial concession ("I know you're busy") would not earn the question because it does not address the cost the client actually paid. The load-bearing test: would the question still read arrogant after the concession? If the concession names "we missed the last one and that pushed your launch by a week," the answer is no — the concession has voiced the loaded objection and the question lands as direct rather than entitled.</thinking>

Calls AskUserQuestion (Round 3):
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

- Pre-emptive disclosure as load-bearing audit: the concession names a specific real cost the counterpart paid (verbatim where possible — "the missed delivery cost you a week of launch runway"), and the question that follows would read direct-not-arrogant after that concession; if the concession is trivial, fake, or wrong-target — the counterattack the concession was supposed to disarm will launch anyway because the loaded objection was not voiced — the load-bearing move has failed and the loop re-runs from the accusation audit in Round 2.
- Pair structure: verbatim concession statement + a beat (period and pause) + verbatim hard question; both lines are short enough to deliver in one breath each.
- Counterattack-disarmament check: the loaded objection the concession was meant to voice is named explicitly in the audit ("the client was going to say 'you already missed the last one'"), and the concession contains that objection's core in the user's own words.
- Residual: any concession candidate that was trivial / fake / wrong-target gets flagged with the reason and the loaded objection it failed to voice; if no real concession exists, the skill ends with "concession-then-ask is not the move" and routes to `frame-control` for a different statement-class selection; ethical refusal triggered if the counterpart is subordinate.
```

### B4. Command-wrapper drafts

#### B4.1 — `commands/frame-control.md`

```markdown
---
description: Plan the statement+question pair that installs your frame in an upcoming conversation, after first reading the frame already running
argument-hint: [conversation context — counterpart, recent friction, what you suspect they're holding]
---

# /thinking-systems:frame-control

Plan a frame-setting statement plus the question that locks the listener inside it, *after* reading the frame already running. Thin wrapper around the `thinking-systems:frame-control` skill.

## Usage

```
/thinking-systems:frame-control 1:1 with VP tomorrow about the missed Q3 deadline; I always end up agreeing to more work
/thinking-systems:frame-control negotiate the contract clause about IP ownership with our enterprise customer's GC
```

## Behavior

Parse the conversation context from `$ARGUMENTS`. If empty, ask: `"What conversation are you preparing for? Name the counterpart, their status relative to you, and the most recent friction point."`.

Invoke the skill:

```
Skill(thinking-systems:frame-control, args: "$ARGUMENTS")
```
```

#### B4.2 — `commands/presupposition-detector.md`

```markdown
---
description: Scan an inbound message, agenda, or doc for assumptions embedded as already-established fact, then plan whether to accept, contest, or reframe each
argument-hint: [path-to-inbound or quoted text of the inbound]
---

# /thinking-systems:presupposition-detector

Surface the presuppositions in an inbound artifact before you respond, so your reply does not silently ratify a frame you did not agree to. Thin wrapper around the `thinking-systems:presupposition-detector` skill.

## Usage

```
/thinking-systems:presupposition-detector ./email-from-boss.md
/thinking-systems:presupposition-detector "Since we're moving forward with the reorg, can you draft the comms plan by Friday?"
```

## Behavior

Parse the inbound from `$ARGUMENTS`. If a path is given, Read it. If empty, ask: `"What inbound message, agenda, or doc do you want scanned for embedded assumptions?"`.

Invoke the skill:

```
Skill(thinking-systems:presupposition-detector, args: "$ARGUMENTS")
```
```

#### B4.3 — `commands/concession-then-ask.md`

```markdown
---
description: Pair a real concession (acknowledging a specific cost the counterpart paid) with the hard question the concession earns the right to ask
argument-hint: [the hard question + relationship context — what costs has the counterpart paid?]
---

# /thinking-systems:concession-then-ask

Draft the concession-then-question two-move pair so the hard question lands as direct rather than arrogant. Thin wrapper around the `thinking-systems:concession-then-ask` skill.

## Usage

```
/thinking-systems:concession-then-ask need to ask client for an extension, but we already missed the last one
/thinking-systems:concession-then-ask asking the team for one more weekend on the launch
```

## Behavior

Parse the ask from `$ARGUMENTS`. If empty, ask: `"What is the hard question you want to be able to ask, and what cost has your counterpart paid?"`.

Invoke the skill:

```
Skill(thinking-systems:concession-then-ask, args: "$ARGUMENTS")
```
```

(Note: a fourth skill `conversational-recovery` is recommended in B1 with the load-bearing move *class-shift, not pace-harder*; its full SKILL.md and command wrapper follow the same audit pattern. The three drafts above were chosen as the prompt's "top 2-3" because they cover offensive prep, defensive scan, and the highest-leverage 2-move pattern. The recovery skill can be drafted from the same template; its load-bearing audit clause would be: "if the recovery plan repeats the *same* statement class as the failed attempt, the load-bearing move has failed — pacing-rejected→pace-harder is the failure mechanic Hughes warns against — and the loop re-runs with a *different* class.")

### B5. Cross-skill modifications — concrete edits to existing skills

#### B5.1 — `skills/situation-behavior-impact/SKILL.md`

In the **Skip when** clause of the Role section, current line:

> Skip when the conversation is pattern-level and spans months (use productive-thinking-model or a proper review framework). Skip when the decision is whether to escalate — that is a conflict question, route to conflict-resolution-diagram.

**Add a third skip case:**

> Skip when the recipient is hostile or higher-status and you have not yet read the frame they are running — SBI's Behavior+Impact lands inside whichever frame the recipient already holds, so route to `frame-control` first to read and (if needed) re-frame, then return to SBI for the verbatim delivery.

In the Loop, after Round 5 (Intent), **add Round 5b**:

> 5b. **Concession check (optional)** — if the SBI is critical and the recipient has paid a real cost (your prior misses, scope changes, etc.), route to `concession-then-ask` to pair the SBI delivery with a pre-emptive disclosure; otherwise the Behavior+Impact will read as one-sided and the Intent question lands as gotcha.

#### B5.2 — `skills/conflict-resolution-diagram/SKILL.md`

In Input Handling, **add a flag step** before the loop runs:

> Before extracting positions, run a presupposition pass on each party's stated demand: if the demand is grammatically-embedded ("since we already agreed X, you must Y") rather than a clean interest claim, surface the embedded assumption first via `presupposition-detector` — otherwise the diagram resolves a conflict between two presuppositions, not two interests, and the resolution will not hold.

#### B5.3 — `skills/minto-pyramid/SKILL.md`

In Role, after the audience-fit-check sentence, **add one line**:

> The audience-fit check is structurally a frame-fit check: the apex is right when it answers the question the reader is *already framing the document inside*. For a hostile or skeptical reader, route to `frame-control` first to read the frame they are bringing to the document — the apex written for "exec deciding Go/No-Go" lands wrong on "exec already-decided-No looking for confirmation".

#### B5.4 — `skills/abstraction-laddering/SKILL.md`

In the Skip clause of the Role section, **add cross-reference**:

> When the "stuck problem" is actually a stuck *conversation* rather than a stuck problem definition (e.g., "we keep arguing about budget" — the budget framing is the lock), route to `frame-control`'s reframe-question class instead — the climb-up move on a conversational frame is structurally the same as climbing up the why-rung, but the deployment is a single sentence in dialogue rather than a problem-statement rewrite.

#### B5.5 — `skills/ooda-loop/SKILL.md`

In the Orient section description (or the Role section if Orient is in Role), **add one sentence**:

> Frame-reading — naming which frame is already running in the room (authority / adversarial / emotional / narrative) — is an Orient act; for explicit frame-control planning of a statement+question pair, route to `frame-control` and let it consume the Orient output as its Round 1 input.

### B6. README.md and CHANGELOG.md updates

#### B6.1 — `README.md`

Replace the Communication row of the table:

```diff
-| **Communication** | `situation-behavior-impact`, `minto-pyramid` |
+| **Communication** | `situation-behavior-impact`, `minto-pyramid`, `frame-control`, `presupposition-detector`, `concession-then-ask`, `conversational-recovery` |
```

Add to the auto-trigger examples:

```diff
 - "I'm stuck — let me think from scratch" → `first-principles`
 - "What happens 6 months after we ship this?" → `second-order-thinking`
 - "How would this fail?" → `inversion`
 - "Urgent vs important — what do I work on today?" → `eisenhower-matrix`
+- "I have a 1:1 with my VP and always end up agreeing to more work" → `frame-control`
+- "Scan this email for assumptions before I respond" → `presupposition-detector`
+- "I need to ask for an extension but we already missed the last one" → `concession-then-ask`
```

In Credits, add:

```diff
-Methods are classical thinking frameworks (Eisenhower, de Bono, Boyd, Snowden, Goldratt, Ackoff, Minto, and others). Individual attributions appear in each skill where relevant.
+Methods are classical thinking frameworks (Eisenhower, de Bono, Boyd, Snowden, Goldratt, Ackoff, Minto, and others) plus modern conversational-architecture work (Goffman, Lakoff, Voss, Cialdini, Schein, Argyris). Individual attributions appear in each skill where relevant. The four framing skills synthesize material from multiple traditions and do not endorse any single course or paid program.
```

#### B6.2 — `CHANGELOG.md`

Add at the top:

```markdown
## [0.2.0] - 2026-04-26

### Added

- Four framing-tactics skills in the Communication category (and matching slash commands):
  - **frame-control** — plan a statement+question pair after reading the frame already running.
  - **presupposition-detector** — defensive scan of an inbound for grammatically-embedded assumptions.
  - **concession-then-ask** — pair a real pre-emptive disclosure with a hard question.
  - **conversational-recovery** — class-shift recovery loop after a missed frame.

### Changed

- `situation-behavior-impact` — added skip-and-route to `frame-control` when recipient is hostile/higher-status; added optional concession-check round routing to `concession-then-ask`.
- `conflict-resolution-diagram` — added presupposition-surfacing pass before extracting positions (routes to `presupposition-detector`).
- `minto-pyramid` — added frame-fit framing of the audience-fit check; routes to `frame-control` for hostile/skeptical readers.
- `abstraction-laddering` — added skip-and-route to `frame-control` when the "stuck problem" is a stuck conversation rather than a stuck problem definition.
- `ooda-loop` — added explicit framing of frame-reading as an Orient act; routes to `frame-control` for explicit statement+question planning.
- README.md — Communication category updated to 6 skills; auto-trigger examples expanded; Credits expanded to name modern conversational-architecture lineages.
```

---

## C. Stress-test of open design questions in §5.3

### C.1 — One mega-skill or many micro-skills?
**Verdict: ONE mega-skill (`frame-control`) for the offensive 5+5, with three supporting skills (`presupposition-detector`, `concession-then-ask`, `conversational-recovery`) carved out only because their load-bearing moves are different from `frame-control`'s.** Five-class-per-skill micro-splitting fails the per-skill-granularity precedent (the plugin splits on *mechanism*, not on *menu*); a single mega-skill containing all 5+5 fails because the recovery loop and the concession pattern have *different load-bearing moves* that would get diluted inside one giant skill. Four skills is the cleanest fit.

### C.2 — What is the load-bearing move for `frame-control`?
**Verdict: identifying the frame already running before speaking.** Pressure-tested against three alternatives:
- *Statement-before-question discipline* — too procedural; it is a *symptom* of having read the frame, not the cause. Two people both following statement-before-question discipline will still install opposing frames if neither read the room.
- *Recovery loop* — load-bearing for `conversational-recovery`, not for `frame-control` itself. The recovery skill exists precisely because that move is too important to dilute.
- *Pairing rule* — same problem as statement-before-question; describes the architecture, not the load-bearing move.

The frame-already-running read is what discriminates a deployed move from a *naked* move. Hughes's whole opening argument (the patient asking the doctor a "great question" still loses) rests on this, and his routing rule (Q1: what frame is running?) puts it first.

### C.3 — How much NCI/Hughes lineage to cite?
**Verdict: cite the architecture but not the brand.** Specifically:
- Name "Hughes's statement+question architecture" once in `frame-control`'s Role section as the synthesis being adopted, paired with the deeper-tradition cites (Voss, Cialdini, Goffman, Schein) so the skill does not read as a Hughes tutorial.
- Do not link to NCI courses, do not use NCI-branded vocabulary ("Behavior Operations Manual", "Behavior Table of Elements"), do not endorse the paid programs.
- The credibility critique of Hughes's personal credentials (see D3) is a real concern but does not invalidate the *architecture*, which is well-grounded in older traditions; the citation pattern should be: "synthesis of Hughes (2020s) over Voss (2016), Cialdini (2016), Goffman (1974), Schein (2013), and others" — Hughes is the most recent restater, not the originator, and the older citations carry the load.

### C.4 — Defensive vs offensive split?
**Verdict: SPLIT into separate skills.** `frame-control` (offensive) and `presupposition-detector` (defensive) match the existing house pattern (`situation-behavior-impact` offensive, `ladder-of-inference` defensive), lower cognitive load (the user knows which one by the verb in their prompt), and let each skill have a tight load-bearing audit. A single skill with a mode flag (offense/defense) would have to dilute its load-bearing move across two different failure mechanics.

### C.5 — Routing rules for the three example user prompts
- *"Help me write feedback for X"* → SBI (existing), unless the recipient is hostile or higher-status, in which case **route to `frame-control` first** (per the cross-skill edit B5.1) and consume its frame-read as input to SBI.
- *"Negotiate this contract clause"* → **`frame-control` is the primary**; it routes to `concession-then-ask` if the user has a real concession to make, and routes to `presupposition-detector` if the redline contains embedded assumptions.
- *"Why does my 1:1 with my manager always end with me agreeing to more work?"* → **`frame-control` (offensive prep) plus `presupposition-detector` (defensive scan of the manager's typical agenda framing)**. Explicitly *not* `eisenhower-matrix` for the workload — that would be solving inside the frame the user is losing to. If the user pushes back, route to `presupposition-detector` first to surface the agenda-frame, then `frame-control` to draft the counter-move.

---

## D. Risks and disclaimers

### D1. What in Hughes does *not* survive cross-validation

- **The polemic against "ask better questions."** Hughes overstates this. CA shows that question-design *does* shape the pressure on the second-pair-part; calibrated questions (Voss) do real work even without a paired statement. The plugin should adopt Hughes's pairing rule without his over-correction — name the question's power and the statement's frame-setting role together.
- **Pacing as "almost always works."** Hughes's "the nervous system says yep" is a folk-neuroscience claim. The empirical version (consistency-principle / yes-set) is real but the effect size is moderate, not deterministic. Skills should not promise pacing always lands; the recovery loop exists precisely because it doesn't.
- **Resonance as "most powerful."** Voss's data supports labeling/tactical-empathy as high-leverage in *negotiation* contexts; generalizing to all conversation is a stretch. The plugin should let the frame-read drive class selection (Hughes's actual rule) rather than pre-rank classes by abstract power.
- **NLP heritage of presupposition.** NLP's wider claims are largely rejected by mainstream psychology. The presupposition *phenomenon* (grammatical embedding shapes inference) is well-supported by Lakoff/Boroditsky/Tversky-Kahneman; the NLP framing of it should not be inherited. Cite the cognitive-linguistics tradition, not the NLP tradition.

### D2. When the plugin should *not* invoke these skills

- **Mid-engineering-task with no human counterpart.** Most plugin users are debugging, designing, refactoring. The framing skills should auto-trigger only on prompts that name a counterpart (person, role, "my manager", "the client"). If no counterpart is named, do not auto-fire.
- **Subordinate or vulnerable counterpart.** `frame-control`'s offensive deployment is refused on ethical grounds (B3.1 Round 2). `concession-then-ask` is refused when counterpart is subordinate (the asymmetry coerces). Defensive `presupposition-detector` always runs.
- **High-stakes single-shot communication where the user wants polish, not strategy.** The framing skills are *planning* tools; if the user has already written the message and needs an edit pass, route to `minto-pyramid` for restructure instead.
- **Therapeutic / clinical / mental-health contexts.** Hughes's "talk to a schizophrenic" example in the transcript is glib; the plugin should explicitly refuse to operate on described mental-health-crisis interactions and route the user to professional help.

### D3. Citation hygiene

- **Hughes himself.** Independent credibility critiques exist (see https://www.youtube.com/results?search_query=chase+hughes+credibility — multiple debunking videos; Reddit threads questioning the NCI claims). The plugin should not endorse his credentials, courses, or "Behavior Operations Manual" branding. The *architecture* he presents is largely a re-synthesis of Voss, Cialdini, NLP, Schein, and Goffman — credit those traditions and treat Hughes as the most recent restater, not the originator. One sentence in `frame-control`'s Role: "synthesizes Hughes's recent restatement (2020s) of older traditions (Voss 2016, Cialdini 2016, Schein 2013, Watzlawick 1974, Goffman 1974, Bandler-Grinder 1975)".
- **NCI / Behavioral Table of Elements.** Do not link, do not adopt the vocabulary, do not name the paid courses.
- **NLP.** Cite the *technique* (presupposition-as-grammatical-embedding) but do not cite NLP as a tradition without noting that mainstream psychology rejects most of its broader claims; redirect to cognitive-linguistics (Lakoff, Boroditsky) and behavioral-economics (Tversky-Kahneman) for the empirical backing.
- **Voss / Cialdini / Schein / Goffman.** Cite freely; these are mainstream-respected authors with peer-reviewed work behind them. Voss's tactical-empathy claims have field-data backing from FBI hostage cases; Cialdini's experiments are heavily replicated; Schein and Goffman are foundational.

---

## Sources

- Voss, *Never Split the Difference* / Black Swan Group: https://www.blackswanltd.com/the-edge/the-art-of-tactical-empathy
- Voss accusation audit & no-oriented questions: https://www.blackswanltd.com/the-edge/the-accusation-audit-r
- Cialdini, *Pre-Suasion*: https://en.wikipedia.org/wiki/Pre-Suasion
- Tversky & Kahneman 1981, "The Framing of Decisions": https://www.science.org/doi/10.1126/science.7455683
- Framing-effect replication discussion: https://en.wikipedia.org/wiki/Framing_effect_(psychology)
- Lakoff metaphor framing — Thibodeau & Boroditsky 2011: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0016782
- Goffman, *Frame Analysis*: https://en.wikipedia.org/wiki/Frame_analysis
- Sacks/Schegloff/Jefferson — Conversation Analysis foundations: https://en.wikipedia.org/wiki/Conversation_analysis
- Schein, *Humble Inquiry*: https://www.bkconnection.com/books/title/humble-inquiry-second-edition
- Fisher & Ury, *Getting to Yes* — interests vs positions: https://www.pon.harvard.edu/daily/negotiation-skills-daily/getting-to-yes-negotiating-agreement-without-giving-in/
- Argyris double-loop learning: https://en.wikipedia.org/wiki/Double-loop_learning
- Argyris/Schein left-hand column: https://thesystemsthinker.com/the-left-hand-column-a-tool-for-reflection/
- Watzlawick et al., *Change* (1974) — reframing: https://en.wikipedia.org/wiki/Reframing
- Chase Hughes credibility critique (representative): https://www.reddit.com/r/IsItBullshit/comments/1bsnq6f/isitbullshit_chase_hughes_behavior_panel_member/

<!-- RESEARCH_COMPLETE -->
