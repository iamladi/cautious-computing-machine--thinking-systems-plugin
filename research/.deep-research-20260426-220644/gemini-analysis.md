# Framing Tactics — Deep Research Analysis

**Date:** 2026-04-26
**Analyst:** Gemini CLI
**Subject:** Extension of `thinking-systems-plugin` with Framing Tactics

---

## Executive Summary

This analysis corroborates Chase Hughes's "5 Sentences" (Statement+Question architecture) against the broader literature of behavioral psychology, negotiation, and linguistics. We find that while Hughes's terminology is unique, the primitives map directly to established traditions (Voss, Cialdini, Lakoff, NLP). We propose a tiered extension to the `thinking-systems-plugin` that introduces conversational frame control, tactical empathy, and defensive frame detection.

---

## A. Framing Tactics — Literature Analysis

### A1. Cross-Validation of Hughes's 5+5 Framework

Hughes’s architecture—**[Statement] + [Question]**—is a delivery vehicle for well-attested psychological primitives.

| Hughes Class | Literature / Tradition Corroborate | Primitive Name |
|:---|:---|:---|
| **Pacing** (Statement) | Chris Voss (*Never Split the Difference*) | **Mirroring**: Repeating 1–3 words to validate reality and encourage flow. |
| **Alignment** (Statement) | Robert Cialdini (*Influence*) | **Unity / Liking**: Establishing "we-ness" to reduce adversarial friction. |
| **Resonance** (Statement) | Chris Voss | **Labeling**: Naming the other person's emotions to diffuse negatives or reinforce positives. |
| **Concession** (Statement) | Cialdini / Ackerman Model | **Reciprocity**: Proactively giving ground to trigger the internal urge to return the favor. |
| **Presupposition** (St.) | Bandler & Grinder (NLP) | **Presuppositional Linguistics**: Grammatically embedding an assumption as fact. |
| **Directional** (Question) | Tversky & Kahneman | **Anchoring/Framing**: Closing off alternatives by narrowing the search field. |
| **Assumptive** (Question) | NLP / Sales Literature | **The Assumptive Close**: Skipping the "if" to focus on the operational "how/when." |
| **Elicitation** (Question) | Hughes (NCI) / Intelligence | **Non-Question Inquiries**: Statements designed to trigger the human need to correct. |
| **Reframe** (Question) | George Lakoff / NLP | **Reframing**: Shifting the lens from "Problem" to "Process" or "Cost" to "Investment." |
| **Diagnostic** (Question) | Socratic Method / Voss | **Calibrated Questions**: "How" or "What" questions that put the other in the evaluator role. |

### A2. Tactics Missing from Hughes

Hughes focuses on *conversational turn-taking*. The broader literature identifies higher-order framing tactics:

1.  **Accusation Audit (Voss):** Proactively labeling every negative thought the other party has about you *before* you speak. This is a "pre-resonance" move that Hughes's Concession class only partially covers.
2.  **No-Oriented Questions (Voss):** Designing questions where "No" means "Yes" (e.g., "Is it a ridiculous idea to...?"). This makes the recipient feel safe and in control.
3.  **Identity-Stake Framing (Starr):** Elevating the argument to the level of identity ("As someone who takes pride in code quality..."). Hughes touches this in Alignment but doesn't name identity as the primary anchor.
4.  **Temporal Framing (Starr / CLT):** Shifting the time horizon (10-year lens) to change the "construal level" (abstract vs. concrete).
5.  **Loss Framing (Tversky-Kahneman):** Framing a choice as "avoiding a loss" rather than "gaining a benefit" (statistically more powerful).

### A3. The Recovery Loop

Hughes's "Read → Release → Shift → Redeploy" loop is a simplified version of **Double-Loop Learning** (Chris Argyris) and **Process Consultation** (Edgar Schein).

*   **Read the Miss:** Corresponds to Schein's "Process Observation"—noticing the *here-and-now* dynamics rather than the content.
*   **Release the Frame:** Corresponds to Argyris's "Double-Loop"—questioning the underlying mental model (the Frame) rather than just trying a new tactic (Single-Loop).
*   **Shift Class:** Corresponds to "Tactical Empathy" (Voss)—switching from data-gathering to emotional-venting when the room stays hot.

### A4. Defensive Read: Detecting Frames

How to detect frames in real-time (Goffman's "Frame Breaks"):

1.  **Metalinguistic Probe:** Asking "What is it that's going on here?" (Goffman's core question).
2.  **Presupposition Extraction:** Identifying the nouns/verbs that haven't been agreed upon but are being used (e.g., "Since we're moving forward..." → "Wait, did we decide to move forward?").
3.  **Left-Hand Column (Schein):** Mentally tracking what you are *thinking* vs. what you are *saying* to identify where the frame is forcing a "fabrication."

### A5. Ethics: Framing vs. Manipulation

The plugin must adopt the position of **"Cooperative Frame-Setting."**
*   **Honest Framing:** Setting a shared context that reduces friction (e.g., the Doctor's office).
*   **Manipulation:** Installing a frame that hides the interlocutor's best interest or relies on deception (e.g., Hughes's "Elicitation" involving lying about salary raises).
*   **Plugin Stance:** The plugin will strictly use framing for **Clarity, Alignment, and De-escalation.** It will avoid "Elicitation via Deception."

---

## B. Plugin Extension Proposals

### B1. Skill Inventory

| Skill Name | Description | Category | Routing |
|:---|:---|:---|:---|
| `conversational-framing` | Uses the Statement+Question architecture to set a context before a request. | Communication | Routes to `situation-behavior-impact` for the content. |
| `tactical-empathy` | Focuses on Resonance and Accusation Audits to de-escalate hostiles or authorities. | Communication | Routes to `conflict-resolution-diagram` if impasse persists. |
| `frame-defense` | Defensive: analyzes an incoming text/transcript to extract presuppositions and anchors. | Communication | Routes from any "Help me respond to this" prompt. |

### B2. Mega-skill vs. Micro-skills

**Recommendation:** **Mega-skill for Framing, Micro-skill for Empathy.**
The 5+5 matrix is most powerful as a *pairing exercise*. Splitting it into 10 skills makes the plugin unusable. However, `tactical-empathy` (Voss/Hughes Resonance) is a "drill" that deserves its own slot because it is the primary "unlock" for all other framing.

---

### B3. SKILL.md Draft: `conversational-framing`

```markdown
---
name: conversational-framing
description: Sets a psychological context using the Statement+Question architecture. It uses the Statement-before-Question discipline to install a frame before a request is made, ensuring the request is heard inside the desired lens. Use when preparing for a 1:1, negotiation, or delivery of news where you need the recipient to adopt a collaborative or specific perspective.
allowed-tools: AskUserQuestion
---

# Conversational Framing

## Priorities
Orient-to-existing-frame > Statement-before-Question discipline > Pair-selection > Recovery-plan

## Role
You act as a conversational architect in the Chase Hughes/Chris Voss tradition. You prevent the "Naked Question" error—asking a question inside a frame you don't control. Your load-bearing move is the **Statement-before-Question discipline**, which requires that every strategic question be preceded by a frame-setting statement (Pacing, Alignment, Resonance, Concession, or Presupposition) to anchor the recipient's psychology.

## Loop
1. **Orient:** Identify the frame currently running in the room (Authority, Adversarial, or Emotional).
2. **Select Statement:** Choose the statement class (Pacing for skeptics, Alignment for adversaries, Resonance for emotional/authorities, Concession for hard asks).
3. **Select Question:** Choose the question class (Directional for specific outcomes, Assumptive for operational follow-through, Diagnostic for power-flip).
4. **Draft Pairing:** Synthesize the specific phrase.
5. **Recovery:** Plan a "Shift" class statement if the first pairing misses.

## Input Handling
If user provides a scenario: Extract the **Relationship Status** (Authority vs. Peer) and the **Goal**.
If user provides a draft message: Check for "Naked Questions" and apply the **Statement-before-Question discipline**.

## Example
<thinking>
The user wants to ask for a deadline extension from a demanding boss (Authority frame). A naked question ("Can we have two more weeks?") will be rejected inside the "Boss-as-Evaluator" frame. I must use the **Statement-before-Question discipline** to lead with a Concession or Resonance statement first.
</thinking>

AskUserQuestion(
  question="The current frame is 'Authority'. To shift this, we need to lead with a Concession or Resonance. Which feels more true to your situation?",
  choices=[
    {"id": "concession", "text": "Concession (Acknowledge the missed target first)", "rationale": "Earns the right to ask for more time."},
    {"id": "resonance", "text": "Resonance (Name their priority/frustration)", "rationale": "Makes them feel understood before you ask."}
  ]
)

## Completion
- Drafted Pairing (Statement + Question).
- Audit: Does the pairing follow the **Statement-before-Question discipline**? (If question starts the message, re-run).
- Recovery Move: A fallback statement class if the first one bounces.
```

---

### B3 (cont). SKILL.md Draft: `frame-defense`

```markdown
---
name: frame-defense
description: Analyzes messages or transcripts to detect "installed frames." It uses the Frame-break probe to identify presuppositions, anchors, and identity-stakes that a sender is using to constrain your options. Use when you feel "boxed in" by a request or when a conversation feels subtly manipulative.
allowed-tools: Read
---

# Frame Defense

## Priorities
Presupposition-extraction > Anchor-identification > Identity-stake-detection > Frame-break probe

## Role
You act as a linguistic auditor in the Erving Goffman/NLP tradition. You protect the user from being "keyed" into a reality they didn't agree to. Your load-bearing move is the **Frame-break probe**, which identifies specific nouns or verbs that embed an unstated assumption (e.g., 'Since we are...' or 'What are we hoping...?').

## Loop
1. **Scan:** Identify every noun or verb that presupposes a decision not yet made.
2. **Anchor Audit:** Identify numerical or temporal anchors designed to limit the scope of your response.
3. **Identity Check:** Flag phrases that tie the outcome to your self-concept (e.g., 'As a professional...').
4. **Frame-break probe:** Formulate a "What is it that's going on here?" question to reset the frame.

## Example
<thinking>
User received: 'What are we hoping to accomplish today?' The 'what' anchor limits allowable desires; the 'we' presupposes a shared team. I will use the **Frame-break probe** to surface these assumptions.
</thinking>

- **Detected Presupposition:** 'We' (Assumes collaborative status already exists).
- **Detected Anchor:** 'Accomplish' (Limits output to productive work only).
## Completion
- List of extracted presuppositions.
- Audit: Does the output contain a **Frame-break probe** (a question targeting the unstated context)? If only labels are provided, re-run.

---

### B3 (cont). SKILL.md Draft: `conversational-recovery`

```markdown
---
name: conversational-recovery
description: Repairs a failed interaction using the Read-Release-Shift-Redeploy loop. It uses the Frame-release move to drop a rejected perspective without flinching and switch to a different statement class (e.g., from Pacing to Resonance). Use when a conversational move "bounces," a joke falls flat, or the other person explicitly rejects your premise.
allowed-tools: AskUserQuestion
---

# Conversational Recovery

## Priorities
Read-the-miss > Frame-release > Class-shift > Redeploy

## Role
You act as a conversational resilience coach in the Chase Hughes/Edgar Schein tradition. You prevent "doubling down"—the error of repeating a failed move with more emphasis. Your load-bearing move is the **Frame-release**, which requires the user to mentally and verbally drop the previous (failed) frame completely before attempting a new one.

## Loop
1. **Read the Miss:** Diagnose if it was an "Empty Room" (inattention) or a "Held Frame" (rejection).
2. **Frame-release:** Identify exactly what story or goal you are dropping to stay in the game.
3. **Shift Class:** Choose a *different* statement class (If Pacing failed, try Resonance; if Alignment failed, try Concession).
4. **Redeploy:** Draft a new Statement+Question pairing with the new class.

## Input Handling
If user provides a failed dialogue: Extract the **Fail-Mode** (Empty Room vs. Held Frame).
Apply the **Frame-release** move to the failed tactic.

## Example
<thinking>
User tried Pacing ('We've been at this for an hour') and the recipient snapped back ('So what?'). This is a 'Held Frame' miss. I must execute a **Frame-release** and shift to Resonance.
</thinking>

- **Failed Tactic:** Pacing (rejected).
- **Frame-release:** Dropping the attempt to use shared time as a motivator.
- **New Class:** Resonance (naming the frustration).
- **Redeploy:** "It sounds like you're frustrated because you feel like we're just talking in circles and not hitting the real issue. What would a productive use of the next 10 minutes look like to you?"

## Completion
- Analysis of the "Miss."
- The **Frame-release** statement.
- The new pairing (Statement + Question).
- Audit: Is the new statement from a *different* class than the failed one? If same class, re-run.
```

---

### B4. Command-wrapper drafts

**`commands/conversational-framing.md`**
```yaml
---
description: Sets a psychological context using the Statement+Question architecture. Thin wrapper around `conversational-framing`.
argument-hint: [person/scenario]
---

# /thinking-systems:conversational-framing

Strategic frame-setting.

## Usage
```
/thinking-systems:conversational-framing "Asking my manager for a budget increase"
```

## Behavior
Parse scenario from `$ARGUMENTS`. If empty, ask: "What conversation are we preparing for?"
Invoke Skill(thinking-systems:conversational-framing, args: "$ARGUMENTS")
```

**`commands/frame-defense.md`**
```yaml
---
description: Detects presuppositions and anchors in messages. Thin wrapper around `frame-defense`.
argument-hint: [message/transcript]
---

# /thinking-systems:frame-defense

Linguistic defense.

## Usage
```
/thinking-systems:frame-defense "Since we're all in agreement, what time works for the kickoff?"
```

## Behavior
Parse message from `$ARGUMENTS`. If empty, ask: "Paste the message you want to analyze."
Invoke Skill(thinking-systems:frame-defense, args: "$ARGUMENTS")
```

---

### B5. Cross-skill modifications

**`skills/situation-behavior-impact/SKILL.md`**
- **Action:** Update the "Intent" section to suggest checking for existing frames.
- **Change (Conceptual):** Add to Loop Round 4: "If the recipient is an Authority or Adversary, consider using `conversational-framing` to install a Resonance frame before delivering the Impact."

**`skills/conflict-resolution-diagram/SKILL.md`**
- **Action:** Update the "Assumptions" audit.
- **Change (Conceptual):** "Check if any assumed 'Requirements' are actually linguistic presuppositions. Use `frame-defense` to extract unstated frames."

---

### B6. README.md and CHANGELOG.md updates

**`README.md`**
- **Section:** "Communication (4)"
- **Additions:**
  - `conversational-framing`: Strategic Statement+Question architecture.
  - `tactical-empathy`: De-escalation via Resonance/Labeling.
  - `frame-defense`: Defensive detection of presuppositions and anchors.
  - `conversational-recovery`: The Read-Release-Shift-Redeploy loop.

**`CHANGELOG.md`**
- **v0.2.0 (Planned):**
  - Added Framing Tactics suite (inspired by Chase Hughes/Chris Voss).
  - New skills: `conversational-framing`, `frame-defense`, `tactical-empathy`.
  - Expanded Communication category.

---

## C. Stress-test of Open Design Questions

### C1. One mega-skill or many micro-skills?
**Recommendation:** One mega-skill (`conversational-framing`) for the architecture, and one specialized micro-skill (`tactical-empathy`) for the Resonance drill.
**Tradeoff:** A mega-skill is harder to audit but preserves the *sequence* which is Hughes's whole point. Empathy is split because it is a general-purpose tool used even without a follow-up question.

### C2. What is the load-bearing move for `frame-control`?
**Recommendation:** **The Statement-before-Question discipline.**
Hughes's core insight is that questions don't set frames; statements do. If the user skips the statement, the skill has failed.

### C3. Citation Hygiene
**Recommendation:** Cite Chase Hughes (NCI) for the 5+5 architecture, Chris Voss for Tactical Empathy, and Erving Goffman for Frame Analysis. This balances contemporary credit with academic grounding.

### C4. Defensive vs. Offensive split
**Recommendation:** **Separate skills.**
`frame-defense` is a "Read" skill (analytical). `conversational-framing` is a "Write" skill (generative). Mixing them confuses the loop priorities.

---

## D. Risks and Disclaimers

### D1. Limitations of Hughes
*   **Elicitation via Deception:** Hughes's example of lying about salary raises to get data is unethical for a professional plugin. The plugin will substitute "Elicitation via provoker/understatement" (e.g., "I imagine the budget for this is quite small").
*   **Cultural Context:** Pacing statements ("You're sitting here") can feel creepy/hypnotic if overdone. The plugin must warn against "Naked Pacing."

### D2. Adoption Risks
*   **Developer Friction:** Many developers hate "soft skills." The plugin must frame these as **Linguistic Engineering** or **Protocol Negotiation** to increase adoption.
*   **Transcript dependency:** `frame-defense` works best with high-fidelity transcripts. It will struggle with vague summaries.

### D3. When NOT to use
*   Do not use when the frame is already **Collaborative and High-Trust**. Over-framing in high-trust environments looks like manipulation and causes a "Frame Break" (flooding out).

<!-- RESEARCH_COMPLETE -->
