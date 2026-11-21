# Motion System Bootstrap — Client Repositories

Use only when a client project needs motion/interaction guidance. The central repository is public, but other agents do not automatically inherit its context.

## Setup
1. Read the client brief and approved decisions.
2. Share only relevant Motion System files with the implementing agent.
3. Copy `MOTION-BRIEF-TEMPLATE.md` to the client project as `docs/MOTION-BRIEF.md` when useful.
4. Select relevant patterns; do not copy the entire catalog or starter kit unless needed.
5. Add the short project rule below to the client's agent instructions.

## Project rule
```md
Use the project's Motion Brief and selected Motion & Interaction references. Motion is contextual, not a quota: include it when it improves communication, identity, navigation or task completion; a restrained/static approach is valid when intentional. Specify purpose, trigger, states, responsive behavior, fallback and acceptance checks. Implement only approved patterns; every interactive control must work. Preserve content without animation, keyboard/touch access and performance. Test selected behavior in the real project and report checks actually performed. Do not load the full reference library by default.
```

## Handoff
Carry the brief, selected IDs, implementation status, evidence and unresolved issues between agents. GitHub is the canonical source, but model memories are not synchronized. Never assume an agent has read a document unless it was provided or verified.

## Definition of done
The project meets its own approved acceptance criteria; selected interactions work; accessibility, responsive behavior and are checked; limitations are documented. No fixed effect count applies.
