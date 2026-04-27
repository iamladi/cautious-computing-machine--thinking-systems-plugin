# Phase 3 — Claude Refined Analysis: Framing Tactics for `thinking-systems-plugin`

**Analyst:** Claude (Opus 4.7, 1M context)
**Date:** 2026-04-26
**Phase:** 3 — Cross-pollination refinement
**Peers cross-pollinated against:** Codex (Gemini failed Phase 2 quota; only one peer.)

## Refinement summary — what changed and why

The original Phase-2 analysis already covered the right architecture: split offensive/defensive, treat Hughes as a re-synthesis of older traditions, audit for the load-bearing move repeated verbatim across SKILL.md slots, refuse offensive use against subordinates. That position survives. What this refined version improves:

1. **Stronger CA mechanism citation.** Codex cited Heritage's "optimization" / "problem-attentiveness" principle for institutional questioning ([Heritage, *Questioning in Medicine*](https://www.researchgate.net/publication/284042203_Questioning_in_Medicine); [Heritage & Robinson 2011 'some' vs 'any'](https://link.springer.com/chapter/10.1057/9780230316874_2)) — a sharper empirical anchor than my generic CA reference. Verified via fresh search; integrated into A1 and A4. My adjacency-pair / preference-organization mechanism citation (Codex did not have this) is preserved and sharpened — preferred responses are produced *faster and without delay/mitigation* while dispreferred responses are *delayed, hedged, and accounted-for* ([Pillet-Shore on Preference Organization](https://scholars.unh.edu/context/comm_facpub/article/1022/viewcontent/Pillet_Shore_Preference_Organization_2017.pdf)) — this is the *micro-mechanism* for "the question locks the listener inside the frame."

2. **Mirror-vs-label split made explicit.** Codex correctly noted Voss treats mirrors (last 1–3 words, prompts elaboration) and labels ("it sounds like…", names emotion/dynamic) as distinct primitives. I had collapsed them into Resonance. The refined `frame-control` SKILL.md now lists them as two named moves under the resonance class ([Black Swan: Hang a Label on It](https://www.blackswanltd.com/newsletter/hang-a-label-on-it); [Black Swan on mirrors](https://www.blackswanltd.com/newsletter/how-to-tell-if-someone-is-bluffing)).

3. **Identity-Based Motivation (Oyserman) added as a named reframe sub-type.** Codex flagged this; I did not. Verified — IBM is a well-cited social-cognitive framework where people prefer identity-congruent actions and *interpret difficulty itself* as evidence the action is "for people like me" or "not for people like me" ([Oyserman 2009 PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC3079278/); [Oyserman 2024 Compass](https://compass.onlinelibrary.wiley.com/doi/10.1111/spc3.70028)). Integrated as the load-bearing mechanism behind Hughes's parent-example ("the only thing I've ever wanted is what's best for you" — that is identity activation, not grammatical presupposition).

4. **Pre-suasion ("before the room") promoted to a Loop round.** Codex correctly flagged that Cialdini's pre-suasion happens *before* the conversation starts (subject line, agenda, who is in the meeting). My original drafts started inside the room. The refined `frame-control` Loop now includes a Round 0 pre-frame check ([Cialdini *Pre-Suasion*](https://www.gsb.stanford.edu/insights/change-my-mind-using-pre-suasion-influence-others)).

5. **Position preserved against Codex on three load-bearing disagreements.** This is real, defensible disagreement, not homogenization:
   - **I keep `concession-then-ask` as a standalone skill; Codex folds it.** My case: the load-bearing move (the *real* concession that voices the loaded objection — Voss's accusation audit form) has its own failure mechanic (trivial / fake / wrong-target concession) and its own audit clause. Folding it into a generic `conversation-framing` skill dilutes that audit. The Ackerman bargaining model (verified — 65/85/95/100, Voss attribution to Mike Ackerman, ex-CIA, [Black Swan / Voss MasterClass on Ackerman](https://www.masterclass.com/classes/chris-voss-teaches-the-art-of-negotiation/chapters/bargaining); [Wheeler Substack on Ackerman](https://wheeler.substack.com/p/countering-the-ackerman-gambit)) gives concession its own *quantitative* discipline that has no analog in any other Hughes class. Worth a dedicated skill.
   - **I keep the skill name `frame-control` (offensive) rather than Codex's `conversation-framing`.** Codex's name is more palatable; mine is more honest about the move. The user types "frame-control" precisely when they know they want to install a frame; using a softer name to disguise that conflicts with the plugin's house style of naming load-bearing moves directly ("inversion", "decision-matrix", "ladder-of-inference" — all blunt). The ethical guardrail belongs in the audit, not the name.
   - **I keep Communication category, not a new Conversation category.** Codex argues live-interaction is structurally different from output-shaping (`minto-pyramid`) and incident-feedback shaping (`situation-behavior-impact`). True structurally, but the existing plugin only adds categories when there are 3+ skills with shared *mechanism* (Systems Thinking has 5; Decision Making has 10). With 4 new framing skills, Communication grows from 2 to 6 — large enough to justify staying in one category. Spinning up a Conversation category for 3 skills (Codex's count) creates a thin category that competes with Communication for discoverability. Verdict: Communication, expanded.

6. **Recovery loop enriched per Codex's better miss-type taxonomy.** Codex split the miss into not-heard / heard-and-rejected / reactance-to-pressure / wrong-problem-frame. I had a coarser empty-room-vs-held-frame split. Codex's taxonomy is sharper and survives into the refined `conversational-recovery` audit (drafted in B3.4 below — was promised but not drafted in the original).

7. **Heritage on questions doing real framing work — moderating my anti-naked-question position.** My original analysis said "the question locks the listener inside the frame" implying questions are passive locks. Heritage shows question *design itself* can install preference (optimization principle: "you don't have any chest pain, do you?" pre-loads a no-problem response). Refined position: question class and question design both do framing work *independently of* the prior statement. Hughes's statement-then-question pairing is the strongest configuration but is not the only one. This makes the recommended skill more honest about partial deployments.

The four-skill bundle stays intact: **`frame-control`, `presupposition-detector`, `concession-then-ask`, `conversational-recovery`**. The third skill (`concession-then-ask`) is where I most diverge from Codex. The fourth skill (`conversational-recovery`) now has a full SKILL.md draft (was only sketched in the original).

## Consensus markers (where Claude and Codex agree — credit both)

- **Split offensive and defensive into separate skills**, matching the existing house pattern (`situation-behavior-impact` offensive / `ladder-of-inference` defensive).
- **Refuse offensive deployment against subordinate, vulnerable, or unaware counterparts.** Hughes's "not consciously manipulating" framing is partially defensible (most frame control is unconscious skill) but does not survive once the plugin teaches the architecture to a user who *now does* know what they are doing.
- **Hughes is the most recent restater, not the originator.** Cite Goffman (1974), Watzlawick (1974), Bandler-Grinder (1975), Schein (2013), Cialdini (1984/2016), Voss (2016), Lakoff (2004), and Tversky-Kahneman (1981) as the deeper traditions. Do not link NCI courses, do not adopt NCI-branded vocabulary.
- **NLP heritage of presupposition: cite the technique, not the tradition.** Mainstream psychology rejects most NLP claims ([Witkowski 2010 systematic review](https://pubmed.ncbi.nlm.nih.gov/23211179/)); the presupposition phenomenon survives because Lakoff, Boroditsky, and Tversky-Kahneman demonstrated it independently.
- **Recovery is half the talk and deserves its own skill structure** (whether folded into `frame-control` or split out — Codex folds, I split, but both treat it as load-bearing).
- **Honest framing vs. propaganda is the operational ethical line** ([Lakoff on framing vs propaganda](https://george-lakoff.com/2017/02/10/ten-points-for-democracy-activists/)). The plugin can teach truthful framing (clarifying shared goals, naming unspoken costs, challenging false binaries, drafting truthful openers) and refuses fabricated urgency, fake alignment, knowingly false presuppositions.
- **`reframe` is not a new skill** — `abstraction-laddering` already owns the climb-up move.
- **Pacing/Resonance/Concession etc. should NOT each be a standalone skill.** Splitting one class per skill produces 5 thin skills that each repeat the architecture overview. The plugin splits on *mechanism* (balancing vs reinforcing loops), not on *menu*.

---

## A. Framing tactics — corroborate, extend, or challenge Hughes

### A1. Cross-validation of the 5+5 framework (refined)

Hughes's architecture is **directionally right and largely re-synthesized**. The literature converges under different vocabularies. None of the five statement classes is unique to him; the somewhat-original move is the *pairing rule* (statement-then-question as a 2-move sequence) and the *recovery loop*. The cross-validation table:

| Hughes class | Closest external primitive | Source | Strength | What the literature *adds* |
|---|---|---|---|---|
| **Pacing** | Mirror (last 1–3 words → elaboration prompt); "yes-set" / commitment-and-consistency | Voss; Bandler-Grinder; Cialdini | Strong | Voss splits **mirror** (elaboration-eliciting) from **label** (emotion-naming) — Hughes collapses both into one class. Refined skill names them separately. |
| **Alignment** | Shared-interest framing; Fisher-Ury "interests not positions"; Cialdini Unity (Pre-Suasion) | Fisher & Ury; Cialdini | Strong | Codex's framing — alignment as **shared-problem construction** rather than dominance reversal — is more honest than Hughes's "now we're a team" gloss. Adopted. |
| **Resonance** | Label ("it sounds like…"); tactical empathy; humble inquiry; Rogerian reflection | Voss; Schein; Rogers | Strongest external corroboration | Voss attributes 14× speed-up to tactical empathy in field cases. Heritage's CA work shows the *micro-mechanism*: a label is a non-question first-pair-part that nonetheless makes a confirming/disconfirming second-pair-part the preferred next move. |
| **Concession** | Accusation audit (Voss); Ackerman bargaining 65/85/95/100; courtroom "get the uglies out first" | Voss; Ackerman via Voss | Strong | Voss's accusation audit is **functionally identical** to Hughes's concession-before-hard-question. Ackerman adds a *quantitative* concession discipline ([Voss MasterClass on Ackerman](https://www.masterclass.com/classes/chris-voss-teaches-the-art-of-negotiation/chapters/bargaining)) — concessions in fixed decreasing increments (65→85→95→100) signal "I'm at my limit" via reciprocity-norm activation. |
| **Presupposition** | NLP presupposition pattern; Lakoff "every word evokes a frame"; Tversky-Kahneman framing effects | Bandler-Grinder; Lakoff; Tversky-Kahneman | Mixed | Effect is real (gain/loss framing replicates with attenuation; metaphor-frame shifts policy preference); NLP wider claims rejected. **Identity-stake framing** (Oyserman IBM) is a sharper sub-type than grammatical presupposition for the parent example — "what's best for you" activates the parent identity, not a grammatical embedding. |

| Hughes question | Closest external primitive | Source | Strength | Literature addition |
|---|---|---|---|---|
| **Directional** | Calibrated "how/what" questions; Socratic elenchus; Heritage's *optimized* questions in medicine | Voss; Plato; Heritage | Strong | Heritage's "optimization principle" — questions designed to grammatically prefer a specific answer ("you don't have any chest pain, do you?") — is the empirical mechanism behind directional questioning ([Heritage on Questioning in Medicine](https://www.researchgate.net/publication/284042203_Questioning_in_Medicine)). |
| **Assumptive** | Embedded-decision question; presuppositional question; sales "alternative close" | Bandler-Grinder; sales literature | Moderate | Repeatedly cautioned-against in consumer-protection literature when used coercively. The plugin should restrict assumptive questions to *truthful* presupposed states. |
| **Elicitation** | Indirect inquiry; humble inquiry; no-oriented question (Voss); strategic ambiguity | Schein; Voss | Strong | Codex flagged that Hughes misses the **no-oriented question** function (autonomy-restoring, lowers perceived coercion). Adopted as a question-class option. |
| **Reframe** | Frame contest (Goffman); reframing (Watzlawick); double-loop question (Argyris); narrative reframing | Goffman; Watzlawick; Argyris | Strong | Codex correctly notes reframe is arguably the *super-category*, not a peer subtype. The refined `frame-control` reflects this by allowing reframe questions to operate over any of the four installed frames. |
| **Diagnostic** | Cross-examination "show your work"; Schein process consultation ("why did you decide to call me?") | Schein; legal practice | Strong | Heritage's institutional-talk work supports the power-asymmetry claim: diagnostic questions *enact* an evaluator/evaluated role asymmetry ([Heritage institutional talk](https://www.researchgate.net/publication/292315967_Conversation_analysis_and_institutional_talk_Analyzing_distinctive_turn-taking_systems)). |

**The mechanism Hughes asserts but does not explain — and which Codex did not cite — is preference organization in conversation analysis** (Sacks-Schegloff-Jefferson 1974; Pillet-Shore 2017). A statement+question is a designed first-pair-part; the listener is structurally pressured to produce a second-pair-part of a specific type. *Preferred* responses (agreement, acceptance, confirmation) are produced **faster, without delay, hedging, or account**. *Dispreferred* responses (disagreement, rejection, disconfirmation) are produced **with measurable delay, mitigation, and account-giving** — and the additional production cost is itself socially costly to the speaker. This is *why* a well-designed first-pair-part "locks" the listener: the cost of producing a dispreferred second-pair-part is non-trivial, whereas the cost of going along is near-zero. Hughes asserts the effect; CA explains the mechanism, and the explanation is older (1974) than Hughes's restatement (2020s).

### A2. Primitives Hughes is missing — refined inventory

After cross-pollination with Codex, the missing-primitives list:

1. **Pre-suasion / "before the room" framing** (Cialdini, *Pre-Suasion* 2016). Codex correctly flagged this as a major Hughes omission — the strongest framing move often happens *before* the conversation starts (subject line, agenda, pre-read, Slack preamble). **Plugin verdict:** Round 0 in `frame-control` Loop asks whether a pre-frame is available; do not productize as a separate skill.

2. **Mirror vs. label split** (Voss). Codex correctly flagged. **Plugin verdict:** Two named moves inside `frame-control`'s Resonance class; not a separate skill.

3. **Anchoring** (Tversky-Kahneman; Ackerman bargaining model). Numerical first-mover effect distinct from grammatical presupposition. **Plugin verdict:** lives inside `concession-then-ask` (the Ackerman 65/85/95/100 ladder) and inside `decision-matrix` (factor weighting). Not a separate skill.

4. **Accusation audit** (Voss). Pre-emptive disclosure of every negative the counterpart could be thinking. **Plugin verdict:** central move in `concession-then-ask`. Not separately skilled.

5. **No-oriented questions** (Voss). "Is now a bad time?" inverts the default refusal-cost. Hughes's question taxonomy *does not include this* and it is field-tested. **Plugin verdict:** an option in `frame-control`'s elicitation question class.

6. **Identity-stake framing** (Cialdini Unity; Oyserman IBM; Lakoff Strict-Father vs Nurturing-Parent). When difficulty itself is interpreted as evidence the action *is* or *is not* "for people like me" ([Oyserman PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC3079278/)), the load-bearing move is identity activation, not grammatical presupposition. The parent example in Hughes's transcript is identity-stake. **Plugin verdict:** a named sub-type of Presupposition in `frame-control`; not a separate skill.

7. **Temporal framing / 10-year-from-now lens** (Suzy Welch 10/10/10; behavioral-economics future-self literature). **Plugin verdict:** already covered by `second-order-thinking`; route, do not duplicate.

8. **Contrast principle** (Cialdini). Door-in-the-face / extreme anchor first. Manipulation-coded. **Plugin verdict:** defensive mention in `presupposition-detector`; do not productize as offensive tactic.

9. **Zeigarnik / "unfinished" attention-capture** (Cialdini Pre-Suasion). Useful for hooks. **Plugin verdict:** mention only.

10. **Socratic elenchus.** Closest single tradition to Directional questions; load-bearing move is contradiction-testing (Codex's correct read). **Plugin verdict:** historical anchor in `frame-control` Role; route critical-thinking use to `ladder-of-inference`.

11. **Narrative reframing** (Watzlawick *Change* 1974). **Plugin verdict:** subtype of reframe class in `frame-control`.

12. **Frame breaks for defensive use** (Goffman). **Plugin verdict:** in `presupposition-detector`'s detection list.

13. **Left-hand column** (Argyris/Schein). Write what you're thinking vs. saying — the gap reveals the frame you accepted without challenging. **Plugin verdict:** defensive technique in `presupposition-detector`.

### A3. Recovery loop — most defensible original synthesis (refined)

The recovery loop ("read the miss → release → shift class → redeploy") is the **most defensible original synthesis** in Hughes, even if no individual step is novel. Refined per Codex's miss-type taxonomy:

- **Read the miss — diagnostic empathy.** Codex's four-way split is sharper than mine: **not-heard** (focus-generation or timing failure) / **heard-and-rejected** (premise conflict) / **reactance-to-pressure** (control problem) / **wrong-problem-frame** (the move was answering the wrong question). Each demands a different next move:
  - not-heard → re-pace with better timing or pre-frame
  - heard-and-rejected → release; switch class to resonance or concession
  - reactance → switch to no-oriented question or autonomy-restoring elicitation
  - wrong-problem-frame → reframe question
- **Release the frame** — Voss "tactical empathy without ego attachment"; sales "letting go of the close"; Argyris double-loop ("interrogate the governing assumption, not just the move"). Hughes's "trying is the opposite of having" is rhetorically stronger than the academic versions; the empirical version is that visible salvage behavior lowers perceived confidence ([Schein on relationship repair](https://sloanreview.mit.edu/article/a-general-philosophy-of-helping-process-consultation/)).
- **Shift the class** — under-developed in the academic literature in this exact form. Hughes's "don't pace harder, switch to resonance" is the load-bearing heuristic and it survives.
- **Redeploy with more information** — boxer-jab metaphor. Standard probing-and-adjustment.

**Plugin verdict:** dedicated skill `conversational-recovery` (full SKILL.md drafted in B3.4 below). The class-shift is the load-bearing move; pace-harder-after-pacing-failed is the failure mechanic Hughes warns against.

### A4. Defensive read — detect frames being installed *on* you (refined)

The defensive question has its own literature distinct from offensive framing. Detection cues, with citations strengthened:

- **Heritage's optimization principle**: questions grammatically pre-load preferred answers ("you don't have any chest pain, do you?") and "some" vs "any" choices steer participants toward problem-disclosing or problem-suppressing responses ([Heritage 2010 Questioning in Medicine](https://www.researchgate.net/publication/284042203_Questioning_in_Medicine); [Heritage & Robinson 2011 'some' vs 'any'](https://link.springer.com/chapter/10.1057/9780230316874_2)). Defensive technique: read the question *as designed* before answering — what response is grammatically preferred?
- **Goffman frame breaks** (Codex citation): when an event ruptures the frame, it becomes momentarily visible. Defensive technique: deliberately produce small frame-breaks to test what frame is running.
- **Argyris/Schein left-hand column**: gap between what you are *thinking* and what you are *saying* reveals the frame you accepted ([PSD on left-hand column](https://www.psd.gov.sg/challenge/articles/communicate-better-with-the-left-hand-column-technique)).
- **Ladder-of-inference** (already in plugin): descend from a belief to verify it isn't built on a presupposition smuggled into selected-data.
- **Lakoff "don't negate the frame"**: rebutting in the frame's vocabulary ratifies it ([Lakoff on framing](https://george-lakoff.com/2011/12/11/how-to-frame-yourself-a-framing-memo-for-occupy-wall-street/)).
- **Presupposed decisions** ("since we're moving forward…", "as we discussed…"): grammatical clauses that treat a future or unconfirmed fact as already-established.
- **Role assignment** (Heritage institutional asymmetry): diagnostic questions cast you as the explainer/evaluatee.

**Position:** defensive framing is a **separate skill** (`presupposition-detector`), not a mode flag inside `frame-control`. Codex agrees. The split matches the house pattern, lowers cognitive load (the user knows which skill by the verb in their prompt), and lets the load-bearing audit clauses be tighter.

### A5. Ethics — where the line sits (refined)

Hughes's claim that the doctor/boss/parent are "not consciously manipulating" is **partially defensible and partially convenient** — defensible because most frame control is unconscious skill, convenient because it sidesteps responsibility once the user *now does* know what they are doing.

Three ethically distinct uses, each with a different plugin position:

1. **Defensive use** — notice frames being installed on you. **No ethical issue.** Plugin endorses without qualification.
2. **Symmetric use** — both parties know the game (negotiation, debate, sales-to-sales). **Acceptable.** Plugin teaches as standard professional skill, like negotiation itself.
3. **Asymmetric offensive use** — install frames on someone who doesn't know they're being framed and who has less power than you. **Manipulation case.** Plugin must refuse to be a coaching tool for it.

**Operational rule** (sharper than my original, per Codex's Lakoff-derived line): the plugin allows clarifying shared goals, naming unspoken costs, challenging false binaries, resisting hidden presuppositions, and drafting **truthful** conversation openers. The plugin refuses fabricated urgency/scarcity, fake alignment, knowingly false presuppositions, attempts to corner someone into consent they would not recognize if stated plainly, and tactics that obscure rights/options/material consequences ([Lakoff on framing vs propaganda](https://george-lakoff.com/2017/02/10/ten-points-for-democracy-activists/); [Cialdini HBR on ethical influence](https://hbr.org/2013/07/the-uses-and-abuses-of-influence)).

**Plugin position to adopt:** the framing-tactics skills are **diagnostic and defensive by default** and *opt-in to offensive only when the user names a peer or higher-status counterpart in a recognized adversarial context*. The Completion section of `frame-control` includes an audit clause: *"Is the counterpart a peer or higher-status adversary? If they are subordinate, vulnerable, or unknowing, the offensive deployment is refused and the skill returns only the defensive read."* Hughes himself does not draw this line; the plugin should draw it for him.

---

## B. Plugin extension proposals

### B1. Skill inventory — final recommended set (refined)

Four new skills earn their slot. Position diverges from Codex on count (4 vs 3) and category (Communication vs new Conversation).

| New skill | Load-bearing move | Category | Routes |
|---|---|---|---|
| **`frame-control`** | Reading the frame already running before speaking — installing without first reading is the failure mechanic, since any statement+question pair deployed into an unread room is a *naked* attempt that reinforces whichever frame was already there | Communication | **From:** SBI (when recipient is hostile/higher-status); `conflict-resolution-diagram` (when one demand is a presupposition not an interest); OOda Orient stage. **To:** `presupposition-detector`, `concession-then-ask`, `conversational-recovery`, `ladder-of-inference` |
| **`presupposition-detector`** | Surfacing the unstated assumption embedded as fact — failure mechanic is letting the grammatical embedding pass uncontested into your own response, which ratifies the frame and makes future challenge structurally costly | Communication (defensive sibling of `frame-control`) | **From:** any inbound document review, hostile email, meeting prep. **To:** `ladder-of-inference`, `frame-control`, `conflict-resolution-diagram` |
| **`concession-then-ask`** | Pre-emptive disclosure that makes the hard question askable — failure mechanic is asking the hard question without conceding the cost first, which reads as arrogant and triggers the counterattack the concession was supposed to disarm | Communication | **From:** SBI Intent variant; negotiation/escalation prep. **To:** `frame-control` (when one move is not enough); `conversational-recovery` (if concession landed badly) |
| **`conversational-recovery`** | Class-shift after the missed frame — failure mechanic is repeating the same statement class harder ("pace harder") instead of switching to a different class, which compounds the visible-effort tell that "trying is the opposite of having" | Communication | **From:** `frame-control` (when the planned move missed); standalone after a real conversation went sideways. **To:** `ladder-of-inference` (if the miss exposed a bad assumption); `conflict-resolution-diagram` (if the recovery reveals structural conflict) |

**Rejected candidates (with reason):**
- **`reframe`** — covered by `abstraction-laddering` (climb-up). Add cross-reference, not a new skill.
- **Per-class standalones** (`pacing-and-leading`, `resonance-statement`) — too granular; plugin splits on mechanism, not menu.
- **`tactical-empathy` (Voss-flavored)** — ~95% overlap with `frame-control`'s Resonance class. Cite Voss heavily; do not split.

### B2. Mega-skill vs. micro-skills — definitive position

**Verdict: ONE primary skill (`frame-control`) for the offensive 5+5 architecture, plus THREE supporting skills (`presupposition-detector` defensive, `concession-then-ask` for the high-leverage 2-move pattern, `conversational-recovery` for the class-shift after a miss).**

Where I differ from Codex: Codex folds `concession-then-ask` into `conversation-framing` and treats it as a sub-move. My position: concession has a *quantitative* discipline (Ackerman 65/85/95/100) and a *specific failure mechanic* (trivial / fake / wrong-target concession) that no other Hughes class has. Folding it into a generic skill dilutes the audit. The extra skill is worth the cognitive cost.

Where I agree with Codex: do not split per class; do not bundle defense into the offensive skill.

**Total new skills: 4.** Plugin grows 25 → 29. Communication category grows 2 → 6, finally giving it parity with Systems Thinking (5).

### B3. Full audit-clean SKILL.md drafts

The .gnhf audit checks that the load-bearing move named in the description appears verbatim or near-verbatim in: Priorities, Role, Input Handling, Example `<thinking>`, Completion. All four drafts below are written to that audit standard. The load-bearing phrase is bolded conceptually (the literal phrase repeats across slots).

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
Frame-already-running read > Pre-suasion check > Statement-class fit > Question-class fit > Recovery plan
```

## Role

Act as a conversational-architecture coach in the lineage of Voss's tactical empathy, Cialdini's pre-suasion, Goffman's frame analysis, Schein's process consultation, Heritage's question-design work in conversation analysis, and Oyserman's identity-based motivation. The skill plans a two-move sequence — a statement that installs a frame, followed by a question that locks the listener inside it via preference-organization pressure (dispreferred second-pair-parts cost the listener delay/mitigation/account-giving) — for one specific upcoming exchange. The load-bearing move is reading the frame already running in the room before drafting either move, because a statement+question deployed into an unread room is a naked attempt operating inside whichever frame is already there — typically the higher-status party's — and reinforces that frame instead of seizing it. The structural failure mode is selecting a statement class without first naming what the listener is currently holding (authority / adversarial / emotional / narrative) — every later step then optimizes the move for the wrong frame.

Skip when the conversation has not yet happened and the user wants pure introspection (route to `ladder-of-inference` to check own assumptions first), when the counterpart is subordinate, vulnerable, or unaware (the offensive deployment is refused on ethical grounds — return only the defensive frame-read), and when the upcoming exchange is delivery of specific feedback on a specific incident (route to `situation-behavior-impact` and let it consume the frame-read as input).

## Loop

1. **Round 0 — Pre-suasion check**: `AskUserQuestion`: "Can you install the frame *before* the room (subject line, agenda, pre-read, Slack preamble, who is in the meeting)?" Cialdini-style pre-suasion is often the highest-leverage move and happens before the live exchange. If yes, draft the pre-frame artifact first.
2. **Round 1 — Frame-read**: `AskUserQuestion`: "What frame is already running in the room?" Recommend based on counterpart description (authority / adversarial / emotional / narrative / unread). Refuse to draft until this round is answered — this is the load-bearing move.
3. **Round 2 — Counterpart status check**: `AskUserQuestion`: "Is the counterpart a peer, higher-status, or subordinate?" If subordinate or vulnerable, end loop and return defensive frame-read only.
4. **Round 3 — Statement class**: Recommend the class that matches the read (authority → resonance via label, or concession; adversarial → alignment; emotional → resonance via label or mirror; narrative → reframe via question, statement opens with pacing). Mirror vs. label is named explicitly within Resonance. Identity-stake (Oyserman) named as a Presupposition sub-type. 2–3 alternatives with tradeoffs.
5. **Round 4 — What-they-need-to-do-next**: `AskUserQuestion`: "What do you need them to do in the next 30 seconds?" — this picks the question class (arrive at conclusion → directional, optionally as a Heritage-style optimized question; act as if decided → assumptive; hand over information → elicitation, optionally as Voss no-oriented; see different lens → reframe; cede evaluator role → diagnostic).
6. **Round 5 — Draft the pair**: produce the verbatim statement + verbatim question. Truthfulness check: any presupposition or assumptive must be a *truthful* state, not a fabricated one.
7. **Round 6 — Recovery plan**: name the *different* statement class to switch to if the first lands in dead air or hits a held frame; route to `conversational-recovery` for the full recovery loop if needed.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Topic or Path describing an upcoming conversation — extract the counterpart's role and status, the most recent friction point, and any verbatim phrases the counterpart has already used (these reveal the frame already running). If Path provided, Read the thread/email first and surface the counterpart's last 2–3 utterances as evidence of the running frame.
- The first move is always reading the frame already running before speaking — refuse to advance to statement-class selection if the user cannot name the running frame; offer the four standard frames (authority / adversarial / emotional / narrative) as recognition prompts. A statement+question deployed into an unread room is a naked move and will reinforce whatever frame is already there.
- Skip and route when the user has a specific incident to give feedback on (→ `situation-behavior-impact`), when the user wants to surface presuppositions in an inbound message (→ `presupposition-detector`), when an attempted move already missed and the user needs the recovery loop (→ `conversational-recovery`), when the leverage point is pre-conversation framing rather than in-conversation (still use this skill — Round 0 handles pre-suasion drafting), when the counterpart is subordinate or vulnerable (refuse offensive use; return defensive frame-read only).

## Example

<example>
Topic: "I have a 1:1 with my VP tomorrow about the missed Q3 deadline. I always end up agreeing to more work."

<thinking>The "always end up agreeing to more work" tell is the load-bearing diagnostic: the user is operating inside an authority frame already running in the room, so any naked question they bring ("what should I prioritize?", "can we push the date?") will reinforce that frame and produce more agreement. Reading the frame already running before speaking is what discriminates this from a generic prep session — without it, the recommended statement would be optimized for the wrong frame and the meeting would replay the same dynamic. Authority frame is the read; resonance (label form: "it sounds like Q3 has changed what counts as winning for you") and concession are the only ways under it (you don't out-authority a VP). Pre-suasion (Round 0) check first: can the user send a one-line agenda framing the meeting as "trade-off conversation, not status review"? If yes, that pre-frame is higher leverage than any in-room move because it sets the running frame before the VP arrives.</thinking>

Calls AskUserQuestion (Round 0):
- Question: "Can you install a pre-frame *before* the room — subject line, agenda one-liner, Slack preamble?"
- Options:
  - `(Recommended) Send a one-line agenda: "Q3 trade-off conversation — what we keep, what we push"` — re-labels the meeting from status-review to trade-off-decision; changes the frame the VP walks in holding
  - `Skip pre-suasion, work in-room only` — accept that the VP will set the opening frame
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Frame-already-running read as load-bearing audit: the running frame is named (authority / adversarial / emotional / narrative) with one piece of evidence from the counterpart's recent behavior or words; if the frame was not read before the statement was drafted, the load-bearing move has failed — the planned statement+question is a naked move operating inside whichever frame was already there — and the loop re-runs from Round 1 with the frame-read filled in.
- Pre-suasion artifact (if Round 0 produced one): verbatim text of the agenda line / subject / pre-read, with a one-line justification of what frame it installs before the room.
- Counterpart-status check: peer or higher-status → offensive deployment authorized; subordinate or vulnerable → offensive deployment refused, return only the defensive read of what the *user* is being framed into.
- Verbatim statement + verbatim question pair, with statement class and question class named (mirror vs label distinguished in Resonance; Heritage-optimized vs neutral distinguished in Directional; identity-stake flagged when used in Presupposition), and a one-line justification linking each class back to the frame-read in Round 1.
- Truthfulness check: any presupposition or assumptive question is verified as a *truthful* state (not fabricated). Fake alignment, fabricated urgency, or knowingly false presuppositions cause the draft to be rewritten.
- Recovery plan: the *different* statement class to switch to if the planned move lands in dead air (not-heard miss → focus-generation problem) or hits a held frame (heard-and-rejected miss → switch class, do not deploy the same class harder); recovery follows `conversational-recovery` if the user wants the full loop.
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

Act as a defensive frame-reader in the lineage of Goffman's frame analysis (frame breaks expose the running frame), Argyris's left-hand column (gap between what is said and what is presupposed), Heritage's question-design work (optimization principle: questions grammatically prefer specific answers), and Lakoff's "don't negate the frame" caution (rebutting in the frame's vocabulary ratifies it). The skill takes an inbound artifact — email, agenda, doc, redline, slack thread — and lists every presupposition it embeds. The load-bearing move is surfacing the unstated assumption embedded as fact in the grammar, because letting the grammatical embedding pass uncontested into the user's response ratifies the frame and makes future challenge structurally costly — the listener's brain treats the grammar-embedded assumption as already-established and skips the audit. The structural failure mode is paraphrasing the inbound at face value (extracting only the explicit claims) — this misses the grammatically-embedded claims, which are precisely the ones doing the framing work.

Skip when the inbound is already explicit and unambiguous (no embedded claims to surface — straightforward request, factual update), when the user has already decided to accept the inbound's framing and is asking for execution help (route to the relevant decision skill), and when the inbound is a hostile attack where the load-bearing question is whether to engage at all rather than how to respond inside the frame (route to `conflict-resolution-diagram`).

## Loop

1. **Round 1 — Artifact ingest**: confirm what the inbound is (email / agenda / doc / thread) and Read it; identify the sender's status relative to the user (peer / higher / subordinate).
2. **Round 2 — Surface presuppositions**: list each grammatically-embedded assumption verbatim, paired with the explicit claim it rides on top of. Format: "*Says:* X. *Presupposes:* Y." Include question-design observations where present (Heritage-style optimized questions that grammatically prefer one answer; "some" vs "any" steering). Do not editorialize; just surface.
3. **Round 3 — Triage the surfaced list**: `AskUserQuestion`: "Which surfaced presuppositions are the ones that, if you accept silently, will frame the rest of this exchange?" Recommend the highest-leverage one with rationale.
4. **Round 4 — Response-option menu** for each load-bearing presupposition: `AskUserQuestion`: "How do you want to handle this one?" — accept (and own the consequence) / contest explicitly (name the assumption, refuse it without negating in its vocabulary) / reframe (replace the frame with a different one — route to `frame-control`) / strategic silence (do not respond, let it die).
5. **Round 5 — Draft response**: produce the verbatim response that handles each surfaced presupposition per the user's chosen option.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Inbound artifact as topic or Path — Read the artifact in full first; extract every clause that uses "since", "given that", "as we discussed", "now that", "obviously", "clearly", "of course", or any tense/aspect combination that treats a future event as already underway ("when we roll out", "once we've moved forward"). Also extract every question whose grammar pre-loads a preferred answer (Heritage's optimization principle: "you don't have any concerns, do you?", "is there anything else?" vs "is there something else?").
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

- Surfaced-presupposition list as load-bearing audit: every grammatically-embedded assumption in the inbound is named verbatim with the format "Says: X. Presupposes: Y."; if any "since" / "given that" / "now that" / "when we" / "once we've" clause survives unsurfaced, or any Heritage-style optimized question goes unflagged, the load-bearing move has failed — the user's response would silently ratify the frame and make future challenge structurally costly — and the surfacing pass re-runs.
- Triage: each surfaced presupposition tagged accept / contest / reframe / strategic-silence with one-line rationale; the load-bearing one (the one that frames the rest of the exchange) is named explicitly.
- Drafted response that handles each load-bearing presupposition per the chosen option; if "contest" was chosen, the response names the assumption explicitly ("I haven't agreed to the reorg, so before drafting comms…") rather than negating in the frame's vocabulary (Lakoff: "don't negate the frame").
- Residual: any presupposition the user chose to "accept" gets flagged with the consequence ("you have now ratified the reorg frame; future contest will require an explicit re-open"); reframe choices route to `frame-control` for counter-frame drafting; any belief about the sender's intent that is not evidenced gets flagged for `ladder-of-inference` rather than smuggled into the surfacing.
```

#### B3.3 — `skills/concession-then-ask/SKILL.md`

```markdown
---
name: concession-then-ask
description: Pairs a concession statement (acknowledging a cost, limitation, or mistake before the counterpart forces it) with the hard question the concession earned the right to ask. Load-bearing is the pre-emptive disclosure that makes the hard question askable, because asking the hard question without conceding the cost first reads as arrogant and triggers the counterattack the concession was supposed to disarm. Use before raising a sensitive negotiation point, before asking for budget/time/scope after a missed commitment, after delivering critical SBI feedback when you want to ask "why", or when the user says "I need to ask a hard question", "they're going to push back", "concession", "accusation audit", or "Ackerman".
allowed-tools: AskUserQuestion, Read
---

# Concession-Then-Ask

## Priorities

```
Pre-emptive disclosure > Hard-question authorization > Counterattack disarmament > Closure
```

## Role

Act as a negotiation coach in the lineage of Voss's accusation audit (list every negative the counterpart could be thinking and voice them first), the Ackerman bargaining model (concede in fixed decreasing increments — 65/85/95/100 — to anchor the deal range and signal "I'm at my limit" via reciprocity-norm activation), and Hughes's concession-statement class. The skill drafts the two-move pair: the concession that gives ground first, then the hard question that the concession earned the right to ask. The load-bearing move is the pre-emptive disclosure that makes the hard question askable, because asking the hard question without conceding the cost first reads as arrogant — the counterpart hears the ask as entitled rather than direct, and the counterattack they had loaded (the magazine of objections) launches before the question can land. The structural failure mode is conceding nothing real (a fake or trivial concession — "I know your time is valuable" — does not earn the question) or conceding the wrong thing (acknowledging a cost the counterpart did not actually care about, while the cost they did care about goes unnamed).

Skip when the question is not hard (no concession needed; just ask), when the user has nothing real to concede (concession-then-ask is not the move; route to `frame-control` with a different statement class), when the relationship is purely transactional and concession would read as weakness with no upside (cold sales call to a stranger), and when the hard question is actually feedback on a specific incident (route to `situation-behavior-impact` instead).

## Loop

1. **Round 1 — Hard question**: `AskUserQuestion`: "What is the hard question you want to be able to ask?" — extract the verbatim question, surface why it would land arrogant if asked cold.
2. **Round 2 — Accusation audit (Voss)**: list every negative the counterpart could be thinking — the costs they paid, the times you missed, the concerns they have about your ask. This is the surface-area for concession candidates.
3. **Round 3 — Concession candidate**: `AskUserQuestion`: "Which concession is real, costly to admit, and addresses what the counterpart actually cares about?" Recommend the one that names the specific cost the counterpart paid, with rationale. Reject trivial / fake / wrong-target concessions explicitly. If the negotiation is a numerical ask (budget, time, scope), offer the Ackerman 65/85/95/100 anchor pattern as an alternative concession discipline.
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

<thinking>The hard question — "can we push the deliverable to next Friday?" — would read arrogant cold, because the counterpart's loaded objection is "you already missed the last one." The pre-emptive disclosure that makes the hard question askable here is naming that specific cost — the missed prior deadline and what it cost the client — before the ask. A trivial concession ("I know you're busy") would not earn the question because it does not address the cost the client actually paid. The load-bearing test: would the question still read arrogant after the concession? If the concession names "we missed the last one and that pushed your launch by a week," the answer is no — the concession has voiced the loaded objection and the question lands as direct rather than entitled. Ackerman pattern does not apply here because this is a yes/no extension, not a numerical bargain; the concession discipline is "name the specific paid cost", not the 65/85/95/100 ladder.</thinking>

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
- Ackerman discipline (when applicable): if the ask is numerical, the concession sequence is offered as 65/85/95/100 of target with the diminishing-increment rationale; if not numerical, this section is marked "N/A — yes/no ask, not numerical bargain".
- Residual: any concession candidate that was trivial / fake / wrong-target gets flagged with the reason and the loaded objection it failed to voice; if no real concession exists, the skill ends with "concession-then-ask is not the move" and routes to `frame-control` for a different statement-class selection; ethical refusal triggered if the counterpart is subordinate.
```

#### B3.4 — `skills/conversational-recovery/SKILL.md`

(New full draft — was only sketched in original.)

```markdown
---
name: conversational-recovery
description: Repairs a conversation after a framing move missed — load-bearing is class-shift after the miss, because repeating the same statement class harder ("pace harder") instead of switching to a different class compounds the visible-effort tell that "trying is the opposite of having" and turns the recovery attempt into evidence of weakness. Use after a 1:1 / negotiation / escalation went sideways; when an opener landed flat, hit pushback, or made the user look like they were forcing it; or when the user says "that landed badly", "I lost the room", "they pushed back immediately", or "how do I recover this conversation".
allowed-tools: AskUserQuestion, Read
---

# Conversational Recovery

## Priorities

```
Class-shift after the miss > Miss-type diagnosis > Release-without-salvage > Redeploy with new info
```

## Role

Act as a post-miss conversation repair coach in the lineage of Voss's tactical-empathy recovery (label the negative, accusation-audit the likely objection, then ask a calibrated question), Argyris's double-loop learning (interrogate the governing assumption, not just the move), and Hughes's recovery loop. The load-bearing move is class-shift after the miss: if a pacing opener bounced, do not pace harder; if an alignment bid was rejected, do not restate alignment more earnestly; if a directional question hit a wall, do not ask the same question with a different inflection. The structural failure mode is salvage behavior — repeating the same class with cleaner wording — because that compounds the visible-effort tell that "trying is the opposite of having" and turns the recovery attempt into evidence of weakness.

Skip when there has not actually been a miss yet (route to `frame-control` for forward planning), when the exchange reveals a structural conflict with no workable shared goal (route to `conflict-resolution-diagram` or `hard-choice-model`), and when the miss exposed a bad assumption the user holds rather than a conversational mechanics problem (route to `ladder-of-inference` before redeploying).

## Loop

1. **Round 1 — Replay the move**: capture exactly what the user said and what the counterpart said next. If a transcript is available via Path, Read it.
2. **Round 2 — Miss-type diagnosis**: `AskUserQuestion`: "What kind of miss was it?" — *not-heard* (focus or timing failure — they were distracted, the moment was wrong) / *heard-and-rejected* (premise conflict — they directly contested the reality frame) / *reactance-to-pressure* (the move felt coercive — they pushed back on the control, not the content) / *wrong-problem-frame* (the move answered the wrong question — they wanted a different conversation). Recommend with evidence from the response sequence, not the user's retrospective summary.
3. **Round 3 — Release**: identify the exact line, premise, or pressure pattern to drop and what *not* to repeat. The release is the prerequisite for the class-shift; salvaging the dead move blocks the new class.
4. **Round 4 — Class-shift selection**: pick a *different* class for the redeploy, matched to the miss type:
   - not-heard → re-pace with better timing or a pre-frame (route to `frame-control` Round 0)
   - heard-and-rejected → switch to resonance (label the contested premise), or to concession (route to `concession-then-ask`)
   - reactance → switch to no-oriented question or autonomy-restoring elicitation
   - wrong-problem-frame → reframe question
   Reject any candidate that is the same class as the failed move.
5. **Round 5 — Redeploy**: draft the verbatim second attempt + one safer variant.
6. **Round 6 — Stop condition**: define when to widen, pause, seek explicit meta-conversation, or exit rather than taking a third swing. Two misses on the same topic usually means the structural conflict is real and `conflict-resolution-diagram` is the next move.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Topic or Path to transcript / notes — if Path provided, Read the sequence and anchor recovery on the actual miss, not the user's retrospective summary.
- Class-shift after the miss is the first move, not a tone adjustment — refuse to draft a redeploy that uses the same class as the failed move; that is salvage behavior, not recovery, and it compounds the visible-effort tell. If the user insists the same class will work "if I just say it better", flag this as the failure mechanic Hughes warns against and re-run miss-type diagnosis.
- Skip and route when no miss has occurred (route to `frame-control` for forward planning), when the miss exposed a bad assumption rather than a mechanics problem (route to `ladder-of-inference` first), when the second attempt would also be a miss because the conflict is structural (route to `conflict-resolution-diagram`), and when the miss happened against a subordinate or vulnerable counterpart (the recovery itself becomes coercive — refuse offensive redeploy).

## Example

<example>
Topic: "I opened my 1:1 with 'We've been going back and forth on this for weeks now,' and my manager snapped, 'No, *you've* been holding us up.'"

<thinking>Class-shift after the miss is load-bearing here. The pacing opener was heard-and-rejected; the manager directly contested the reality frame ("we" → "you"). Re-pacing harder ("I think we can both agree this has dragged on") would force me into an argument about whose version of the timeline is true, and the visible-effort tell would compound — the manager has already framed me as the obstacle, and a cleaner pacing sentence reads as me trying to escape that frame rather than answer it. The miss type is heard-and-rejected, so the class-shift target is resonance (label the contested premise: "it sounds like the read on this from your seat is that I'm the one stalling") or concession (route to concession-then-ask: "you're right that the last two iterations have been on me — what's the one thing I can change this week to unblock you?"). Same-class redeploys (another pacing line, another "we") are explicitly rejected.</thinking>

Calls AskUserQuestion (Round 2):
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

- Class-shift after the miss as load-bearing audit: the original class is named, the replacement class is named, and they are *different*; if the recovery draft still relies on the same class as the failed move (pacing-rejected → another pacing line, alignment-rejected → another alignment bid), the load-bearing move has failed — pace-harder-after-pacing-failed is the salvage-behavior failure mechanic and the recovery itself becomes evidence of weakness — and the loop re-runs from Round 2 with a different class selected.
- Miss-type diagnosis with evidence from the actual response sequence, not the user's feeling about it; the miss is tagged not-heard / heard-and-rejected / reactance / wrong-problem-frame.
- Release: the exact line, premise, or pressure pattern that is now dropped, named verbatim.
- Second-attempt script: one redeploy line + one safer variant; both in a *different* class from the failed move.
- Stop condition: if the second attempt also fails (third-miss scenario), the recovery exits with a recommendation to widen the issue, pause, request explicit meta-conversation ("can we step out of this for a sec — what's the actual conversation we should be having?"), or route to `conflict-resolution-diagram` if the conflict appears structural.
- Residual: any same-class salvage instinct the user brought in is flagged with the failure mechanic name; any belief about the counterpart's motive that is not video-frame observable is flagged for `ladder-of-inference`; ethical refusal triggered if the counterpart is subordinate.
```

### B4. Command-wrapper drafts

#### B4.1 — `commands/frame-control.md`

```markdown
---
description: Plan the statement+question pair that installs your frame in an upcoming conversation, after first reading the frame already running and checking for pre-suasion leverage
argument-hint: [conversation context — counterpart, recent friction, what you suspect they're holding]
---

# /thinking-systems:frame-control

Plan a frame-setting statement plus the question that locks the listener inside it (via preference-organization pressure on the second-pair-part), *after* reading the frame already running and checking whether a pre-suasion artifact (subject line, agenda, pre-read) can install the frame before the room. Thin wrapper around the `thinking-systems:frame-control` skill.

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
description: Scan an inbound message, agenda, or doc for assumptions embedded as already-established fact (and Heritage-style optimized questions that grammatically prefer one answer), then plan whether to accept, contest, or reframe each
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
description: Pair a real concession (acknowledging a specific cost the counterpart paid, or an Ackerman 65/85/95/100 numerical anchor sequence) with the hard question the concession earns the right to ask
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

#### B4.4 — `commands/conversational-recovery.md`

```markdown
---
description: Repair a conversation after a framing move missed by diagnosing the miss type, releasing the dead move, and class-shifting (do not pace-harder)
argument-hint: [what you said, what they said back, what kind of miss it felt like]
---

# /thinking-systems:conversational-recovery

Recover after a missed framing move by class-shifting (not by repeating the same class louder or longer). Thin wrapper around the `thinking-systems:conversational-recovery` skill.

## Usage

```
/thinking-systems:conversational-recovery I opened with "we've been going back and forth" and they snapped "no, you've been holding us up"
/thinking-systems:conversational-recovery my opener with the CTO landed flat — they just stared
```

## Behavior

Parse the miss from `$ARGUMENTS`. If empty, ask: `"What did you say, and what did they say back?"`.

Invoke the skill:

```
Skill(thinking-systems:conversational-recovery, args: "$ARGUMENTS")
```
```

### B5. Cross-skill modifications — concrete edits to existing skills

#### B5.1 — `skills/situation-behavior-impact/SKILL.md`

Add a third skip case in the **Skip when** clause:

> Skip when the recipient is hostile or higher-status and you have not yet read the frame they are running — SBI's Behavior+Impact lands inside whichever frame the recipient already holds, so route to `frame-control` first to read and (if needed) re-frame, then return to SBI for the verbatim delivery.

In the Loop, after the Intent round, add an optional concession-check round:

> 5b. **Concession check (optional)** — if the SBI is critical and the recipient has paid a real cost (your prior misses, scope changes, etc.), route to `concession-then-ask` to pair the SBI delivery with a pre-emptive disclosure; otherwise the Behavior+Impact will read as one-sided and the Intent question lands as gotcha.

#### B5.2 — `skills/conflict-resolution-diagram/SKILL.md`

Add a flag step before the loop runs:

> Before extracting positions, run a presupposition pass on each party's stated demand: if the demand is grammatically-embedded ("since we already agreed X, you must Y") rather than a clean interest claim, surface the embedded assumption first via `presupposition-detector` — otherwise the diagram resolves a conflict between two presuppositions, not two interests, and the resolution will not hold.

#### B5.3 — `skills/minto-pyramid/SKILL.md`

Add to Role:

> The audience-fit check is structurally a frame-fit check: the apex is right when it answers the question the reader is *already framing the document inside*. For a hostile or skeptical reader, route to `frame-control` first to read the frame they are bringing to the document — the apex written for "exec deciding Go/No-Go" lands wrong on "exec already-decided-No looking for confirmation".

#### B5.4 — `skills/abstraction-laddering/SKILL.md`

Add to Skip clause:

> When the "stuck problem" is actually a stuck *conversation* rather than a stuck problem definition (e.g., "we keep arguing about budget" — the budget framing is the lock), route to `frame-control`'s reframe-question class instead — the climb-up move on a conversational frame is structurally the same as climbing up the why-rung, but the deployment is a single sentence in dialogue rather than a problem-statement rewrite.

#### B5.5 — `skills/ooda-loop/SKILL.md`

Add to Orient description:

> Frame-reading — naming which frame is already running in the room (authority / adversarial / emotional / narrative) — is an Orient act; for explicit frame-control planning of a statement+question pair, route to `frame-control` and let it consume the Orient output as its Round 1 input.

#### B5.6 — `skills/ladder-of-inference/SKILL.md`

Add to second sentence of Skip:

> For an incoming loaded message or question that may be installing a frame on the user, route to `presupposition-detector` before descending the ladder — descending from a frame the user accepted unconsciously starts the ladder one rung too high.

### B6. README.md and CHANGELOG.md updates

#### B6.1 — `README.md`

Replace Communication row of the table:

```diff
-| **Communication** | `situation-behavior-impact`, `minto-pyramid` |
+| **Communication** | `situation-behavior-impact`, `minto-pyramid`, `frame-control`, `presupposition-detector`, `concession-then-ask`, `conversational-recovery` |
```

Add to auto-trigger examples:

```diff
+- "I have a 1:1 with my VP and always end up agreeing to more work" → `frame-control`
+- "Scan this email for assumptions before I respond" → `presupposition-detector`
+- "I need to ask for an extension but we already missed the last one" → `concession-then-ask`
+- "That opener landed badly — how do I recover?" → `conversational-recovery`
```

Expand Credits:

```diff
-Methods are classical thinking frameworks (Eisenhower, de Bono, Boyd, Snowden, Goldratt, Ackoff, Minto, and others). Individual attributions appear in each skill where relevant.
+Methods are classical thinking frameworks (Eisenhower, de Bono, Boyd, Snowden, Goldratt, Ackoff, Minto, and others) plus modern conversational-architecture work (Goffman, Lakoff, Voss, Cialdini, Schein, Argyris, Watzlawick, Heritage, Oyserman). Individual attributions appear in each skill where relevant. The four framing skills synthesize material from multiple traditions and do not endorse any single course or paid program; Chase Hughes's public video is credited as one contemporary restatement of the statement+question architecture, cross-checked against deeper traditions rather than treated as authoritative.
```

#### B6.2 — `CHANGELOG.md`

```markdown
## [0.2.0] - 2026-04-26

### Added

- Four framing-tactics skills in the Communication category (and matching slash commands):
  - **frame-control** — plan a statement+question pair after reading the frame already running; includes Round 0 pre-suasion check.
  - **presupposition-detector** — defensive scan of an inbound for grammatically-embedded assumptions and Heritage-style optimized questions.
  - **concession-then-ask** — pair a real pre-emptive disclosure (or Ackerman 65/85/95/100 numerical anchor sequence) with a hard question.
  - **conversational-recovery** — class-shift recovery loop after a missed frame, with four-way miss-type diagnosis (not-heard / heard-and-rejected / reactance / wrong-problem-frame).

### Changed

- `situation-behavior-impact` — added skip-and-route to `frame-control` when recipient is hostile/higher-status; added optional concession-check round routing to `concession-then-ask`.
- `conflict-resolution-diagram` — added presupposition-surfacing pass before extracting positions (routes to `presupposition-detector`).
- `minto-pyramid` — added frame-fit framing of the audience-fit check; routes to `frame-control` for hostile/skeptical readers.
- `abstraction-laddering` — added skip-and-route to `frame-control` when the "stuck problem" is a stuck conversation rather than a stuck problem definition.
- `ooda-loop` — added explicit framing of frame-reading as an Orient act; routes to `frame-control` for explicit statement+question planning.
- `ladder-of-inference` — added skip-and-route to `presupposition-detector` for incoming loaded messages.
- README.md — Communication category updated to 6 skills; auto-trigger examples expanded; Credits expanded to name modern conversational-architecture lineages including Heritage and Oyserman.
```

---

## C. Stress-test of open design questions in §5.3

### C.1 — One mega-skill or many micro-skills?

**Verdict: ONE primary skill (`frame-control`) for the offensive 5+5, plus THREE supporting skills.** Codex's 3-skill bundle folds concession; my 4-skill bundle splits it. The defensible difference: concession has a *quantitative* discipline (Ackerman) and a *specific failure mechanic* (trivial / fake / wrong-target) that no other Hughes class has. The audit tightens when concession has its own SKILL.md. Five-class-per-skill micro-splitting fails per-skill granularity (plugin splits on mechanism, not menu).

### C.2 — Load-bearing move for `frame-control`?

**Verdict: identifying the frame already running before speaking.** Pressure-tested against three alternatives:
- *Statement-before-question discipline* — too procedural; symptom of frame-reading, not the cause.
- *Recovery loop* — load-bearing for `conversational-recovery`, not `frame-control`.
- *Pairing rule* — describes the architecture, not the load-bearing move.

The frame-already-running read is what discriminates a deployed move from a *naked* move. Codex's "frame-already-running diagnosis" naming is essentially the same load-bearing move; agreement here is intentional consensus, not homogenization.

### C.3 — How much NCI/Hughes lineage to cite?

**Verdict: cite the architecture, not the brand.** Cite "Hughes's recent restatement (2020s)" once in `frame-control`'s Role, paired with deeper-tradition cites (Goffman, Watzlawick, Bandler-Grinder, Cialdini, Voss, Schein, Heritage, Oyserman). No NCI courses, no NCI-branded vocabulary ("Behavior Operations Manual"), no endorsement of credentials. Both Claude and Codex agree on this.

### C.4 — Defensive vs offensive split?

**Verdict: SPLIT into separate skills.** Both Claude and Codex agree. `frame-control` (offensive) and `presupposition-detector` (defensive) match the existing house pattern (`situation-behavior-impact` offensive, `ladder-of-inference` defensive), lower cognitive load, and let each skill have a tight load-bearing audit.

### C.5 — Routing rules for the three example user prompts

- *"Help me write feedback for X"* → SBI (existing), unless the recipient is hostile or higher-status, in which case **route to `frame-control` first** and consume its frame-read as input to SBI.
- *"Negotiate this contract clause"* → **`frame-control` is primary**; routes to `concession-then-ask` if the user has a real concession, routes to `presupposition-detector` if the redline contains embedded assumptions, routes to `conversational-recovery` if a prior round bounced.
- *"Why does my 1:1 with my manager always end with me agreeing to more work?"* → **`presupposition-detector` first** (defensive scan of the manager's typical agenda framing — "since you took on the prioritization role…"), then **`frame-control`** (offensive prep with pre-suasion via a one-line pre-meeting agenda re-frame). Explicitly *not* `eisenhower-matrix` for the workload — solving inside the frame the user is losing to.

---

## D. Risks and disclaimers

### D1. What in Hughes does *not* survive cross-validation

- **The polemic against "ask better questions."** Hughes overstates this. Heritage's optimization principle and CA preference-organization show that *question design itself* installs preference and roles, independently of any prior statement. Calibrated questions (Voss) and no-oriented questions do real work alone. The plugin should adopt Hughes's pairing rule as the *strongest* configuration, not the only valid one.
- **Pacing as "almost always works."** Folk-neuroscience claim. Empirical version (consistency-principle / yes-set) is real but moderate, not deterministic. Recovery loop exists precisely because it doesn't always land.
- **Resonance as universally "most powerful."** Voss's data supports labeling/tactical-empathy as high-leverage in *negotiation* contexts; generalizing to all conversation is a stretch. Let the frame-read drive class selection, not abstract power-rankings.
- **NLP heritage of presupposition.** NLP wider claims rejected by mainstream psychology ([Witkowski 2010 systematic review](https://pubmed.ncbi.nlm.nih.gov/23211179/)). The presupposition phenomenon survives via Lakoff/Boroditsky/Tversky-Kahneman; the NLP framing should not be inherited.
- **"Trying is the opposite of having" as a theorem.** Rhetoric, not literature-backed. Translate to observable advice: visible salvage behavior lowers perceived confidence and raises reactance.
- **The "consciously manipulating" exemption.** Defensible for unconscious skill, indefensible once the user has been taught the architecture. The plugin's ethical guardrail (refuse offensive deployment against subordinates) is the operational fix.

### D2. When the plugin should *not* invoke these skills

- **No human counterpart.** Skills auto-trigger only on prompts that name a counterpart (person, role, "my manager", "the client"). Solo analysis, debugging, refactoring → no auto-fire.
- **Subordinate or vulnerable counterpart.** `frame-control` and `concession-then-ask` offensive deployments are refused. Defensive `presupposition-detector` always runs.
- **Asynchronous polish, not strategy.** If the user has already written the message and needs an edit pass, route to `minto-pyramid` for restructure, not the framing suite.
- **Therapeutic / clinical / mental-health contexts.** Hughes's "talk to a schizophrenic" example in the transcript is glib; the plugin explicitly refuses to operate on described mental-health-crisis interactions and routes to professional help.
- **Pure factual exchanges.** Bug triage, data summarization, sprint planning without interpersonal conflict — no framing suite.
- **Concrete do-not-route cases**: ADRs, root-cause analysis, feature decomposition, sprint prioritization without conflict, pure data summarization.

### D3. Citation hygiene

- **Hughes himself.** Independent credibility critiques exist (multiple debunking videos; Reddit threads questioning NCI claims). Plugin does not endorse credentials, courses, or "Behavior Operations Manual" branding. The architecture is a re-synthesis; credit the older traditions and treat Hughes as the most recent restater. One sentence in `frame-control` Role: "synthesizes Hughes's recent restatement (2020s) of older traditions (Voss 2016, Cialdini 2016, Schein 2013, Heritage 2010, Watzlawick 1974, Goffman 1974, Bandler-Grinder 1975)".
- **NCI / Behavioral Table of Elements.** Do not link, do not adopt vocabulary, do not name paid courses.
- **NLP.** Cite the *technique* (presupposition-as-grammatical-embedding) but flag that mainstream psychology rejects most of NLP's broader claims; redirect to cognitive-linguistics (Lakoff, Boroditsky) and behavioral-economics (Tversky-Kahneman) for empirical backing.
- **Voss / Cialdini / Schein / Goffman / Heritage / Oyserman.** Cite freely; mainstream-respected, peer-reviewed where applicable. Voss's tactical-empathy claims have field-data backing from FBI hostage cases; Cialdini's experiments are heavily replicated; Schein and Goffman are foundational; Heritage's CA work is the empirical anchor for question-design framing; Oyserman's IBM is cited 1000+ times in social cognition.

---

## Sources (consolidated, with new additions from refinement)

**Carried from original:**
- Voss, *Never Split the Difference* / Black Swan Group: https://www.blackswanltd.com/the-edge/the-art-of-tactical-empathy
- Voss accusation audit & no-oriented questions: https://www.blackswanltd.com/the-edge/the-accusation-audit-r
- Cialdini, *Pre-Suasion*: https://en.wikipedia.org/wiki/Pre-Suasion
- Tversky & Kahneman 1981, "The Framing of Decisions": https://www.science.org/doi/10.1126/science.7455683
- Lakoff metaphor framing — Thibodeau & Boroditsky 2011: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0016782
- Goffman, *Frame Analysis*: https://en.wikipedia.org/wiki/Frame_analysis
- Sacks/Schegloff/Jefferson — Conversation Analysis foundations: https://en.wikipedia.org/wiki/Conversation_analysis
- Schein, *Humble Inquiry*: https://www.bkconnection.com/books/title/humble-inquiry-second-edition
- Fisher & Ury, *Getting to Yes*: https://www.pon.harvard.edu/daily/negotiation-skills-daily/getting-to-yes-negotiating-agreement-without-giving-in/
- Argyris double-loop learning: https://en.wikipedia.org/wiki/Double-loop_learning
- Argyris/Schein left-hand column: https://thesystemsthinker.com/the-left-hand-column-a-tool-for-reflection/
- Watzlawick et al., *Change* (1974) — reframing: https://en.wikipedia.org/wiki/Reframing

**Added in refinement (verified via fresh search):**
- Heritage, *Questioning in Medicine* (2010, in *Why Do You Ask?*, Oxford UP): https://www.researchgate.net/publication/284042203_Questioning_in_Medicine
- Heritage & Robinson 2011, "'Some' versus 'Any' Medical Issues": https://link.springer.com/chapter/10.1057/9780230316874_2
- Heritage on institutional talk (with Drew): https://www.researchgate.net/publication/292315967_Conversation_analysis_and_institutional_talk_Analyzing_distinctive_turn-taking_systems
- Pillet-Shore, "Preference Organization" (2017): https://scholars.unh.edu/context/comm_facpub/article/1022/viewcontent/Pillet_Shore_Preference_Organization_2017.pdf
- Oyserman, "Identity-Based Motivation: Implications for Intervention" (2011, PMC): https://pmc.ncbi.nlm.nih.gov/articles/PMC3079278/
- Oyserman 2024, "Identity-Based Motivation and the Motivational Consequences of Difficulty": https://compass.onlinelibrary.wiley.com/doi/10.1111/spc3.70028
- Voss MasterClass on Ackerman bargaining: https://www.masterclass.com/classes/chris-voss-teaches-the-art-of-negotiation/chapters/bargaining
- Wheeler, "Countering the Ackerman Gambit": https://wheeler.substack.com/p/countering-the-ackerman-gambit
- Black Swan: "Hang a Label on It": https://www.blackswanltd.com/newsletter/hang-a-label-on-it
- Black Swan on mirrors / bluffing: https://www.blackswanltd.com/newsletter/how-to-tell-if-someone-is-bluffing
- Black Swan no-oriented questions: https://www.blackswanltd.com/newsletter/negotiation-training-the-top-4-no-oriented-questions
- Witkowski 2010, NLP systematic review: https://pubmed.ncbi.nlm.nih.gov/23211179/
- Lakoff on framing vs propaganda: https://george-lakoff.com/2017/02/10/ten-points-for-democracy-activists/
- Cialdini HBR on uses and abuses of influence: https://hbr.org/2013/07/the-uses-and-abuses-of-influence
- Cialdini Stanford GSB on Pre-Suasion: https://www.gsb.stanford.edu/insights/change-my-mind-using-pre-suasion-influence-others
- PSD on left-hand column: https://www.psd.gov.sg/challenge/articles/communicate-better-with-the-left-hand-column-technique
- Chase Hughes credibility critique (representative): https://www.reddit.com/r/IsItBullshit/comments/1bsnq6f/isitbullshit_chase_hughes_behavior_panel_member/

<!-- RESEARCH_COMPLETE -->
