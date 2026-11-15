# Knowledge Base Refactor — Audit and Change Report

- Date: 2026-11-15
- Work branch: refactor/expert-agent-system-2026-11
- Base branch: main
- Scope: full documentation, skills/agents architecture, methodology, motion system, development standards and QA.

## Findings addressed
1. Repeated workflow/motion rules across README, AGENTS, methodology, master prompt, specialist prompts, bootstrap, development standards and QA created drift and duplicated context.
2. A mandatory count of six motion treatments and three interactions rewarded quantity over user value. Replaced with Essential/Standard/Signature profiles and purpose-based acceptance.
3. Agent roles and specialist prompts were not executable Claude Code Skills/subagents.
4. Always-on instructions were too broad relative to the task; introduced short root instructions and progressive loading.
5. QA referenced accessibility, security and performance without enough measurement caveats; added scoped tests, severity, field-vs-lab distinction and current standards.
6. Engineering process lacked explicit task planning, test strategy, root-cause debugging, independent review and verification gates.
7. The learning path from fundamentals to expert practice was not explicit.
8. Starter kit documentation and interaction setup needed a stronger separation from project-specific decisions.

## Decisions
- Preserve the universal methodology; AURA remains one application.
- Keep reference cards/guides unless genuinely duplicated.
- Use Claude Code skills under .claude/skills and specialist agents under .claude/agents.
- Keep CLAUDE.md, AGENTS.md and Copilot instructions short.
- Move detailed procedures into lazy-loaded Skills and references.
- Remove duplicated master/specialist prompt documents in favor of Skills plus a compact Task Brief.
- Preserve Motion catalog IDs; remove numeric effect quota.
- Keep external frameworks as selectively adopted patterns, not mandatory plugins.

## Deleted as redundant
- 04-PROMPTS/MASTER-PROMPT.md — replaced by CLAUDE.md, orchestrator Skill and Task Brief.
- 04-PROMPTS/SPECIALISTS/MASTER-SPECIALIST-PROMPTS.md — replaced by Skills, registry and agent definitions.
- 01-REFERENCE-LIBRARY/INTERACTION-AND-VISUAL-TECHNIQUES.md — duplicated the canonical Motion System; unclassified names retained in TOOLS-AND-TECHNIQUES-TO-VERIFY.md.

## Not yet runtime-validated
- Claude Code Skill discovery and agent invocation require a Claude Code session.
- Skills are initial DRAFTs until baseline/with-skill tests are logged.
- Starter Kit requires browser/device tests in a consuming project.
- No production website was built or deployed as part of this refactor.

## Repository security warning
At audit time, GitHub API reported repository visibility as public, while an earlier governance entry said it should remain private. This refactor did not alter visibility. Confirm and correct repository visibility before adding confidential client or commercial material.
