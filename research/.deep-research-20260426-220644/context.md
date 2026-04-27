# Context — Framing Tactics Deep Research

**Topic:** Extract the framing tactics taught in Chase Hughes's video "The 5 Sentences That Turn The Tables" (https://www.youtube.com/watch?v=VD1RI50NXzk) and design extensions to the `thinking-systems-plugin` that incorporate them.

**Working dir:** `/Users/iamladi/Projects/claude-code-plugins/thinking-systems-plugin`

**Discovery output produced 2026-04-26.**

---

## 1. Source video — metadata

| Field | Value |
|---|---|
| Title | The 5 Sentences That Turn The Tables |
| Author | Chase Hughes (NCI / Behavior Operations Manual) |
| Duration | 1983 s (~33 min) |
| URL | https://www.youtube.com/watch?v=VD1RI50NXzk |
| Transcript local | `transcript.txt` (29.6 KB, auto-captions cleaned + deduplicated) |

The author's broader work: Chase Hughes runs the **NCI** (Behavioral Table of Elements / Behavior Operations Manual) — frameworks designed for intelligence/interrogation/negotiation training applied to civilian conversation. The video promotes paid courses NCI-1 (foundational behavior profiling) and NCI-3 (advanced behavior shaping), but the 5+5 framework presented in the body of the talk is self-contained.

---

## 2. The video's core architecture (verbatim-grounded summary)

Hughes presents one **architecture** for conversational frame control:

```
[STATEMENT that sets a frame] + [QUESTION that locks the listener inside it]
```

> "Statements set frames. Questions lock people inside of them. And if you can control that sequence, you can control where any conversation goes and what's possible inside of it." (transcript closing)

Three opening case studies anchor the model:

1. **Doctor's office.** "It looks like we've been dealing with this for a while now." (statement → installs *shared, ongoing problem* frame) + "What are we hoping to accomplish today?" (question → locks scope of allowable patient desires).
2. **Boss / corporate.** "I appreciate how hard everybody here has been kind of stretched thin over these past few weeks." (concession statement) + "So what is realistic for everybody for a delivery date on this?" (directional question → answer gravitates to moderation).
3. **Parent.** "The only thing I've ever wanted in my life is what's best for you. And I hope you know that." (presupposition statement → identity-as-loving-actor) + "I just want you to help me understand what you're thinking here." (diagnostic question → puts child in the evaluated role).

Hughes's polemical claim: "Ask better questions / the person asking the questions controls the conversation" is **wrong**. A "naked question" — one not preceded by a frame-setting statement — operates inside whichever frame is already running in the room (typically the higher-status party's). Patient asking doctor, junior asking VP, defendant asking plaintiff: each "great question" reinforces the existing frame rather than seizing it.

### 2a. The five STATEMENT classes (frame-setters)

| # | Class | Mechanism | Verbatim example | Adversary against |
|---|-------|-----------|------------------|-------------------|
| 1 | **Pacing** | Describes what is already observably true. Triggers internal "yes" / micro-agreement; critical faculty doesn't activate. | "We've been going back and forth on this for a couple of weeks now." | Skepticism, vigilance |
| 2 | **Alignment** | Asserts shared intent / common desired outcome. Collapses adversarial frame; pushing back means pushing back against collaboration. | "I want to make sure we're both getting what we need out of this." | Adversarial frame |
| 3 | **Resonance** | Names the other person's internal state (frustration, priority, unspoken cost) before they do. Recipient's shoulders drop, breathing shifts. Most powerful per Hughes. | "I could be wrong, but I think you're frustrated because this is the third time the scope has changed and nobody has acknowledged it cost you something." | Need-to-be-understood / preparing-to-fight |
| 4 | **Concession** | Gives ground / acknowledges a cost or limitation **before** the other person forces you to. Disarms counterattack pre-launch. Earns the right to ask a hard question. | "I know our last release missed the date — and that's on me." (then hard question) | Pre-loaded objections / posturing |
| 5 | **Presupposition** | Embeds an assumption as already-established fact in the grammar; challenging it requires explicit derailment. | "Since we're moving forward with the expansion …" (when nothing was decided) | Default-in-favor; the listener's brain skips the audit |

Pacing = simplest. Resonance = highest leverage. Presupposition = sharpest. Concession = the unlock for hard questions. Alignment = adversarial-room opener.

### 2b. The five QUESTION classes (frame-lockers)

| # | Class | Mechanism | Verbatim example | Pairs naturally with |
|---|-------|-----------|------------------|----------------------|
| 1 | **Directional** | Builds a hallway pointing at one conclusion; listener arrives there themselves and owns the conclusion. | "What do you think happens to the team if we keep running at this pace for another 6 months?" | Pacing, concession |
| 2 | **Assumptive** | Jumps over the decision to a *post-decision* operational question; treats the decision as already made. | "When we roll this out next month, do you want to start with the East Coast team or go company-wide?" | Presupposition |
| 3 | **Elicitation** | Indirect data-gathering. Often grammatically a *statement* (no question mark). Conversational thinking-out-loud. | "I've been trying to figure out how teams like yours usually handle the budgeting on something this massive." | Resonance, alignment |
| 4 | **Reframe** | Lens-swap inside a single question. Replaces the dimension everyone was arguing on. | "What if this isn't a budget problem? What if it's a sequencing problem?" | Any statement (Lego-fits-all) |
| 5 | **Diagnostic** | Asks the other to "show their work" — the asker is the evaluator, the answerer the evaluated. Power-position flip. | "I'm just curious — walk me through how you arrived at that number." / "Help me understand the thinking behind that timeline." | Concession, presupposition |

5 statements × 5 questions ⇒ **25-cell pairing matrix**. Hughes does not provide a flowchart; he provides two routing questions instead (see §2d).

### 2c. The recovery loop (when the frame doesn't land)

This is a load-bearing part of the talk and easy to miss because it's late in the transcript. Hughes calls trying-and-being-seen-trying the worst failure mode ("trying is the opposite of having; the moment they can see effort, the game is over").

Four-step recovery:

1. **Read the miss.** Diagnose *why* the move failed. Two distinct sub-failures:
   - **Empty-room miss** — the listener wasn't paying attention; statement was technically perfect but landed in dead air. Diagnosis: "I have a focus-generation problem," not a tactic problem.
   - **Held-frame miss** — the listener heard it and actively rejected the premise. Different problem: their frame is loaded and yours bounced.
2. **Release the frame to the universe.** Drop the move completely. Don't reference it again, don't try to salvage, don't repeat-with-emphasis. "The willingness to let that go is what keeps you in the game. The person who drops it without flinching and then moves is dangerous because they showed they have more than one way in."
3. **Shift the class.** Not a different version of the same statement — a **different statement class**. Pacing rejected → don't pace harder; switch to **resonance**. Alignment rejected → switch to **concession**.
4. **Deploy the new pairing.** New statement class + new question type, same destination, different door. Crucially, the second attempt has *more* information than the first because failure-data revealed what the listener protects.

Frame: "The best operators don't land the frame on the first try. They use the first statement the way a boxer uses a jab — not for the knockout, but to see how the other person moves."

### 2d. Two routing questions (Hughes's selection rule)

Instead of a 25-cell matrix lookup, Hughes prescribes asking yourself two questions before speaking:

**Q1 — What frame is already running?**
- *Authority* frame (doctor, attorney, executive, expert) → **Resonance** + **Concession** are the only ways in. Don't try to out-authority an authority; go under it.
- *Adversarial* frame (both sides braced, no trust) → **Alignment** must open. First-installer wins.
- (Implied) *Emotional* frame (someone is angry, scared, checked out) → **Resonance** first.
- (Implied) *Narrative* frame (group has agreed on a story about who's to blame) → **Reframe**.

**Q2 — What do I need them to do in the next 30 seconds?**
- Arrive at a specific conclusion themselves → **Directional**.
- Act as if a decision is already made → **Assumptive**.
- Hand me information without realizing it → **Elicitation**.
- See the situation through a different lens → **Reframe**.
- Cede the evaluator role to me → **Diagnostic**.

Hughes is explicit that **it is never outcome-based**. It is move-based. "What needs to happen next" — if you can always answer that, "you don't need to close sales anymore."

### 2e. Hughes's claims about origin and ethics

The doctor, the boss, and the parent in the opening cases are *not* manipulating consciously. The architecture self-installs through 10,000 patient interactions / years of practice. "Frame control runs 24 hours a day in every situation you will be in for the rest of your life" — the framework is descriptive of what already happens, prescriptive only insofar as it lets the previously-framed-on-by-default party participate consciously.

This matters for plugin design: a **defensive** read of the framework (notice frames being installed *on me*) is as legitimate as an **offensive** read (install frames deliberately).

---

## 3. Plugin codebase — relevant existing structure

### 3.1 Layout

```
thinking-systems-plugin/
├── .claude-plugin/plugin.json   # name=thinking-systems, version=0.1.0
├── README.md
├── CHANGELOG.md
├── commands/                    # 25 thin slash-command wrappers, one per skill
│   ├── six-thinking-hats.md
│   ├── situation-behavior-impact.md
│   └── … (25 total)
├── skills/                      # 25 SKILL.md files, one per dir
│   ├── six-thinking-hats/SKILL.md
│   ├── situation-behavior-impact/SKILL.md
│   ├── minto-pyramid/SKILL.md
│   └── … (25 total)
├── scripts/validate-plugin.ts   # 12.5K — manifest validator
├── .gnhf/runs/                  # quality-audit artefacts (latest run #60 closed Input Handling drift)
└── research/                    # this directory
```

### 3.2 Existing skills by category (README.md§"What's inside")

| Category | Tools (count) |
|---|---|
| Decision Making (10) | six-thinking-hats, eisenhower-matrix, second-order-thinking, decision-matrix, impact-effort-matrix, ladder-of-inference, hard-choice-model, ooda-loop, cynefin-framework, confidence-determines-speed-vs-quality |
| Problem Solving (8) | ishikawa-diagram, abstraction-laddering, conflict-resolution-diagram, zwicky-box, productive-thinking-model, inversion, issue-trees, first-principles |
| Systems Thinking (5) | iceberg-model, connection-circles, concept-map, balancing-feedback-loop, reinforcing-feedback-loop |
| **Communication (2)** | **situation-behavior-impact, minto-pyramid** ← thinnest category, primary extension target |

### 3.3 Skill file shape — canonical

Every SKILL.md follows the same structure (verified against `six-thinking-hats/SKILL.md`, `situation-behavior-impact/SKILL.md`, `minto-pyramid/SKILL.md`):

**Frontmatter:**
```yaml
---
name: <kebab-name>
description: <one paragraph: what the skill does + the LOAD-BEARING MOVE (the one phrase
  that distinguishes correct application from ceremonial application) + when to use
  (triggers, including verbatim phrases the user might say)>
allowed-tools: AskUserQuestion, Read
---
```

**Body sections (in order):**

1. `# <Title>` — human-readable name
2. `## Priorities` — fenced code block with `>`-separated priority chain (e.g. `Blue-hat scope-lock > Perspective rebalance > Black-hat dominance guard > Closure`)
3. `## Role` — what the assistant **acts as** (a named tradition: "Edward de Bono-style facilitator", "Barbara Minto-style communication architect", "feedback coach in the Center for Creative Leadership tradition") + restatement of the load-bearing move + skip conditions
4. `## Loop` — numbered round-by-round procedure. Each round typically uses `AskUserQuestion` with: (a) a `(Recommended)` option with rationale, (b) 2–3 alternatives each with tradeoffs, (c) `Not sure - you decide` escape. Footer line repeated every round: ``Footer every round: `Reply format: 1a 2b or defaults` ``
5. `## Input Handling` — how to interpret the prompt (path vs. topic), what to extract first, when to **skip and route** to a sibling skill
6. `## Example` — one worked `<example>` block containing a `<thinking>` block that justifies *why* the load-bearing move is load-bearing on *this* example, then a sample `AskUserQuestion` call
7. `## Completion` — what the synthesized output must contain. Each bullet ties back to the load-bearing move via an explicit **audit clause** ("if X survives in Y, the load-bearing move has failed and …re-run").

### 3.4 Slash command shape — canonical

`commands/<name>.md`:

```yaml
---
description: <same as skill description, abbreviated>
argument-hint: [topic-shaped-hint]
---

# /thinking-systems:<name>

<one-line description>. Thin wrapper around the `thinking-systems:<name>` skill.

## Usage

```
/thinking-systems:<name> <topic example>
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"<routing question>"`.

Invoke the skill:

```
Skill(thinking-systems:<name>, args: "$ARGUMENTS")
```
```

### 3.5 The "load-bearing move" convention

Every skill description and Role section names exactly **one** load-bearing move — the move that, if performed correctly, distinguishes the skill from ceremonial application; if skipped or done wrong, the rest of the procedure produces structurally-correct-but-empty output. Examples:

| Skill | Load-bearing move |
|---|---|
| six-thinking-hats | **Blue-hat scope-lock** at the start (vague scope → all later hats collapse to generic talking points) |
| situation-behavior-impact | **Video-frame test** on Behavior (a recorded camera would capture only words/gestures/timestamp, no trait or motive language) |
| minto-pyramid | **Audience-fit check on the apex** (same apex is right for an exec, wrong for an engineer) |
| ladder-of-inference | **Data-rung reconstruction** (what a camera would have recorded) |
| inversion | **Mechanism question** ("why would that actually kill the project?") that converts vague fears into concrete preventive actions |

The plugin's house style is to make the load-bearing move explicit in three places: (1) the description (one phrase), (2) the Role section (one paragraph explaining the failure mechanic), (3) the Completion section (an **audit clause** that re-runs the loop if the load-bearing move was skipped).

### 3.6 Existing related skills — closest neighbors to framing

Five existing skills already do framing-adjacent work; new framing skills must position against them, not duplicate them:

| Existing skill | What it does | Where it does NOT touch framing |
|---|---|---|
| **situation-behavior-impact** | Delivers feedback (S+B+I+optional Intent). Video-frame test on Behavior. | Doesn't address what frame the recipient is *holding* before SBI lands; doesn't address conversational sequence longer than one statement. |
| **minto-pyramid** | Top-down written communication: apex first, then 3–5 supporting arguments, then detail. | Document-shaped, not turn-by-turn dialogue. Apex is the *answer*, not the *frame the answer rides on*. |
| **conflict-resolution-diagram** | Surfaces shared goal + invalidates the assumption that makes two demands look mutually exclusive. | Treats the conflict as object-level; doesn't interrogate which party owns the conversational frame. |
| **ladder-of-inference** | Walks a belief back down to raw data. Defensive (audits *my own* belief). | Audits a single inference chain post-hoc, not a live conversational sequence. |
| **abstraction-laddering** | Climbs problem definition up (why) and down (how). Detects "solution-rung framings". | "Solution-rung framing" detection is the closest existing primitive to Hughes's "presupposition" detection, but operates on problem definitions in product/strategy work, not conversational moves. |

The Communication category is structurally under-built (2 skills vs. 8–10 in other categories). Framing tools fit there cleanly.

### 3.7 Quality-audit infrastructure (`.gnhf/runs/`)

The plugin maintains an automated cross-layer audit (most recent: `.gnhf` run #60, "Input Handling-Example cross-layer drift", 2 skills fixed; runs #57–#60 each closed an agreement-matrix gap and brought consistency to 25/25). New skills will be subject to the same audit; the audit checks that the load-bearing move named in the description appears verbatim (or near-verbatim) in: Priorities, Role, Input Handling, Example `<thinking>`, Completion. New skills should be audit-clean from day one.

---

## 4. Web research summary — framing tactics in the broader literature

(Compressed from a Perplexity sonar-pro deep search. Full findings to be re-validated by Phase 2 LLMs.)

- **Goffman, *Frame Analysis* (1974).** Frames are shared definitions of a situation that organize experience. Frame *control* in conversation = leading who defines the consensus reality. Hughes's "frame is always there everywhere" matches Goffman's claim that no interaction is unframed.
- **Lakoff, *Don't Think of an Elephant* (2004); *Moral Politics* (1996).** Frames are mental structures activated by language; *every word evokes a frame*. Pre-framing (planting the frame before the conversation begins, e.g., in an email or opener) tracks Hughes's "the statement does the work, the question walks through the door."
- **Tversky & Kahneman, "The Framing of Decisions" (Science, 1981).** Identical options yield different choices based on gain-vs-loss presentation. Establishes the *empirical reality* of framing effects on cognition. Hughes's "directional question" relies on this — the question's grammar determines which conclusion is cognitively cheaper.
- **Chris Voss, *Never Split the Difference* (2016).** "Tactical empathy" + "labels" ("It seems like…", "It sounds like…") track Hughes's **Resonance** statement class almost 1:1. Voss's "mirrors" track the **Pacing** class. Voss's calibrated questions ("how" / "what" framings, never "why") track the **Directional** question class.
- **NLP "presupposition" patterns (Bandler & Grinder, *Structure of Magic*, 1975).** The grammatical embedding of unstated assumptions in questions ("when you implement this, will you start with…") is the canonical NLP move. Hughes's Presupposition class is this, and his Assumptive Question is the paired follow-through.
- **Cialdini, *Influence* (1984); *Pre-Suasion* (2016).** *Pre-Suasion* is the closest single book to Hughes's framework: the channel-of-attention you open *before* a request is more determinative than the request itself. Maps to Hughes's whole statement-then-question architecture.
- **Ackerman bargaining model (FBI hostage negotiation).** Concede precisely (65% / 85% / 95% / 100%) to anchor the other side's perception of the deal range. Maps to Hughes's **Concession** statement class but operates at deal-numerics scale, not conversational-turn scale.
- **Boyd's OODA loop** (already in the plugin). Framing tactics live almost entirely in the **Orient** stage; Hughes's "what frame is already running?" is an Orient question. Existing `ooda-loop` skill is the right place to *cite* the framing skills, not a place to embed them.

The literature converges on the same architecture Hughes presents, with different vocabularies. This is reassuring for plugin design: a framing-tactics skill is integrating well-established material, not inventing a tradition.

---

## 5. Discovery findings → design surface for Phase 2

Phase 2 LLMs are asked to design **plugin extensions** (not generic essays on framing). The surface is:

### 5.1 Candidate new skills

(Phase 2 should evaluate each: include? merge? rename? what is the load-bearing move? what does it route to / from?)

1. **`frame-control`** — top-level skill that walks the user through the Statement+Question architecture for a specific upcoming conversation. Loop: identify-frame-already-running → pick statement class → pick question class → draft → recovery-plan-if-it-misses.
2. **`reframe`** — narrower skill focused on the **Reframe question** (lens-swap) as a standalone move for a stuck conversation. Distinct from `abstraction-laddering` (which works on problem definitions, not live exchanges).
3. **`presupposition-detector`** — *defensive* skill: scan an incoming message / meeting transcript for presupposed frames being installed on the user. Inverse of the offensive Presupposition statement class.
4. **`pacing-and-leading`** / **`resonance-statement`** — drill-down skills for the two statement classes Hughes calls highest-leverage (Pacing as easiest, Resonance as most powerful).
5. **`concession-then-ask`** — the concession-unlocks-hard-question pattern as a standalone; pairs naturally with SBI delivery and with hard negotiation moments.
6. **`tactical-empathy`** — a Voss-flavored skill (overlaps with Resonance but with a richer tradition behind it). Question for Phase 2: separate skill, or merged into `frame-control`?
7. **`conversational-recovery`** — the four-step "the frame didn't land" loop as a standalone (read the miss → release → shift class → redeploy).

### 5.2 Candidate cross-skill changes

- Update `situation-behavior-impact` to reference `frame-control` for the **Intent** question variant (which is functionally a Concession-then-diagnostic pairing).
- Update `conflict-resolution-diagram` to flag when one party's "demand" is actually a frame-installed presupposition rather than an interest.
- Update `minto-pyramid` to note that the apex-fit check is structurally a *frame-fit* check (which audience's frame is the apex written into).
- Update README.md's Communication category — the category currently has 2 skills; framing additions would more than double it and may justify a sub-category split.

### 5.3 Open design questions for Phase 2 to resolve

1. **One mega-skill or many micro-skills?** `frame-control` containing the whole 5+5 matrix is high-leverage but risks becoming a 25-cell flowchart Hughes himself avoids. Multiple small skills (one per statement class, one per question class) is more in keeping with the plugin's per-skill granularity but produces 10+ new skills.
2. **What is the load-bearing move for `frame-control`?** Hughes implies it is **identifying the frame already running before speaking**. Phase 2 should pressure-test alternatives: is it the *statement-before-question discipline*? The *recovery loop*? The *pairing rule*?
3. **How much of NCI / behavior-profiling lineage should be cited?** The plugin cites Edward de Bono, Barbara Minto, John Boyd etc. — well-established traditions. Hughes is contemporary and runs paid courses; citation should be careful (acknowledge the source of the 5+5 framing without making the plugin a marketing channel for NCI).
4. **Defensive vs. offensive split.** Hughes's framework is symmetrical (notice frames *or* install them). Plugin precedent (e.g., ladder-of-inference is defensive; SBI is offensive) suggests two skills may be cleaner than one with a mode flag.
5. **Routing rules.** When does the user invoke `frame-control` vs. an existing skill? Examples Phase 2 should resolve:
   - "Help me write feedback for X" → SBI (existing) — *but* Hughes would say SBI's Behavior+Impact lands inside whatever frame is already running; should SBI route to `frame-control` first when the recipient is hostile or higher-status?
   - "Negotiate this contract clause" → no existing skill owns this; `frame-control` is a candidate primary.
   - "Why does my 1:1 with my manager always end with me agreeing to more work?" → `frame-control` (defensive read on the meeting frame) — *not* `eisenhower-matrix` for the workload.

### 5.4 Anti-patterns to avoid

- A skill that is just the 5+5 matrix as a lookup table (Hughes himself rejects the flowchart).
- A skill that loses the **recovery loop** (it is half the talk and is what differentiates Hughes's framework from generic NLP-flavored "say this magic phrase" advice).
- A skill that smuggles in NCI marketing language ("the most advanced behavior course in the world").
- A skill that frames the technique as universally manipulative without preserving Hughes's claim that the doctor/boss/parent are not consciously manipulating; the framework is descriptive of how human conversation already works.

---

## 6. Files Phase 2 should read

- `transcript.txt` — full transcript, in this same directory.
- `skills/six-thinking-hats/SKILL.md` — canonical example of a multi-stage facilitator skill.
- `skills/situation-behavior-impact/SKILL.md` — canonical example of a single-incident communication skill with a video-frame load-bearing move.
- `skills/minto-pyramid/SKILL.md` — the other Communication-category skill.
- `commands/six-thinking-hats.md` — canonical command-wrapper shape.
- `README.md` — categorization framing.
- `.claude-plugin/plugin.json` — manifest.

End of context.
