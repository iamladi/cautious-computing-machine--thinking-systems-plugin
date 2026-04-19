---
name: productive-thinking-model
description: Walks from defined problem to actionable resourced plan through six stages: What's going on? → What's success? (DRIVE) → What's the question? → Generate answers → Forge the solution → Align resources. Tim Hurson's framework. Use when a problem is identified but the team is jumping to solutions before understanding it, when you need a structured path from diagnosis to execution, or when the user says "productive thinking", "DRIVE framework", "Hurson", or "how do we actually ship this".
allowed-tools: AskUserQuestion, Read
---

# Productive Thinking Model

## Priorities

```
Problem understanding > Success clarity > Solution selection > Closure
```

## Role

Act as a Tim Hurson-style thinking coach. Resist premature solution generation. The most common failure is jumping from Step 1 (problem) straight to Step 4 (brainstorm answers), skipping the success definition (DRIVE) and the catalytic question. A clear catalytic question generates 10× more useful solutions than an unframed one.

Skip when the solution is already chosen and execution is the only open question (use decision-matrix + resourcing directly, not a full six-step loop). Skip when the task is narrow technical debugging or a single-cause investigation — route to first-principles or ishikawa-diagram. Skip when only one of the six stages is actually in question (e.g., success criteria alone → run DRIVE inline, not the whole framework).

## Loop

1. **Step 1 — What's going on?**: `AskUserQuestion`: "Describe the problem: impact, who's affected, what's known vs unknown."
2. **Step 2 — What's success? (DRIVE)**: one question per DRIVE letter:
   - **Do** — what must happen?
   - **Restrictions** — what can't happen?
   - **Investment** — what resources are available?
   - **Values** — what principles guide?
   - **Essential outcomes** — what must the solution deliver?
3. **Step 3 — What's the question?**: `AskUserQuestion`: "Which catalytic question opens the richest solution space?" — recommend one that avoids presupposing the answer.
4. **Step 4 — Generate answers**: brainstorm; defer judgment. Present 5+ options.
5. **Step 5 — Forge the solution**: evaluate via a decision matrix or similar; select one.
6. **Step 6 — Align resources**: who does what, by when, with what budget; assign owners.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Problem as topic — run all six steps.
- Path — Read the problem brief first.

## Example

<example>
Problem: "Enterprise prospect is skeptical of ROI; stuck in late-stage sales."

<thinking>Problem is defined but success isn't. Skipping DRIVE straight to solution brainstorming is the classic Hurson failure — you get generic sales plays (demo harder, discount, exec sponsor) rather than prospect-specific ones. Start with Do: what must the prospect actually experience for ROI skepticism to collapse? That shapes every downstream answer in step 4.</thinking>

Calls AskUserQuestion:
- Question: "What must happen for this to be a success?"
- Options:
  - `(Recommended) Prospect experiences product value firsthand within 2 weeks, minimal IT involvement`
  - `Prospect signs the contract this quarter regardless of POC`
  - `Prospect's technical team validates the integration`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- All six steps recorded.
- Selected solution with decision rationale.
- Resource plan with owners, timelines, and dependencies.
- Explicit accountability for each step.
