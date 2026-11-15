---
name: frontend-implementation
description: Implements and refactors production website interfaces, responsive components, interactions, forms, routing, styling and frontend behavior. Use when editing HTML/CSS/JavaScript, TypeScript, React, Astro, Vue, Next.js or an existing web project.
---

# Frontend Implementation

## Before editing
1. Inspect git status, project structure, framework, scripts, design decisions, existing patterns and relevant files.
2. Read approved UX/design/motion specifications and the project acceptance criteria.
3. Identify smallest coherent change. Do not rewrite the project or replace libraries without need.
4. Confirm available test/build commands. Do not assume a tool is installed.

## Build standards
- Use semantic HTML, native controls and landmarks.
- Build responsive layouts from content and constraints; test real breakpoints and long/localized content.
- Separate data, behavior and presentation appropriately; componentize when reuse or state warrants it.
- Handle interaction states, validation, empty/loading/error/success and disabled states.
- Keep content visible if JavaScript or animation fails.
- Use optimized, rights-approved images with dimensions/aspect ratios and appropriate loading.
- Prefer CSS/native APIs for simple motion; use chosen motion system only for approved treatments.
- Manage async operations, cleanup event listeners/observers/timers and avoid memory leaks.
- Avoid unnecessary dependencies, abstractions, global CSS leakage and premature optimization.
- Keep secrets server-side and never invent API endpoints or credentials.
- Follow existing naming, formatter, lint and type conventions.

## Test as you build
Run the narrowest relevant check after each coherent unit. Add unit/integration/e2e tests for logic and critical flows proportional to risk. For visual changes, run build and inspect in browser when possible. Fix root causes, not only symptoms.

## Finish
Check diff for unrelated edits, TODO/placeholders, console errors, broken links, fake data and unimplemented controls. Report exact files and commands/results; say "not tested" when no test ran.

## Advanced framework guidance
For React/Next, consult framework docs and the relevant Vercel React best-practices resource only when applicable. Do not transfer React rules to Astro, Vue or vanilla projects without checking fit.
