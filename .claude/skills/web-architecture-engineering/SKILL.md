---
name: web-architecture-engineering
description: Selects and documents web stack, application architecture, rendering, CMS, APIs, data, authentication, integrations, deployment and security trade-offs. Use before building a new site/app or when architecture, backend, infrastructure or dependencies must change.
---

# Web Architecture & Engineering

## Outcome
Choose an architecture that meets current and foreseeable requirements with the lowest responsible complexity and a maintainable operating model.

## Process
1. Establish site/product type, rendering needs, content editing, SEO, interactions, data, auth, integrations, traffic assumptions, team skill, hosting, budget and maintenance owner.
2. Inspect current repository and runtime before proposing a replacement.
3. Compare viable options (e.g. static HTML, Astro, CMS, React/Next, hosted e-commerce, backend service) using requirements, not popularity.
4. Distinguish static presentation, dynamic content, transaction processing and authenticated application needs. Do not custom-build payments/authentication unnecessarily.
5. Define project structure, rendering/data flow, component boundaries, API contracts, CMS model, form destination, environment strategy and deployment/rollback plan.
6. Map trust boundaries and sensitive data. Define validation on server, authorization checks, secret handling, dependency policy, rate limits and logging as relevant.
7. Justify each dependency by capability, bundle/runtime cost, maintenance, compatibility, license, security and fallback.
8. Check current official docs and versions for tools that change quickly; record date/version used.
9. Document key choices and rejected alternatives in a short ADR when the decision is expensive to reverse.
10. Hand off concrete setup/build/test/deploy instructions to implementation.

## Security baseline
Use OWASP Top 10:2025 as awareness baseline, not a compliance certificate. Do not expose secrets client-side. Validate input server-side, authorize every protected operation, minimize data, protect uploads/webhooks and review supply-chain risk. Confirm applicable local privacy/legal requirements for the project.

## Architecture review
Check accessibility, SEO/rendering, performance budgets, failure modes, backups, observability, portability, costs and operational ownership. Avoid microservices, custom CMS, complex state management or server infrastructure without requirements.

## References
Use 06-DEVELOPMENT-STANDARDS/README.md, project constraints and current official documentation. Do not choose a fixed stack for all AURA sites.
