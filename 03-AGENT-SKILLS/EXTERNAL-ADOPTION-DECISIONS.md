# External Systems — Adoption Decisions

Reviewed 15/11/2026. Recheck current versions and licenses before installation or copying.

## Adopt as design principles
| Source | Adopt | Do not blindly copy |
|---|---|---|
| Anthropic Agent Skills | Required SKILL.md format, concise name/description, progressive disclosure, resource files on demand, skill eval/iteration | Every Skill or tool published in the repository |
| Claude Code guidance | Keep CLAUDE.md concise; use Skills for procedures, agents for delegated work, hooks only for deterministic automation, permissions explicitly | Large always-on instruction files or broad allow permissions |
| Superpowers | Brainstorm/specification before complex behavior changes; small implementation plans; TDD when logic warrants; systematic debugging; independent review; verification before completion | A mandatory ceremony for trivial edits or a second full process overlapping our workflow |
| Vercel Agent Skills | React/Next.js-specific performance rules, prioritized by impact and supported by wrong/right examples | Applying React/Next advice to vanilla, Astro, Vue or other stacks without checking fit |
| W3C WCAG 2.2 | Use as a conformance target when required; combine automated and human checks | Claiming automated scans alone prove WCAG conformance |
| Google Core Web Vitals | LCP, INP and CLS field thresholds as performance targets | Treating Lighthouse lab scores as real-user field data |
| OWASP Top 10:2025 | Security awareness baseline and supply-chain risk review | Treating Top 10 as a complete security audit or certification |

## Primary references
- Anthropic Skills overview: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- Skill authoring best practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- Anthropic Skills repository: https://github.com/anthropics/skills
- Claude Code settings: https://code.claude.com/docs/en/settings
- Claude Code agents: https://code.claude.com/docs/en/sub-agents
- Anthropic Claude Code best practices: https://www.anthropic.com/research/claude-code-best-practices
- Superpowers: https://github.com/obra/superpowers
- Vercel Agent Skills: https://github.com/vercel-labs/agent-skills
- Vercel React best practices: https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- OWASP Top 10:2025: https://owasp.org/Top10/2025/

## Licensing and security
Before importing or installing any external Skill, inspect its license, version, dependencies, scripts, network access, requested tools/permissions, maintainers and release history. Attribute source where required. Prefer official upstream repositories. Do not run third-party scripts as part of onboarding without explicit user approval.

## Version policy
Reference upstream links and record the verification date. Avoid pinning claims such as "best/latest" without checking. When incorporating copied rules, record upstream version/commit and local adaptations in the relevant Skill.
