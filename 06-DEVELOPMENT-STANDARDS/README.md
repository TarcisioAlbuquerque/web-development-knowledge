# Development Standards

Use standards relevant to the current implementation; do not load every technical document by default.

## Stack selection
Choose the least complex stack that meets content, integration, SEO, accessibility, performance, executor capability, hosting, budget and maintenance needs. HTML/CSS/JS may suit a simple page; consider Astro/CMS for content-heavy sites, React or equivalent for complex state, and a purpose-built commerce platform for catalog/payments/inventory. Compare an alternative before committing.

## Front-end
- Inspect before refactoring; build semantic, responsive interfaces.
- Componentize in proportion to complexity.
- Handle hover, focus-visible, active, disabled, loading, error and success states.
- Label/validate forms; never expose secrets.
- Optimize media, fonts and loading; document dependencies and build/test commands.
- Test target browsers and viewport sizes.

## Motion engineering
Motion should support hierarchy, continuity, feedback or narrative. Use CSS/native APIs for simple effects; IntersectionObserver for viewport entry; GSAP/ScrollTrigger only when advanced orchestration justifies its cost. Keep content usable without animation/JS, respect keyboard, focus, touch and mobile. Measure performance rather than claiming optimization without evidence.

For selected patterns, specify purpose, trigger, properties, timing, dependency, fallback and validation in the project brief. See `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/` and `MOTION-STARTER-KIT/` only when relevant. No universal motion or interaction quota applies.

## Accessibility
Use semantic HTML, keyboard access, visible focus, labels, associated errors, contrast, alt text. Custom components must expose accessible name, role, state and operation.

## Performance and SEO
Measure before/after. Optimize images/fonts, avoid unnecessary scripts and main-thread work, and consider Core Web Vitals. Use unique metadata, semantic headings, useful content, readable URLs, sitemap/robots/canonical and structured data only when appropriate. Do not promise rankings.

## Security and privacy
Use HTTPS, trusted dependencies, secure forms, data minimization and careful script/embed review. Never store secrets or private client information in this public repository.
