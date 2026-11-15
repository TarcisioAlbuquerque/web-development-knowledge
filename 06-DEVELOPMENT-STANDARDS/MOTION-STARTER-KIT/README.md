# Motion Starter Kit — Vanilla HTML/CSS/JS

Reusable starting code for common motion and interaction patterns. It is not a packaged library, accessibility guarantee or substitute for project-specific QA.

## Files
- motion.css — motion tokens, progressive reveals, text masks, CTA feedback, scroll-snap carousel and marquee.
- motion.js — reveal, accessible tabs, marquee controls, viewport video and contextual WhatsApp URLs.
- quiz.js — multi-question quiz with feedback, progress and restart.
- carousel.js — scroll-snap carousel buttons and status.
- gsap-recipes.js — optional ESM recipes requiring GSAP and ScrollTrigger.

## Installation
Copy only the files/patterns used by the project. Include CSS globally and load classic scripts with defer, or import/init within the framework lifecycle. In a SPA, call the exposed init functions for a container and invoke the returned cleanup on unmount. Do not initialize the same root twice without cleanup.

This is starter code: adapt tokens, content, semantics, media, state, framework lifecycle and breakpoints. Do not copy placeholder phone numbers, sample copy or sample answers into production.

## Core behavior
- Content remains visible without JavaScript; motion-ready states activate only after JS.
- Reduced motion disables nonessential movement, auto-started video and marquee animation.
- Tabs support arrow navigation, Home and End.
- Carousel controls complement native touch/scroll; swipe is not the only mechanism.
- Marquee has explicit pause/resume.
- Video is muted and inline; autoplay failure falls back to controls.
- WhatsApp data comes from an approved client number/message.
- Quiz feedback and controls work using keyboard and touch.

## Motion attributes
Use data-motion values reveal-up, reveal-left, reveal-right or fade. Optional delays 1–4. Text masks use motion-mask and motion-mask__inner. SVG draw uses data-motion-svg-draw. CTA affordances use data-motion-hover="lift" and data-motion-arrow.

## Tabs
Use a tablist with button elements, role=tab, aria-selected, aria-controls, and matching role=tabpanel/aria-labelledby. Set hidden on inactive panels. Ensure IDs are unique within the document.

## Marquee
Use two equal visual groups; mark the duplicate aria-hidden and never place focusable controls in the duplicate. Include a real pause/resume button and visible labels.

## Carousel
Use a region with aria-roledescription="carousel", a labelled track, previous/next buttons, slide labels and a polite status. Add visible focus styles. Prefer native scroll-snap.

## Video
Use muted, playsinline, loop only when appropriate, preload metadata or none, poster and controls. Reduced-motion users must not be forced into autoplay.

## Quiz
Each question has answer buttons, data-correct and optional data-feedback. Provide progress/feedback/result status and a restart button. Do not use quizzes for medical/legal/financial decision-making without appropriate review.

## Optional GSAP
gsap-recipes.js is an ESM module. Install GSAP only when selected patterns justify it, read the current official docs, test mobile/reduced-motion and call cleanup on route/component unmount. Pin/horizontal scenes have desktop-only defaults and need a usable mobile alternative.
