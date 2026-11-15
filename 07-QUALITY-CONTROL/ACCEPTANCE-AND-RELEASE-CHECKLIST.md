# Acceptance & Release Checklist

Tailor scope to site type and risk. Mark N/A with a reason; do not treat every checkbox as mandatory for every site.

## Strategy and content
- [ ] Objective, audience, offer and primary action understood.
- [ ] Facts, claims, credentials, prices, results and testimonials verified/authorized.
- [ ] Copy matches market, language and approved content.
- [ ] Scope, exclusions and approver documented.

## UX and visual
- [ ] Architecture supports primary user tasks.
- [ ] Navigation, hierarchy and CTA are clear.
- [ ] Responsive behavior checked at agreed widths.
- [ ] No overflow, clipped content or broken states.
- [ ] Forms/controls have labels, feedback and real destinations.
- [ ] Images/fonts have appropriate quality, rights, dimensions and alternatives.

## Motion and interaction (when applicable)
- [ ] Selected patterns serve a defined purpose and match Motion Brief.
- [ ] No decorative quota; rejected patterns have rationale where useful.
- [ ] Content/actions work without nonessential motion.
- [ ] Keyboard, focus, touch, reduced-motion and fallback checked.
- [ ] Autoplay/marquee has suitable user control.
- [ ] No scroll hijacking, blocked exit or broken browser navigation.
- [ ] Every selected component is functional and tested.

## Engineering
- [ ] Build/lint/typecheck/tests run where scripts exist; exact results recorded.
- [ ] Critical forms, links, integrations and user journeys tested.
- [ ] No secrets or unnecessary personal data committed.
- [ ] Dependencies and versions justified; no unexpected external script.
- [ ] Error/loading/empty/success states handled as required.
- [ ] Security review proportional to data and functionality.

## Accessibility
- [ ] Semantic headings/landmarks and labels.
- [ ] Keyboard navigation and visible/not-obscured focus.
- [ ] Contrast, target size, zoom/reflow and alt/text alternatives.
- [ ] Reduced-motion and media controls.
- [ ] Automated accessibility scans plus manual review where possible.
- [ ] Do not claim WCAG conformance without full scoped evaluation.

## SEO and performance
- [ ] Metadata, indexability and internal links reviewed.
- [ ] Structured data valid and factual when used.
- [ ] Image/font/script loading reviewed.
- [ ] Performance measured with tool, date, device/network and URL.
- [ ] Field Core Web Vitals distinguished from lab scores.

## Release
- [ ] Blockers/critical findings fixed or explicitly dispositioned by authorized owner.
- [ ] Domain, content, analytics/consent and production access approved.
- [ ] HTTPS and production-critical flows tested.
- [ ] Backup/rollback and maintenance owner known where applicable.
- [ ] Delivery URL, instructions, known limitations and support boundaries supplied.

## Severity
BLOCKER = release/security/data-loss/core task impossible.
CRITICAL = major journey broken, serious security/accessibility issue or false/unsafe content.
HIGH = important defect with material user impact.
MEDIUM = noticeable noncritical quality issue.
LOW = polish/documentation.

## Result
APPROVED / APPROVED WITH LIMITATIONS / REJECTED. Include scope, evidence, untested areas and owner of accepted risks.
