### Unresolved 4-skill vs 3-skill decision blocks implementation scope (Severity: High, Confidence: 0.97)
**Section**: `Open Questions`, `Assumptions`, `FR-1`, `Implementation Plan`
**Issue**: The plan leaves the core packaging decision open (`4-skill` bundle vs `3-skill` consolidation), but every downstream requirement, file list, validation command, and acceptance criterion assumes 4 skills. That makes Phase 2/3 work non-deterministic if the maintainer has not explicitly approved ADR-0001 first.
**Recommendation**: Add an explicit go/no-go prerequisite before Phase 2: maintainer confirms `4-skill` bundle, or the plan is re-baselined to the `3-skill` variant before file creation starts.

### Existing-skill behavior change is understated as “None” (Severity: High, Confidence: 0.9)
**Section**: `Breaking Changes`, `Users Affected`, `FR-3`
**Issue**: The plan marks the release as having no behavior change for existing skills, but the 6 cross-skill edits add skip clauses, routing notes, optional rounds, and pre-passes. Those are user-visible behavior changes even if the “load-bearing move” stays the same.
**Recommendation**: Reclassify this as additive with modified behavior in 6 existing skills, and explicitly identify which edits can affect runtime flow versus which are documentation-only.

### Validation does not actually prove the 5-slot audit invariant (Severity: High, Confidence: 0.95)
**Section**: `Phase 5`, `Validation Commands`, `NFR-1`
**Issue**: The grep/count check only proves the phrase appears some number of times in a file. It can pass if all matches are clustered in one or two sections while one of the required slots is missing entirely.
**Recommendation**: Replace the count-only check with a slot-by-slot verification against the exact required sections, or define a deterministic procedure that maps each occurrence to `description / Priorities / Role / Input Handling / Example / Completion`.

### E2E validation depends on an unspecified execution environment (Severity: High, Confidence: 0.86)
**Section**: `Testing Strategy`, `Phase 5`, `Dependencies`
**Issue**: The plan requires manual invocation of slash commands and runtime loop behavior checks, but it never states how those commands are executed locally, what host environment is used, or whether the implementation team has access to a test harness that can exercise `Skill(...)`, `AskUserQuestion`, and auto-trigger behavior.
**Recommendation**: Add the concrete prerequisite and method for runtime testing before Phase 5, or mark those checks as blocked until the execution environment is available.

### File-path input for `presupposition-detector` is untested and underspecified (Severity: High, Confidence: 0.88)
**Section**: `API Changes`, `Story 2`, `Testing Strategy`
**Issue**: The command contract allows `[path-or-quoted-text]`, but all tests use inline quoted text only. There is no coverage for unreadable paths, nonexistent files, non-text files, multiline content, or how path input is distinguished from plain prose.
**Recommendation**: Add explicit acceptance criteria and tests for valid file-path input, missing-path failure, and non-text/unparseable input handling.

### Ethical refusal rules are incomplete for ambiguous or missing counterpart status (Severity: Medium, Confidence: 0.9)
**Section**: `FR-10`, `Story 1`, `Risk Assessment`
**Issue**: The refusal rule covers subordinate, vulnerable, or unaware counterparts, but the plan only tests the subordinate case. It does not define what happens when status is unclear, partially implied, or omitted altogether, which is likely in real prompts.
**Recommendation**: Specify the decision rule for unknown/ambiguous counterpart status and add tests for `vulnerable`, `unaware`, and `status not stated`.

### README/credit citation hygiene is out of scope for the actual checks (Severity: Medium, Confidence: 0.92)
**Section**: `NFR-3`, `Phase 4`, `Validation Commands`
**Issue**: The plan updates `README.md`, `CONTEXT.md`, and ADRs with framing lineage and Hughes references, but the hygiene checks only scan `skills/`. That leaves the edited docs unvalidated against the same branding/link constraints.
**Recommendation**: Extend citation-hygiene validation to every edited documentation surface, especially `README.md`, `CONTEXT.md`, and the new ADRs.

### Phase 5 only manually smokes one new command, but acceptance requires all four (Severity: Medium, Confidence: 0.96)
**Section**: `Phase 5`, `Acceptance Criteria`, `Testing Strategy`
**Issue**: Phase 5 includes manual end-to-end validation for `frame-control` only, while the acceptance criteria require that all 4 new commands run without error, and the testing section defines 4 separate E2E cases.
**Recommendation**: Align the implementation checklist with the acceptance criteria by requiring manual smoke coverage for all 4 commands, not just one.

### Rollback assumes a single introducing commit without making that a prerequisite (Severity: Medium, Confidence: 0.84)
**Section**: `Rollback Strategy`
**Issue**: Rollback step 1 depends on “the commit that introduced the framing skills,” but the plan does not require a single isolated commit. Given the size of the change set, implementation could easily span multiple commits, weakening rollback reliability.
**Recommendation**: Add a prerequisite that all framing-skill changes ship in one isolated commit, or document the exact commit set to revert together.

### `presupposition-detector` fallback routing is an undeclared dependency (Severity: Medium, Confidence: 0.8)
**Section**: `Risk Assessment`, `Technical Requirements`, `Architecture`
**Issue**: The mitigation text says the skill may exit with “routing to relevant decision skill,” but the plan does not define which skill(s) that means, whether that routing is textual guidance or actual invocation, or how it fits the “one Skill per wrapper” architecture.
**Recommendation**: Specify the exact fallback behavior and destination skills, and clarify whether routing is instructional text only or part of command execution.

### Auto-trigger collision risk is under-tested relative to its stated importance (Severity: Medium, Confidence: 0.87)
**Section**: `Success Metrics`, `FR-8`, `Risk Assessment`
**Issue**: The plan treats auto-trigger phrasing as a quality gate and acknowledges collision risk, but there is no validation scenario for near-overlap prompts against the 6 modified existing skills or against each of the 4 new skills.
**Recommendation**: Add explicit collision checks using ambiguous prompts that could plausibly match both old and new skills, especially for the edited Communication-adjacent skills.

### Dependency on pre-written synthesis drafts is not guarded against drift or absence (Severity: Medium, Confidence: 0.82)
**Section**: `FR-1`, `FR-2`, `Solution Design`, `Additional Context`
**Issue**: The implementation is described as “copy-and-place” from `research/research-framing-tactics-deep.md`, but the plan does not verify that the referenced sections actually contain all 4 final drafts, the exact wrappers, and wording consistent with the current acceptance criteria.
**Recommendation**: Add a prerequisite check that the cited synthesis sections contain the final approved text for all 4 skills and wrappers before Phase 2 begins.

## Overall Assessment
**Plan Readiness**: Needs Revision  
**Confidence**: 0.93  
**Key Blindspots Found**: 12
