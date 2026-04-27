---
title: "Framing-tactics skills bundle for thinking-systems-plugin"
type: Feature
issue: null
research:
  - research/research-framing-tactics-deep.md
  - research/.deep-research-20260426-220644/transcript.txt
  - research/.deep-research-20260426-220644/context.md
status: Ready for Implementation
reviewed: true
reviewers: ["codex", "gemini"]
created: 2026-04-26
---

# PRD: Framing-tactics skills bundle for thinking-systems-plugin

## Metadata
- **Type**: Feature
- **Priority**: Medium
- **Estimated Complexity**: 5
- **Created**: 2026-04-26
- **Status**: Ready for Implementation

## Overview

### Problem Statement

The Communication category of `thinking-systems-plugin` has only two Skills (`situation-behavior-impact`, `minto-pyramid`) — both shape outputs (a feedback line, a top-down memo) but neither helps a user **plan a live conversation** before they enter the room. Three observable user complaints repeat across the framing-tactics deep-research synthesis:

1. *"My 1:1 with my manager always ends with me agreeing to more work."* No Skill currently helps the user notice or counter the **Frame** the manager is installing.
2. *"This email feels loaded but I can't say why."* No Skill scans an inbound for grammatically-embedded assumptions before the user replies.
3. *"That opener landed badly — how do I recover?"* No Skill provides the post-miss class-shift discipline.

Existing Skills (`ladder-of-inference`, `abstraction-laddering`, `conflict-resolution-diagram`) cover adjacent territory but are framed for solo introspection or structural conflict, not live conversational mechanics.

### Goals & Objectives

1. Ship **4 new Skills** in the Communication category: `frame-control`, `presupposition-detector`, `concession-then-ask`, `conversational-recovery`.
2. Add **6 cross-skill edits** that route users from existing Skills into the new ones at the right boundaries.
3. Update README.md, CHANGELOG.md, and `.claude-plugin/plugin.json` version to reflect the v0.2.0 release.
4. Every new Skill passes the `.gnhf` cross-layer audit on day one (load-bearing phrase verbatim across description / Priorities / Role / Input Handling / Example / Completion).
5. Plugin Communication category grows from 2 → 6 Skills, reaching parity with Systems Thinking (5).

### Success Metrics

- **Primary Metric**: All 4 new Skills + 6 cross-skill edits + 4 commands + README/CHANGELOG/plugin.json land in a single PR; `bun run validate` passes; no `.gnhf` audit drift introduced.
- **Secondary Metrics**: Each new Skill's load-bearing phrase appears verbatim in 5 required slots (description / Priorities / Role / Input Handling / Example / Completion).
- **Quality Gates**: `bun run validate` exit 0; auto-trigger phrases match the README's `Auto-trigger (implicit)` examples; no existing Skill's load-bearing audit regresses.

## User Stories

### Story 1: Pre-1:1 framing prep
- **As a**: senior engineer with a hard 1:1 coming up against a higher-status counterpart
- **I want**: to plan the **Statement class + Question class** pair before the meeting, after first reading the Frame already running in the room
- **So that**: I do not walk in with a Naked move that reinforces the counterpart's Frame
- **Acceptance Criteria**:
  - [ ] `/thinking-systems:frame-control 1:1 with VP tomorrow about missed Q3 deadline; I always end up agreeing to more work` runs without error
  - [ ] Skill refuses to draft the pair until Round 1 (Frame-already-running read) has been answered
  - [ ] If the user names a subordinate counterpart, Skill returns only the defensive read and refuses offensive deployment
  - [ ] Verbatim Statement + Question pair returned with class names tagged (mirror vs label distinguished in Resonance, Heritage-optimised vs neutral in Directional, identity-stake flagged in Presupposition)

### Story 1b: Ambiguous counterpart status (ethical refusal edge case)
- **As a**: user prepping a conversation where the counterpart's status is unclear or unstated in the prompt
- **I want**: the Skill to surface the ambiguity and route to the safer default rather than silently picking one
- **So that**: the ethical refusal guardrail does not depend on the user remembering to type "subordinate" or "vulnerable"
- **Acceptance Criteria**:
  - [ ] When `frame-control` Round 2 cannot determine counterpart status from the prompt, it asks explicitly via `AskUserQuestion` rather than defaulting to "peer"
  - [ ] If the user selects `Not sure - you decide`, the Skill defaults to **defensive read only** (safer default) rather than offensive deployment
  - [ ] Same rule applies to `concession-then-ask` Round 1 status check

### Story 2: Defensive scan of an inbound
- **As a**: IC who just received an email that "feels loaded"
- **I want**: every grammatically-embedded assumption surfaced before I draft a reply
- **So that**: my reply does not silently ratify a Frame I did not agree to
- **Acceptance Criteria**:
  - [ ] `/thinking-systems:presupposition-detector "Since we're moving forward with the reorg, can you draft the comms plan by Friday?"` runs without error
  - [ ] Output uses the format `Says: X. Presupposes: Y.` for every embedded assumption
  - [ ] Heritage-style optimised questions ("you don't have any concerns, do you?") are flagged
  - [ ] Each surfaced presupposition gets a triage option (accept / contest / reframe / strategic-silence)
  - [ ] Drafted response handles each chosen option (Lakoff caveat: contest names the assumption explicitly rather than negating in the Frame's vocabulary)

### Story 3: Post-miss recovery
- **As a**: lead who opened a 1:1 with a pacing line that the manager rejected
- **I want**: a class-shift recovery loop that prevents me from "pacing harder"
- **So that**: my second attempt does not compound the visible-effort tell
- **Acceptance Criteria**:
  - [ ] `/thinking-systems:conversational-recovery I opened with "we've been going back and forth" and they snapped "no, you've been holding us up"` runs without error
  - [ ] Round 2 forces a Miss-type diagnosis (not-heard / heard-and-rejected / reactance / wrong-problem-frame)
  - [ ] Round 4 rejects any redeploy candidate that is the same class as the failed move
  - [ ] Stop condition flags when to widen / pause / route to `conflict-resolution-diagram` instead of taking a third swing

### Story 4: Hard-question authorisation via concession
- **As a**: account manager who needs to ask a client for an extension after already missing the last deliverable
- **I want**: to pair a real concession (the specific cost the client paid) with the hard question
- **So that**: the question lands as direct-not-arrogant
- **Acceptance Criteria**:
  - [ ] `/thinking-systems:concession-then-ask need to ask client for an extension, but we already missed the last one` runs without error
  - [ ] Round 3 explicitly rejects trivial / fake / wrong-target concessions
  - [ ] If the ask is numerical, Skill offers Ackerman 65/85/95/100 anchor pattern as alternative discipline
  - [ ] Pair-check audit fails the draft if the question would still read arrogant after the concession

## Requirements

### Functional Requirements

1. **FR-1**: Add 4 new Skills under `skills/<name>/SKILL.md`, each conforming to the canonical body shape (frontmatter + Priorities + Role + Loop + Input Handling + Example + Completion).
   - Details: Skills are `frame-control`, `presupposition-detector`, `concession-then-ask`, `conversational-recovery`. Drafts are pre-written in `research/research-framing-tactics-deep.md` §B.3.
   - Priority: Must Have

2. **FR-2**: Add 4 matching slash command wrappers under `commands/<name>.md`.
   - Details: Each is a thin wrapper invoking exactly one Skill via `Skill(thinking-systems:<name>, args: "$ARGUMENTS")`. Drafts pre-written in synthesis §B.4.
   - Priority: Must Have

3. **FR-3**: Apply 6 cross-skill edits to existing Skills.
   - Details: `situation-behavior-impact` (Skip case + optional Round), `conflict-resolution-diagram` (presupposition-surfacing pass), `minto-pyramid` (frame-fit framing in Role), `abstraction-laddering` (Skip clause), `ooda-loop` (Orient annotation), `ladder-of-inference` (Skip clause). Exact wording in synthesis §B.5.
   - Priority: Must Have

4. **FR-4**: Update `README.md` Communication row, auto-trigger examples, and Credits paragraph.
   - Details: Diff in synthesis §B.6.1.
   - Priority: Must Have

5. **FR-5**: Update `CHANGELOG.md` with a v0.2.0 entry.
   - Details: Diff in synthesis §B.6.2.
   - Priority: Must Have

6. **FR-6**: Bump `.claude-plugin/plugin.json` version from `0.1.0` to `0.2.0`.
   - Details: SemVer minor bump (additive features, no breaking changes).
   - Priority: Must Have

7. **FR-7**: Each new Skill's load-bearing phrase appears verbatim in 5 required `.gnhf` audit slots.
   - Details: Description / Priorities / Role / Input Handling / Example `<thinking>` / Completion. Drafts in synthesis §B.3 are already written to this standard; verify once more before commit.
   - Priority: Must Have

8. **FR-8**: Auto-trigger phrases in each Skill's `description` match the README auto-trigger examples (mutual reinforcement so users discover the Skill via either path).
   - Priority: Should Have

9. **FR-9**: Each new Skill's Completion section contains an audit clause that re-runs the loop if the load-bearing move was skipped.
   - Details: Pattern: *"If [load-bearing phrase] was not performed, the load-bearing move has failed and the loop re-runs from Round N."*
   - Priority: Must Have

10. **FR-10**: Ethical refusal wired into `frame-control` and `concession-then-ask`: refuse offensive deployment when the counterpart is named as subordinate, vulnerable, or unaware. `presupposition-detector` always runs (defensive use is unconditionally permitted).
    - Priority: Must Have

### Non-Functional Requirements

1. **NFR-1**: Audit cleanliness
   - Requirement: All 4 new Skills pass the `.gnhf` cross-layer audit; no existing Skill regresses.
   - Target: 100% slot agreement on the load-bearing phrase per new Skill; 0 net regressions on the 25 existing Skills.
   - Measurement: Inspect `.gnhf/runs/` for regression after the next audit run; spot-check verbatim phrase across slots before commit.

2. **NFR-2**: Plugin manifest validity
   - Requirement: `bun run validate` passes after all changes.
   - Target: Exit code 0.
   - Measurement: `cd thinking-systems-plugin && bun run validate`.

3. **NFR-3**: Citation hygiene
   - Requirement: No NCI / Behavior-Operations-Manual branding, no NLP endorsement, no paid-course links. Hughes credited as recent restater paired with deeper traditions (Goffman, Voss, Cialdini, Schein, Heritage, Watzlawick, Bandler-Grinder, Oyserman, Argyris, Lakoff).
   - Target: Zero links to NCI properties; Hughes mentioned exactly once per Skill (in Role section, paired with older traditions).
   - Measurement: `rg -i "(nci|behavior operations|behavioral table)" thinking-systems-plugin/skills/` returns zero matches; `rg "Hughes" thinking-systems-plugin/skills/` returns ≤4 matches (one per new Skill).

4. **NFR-4**: Per-Skill granularity discipline
   - Requirement: No new Skill duplicates the load-bearing move of an existing one.
   - Target: Manual review of load-bearing phrases against the existing 25 Skills' phrases; explicit cross-references where overlap is real but distinct (e.g., `abstraction-laddering` climb-up vs `frame-control` reframe-question).
   - Measurement: Review checklist embedded in Phase 4 below.

### Technical Requirements

- **Stack**: Markdown-only. No code beyond the existing TypeScript validator (`scripts/validate-plugin.ts`).
- **Dependencies**: None new. Existing dev dep `bun` toolchain unchanged.
- **Architecture**: Each Skill is a standalone `SKILL.md` + `commands/<name>.md` pair. Routing between Skills is documented in Skip clauses and Completion residual notes; the runtime does not enforce routing — Claude Code's auto-trigger does.
- **Data Model**: N/A.
- **API Contracts**: N/A. (Slash command interface is fixed by Claude Code.)

## Scope

### In Scope

- 4 new `skills/<name>/SKILL.md` files
- 4 new `commands/<name>.md` files
- 6 edits to existing Skills (named in §FR-3)
- README.md, CHANGELOG.md, plugin.json updates
- CONTEXT.md (created with this plan; canonical glossary for the framing terms)
- 3 ADRs (created with this plan; rationale for skill-count, category placement, defensive naming)

### Out of Scope

- Auto-trigger tuning beyond what the new Skill `description` triggers provide. (Claude Code's matching is opaque; iterating on triggers is a separate cycle.)
- A new "Conversation" category (rejected — see ADR-0002).
- Per-class standalone Skills (`pacing-and-leading`, `resonance-statement`, etc.) — rejected by all three analyses on per-mechanism-granularity grounds.
- A `reframe` Skill — covered by existing `abstraction-laddering` (climb-up move) plus `frame-control`'s Reframe question class.
- A `tactical-empathy` Skill — ~95% overlap with `frame-control`'s Resonance class; cite Voss inside `frame-control` Role instead.
- Tests in any framework other than the existing `bun run validate` (no unit-test rig is currently set up for prose-only Skills).
- Migration tooling. Plugin v0.2.0 is purely additive; no users have shipped against the framing Skills yet.
- Telemetry / analytics. Plugin is local-only.

### Future Considerations

- Wider-scope `frame-audit` Skill (Codex's preferred shape) — could ship as v0.3.0 if user feedback shows the narrower `presupposition-detector` misses too many non-grammatical Frame installations (role-assignment, preferred-answer-design, defaults, false binaries).
- Per-channel adapters: Slack-specific or async-email-specific framing helpers (Gemini's "Naked Pacing in low-fidelity text" risk).
- Brehm BYAF ("But You Are Free") wrapper as an explicit autonomy-supportive Round in `frame-control` (Gemini contribution; deferred until reactance-as-miss-type telemetry justifies a dedicated Round).
- A defensive companion to `concession-then-ask` (detecting concessions made *to* you that are trivial / fake / wrong-target).
- Translation of the `.gnhf` audit script to enforce the 5-slot load-bearing check programmatically rather than by spot inspection (currently audit runs are recorded, not regenerated automatically).

## Impact Analysis

### Affected Areas

- `thinking-systems-plugin/skills/` — 4 new dirs + 6 existing files modified
- `thinking-systems-plugin/commands/` — 4 new files
- `thinking-systems-plugin/README.md` — Communication row + auto-trigger + Credits
- `thinking-systems-plugin/CHANGELOG.md` — v0.2.0 entry
- `thinking-systems-plugin/.claude-plugin/plugin.json` — version bump
- `thinking-systems-plugin/CONTEXT.md` — created with this plan
- `thinking-systems-plugin/docs/adr/000{1,2,3}-*.md` — created with this plan

### Users Affected

- Existing plugin users — additive; no behaviour change for the 25 existing Skills (the 6 cross-skill edits add Skip clauses and routing notes, but do not change the load-bearing move of any existing Skill).
- New users discovering the plugin via the framing Skills — primary intended audience; auto-trigger phrases in the Skill descriptions and README are the discovery surface.

### System Impact

- **Performance**: N/A (markdown-only).
- **Security**: N/A.
- **Data Integrity**: N/A.

### Dependencies

- **Upstream**: Claude Code's `Skill` invocation, `AskUserQuestion`, and auto-trigger mechanisms — all stable and used by the existing 25 Skills.
- **Downstream**: None (no other plugin depends on this one).
- **External**: None.

### Breaking Changes

- [x] **None semantically** — SemVer minor bump (additive Skills + non-load-bearing edits to existing Skills).
- [ ] **Behaviour additions in 6 existing Skills** (not breaking, but user-visible): each of `situation-behavior-impact`, `conflict-resolution-diagram`, `minto-pyramid`, `abstraction-laddering`, `ooda-loop`, `ladder-of-inference` gains either a new Skip clause (suppresses run with route-recommendation), an optional Loop Round (only fires when triggering condition met), or a Role-section note (instructional only). Runtime flow effect:
  - **Skip-clause additions** (`abstraction-laddering`, `ladder-of-inference`): can change runtime flow — Skill may now exit-and-route instead of running its loop on prompts that match the new Skip condition.
  - **Optional Round addition** (`situation-behavior-impact` concession-check): adds one optional Round that fires only when SBI is critical AND counterpart has paid a real cost; otherwise loop unchanged.
  - **Pre-pass addition** (`conflict-resolution-diagram` presupposition-surfacing): adds one pre-loop scan that runs before position extraction; routes to `presupposition-detector` if grammatically-embedded demand detected.
  - **Role-note additions** (`minto-pyramid`, `ooda-loop`): instructional text only — no runtime flow change.

  *(Per Codex blindspot review #4 — original "None" classification understated the cross-skill edits. Reclassified.)*

## Solution Design

### Approach

Implement the 4-skill bundle exactly as drafted in `research/research-framing-tactics-deep.md` §B.3 and §B.4. The synthesis already produced audit-clean SKILL.md drafts and matching command wrappers. Apply the 6 cross-skill edits verbatim from §B.5. Update README/CHANGELOG/plugin.json per §B.6.

The drafts in the synthesis are deliberately written to the plugin's house style (Edward de Bono / Barbara Minto / John Boyd-tradition naming, single named load-bearing move per Skill, audit clause in Completion that re-runs the loop on miss). Implementation is therefore a copy-and-place exercise more than a design exercise; the design happened in Phases 1–4 of the deep-research pipeline.

### Alternatives Considered

1. **Ship 3 Skills (`frame-control` + `presupposition-detector` + `conversational-recovery`), fold `concession-then-ask` as a Round inside `frame-control`** (Codex + Gemini consensus).
   - Pros: Smaller footprint; fewer auto-trigger names; fewer .gnhf audits to maintain.
   - Cons: Concession's load-bearing move (pre-emptive disclosure) and quantitative discipline (Ackerman) compete with `frame-control`'s primary load-bearing move (frame-already-running read) for the same Completion section, diluting both audits.
   - Why rejected: ADR-0001. The plugin's house pattern splits on mechanism, not on menu. `concession-then-ask` has its own failure mechanic (trivial / fake / wrong-target) that no other Statement class shares.

2. **Ship a single mega-Skill (`framing`) covering all 5+5 classes plus recovery plus defensive scan with mode flags**.
   - Pros: One discovery surface; one description; one audit.
   - Cons: Mode flags dilute the load-bearing move (which mode is load-bearing?); the .gnhf audit cannot enforce a single phrase across modes; 25-cell-flowchart anti-pattern that Hughes himself rejects.
   - Why rejected: All three analyses converged on splitting; consensus rationale documented in synthesis §B.2.

3. **Create a new `Conversation` category alongside Communication**.
   - Pros: Explicit separation of live-interaction Skills from output-shaping Skills.
   - Cons: Thin category (3 Skills); creates discoverability competition with Communication; not the plugin's existing category-axis.
   - Why rejected: ADR-0002. Plugin's existing categories group on outcome-shape, not interaction-mode.

4. **Adopt Codex's wider `frame-audit` naming for the defensive Skill**.
   - Pros: Subsumes role-assignment, preferred-answer-design, default anchors, false binaries alongside presupposition.
   - Cons: Wider scope = harder-to-test load-bearing move = weaker .gnhf audit.
   - Why rejected: ADR-0003. Use the narrow name for audit cleanliness; preserve wider scope as Round 2 sub-passes.

### Data Model Changes

N/A.

### API Changes

New slash commands (purely additive — no existing command modified):
- `/thinking-systems:frame-control [conversation context]`
- `/thinking-systems:presupposition-detector [path-or-quoted-text]`
- `/thinking-systems:concession-then-ask [hard question + context]`
- `/thinking-systems:conversational-recovery [what you said + what they said back]`

### UI/UX Changes

N/A (CLI-only). The 4 new auto-trigger phrases in README expand the implicit discovery surface; no visual change.

## Implementation Plan

### Phase 1: Foundation — CONTEXT.md + ADRs

**Complexity**: 2 | **Priority**: High

- [x] Create `thinking-systems-plugin/CONTEXT.md` with canonical glossary for new framing terms (Skill / Slash command / Load-bearing move / Audit clause / Frame / Frame-already-running read / Statement class / Question class / Class-shift / Miss-type / Naked move / Pre-suasion artefact). *(Done — created with this plan.)*
- [x] Create `docs/adr/0001-four-skill-framing-bundle.md`. *(Done.)*
- [x] Create `docs/adr/0002-communication-category-not-conversation.md`. *(Done.)*
- [x] Create `docs/adr/0003-defensive-skill-naming-presupposition-detector.md`. *(Done.)*

### Phase 1.5: Pre-implementation gate

**Complexity**: 1 | **Priority**: High

Per Codex blindspot review #1, #11, #12 — explicit prerequisites that must be satisfied before Phase 2 file creation begins:

- [ ] **Maintainer confirms 4-skill bundle (ADR-0001)** — or re-baseline to 3-skill (fold `concession-then-ask` into `frame-control` Round 3) before touching `skills/` files.
- [ ] **Synthesis-drafts presence check** — verify `research/research-framing-tactics-deep.md` §B.3.1, §B.3.2, §B.3.3, §B.3.4, §B.4.1, §B.4.2, §B.4.3, §B.4.4 each contain a complete fenced ```markdown``` block before relying on copy-and-place; if any draft is missing, regenerate or escalate before Phase 2.
- [ ] **Single-commit constraint** — commit all framing-skill files (`skills/<4 new>/`, `commands/<4 new>.md`, 6 modified existing Skills, README, CHANGELOG, plugin.json, package.json) in **one commit** on the implementation branch, so rollback is `git revert <sha>`. CONTEXT.md and ADRs ship in the plan commit (separate, on `plan/framing-tactics-skills`); they are independently useful and need not be reverted with the Skills.
- [ ] **Runtime test environment confirmed** — manual end-to-end smokes (Phase 5) require an interactive Claude Code session with the plugin installed locally; if no such environment is available at Phase 5 time, mark the manual smokes as `BLOCKED: needs interactive Claude Code session` and complete remaining static checks.

### Phase 2: Core Skills + Commands

**Complexity**: 5 | **Priority**: High

Sub-tasks (one Skill at a time to keep complexity per task ≤5):

- [ ] **Task 2.1** — Create `skills/frame-control/` directory + `SKILL.md` from synthesis §B.3.1. Verify load-bearing phrase ("reading the frame already running") appears verbatim in description / Priorities / Role / Input Handling / Example `<thinking>` / Completion.
- [ ] **Task 2.2** — Create `commands/frame-control.md` from synthesis §B.4 / B.4.1.
- [ ] **Task 2.3** — Create `skills/presupposition-detector/` + `SKILL.md` from synthesis §B.3.2. Verify load-bearing phrase ("surfacing the unstated assumption embedded as fact") in 5 slots.
- [ ] **Task 2.4** — Create `commands/presupposition-detector.md` from §B.4.
- [ ] **Task 2.5** — Create `skills/concession-then-ask/` + `SKILL.md` from §B.3.3. Verify load-bearing phrase ("pre-emptive disclosure that makes the hard question askable") in 5 slots.

### Phase 3: Recovery Skill + Cross-Skill Edits

**Complexity**: 5 | **Priority**: High

- [ ] **Task 3.1** — Create `commands/concession-then-ask.md` from §B.4.
- [ ] **Task 3.2** — Create `skills/conversational-recovery/` + `SKILL.md` from §B.3.4. Verify load-bearing phrase ("class-shift after the miss") in 5 slots.
- [ ] **Task 3.3** — Create `commands/conversational-recovery.md` from §B.4.
- [ ] **Task 3.4** — Apply cross-skill edits per synthesis §B.5 to: `skills/situation-behavior-impact/SKILL.md`, `skills/conflict-resolution-diagram/SKILL.md`, `skills/minto-pyramid/SKILL.md`.
- [ ] **Task 3.5** — Apply cross-skill edits per synthesis §B.5 to: `skills/abstraction-laddering/SKILL.md`, `skills/ooda-loop/SKILL.md`, `skills/ladder-of-inference/SKILL.md`.

### Phase 4: Documentation & Manifest

**Complexity**: 3 | **Priority**: High

- [ ] Update `README.md` Communication row per synthesis §B.6.1 diff.
- [ ] Update `README.md` `Auto-trigger (implicit)` examples (4 new bullets).
- [ ] Expand `README.md` Credits paragraph to name modern conversational-architecture lineages (Goffman, Lakoff, Voss, Cialdini, Schein, Argyris, Watzlawick, Heritage, Oyserman) and the citation-hygiene rule for Hughes.
- [ ] Add `CHANGELOG.md` v0.2.0 entry per synthesis §B.6.2.
- [ ] Bump `.claude-plugin/plugin.json` version `0.1.0` → `0.2.0`.
- [ ] Bump `package.json` version `0.1.0` → `0.2.0` to keep manifest and package metadata in sync (per Gemini blindspot #16).
- [ ] Plugin validation:
  - [ ] `bun run validate` passes
  - [ ] All 4 new Skills appear in README Communication row
  - [ ] All 4 new commands listed under Usage examples

### Phase 5: Validation & Audit Spot-Check

**Complexity**: 4 | **Priority**: High

- [ ] **Slot-by-slot audit (per Codex blindspot #3, Gemini #1)** — count-only `rg` matches can pass with all hits clustered in one section while a required slot is empty. Use a slot-aware check instead. For each new Skill, verify the load-bearing phrase appears at least once in *each* of the 5 required slots:
  ```bash
  for skill in frame-control presupposition-detector concession-then-ask conversational-recovery; do
    case $skill in
      frame-control)               PHRASE='frame already running' ;;
      presupposition-detector)     PHRASE='unstated assumption embedded as fact' ;;
      concession-then-ask)         PHRASE='pre-emptive disclosure' ;;
      conversational-recovery)     PHRASE='class-shift after the miss' ;;
    esac
    FILE="skills/$skill/SKILL.md"
    echo "=== $skill / phrase: $PHRASE ==="
    awk -v p="$PHRASE" '
      /^description:/{slot="description"}
      /^## Priorities/{slot="Priorities"}
      /^## Role/{slot="Role"}
      /^## Loop/{slot=""}
      /^## Input Handling/{slot="InputHandling"}
      /^## Example/{slot="Example"}
      /^## Completion/{slot="Completion"}
      slot && tolower($0) ~ tolower(p) {hits[slot]++}
      END {
        for (s in hits) printf "  %-15s %d\n", s, hits[s]
        for (s in arr) ;
        required = "description Priorities Role InputHandling Example Completion"
        n = split(required, req, " ")
        missing = ""
        for (i=1; i<=n; i++) if (!hits[req[i]]) missing = missing " " req[i]
        if (missing != "") { print "  MISSING SLOTS:" missing; exit 1 } else print "  OK: phrase present in all required slots"
      }
    ' "$FILE" || exit 1
  done
  ```
  This is the deterministic 5-slot audit. The `.gnhf` audit infrastructure under `.gnhf/runs/` records audit cycles out-of-band but does not currently expose a CLI; if the maintainer ships an audit CLI later, replace this awk check with the CLI invocation (see TODOS for the deferred audit-CLI work).
- [ ] **Citation hygiene** — extended scope per Codex blindspot #8: scan **every changed file**, not just `skills/`:
  ```bash
  rg -i "(nci\.university|behavior operations manual|behavioral table of elements)" \
    skills/ commands/ README.md CONTEXT.md docs/adr/ CHANGELOG.md \
    && { echo "FAIL: NCI branding found"; exit 1; } \
    || echo "OK: no NCI branding"
  ```
- [ ] **Hughes citation count**: `rg -c "Hughes" skills/frame-control/SKILL.md skills/presupposition-detector/SKILL.md skills/concession-then-ask/SKILL.md skills/conversational-recovery/SKILL.md` — total ≤4 across the 4 new Skills (one mention per Skill in Role section).
- [ ] **Existing Skill regression check**: `git diff HEAD -- skills/situation-behavior-impact/ skills/conflict-resolution-diagram/ skills/minto-pyramid/ skills/abstraction-laddering/ skills/ooda-loop/ skills/ladder-of-inference/` — diff must show only Skip clauses, Role notes, and new optional Rounds added; no removal or modification of any existing load-bearing phrase. Confirm via spot-grep on each existing Skill's load-bearing phrase before/after.
- [ ] **Manual end-to-end smokes (per Codex blindspot #9 — all 4, not just 1)**: invoke each command in an interactive Claude Code session with the plugin installed locally:
  - `/thinking-systems:frame-control 1:1 with VP about missed Q3 deadline; I always end up agreeing to more work` — Round 1 Frame-already-running read enforced before draft
  - `/thinking-systems:presupposition-detector "Since we're moving forward with the reorg, can you draft the comms plan by Friday?"` — `Says: X. Presupposes: Y.` format observed
  - `/thinking-systems:concession-then-ask need to ask client for an extension, but we already missed the last one` — Round 3 rejects trivial / fake / wrong-target options
  - `/thinking-systems:conversational-recovery I opened with "we've been going back and forth" and they snapped "no, you've been holding us up"` — Round 4 rejects same-class redeploy
  - If interactive environment unavailable, mark each as `BLOCKED: needs interactive Claude Code session` per Phase 1.5 gate.
- [ ] **`presupposition-detector` path-input validation (per Codex blindspot #6)**: invoke with each of:
  - Valid relative path to a markdown file → expect Read tool call + scan of file content
  - Nonexistent path → expect graceful error message (not silent failure)
  - Multi-line quoted text → expect scan of the full block
  - Plain prose with no path-shaped tokens → expect treatment as inline text
  Verify the Skill description's `argument-hint: [path-to-inbound or quoted text of the inbound]` matches behaviour.
- [ ] **Auto-trigger collision audit (per Codex blindspot #10, Gemini #2)**: in an interactive session, present each ambiguous prompt and verify the *intended* Skill is the one that fires (or that the framing-skill description does not pull the trigger from an existing Skill):
  - "I need to talk to my boss" — should NOT pull `frame-control` over a clearer match (no specific framing distress signal)
  - "How do I reframe this?" — should pull `abstraction-laddering` (existing) over `frame-control` Reframe-question class (frame-control fires on conversational reframes, abstraction-laddering on problem-definition reframes)
  - "I have hard feedback to give" — should pull `situation-behavior-impact` (existing) over `concession-then-ask`
  - "Help me prep for negotiation" — should pull `frame-control` (new) — clear conversational framing signal
  - "Scan this for assumptions" — should pull `presupposition-detector` (new) — clear defensive scan signal
  - "That landed badly" — should pull `conversational-recovery` (new) — clear post-miss signal
  Document any collision; tighten the colliding Skill's description and re-test before merge.
- [ ] **README ↔ filesystem consistency**:
  ```bash
  for cmd in frame-control presupposition-detector concession-then-ask conversational-recovery; do
    test -f "skills/$cmd/SKILL.md" && test -f "commands/$cmd.md" \
      && echo "OK: $cmd" || echo "FAIL: $cmd missing files"
  done
  rg "$cmd" README.md  # ensure each new Skill named in README
  ```
- [ ] **Version sync**: confirm `.claude-plugin/plugin.json` and `package.json` both read `"version": "0.2.0"` (per Gemini blindspot #16).

## Relevant Files

### Existing Files (will be modified)

- `thinking-systems-plugin/skills/situation-behavior-impact/SKILL.md` — add Skip case + optional concession-check Round
- `thinking-systems-plugin/skills/conflict-resolution-diagram/SKILL.md` — add presupposition-surfacing pre-pass
- `thinking-systems-plugin/skills/minto-pyramid/SKILL.md` — add frame-fit framing of audience-fit check in Role
- `thinking-systems-plugin/skills/abstraction-laddering/SKILL.md` — add Skip clause for stuck-conversation case
- `thinking-systems-plugin/skills/ooda-loop/SKILL.md` — add Orient annotation about frame-reading
- `thinking-systems-plugin/skills/ladder-of-inference/SKILL.md` — add Skip clause for incoming loaded messages
- `thinking-systems-plugin/README.md` — Communication row, auto-trigger examples, Credits
- `thinking-systems-plugin/CHANGELOG.md` — v0.2.0 entry
- `thinking-systems-plugin/.claude-plugin/plugin.json` — version bump

### New Files

- `thinking-systems-plugin/skills/frame-control/SKILL.md` — offensive primary Skill
- `thinking-systems-plugin/skills/presupposition-detector/SKILL.md` — defensive scan Skill
- `thinking-systems-plugin/skills/concession-then-ask/SKILL.md` — negotiation primitive Skill
- `thinking-systems-plugin/skills/conversational-recovery/SKILL.md` — post-miss repair Skill
- `thinking-systems-plugin/commands/frame-control.md` — slash command wrapper
- `thinking-systems-plugin/commands/presupposition-detector.md` — slash command wrapper
- `thinking-systems-plugin/commands/concession-then-ask.md` — slash command wrapper
- `thinking-systems-plugin/commands/conversational-recovery.md` — slash command wrapper
- `thinking-systems-plugin/CONTEXT.md` — canonical glossary *(created with this plan)*
- `thinking-systems-plugin/docs/adr/0001-four-skill-framing-bundle.md` *(created with this plan)*
- `thinking-systems-plugin/docs/adr/0002-communication-category-not-conversation.md` *(created with this plan)*
- `thinking-systems-plugin/docs/adr/0003-defensive-skill-naming-presupposition-detector.md` *(created with this plan)*

### Test Files

N/A — plugin currently has no test framework beyond `bun run validate` (manifest schema validation only). Skill-content correctness is enforced by the `.gnhf` audit, which runs out-of-band.

## Testing Strategy

### Unit Tests

N/A.

### Integration Tests

- `bun run validate` (existing manifest validator) must pass after every Phase.

### E2E Tests

Manual end-to-end smoke for each of the 4 new commands:

1. `/thinking-systems:frame-control 1:1 with VP tomorrow about missed Q3 deadline; I always end up agreeing to more work` — expect Round 0 pre-suasion check, then Round 1 Frame-already-running read enforced before any draft.
2. `/thinking-systems:presupposition-detector "Since we're moving forward with the reorg, can you draft the comms plan by Friday?"` — expect format `Says: X. Presupposes: Y.` for the reorg presupposition.
3. `/thinking-systems:concession-then-ask need to ask client for an extension, but we already missed the last one` — expect Round 3 to reject trivial / fake / wrong-target options.
4. `/thinking-systems:conversational-recovery I opened with "we've been going back and forth" and they snapped "no, you've been holding us up"` — expect Round 2 to require Miss-type diagnosis; Round 4 to reject same-class redeploy.

### Manual Test Cases

1. **Test Case: ethical refusal (frame-control)**
   - Steps: invoke `/thinking-systems:frame-control` with a counterpart described as a subordinate ("my direct report keeps missing deadlines, I want to set the right frame for our 1:1").
   - Expected: Skill ends Loop after Round 2 (counterpart status check), returns only the defensive read of what *the user* might be framing the report into. No offensive Statement+Question pair drafted.

2. **Test Case: concession-then-ask refuses fake concession**
   - Steps: invoke `/thinking-systems:concession-then-ask` and at Round 3 propose "I know your time is valuable" as the concession.
   - Expected: Skill flags this as trivial (does not address a specific cost the counterpart paid) and re-runs Round 2 accusation audit.

3. **Test Case: conversational-recovery refuses pace-harder**
   - Steps: invoke `/thinking-systems:conversational-recovery` after a pacing miss; at Round 4 propose another pacing line as the redeploy.
   - Expected: Skill flags this as the salvage-behaviour failure mechanic and forces a different class.

## Risk Assessment

### Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| `.gnhf` audit drift on new Skills | Med | Med | Phase 5 grep spot-check on each load-bearing phrase across 5 slots before commit; drafts in synthesis §B.3 are pre-audited. |
| Cross-skill edits regress an existing Skill's load-bearing audit | Low | High | Phase 5 diff check; cross-skill edits only add Skip clauses / Role notes / cross-references — none modify any existing load-bearing move. |
| Auto-trigger collision (new Skill auto-fires on prompts intended for an existing Skill) | Med | Low | Skill descriptions use specific verbatim trigger phrases (e.g., "I keep losing this conversation", "scan this for assumptions"); collision risk is bounded because the existing Skills' triggers do not overlap with these. If discovered post-ship, tighten the colliding Skill's description in a follow-up. |
| `bun run validate` rejects new manifest because of unrecognised skill names | Low | Low | Validator (`scripts/validate-plugin.ts`) reads `.claude-plugin/plugin.json` and skill files; no schema change is needed for additive Skills. Run validator after Phase 4. |
| Hughes citation drift (Skill references NCI courses or paid programs) | Low | Med | Phase 5 grep check (`rg -i "(nci\|behavior operations)" skills/` returns zero matches). Drafts in synthesis already exclude NCI branding. |

### Business Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| User mistakes the framing Skills for manipulation coaching | Med | Med | Each Skill's Role section documents the ethical guardrail (refuse offensive deployment against subordinate / vulnerable counterparts); Completion section enforces ethical audit before returning a draft. |
| Plugin reputation damage from over-association with Hughes / NCI | Low | Med | Citation hygiene per NFR-3; deeper traditions cited prominently; Hughes mentioned only as recent restater. |
| User over-applies framing tools to non-conversational engineering tasks | Low | Low | "When NOT to use" guidance in each Skill's Skip clause; auto-trigger requires a counterpart noun in the prompt. |

### Mitigation Strategy

Codepath risk register (per the plan template's directive to add one sentence per new codepath):

- **`frame-control` Round 1 frame-already-running read** — fails when the user cannot name the running frame; manifests as the loop refusing to advance to statement-class selection; fallback: Skill offers the four standard frames (authority / adversarial / emotional / narrative) as recognition prompts.
- **`frame-control` Round 2 counterpart status check** — fails when the user describes a subordinate counterpart; manifests as Loop ending early with defensive-only output; fallback: this is the intended ethical refusal, not a bug.
- **`presupposition-detector` Round 2 surface pass** — fails when the inbound has no embedded assumptions; manifests as an empty Says/Presupposes list; fallback: Skill announces "no presuppositions surfaced; routing to relevant decision skill" and exits.
- **`concession-then-ask` Round 3 concession-quality check** — fails when the proposed concession is trivial / fake / wrong-target; manifests as the Round re-running with explicit rejection reasons; fallback: if no real concession exists after 2 re-runs, Skill ends with "concession-then-ask is not the move" and routes to `frame-control`.
- **`conversational-recovery` Round 4 class-shift selection** — fails when the user proposes a same-class redeploy ("I'll just pace better"); manifests as Round refusing to draft and re-running miss-type diagnosis; fallback: explicit error message naming the salvage-behaviour failure mechanic.

## Rollback Strategy

### Rollback Steps

If a regression is discovered post-merge:

1. `git revert` the commit that introduced the framing skills (one commit per the §6 finalization plan).
2. Re-run `bun run validate` to confirm the existing 25 Skills are intact.
3. Optionally cherry-pick the CONTEXT.md and ADR files forward (they are independent of the Skill content and useful even if the Skills are pulled).

### Rollback Conditions

- A new Skill's auto-trigger consistently fires on prompts intended for an existing Skill, and tightening the description does not resolve the collision.
- The `.gnhf` audit reports new cross-layer drift introduced by the new Skills that cannot be closed within one cycle.
- A user reports the plugin outputting manipulative content despite the ethical-refusal guardrails (escalate to the maintainer; consider hot-patching the affected Skill's Role / Completion before full rollback).

## Validation Commands

Execute every command to validate the implementation:

```bash
cd thinking-systems-plugin

# 1. Manifest + skill-shape validation (existing validator)
bun run validate

# 2. Audit spot-check — load-bearing phrases verbatim in 5 required slots
for skill in frame-control presupposition-detector concession-then-ask conversational-recovery; do
  echo "=== $skill ==="
  rg -c "frame[- ]already[- ]running\|surfacing the unstated assumption\|pre-emptive disclosure\|class-shift after the miss" "skills/$skill/SKILL.md"
done

# 3. Citation hygiene
rg -i "(nci|behavior operations|behavioral table)" skills/ && echo "FAIL: NCI branding found" || echo "OK: no NCI branding"

# 4. Hughes citation count (≤4 across all new skills)
rg -c "Hughes" skills/frame-control/SKILL.md skills/presupposition-detector/SKILL.md skills/concession-then-ask/SKILL.md skills/conversational-recovery/SKILL.md

# 5. README ↔ filesystem consistency
for cmd in frame-control presupposition-detector concession-then-ask conversational-recovery; do
  test -f "skills/$cmd/SKILL.md" && test -f "commands/$cmd.md" && echo "OK: $cmd" || echo "FAIL: $cmd missing files"
done

# 6. Existing Skill diff (verify only Skip clauses / Role notes added)
git diff HEAD -- skills/situation-behavior-impact/ skills/conflict-resolution-diagram/ skills/minto-pyramid/ skills/abstraction-laddering/ skills/ooda-loop/ skills/ladder-of-inference/

# 7. Plugin.json version
rg '"version": "0.2.0"' .claude-plugin/plugin.json && echo "OK: version bumped"
```

## Acceptance Criteria

- [ ] All 4 new Skills land at `skills/<name>/SKILL.md` with full canonical body shape (frontmatter + Priorities + Role + Loop + Input Handling + Example + Completion)
- [ ] All 4 new commands land at `commands/<name>.md` as thin wrappers
- [ ] All 6 cross-skill edits applied per synthesis §B.5
- [ ] README.md updated (Communication row + auto-trigger + Credits)
- [ ] CHANGELOG.md v0.2.0 entry added
- [ ] plugin.json version bumped to 0.2.0
- [ ] CONTEXT.md and 3 ADRs present (created with this plan)
- [ ] `bun run validate` exit 0
- [ ] All audit spot-checks (Validation Commands §2–7) pass
- [ ] Manual smoke of each new command runs without error
- [ ] Existing 25 Skills unchanged in load-bearing move (only Skip clauses / Role notes added)
- [ ] Ethical refusal guardrail demonstrated for `frame-control` and `concession-then-ask` (manual Test Case 1)
- [ ] No NCI / Behavior-Operations-Manual branding anywhere in skills/

## Dependencies

### New Dependencies

None.

### Dependency Updates

None.

## Notes & Context

### Additional Context

This plan is the implementation arm of a four-phase deep-research pipeline whose synthesis lives at `research/research-framing-tactics-deep.md` (81.5 KB). The synthesis already produced audit-clean SKILL.md drafts and command wrappers; implementation is therefore primarily a copy-and-place exercise governed by the audit checks in Phase 5.

The framing tactics being implemented derive from Chase Hughes's "5 Sentences That Turn The Tables" (https://www.youtube.com/watch?v=VD1RI50NXzk), cross-validated against Goffman, Tversky-Kahneman, Lakoff, Voss, Cialdini, Schein, Heritage, Watzlawick, Bandler-Grinder, Oyserman, Argyris, and Fisher-Ury. Hughes is credited as recent restater; the deeper traditions are the load-bearing citations.

### Domain-model summary (per /sdlc:plan step 3.5)

CONTEXT.md was created with this plan (lazy creation per the domain-model SKILL contract). Resolved canonical terms: Skill, Slash command, Load-bearing move, Audit clause, .gnhf audit, Round, Frame, Frame-already-running read, Statement class, Question class, Class-shift, Miss-type, Naked move, Pre-suasion artefact. No conflicts surfaced (the plugin had no prior CONTEXT.md and no competing definitions).

ADRs created (3, all meeting the hard-to-reverse / surprising-without-context / real-trade-off bar):
- `docs/adr/0001-four-skill-framing-bundle.md` — 4-skill bundle vs 3-skill bundle (rationale: per-mechanism granularity)
- `docs/adr/0002-communication-category-not-conversation.md` — placement (rationale: existing categories group on outcome-shape)
- `docs/adr/0003-defensive-skill-naming-presupposition-detector.md` — narrow naming (rationale: audit cleanliness vs Codex's wider scope)

### Scope decision

Estimated footprint: 4 new Skills + 4 new commands + 6 modified Skills + 3 doc files + CONTEXT.md + 3 ADRs = **~21 files**. Above the 8-file scope-smell threshold. Documented but proceeding because (a) the scope was already justified by the deep-research synthesis and (b) the changes are highly parallel (same shape repeated 4× for new Skills, same pattern repeated 6× for cross-skill edits).

### Assumptions

- Claude Code's auto-trigger continues to use the Skill `description` as the matching surface (verified in current README.md auto-trigger examples).
- The `.gnhf/runs/` audit infrastructure continues to enforce the load-bearing-move-across-5-slots invariant (most recent run #60 closed 2026-04-26 — actively maintained).
- The maintainer accepts the 4-skill split per ADR-0001; if the maintainer prefers Codex's 3-skill consolidation, swap §FR-1 from "4 new Skills" to "3 new Skills" and copy `concession-then-ask` Loop steps 1–4 into `frame-control` Round 3 — the plan otherwise survives unchanged.

### Constraints

- Markdown-only — no TypeScript / shell code beyond the existing validator.
- Citation hygiene per NFR-3 — no NCI / Behavior Operations Manual / paid-course links.
- Per-Skill granularity — splits on mechanism, not menu (no `pacing-and-leading` etc.).

### Related Tasks/Issues

- Source synthesis: `thinking-systems-plugin/research/research-framing-tactics-deep.md`
- Source video transcript: `thinking-systems-plugin/research/.deep-research-20260426-220644/transcript.txt`
- Discovery context: `thinking-systems-plugin/research/.deep-research-20260426-220644/context.md`

### References

Primary literature (cited in synthesis §B and across the new SKILL.md drafts):

- Erving Goffman, *Frame Analysis* (1974)
- Amos Tversky & Daniel Kahneman, "The Framing of Decisions and the Psychology of Choice" (Science, 1981)
- Paul Thibodeau & Lera Boroditsky, "Metaphors We Think With" (PLOS ONE, 2011) — https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0016782
- John Heritage, "Questioning in Medicine" (Oxford UP, 2010)
- John Heritage & Jeffrey D. Robinson, "Some" vs "Any" Medical Issues (2011)
- Danielle Pillet-Shore, "Preference Organization" (2017)
- Edgar H. Schein, *Humble Inquiry* (2013)
- Robert Cialdini, *Pre-Suasion* (2016)
- Chris Voss, *Never Split the Difference* (2016)
- Daphna Oyserman, "Identity-Based Motivation" (2011)
- George Lakoff, *Don't Think of an Elephant* (2004)
- Roger Fisher & William Ury, *Getting to Yes* (1981)
- Paul Watzlawick et al., *Change* (1974)
- Chris Argyris, double-loop learning
- Jackie Sturt et al., NLP systematic review (PubMed 2010) — https://pubmed.ncbi.nlm.nih.gov/23211179/

### Open Questions

- [ ] Does the maintainer prefer the 4-skill bundle (this plan, ADR-0001) or the 3-skill bundle (Codex/Gemini consensus)? *(Default: ship 4; reversible later by deprecating `concession-then-ask` and folding into `frame-control` Round 3.)*
- [ ] Should the v0.2.0 release also include the deferred `frame-audit` (wider-scope defensive Skill per ADR-0003 alternative)? *(Default: defer; ship narrow `presupposition-detector` first; revisit if user feedback shows the narrow scope misses too many non-grammatical Frame installations.)*

## Blindspot Review

**Reviewers**: Codex (`gpt-5.4`, medium reasoning) + Gemini (`gemini-3-flash-preview`) — both ran in parallel against the draft per the multi-LLM blindspot protocol. Codex returned 12 findings, Gemini 7. Both quoted "Plan Readiness: Needs Revision" pre-refinement.
**Date**: 2026-04-26
**Plan Readiness**: Ready for Implementation (post-refinement)

### Addressed Concerns

- **[Consensus, High] Validation does not actually prove the 5-slot audit invariant** *(Codex #3, Gemini #1)* → Replaced count-only `rg` with slot-aware `awk` that verifies each of the 5 required slots independently; documented that the `.gnhf` audit infrastructure has no CLI today and added a TODO for the audit-CLI work. Phase 5 first checklist item updated.
- **[Codex, High] Unresolved 4-vs-3 decision blocks implementation scope** → Added Phase 1.5 "Pre-implementation gate" with explicit go/no-go on the 4-skill bundle before file-creation begins. Plan can be re-baselined to 3-skill without rework if maintainer prefers Codex/Gemini consensus.
- **[Codex, High] Existing-skill behaviour change is understated as None** → Reclassified the Breaking Changes section: kept "no semantic break" but documented the 3 categories of behaviour addition (Skip-clause additions can change runtime flow; optional Round addition fires conditionally; Role notes are instructional only).
- **[Codex, High] E2E validation depends on unspecified execution environment** → Added Phase 1.5 prerequisite (interactive Claude Code session with plugin installed); Phase 5 manual smokes explicitly fall back to `BLOCKED: needs interactive Claude Code session` if env unavailable.
- **[Codex, High] Path-input for `presupposition-detector` is untested** → Added explicit Phase 5 task with 4 path/text edge cases (valid path, nonexistent path, multi-line text, plain prose).
- **[Codex, Medium] README/CONTEXT/ADRs not covered by citation hygiene** → Extended the citation-hygiene grep in Phase 5 to scan `README.md`, `CONTEXT.md`, `docs/adr/`, `CHANGELOG.md`, `commands/` — not only `skills/`.
- **[Codex, Medium] Phase 5 only smokes 1 of 4 commands** → Phase 5 now lists all 4 manual smokes explicitly with expected behaviours.
- **[Codex, Medium] Rollback assumes single commit without prerequisite** → Added Phase 1.5 "Single-commit constraint" prerequisite. CONTEXT.md/ADRs ship in the plan commit (independent rollback unit); Skill files ship in one implementation commit.
- **[Consensus, Medium] Auto-trigger collision under-tested** *(Codex #10, Gemini #2)* → Added Phase 5 collision-audit task with 6 specific ambiguous prompts that probe each new Skill's boundary against existing Communication-adjacent Skills.
- **[Codex, Medium] Ethical refusal incomplete for ambiguous counterpart status** → Added Story 1b (ambiguous-status) acceptance criteria: Skill asks explicitly when status unclear; `Not sure - you decide` defaults to defensive-read-only (safer default).
- **[Gemini, Low] `package.json` version sync** → Added Phase 4 task to bump `package.json` from 0.1.0 → 0.2.0 alongside `.claude-plugin/plugin.json`. Phase 5 version-sync check verifies both.

### Acknowledged but Deferred

- **[Codex, Medium] `presupposition-detector` fallback routing is undeclared dependency** → Plan's house pattern is *textual routing* via Skip clauses + Completion residual notes (not runtime invocation). Already documented in Architecture section — ratification of this pattern is a meta-question for the maintainer, not a blocker for v0.2.0. Deferred to follow-up if user feedback shows confusion.
- **[Codex, Medium] Synthesis-drafts dependency not guarded against drift** → Phase 1.5 gate adds presence-check for the 8 fenced markdown blocks; *content* drift (someone editing the synthesis after the plan ships) is mitigated by committing the synthesis with the plan on the same branch — `git log` becomes the audit trail. Full content-hash gate would be over-engineering for an internal-doc plugin.
- **[Gemini, Medium] CONTEXT.md accessibility (will Claude actually see it?)** → CONTEXT.md is at the plugin root and visible to Claude Code via the standard project context-loading path (same way CLAUDE.md is loaded). The new Skills do not currently `Read CONTEXT.md` explicitly because the canonical-term contract is enforced *at plan-write time*, not at runtime. If runtime canonical-term lookup becomes valuable, add to v0.3.0 — see TODOS.
- **[Gemini, Low] Long-input granularity guard for `presupposition-detector`** → Real risk on 5,000-word email threads but vanishingly rare in practice. Defer to v0.3.0 with a triggered re-design (only if telemetry shows users routinely paste >2000-word inbounds). See TODOS.
- **[Gemini, Low] Infinite-loop risk in audit clause re-run** → Existing plugin pattern uses `Not sure - you decide` as universal escape hatch in every `AskUserQuestion`; loop re-runs are bounded by user choice rather than automatic. Codex's recommendation (explicit 2-attempt cap with route-to-alternative-skill) is good practice but would require updating the audit-clause template across all 25 existing Skills, which is out of scope for this plan. See TODOS for the audit-clause template refresh.

### Dismissed

- *(none — all 19 findings either addressed or deferred with rationale)*
