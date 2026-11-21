# Motion & Interaction — Implementation Playbook

## 1. Choose the smallest capable tool
| Need | First choice | Escalate when |
|---|---|---|
| Hover/focus/fade/slide | CSS transitions/animations | No library needed for simple effects. |
| Viewport reveal | IntersectionObserver + CSS | Timeline orchestration becomes complex. |
| Native controlled animation | Web Animations API | Fine-grained timelines/state are required. |
| Tabs/FAQ/simple state | Native HTML + small JS or existing framework | Application state/reuse justifies framework. |
| React state transitions | Existing CSS / Motion library | State orchestration is materially simpler. |
| Pin/scrub/complex scroll | GSAP + ScrollTrigger | Prototype proves value and acceptable mobile behavior. |
| Simple marquee | CSS animation + accessible pause control | JS needed for user controls/state. |
| SVG stroke | CSS/WAAPI | Scroll/timeline orchestration becomes complex. |

Do not add GSAP, Lenis, Framer Motion/Motion or another library for a simple fade. Check current documentation, license, version and cleanup requirements before use.

## 2. Architecture
Separate motion tokens (duration/easing/distance), reusable primitives, orchestration/timelines, interactive components, accessibility behavior and QA. Keep components small and configurable. Reuse existing framework state/lifecycle; avoid global listeners that leak across route changes.

## 3. Design and implementation
- Animate transform/opacity where possible; measure before optimizing.
- Reserve image/video aspect ratio and dimensions to avoid layout shift.
- Keep HTML content available by default. Add hidden/pre-animation states only after successful initialization.
- Use short, consistent timing; never delay core content or primary CTA behind a long intro.
- Respect text reflow and avoid fixed line breaks that fail at narrow widths.
- Prefer native details/summary for FAQ and scroll-snap for simple galleries.
- Clean up observers, listeners, timelines and ScrollTriggers on unmount/route change.
- Preserve browser back/forward, focus and natural scroll behavior.

## 4. Accessibility and responsive behavior
- Keyboard focus must be visible, not covered or trapped.
- Hover effects need focus-visible and touch-safe equivalents.
- Pin/horizontal scenes require a clear escape path, mobile alternative and keyboard access.
- Marquee/autoplay requires pause/stop controls where appropriate.
- Decorative SVG/media should be ignored by assistive technology; meaningful media requires text alternative.

## 5. Patterns and recipes
Before implementation, consult the selected M IDs in PATTERN-CATALOG.md and I IDs in INTERACTIVE-COMPONENTS.md. The Motion Starter Kit is vanilla starting code, not a framework or production guarantee. Adapt and test it.

## 6. Motion Brief fields
For every significant effect: ID, purpose, element, trigger, initial/final state, timing/easing, sequence, desktop/mobile, fallback, dependency, acceptance test.
For every interaction: ID, user task, states, data, events, keyboard/touch, semantics, errors/feedback, CTA/destination and test.

## 7. QA
Test at target viewport sizes; load, scroll both directions, resize, keyboard, touch, focus, JS failure and route lifecycle as relevant. Record exact test/evidence. Never say a technique was observed if only its appearance was captured; do not infer the library from the effect.
