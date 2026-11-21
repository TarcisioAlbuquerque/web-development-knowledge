# Acceptance & Release Checklist

## Estratégia/conteúdo
- [ ] Briefing e objetivo aprovados.
- [ ] Público, oferta e CTA claros.
- [ ] Claims, serviços, dados, credenciais e provas confirmados.
- [ ] Copy revisada e adequada ao idioma/mercado.

## UX e visual
- [ ] Arquitetura responde às tarefas do visitante.
- [ ] Hierarquia e navegação coerentes.
- [ ] Direção visual respeita decisões aprovadas.
- [ ] Layout funciona nos tamanhos-alvo.
- [ ] Estados de interação e feedback previstos.

## Motion & Interaction — gate obrigatório
- [ ] Motion Brief existe e foi aprovado; IDs selecionados estão registrados.
- [ ] Baseline de landing page implementado: sequência de hero, scroll reveals em várias seções, motion de mídia, estados de CTA/controles e interação contextual.
- [ ] Mínimo atingido: 6 tratamentos de motion distintos e 3 padrões interativos úteis; exceção abaixo do mínimo documentada e aprovada pelo usuário/cliente.
- [ ] Hero sequence e text/image reveal testados no navegador.
- [ ] Scroll reveal testado ao descer e subir, sem conteúdo escondido ou travado.
- [ ] Todos os componentes interativos testados por mouse, teclado e toque conforme aplicável.
- [ ] Tabs/quiz/FAQ/galeria/carrossel/formulário (os que existirem) têm estados e feedback funcionais.
- [ ] CTA, WhatsApp e links têm destinos reais confirmados; sem placeholders.
- [ ] Marquee/autoplay oferecem pausa ou controle equivalente quando aplicável.
- [ ] `` remove/reduz movimentos não essenciais sem remover conteúdo ou função.
- [ ] Fallback sem JavaScript mantém conteúdo legível e navegação essencial utilizável.
- [ ] Desktop e mobile verificados; sticky, parallax e horizontal scroll testados em touch e diferentes alturas.
- [ ] Console/build sem erros relacionados a animações, eventos ou observers.
- [ ] Evidências (capturas/gravações) vinculadas aos IDs do Motion Brief.
- [ ] Efeitos têm propósito, não bloqueiam conteúdo/ações e respeitam performance/acessibilidade.

## Engenharia
- [ ] Links, botões e CTA testados.
- [ ] Formulários e integrações testados com destino confirmado.
- [ ] Nenhum secret exposto.
- [ ] Dependências e setup documentados.
- [ ] Build/console sem erros conhecidos, quando verificável.

## QA e publicação
- [ ] Responsividade testada.
- [ ] Acessibilidade básica revisada.
- [ ] SEO técnico básico revisado.
- [ ] Performance avaliada com ferramenta disponível.
- [ ] Pendências e limitações informadas.
- [ ] Domínio/deploy/publicação autorizados pelo cliente.
- [ ] URL pública, HTTPS e fluxos em produção testados.
- [ ] Instruções e limites de suporte entregues.

## Estado
- APPROVED: critérios obrigatórios atendidos.
- APPROVED WITH LIMITATIONS: limitações documentadas e aceitas.
- REJECTED: bloqueadores ou requisitos críticos não atendidos.
