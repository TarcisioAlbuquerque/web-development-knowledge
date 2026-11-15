# Metodologia Universal de Produção Web

As fases são gates de decisão, não burocracia fixa. Simplifique conforme risco e escopo; registre a razão quando omitir uma etapa.

## Fases
0. **Intake/classificação:** objetivo, tipo de entrega, mercado/idioma, usuário, prazo, orçamento, ativos, integrações e riscos. Classifique: landing, multipágina, portfólio, catálogo, CMS/editorial, e-commerce, portal ou aplicação.
1. **Descoberta/briefing:** modelo de negócio, oferta, público, problema, jornada, diferenciais verificáveis, concorrência, canais e restrições. Marque confirmado/hipótese/pendente.
2. **Pesquisa/evidências:** mercado, concorrentes, perguntas do público e referências. Registre fonte, URL, data, observação e confiança. Não confunda padrão observado com inferência técnica.
3. **Estratégia:** objetivo, público prioritário, posicionamento, valor, mensagens, prova, objeções, jornada, conversão e KPI mensurável quando existir dado.
4. **Arquitetura/UX:** sitemap, tarefas, fluxos, hierarquia, navegação, formulários, estados, acessibilidade e mobile. Não use seções-padrão sem justificar.
5. **Conteúdo/copy:** headline, oferta, serviços, prova real, processo, FAQ, CTA e microcopy. Validar claims; localizar idioma, tom, moeda, terminologia e regras.
6. **Direção criativa/sistema visual:** conceito ligado ao posicionamento; tipografia, escala, cores/contraste, grid, espaçamento, imagens, ícones, componentes, estados e tokens responsivos.
7. **Motion/interaction:** escolher intensidade Essential, Standard ou Signature. Motion Brief quando relevante/complexo. Movimento não é quota de efeitos: cada tratamento tem propósito; preservar leitura e operação sem animação.
8. **Arquitetura técnica:** comparar opções conforme requisito, mantenedor, hospedagem, CMS, integrações, dados, SEO, segurança, custo e manutenção. Menor complexidade que atende; registrar trade-offs e dependências.
9. **Planejamento/implementação:** dividir em fatias verificáveis. Definir aceite e testes antes de funcionalidades com lógica; usar TDD quando risco/lógica justificarem. Implementar semântica, responsividade, conteúdo aprovado, estados, motion e integrações.
10. **QA independente:** verificar brief, fluxos, browsers/dispositivos, teclado, formulários, erros, acessibilidade, SEO, segurança e performance conforme escopo. Automação complementa inspeção humana.
11. **Aprovação/release:** registrar limitações aceitas, URL, configuração, domínio, analytics, CMS, instruções, backup, manutenção e responsáveis. Publicar somente autorizado.
12. **Evolução:** usar analytics/feedback consentidos, erros, conteúdo e dados reais; priorizar por impacto, confiança, esforço e risco.

## Gates
G1 Brief — objetivo, público, oferta e restrições compreendidos.
G2 Strategy/UX — jornada, arquitetura e conteúdo necessários aprovados.
G3 Creative — direção visual aprovada antes de produção em escala quando requerido.
G4 Technical — stack, dados, segurança e integrações compreendidos.
G5 Build — tarefas, aceite e plano de teste definidos.
G6 QA — nenhum blocker/critical aberto; limitações explicitadas.
G7 Release — autorização, backup, domínio e handoff confirmados.

## Modos
- Quick change: tarefa pequena, leitura mínima e teste local.
- Standard production: briefing, pesquisa, direção, implementação e QA.
- Complex product: discovery ampliado, arquitetura, riscos, segurança, testes, observabilidade e manutenção.

## Qualidade transversal
Verdade, utilidade, coerência, acessibilidade, performance, segurança, compatibilidade, manutenção, clareza e mensuração. Não substitua qualidade por checklist de volume.
