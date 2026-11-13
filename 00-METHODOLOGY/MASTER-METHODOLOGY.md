# Metodologia universal de desenvolvimento web

1. **Descoberta:** entender negócio, público, oferta, objetivos, restrições, orçamento e prazo.
2. **Pesquisa:** analisar concorrentes, linguagem do público e referências relevantes. Separar fatos, hipóteses e oportunidades.
3. **Estratégia:** definir proposta de valor, mensagem principal, conversão e indicadores.
4. **Arquitetura:** organizar sitemap, navegação, hierarquia e jornada do usuário.
5. **UX e conteúdo:** planejar tarefas, formulários, estados, acessibilidade e copy específica e verificável.
6. **Direção visual:** definir conceito, tipografia, cores, grid, imagens, componentes e comportamento responsivo.
7. **Motion:** animar com propósito, respeitando desempenho, dispositivos móveis e `prefers-reduced-motion`.
8. **Arquitetura técnica:** escolher stack proporcional à complexidade, custo, manutenção e integrações.
9. **Implementação:** construir incrementalmente, com semântica, componentes coerentes e dependências justificadas.
10. **QA:** testar fluxos, links, formulários, responsividade, acessibilidade, SEO, segurança e performance.
11. **Entrega:** publicar, documentar acessos por canal seguro, pendências, limitações e manutenção.
12. **Evolução:** usar feedback e dados para priorizar melhorias.

## Princípios
- Estratégia e estética devem trabalhar juntas.
- Mobile, acessibilidade, segurança e performance fazem parte da qualidade.
- Referências inspiram padrões; não autorizam cópia.
- Não inventar informações, depoimentos, credenciais ou garantias.
- Não alterar decisões aprovadas sem autorização.
- A IA deve inspecionar antes de editar e relatar apenas testes realmente executados.


## Pesquisa transversal de referências
A pesquisa de referências deve acontecer em dois eixos complementares:
- **Por segmento:** soluções recorrentes e necessidades específicas do setor do cliente.
- **Por padrão/experiência:** elementos úteis independentemente do segmento, como abertura cinematográfica, hero, storytelling, navegação, microinterações, motion, catálogo, apresentação de serviços e conversão.

Não trate a biblioteca como coleção de modelos prontos. Cada site é uma fonte de padrões que devem ser avaliados no contexto do projeto. A seleção final deve considerar objetivo, público, posicionamento, identidade, conteúdo, acessibilidade, desempenho e viabilidade técnica.


## Motion & Interaction: gate obrigatório de produção

A etapa 7 (Motion) não é opcional nem pode terminar apenas em recomendações. Em toda landing page, antes da implementação:
1. Consultar o sistema `01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/`.
2. Preencher o `MOTION-BRIEF-TEMPLATE.md`, selecionando IDs de motion e componentes interativos.
3. Definir uma composição de movimento adequada à estratégia, conteúdo e direção de arte.
4. Implementar os efeitos no código e conectar cada controle à sua função real.
5. Testar no navegador desktop/mobile, com teclado, toque e `prefers-reduced-motion`.
6. Registrar evidências e IDs no QA.

Baseline de landing page: sequência animada de hero, reveals em várias seções, movimento/revelação de mídia, feedback de hover/focus/active nos CTAs e controles, e pelo menos uma interação contextual útil. Como mínimo de aceite, implementar pelo menos 6 tratamentos distintos de motion e 3 padrões interativos úteis por landing page; a faixa recomendada é 6–10 e 3–5. Exceção abaixo do mínimo exige justificativa e aprovação explícita do usuário/cliente no Motion Brief.

Não inserir todos os efeitos em todos os sites. O catálogo completo é universal e obrigatório para consulta; a seleção é contextual. O que não é aceitável é entregar uma landing page estática por esquecimento, falta de planejamento ou ausência de handoff.
