# Agent Instructions

## Start
- Read this file, then `00-CONTEXT-SYSTEM/KNOWLEDGE-INDEX.md`.
- Open only the task-specific documents mapped by the index. Do not scan or preload the repository by default.
- For an existing client project, read its brief and approved decisions before generic guidance.

## Work
- Inspect relevant files before editing. Make the smallest change that fully solves the task.
- Separate confirmed facts, source-backed evidence, assumptions, recommendations and unknowns.
- Choose tools, frameworks and dependencies for the actual requirements; prefer the lowest total complexity that meets them.
- Consult references selectively by niche **and** transferable pattern. Inspect the original source when the decision depends on its current appearance or behavior.
- Preserve approved decisions and reusable knowledge. Do not copy third-party identity, content, assets or code.
- Do not invent facts, claims, testimonials, credentials, integrations or test results.
- Do not add secrets or unnecessary personal/client data.

## Project quality
- Plan UX, visual design, motion, interaction and engineering as one experience.
- Motion is contextual, not a quota: select only effects that improve communication or usability. A restrained/static treatment is valid when justified by the brief.
- Interactive controls must work; motion must not hide content or block navigation.
- Respect keyboard, focus, touch, responsive layouts, performance and progressive enhancement.
- Run the relevant QA checklist; report what was and was not actually tested.

## Context and handoff
- Use `00-CONTEXT-SYSTEM/KNOWLEDGE-INDEX.md` to route to specialists, prompts, references and standards.
- Give each agent only its role-specific context and inputs. Do not send all specialist prompts to every agent.
- Handoffs state task, files/sources read, result, decisions vs proposals, tests, risks and next action.

## Repository safety
- Work on a branch; never force-push.
- Do not change repository visibility, permissions, secrets or administrative settings.
- Keep the public knowledge base free of private client material.
- Preserve unique content when consolidating. Delete only verified duplicates/obsolete material and retain Git history.
