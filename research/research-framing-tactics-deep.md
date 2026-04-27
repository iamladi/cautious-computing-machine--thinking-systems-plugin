---
topic: Framing tactics for thinking-systems-plugin
date: 2026-04-26
sources:
  - claude-refined.md (85,665 bytes)
  - codex-refined.md (39,755 bytes)
  - gemini-refined.md (9,531 bytes)
phases_succeeded:
  - discovery
  - phase2_independent
  - phase3_refinement
  - phase4_synthesis
gemini_notes: Phase 2 hit Gemini Pro quota then succeeded on Flash. Phase 3 throttled but completed; smaller output than Claude/Codex. Phase 4 synthesizer-agent stream timed out twice; this synthesis was written directly from the three refined files.
source_video:
  url: https://www.youtube.com/watch?v=VD1RI50NXzk
  title: The 5 Sentences That Turn The Tables
  author: Chase Hughes (NCI)
  duration: 1983s
---

# Framing Tactics — Deep Research Synthesis

> Three independent LLMs (Claude Opus 4.7, Codex GPT-5.4, Gemini 3 Flash) produced cross-pollinated analyses of Chase Hughes's "5 Sentences" framework against the broader literature on conversational framing, then proposed concrete extensions to the `thinking-systems-plugin`. This synthesis organises the converged findings by theme and preserves the load-bearing disagreements where the three analysts diverged.
>
> **Attribution legend.** `[Consensus: 3/3]` = all three agree. `[Consensus: 2/3 — A, B]` = two agree, third diverges. `[Claude]` / `[Codex]` / `[Gemini]` = single source. `[Claude+Codex]` etc. = explicit pairs.

---

## A. Framing tactics — literature & cross-validation

### A.1 What survives broader validation `[Consensus: 3/3]`

Hughes's architecture survives best as a **conversation-planning heuristic**, not as a complete theory of interaction. The talk re-packages well-attested primitives from older traditions — none of the five statement classes is original to him; the (somewhat) original moves are the *pairing rule* (statement-then-question as a 2-move sequence) and the *recovery loop*.

The strongest cross-validated claims:

- **Conversations are already organised by a situational frame before the "important" line arrives** (Goffman's "What is it that's going on here?"; primary frameworks). `[Consensus: 3/3]`
- **Language shape changes reasoning and preference, even when the underlying facts are constant** (Tversky & Kahneman 1981, replicated with attenuation). `[Consensus: 3/3]`
- **Small wording choices steer what inferences people generate and what information they go looking for** (Thibodeau & Boroditsky 2011, "Metaphors We Think With" — beast vs. virus crime-frame study). `[Consensus: 3/3]`
- **Question format matters on its own** (Heritage & Robinson on physicians' opening questions; "some" vs. "any" steering). `[Consensus: 2/3 — Claude, Codex]`
- **Designed first-pair-parts produce structural pressure on the second-pair-part via preference organisation** — preferred responses are produced fast/without delay/without account; dispreferred responses are delayed, hedged, and accounted-for. The CA mechanism (Sacks–Schegloff–Jefferson 1974; Pillet-Shore 2017) is *older* than Hughes's restatement and explains *why* a well-designed pair "locks" the listener: the cost of producing a dispreferred SPP is non-trivial. `[Consensus: 2/3 — Claude, Gemini]`

### A.2 The biggest correction to Hughes — naked questions are weaker, not powerless `[Consensus: 3/3]`

Hughes claims a question by itself "doesn't really control anything." This is **too strong**. Heritage & Robinson's medical-interaction work shows opening-question design changes both the amount and shape of information patients present, and patient satisfaction. A question is not a passive lock — it is an **interactional steering device in its own right**.

Refined position the plugin should adopt:
- Statement + question is often the strongest configuration.
- Question design alone still encodes asymmetry, presupposition, and preferred next actions.
- Therefore: **unframed questions concede more than users realise, but question design still matters materially.** Do not make the skill repeat Hughes's strongest claim verbatim.

### A.3 How Hughes's five statement classes hold up

| Hughes class | Closest external primitive | Key sources | Survival | Refinement |
|---|---|---|---|---|
| **Pacing** | Mirror (last 1–3 words → elaboration); yes-set / commitment-and-consistency | Voss; Bandler-Grinder; Cialdini | Keep, weaken mechanism `[Consensus: 3/3]` | Voss splits **mirror** (elaboration-eliciting) from **label** (emotion-naming); Hughes collapses both. Folk-neuroscience "critical faculty doesn't activate" framing should be dropped. Call it a **low-disagreement reality statement** that reduces immediate resistance. `[Codex]` adds: do not present as a mind-bypass. |
| **Alignment** | Shared-interest framing; Fisher-Ury "interests not positions"; Cialdini Unity | Fisher & Ury; Cialdini; Schein | Strong | Recommended phrasing: **shared-problem construction**, not "I win because you can't oppose collaboration without looking stupid." `[Codex]` |
| **Resonance** | Label ("it sounds like…"); tactical empathy; humble inquiry; Rogerian reflection | Voss; Schein; Rogers | Strongest external corroboration `[Consensus: 3/3]` | Split into two named sub-moves: **labelling** the emotion or pressure, **summarising** the world-model or cost structure. `[Claude+Codex]`. Voss is practitioner literature, not lab science — credit as negotiation tradition, not settled science. `[Codex]` |
| **Concession** | Accusation audit (Voss, "get the uglies out first"); Ackerman bargaining 65/85/95/100 | Voss; Ackerman via Voss | Strong, but disagreement on whether it earns its own skill | Sharper external formulation is **accusation audit / pre-emptive negative labelling**, not generic concession. Ackerman adds *quantitative* discipline on numerical asks. (See B.2 below for the standalone-skill disagreement.) |
| **Presupposition** | NLP presupposition pattern; Lakoff "every word evokes a frame"; Tversky-Kahneman framing effects | Bandler-Grinder; Lakoff; Tversky-Kahneman | Mixed `[Consensus: 3/3]` | Effect is real (gain/loss framing replicates; metaphor frames shift policy preference). NLP wider claims rejected (Witkowski 2010 systematic review). Plugin phrasing: "**presupposition is a real linguistic device. This skill uses the device without endorsing NLP as a scientific system**." `[Codex]`. **Identity-stake framing** (Oyserman IBM) is the sharper sub-type for the parent example — "what's best for you" activates parent identity, not a grammatical embedding. `[Claude+Codex]` |

### A.4 How Hughes's five question classes hold up

| Hughes question | Closest external primitive | Key sources | Refinement |
|---|---|---|---|
| **Directional** | Calibrated how/what (Voss); Socratic elenchus; Heritage's "optimisation principle" | Heritage; Voss | Heritage's optimisation principle — questions designed to grammatically *prefer* a specific answer ("you don't have any chest pain, do you?") — is the empirical mechanism behind directional questioning. `[Claude]` |
| **Assumptive** | Embedded-decision question; sales "alternative close" | Bandler-Grinder; sales literature | Keep with **guardrails**: only allow truthful or explicitly negotiable defaults. Refuse hidden-decision wording where the skill would help smuggle a false premise. `[Codex]` `[Consensus: 3/3 on guardrail]` |
| **Elicitation** | Indirect inquiry; humble inquiry; **no-oriented question** (Voss); strategic ambiguity | Schein; Voss | Hughes misses the **no-oriented question** function (autonomy-restoring; lowers perceived coercion — "is now a bad time?" inverts default refusal-cost). `[Claude+Codex]`. Elicitation is broader than "statement-shaped questions" — also includes silence, mirrors, prompts, epistemic-role management. `[Codex]` |
| **Reframe** | Frame contest (Goffman); reframing (Watzlawick); double-loop question (Argyris); narrative reframing | Goffman; Watzlawick; Argyris | Reframe is arguably the *super-category*, not a peer subtype. `[Codex]`. **`reframe` is NOT a new skill** — `abstraction-laddering` already owns the climb-up move. `[Consensus: 3/3]` |
| **Diagnostic** | Cross-examination "show your work"; Schein process consultation ("why did you decide to call me?") | Schein; legal practice; Heritage on institutional talk | Heritage's institutional-talk work supports the power-asymmetry claim: diagnostic questions *enact* an evaluator/evaluated role asymmetry. Plugin phrasing: "a question that temporarily casts the speaker as evaluator and the other party as explainer" — stronger than "covertly slapping a frame down." `[Codex]` |

### A.5 Primitives Hughes is missing — keep as named subroutines, not new skills `[Consensus: 3/3 on the substance; minor disagreement on placement]`

1. **Pre-suasion / "before the room" framing** (Cialdini *Pre-Suasion*, 2016). The strongest framing move often happens *before* the conversation starts (subject line, agenda, pre-read, Slack preamble). **Plugin verdict:** Round 0 in the primary skill's Loop; not a separate skill. `[Claude+Codex]`
2. **Mirror vs. label split** (Voss). Two named moves inside Resonance class. `[Consensus: 3/3]`
3. **Anchoring** (Tversky-Kahneman; Galinsky et al.; Gunia et al. on the robustness of the first-offer effect). Numerical first-mover effect distinct from grammatical presupposition. **Plugin verdict:** modifier inside the primary skill (not a standalone). `[Consensus: 3/3]`
4. **Accusation audit** (Voss). Pre-emptive disclosure of every negative the counterpart could be thinking. `[Consensus: 3/3]`
5. **No-oriented questions** (Voss). Hughes's question taxonomy *does not include this* and it is field-tested. **Plugin verdict:** an option in the primary skill's elicitation question class. `[Claude+Codex]`
6. **Identity-stake framing** (Cialdini Unity; Oyserman IBM; Lakoff Strict-Father vs. Nurturing-Parent). Parent example in Hughes's transcript is identity-stake, not grammatical presupposition. **Plugin verdict:** named sub-type of Presupposition. `[Claude+Codex]`
7. **Temporal framing / 10-year-from-now lens** (Suzy Welch 10/10/10; Benkley et al. on long-term thinking implications). **Plugin verdict:** already covered by `second-order-thinking`; route, do not duplicate. `[Claude+Codex]`
8. **Reactance management / "But You Are Free" (BYAF)** (Brehm 1966; Carpenter 2013 — explicitly stating "the choice is yours" doubles success rate). The "Autonomy Gap" in Hughes's framework. **Plugin verdict:** an autonomy-supportive language wrapper option in the primary skill. `[Gemini]` *(unique addition; corroborated by Codex's reactance-as-miss-type taxonomy)*
9. **Contrast principle** (Cialdini). Door-in-the-face / extreme anchor first. Manipulation-coded. **Plugin verdict:** defensive mention in the defensive skill; do not productise as offensive tactic. `[Claude+Codex]`
10. **Frame breaks for defensive use** (Goffman). `[Claude+Codex]`
11. **Left-hand column** (Argyris/Schein). Write what you're thinking vs. saying — gap reveals the frame you accepted. **Plugin verdict:** defensive technique in the defensive skill. `[Claude+Codex]`
12. **Narrative reframing** (Watzlawick *Change* 1974). **Plugin verdict:** subtype of reframe class. `[Claude]`

### A.6 The recovery loop — most defensible original synthesis `[Consensus: 3/3]`

The recovery loop ("read the miss → release → shift class → redeploy") is the **most defensible original synthesis** in Hughes, even if no individual step is novel. After cross-pollination:

- **Miss-type taxonomy.** All three converge on **at least three**, with Claude expanding to four:
  - **not-heard** (focus-generation or timing failure — distracted, wrong moment)
  - **heard-and-rejected** (premise conflict — they directly contested the reality frame)
  - **reactance-to-pressure** (control problem — pushed back on the move's coerciveness, not its content) `[Codex+Gemini introduced; Claude adopted]`
  - **wrong-problem-frame** (the move answered the wrong question) `[Claude]`

  Each demands a different next move:
  - not-heard → re-pace with better timing or pre-frame
  - heard-and-rejected → release; switch class to resonance or concession
  - reactance → switch to no-oriented question or autonomy-restoring elicitation
  - wrong-problem-frame → reframe question

- **Release the frame** maps to Voss "tactical empathy without ego attachment" / Argyris double-loop / Schein on relationship repair. Hughes's "trying is the opposite of having" is rhetorically stronger than the academic versions; the empirical version is that **visible salvage behaviour lowers perceived confidence**. `[Consensus: 3/3]`

- **Class-shift** is the **load-bearing move**. The failure mechanic is salvage behaviour — repeating the same class with cleaner wording. "Pace harder after pacing failed" compounds the visible-effort tell. `[Consensus: 3/3]`

- **Redeploy with more information**. Boxer-jab metaphor. The second attempt has *more* information than the first because failure-data revealed what the listener protects.

### A.7 Defensive read — detecting frames installed *on* you `[Consensus: 3/3 on the need; disagreement on the right level of abstraction — see B.2]`

Detection cues, with corroborating literature:

- **Heritage's optimisation principle** — questions grammatically pre-load preferred answers; "some" vs. "any" steers participants toward problem-disclosing or problem-suppressing responses. *Read the question as designed before answering.* `[Claude]`
- **Goffman frame breaks** — a rupture renders the frame momentarily visible; produce small frame-breaks to test what frame is running. `[Claude+Codex]`
- **Argyris/Schein left-hand column** — gap between what you are *thinking* and what you are *saying* reveals the frame you accepted. `[Claude+Codex]`
- **`ladder-of-inference` (already in plugin)** — descend from a belief to verify it isn't built on a presupposition smuggled into selected data.
- **Lakoff "don't negate the frame"** — rebutting in the frame's vocabulary ratifies it. `[Consensus: 3/3]`
- **Presupposed decisions** ("since we're moving forward…", "as we discussed…", "now that we've established…") — grammatical clauses that treat a future or unconfirmed fact as already established. `[Consensus: 3/3]`
- **Role assignment** — diagnostic questions cast you as the explainer/evaluatee. `[Claude+Codex]`

### A.8 Ethics — where the line sits `[Consensus: 3/3]`

Hughes's claim that the doctor/boss/parent are "not consciously manipulating" is **partially defensible and partially convenient** — defensible because most frame control is unconscious skill, convenient because it sidesteps responsibility once the user *now does* know the architecture.

**Operational rule**, derived from Lakoff's framing-vs-propaganda line:

> The plugin allows clarifying shared goals, naming unspoken costs, challenging false binaries, resisting hidden presuppositions, and drafting **truthful** conversation openers. The plugin **refuses** fabricated urgency/scarcity, fake alignment, knowingly false presuppositions, attempts to corner someone into consent they would not recognise if stated plainly, and tactics that obscure rights/options/material consequences.

**Plugin position to adopt:** the framing skills are **diagnostic and defensive by default**, and *opt-in to offensive only when the user names a peer or higher-status counterpart in a recognised adversarial context*. The Completion section of the offensive skill includes an audit clause: *"Is the counterpart a peer or higher-status adversary? If they are subordinate, vulnerable, or unknowing, the offensive deployment is refused and the skill returns only the defensive read."* Hughes himself does not draw this line; the plugin should draw it for him. `[Consensus: 3/3]`

---

## B. Plugin extension proposals

### B.1 Skill inventory — recommended set with preserved disagreement

**The core converged proposal**: split Hughes's 5+5 architecture into separate offensive / defensive / recovery skills, all in the **Communication** category. `[Consensus: 3/3]` *(All three originally entertained a new "Conversation" category; all three converged on "expand Communication" after refinement.)*

| Concept | Claude name (4 skills) | Codex name (3 skills) | Gemini name (3 skills) | Load-bearing move |
|---|---|---|---|---|
| Offensive planning | `frame-control` | `conversation-framing` | `frame-control` | Reading the **frame already running** before speaking `[Consensus: 3/3]` |
| Defensive scan | `presupposition-detector` | `frame-audit` | `frame-defense` | Premise-before-rebuttal extraction (Codex/Gemini) **or** surfacing the unstated assumption embedded as fact (Claude) |
| Post-miss repair | `conversational-recovery` | `frame-recovery` | `conversational-recovery` | **Class-shift after the miss** `[Consensus: 3/3]` |
| Concession + ask pairing | `concession-then-ask` (standalone) | (subroutine inside `conversation-framing` and `frame-recovery`) | (sub-bullet inside `frame-control`) | Pre-emptive disclosure that earns the hard question |

**Total new skills**: **3 minimum, 4 if the maintainer agrees with Claude on `concession-then-ask` as standalone.** Plugin grows 25 → 28 or 25 → 29. Communication category grows 2 → 5 or 2 → 6, finally giving it parity with Systems Thinking (5).

**Rejected candidates** `[Consensus: 3/3]`:
- `reframe` — covered by `abstraction-laddering` (climb-up). Add cross-reference, not a new skill.
- Per-class standalones (`pacing-and-leading`, `resonance-statement`) — too granular; plugin splits on mechanism, not menu.
- `tactical-empathy` (Voss-flavoured) — ~95% overlap with the offensive skill's Resonance class. Cite Voss heavily; do not split.

### B.2 Mega vs micro — preserved disagreement on `concession-then-ask`

This is the **load-bearing disagreement** between the three analyses. Both positions are defensible.

**Position A — `concession-then-ask` is standalone (4-skill bundle).** `[Claude]`

> The load-bearing move (the *real* concession that voices the loaded objection — Voss's accusation audit form) has its own failure mechanic (trivial / fake / wrong-target concession) and its own audit clause. Folding it into a generic skill dilutes that audit. The Ackerman bargaining model (65/85/95/100) gives concession its own *quantitative* discipline that has no analog in any other Hughes class. Worth a dedicated skill.

**Position B — `concession-then-ask` is a subroutine (3-skill bundle).** `[Codex+Gemini]`

> Concession is real and valuable, but its trigger surface is narrower than the offensive skill's, and its best uses are usually nested inside a broader frame-read or recovery job. Promoting every strong 2-move pattern to top-level skill status fragments Communication too quickly. Better as a named branch inside the offensive skill, a named repair option inside the recovery skill, and a cross-route from SBI when the recipient is defensive.

**Recommended decision rule for the maintainer:** *if the plugin philosophy values per-mechanism granularity (current pattern: balancing-feedback-loop split from reinforcing-feedback-loop), ship 4. If the plugin philosophy values minimum-discoverable-surface, ship 3.* The skill drafts in B.3 below cover both: §B.3.3 (`concession-then-ask`) is included so the maintainer can take it standalone or copy its content into the offensive skill's Loop.

### B.3 Full SKILL.md drafts (audit-clean per `.gnhf` convention)

The plugin's `.gnhf` audit (runs #57–#60 closed cross-layer drift) checks that the load-bearing move named in the description appears verbatim or near-verbatim in: Priorities, Role, Input Handling, Example `<thinking>` block, and Completion. All drafts below are written to that standard. Pick the naming you prefer (`frame-control` vs `conversation-framing`, `presupposition-detector` vs `frame-audit`, etc.) — the audit cleanliness survives a global rename.

#### B.3.1 — `skills/frame-control/SKILL.md` (offensive primary)

> Source draft: `[Claude]`. Codex's `conversation-framing` and Gemini's `frame-control` cover the same surface with shorter Loops; this draft is selected for completeness, audit cleanliness, and explicit Round 0 pre-suasion check (a `[Codex]` improvement Claude integrated). Loop steps 4–5 (mirror-vs-label split, identity-stake as Presupposition sub-type, no-oriented as elicitation option) absorb refinements from all three peers.

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

Act as a conversational-architecture coach in the lineage of Voss's tactical empathy, Cialdini's pre-suasion, Goffman's frame analysis, Schein's process consultation, Heritage's question-design work in conversation analysis, and Oyserman's identity-based motivation. The skill plans a two-move sequence — a statement that installs a frame, followed by a question that locks the listener inside it via preference-organisation pressure (dispreferred second-pair-parts cost the listener delay/mitigation/account-giving) — for one specific upcoming exchange. The load-bearing move is reading the frame already running in the room before drafting either move, because a statement+question deployed into an unread room is a naked attempt operating inside whichever frame is already there — typically the higher-status party's — and reinforces that frame instead of seizing it. The structural failure mode is selecting a statement class without first naming what the listener is currently holding (authority / adversarial / emotional / narrative) — every later step then optimises the move for the wrong frame.

Skip when the conversation has not yet happened and the user wants pure introspection (route to `ladder-of-inference` to check own assumptions first), when the counterpart is subordinate, vulnerable, or unaware (the offensive deployment is refused on ethical grounds — return only the defensive frame-read), and when the upcoming exchange is delivery of specific feedback on a specific incident (route to `situation-behavior-impact` and let it consume the frame-read as input).

## Loop

1. **Round 0 — Pre-suasion check**: `AskUserQuestion`: "Can you install the frame *before* the room (subject line, agenda, pre-read, Slack preamble, who is in the meeting)?" Cialdini-style pre-suasion is often the highest-leverage move and happens before the live exchange. If yes, draft the pre-frame artefact first.
2. **Round 1 — Frame-read**: `AskUserQuestion`: "What frame is already running in the room?" Recommend based on counterpart description (authority / adversarial / emotional / narrative / unread). Refuse to draft until this round is answered — this is the load-bearing move.
3. **Round 2 — Counterpart status check**: `AskUserQuestion`: "Is the counterpart a peer, higher-status, or subordinate?" If subordinate or vulnerable, end loop and return defensive frame-read only.
4. **Round 3 — Statement class**: Recommend the class that matches the read (authority → resonance via label, or concession; adversarial → alignment; emotional → resonance via label or mirror; narrative → reframe via question, statement opens with pacing). Mirror vs. label is named explicitly within Resonance. Identity-stake (Oyserman) named as a Presupposition sub-type. 2–3 alternatives with tradeoffs.
5. **Round 4 — What-they-need-to-do-next**: `AskUserQuestion`: "What do you need them to do in the next 30 seconds?" — this picks the question class (arrive at conclusion → directional, optionally as a Heritage-style optimised question; act as if decided → assumptive; hand over information → elicitation, optionally as Voss no-oriented; see different lens → reframe; cede evaluator role → diagnostic).
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

- Frame-already-running read as load-bearing audit: the running frame is named (authority / adversarial / emotional / narrative) with one piece of evidence from the counterpart's recent behaviour or words; if the frame was not read before the statement was drafted, the load-bearing move has failed — the planned statement+question is a naked move operating inside whichever frame was already there — and the loop re-runs from Round 1 with the frame-read filled in.
- Pre-suasion artefact (if Round 0 produced one): verbatim text of the agenda line / subject / pre-read, with a one-line justification of what frame it installs before the room.
- Counterpart-status check: peer or higher-status → offensive deployment authorised; subordinate or vulnerable → offensive deployment refused, return only the defensive read of what the *user* is being framed into.
- Verbatim statement + verbatim question pair, with statement class and question class named (mirror vs label distinguished in Resonance; Heritage-optimised vs neutral distinguished in Directional; identity-stake flagged when used in Presupposition), and a one-line justification linking each class back to the frame-read in Round 1.
- Truthfulness check: any presupposition or assumptive question is verified as a *truthful* state (not fabricated). Fake alignment, fabricated urgency, or knowingly false presuppositions cause the draft to be rewritten.
- Recovery plan: the *different* statement class to switch to if the planned move lands in dead air (not-heard miss → focus-generation problem) or hits a held frame (heard-and-rejected miss → switch class, do not deploy the same class harder); recovery follows `conversational-recovery` if the user wants the full loop.
- Residual: any naked-question instinct the user brought in ("just ask the VP what they want") is flagged with the frame it would have reinforced; any motive inference about the counterpart that is not video-frame observable is flagged for `ladder-of-inference` rather than smuggled into the frame-read.
```

#### B.3.2 — `skills/presupposition-detector/SKILL.md` (defensive)

> Source draft: `[Claude]`. Codex's `frame-audit` argues for a broader load-bearing move ("premise-before-rebuttal extraction") that subsumes presupposition detection alongside role-assignment and preferred-answer-design detection. Gemini's `frame-defense` lands closer to Claude's narrower naming. The draft below uses Claude's narrower load-bearing move; **if the maintainer prefers Codex's wider scope, swap the description / Priorities / Role lines below for "premise-before-rebuttal extraction" and add role-assignment / preferred-answer-design steps to Round 2.** The Loop, Example, and Completion structure transfers cleanly.

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

Act as a defensive frame-reader in the lineage of Goffman's frame analysis (frame breaks expose the running frame), Argyris's left-hand column (gap between what is said and what is presupposed), Heritage's question-design work (optimisation principle: questions grammatically prefer specific answers), and Lakoff's "don't negate the frame" caution (rebutting in the frame's vocabulary ratifies it). The skill takes an inbound artefact — email, agenda, doc, redline, slack thread — and lists every presupposition it embeds. The load-bearing move is surfacing the unstated assumption embedded as fact in the grammar, because letting the grammatical embedding pass uncontested into the user's response ratifies the frame and makes future challenge structurally costly — the listener's brain treats the grammar-embedded assumption as already-established and skips the audit. The structural failure mode is paraphrasing the inbound at face value (extracting only the explicit claims) — this misses the grammatically-embedded claims, which are precisely the ones doing the framing work.

Skip when the inbound is already explicit and unambiguous (no embedded claims to surface — straightforward request, factual update), when the user has already decided to accept the inbound's framing and is asking for execution help (route to the relevant decision skill), and when the inbound is a hostile attack where the load-bearing question is whether to engage at all rather than how to respond inside the frame (route to `conflict-resolution-diagram`).

## Loop

1. **Round 1 — Artefact ingest**: confirm what the inbound is (email / agenda / doc / thread) and Read it; identify the sender's status relative to the user (peer / higher / subordinate).
2. **Round 2 — Surface presuppositions**: list each grammatically-embedded assumption verbatim, paired with the explicit claim it rides on top of. Format: "*Says:* X. *Presupposes:* Y." Include question-design observations where present (Heritage-style optimised questions that grammatically prefer one answer; "some" vs "any" steering). Do not editorialise; just surface.
3. **Round 3 — Triage the surfaced list**: `AskUserQuestion`: "Which surfaced presuppositions are the ones that, if you accept silently, will frame the rest of this exchange?" Recommend the highest-leverage one with rationale.
4. **Round 4 — Response-option menu** for each load-bearing presupposition: `AskUserQuestion`: "How do you want to handle this one?" — accept (and own the consequence) / contest explicitly (name the assumption, refuse it without negating in its vocabulary) / reframe (replace the frame with a different one — route to `frame-control`) / strategic silence (do not respond, let it die).
5. **Round 5 — Draft response**: produce the verbatim response that handles each surfaced presupposition per the user's chosen option.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Inbound artefact as topic or Path — Read the artefact in full first; extract every clause that uses "since", "given that", "as we discussed", "now that", "obviously", "clearly", "of course", or any tense/aspect combination that treats a future event as already underway ("when we roll out", "once we've moved forward"). Also extract every question whose grammar pre-loads a preferred answer (Heritage's optimisation principle: "you don't have any concerns, do you?", "is there anything else?" vs "is there something else?").
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

- Surfaced-presupposition list as load-bearing audit: every grammatically-embedded assumption in the inbound is named verbatim with the format "Says: X. Presupposes: Y."; if any "since" / "given that" / "now that" / "when we" / "once we've" clause survives unsurfaced, or any Heritage-style optimised question goes unflagged, the load-bearing move has failed — the user's response would silently ratify the frame and make future challenge structurally costly — and the surfacing pass re-runs.
- Triage: each surfaced presupposition tagged accept / contest / reframe / strategic-silence with one-line rationale; the load-bearing one (the one that frames the rest of the exchange) is named explicitly.
- Drafted response that handles each load-bearing presupposition per the chosen option; if "contest" was chosen, the response names the assumption explicitly ("I haven't agreed to the reorg, so before drafting comms…") rather than negating in the frame's vocabulary (Lakoff: "don't negate the frame").
- Residual: any presupposition the user chose to "accept" gets flagged with the consequence ("you have now ratified the reorg frame; future contest will require an explicit re-open"); reframe choices route to `frame-control` for counter-frame drafting; any belief about the sender's intent that is not evidenced gets flagged for `ladder-of-inference` rather than smuggled into the surfacing.
```

#### B.3.3 — `skills/concession-then-ask/SKILL.md` (optional standalone)

> Source draft: `[Claude]`. Include this as a standalone skill if the maintainer wants per-mechanism granularity (Position A in §B.2). Otherwise, copy Loop steps 1–4 into `frame-control`'s Round 3 as a named "concession-then-ask" branch (Position B). Either way, the failure-mechanic discipline (trivial / fake / wrong-target concession) and the Ackerman 65/85/95/100 numerical-anchor option survive into the audit.

```markdown
---
name: concession-then-ask
description: Pairs a concession statement (acknowledging a cost, limitation, or mistake before the counterpart forces it) with the hard question the concession earned the right to ask. Load-bearing is the pre-emptive disclosure that makes the hard question askable, because asking the hard question without conceding the cost first reads as arrogant and triggers the counterattack the concession was supposed to disarm. Use before raising a sensitive negotiation point, before asking for budget/time/scope after a missed commitment, after delivering critical SBI feedback when you want to ask "why", or when the user says "I need to ask a hard question", "they're going to push back", "concession", "accusation audit", or "Ackerman".
allowed-tools: AskUserQuestion, Read
---

# Concession-Then-Ask

## Priorities

```
Pre-emptive disclosure > Hard-question authorisation > Counterattack disarmament > Closure
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

#### B.3.4 — `skills/conversational-recovery/SKILL.md` (post-miss repair)

> Source draft: `[Claude]`. Loop step 2 absorbs Codex's four-way miss-type taxonomy (Claude expanded from a coarser two-way split after refinement). Codex calls this `frame-recovery`; Gemini calls it `conversational-recovery`. Drafts are otherwise structurally identical.

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

Act as a post-miss conversation repair coach in the lineage of Voss's tactical-empathy recovery (label the negative, accusation-audit the likely objection, then ask a calibrated question), Argyris's double-loop learning (interrogate the governing assumption, not just the move), and Hughes's recovery loop. The load-bearing move is class-shift after the miss: if a pacing opener bounced, do not pace harder; if an alignment bid was rejected, do not restate alignment more earnestly; if a directional question hit a wall, do not ask the same question with a different inflection. The structural failure mode is salvage behaviour — repeating the same class with cleaner wording — because that compounds the visible-effort tell that "trying is the opposite of having" and turns the recovery attempt into evidence of weakness.

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
- Class-shift after the miss is the first move, not a tone adjustment — refuse to draft a redeploy that uses the same class as the failed move; that is salvage behaviour, not recovery, and it compounds the visible-effort tell. If the user insists the same class will work "if I just say it better", flag this as the failure mechanic Hughes warns against and re-run miss-type diagnosis.
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

- Class-shift after the miss as load-bearing audit: the original class is named, the replacement class is named, and they are *different*; if the recovery draft still relies on the same class as the failed move (pacing-rejected → another pacing line, alignment-rejected → another alignment bid), the load-bearing move has failed — pace-harder-after-pacing-failed is the salvage-behaviour failure mechanic and the recovery itself becomes evidence of weakness — and the loop re-runs from Round 2 with a different class selected.
- Miss-type diagnosis with evidence from the actual response sequence, not the user's feeling about it; the miss is tagged not-heard / heard-and-rejected / reactance / wrong-problem-frame.
- Release: the exact line, premise, or pressure pattern that is now dropped, named verbatim.
- Second-attempt script: one redeploy line + one safer variant; both in a *different* class from the failed move.
- Stop condition: if the second attempt also fails (third-miss scenario), the recovery exits with a recommendation to widen the issue, pause, request explicit meta-conversation ("can we step out of this for a sec — what's the actual conversation we should be having?"), or route to `conflict-resolution-diagram` if the conflict appears structural.
- Residual: any same-class salvage instinct the user brought in is flagged with the failure mechanic name; any belief about the counterpart's motive that is not video-frame observable is flagged for `ladder-of-inference`; ethical refusal triggered if the counterpart is subordinate.
```

### B.4 Command-wrapper drafts (one per skill)

```markdown
# commands/frame-control.md
---
description: Plan the statement+question pair that installs your frame in an upcoming conversation, after first reading the frame already running and checking for pre-suasion leverage
argument-hint: [conversation context — counterpart, recent friction, what you suspect they're holding]
---

# /thinking-systems:frame-control

Plan a frame-setting statement plus the question that locks the listener inside it (via preference-organisation pressure on the second-pair-part), *after* reading the frame already running and checking whether a pre-suasion artefact (subject line, agenda, pre-read) can install the frame before the room. Thin wrapper around the `thinking-systems:frame-control` skill.

## Usage

```
/thinking-systems:frame-control 1:1 with VP tomorrow about the missed Q3 deadline; I always end up agreeing to more work
/thinking-systems:frame-control negotiate the contract clause about IP ownership with our enterprise customer's GC
```

## Behavior

Parse the conversation context from `$ARGUMENTS`. If empty, ask: `"What conversation are you preparing for? Name the counterpart, their status relative to you, and the most recent friction point."`.

Invoke the skill: `Skill(thinking-systems:frame-control, args: "$ARGUMENTS")`
```

```markdown
# commands/presupposition-detector.md
---
description: Scan an inbound message, agenda, or doc for assumptions embedded as already-established fact (and Heritage-style optimised questions that grammatically prefer one answer), then plan whether to accept, contest, or reframe each
argument-hint: [path-to-inbound or quoted text of the inbound]
---

# /thinking-systems:presupposition-detector

Surface the presuppositions in an inbound artefact before you respond, so your reply does not silently ratify a frame you did not agree to. Thin wrapper around the `thinking-systems:presupposition-detector` skill.

## Usage

```
/thinking-systems:presupposition-detector ./email-from-boss.md
/thinking-systems:presupposition-detector "Since we're moving forward with the reorg, can you draft the comms plan by Friday?"
```

## Behavior

Parse the inbound from `$ARGUMENTS`. If a path is given, Read it. If empty, ask: `"What inbound message, agenda, or doc do you want scanned for embedded assumptions?"`.

Invoke the skill: `Skill(thinking-systems:presupposition-detector, args: "$ARGUMENTS")`
```

```markdown
# commands/concession-then-ask.md
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

Invoke the skill: `Skill(thinking-systems:concession-then-ask, args: "$ARGUMENTS")`
```

```markdown
# commands/conversational-recovery.md
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

Invoke the skill: `Skill(thinking-systems:conversational-recovery, args: "$ARGUMENTS")`
```

### B.5 Cross-skill modifications to existing skills `[Consensus: 3/3 on substance; wording from Claude where most concrete]`

| File | Edit |
|---|---|
| `skills/situation-behavior-impact/SKILL.md` | Add Skip case: *"Skip when the recipient is hostile or higher-status and you have not yet read the frame they are running — SBI's Behavior+Impact lands inside whichever frame the recipient already holds, so route to `frame-control` first to read and (if needed) re-frame, then return to SBI for the verbatim delivery."* Optional Loop addition after Intent round: optional concession-check round routing to `concession-then-ask` when the SBI is critical and the recipient has paid a real cost. |
| `skills/conflict-resolution-diagram/SKILL.md` | Add a flag step before the loop: *"Before extracting positions, run a presupposition pass on each party's stated demand: if the demand is grammatically-embedded ('since we already agreed X, you must Y') rather than a clean interest claim, surface the embedded assumption first via `presupposition-detector` — otherwise the diagram resolves a conflict between two presuppositions, not two interests, and the resolution will not hold."* |
| `skills/minto-pyramid/SKILL.md` | Add to Role: *"The audience-fit check is structurally a frame-fit check: the apex is right when it answers the question the reader is *already framing the document inside*. For a hostile or skeptical reader, route to `frame-control` first to read the frame they are bringing to the document — the apex written for 'exec deciding Go/No-Go' lands wrong on 'exec already-decided-No looking for confirmation'."* |
| `skills/abstraction-laddering/SKILL.md` | Add to Skip: *"When the 'stuck problem' is actually a stuck *conversation* rather than a stuck problem definition (e.g., 'we keep arguing about budget' — the budget framing is the lock), route to `frame-control`'s reframe-question class instead — the climb-up move on a conversational frame is structurally the same as climbing up the why-rung, but the deployment is a single sentence in dialogue rather than a problem-statement rewrite."* |
| `skills/ooda-loop/SKILL.md` | Add to Orient: *"Frame-reading — naming which frame is already running in the room (authority / adversarial / emotional / narrative) — is an Orient act; for explicit frame-control planning of a statement+question pair, route to `frame-control` and let it consume the Orient output as its Round 1 input."* |
| `skills/ladder-of-inference/SKILL.md` | Add to Skip: *"For an incoming loaded message or question that may be installing a frame on the user, route to `presupposition-detector` before descending the ladder — descending from a frame the user accepted unconsciously starts the ladder one rung too high."* |

### B.6 README.md and CHANGELOG.md updates

#### `README.md`

```diff
-| **Communication** | `situation-behavior-impact`, `minto-pyramid` |
+| **Communication** | `situation-behavior-impact`, `minto-pyramid`, `frame-control`, `presupposition-detector`, `concession-then-ask`, `conversational-recovery` |
```

(If the maintainer ships 3 instead of 4, drop `concession-then-ask` from the Communication row.)

Auto-trigger examples to add:

```diff
+- "I have a 1:1 with my VP and always end up agreeing to more work" → `frame-control`
+- "Scan this email for assumptions before I respond" → `presupposition-detector`
+- "I need to ask for an extension but we already missed the last one" → `concession-then-ask`
+- "That opener landed badly — how do I recover?" → `conversational-recovery`
```

Credits expansion:

```diff
-Methods are classical thinking frameworks (Eisenhower, de Bono, Boyd, Snowden, Goldratt, Ackoff, Minto, and others). Individual attributions appear in each skill where relevant.
+Methods are classical thinking frameworks (Eisenhower, de Bono, Boyd, Snowden, Goldratt, Ackoff, Minto, and others) plus modern conversational-architecture work (Goffman, Lakoff, Voss, Cialdini, Schein, Argyris, Watzlawick, Heritage, Oyserman). Individual attributions appear in each skill where relevant. The framing skills synthesise material from multiple traditions and do not endorse any single course or paid program; Chase Hughes's public video is credited as one contemporary restatement of the statement+question architecture, cross-checked against deeper traditions rather than treated as authoritative.
```

#### `CHANGELOG.md`

```markdown
## [0.2.0] - 2026-04-26

### Added

- Framing-tactics skills in the Communication category (and matching slash commands):
  - **frame-control** — plan a statement+question pair after reading the frame already running; includes Round 0 pre-suasion check.
  - **presupposition-detector** — defensive scan of an inbound for grammatically-embedded assumptions and Heritage-style optimised questions.
  - **conversational-recovery** — class-shift recovery loop after a missed frame, with four-way miss-type diagnosis (not-heard / heard-and-rejected / reactance / wrong-problem-frame).
  - *(optional)* **concession-then-ask** — pair a real pre-emptive disclosure (or Ackerman 65/85/95/100 numerical anchor sequence) with a hard question.

### Changed

- `situation-behavior-impact` — added skip-and-route to `frame-control` when recipient is hostile/higher-status; added optional concession-check round.
- `conflict-resolution-diagram` — added presupposition-surfacing pass before extracting positions.
- `minto-pyramid` — added frame-fit framing of the audience-fit check; routes to `frame-control` for hostile/skeptical readers.
- `abstraction-laddering` — added skip-and-route to `frame-control` when the "stuck problem" is a stuck conversation.
- `ooda-loop` — added explicit framing of frame-reading as an Orient act; routes to `frame-control` for explicit statement+question planning.
- `ladder-of-inference` — added skip-and-route to `presupposition-detector` for incoming loaded messages.
- README.md — Communication category expanded; auto-trigger examples expanded; Credits expanded to name modern conversational-architecture lineages including Heritage and Oyserman.
```

---

## C. Open-question resolutions (per the original §5.3)

### C.1 — One mega-skill or many micro-skills?

**Resolved**: split into **3 skills minimum** (offensive / defensive / recovery), with `concession-then-ask` either standalone (Position A — Claude) or folded as a subroutine (Position B — Codex+Gemini). See §B.2 for the decision rule. **No mega-skill.** **No per-class micro-skills.** `[Consensus: 3/3 on the rejection of both extremes]`

### C.2 — Load-bearing move for the offensive primary skill?

**Resolved**: **identifying the frame already running before speaking.** `[Consensus: 3/3]` (Codex names it "frame-already-running diagnosis"; Gemini names it "frame-already-running read"; Claude names it "reading the frame already running" — same move.)

Pressure-tested against three alternatives, all three rejected by all three analyses:
- *Statement-before-question discipline* — too procedural; symptom of frame-reading, not the cause. (Codex: "can be followed ceremonially while still optimising the opener for the wrong room.")
- *Recovery loop* — load-bearing for the recovery skill, not the primary.
- *Pairing rule* — describes the architecture, not the load-bearing move.

### C.3 — How much NCI / Hughes lineage to cite?

**Resolved** `[Consensus: 3/3]`: cite the **architecture**, not the **brand**. One sentence in the offensive skill's Role: *"synthesises Hughes's recent restatement (2020s) of older traditions (Voss 2016, Cialdini 2016, Schein 2013, Heritage 2010, Watzlawick 1974, Goffman 1974, Bandler-Grinder 1975)"*. **No** NCI courses, **no** NCI-branded vocabulary ("Behavior Operations Manual"), **no** endorsement of credentials. Independent credibility critiques of Hughes exist; the architecture is a re-synthesis and the older traditions are the load-bearing citations.

### C.4 — Defensive vs offensive split?

**Resolved** `[Consensus: 3/3]`: **SPLIT into separate skills.** Matches the existing house pattern (`situation-behavior-impact` offensive, `ladder-of-inference` defensive), lowers cognitive load (the user knows which skill by the verb in their prompt), and lets each skill have a tight load-bearing audit. Mode flags on a single mega-skill would dilute both audits.

### C.5 — Routing rules for the example user prompts

| Prompt | Route | Reasoning |
|---|---|---|
| "Help me write feedback for X" | `situation-behavior-impact` (existing) | Unless the recipient is hostile or higher-status. `[Consensus: 3/3]` |
| "Help me write feedback for X, but they outrank me / always get defensive" | `frame-control` first → consume frame-read → `situation-behavior-impact` | SBI's Behavior+Impact lands inside whichever frame the recipient already holds. `[Consensus: 3/3]` |
| "Negotiate this contract clause" | `frame-control` is primary | Routes to `concession-then-ask` if user has a real concession; to `presupposition-detector` if the redline contains embedded assumptions; to `conversational-recovery` if a prior round bounced. `[Consensus: 3/3]` |
| "Why does my 1:1 with my manager always end with me agreeing to more work?" | `presupposition-detector` first (defensive scan of the manager's typical agenda framing — "since you took on the prioritisation role…"), then `frame-control` (offensive prep with pre-suasion via a one-line pre-meeting agenda re-frame) | Explicitly *not* `eisenhower-matrix` for the workload — solving inside the frame the user is losing to. `[Consensus: 3/3]` |
| "Why does this email feel loaded?" | `frame-audit` / `presupposition-detector` | `[Consensus: 3/3]` |
| "I already tried a line and it landed badly" | `conversational-recovery` | `[Consensus: 3/3]` |
| "Am I overreading their intent?" | `ladder-of-inference` (existing) | `[Consensus: 3/3]` |

---

## D. Risks, disclaimers, non-surviving claims

### D.1 What in Hughes does *not* survive cross-validation

- **The polemic against "ask better questions."** `[Consensus: 3/3]` Hughes overstates this. Heritage's optimisation principle and CA preference-organisation show that *question design itself* installs preference and roles, independently of any prior statement. Calibrated questions (Voss) and no-oriented questions do real work alone. Plugin should adopt Hughes's pairing rule as the *strongest* configuration, not the only valid one.
- **Pacing as "almost always works."** `[Claude+Codex]` Folk-neuroscience claim. Empirical version (consistency-principle / yes-set) is real but moderate, not deterministic. Recovery loop exists precisely because it doesn't always land.
- **Resonance as universally "most powerful."** `[Claude]` Voss's data supports labelling/tactical-empathy as high-leverage in *negotiation* contexts; generalising to all conversation is a stretch. Let the frame-read drive class selection, not abstract power-rankings.
- **NLP heritage of presupposition.** `[Consensus: 3/3]` NLP wider claims rejected by mainstream psychology (Witkowski 2010; Sturt et al. systematic review). The presupposition phenomenon survives via Lakoff/Boroditsky/Tversky-Kahneman; the NLP framing should not be inherited.
- **"Trying is the opposite of having" as a theorem.** `[Claude+Codex]` Rhetoric, not literature-backed. Translate to observable advice: visible salvage behaviour lowers perceived confidence and raises reactance.
- **The "consciously manipulating" exemption.** `[Consensus: 3/3]` Defensible for unconscious skill, indefensible once the user has been taught the architecture. The plugin's ethical guardrail (refuse offensive deployment against subordinates) is the operational fix.
- **Neuro-style mechanism claims for pacing and agreement cascades.** `[Codex]` Not well-evidenced for plugin copy.
- **Implication that the method is a near-magical dominance system.** `[Codex]` The literature supports framing effects, not deterministic control.

### D.2 Product risks

1. **Manipulation drift** — The skill can slide from honest structuring into obscuring options or smuggling false defaults. **Mitigation**: explicit refusal rules and ethical audit clauses in Completion. `[Consensus: 3/3]`
2. **Paranoia drift on the defensive side** — A frame-audit tool can teach users to over-read routine coordination as hostile strategy. **Mitigation**: require the skill to distinguish loaded structure from harmless shorthand. (Gemini calls this the *"Othello Error"* — a useful internal name.) `[Consensus: 3/3]`
3. **Ceremonial use** — Users may memorise statement classes and question classes as a 25-cell lookup table — exactly what Hughes himself rejects. **Mitigation**: force frame diagnosis before scripting; keep the recovery loop central. `[Consensus: 3/3]`
4. **Overweighting practitioner doctrine** — Voss-style moves are useful but not equivalent to broad peer-reviewed science. **Mitigation**: cite as practitioner traditions, not settled experimental law. `[Codex]`
5. **Reactance Boomerang** — Over-using Assumptive or Directional questions with peers can trigger resistance. **Mitigation**: recommend autonomy-supportive language (Brehm "But You Are Free") as a default wrapper. `[Gemini]`
6. **Context Collapse** — Pacing statements can feel uncanny in low-fidelity text (Slack, email). **Mitigation**: warn against "naked pacing" in non-video environments. `[Gemini]`

### D.3 When the plugin should *not* invoke these skills `[Consensus: 3/3]`

- **No human counterpart named.** Skills auto-trigger only on prompts that name a counterpart (person, role, "my manager", "the client"). Solo analysis, debugging, refactoring → no auto-fire.
- **Subordinate or vulnerable counterpart.** `frame-control` and `concession-then-ask` offensive deployments are refused. Defensive `presupposition-detector` always runs.
- **Asynchronous polish, not strategy.** If the user has already written the message and needs an edit pass, route to `minto-pyramid` for restructure, not the framing suite.
- **Therapeutic / clinical / mental-health contexts.** Hughes's "talk to a schizophrenic" example is glib; the plugin explicitly refuses to operate on described mental-health-crisis interactions and routes to professional help. `[Claude]`
- **Pure factual exchanges.** Bug triage, data summarisation, sprint planning without interpersonal conflict — no framing suite.
- **Concrete do-not-route cases**: ADRs, root-cause analysis, feature decomposition, sprint prioritisation without conflict, pure data summarisation. `[Claude]`

### D.4 Citation hygiene `[Consensus: 3/3 on substance]`

| Source | Treatment |
|---|---|
| **Hughes himself** | Independent credibility critiques exist (multiple debunking videos; Reddit threads questioning NCI claims). Plugin does not endorse credentials, courses, or "Behavior Operations Manual" branding. The architecture is a re-synthesis; credit the older traditions and treat Hughes as the most recent restater. |
| **NCI / Behavioral Table of Elements** | Do not link, do not adopt vocabulary, do not name paid courses. |
| **NLP** | Cite the *technique* (presupposition-as-grammatical-embedding) but flag that mainstream psychology rejects most of NLP's broader claims (Witkowski 2010; Sturt et al.). Redirect to cognitive-linguistics (Lakoff, Boroditsky) and behavioural-economics (Tversky-Kahneman) for empirical backing. |
| **Voss / Cialdini / Schein / Goffman / Heritage / Oyserman / Watzlawick / Argyris / Fisher-Ury / Brehm** | Cite freely. Mainstream-respected, peer-reviewed where applicable. Voss's tactical-empathy claims have field-data backing; Cialdini's experiments are heavily replicated; Schein and Goffman are foundational; Heritage's CA work is the empirical anchor for question-design framing; Oyserman's IBM is widely cited in social cognition. |

---

## Final recommendation

Ship a **3-or-4-skill Communication bundle** in plugin v0.2.0:

1. **`frame-control`** (offensive primary) — load-bearing: reading the frame already running.
2. **`presupposition-detector`** (defensive) — load-bearing: surfacing the unstated assumption embedded as fact (or, per Codex, premise-before-rebuttal extraction; either passes the audit if applied consistently).
3. **`conversational-recovery`** (post-miss repair) — load-bearing: class-shift after the miss.
4. *(optional)* **`concession-then-ask`** (negotiation primitive) — load-bearing: pre-emptive disclosure that earns the hard question. Ship if maintainer values per-mechanism granularity; fold into `frame-control` Round 3 if maintainer values minimum-discoverable-surface.

Plus the six cross-skill edits in §B.5 and the README/CHANGELOG diff in §B.6.

This preserves what is strongest in Hughes (the pairing architecture and the recovery loop), absorbs what the wider literature supports (CA preference organisation, Heritage's optimisation principle, Voss's mirror/label/no-oriented split, Ackerman discipline, identity-based motivation, pre-suasion), and avoids turning the plugin into either a 25-cell lookup table or a manipulation-coaching tool.

---

## Pipeline report

| Phase | Status | Notes |
|---|---|---|
| **Discovery** | Succeeded | 30KB transcript fetched via `yt-dlp` auto-captions; cleaned + deduped; plugin structure mapped against canonical SKILL.md/command shape; `.gnhf` audit convention identified. |
| **Phase 2 — Independent analyses** | All three succeeded | Claude 65KB, Codex 53KB (after initial timeout retry with reduced reasoning effort), Gemini 16KB (after Pro quota → Flash fallback retries). |
| **Phase 3 — Cross-pollination refinement** | All three succeeded | Claude 86KB, Codex 40KB, Gemini 9.5KB (recovered from stdout — Gemini CLI did not honour file-write request in prompt). |
| **Phase 4 — Synthesis** | Direct | `sdlc:research-synthesizer` agent stream timed out twice; this synthesis was written directly from the three refined files. |

**Consensus findings** (all 3 LLMs converged):
- Communication category, no new Conversation category
- Split offensive/defensive/recovery into separate skills
- Frame-already-running read as offensive load-bearing move
- Class-shift after the miss as recovery load-bearing move
- Reject `reframe` as standalone (covered by `abstraction-laddering`)
- Reject per-class micro-splits
- Hughes as recent restater; cite older traditions; do not endorse NCI
- NLP heritage rejected; presupposition phenomenon survives via Lakoff/Boroditsky/Tversky-Kahneman
- Refuse offensive deployment against subordinate/vulnerable counterparts
- Recovery loop is the most defensible original synthesis
- Naked questions are weaker than framed sequences but not powerless

**Live disagreement** (preserved):
- 4 skills (Claude) vs 3 skills (Codex+Gemini) — disagreement is whether `concession-then-ask` earns its own slot or folds as a subroutine.
- Defensive skill name: `presupposition-detector` (Claude, narrower) vs `frame-audit` (Codex, wider scope) vs `frame-defense` (Gemini).

**Unique single-source contributions worth keeping**:
- `[Claude]` — Pillet-Shore preference organisation as the *micro-mechanism* explaining why a designed first-pair-part "locks" the listener; four-way miss-type taxonomy (not-heard / heard-and-rejected / reactance / wrong-problem-frame).
- `[Codex]` — Heritage's "optimisation principle" as the empirical anchor for directional questions; concession-as-subroutine architectural argument; "premise-before-rebuttal extraction" as the wider load-bearing move for the defensive skill.
- `[Gemini]` — Reactance management / Brehm's "But You Are Free" as the autonomy-supportive language wrapper; *"Othello Error"* internal name for paranoia-drift on the defensive side; warning against "naked pacing" in low-fidelity text channels.

End of synthesis.
