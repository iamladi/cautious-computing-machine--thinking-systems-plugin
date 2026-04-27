# Phase 3 — Refined Analysis: Framing Tactics for `thinking-systems-plugin`

## 0. What changed from my Phase-2 pass

### Strongest parts of my Phase-2 analysis that survive

- The **3-skill bundle** was the right center of gravity: one offensive planning skill, one defensive detection skill, one recovery skill.
- The **recovery loop** was correctly identified as the most distinctive and worth preserving part of Hughes's talk.
- The **ethical split** was directionally right: defensive use is broadly acceptable; offensive use needs narrower permission and explicit refusal cases.

### Weakest parts of my Phase-2 analysis that I am correcting

1. I leaned too hard on tertiary and practitioner summaries in a few places. This pass upgrades the load-bearing literature claims with stronger sources.
2. I overstated how cleanly Hughes's "statement sets / question locks" doctrine maps onto the wider literature. Fresh source checks support **question design as independently consequential**, not merely a lock appended after the real work is done.
3. My earlier recommendation for a new top-level **Conversation** category was overfitted. The repo's taxonomy does not need category churn; these skills belong in **Communication**.
4. I did not sharpen enough why I reject two of Claude's narrower top-level skills. This pass does.

## A. Framing tactics literature — refined, source-backed, and adjudicated

### A1. What survives broader validation

Hughes's talk survives best as a **conversation-planning heuristic**, not as a complete theory of interaction.

The strongest cross-validated claims are:

- Conversations are already organized by a situational frame before the "important" line arrives. Goffman's core question is exactly "What is it that's going on here?" and his account of **primary frameworks** matches Hughes's insistence that the room is never unframed. Source: Goffman, *Frame Analysis* ([Google Books](https://books.google.com/books/about/Frame_analysis.html?id=XBpmAAAAIAAJ)).
- Language shape changes reasoning and preference, even when the underlying facts are held constant. Source: Tversky and Kahneman, "The Framing of Decisions and the Psychology of Choice" ([DOI record](https://cir.nii.ac.jp/crid/1361137044640262784?lang=en)).
- Small wording choices can steer what inferences people generate and what information they go looking for. Source: Thibodeau and Boroditsky, "Metaphors We Think With" ([PLOS ONE, 2011](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0016782)).
- Question format matters on its own. Heritage and Robinson show that physicians' opening question forms change what patients present and correlate with patient satisfaction. Sources: "The structure of patients' presenting concerns" ([PubMed](https://pubmed.ncbi.nlm.nih.gov/16548700/)); "Physicians' opening questions and patients' satisfaction" ([PubMed](https://pubmed.ncbi.nlm.nih.gov/16431070/)).

### A2. The main correction to Hughes: "naked questions" are weaker than framed sequences, not powerless

This is the biggest literature-level correction.

My Phase-2 version and Claude's version both pushed back on Hughes here, and fresh research supports the pushback.

[Consensus with Claude]

Hughes says a question by itself "doesn't really control anything." That is too strong. Heritage and Robinson's medical-interaction work shows that opening-question design changes both the amount/shape of information patients present and how patients evaluate the interaction. That means a question is not merely a passive lock; it is an **interactional steering device in its own right**.

The refined position is:

- **Statement + question** is often stronger than question alone.
- But **question design alone** can still encode asymmetry, assumptions, and preferred next actions.
- Therefore the plugin should not teach "questions are weak." It should teach: **unframed questions often cede more than users realize, but question design still matters materially.**

This matters for plugin wording. Do not make the skill's Role section repeat Hughes's strongest claim verbatim.

### A3. How Hughes's five statement classes hold up

#### 1. Pacing

Keep it, but weaken the mechanism claim.

What survives:

- Describing low-disagreement observable reality is a real rapport and uptake move.
- It resembles recipient-sensitive design and low-resistance openings in institutional interaction.

What does not survive:

- The "critical faculty doesn't activate" / neurological bypass framing is too hand-wavy for the evidence.

Recommended plugin phrasing:

- Call pacing a **low-disagreement reality statement** that reduces immediate resistance.
- Do not present it as a mind-bypass.

#### 2. Alignment

This survives well under interests-based negotiation and helping-relationship literature.

Sources:

- Fisher and Ury, *Getting to Yes* ([PON overview](https://www.pon.harvard.edu/daily/negotiation-skills-daily/getting-to-yes-negotiating-agreement-without-giving-in/))
- Edgar Schein, *Humble Inquiry* ([publisher page](https://mitpressbookstore.mit.edu/book/9781609949815))

Recommended plugin phrasing:

- Shared-problem construction, not "I win because you can't oppose collaboration without looking stupid."

#### 3. Resonance

This is the strongest single statement class.

[Consensus with Claude]

It is strongly supported by Schein's helping stance and by Voss-style tactical empathy as practitioner literature, but the skill should split Hughes's bucket into two sub-moves:

- **Labeling** the emotion or pressure
- **Summarizing** the world-model or cost structure

Important refinement:

- Voss is very useful here, but it is practitioner literature, not peer-reviewed lab evidence. The plugin should credit it as a negotiation tradition, not as settled science.

Sources:

- Schein, *Humble Inquiry* ([publisher page](https://mitpressbookstore.mit.edu/book/9781609949815))
- Black Swan Group terminology showing Labels, Mirrors, Tactical Empathy, Accusations Audit, and No-Oriented Questions as the method's core named primitives ([official trademark/method page](https://www.blackswanltd.com/trademarks-1))

#### 4. Concession

This survives, but the sharper external formulation is **accusation audit / preemptive negative labeling**, not generic concession.

What I am changing from Phase 2:

- I still do **not** recommend `concession-then-ask` as a top-level v1 skill.
- But I am elevating it from "just another modifier" to a **first-class subroutine** inside `conversation-framing` and `frame-recovery`, and a cross-route inside SBI.

Reason:

- Claude was right that this move is load-bearing and sharper than I gave it credit for.
- Claude was wrong, in my view, that it needs its own top-level slot immediately.

Why I still reject the standalone skill:

- Its trigger surface is narrower than `conversation-framing`.
- Its best uses are usually nested inside a broader frame-read or recovery job.
- Promoting every strong 2-move pattern to top-level skill status will fragment Communication too quickly.

#### 5. Presupposition

Keep the linguistic primitive; explicitly reject the broader NLP worldview.

[Consensus with Claude]

Fresh source check still supports the same split:

- Presupposition as a **language move** is real.
- NLP as a broader evidence-based system is not well supported.

Source:

- Sturt et al., "Neurolinguistic programming: a systematic review of the effects on health outcomes" ([PubMed](https://pubmed.ncbi.nlm.nih.gov/23211179/))

Recommended plugin phrasing:

- "Presupposition is a real linguistic device. This skill uses the device without endorsing NLP as a scientific system."

### A4. How Hughes's five question classes hold up

#### Directional

Strongly supported. It is a preference-shaping question form, not a Hughes-unique invention.

Best support:

- Heritage/Robinson on question format effects in institutional talk ([PubMed 2006](https://pubmed.ncbi.nlm.nih.gov/16548700/))

#### Assumptive

Real and useful, but ethically touchier than Hughes makes it sound.

Keep it with guardrails:

- Only allow **truthful or explicitly negotiable** defaults.
- Refuse hidden-decision wording where the skill would be helping the user smuggle a false premise.

#### Elicitation

Useful, but Hughes's framing is too narrow.

What survives:

- Indirect information-gathering matters.

What needs correction:

- Elicitation is not only "statement-shaped questions." It also includes silence, mirrors, prompts, and how epistemic roles are managed.

#### Reframe

This is real, but Hughes understates its scope.

What I am changing:

- In the skill inventory, reframe remains a **question family** inside `conversation-framing`, not a separate skill.
- But it should be described as a super-family that overlaps with `abstraction-laddering`.

#### Diagnostic

This survives well under epistemic asymmetry and institutional questioning.

The plugin should explain it as:

- A question that temporarily casts the speaker as evaluator and the other party as explainer.

That is stronger and more defensible than "covertly slapping a frame down."

### A5. Important additions Hughes missed or underplayed

These are the additions I kept after re-checking both analyses against the brief and sources.

#### Keep as named subroutines or modifiers

1. **Anchoring**
   - Strong evidence in negotiation.
   - Source: Gunia et al., "The Remarkable Robustness of the First-Offer Effect" ([Sage abstract](https://journals.sagepub.com/doi/10.1177/0146167213499236)); Galinsky et al., "To Start Low or To Start High?" ([Sage abstract](https://journals.sagepub.com/doi/10.1111/j.1467-8721.2009.01667.x))
   - Plugin position: modifier inside `conversation-framing`, not a standalone skill.

2. **Identity-stake framing**
   - Hughes notices it in the parent example but never generalizes it.
   - Source: Oyserman and Destin, "Identity-Based Motivation" ([Sage](https://journals.sagepub.com/doi/10.1177/0011000010374775))
   - Plugin position: advanced subroutine under resonance/presupposition/reframe; useful, but not central enough for its own skill.

3. **Temporal distancing**
   - Useful for hot rooms and for reframing urgency.
   - Source: Benkley et al., "Short-term implications of long-term thinking" ([PubMed](https://pubmed.ncbi.nlm.nih.gov/35939603/))
   - Plugin position: reframe variant.

4. **No-oriented questions**
   - Good practitioner move for autonomy-preserving asks.
   - Source: Black Swan official method pages ([example 1](https://www.blackswanltd.com/newsletter/negotiation-training-the-top-4-no-oriented-questions), [example 2](https://www.blackswanltd.com/newsletter/why-you-need-to-use-no-oriented-questions-in-a-negotiation))
   - Plugin position: question-family modifier; useful, but should be labeled as negotiation-practitioner doctrine rather than peer-reviewed consensus.

#### Keep only as defensive examples, not promoted tactics

1. Scarcity / contrast
2. Fake urgency
3. Manipulative default anchoring

These are too easy to push from honest framing into coercion.

### A6. The recovery loop is still the differentiator

[Consensus with Claude]

After re-reading the transcript and checking the wider literature, I am more confident here than I was in Phase 2:

- The **content taxonomy** is not very original.
- The **recovery loop** is where Hughes contributes the most practical compression.

What survives:

1. Read the miss
2. Release the failed move
3. Shift class
4. Redeploy

What I am refining:

- The plugin should teach **three miss types**, not just two:
  - not heard
  - heard and rejected
  - reactance to pressure

- The loop's load-bearing move is not just "try again differently." It is **class-shift after the miss**.

That is important enough to keep as its own skill.

### A7. Defensive read: why I still prefer `frame-audit` over `presupposition-detector`

This is the main design disagreement where I am **not** moving toward Claude.

Claude's narrower `presupposition-detector` is well-formed, but I still think it is the wrong top-level abstraction for v1.

Why:

1. The user job is broader than presupposition.
   - Users ask: "What am I being boxed into?"
   - They are usually dealing with role assignment, preferred-answer design, evaluator/evaluated structure, defaults, urgency, and false binaries in addition to presupposition.

2. The plugin's load-bearing move can still be singular at the broader level.
   - `frame-audit`'s load-bearing move is **premise-before-rebuttal extraction**.
   - That is narrow enough to audit and broad enough to cover the real job.

3. Presupposition detection is still valuable.
   - It should appear as the first named sub-pass inside `frame-audit`.
   - It can also become a future alias command without becoming a separate skill.

So the refined recommendation is:

- Keep **`frame-audit`** as the top-level defensive skill.
- Preserve Claude's sharper presupposition examples inside that skill's Input Handling and Example.

## B. Plugin extension proposals

### B1. Final skill inventory

Add exactly **three** skills in v1:

| Skill | Keep? | Why |
|---|---|---|
| `conversation-framing` | Yes | Owns live-conversation planning: read the frame already running, choose the statement family, choose the question family, draft the opener, prepare a fallback. |
| `frame-audit` | Yes | Owns defensive analysis of incoming frames before the user answers them. |
| `frame-recovery` | Yes | Owns post-miss repair; preserves the most distinctive part of Hughes's talk. |

Do **not** add as top-level v1 skills:

- `presupposition-detector`
- `concession-then-ask`
- `tactical-empathy`
- `reframe`
- one-skill-per-statement-class variants

### B2. Why this remains better than the narrower split

This is the core design judgment.

#### Why not `presupposition-detector` as a top-level v1 skill

- Too narrow relative to the actual user job.
- Better as a front-loaded diagnostic pass within `frame-audit`.

#### Why not `concession-then-ask` as a top-level v1 skill

- It is real and valuable.
- But its best home is:
  - a named branch inside `conversation-framing`
  - a named repair option inside `frame-recovery`
  - a cross-route from SBI when the recipient is defensive and the user needs to ask a hard follow-up

This keeps Communication curated rather than proliferating every useful subroutine into a top-level skill.

### B3. Category recommendation

Keep these in **Communication**.

I am explicitly retracting my Phase-2 suggestion to create a new top-level **Conversation** category.

Why:

- The repo's categories are intentionally broad.
- The additional skills are still communication tools.
- The churn is documentation-heavy and concept-light.

If the maintainer wants more clarity, add a README subheading or description note like "live conversation / frame management" under Communication rather than a new category.

### B4. Full SKILL.md drafts

The three drafts below are written to pass the plugin's `.gnhf` style: the load-bearing move is named in the description and repeated in Priorities, Role, Input Handling, Example `<thinking>`, and Completion.

---

## `skills/conversation-framing/SKILL.md`

```md
---
name: conversation-framing
description: Plans a live conversation using a truthful statement-plus-question sequence — load-bearing is the frame-already-running diagnosis, because drafting the opener before naming the authority, adversarial, emotional, or narrative frame already organizing the room makes the sequence ride inside that frame instead of replacing it. Use when preparing for a negotiation, a defensive 1:1, a difficult escalation, or when the user says "frame this", "how do I say this so it lands", "I keep agreeing to more work", or "prep me for this conversation".
allowed-tools: AskUserQuestion, Read
---

# Conversation Framing

## Priorities

```
Frame-already-running diagnosis > Statement-family fit > Next-30-seconds target > Recovery readiness
```

## Role

Act as a live-conversation strategist drawing from Goffman-style frame analysis, Heritage-style question design, Schein-style humble inquiry, and negotiation-practitioner tactical empathy. The load-bearing move is the frame-already-running diagnosis: before drafting any opener, identify the frame already organizing the room — authority, adversarial, emotional, narrative, or mixed — because an opener drafted before that diagnosis usually reinforces the other side's structure instead of changing it. The skill plans one truthful statement and one question for one specific next exchange; it does not help the user fabricate urgency, fake alignment, hide material consequences, or smuggle in a false decision.

Skip when the task is primarily a document or memo (route to `minto-pyramid`), when the user only needs incident-specific feedback and the recipient is not hostile or status-asymmetric (route to `situation-behavior-impact`), or when the user has already tried a move and needs post-miss repair (route to `frame-recovery`).

## Loop

1. **Round 1 — Conversation + counterpart**: confirm who the conversation is with, why it matters now, and the most recent friction point.
2. **Round 2 — Frame-already-running diagnosis**: `AskUserQuestion`: "What frame is already organizing the room before you speak?" Recommend the strongest candidate from the prompt or source material.
3. **Round 3 — Next 30 seconds**: `AskUserQuestion`: "What do you need them to do in the next 30 seconds?" Options should map to question families: conclude, disclose, explain, pause, widen, or commit.
4. **Round 4 — Statement family**: choose the best opening family for the frame-already-running diagnosis: pacing, alignment, resonance/label, concession/accusation-audit, presupposition, identity frame, temporal frame, or anchor/default.
5. **Round 5 — Question family**: choose the question that best fits the next-30-seconds target: directional, assumptive, elicitation, reframe, diagnostic, calibrated how/what, or no-oriented.
6. **Round 6 — Draft the pair**: produce one primary statement + question sequence and one lower-pressure variant.
7. **Round 7 — Miss plan**: identify what would count as a miss and which different class to switch to first.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Topic or Path to email thread, notes, or transcript — if Path provided, Read it first and perform the frame-already-running diagnosis on the actual language before drafting any line.
- The frame-already-running diagnosis happens before class selection. If the user cannot name the room frame, offer the standard recognition menu: authority, adversarial, emotional, narrative, or mixed. Do not draft the opener until that diagnosis is explicit.
- If the prompt already contains a hidden default or presumed decision, surface whether it is truthful enough to keep. If not, remove or soften it rather than helping the user smuggle it in.
- If the user is preparing to give feedback to a defensive or higher-status recipient, perform the frame-already-running diagnosis first and then route to `situation-behavior-impact` for the final SBI wording.
- If the real need is a defensive reading of someone else's message, route to `frame-audit`. If the user already tried something and it bounced, route to `frame-recovery`.

## Example

<example>
Topic: "My manager's 1:1s keep ending with me agreeing to more work."

<thinking>The frame-already-running diagnosis is load-bearing here. If the room is already organized as manager-as-allocator and me-as-receiver, a naked question like "what should I prioritize?" only reinforces that structure. I need to diagnose the frame already running before I draft anything, because the wrong opener will sound reasonable while still keeping me inside the same authority frame that has been producing the unwanted outcome.</thinking>

Calls AskUserQuestion:
- Question: "What frame is already organizing this 1:1 before you speak?"
- Options:
  - `(Recommended) Authority / allocation` — your manager is already in the evaluator-and-resourcing role
  - `Adversarial / performance defense` — recent tension makes the room more combative
  - `Shared planning` — only if there is recent evidence of actual collaboration
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Frame-already-running diagnosis audit: name the room frame explicitly and cite one piece of evidence from the prompt or source. If the opener was drafted before the frame-already-running diagnosis was made explicit, the load-bearing move failed and the loop re-runs before any script is returned.
- Final opener package: one primary statement + question pair and one lower-pressure variant that keeps the same destination without repeating the wording.
- Traceability: explain what the pair is trying to make happen in the next 30 seconds and why that target fits the diagnosed frame.
- Miss plan: one observable sign the frame did not land, one different class to switch to first, and one salvage move the user must not repeat.
- Ethical audit: if a false presupposition, fake alignment, or obscured consequence survives in the final script, the draft is manipulative rather than honest and must be rewritten.
```

---

## `skills/frame-audit/SKILL.md`

```md
---
name: frame-audit
description: Scans an incoming message, opener, or transcript for the frame it is trying to install on the user — load-bearing is premise-before-rebuttal extraction, because answering the explicit question before surfacing the hidden premise, role assignment, or default underneath it usually means the user has already accepted the frame by participating inside it. Use when an email feels loaded, when the user says "what am I being boxed into", "scan this for assumptions", "am I getting framed here", or "help me respond without accepting the premise".
allowed-tools: AskUserQuestion, Read
---

# Frame Audit

## Priorities

```
Premise-before-rebuttal extraction > Installed-frame map > Response-option widening > Closure
```

## Role

Act as a defensive framing analyst. Your job is not to infer sinister motives; it is to surface the structure of the ask before the user answers it. The load-bearing move is premise-before-rebuttal extraction: separate the explicit request from the hidden premises, role assignments, defaults, time locks, and preferred-answer design embedded underneath it, because rebutting content while leaving the premise invisible usually means the user has already stepped inside the frame. Presupposition detection is the first sub-pass, but not the whole job; many loaded exchanges also work through evaluator roles, false binaries, urgency, or answer-optimization.

Skip when the real issue is the user's own inference chain rather than an incoming message (route to `ladder-of-inference`), or when the artifact is a product/problem definition rather than a social exchange (route to `abstraction-laddering`).

## Loop

1. **Round 1 — Artifact + stakes**: confirm the message, opener, or transcript segment to audit and what response the user is considering.
2. **Round 2 — Explicit ask**: identify the surface question or request in one line.
3. **Round 3 — Premise-before-rebuttal extraction**: list the hidden premises that must be accepted for the ask to feel normal. Presupposition detection runs first here.
4. **Round 4 — Installed-frame map**: identify role assignment, time lock, default anchor, false binary, preferred-answer design, and identity stake where present.
5. **Round 5 — Response mode**: `AskUserQuestion`: "How do you want to handle this frame?" Offer: accept, test, widen, reject, delay, or redirect.
6. **Round 6 — Draft**: produce a response that handles premise first and content second.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Path or pasted message — Read the artifact first and perform premise-before-rebuttal extraction on the exact wording, not a paraphrase.
- Start by separating:
  - the explicit ask
  - the hidden premise
  - the role the user is being cast into
  - any default timeline or decision that is being treated as already established
- Premise-before-rebuttal extraction is the first move. If the user begins by drafting an answer to the explicit question, stop and surface the premise first.
- Distinguish real frame installation from harmless shorthand. Say so when the message is merely compressed coordination rather than a meaningful attempt to box the user in.
- If the user wants help replying after the audit, route to `conversation-framing` for a live conversation or to `minto-pyramid` for a written memo.

## Example

<example>
Message: "Since we're all aligned on shipping Friday, can you own the migration and tell me what support you need?"

<thinking>Premise-before-rebuttal extraction is load-bearing here. If I answer only the operational part — whether I can own the migration and what support I need — I have already accepted at least three hidden moves: that alignment exists, that Friday is fixed, and that ownership is mine. The right first move is to extract the premise before rebuttal, because otherwise my response ratifies the frame before I have chosen whether to accept it.</thinking>

Calls AskUserQuestion:
- Question: "Which hidden premise matters most to surface first?"
- Options:
  - `(Recommended) "We're all aligned on shipping Friday"` — locks the date before the work discussion starts
  - `"You own the migration"` — locks role and accountability
  - `"Support is the only blocker"` — hides sequencing and feasibility
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Premise-before-rebuttal extraction audit: list the explicit ask separately from the hidden premise(s). If the response draft answers the explicit ask without first deciding what to do with the premise, the load-bearing move failed and the loop re-runs.
- Installed-frame map: premise, role assignment, time lock/default, false binary, preferred-answer design, and identity stake where present.
- Response options: at minimum one testing response and one widening response, not just acceptance or rejection.
- Recommended reply fitted to the stakes: low-friction, direct, or boundary-setting.
- Residual uncertainty: explicitly note where the frame may be accidental shorthand rather than a deliberate move so the user does not become paranoid by default.
```

---

## `skills/frame-recovery/SKILL.md`

```md
---
name: frame-recovery
description: Repairs a conversation after a framing move misses, bounces, or makes the user look like they are pushing — load-bearing is class-shift after the miss, because a failed move usually gets worse when the user repeats the same class louder, cleaner, or more insistently instead of releasing it and entering through a different door. Use when the user says "that landed badly", "I lost the room", "they pushed back immediately", or "how do I recover this conversation".
allowed-tools: AskUserQuestion, Read
---

# Frame Recovery

## Priorities

```
Class-shift after the miss > Miss-type diagnosis > Release-without-salvage > Redeploy
```

## Role

Act as a post-miss conversation repair coach. The load-bearing move is class-shift after the miss: if a pacing opener bounced, do not pace harder; if an alignment move was rejected, do not restate alignment more earnestly. Diagnose what kind of miss happened, release the dead move, and choose a different class that matches what the failed turn just taught you. Recovery is not permission to escalate; preserving relationship and credibility matters more than winning the next sentence.

Skip when there has not actually been a miss yet (route to `conversation-framing`), or when the exchange reveals a structural conflict with no workable shared goal (route to `conflict-resolution-diagram` or `hard-choice-model`).

## Loop

1. **Round 1 — Replay the move**: capture exactly what the user said and exactly what happened next.
2. **Round 2 — Miss-type diagnosis**: `AskUserQuestion`: "What kind of miss was it?" Offer: not heard, heard-and-rejected, reactance to pressure, or wrong-problem frame.
3. **Round 3 — Release**: identify the exact line or premise to drop and what not to repeat.
4. **Round 4 — Class-shift after the miss**: choose the next entry class: pacing, alignment, resonance/label, concession/accusation-audit, reframe, calibrated question, or no-oriented question.
5. **Round 5 — Redeploy**: draft the second attempt.
6. **Round 6 — Stop condition**: define when to widen, pause, or exit rather than take a third swing.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Topic or Path to transcript or notes — if Path provided, Read the actual sequence and anchor recovery on the real miss rather than the user's summary.
- Perform miss-type diagnosis before drafting anything:
  - not heard = timing / attention problem
  - heard-and-rejected = premise conflict
  - reactance to pressure = control/autonomy problem
  - wrong-problem frame = reframe needed more than defense
- Then enforce class-shift after the miss. A second attempt that merely rewrites the same class more elegantly is salvage behavior, not recovery.
- If the first move failed because the user's own assumption about the room was wrong, route briefly through `ladder-of-inference` before redeploying.

## Example

<example>
Topic: "I opened with 'We've been going back and forth on this for weeks now,' and they snapped, 'No, you've been holding us up.'"

<thinking>Class-shift after the miss is load-bearing here. The pacing statement was heard and explicitly rejected, which means the conflict is now about reality itself. Repeating the same class with cleaner wording would force me deeper into a contested-facts argument. Recovery means releasing pacing and entering through a different class — probably resonance or concession — because the miss has already taught me what they are protecting.</thinking>

Calls AskUserQuestion:
- Question: "What kind of miss was this?"
- Options:
  - `(Recommended) Heard-and-rejected` — they directly contested the premise you paced
  - `Reactance to pressure` — the problem was control more than content
  - `Not heard` — they were distracted and never actually received it
  - `Wrong-problem frame` — the real issue is a different lens entirely
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Class-shift after the miss audit: name the failed class and the new class explicitly. If the recovery draft repeats the same class that just failed, the load-bearing move failed and the loop re-runs before any redeploy script is returned.
- Miss-type diagnosis: not heard, heard-and-rejected, reactance, or wrong-problem frame, with one line of evidence.
- Release instruction: one exact line or premise to drop and one salvage move the user must not repeat.
- Redeploy script: one second-attempt line or pair fitted to the new class.
- Stop condition: one observable cue for pausing, widening, or exiting instead of escalating into a third attempt.
```

### B5. Cross-skill edits

These all survive, but I am narrowing them to the highest-value changes.

1. `skills/situation-behavior-impact/SKILL.md`
   - Add a route note: if the recipient is hostile or higher-status and the user has not yet read the room frame, route through `conversation-framing` before drafting final SBI delivery.
   - Add an optional note near Intent: when the follow-up question is hard and the recipient has paid a real cost, use the concession/accusation-audit branch from `conversation-framing`.

2. `skills/conflict-resolution-diagram/SKILL.md`
   - Before mapping positions, flag when one side's "demand" is actually carrying a hidden premise or fixed default. Route to `frame-audit` first.

3. `skills/minto-pyramid/SKILL.md`
   - Add one line: the audience-fit apex check is also a frame-fit check. If the reader's frame is contested or hostile, route through `conversation-framing` before finalizing the apex.

4. `skills/abstraction-laddering/SKILL.md`
   - Add a cross-reference: when the stuck object is a live conversational lens, `conversation-framing` owns the deployed reframe.

5. `skills/ooda-loop/SKILL.md`
   - Add one sentence in Orient: reading which frame is already running in the room is an Orient act; `conversation-framing` can consume that output directly.

### B6. README / manifest recommendation

- Keep the top-level category as `Communication`.
- Add the three new skills to that row.
- Add auto-trigger examples for:
  - "I keep agreeing to more work in my 1:1"
  - "scan this email for assumptions before I reply"
  - "that line landed badly; how do I recover"

## C. Open-question resolutions from the brief

### C1. One mega-skill or many micro-skills?

Refined answer: **three skills**.

- One skill is too mode-confused.
- Ten skills are too atomized.
- Three matches user jobs cleanly: plan, audit, recover.

### C2. What is the load-bearing move for the primary offensive skill?

It is still **frame-already-running diagnosis**.

Why not statement-before-question discipline?

- Because that rule can be followed ceremonially while still optimizing the opener for the wrong room.

Why not the recovery loop?

- Because recovery is real but belongs to the post-miss skill.

Why not "pairing rule"?

- Because pairing is an architecture, not the point where the method most often fails.

### C3. How much Hughes / NCI lineage should be cited?

Recommendation:

- Credit Hughes directly as the source of the **five statement / five question / recovery-loop packaging**.
- Do not present the plugin as an NCI extension or a marketing funnel.
- Ground the plugin's justification in broader traditions:
  - Goffman
  - Tversky/Kahneman
  - Heritage/Robinson
  - Schein
  - selected negotiation-practitioner moves from Voss

This gives proper credit without overcommitting to NCI's broader branding or claims.

### C4. Defensive vs. offensive split?

[Consensus with Claude]

Split them.

- `conversation-framing` = offensive planning with guardrails
- `frame-audit` = defensive visibility
- `frame-recovery` = post-miss repair

Mode flags would dilute the load-bearing moves and produce sloppier audits.

### C5. Routing rules

Refined routing:

- "Help me give feedback to X" -> `situation-behavior-impact`
- "Help me give feedback to X, but they outrank me / always get defensive" -> `conversation-framing` first, then SBI
- "Negotiate this clause / prep me for this conversation" -> `conversation-framing`
- "Why does this email feel loaded?" -> `frame-audit`
- "I already tried a line and it landed badly" -> `frame-recovery`
- "Am I overreading their intent?" -> `ladder-of-inference`

## D. Risks, disclaimers, and non-surviving claims

### D1. What does not survive scrutiny

1. "Naked questions don't control anything."
   - Too strong.
   - Better: they often concede more frame than users realize, but question design still matters independently.

2. Neuro-style mechanism claims for pacing and agreement cascades.
   - Not well evidenced enough for plugin copy.

3. Any implication that the method is a near-magical dominance system.
   - The literature supports framing effects, not deterministic control.

4. Any broad endorsement of NLP.
   - Keep the presupposition device; reject the larger evidentiary leap.

### D2. Product risks

1. **Manipulation drift**
   - The skill can slide from honest structuring into obscuring options or smuggling false defaults.
   - Mitigation: explicit refusal rules and ethical audit clauses in Completion.

2. **Paranoia drift on the defensive side**
   - A frame-audit tool can teach users to over-read routine coordination as hostile strategy.
   - Mitigation: require the skill to distinguish loaded structure from harmless shorthand.

3. **Ceremonial use**
   - Users may memorize statement classes and question classes as a lookup table.
   - Mitigation: force frame diagnosis before scripting and keep the recovery loop central.

4. **Overweighting practitioner doctrine**
   - Voss-style moves are useful but not equivalent to a broad peer-reviewed science base.
   - Mitigation: cite them as practitioner traditions, not settled experimental law.

### D3. Ethics line for the plugin

The cleanest line remains:

- **Framing is unavoidable.**
- **Truthful framing is allowed.**
- **Deceptive, coercive, or vulnerability-exploiting framing is refused.**

Offensive deployment should be refused or redirected when:

- the counterpart is subordinate or especially vulnerable
- the user wants to hide material consequences
- the user wants to imply a decision that is false
- the user wants fake urgency or fake alignment

### D4. Final recommendation

Ship a **3-skill Communication bundle**:

1. `conversation-framing`
2. `frame-audit`
3. `frame-recovery`

Inside that bundle:

- make **presupposition detection** a named first pass inside `frame-audit`
- make **concession / accusation-audit** a named subroutine inside `conversation-framing` and `frame-recovery`
- keep **reframe** as a question family, not a top-level skill

That preserves what is strongest in Hughes, absorbs what the wider literature supports, and avoids turning the plugin into either a 25-cell lookup table or a bag of manipulative tricks.

## Selected sources used in this refinement

- Erving Goffman, *Frame Analysis* ([Google Books](https://books.google.com/books/about/Frame_analysis.html?id=XBpmAAAAIAAJ))
- Amos Tversky and Daniel Kahneman, "The Framing of Decisions and the Psychology of Choice" ([DOI record](https://cir.nii.ac.jp/crid/1361137044640262784?lang=en))
- Paul Thibodeau and Lera Boroditsky, "Metaphors We Think With" ([PLOS ONE](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0016782))
- John Heritage and Jeffrey D. Robinson, "The structure of patients' presenting concerns" ([PubMed](https://pubmed.ncbi.nlm.nih.gov/16548700/))
- Jeffrey D. Robinson and John Heritage, "Physicians' opening questions and patients' satisfaction" ([PubMed](https://pubmed.ncbi.nlm.nih.gov/16431070/))
- Jackie Sturt et al., "Neurolinguistic programming: a systematic review of the effects on health outcomes" ([PubMed](https://pubmed.ncbi.nlm.nih.gov/23211179/))
- Daphna Oyserman and Mesmin Destin, "Identity-Based Motivation" ([Sage](https://journals.sagepub.com/doi/10.1177/0011000010374775))
- Dylan Benkley et al., "Short-term implications of long-term thinking" ([PubMed](https://pubmed.ncbi.nlm.nih.gov/35939603/))
- Brian Gunia et al., "The Remarkable Robustness of the First-Offer Effect" ([Sage](https://journals.sagepub.com/doi/10.1177/0146167213499236))
- Adam Galinsky, Gillian Ku, and Thomas Mussweiler, "To Start Low or To Start High?" ([Sage](https://journals.sagepub.com/doi/10.1111/j.1467-8721.2009.01667.x))
- Edgar H. Schein, *Humble Inquiry* ([publisher page](https://mitpressbookstore.mit.edu/book/9781609949815))
- Edgar H. Schein, "A General Philosophy of Helping: Process Consultation" ([MIT Sloan Management Review](https://sloanreview.mit.edu/article/a-general-philosophy-of-helping-process-consultation/))
- Black Swan Group method vocabulary for Labels, Mirrors, Tactical Empathy, Accusations Audit, Calibrated Questions, and No-Oriented Questions ([official method/trademark page](https://www.blackswanltd.com/trademarks-1))
- George Lakoff on frames and why negating a frame reinforces it ([George Lakoff site](https://george-lakoff.com/2017/06/07/karen-handels-i-am-not-a-crook-moment-i-do-not-support-a-livable-wage/))

<!-- RESEARCH_COMPLETE -->
