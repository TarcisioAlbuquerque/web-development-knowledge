# Motion & Interaction System

**Scope:** landing pages, institutional sites, portfolios, services, catalogs and web products.  
**Principle:** motion and interaction are part of UX, but neither is a mandatory decoration quota.

## Canonical documents
- PATTERN-CATALOG.md — stable motion pattern IDs M-01…M-45.
- INTERACTIVE-COMPONENTS.md — functional component IDs I-01…I-20.
- IMPLEMENTATION-PLAYBOOK.md — technology choice and implementation guidance.
- MOTION-BRIEF-TEMPLATE.md — per-project specification when motion is non-trivial.
- CASE-STUDY-ANA-MARQUES.md — user-provided reference report and evidence caveats.
- PROJECT-BOOTSTRAP-INSTRUCTIONS.md — concise setup for independent client repos.
- Starter code: 06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/.

## Project selection
Choose a profile based on brand, audience, content, device, budget and conversion:
- **Essential:** subtle transitions, clear focus/active feedback, native interactions and minimal movement.
- **Standard:** coordinated hero/section/media treatments and useful contextual interactions.
- **Signature:** editorial sequences, scroll-linked storytelling, advanced SVG/GSAP scenes or custom interactions where they materially strengthen the experience.

These are intensity profiles, not fixed counts. A project can mix levels by page or section.

## Baseline expectations
- Main content and primary actions remain usable without motion.
- Controls provide clear hover, focus-visible, active, disabled and error/success states as appropriate.
- At least one useful interaction is considered where it helps users understand, choose, explore or convert; omit when native links/content meet the task better.
- Motion must support hierarchy, continuity, feedback, storytelling or brand expression.
- All significant/advanced motion is specified, implemented and tested. Do not claim completion from a plan or TODO.

## Workflow
Brief/strategy → UX and visual direction → choose profile/patterns → Motion Brief if needed → technical implementation → browser QA. The specialist who plans the effect does not replace engineering review or QA.

## Non-negotiable safeguards
- No scroll hijacking or trapped pin/scroll states.
- No autoplay audio; continuous motion/video needs suitable controls and fallback.
- Mobile/touch and keyboard behavior are first-class.
- Avoid layout shifts and expensive work on the main thread.
- Do not infer a library from visual appearance. Record confirmed code, inference and recommendation separately.
- Do not make content unreadable, delayed or hidden behind animation.

## Evidence levels
OBSERVED (direct visual evidence), CODE-INSPECTED, REPORTED BY SOURCE, INFERRED, RECOMMENDED or NOT VERIFIED. Keep provenance on reference cards.

## Acceptance
Every selected pattern has an objective and works in the target browser/device set. Test keyboard, touch, resize and failure/fallback states when relevant. No minimum number of effects is required. A page is not "static by omission": choose deliberately and explain the profile.
