# Engine Acceptance — checklist de landing page

Checklist de handoff do Engine. O QA de release continua em 07-QUALITY-CONTROL/ACCEPTANCE-AND-RELEASE-CHECKLIST.md; em conflito, seguir o QA central.

## Estratégia/conteúdo

- [ ] Objetivo primário e público definidos.
- [ ] Oferta, proposta e CTA confirmados.
- [ ] Jornada/objeções mapeadas.
- [ ] Claims/provas têm fonte e autorização.
- [ ] Copy adequada ao idioma/mercado.
- [ ] Hipóteses e pendências identificadas.

## Estrutura/visual

- [ ] Cada seção tem finalidade e conteúdo.
- [ ] Seções desnecessárias removidas.
- [ ] Direção visual vinculada ao briefing.
- [ ] Tokens de cor/tipo/grid/spacing registrados.
- [ ] Mídias têm fonte, licença, alt/crop e dimensões.
- [ ] Layout não é aplicação automática de template.

## Conversão

- [ ] CTA/destino real verificados.
- [ ] Forms têm labels, validação, estados e erro/sucesso.
- [ ] Integrações testadas em ambiente autorizado.
- [ ] WhatsApp/tel/email usam dados aprovados.
- [ ] Sem botões sem função/placeholders em produção.
- [ ] Analytics/consentimento respeitam privacidade.

## Responsive/accessibility

- [ ] Viewports definidos foram testados.
- [ ] Sem overflow acidental.
- [ ] Navegação e controles funcionam em toque/teclado.
- [ ] Foco, contraste, labels e semântica verificados.
- [ ] e fallback testados.

## Motion

- [ ] Motion Brief preenchido/aprovado.
- [ ] IDs implementados correspondem ao brief.
- [ ] Baseline/exceções seguem fonte normativa.
- [ ] Efeitos/interações verificados no navegador com evidência.
- [ ] Nenhuma animação bloqueia conteúdo/CTA.

## SEO/performance/security

- [ ] Title, description, headings, indexação e URLs revisados.
- [ ] Canonical, sitemap, robots e structured data aplicáveis validados.
- [ ] Imagens, fontes, scripts e terceiros revistos.
- [ ] Lighthouse/field data registrados quando executados.
- [ ] Sem secrets no client/repositório.
- [ ] Forms/dados têm proteção adequada.

## Automação opcional

| Ferramenta | Uso | Limite |
|---|---|---|
| Playwright | Fluxos E2E, responsividade e estados | Não substitui julgamento visual |
| axe-core | Detecta parte dos problemas de acessibilidade | Revisão manual ainda necessária |
| Lighthouse | Diagnóstico de performance/a11y/SEO/boas práticas | Laboratório não equivale a campo |
| HTML validator | Sintaxe/estrutura | Não avalia UX/comportamento |
| Link checker | Links quebrados | Links condicionais/privados exigem revisão |

Não instalar ferramentas no repositório central por padrão. Selecionar conforme stack, risco, CI e manutenção; fixar versões e documentar comandos no projeto cliente.

## Evidências e status

Registrar data, commit/build, URL, viewport/browser, ferramenta, resultado e evidência:
- PASS: teste executado e critério atendido.
- FAIL: teste executado e critério não atendido.
- NOT RUN: não executado.
- BLOCKED: impossível validar por dependência/acesso.
- ACCEPTED WITH LIMITATIONS: limitação conhecida e aceita.

Não marcar PASS por inspeção de código quando o critério exige navegador, nem por laboratório quando exige dados reais.
