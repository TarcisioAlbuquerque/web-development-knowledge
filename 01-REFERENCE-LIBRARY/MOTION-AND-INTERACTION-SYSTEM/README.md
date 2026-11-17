# Motion & Interaction System

A reusable reference system for purposeful motion and functional interactions across websites and digital experiences. It is a **toolbox, not a mandatory effect checklist**. Select patterns according to the brief; minimal or static motion is valid when it best serves the experience.

## Read by need
| Need | File |
|---|---|
| Find an animation/motion pattern | `PATTERN-CATALOG.md` |
| Select an interactive component | `INTERACTIVE-COMPONENTS.md` |
| Specify project behavior | `MOTION-BRIEF-TEMPLATE.md` |
| Choose implementation approach | `IMPLEMENTATION-PLAYBOOK.md` |
| Understand the Ana Marques source case | `CASE-STUDY-ANA-MARQUES.md` |
| Bootstrap the system in a client repo | `PROJECT-BOOTSTRAP-INSTRUCTIONS.md` |
| Use vanilla/GSAP examples | `../../../06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/README.md` |

Do not read every file by default. Start with the relevant catalog section, then open implementation details only for selected patterns.

## Technique quick reference
- **Scroll-linked animation:** progress is tied to scroll position; distinct from an entrance merely triggered by viewport visibility.
- **GSAP ScrollTrigger:** orchestration tool for scroll triggers, pinning, scrubbing and timelines; not a visual style by itself.
- **Parallax:** layers move at different rates to suggest depth; use sparingly and validate mobile and reduced-motion behavior.
- **Sticky:** an element remains in view during a bounded portion of normal document scrolling.
- **Horizontal scroll scene:** vertical scrolling controls a horizontal track; preserve predictable navigation and a touch/vertical fallback.
- **Glassmorphism:** translucent, blurred layered surfaces; use selectively, with contrast and a fallback when backdrop blur is unavailable.

These are options, not a checklist. Prefer native CSS/APIs when they meet the requirement; use the implementation playbook only after selecting a pattern.

## Unidentified discovery terms
The following names were supplied as future research leads. Their exact identity, URL and category remain unverified; do not recommend or describe them as tools until identified:
- **Details Vault**
- **Microkit**
- **Bencho** (spelling and URL also pending)

## Workflow
1. Decide whether motion/interactivity improves communication, identity, navigation or task completion.
2. Select only suitable patterns and record purpose, trigger, states, desktop/mobile behavior and fallback in the project brief.
3. Choose the simplest suitable implementation; justify additional dependencies.
4. Implement functional controls and progressive enhancement.
5. Test the selected behaviors, keyboard/touch, responsive layouts, reduced motion and performance. Report checks actually run.

## Evidence
Reference patterns may be OBSERVED, INSPECTED IN CODE, REPORTED BY SOURCE, INFERRED, RECOMMENDED or NOT VERIFIED. Never infer a library/framework from appearance alone. The Ana Marques case is reported from a supplied audit, not independent source-code inspection.

## Non-negotiable quality
- Content remains available without animation.
- Respect `prefers-reduced-motion`; provide accessible keyboard and focus behavior.
- No scroll hijacking or motion that traps navigation.
- Continuous motion/autoplay needs appropriate controls and reduced-motion behavior.
- Mobile/touch and performance are first-class.
- A plan, placeholder or inert button is not an implementation.

## Stable IDs
Catalog IDs (`M-xx`) and interaction IDs (`I-xx`) may be used in briefs, code comments and QA. Repeated use of the same pattern is consistency, not a new pattern count.
