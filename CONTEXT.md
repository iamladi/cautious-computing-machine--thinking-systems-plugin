# thinking-systems-plugin

A Claude Code plugin that packages 25+ classical thinking tools as guided-dialogue skills + slash commands. Each skill walks one decision/problem/communication scenario through a fixed loop using `AskUserQuestion`, with one named **load-bearing move** per skill that distinguishes correct from ceremonial application.

## Language

**Skill**:
A markdown file at `skills/<name>/SKILL.md` with required frontmatter (`name`, `description`, `allowed-tools`) and the canonical body sections (Priorities, Role, Loop, Input Handling, Example, Completion).
_Avoid_: agent, tool definition, prompt template — those have different shapes elsewhere in Claude Code.

**Slash command**:
A markdown file at `commands/<name>.md` that is a thin wrapper invoking exactly one skill via `Skill(thinking-systems:<name>, args: "$ARGUMENTS")`.
_Avoid_: command, CLI command — slash command is the disambiguating term.

**Load-bearing move**:
The single named move in a skill that, if performed correctly, distinguishes the skill from ceremonial application; if skipped or done wrong, the rest of the procedure produces structurally-correct-but-empty output.
_Avoid_: key step, critical move, important step — load-bearing has the specific meaning of "fail mechanic if missed."

**Audit clause**:
A bullet in a skill's Completion section that re-runs the loop if the load-bearing move was skipped or violated. Each load-bearing move has exactly one audit clause that names the failure mechanic explicitly.
_Avoid_: validation step, check, gate.

**.gnhf audit**:
The cross-layer drift check that verifies the load-bearing phrase named in a skill's `description` appears verbatim or near-verbatim in: Priorities, Role, Input Handling, Example `<thinking>` block, and Completion. Runs are recorded in `.gnhf/runs/`; runs #57–#60 closed the most recent drift cycles.
_Avoid_: lint, test, validation — these are general programming concepts; .gnhf audit is plugin-specific.

**Round**:
One iteration of a skill's `Loop` section, normally one `AskUserQuestion` call with `(Recommended)` + 2–3 alternatives + `Not sure - you decide`, footer `Reply format: 1a 2b or defaults`.
_Avoid_: step, stage — Round is the canonical term.

**Frame**:
The pre-existing organising context of a conversation (authority / adversarial / emotional / narrative). One of the four standard recognition prompts in the new framing skills.
_Avoid_: context, situation, mode — Frame is the load-bearing term inherited from Goffman.

**Frame-already-running read**:
The act of identifying which Frame is organising the room before drafting any conversational move. The load-bearing move of `frame-control`.
_Avoid_: frame-read, frame-diagnosis — `frame-already-running read` is the canonical phrase that must appear verbatim in the .gnhf audit.

**Statement class** (offensive Frame primitives):
One of five named statement types — Pacing, Alignment, Resonance, Concession, Presupposition — that install a Frame before a paired Question.

**Question class** (offensive Frame lockers):
One of five named question types — Directional, Assumptive, Elicitation, Reframe, Diagnostic — that lock the listener inside the installed Frame via preference-organisation pressure.

**Class-shift**:
The recovery move of switching to a *different* Statement class after a missed Frame, instead of repeating the same class harder. Load-bearing move of `conversational-recovery`.
_Avoid_: pivot, retry, second attempt — Class-shift names the discipline that "the new class must be different from the failed class."

**Miss-type**:
One of four named diagnoses for a failed conversational move: not-heard / heard-and-rejected / reactance-to-pressure / wrong-problem-frame. Each routes to a different Class-shift target.

**Naked move**:
A Statement+Question pair deployed without first reading the Frame already running. Reinforces whichever Frame is already there (typically the higher-status party's). The failure mechanic that the `frame-already-running read` is designed to prevent.
_Avoid_: blind ask, cold ask.

**Pre-suasion artefact**:
A frame-installing piece of text (subject line, agenda, pre-read, Slack preamble) sent *before* a live exchange. Cialdini-derived; produced by Round 0 of `frame-control`.

## Relationships

- A **Skill** is invoked by exactly one **Slash command** (the wrapper); the skill itself can be auto-fired by description triggers without any slash command.
- A **Skill** has exactly one **Load-bearing move** named in its `description`; the move appears verbatim in Priorities, Role, Input Handling, Example `<thinking>`, and Completion (this is the **.gnhf audit** invariant).
- A **Skill** may have multiple **Audit clauses** in Completion, but the load-bearing audit clause is always one of them.
- A **Skill**'s `Loop` consists of N **Rounds**, each typically one `AskUserQuestion` call.
- The four new framing **Skills** form a routing cluster: `frame-control` (offensive) ↔ `presupposition-detector` (defensive) ↔ `conversational-recovery` (post-miss) ↔ `concession-then-ask` (negotiation primitive); each routes to siblings on specific triggers, none subsumes another.
- **`frame-control`** consumes its Round 0 **Pre-suasion artefact** and Round 1 **Frame-already-running read** before drafting any Statement class or Question class.
- **`conversational-recovery`** receives a **Miss-type** diagnosis in Round 2 and uses it to constrain the **Class-shift** target in Round 4 (rejecting any candidate that is the same class as the failed move).

## Example dialogue

> **Maintainer:** "Should `concession-then-ask` be a standalone Skill or a Round inside `frame-control`?"
> **Plan author:** "Standalone — its Load-bearing move (pre-emptive disclosure) has its own failure mechanic (trivial / fake / wrong-target concession) and its own Audit clause. Folding it into `frame-control` Round 3 dilutes the .gnhf audit because two load-bearing phrases would compete for the same Completion section."
> **Maintainer:** "And the Frame in 'Frame-already-running read' — is that the same Frame de Bono's Six Hats talks about?"
> **Plan author:** "No — Six Hats has *perspectives*, not Frames. Frame here is Goffman's: the pre-existing organising context one of (authority / adversarial / emotional / narrative). Recorded as a separate term to prevent confusion."

## Flagged ambiguities

- *(none open at time of writing — this CONTEXT.md was created with the framing-tactics plan; future term conflicts will be recorded here)*
