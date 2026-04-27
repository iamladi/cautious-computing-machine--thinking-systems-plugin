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
