# Development Standards

Stack-agnostic engineering standards. Detailed procedures should live in the relevant Skill or official technology documentation, not be duplicated here.

## 1. Architecture and stack
Choose the smallest architecture that meets requirements and can be maintained by the actual owner. Evaluate content/editing, rendering/SEO, integrations, data, authentication, hosting, budget, security and operational capability. Compare one viable alternative and record expensive-to-reverse decisions.

Common fit (not mandates):
- Static/simple landing: semantic HTML/CSS/JS or static generator.
- Content-heavy/multipage: static/SSR framework plus suitable CMS when editing needs justify it.
- Rich client interactions: framework only when state/reuse justify it.
- Transactions: established commerce/payment platform where suitable.
- Authenticated product: explicit backend/data/auth architecture and more rigorous testing.

## 2. Frontend
Semantic HTML; accessible native controls; responsive layout; clear states; validated forms; scoped styles; small reusable components; optimized images/fonts; no exposed secrets; deterministic build/test instructions. Inspect existing architecture before refactoring.

## 3. Quality engineering
Use automated tests proportionate to risk: unit tests for pure logic, integration tests for service/component boundaries, e2e for critical journeys. TDD is useful for complex logic and defect-prone behavior, not mandatory ceremony for every visual change. Use systematic root-cause debugging. Review diffs for unrelated edits and regressions.

## 4. Accessibility
Target WCAG 2.2 AA when required by scope/contract. Check semantic structure, keyboard, focus-visible/not obscured, labels, error associations, contrast, target sizes, alternatives, zoom/reflow and reduced motion. Automated scanners complement human review; they do not prove conformance.

## 5. Performance
Measure before claiming optimization. Reserve media dimensions, use suitable formats/sizes, optimize fonts, minimize render-blocking assets and third-party scripts, avoid excessive JavaScript and main-thread work. Use field Core Web Vitals when available; lab results are diagnostic, not substitutes for field data.

Good field thresholds at the 75th percentile: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Adapt goals to audience/device/network, and record actual measurement conditions.

## 6. SEO and content
Unique useful page content, correct titles/descriptions, semantic headings, crawlability/indexability, canonical/sitemap/robots where relevant, internal links, Open Graph and structured data only when accurate. Do not promise rankings or invent schema facts.

## 7. Security and privacy
Use OWASP Top 10:2025 as an awareness baseline. Protect secrets, validate server-side, authorize every protected operation, minimize personal data, review dependencies and third-party scripts, use HTTPS and safe error handling. Do not treat a checklist as a security certification; consult a specialist for high-risk systems.

## 8. Motion
Canonical system: 01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/. Select motion by purpose, not a numeric quota. Use CSS/native APIs first and advanced libraries only when justified.

## 9. Deployment and operations
Separate dev/preview/production; use version control, backups, controlled secrets, migration/rollback plan, HTTPS, monitoring, error visibility, ownership and maintenance instructions. Deploy only with approval.
