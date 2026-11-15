---
name: motion-interaction-engineering
description: Plans, implements or reviews web animation, scroll-linked motion, GSAP/ScrollTrigger, microinteractions, galleries, carousels, tabs, forms and accessible interaction. Use when a page needs motion design or functional interactive components.
---

# Motion & Interaction Engineering

## Core principle
Motion is communication and feedback, not a quota. A component may be interactive without elaborate animation; an animation may occur without interaction. Plan and test them separately.

## Process
1. Read the approved brief, UX, visual direction, media and constraints.
2. Select profile:
   - Essential: subtle transitions, usable feedback and only motion that supports clarity.
   - Standard: coordinated hero/section/media treatments and contextual interactions where useful.
   - Signature: editorial sequences, scroll storytelling or advanced interaction justified by brand and content.
3. Consult Motion System README and only the catalog/component IDs needed for this project.
4. Write/update the project Motion Brief when motion is significant. For every selected treatment specify purpose, element, trigger, initial/final state, timing/easing, desktop/mobile, reduced-motion, fallback, dependency and acceptance test.
5. Choose the simplest implementation: CSS first; native Web Animations API / IntersectionObserver next; library/framework motion for complex state/timeline; GSAP/ScrollTrigger for complex orchestration, pinning or scroll-linked scenes when justified.
6. Implement with progressive enhancement. Content and controls must work if animation is disabled or JS fails.
7. Respect prefers-reduced-motion. Avoid forced scroll, focus traps, long intros, excessive movement, layout shifts and motion that blocks reading or action.
8. Provide keyboard, touch and visible focus behavior. Continuous marquee/autoplay needs a pause/stop mechanism where applicable.
9. Test scroll down/up, resize, browser history/route changes, delayed media, touch, keyboard, reduced-motion and cleanup of observers/listeners/timelines.
10. Map implemented behavior to stable catalog IDs and record evidence in QA.

## Do not
- Force a numeric minimum of effects or interactions.
- Add GSAP, Lenis, Framer Motion or another dependency for a simple fade.
- Infer the original site's library from visual appearance.
- Count repeated copies of the same reveal as distinct patterns.
- Use simulated chats/testimonials as real proof.

## Reference routing
Start at 01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/README.md. Open PATTERN-CATALOG.md, INTERACTIVE-COMPONENTS.md, IMPLEMENTATION-PLAYBOOK.md and Starter Kit files only for the selected patterns. Use the Ana Marques case study with its evidence caveat.
