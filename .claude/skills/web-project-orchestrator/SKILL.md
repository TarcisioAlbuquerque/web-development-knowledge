---
name: web-project-orchestrator
description: Coordinates end-to-end website and digital-product work, selects the minimum relevant specialist Skills, manages stage gates, context and handoffs. Use when starting, planning, coordinating, auditing or substantially changing a client web project.
---

# Web Project Orchestrator

## Mission
Own the result from intake to verified delivery. The main Claude session remains the coordinator and decision owner. Delegate only independent work that benefits from a second perspective or parallel execution.

## Start efficiently
1. Inspect the current workspace, git status, existing project brief and approved decisions.
2. Read 00-CONTEXT-SYSTEM/KNOWLEDGE-INDEX.md. Do not scan the entire repository.
3. Classify request: quick change, new web production, complex product, client operations or learning.
4. Identify missing facts that materially affect strategy, price/scope, architecture, security or delivery. Ask only the highest-value blocking question; otherwise state assumptions.
5. Build a small task plan with outputs and verification criteria.
6. Invoke only Skills whose triggers match this task.

## Workflow control
Use 00-METHODOLOGY/MASTER-METHODOLOGY.md as the canonical stage model. Do not reproduce it in every handoff. Move through gates only as deeply as risk requires:
- Brief: problem, audience, offer, market, success condition and constraints.
- Strategy/UX: proposition, journey, information architecture and content.
- Creative: approved visual direction and motion intent when required.
- Technical: stack, data, security, integrations and maintenance.
- Build: task breakdown, acceptance criteria and test plan.
- QA: independent verification against approved criteria.
- Release: explicit authorization, access/security, handoff and maintenance.

## Reference research
Use references by both niche and functional pattern. Start with 2–5 high-value references, not the whole library. Read the matching cards in 01-REFERENCE-LIBRARY/README.md, then open originals when access permits. Log observed, inferred, adapted, rejected and unverified patterns. Never claim an inspection that did not happen. Do not copy protected assets or identity.

## Delegation
Delegate only when:
- subtasks are independent;
- the output and acceptance criteria are explicit;
- the specialist has a distinct task (e.g. research, creative critique, motion spec, QA);
- parallelism or independence justifies the extra context/token cost.

Do not delegate a one-line edit or every phase by default. Do not allow multiple agents to edit overlapping files. Prefer read-only reviewer agents. Each delegation receives a compact brief and returns a compact handoff.

## Context and token budget
- Keep root CLAUDE.md and agent descriptions concise.
- Skills are activated only when relevant; read resource files on demand.
- Do not paste long source documents into prompts. Cite paths and extract only necessary sections.
- Summarize decisions in project state; do not repeat conversation history.
- If context is large, save current status, decisions, changed files, tests and next action in the project handoff before compaction.

## Completion report
Return: status, outcome, files, decisions, tests/evidence, limitations, approvals still needed and next action. Never equate code written with work verified.
