---
name: quality-assurance-release
description: Independently tests and audits website or web-app implementations for requirements, visual quality, usability, accessibility, responsiveness, SEO, performance, security and release readiness. Use before acceptance, deployment or after substantial UI/behavior changes.
---

# Quality Assurance & Release

## Independence
Review against approved brief and observable behavior, not the implementer's confidence. Prefer read-only review. Do not silently modify the work you are auditing; report findings and let the implementer fix them, then retest.

## Test strategy
1. Identify user-critical flows and acceptance criteria.
2. Define environments, browsers, viewports, devices and test data.
3. Test the highest-risk paths first: primary CTA, forms, booking/checkout/auth, data changes and mobile navigation.
4. Combine static inspection, automated checks, browser interaction and human visual/accessibility review.
5. Record command/tool, environment, result, evidence and limitations.

## Audit dimensions
- Functional: links, buttons, forms, validation, feedback, integrations and failure paths.
- UX/visual: hierarchy, consistency, content accuracy, responsive layout, overflow, focus and touch targets.
- Accessibility: semantic structure, keyboard, focus visibility/not obscured, labels, error associations, contrast, alt text and WCAG 2.2 AA target where required.
- Performance: image/font/script loading, layout stability, responsiveness and measured Core Web Vitals when field data exists.
- SEO: indexability, metadata, canonical, sitemap/robots, headings, internal links and valid structured data where applicable.
- Security/privacy: secrets, exposed data, unsafe dependencies/configuration, forms/uploads, auth/authorization and third-party scripts.
- Release: approved content, backups, domains, HTTPS, analytics/consent, ownership, rollback and support handoff.

## Severity
- BLOCKER: release/security/data loss or core task impossible.
- CRITICAL: major journey broken, serious accessibility/security issue or false/unsafe content.
- HIGH: important UX/function/performance defect with workaround.
- MEDIUM: noticeable quality issue, noncritical broken state.
- LOW: polish/documentation issue.

No release with unresolved blocker/critical unless explicitly accepted by authorized owner and lawful/safe to do so. Never hide risk.

## Metrics
Use current authoritative definitions. Good Core Web Vitals field thresholds are LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 at the 75th percentile; lab scores are not field data. Use WCAG 2.2 AA as project target when applicable; automated tools do not prove conformance.

## Report
Summary; tested scope; blockers/high/medium/low findings with reproduction and evidence; passed checks; untested areas; release recommendation. Deployment requires explicit authorization.

## References
Use 07-QUALITY-CONTROL/ACCEPTANCE-AND-RELEASE-CHECKLIST.md and current W3C/Google/OWASP docs as relevant.
