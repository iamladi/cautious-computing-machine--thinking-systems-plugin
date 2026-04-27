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
