# Framing Tactics and `thinking-systems-plugin` Extension Analysis

## Breadth Map First

Before deep-diving, these are all subtopics covered:

- A1. Cross-validation of Hughes's 5 statement classes and 5 question classes against Goffman, Lakoff, Tversky-Kahneman, Cialdini, Voss, Bandler-Grinder/NLP, Fisher-Ury, Schein, Boyd, and conversation analysis.
- A2. Additional framing primitives Hughes omits: anchoring, contrast, accusation audit, label-vs-mirror split, no-oriented questions, scarcity/loss framing, identity-stake framing, temporal framing, priming/pre-suasion, Socratic elenchus, narrative reframing, reactance management.
- A3. Recovery-loop support and stronger alternatives from conversation repair, tactical empathy, double-loop learning, and process consultation.
- A4. Defensive detection in real time, and whether defensive and offensive framing belong in one skill or separate skills.
- A5. Ethics line: truthful frame-setting vs manipulation, and a plugin-safe stance.
- B1. Exact new-skill inventory.
- B2. Mega-skill vs micro-skills.
- B3. Full `SKILL.md` drafts for the top 3 recommended skills.
- B4. Matching command-wrapper drafts.
- B5. Concrete cross-skill modifications with file paths and exact edit recommendations.
- B6. `README.md` and `CHANGELOG.md` update drafts.
- C. Definitive recommendations on every open design question in `context.md §5.3`.
- D1-D3. Risks, non-surviving Hughes claims, developer-plugin adoption boundaries, and citation hygiene.

## Executive Position

Hughes's core architecture survives cross-validation in broad outline: conversational outcomes are strongly shaped by the frame already running, and the combination of a frame-setting move plus a response-shaping question is real, not invented. What does **not** survive is the claim that Hughes's 5+5 grid is the right primitive inventory, or that a naked question "does nothing." The broader literature supports a smaller number of durable mechanisms:

- establish the situation definition,
- preserve or threaten autonomy,
- surface or ignore the other side's internal state,
- compress or expand the option set,
- control what is salient before the explicit ask,
- and manage repair when the first move fails.

That leads to a plugin recommendation that is neither a 25-cell lookup table nor 10+ tiny tactics. The right extension is a **3-skill cluster**:

1. `frame-control` for offensive/planning use.
2. `frame-defense` for defensive analysis and counter-framing.
3. `conversational-recovery` for when the first frame misses or a conversation is already off-balance.

Do **not** add separate micro-skills for each Hughes tactic. Those are internal moves, not stable user intents.

## A. Framing Tactics

### A1. Cross-validation of Hughes's 5 statements and 5 questions

#### Breadth list

- Statements: Pacing, Alignment, Resonance, Concession, Presupposition.
- Questions: Directional, Assumptive, Elicitation, Reframe, Diagnostic.
- Missing primitives from other traditions.
- Which Hughes labels are strong, weak, or misnamed.

#### Statement classes

| Hughes class | Verdict | Cross-validation | What the broader literature would call it |
|---|---|---|---|
| **Pacing** | Broadly supported, but under-theorized | Fits conversation-analysis findings that turn design is shaped by prior talk and institutional context, and Voss-style mirroring as low-resistance continuation. It is less a special tactic than a way of grounding in already-ratified reality. | Grounding, recipient design, mirroring, observational alignment |
| **Alignment** | Strongly supported | Fisher-Ury's "separate the people from the problem" and focus on interests, plus Schein's humble inquiry, both support moving from adversarial posture to shared task. | Shared-goal framing, interest framing, collaborative stance |
| **Resonance** | Strongest Hughes category | This maps closely to Voss's labels/tactical empathy and to Schein's view that drawing someone out requires curiosity about their experience. | Labeling, tactical empathy, affect acknowledgment |
| **Concession** | Supported, but incomplete | Preemptively naming the other's likely objections is close to Voss's accusation audit and broader two-sided-message / objection-handling traditions. Hughes is right that this can earn the right to ask a harder question. | Preemptive objection surfacing, negative acknowledgment |
| **Presupposition** | Real but ethically hottest; over-sold | Linguistic presupposition is real and Bandler-Grinder built a large chunk of NLP around it. Lakoff and Cialdini both support the general idea that what is made salient before the explicit ask matters. But NLP as a whole has weak empirical standing, so the tactic is real at the grammar level without validating NLP's broader claims. | Presupposition, pre-suasion, salience engineering |

#### Question classes

| Hughes class | Verdict | Cross-validation | Stronger label from literature |
|---|---|---|---|
| **Directional** | Strongly supported | Tversky-Kahneman establish that formulation changes choice; Voss's calibrated or thought-shaping questions and Socratic questioning both steer thought without asserting the conclusion directly. | Thought-shaping question, calibrated question, leading-by-implication |
| **Assumptive** | Supported, but should be treated as a special case | This is the question-form analogue of presupposition and option architecture. It is common in sales and negotiation, but also high risk ethically. | Presuppositional alternative question |
| **Elicitation** | Supported, but Hughes blurs statement vs question | Indirect information gathering is standard in negotiation and institutional talk. Hughes is right that it often works better when it does not feel like interrogation. | Indirect elicitation, fishing, information prompting |
| **Reframe** | Strongly supported | Goffman, Lakoff, abstraction-laddering, and conflict-resolution traditions all validate changing the lens rather than winning inside the current lens. | Reframing, lens-shift, problem redefinition |
| **Diagnostic** | Strongly supported | Conversation analysis of institutional interaction shows that question design allocates roles. Asking someone to "show their work" often puts them in the accountable position. | Account-giving request, evaluator-positioning question |

#### Where other traditions corroborate Hughes

- **Goffman** supports the base claim that interactions are interpreted through frames rather than raw facts. <https://www.britannica.com/topic/frame-analysis>
- **Lakoff** supports the claim that language activates frames and that negating a frame often still activates it. <https://newsarchive.berkeley.edu/news/media/releases/2003/10/27_lakoff.shtml>
- **Tversky-Kahneman** support the claim that formulation changes judgment. <https://www.science.org/doi/pdf/10.1126/science.7455683>
- **Cialdini** supports the "before the ask" architecture: attention and state-setting matter before the message itself. <https://books.apple.com/us/book/pre-suasion/id1086746370>
- **Voss / Black Swan** strongly corroborate resonance, concession, calibrated questions, accusation audit, and no-oriented questions. <https://www.blackswanltd.com/the-edge/what-is-the-black-swan-accusation-audit> <https://www.blackswanltd.com/newsletter/using-calibrated-questions%EF%B8%8F-to-win-more-deals> <https://www.blackswanltd.com/newsletter/negotiation-training-the-top-4-no-oriented-questions>
- **Fisher-Ury** corroborate alignment and shared-interest framing. <https://www.penguinrandomhouse.com/books/324551/getting-to-yes-by-roger-fisher-and-william-ury/>
- **Schein** corroborates curiosity-first, status-lowering inquiry rather than push-harder rhetoric. <https://mitpressbookstore.mit.edu/book/9781609949815> <https://sloanreview.mit.edu/article/a-general-philosophy-of-helping-process-consultation/>
- **Boyd** supports treating framing as an `Orient` problem: interpretation precedes decision. <https://www.airuniversity.af.edu/AFCLC/News/Article-Display/Article/1777083/cultural-ksas-skill-development-using-the-ooda-loop/>
- **Conversation analysis** supports the claim that turn design, preference organization, and repair shape what responses become interactionally easy or difficult. <https://journals.sagepub.com/doi/10.1177/14733250221132239> <https://methods.sagepub.com/book/mono/embed/doing-conversation-analysis/chpt/applied-ca-institutional-interaction>

#### Different primitives Hughes is missing

The broader literature does not naturally sort into Hughes's 5 statement classes and 5 question classes. The missing primitives that recur more reliably are:

- **salience control before the ask**,
- **autonomy preservation vs freedom threat**,
- **anchor setting**,
- **identity activation**,
- **repair/recovery**,
- **accountability-positioning**,
- **option-space compression or expansion**,
- **objection surfacing before proposal**.

That is why the plugin should not fossilize Hughes's 5+5 as a canonical ontology.

### A2. Framing tactics Hughes does not cover well enough

#### Breadth list

- Anchoring
- Contrast principle
- Accusation audit
- Labeling vs mirroring
- No-oriented questions
- Scarcity / loss frame
- Identity-stake framing
- Temporal framing
- Priming / pre-suasion
- Socratic elenchus
- Narrative reframing
- Reactance management

#### Additions that deserve explicit treatment

1. **Anchoring**
   Hughes talks about directional questions but not numeric or reference-point anchoring. This is a gap. Anchoring is one of the most robust negotiation effects and deserves explicit mention, especially for salary, scope, and prioritization conversations. <https://www.pon.harvard.edu/daily/negotiation-skills-daily/the-drawbacks-of-goals/> <https://www.cambridge.org/core/journals/judgment-and-decision-making/article/robustness-of-anchoring-effects-on-preferential-judgments/FDFCFCE27288DC24D0B157EDD4F6C80D>

2. **Contrast principle**
   Related but distinct from anchoring. Sequence changes perceived reasonableness. Hughes gestures toward hallway-building, but contrast should be named separately because it affects option presentation more than question wording. <https://www.changingminds.org/principles/contrast.htm>

3. **Accusation audit**
   Hughes's concession class is real, but Voss has the more operational primitive: surface the negatives the other side is already carrying before you make your ask. This is better-developed than Hughes's concession bucket and should influence plugin design. <https://www.blackswanltd.com/accusation-audit> <https://www.blackswanltd.com/the-edge/what-is-the-black-swan-accusation-audit>

4. **Labeling vs mirroring**
   Hughes collapses too much under pacing and resonance. Voss's split is useful:
   - mirroring continues or expands talk,
   - labeling names the counterpart's likely state.
   Those are different moves with different failure modes. <https://www.blackswanltd.com/foundational-courses>

5. **No-oriented questions**
   Hughes does not cover autonomy-preserving "no" questions. These matter because reactance research shows that persuasive pressure can trigger resistance when freedom feels threatened. <https://www.blackswanltd.com/newsletter/negotiation-training-the-top-4-no-oriented-questions> <https://www.frontiersin.org/articles/10.3389/fcomm.2019.00056/full>

6. **Scarcity / loss-frame**
   Hughes never names loss aversion or scarcity, even though these are common real-world frames. They are well-attested but should be handled carefully because they drift fast into manipulation. <https://www.frontiersin.org/article/10.3389/fcomm.2019.00056/full> <https://pubmed.ncbi.nlm.nih.gov/24730172/>

7. **Identity-stake framing**
   His parent example actually relies heavily on identity, not just presupposition. "I am the loving parent" is an identity claim. Identity-based motivation research supports treating identity activation as its own primitive. <https://www.frontiersin.org/article/10.3389/fpsyg.2017.00716/full>

8. **Temporal framing**
   "What happens if we keep doing this for six months?" is not just directional; it is temporal distance work. This deserves explicit treatment because it is common in strategy and engineering tradeoff conversations. <https://www.frontiersin.org/journals/behavioral-neuroscience/articles/10.3389/neuro.08.039.2009/full>

9. **Priming / pre-suasion**
   Cialdini's major contribution is not just influence principles but the idea that attention-setting before the message changes receptivity. Hughes overlaps with this but never names it cleanly. <https://books.apple.com/us/book/pre-suasion/id1086746370>

10. **Socratic elenchus**
    Hughes's directional and diagnostic questions overlap with elenchus, but Socratic traditions are more explicitly about exposing contradiction in the interlocutor's own commitments. <https://www.cambridge.org/core/books/socratic-studies/socratic-elenchus-method-is-all/E4678880B70286DEB5CDAFE5992638C6>

11. **Narrative reframing**
    Hughes focuses on sentence-level moves. Narrative format itself can be persuasive and can shift causal attribution. That matters for long-form or reflective conversation but probably not enough to justify a separate plugin skill. <https://www.frontiersin.org/articles/10.3389/fcomm.2021.719615/full> <https://pubmed.ncbi.nlm.nih.gov/23829316/>

12. **Reactance management**
    This is the biggest omission. Good framing is not only "what frame do I install?" but also "how do I avoid triggering freedom threat?" Reactance literature makes this primitive explicit. <https://www.frontiersin.org/articles/10.3389/fcomm.2019.00056/full>

### A3. Recovery loop

#### Breadth list

- Support for Hughes's "read the miss -> release -> shift class -> redeploy"
- Better-developed repair models
- Recommendation for plugin handling

#### Verdict

Hughes is directionally right: repeating the failed move is usually bad, and the miss gives diagnostic information. But his recovery loop is a **practitioner heuristic**, not a validated closed model.

What cross-validates:

- **Conversation analysis repair** supports the idea that trouble in interaction requires repair, and that the design of repair matters. <https://www.cambridge.org/core/product/identifier/S009785077702150X/type/journal_article>
- **Argyris double-loop learning** supports not merely changing the move but questioning the governing assumptions behind the move. <https://www.pmi.org/disciplined-agile/da-value-stream-consultant-resources/double-loop-learning>
- **Schein process consultation** supports diagnosing what kind of help or inquiry the moment actually requires rather than forcing a preloaded script. <https://sloanreview.mit.edu/article/a-general-philosophy-of-helping-process-consultation/>
- **Voss tactical empathy / accusation audit** gives a stronger concrete recovery move when the miss is emotional resistance rather than simple inattentiveness. <https://www.blackswanltd.com/the-edge/what-is-the-black-swan-accusation-audit>

#### Better-developed recovery model for the plugin

For plugin use, I would upgrade Hughes's loop to:

1. **Classify the miss**
   - inattentive miss,
   - premise rejection,
   - autonomy/reactance spike,
   - hidden constraint not yet surfaced,
   - status-role rejection.
2. **Release the failed move**
   Do not restate the failed frame.
3. **Shift the mechanism, not just the wording**
   Example: from presupposition to alignment; from directional to diagnostic; from hard ask to accusation-audit-style concession.
4. **Redeploy with a lower-threat move**
   Usually resonance, alignment, or concession.
5. **If repeated failure persists, escalate to double-loop**
   Reconsider whether the destination itself is wrong.

This is strong enough to justify a separate `conversational-recovery` skill.

### A4. Defensive read

#### Breadth list

- How to detect a frame in real time
- Practical checks
- Same skill or separate skill?

#### Real-time detection checklist

The best defensive read is not "spot manipulation vibes." It is checking for these observable markers:

1. **What did that sentence make true before I agreed?**
   This catches presupposition and assumptive questions.
2. **What answer just became socially easiest?**
   This catches directional wording and preference-organization pressure.
3. **What option disappeared from view?**
   This catches anchoring, false binaries, and contrast framing.
4. **Did my role just change from participant to defendant?**
   This catches diagnostic/evaluator-positioning.
5. **Did urgency, scarcity, or identity suddenly become central?**
   This catches loss framing, identity framing, and temporal pressure.
6. **Am I reacting to the frame or to the object-level issue?**
   This catches when the conversation should route to `ladder-of-inference` or `abstraction-laddering`.

#### Goffman / CA / existing plugin hooks

- Goffman is useful for the idea of **frame breaks** and misframing, but not as a turn-by-turn operator manual. <https://www.britannica.com/topic/frame-analysis>
- Conversation analysis is useful for identifying how responses become preferred or dispreferred, and how repair begins. <https://journals.sagepub.com/doi/10.1177/14733250221132239>
- The plugin already has two relevant defensive tools:
  - `ladder-of-inference` for auditing your own climb,
  - `abstraction-laddering` for escaping solution-rung traps.

#### Definitive recommendation

**Defensive framing belongs in a separate skill.**

Reasons:

- User intent is different: "help me influence this conversation" is not the same as "help me detect what is being installed on me."
- The ethical posture is different.
- The routing neighbors are different: `frame-defense` routes naturally to `ladder-of-inference`, `abstraction-laddering`, and `conflict-resolution-diagram`; `frame-control` routes to SBI, negotiation, and hard conversations.
- Plugin precedent already separates defensive and offensive lenses.

### A5. Ethics

#### Position

The plugin should adopt this line:

> Use framing to clarify reality, surface legitimate shared interests, and make next-step choices easier to discuss. Do not use framing to smuggle contested facts in as settled, manufacture false urgency, exploit vulnerabilities, or covertly reduce the other person's meaningful choice set.

That is stricter than Hughes.

#### Practical ethical rules for the plugin

Allowed:

- truthful pacing,
- authentic alignment,
- accurate resonance,
- good-faith concession,
- reframing from a false binary to a truer one,
- no-oriented questions that preserve autonomy,
- accusation-audit-style acknowledgment of likely negatives.

Disallowed or red-flagged:

- false presupposition,
- fake scarcity or deadline pressure,
- identity manipulation,
- extracting sensitive information by deception,
- framing that relies on the counterpart not noticing what was assumed.

This is not just moral window dressing. Reactance and resistance research both imply that manipulative moves are often strategically brittle anyway. <https://www.frontiersin.org/articles/10.3389/fcomm.2019.00056/full> <https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2015.01201/full>

## B. Plugin Extension Proposals

### B1. Exact skill inventory

#### Recommended additions

1. **`frame-control`**
   A guided dialogue for planning a live conversation by diagnosing the frame already running, choosing a low-threat statement move, choosing the needed next-step question move, and prebuilding a recovery path if the first move misses. The load-bearing move is **frame-already-running diagnosis**: if the user speaks before naming the authority/adversarial/emotional/narrative frame already in force, every later tactic is just cargo cult phrasing. Category: `Communication`. Routes from negotiation asks, hostile or high-status feedback conversations, 1:1s with managers, and contract/resource conversations. Subsume Hughes's internal 5+5 matrix; do not expose each cell as a separate skill.

2. **`frame-defense`**
   A defensive scan for incoming emails, transcripts, or planned meetings that extracts what a message made true before consent, what answer became easiest, and what options were silently compressed. The load-bearing move is **pre-agreement extraction**: if the user cannot state what the message made true before they agreed, they are still reasoning inside the installed frame. Category: `Communication`. Routes from "why did I end up agreeing to this?", "analyze this meeting/email", and defensive review before negotiation. Routes onward to `ladder-of-inference`, `abstraction-laddering`, or `conflict-resolution-diagram` once the installed frame is visible.

3. **`conversational-recovery`**
   A repair skill for conversations that already went sideways: classify the miss, release the failed frame, shift mechanism, and redeploy with a lower-threat move. The load-bearing move is **class-shift after the miss**: restating the same failed class in prettier language only advertises rigidity. Category: `Communication`. Routes from "that line didn't land", "they got defensive", "I lost the room", or "help me recover next round."

#### Explicit non-additions

- No separate `tactical-empathy` skill: too overlapping with `frame-control` and `conversational-recovery`.
- No standalone `reframe` skill: too overlapping with `abstraction-laddering`, `conflict-resolution-diagram`, and `frame-control`.
- No standalone `presupposition-detector`: too narrow; broaden to `frame-defense`.
- No 10 micro-skills for each Hughes class: wrong granularity.

### B2. Mega-skill vs micro-skills

#### Definitive recommendation

Choose **3 lifecycle skills**, not 1 mega-skill and not 10 micro-skills.

Why this granularity fits the repo:

- Existing skills are keyed to **user intent**, not internal sub-steps.
- `balancing-feedback-loop` and `reinforcing-feedback-loop` are split because the user intent differs, not because the internal math differs.
- Hughes's statement and question classes are internal operators. Users will not reliably ask for "resonance statement" or "assumptive question"; they will ask for help planning, defending, or recovering a conversation.
- A single mega-skill would become the exact lookup-table anti-pattern the brief warns against.

## B3. Full `SKILL.md` Drafts

### 1. `frame-control`

```md
---
name: frame-control
description: Plans a live conversation by diagnosing the frame already running, then pairing a frame-setting move with a response-shaping question and a fallback. Load-bearing is frame-already-running diagnosis: if you speak before naming the authority, adversarial, emotional, or narrative frame already running, every later tactic is just cargo-cult phrasing inside someone else's frame. Use when preparing for a negotiation, high-stakes 1:1, tense feedback exchange, resource ask, or when the user says "frame this", "how do I position this", "I need to manage the conversation", or "help me with this meeting".
allowed-tools: AskUserQuestion, Read
---

# Frame Control

## Priorities

```
Frame-already-running diagnosis > Low-threat opener selection > Next-30-seconds question fit > Recovery preload
```

## Role

Act as a conversation architect drawing from Goffman-style framing, Fisher-Ury interest framing, Voss-style tactical empathy, and Boyd-style orientation. The load-bearing move is frame-already-running diagnosis: if the user starts drafting lines before naming the frame already running, they default to fighting inside the other person's authority, adversarial, emotional, or blame-story frame and mistake better wording for better positioning. This skill is not a phrasebook; it is a sequencing tool. Prefer truthful pacing, alignment, resonance, and concession before sharper presupposition moves.

Skip when the task is document-shaped rather than conversation-shaped (route to minto-pyramid), when the issue is a private reasoning audit with no live counterpart (route to ladder-of-inference), or when the conflict is a real structural tradeoff with no conversational leverage point yet visible (route to conflict-resolution-diagram or hard-choice-model).

## Loop

1. **Round 1 — Counterpart + stakes**: confirm who the conversation is with, what they control, and what would count as progress.
2. **Round 2 — Frame already running**: `AskUserQuestion`: "What frame is already running before you speak?" — recommend authority, adversarial, emotional, or narrative based on the prompt.
3. **Round 3 — Next 30 seconds**: `AskUserQuestion`: "What do you need them to do in the next 30 seconds?" — arrive at a conclusion, reveal information, shift lens, explain reasoning, or act inside a decision.
4. **Round 4 — Statement move**: recommend the lowest-threat statement class that fits the frame already running: pacing, alignment, resonance, concession, or carefully-bounded presupposition.
5. **Round 5 — Question move**: recommend the question class that fits the next-30-seconds goal: directional, assumptive, elicitation, reframe, or diagnostic.
6. **Round 6 — Draft**: produce statement + question pairing, plus one lower-threat alternative.
7. **Round 7 — Recovery preload**: define what miss would look like and preload a class shift if the first move bounces.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Upcoming conversation as topic or Path to notes/email/thread — Read the source first, then perform frame-already-running diagnosis before drafting any line. A user who starts with wording ("what should I say?") before frame-already-running diagnosis is usually trying to out-argue a stronger authority frame or soothe an adversarial frame with object-level content.
- Extract three things up front: who owns status/resources, what story is already active, and what the user needs in the next 30 seconds. The first two drive frame-already-running diagnosis; the third drives question fit.
- Prefer truthful low-threat openers first. Treat presupposition and assumptive moves as advanced and red-flag them when they would smuggle a contested fact in as settled.
- Skip and route when the deliverable is a memo, deck, or written brief (→ minto-pyramid), when the issue is an ungrounded belief about a person with no upcoming conversation (→ ladder-of-inference), or when the real problem is a structural two-demand conflict rather than a conversational sequence (→ conflict-resolution-diagram).

## Example

<example>
Topic: "I need to ask my manager to reduce my project load without sounding like I'm dropping the ball."

<thinking>Frame-already-running diagnosis is load-bearing here because the user's instinct will be to open with justification about workload. But the meeting already carries an authority frame plus a likely narrative frame: manager allocates work, employee explains capacity. If I draft content before naming that frame, I trap the user inside defense. The better entry is a resonance or concession opener that goes under the authority frame, then a directional or diagnostic question that moves the manager into joint evaluation rather than one-way assignment.</thinking>

Calls AskUserQuestion:
- Question: "What frame is already running before you speak?"
- Options:
  - `(Recommended) Authority frame` — your manager owns allocation and evaluation
  - `Adversarial frame` — if prior pushback already made this feel like a fight
  - `Narrative frame` — if the room already has a blame story about missed work
  - `Emotional frame` — if the immediate issue is frustration or stress in the room
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Final conversation plan containing: diagnosed frame already running, next-30-seconds goal, recommended statement move, recommended question move, and one fallback pairing.
- Frame-already-running diagnosis audit: the output must explicitly name the authority, adversarial, emotional, or narrative frame already running and explain why that frame, not another, is shaping the room. If the final script exists without a named frame already running, the load-bearing move failed and the wording was generated inside an unexamined frame.
- Ethical-use audit: any presupposition or assumptive move must be flagged as operational-only and must not smuggle a contested fact in as settled; if the move relies on the counterpart not noticing what was assumed, re-run with alignment, resonance, or concession instead.
- Recovery preload stating what a miss would look like and which class-shift comes next; if the fallback is only a prettier version of the same class, the recovery plan failed and the loop re-runs.
- Clear route note when another skill should take over after framing: SBI for feedback delivery, minto-pyramid for follow-up memo, conflict-resolution-diagram for true two-demand deadlocks.
```

### 2. `frame-defense`

```md
---
name: frame-defense
description: Detects frames being installed on the user in a live conversation, email, or transcript, then helps the user neutralize them without arguing inside them. Load-bearing is pre-agreement extraction: if you cannot state what the message made true before you agreed, you are still reasoning inside the installed frame. Use when a meeting always ends with you conceding too much, when an email feels loaded, when you want to analyze what just happened, or when the user says "what frame am I being put in", "analyze this message", "why did I agree to that", or "spot the assumptions".
allowed-tools: AskUserQuestion, Read
---

# Frame Defense

## Priorities

```
Pre-agreement extraction > Option-space recovery > Role-shift detection > Counter-frame selection
```

## Role

Act as a defensive framing analyst drawing from Goffman-style frame analysis, ladder-of-inference-style reasoning audit, and conversation-analysis attention to turn design and accountability. The load-bearing move is pre-agreement extraction: if the user cannot state what the message made true before consent, what answer became easiest, and what role the user was just assigned, then the installed frame remains invisible and every rebuttal happens inside it. This skill is defensive first: make the frame visible, widen the option set, then choose whether to answer, reframe, or decline.

Skip when the user is planning to influence rather than detect influence (route to frame-control), or when the issue is already a clearly-specified belief chain about the user's own inference rather than a counterpart's move (route to ladder-of-inference).

## Loop

1. **Round 1 — Artifact**: confirm whether the input is a live exchange, email, transcript, or anticipated opening line.
2. **Round 2 — Pre-agreement extraction**: `AskUserQuestion`: "What did this message make true before you agreed?" — recommend the strongest presupposition or assumption.
3. **Round 3 — Response pressure**: `AskUserQuestion`: "What answer or role became easiest?" — agree, defend, justify, choose from a false binary, or explain yourself.
4. **Round 4 — Missing options**: identify what disappeared from view: delay, ask for criteria, reject the premise, add a third option, or move up/down a ladder.
5. **Round 5 — Counter-frame**: choose the lightest effective neutralizer: ask for criteria, restate data, surface the assumption, widen options, or shift to shared goal.
6. **Round 6 — Draft response**: produce a short neutralizing reply and a stronger backup reply.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Email, chat, notes, or transcript Path — Read the artifact first and perform pre-agreement extraction before summarizing content. Without pre-agreement extraction, the user will usually respond to the object-level topic and miss the installed assumption.
- Scan explicitly for: presuppositions, assumptive alternatives, anchors, scarcity/urgency, identity claims, evaluator-positioning questions, and false binaries.
- Name the role shift in plain language: participant -> defendant, collaborator -> subordinate, option-maker -> option-chooser. Role-shift detection is the fastest way to make invisible framing visible.
- Route to ladder-of-inference when the bigger problem is the user's own belief chain, to abstraction-laddering when the installed frame is artifact- or solution-rung narrowness, and to conflict-resolution-diagram when the message is trying to freeze a false either-or conflict.

## Example

<example>
Topic: "My manager said, 'Since we're obviously not ready to hand this to the client yet, what needs to change before Friday?'"

<thinking>Pre-agreement extraction is load-bearing because the sentence asks an operational question that smuggles in a settled conclusion: we are obviously not ready. If I skip pre-agreement extraction, I answer the scheduling question and accept the readiness premise. Once that premise is visible, the user can decide whether to accept it, ask for criteria, or challenge it with data instead of defending inside it.</thinking>

Calls AskUserQuestion:
- Question: "What did the message make true before you agreed?"
- Options:
  - `(Recommended) That client-readiness is already decided against you` — hidden premise
  - `That Friday is fixed` — possible but secondary premise
  - `That you are personally responsible for the gap` — possible narrative layer
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Defensive read containing: pre-agreement extraction, easiest induced answer/role, missing option(s), and recommended counter-frame.
- Pre-agreement extraction audit: the final output must state what the message made true before consent in one sentence. If the user still only has a summary of "what the person said" and not what the message made true before agreement, the load-bearing move failed and the artifact must be rescanned.
- Counter-frame must widen options rather than merely disagree inside the installed frame. If the reply only argues the object-level issue while preserving the hidden premise, option-space recovery failed and the response should be reworked.
- Route notes to sibling skills when the counter-move is primarily data-rung reconstruction, abstraction-laddering, or evaporating-cloud assumption testing.
- Ethical clause: the skill may reveal likely framing tactics, but should avoid imputing malicious intent unless the evidence requires it; visibility first, moral diagnosis second.
```

### 3. `conversational-recovery`

```md
---
name: conversational-recovery
description: Repairs a conversation after a frame misses by classifying the miss, releasing the failed move, shifting mechanism, and redeploying with a lower-threat entry. Load-bearing is class-shift after the miss: if you only restate the same failed class in cleaner wording, you advertise rigidity and the other person learns how to resist you. Use when a line did not land, when the other person got defensive, when the room ignored your opener, or when the user says "how do I recover this conversation", "that bounced", or "I lost the room".
allowed-tools: AskUserQuestion, Read
---

# Conversational Recovery

## Priorities

```
Class-shift after the miss > Miss-type diagnosis > Lower-threat redeploy > Double-loop stop condition
```

## Role

Act as a repair coach using Hughes's recovery intuition, conversation-analysis repair logic, and Argyris-style assumption testing. The load-bearing move is class-shift after the miss: a failed pacing statement rewritten as stronger pacing, or a failed diagnostic question rewritten as sharper diagnostic, is not recovery but insistence. Recovery starts with miss-type diagnosis, then a true class shift after the miss into a different mechanism. The goal is not to "win the line"; it is to reopen useful movement.

Skip when there was no conversational miss and the user is still planning from scratch (route to frame-control), or when the issue is chronic structural conflict rather than a failed interaction move (route to conflict-resolution-diagram).

## Loop

1. **Round 1 — Reconstruct the miss**: what was said, by whom, and what happened next.
2. **Round 2 — Diagnose the miss type**: `AskUserQuestion`: inattentive miss, premise rejection, reactance spike, hidden constraint, or status-role rejection.
3. **Round 3 — Release**: explicitly name the failed move and forbid salvage of that exact class.
4. **Round 4 — Class shift after the miss**: choose the replacement mechanism: pacing -> resonance, alignment -> concession, diagnostic -> elicitation, presupposition -> alignment, etc.
5. **Round 5 — Redeploy**: draft the new statement + question pair or the new listening move.
6. **Round 6 — Stop condition**: decide whether to redeploy now, delay, or escalate to a deeper problem-definition skill.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Topic or Path to meeting notes/chat/thread — Read the exchange and isolate the exact failed turn before diagnosing the miss. Recovery depends on the specific miss, not the user's retrospective theory about it.
- Name the failed class explicitly, then enforce class-shift after the miss. If the first move was concession, the second move cannot be "more concession with better tone"; it must be a different mechanism.
- Diagnose whether the miss was attention, disagreement, autonomy threat, hidden constraint, or status defense. These miss types imply different redeployments.
- Stop and route to frame-control when the user is really asking for first-pass planning, and to conflict-resolution-diagram or hard-choice-model when repeated misses reveal a genuine structural incompatibility rather than a conversational problem.

## Example

<example>
Topic: "I opened with 'We're both trying to solve the same release problem' and my counterpart immediately said 'No, you're trying to dump risk on us.'"

<thinking>Class-shift after the miss is load-bearing because the alignment opener was explicitly rejected. If I tell the user to restate alignment more warmly, I teach them to press harder on the exact mechanism that already bounced. The miss-type here is premise rejection inside an adversarial frame, so the redeploy should move from alignment to concession or resonance, not better alignment wording.</thinking>

Calls AskUserQuestion:
- Question: "What kind of miss was this?"
- Options:
  - `(Recommended) Premise rejection` — they heard the frame and rejected it
  - `Reactance spike` — they felt pressured and pushed back on autonomy
  - `Status-role rejection` — they refused the role assignment
  - `Inattentive miss` — they were not really with you yet
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Recovery plan containing: reconstructed miss, diagnosed miss type, failed class, class-shift after the miss, redeploy line, and stop condition.
- Class-shift after the miss audit: the replacement move must be a genuinely different class or mechanism. If the second move is only a polished version of the first, the load-bearing move failed and the recovery plan must be rebuilt.
- Miss-type justification stating why the miss was attention, disagreement, autonomy, hidden constraint, or status defense; recovery without miss-type diagnosis is guessing.
- Double-loop stop condition: if repeated misses point to the destination itself being wrong, the output must say so and route to a deeper reframing skill rather than encouraging more conversational force.
- Ethical clause: recovery is for restoring understanding and movement, not for grinding down resistance through repeated tactical pressure.
```

## B4. Command-wrapper drafts

### `commands/frame-control.md`

```md
---
description: Plan a live conversation by diagnosing the frame already running, choosing a low-threat opener, and pairing it with the right next-step question
argument-hint: [conversation or meeting]
---

# /thinking-systems:frame-control

Plan a live conversation using frame diagnosis, question fit, and fallback recovery. Thin wrapper around the `thinking-systems:frame-control` skill.

## Usage

```
/thinking-systems:frame-control ask my manager to cut scope without sounding defensive
/thinking-systems:frame-control negotiate timeline with vendor
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"What conversation should we plan the frame for?"`.

Invoke the skill:

```
Skill(thinking-systems:frame-control, args: "$ARGUMENTS")
```
```

### `commands/frame-defense.md`

```md
---
description: Detect the frame being installed on you in a message, meeting, or transcript, then widen the option set before you reply
argument-hint: [message, meeting, or transcript]
---

# /thinking-systems:frame-defense

Analyze an incoming message or exchange for hidden assumptions, role shifts, and compressed options. Thin wrapper around the `thinking-systems:frame-defense` skill.

## Usage

```
/thinking-systems:frame-defense why did I agree to more work in this 1:1
/thinking-systems:frame-defense analyze this email from procurement
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"What message or conversation should we scan for installed frames?"`.

Invoke the skill:

```
Skill(thinking-systems:frame-defense, args: "$ARGUMENTS")
```
```

### `commands/conversational-recovery.md`

```md
---
description: Recover a conversation after a frame misses by diagnosing the miss, shifting mechanism, and redeploying with a lower-threat move
argument-hint: [failed exchange]
---

# /thinking-systems:conversational-recovery

Repair a conversation after an opener bounced or the room turned defensive. Thin wrapper around the `thinking-systems:conversational-recovery` skill.

## Usage

```
/thinking-systems:conversational-recovery my opener made them defensive
/thinking-systems:conversational-recovery recover after the timeline conversation went sideways
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"What failed conversation move should we recover from?"`.

Invoke the skill:

```
Skill(thinking-systems:conversational-recovery, args: "$ARGUMENTS")
```
```

## B5. Cross-skill modifications

### 1. [`skills/situation-behavior-impact/SKILL.md`](/Users/iamladi/Projects/claude-code-plugins/thinking-systems-plugin/skills/situation-behavior-impact/SKILL.md)

Recommended edits:

- **Line 19**: append a routing clause.
  - Current: `Skip when the user has no specific incident...`
  - Add after existing sentence:
    - `If the recipient is higher-status, hostile, or already framing the speaker as the one on defense, route through frame-control before drafting delivery — SBI fixes observation quality, not the frame the observation will land inside.`

- **Line 27**: strengthen the Intent step.
  - Current: `Do you want to ask why?`
  - Replace with:
    - `Do you want an Intent follow-up, and does this conversation need frame-control first? — recommend frame-control when the recipient is hostile, defensive, or status-asymmetric before drafting the Intent question.`

- **Line 36**: extend routing.
  - Add:
    - `When the feedback content is solid but the recipient is likely to reject the conversational position it implies, route to frame-control before delivery rather than escalating the SBI wording.`

Why: SBI and framing solve different problems. SBI improves evidentiary quality; framing improves conversational landing zone.

### 2. [`skills/minto-pyramid/SKILL.md`](/Users/iamladi/Projects/claude-code-plugins/thinking-systems-plugin/skills/minto-pyramid/SKILL.md)

Recommended edits:

- **Line 17**: explicitly connect apex fit to framing.
  - After `...the apex was pitched at the wrong reader...`
  - Add:
    - `That is structurally a frame-fit failure: the document answered inside the wrong audience frame even when its logic was sound.`

- **Line 39**: add sibling route.
  - Add:
    - `If the user is not writing for a reader but preparing to move a live conversation, route to frame-control — audience-fit apex and live frame control are siblings, not substitutes.`

Why: the plugin should make the relationship explicit without blurring written and live conversation work.

### 3. [`skills/conflict-resolution-diagram/SKILL.md`](/Users/iamladi/Projects/claude-code-plugins/thinking-systems-plugin/skills/conflict-resolution-diagram/SKILL.md)

Recommended edits:

- **Line 34**: add a defensive framing check.
  - Append:
    - `If one "demand" is actually a presupposed frame-installed conclusion ("since we all know X, choose A or B"), strip that presupposition first via frame-defense before accepting the cloud's two-demand structure.`

- **Line 37**: extend routing.
  - Add:
    - `When the apparent conflict is being created by hidden assumptions in one party's wording rather than a real needs conflict, route to frame-defense first.`

Why: otherwise the skill may solidify a false binary that was installed linguistically rather than structurally.

## B6. `README.md` and `CHANGELOG.md` drafts

### [`README.md`](/Users/iamladi/Projects/claude-code-plugins/thinking-systems-plugin/README.md)

Recommended replacement for lines 7-12:

```md
| Category | Tools |
|---|---|
| **Decision Making** | `six-thinking-hats`, `eisenhower-matrix`, `second-order-thinking`, `decision-matrix`, `impact-effort-matrix`, `ladder-of-inference`, `hard-choice-model`, `ooda-loop`, `cynefin-framework`, `confidence-determines-speed-vs-quality` |
| **Problem Solving** | `ishikawa-diagram`, `abstraction-laddering`, `conflict-resolution-diagram`, `zwicky-box`, `productive-thinking-model`, `inversion`, `issue-trees`, `first-principles` |
| **Systems Thinking** | `iceberg-model`, `connection-circles`, `concept-map`, `balancing-feedback-loop`, `reinforcing-feedback-loop` |
| **Communication** | `situation-behavior-impact`, `minto-pyramid`, `frame-control`, `frame-defense`, `conversational-recovery` |
```

Recommended addition after line 33:

```md
- "Help me frame a hard conversation with my manager" → `frame-control`
- "Analyze this email for hidden assumptions" → `frame-defense`
- "My opener made them defensive — how do I recover?" → `conversational-recovery`
```

Recommended credits tweak at line 49:

- Replace `Minto, and others` with:
  - `Minto, Goffman, Fisher-Ury, Schein, and others`

I would **not** add Hughes/NCI to the top-level README credits. Keep Hughes credited inside the framing skills as a proximate contemporary source, but avoid making the README feel like a marketing channel.

### [`CHANGELOG.md`](/Users/iamladi/Projects/claude-code-plugins/thinking-systems-plugin/CHANGELOG.md)

Recommended new unreleased block above line 8:

```md
## [Unreleased]

### Added

- 3 Communication skills for conversation framing:
  - `frame-control` — diagnose the frame already running, pick a low-threat opener, pair it with the right next-step question, and preload recovery.
  - `frame-defense` — detect hidden assumptions, role shifts, and compressed options in messages and meetings before replying.
  - `conversational-recovery` — recover after a frame misses by classifying the miss, shifting mechanism, and redeploying.
- 3 matching slash commands (`/thinking-systems:frame-control`, `/thinking-systems:frame-defense`, `/thinking-systems:conversational-recovery`).

### Changed

- `situation-behavior-impact` now routes to framing support when status or hostility would cause otherwise-valid feedback to land inside the wrong conversational frame.
- `minto-pyramid` now explicitly distinguishes document framing from live conversational framing.
- `conflict-resolution-diagram` now checks whether an apparent two-demand conflict is actually a presupposed or frame-installed false binary.
```

## C. Stress-test of `context.md §5.3`

### 1. One mega-skill or many micro-skills?

Recommendation: **three lifecycle skills**.

Tradeoff:

- Better than one mega-skill because it avoids flowchart sprawl.
- Better than many micro-skills because users think in intents, not in rhetoric taxonomies.

### 2. What is the load-bearing move for `frame-control`?

Recommendation: **frame-already-running diagnosis**.

Why not alternatives:

- `statement-before-question discipline` is useful but too shallow; you can still set the wrong frame first.
- `recovery loop` matters but happens after the primary move.
- `pairing rule` matters, but wrong diagnosis makes correct pairing irrelevant.

### 3. How much of NCI / Hughes lineage should be cited?

Recommendation:

- Cite Hughes inside the framing skills as a **contemporary popularizer** of the 5+5 schema.
- Cite Goffman, Lakoff, Tversky-Kahneman, Fisher-Ury, Schein, Voss, and conversation-analysis traditions as the broader validated lineage.
- Do not mention paid courses, course rankings, or NCI marketing claims.

### 4. Defensive vs offensive split?

Recommendation: **split them**.

Tradeoff:

- Cleaner routing.
- Cleaner ethics.
- Better match to existing plugin pattern.

### 5. Routing rules

Recommendation:

- "Help me write feedback for X" -> `situation-behavior-impact`
- "Help me write feedback for X, and they're my manager / they're hostile / this always gets defensive" -> `frame-control` first, then SBI
- "Negotiate this contract clause" -> `frame-control`
- "Why does my 1:1 always end with me agreeing to more work?" -> `frame-defense`
- "Analyze this loaded email / transcript" -> `frame-defense`
- "My opener bounced / I lost the room" -> `conversational-recovery`

## D. Risks and Disclaimers

### D1. What in Hughes does not survive cross-validation

These claims should be softened or rejected in plugin copy:

1. **"Questions by themselves do nothing."**
   Too strong. Conversation analysis and Socratic traditions both show that question design alone can strongly shape roles and responses.

2. **The exact 5+5 inventory as a canonical map.**
   Useful teaching device, not validated ontology.

3. **The hierarchy "resonance is most powerful / presupposition is sharpest."**
   Plausible practitioner judgment, not literature-backed ranking.

4. **NLP-adjacent implications.**
   Linguistic presupposition is real; NLP's broader empirical standing is weak. <https://www.psychologytoday.com/us/therapy-types/neuro-linguistic-programming-therapy>

5. **Implicit promise of large persuasion effects from message form alone.**
   Message-design meta-analysis suggests many framing variants have small average effects and high contextual variability. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8275937/>

### D2. Adoption risks for a developer-focused plugin

Do **not** route users into framing skills when:

- the task is solitary reasoning, not conversation,
- the deliverable is a memo or deck,
- the problem is fundamentally structural or technical rather than interpersonal,
- the user is looking for generic productivity advice,
- the counterpart is absent and the actual problem is an unsupported inference.

Specific developer caution:

- Framing skills should not become a substitute for technical truth, staffing reality, or scope clarity.
- In engineering contexts, a clean causal model or evidence trail often matters more than conversational leverage.
- If the "frame" is doing all the work because the substance is weak, the plugin should say so.

### D3. Citation hygiene

Recommended credit posture:

- Credit Hughes's YouTube talk as the immediate source for the 5+5 schema.
- Credit the broader tradition as the intellectual backbone.
- Avoid citing NCI marketing pages or promotional claims.
- Prefer URLs for institutional, academic, or official publisher pages:
  - Goffman / frame analysis: <https://www.britannica.com/topic/frame-analysis>
  - Lakoff on framing and language: <https://newsarchive.berkeley.edu/news/media/releases/2003/10/27_lakoff.shtml>
  - Tversky-Kahneman framing effects: <https://www.science.org/doi/pdf/10.1126/science.7455683>
  - Fisher-Ury: <https://www.penguinrandomhouse.com/books/324551/getting-to-yes-by-roger-fisher-and-william-ury/>
  - Schein humble inquiry: <https://mitpressbookstore.mit.edu/book/9781609949815>
  - Schein process consultation: <https://sloanreview.mit.edu/article/a-general-philosophy-of-helping-process-consultation/>
  - Boyd/OODA orient: <https://www.airuniversity.af.edu/AFCLC/News/Article-Display/Article/1777083/cultural-ksas-skill-development-using-the-ooda-loop/>
  - Voss / Black Swan calibration, accusation audit, no-oriented questions: <https://www.blackswanltd.com/newsletter/using-calibrated-questions%EF%B8%8F-to-win-more-deals> <https://www.blackswanltd.com/the-edge/what-is-the-black-swan-accusation-audit> <https://www.blackswanltd.com/newsletter/negotiation-training-the-top-4-no-oriented-questions>
  - Reactance review: <https://www.frontiersin.org/articles/10.3389/fcomm.2019.00056/full>

## Final Recommendation

Add `frame-control`, `frame-defense`, and `conversational-recovery` to `Communication`. Treat Hughes as a useful proximate schema, not as the final ontology. Build the skills around:

- frame diagnosis,
- autonomy-aware question design,
- option-space recovery,
- and repair after misses.

That gives the plugin something genuinely additive without turning it into a manipulation toolkit.

<!-- RESEARCH_COMPLETE -->
