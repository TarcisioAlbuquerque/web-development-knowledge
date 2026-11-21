# Knowledge Index — task router

**Purpose:** route an agent to the smallest useful context package. Start here after `AGENTS.md`. Do not read every folder or every specialist prompt.

## Route by task

| If the task is… | Read first | Load only if needed |
|---|---|---|
| Understand the system | `MASTER-CONTEXT.md` | `GOVERNANCE-DECISIONS-AND-HANDOFFS.md` |
| Plan/build a website | `00-METHODOLOGY/MASTER-METHODOLOGY.md` | relevant workflow, project brief, standards |
| Run a full client workflow | `00-METHODOLOGY/WEB-AND-CLIENT-OPERATIONS-WORKFLOWS.md` | only the relevant business or web section |
| Research a niche/site | `01-REFERENCE-LIBRARY/README.md` | matching reference cards; cross-niche patterns only when relevant |
| Visual direction | `02-DESIGN-LIBRARY/README.md` | selected reference cards and project tokens |
| Motion/interaction design | `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/README.md` | catalog, component catalog, brief template, implementation playbook as needed |
| Implement motion | `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/README.md` | only required JS/CSS recipe files |
| Choose agents/models | `03-AGENT-SKILLS/AGENT-REGISTRY-AND-MODEL-ROUTING.md` | only the chosen specialist prompt |
| Write a project prompt | `04-PROMPTS/MASTER-PROMPT.md` | one relevant specialist prompt |
| Create/update project brief | `05-PROJECTS/PROJECT-TEMPLATE.md` | client-owned project files |
| Choose stack/engineering | `06-DEVELOPMENT-STANDARDS/README.md` | relevant technology documentation |
| QA/release | `07-QUALITY-CONTROL/ACCEPTANCE-AND-RELEASE-CHECKLIST.md` | test-specific standards |
| Find leads/outreach | `01-REFERENCE-LIBRARY/GUIDES-AND-PLAYBOOKS/CLIENT-ACQUISITION/CLIENT-OUTREACH.md` | business workflow |
| Learn basic site delivery | `01-REFERENCE-LIBRARY/GUIDES-AND-PLAYBOOKS/WEB-PRODUCTION/SITES-COM-IA-18-AULAS.md` | methodology for professional depth |

## Specialist prompt routing
`04-PROMPTS/SPECIALISTS/MASTER-SPECIALIST-PROMPTS.md` contains role prompts. Search within it for the one role needed; do not paste the entire library into every agent. If the role is obvious and the task is small, use the role description in your own instructions without loading a prompt.

## Reference routing
`01-REFERENCE-LIBRARY/README.md` is the index. Open only relevant cards. Each card states its evidence status; pending/unverified references must not be described as inspected. Transfer principles across niches only when the brief supports the transfer.

## Motion routing
Motion is a capability, not a mandatory effect count. For projects where motion/interactions matter, read the Motion System overview and select only relevant catalog entries. Open the implementation playbook and starter-kit files only after choosing patterns. Always, keyboard/touch, fallback and performance.

## Context budget protocol
1. Identify task type and deliverable.
2. Read this index and the one primary document.
3. Load only referenced sections/files needed for the next decision.
4. Stop retrieving once the task can be completed reliably.
5. In handoff, list files actually consulted.
6. Never paste entire catalogs, specialist libraries or all references unless the task explicitly requires a full audit.

## Maintenance
When adding a durable document, add one route here. Avoid duplicating its full instructions in README, AGENTS or Copilot rules.
