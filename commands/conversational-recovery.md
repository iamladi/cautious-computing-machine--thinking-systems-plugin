---
description: Repair a conversation after a framing move missed by diagnosing the miss type, releasing the dead move, and class-shifting (do not pace-harder)
argument-hint: [what you said, what they said back, what kind of miss it felt like]
---

# /thinking-systems:conversational-recovery

Recover after a missed framing move by class-shifting (not by repeating the same class louder or longer). Thin wrapper around the `thinking-systems:conversational-recovery` skill.

## Usage

```
/thinking-systems:conversational-recovery I opened with "we've been going back and forth" and they snapped "no, you've been holding us up"
/thinking-systems:conversational-recovery my opener with the CTO landed flat — they just stared
```

## Behavior

Parse the miss from `$ARGUMENTS`. If empty, ask: `"What did you say, and what did they say back?"`.

Invoke the skill: `Skill(thinking-systems:conversational-recovery, args: "$ARGUMENTS")`
