# Sistema universal de Motion & Interaction

**Status:** padrão operacional obrigatório para novos projetos web.  
**Escopo:** landing pages, sites institucionais, portfólios, sites de profissionais, marcas, serviços, catálogos e experiências digitais.  
**Referência de origem:** auditoria fornecida pelo usuário do site Ana Marques Nutricionista, incluindo relatório baseado em gravação de navegação.  
**Princípio:** motion e interação fazem parte do produto digital; não são acabamento opcional de última hora.

## Objetivo

Este sistema transforma referências e efeitos em padrões pesquisáveis, especificáveis, implementáveis e testáveis. Ele deve ser consultado em todo projeto web, independentemente do nicho. A seleção deve ser adaptada à marca, ao conteúdo, à jornada, ao dispositivo e à conversão.

O catálogo contém:
- padrões de motion observados/relatados na referência Ana Marques;
- técnicas adicionais disponíveis para projetos futuros;
- componentes interativos reutilizáveis;
- orientações de implementação e QA;
- um starter kit sem dependência obrigatória de framework.

**Importante:** registrar um padrão no catálogo não significa que ele foi observado no site de origem nem que deve ser aplicado indiscriminadamente. Consulte a classificação de evidência na ficha de cada referência.

## Regra operacional para projetos

Para toda landing page nova, é obrigatório:

1. Consultar `PATTERN-CATALOG.md` e `INTERACTIVE-COMPONENTS.md`.
2. Criar um Motion & Interaction Brief usando `MOTION-BRIEF-TEMPLATE.md`.
3. Selecionar e implementar uma composição intencional de motion e interações — não apenas listar ideias.
4. Incluir, como baseline de landing page, salvo exceção justificada no brief:
   - uma sequência de entrada do hero (headline + mídia/elemento visual);
   - revelações ao longo do scroll em mais de uma seção;
   - tratamento de movimento/revelação de imagem ou vídeo;
   - sistema consistente de hover, focus-visible e active para CTAs/controles;
   - pelo menos um comportamento de navegação/interação contextual (tabs, seletor, quiz, galeria, carrossel, FAQ, formulário progressivo ou equivalente adequado);
   - pelo menos uma interação que ajude o usuário a entender, escolher, explorar ou converter.
5. Considerar pelo menos um recurso de Advanced Motion (parallax, sticky storytelling, SVG draw, marquee, horizontal scroll ou scroll-linked animation) quando acrescentar valor real. Se não for adequado, registrar a razão e usar uma alternativa mais apropriada.
6. Para todo site, manter um sistema de movimento consistente nas páginas-chave e feedback funcional nos controles. Em landing pages, aplicar também o mínimo quantitativo abaixo.
6. Implementar os efeitos efetivamente no código; um plano, placeholder ou comentário não conta como entrega.
7. Testar no navegador desktop e mobile, incluindo teclado e `prefers-reduced-motion`.
8. Registrar IDs dos padrões implementados e evidências de teste no relatório do projeto.

### Quantidade e qualidade

**Mínimo de aceite para landing pages:** pelo menos **6 tratamentos de motion distintos** e **3 padrões de interação úteis**, distribuídos ao longo da experiência. A faixa recomendada é 6–10 tratamentos e 3–5 padrões interativos. Repetições do mesmo reveal em cards diferentes contam como consistência, não como novos efeitos. Os padrões precisam ser perceptíveis e funcionais, não apenas classes CSS sem efeito visível.

O catálogo inteiro fica disponível para seleção entre projetos; **não é obrigatório colocar todos os efeitos em uma única página**. Nunca adicionar movimento sem objetivo, quebrar a navegação, atrasar o acesso ao conteúdo ou prejudicar a identidade.

Qualquer exceção ao mínimo precisa ser explícita no Motion Brief e aprovada pelo usuário/cliente: motivo, alternativa escolhida e impacto. Sem essa aprovação, ficar abaixo do mínimo bloqueia o aceite. "Não deu tempo" ou "não foi lembrado" não são justificativas aceitáveis.

## Mapa dos documentos

| Documento | Conteúdo |
|---|---|
| `PATTERN-CATALOG.md` | Catálogo de animações e técnicas de motion |
| `INTERACTIVE-COMPONENTS.md` | Catálogo de componentes e comportamentos interativos |
| `IMPLEMENTATION-PLAYBOOK.md` | Escolha de tecnologia, arquitetura, receitas e integração |
| `CASE-STUDY-ANA-MARQUES.md` | Padrões relacionados à auditoria Ana Marques e proveniência |
| `MOTION-BRIEF-TEMPLATE.md` | Brief obrigatório para cada projeto |
| `PROJECT-BOOTSTRAP-INSTRUCTIONS.md` | Instruções para conectar o sistema a cada repositório de cliente |

Starter kit inicial:
- `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/README.md`
- `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/motion.css`
- `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/motion.js`
- `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/quiz.js`

## Taxonomia de evidência

Todo padrão usado como referência deve ser classificado:
- **OBSERVADO:** evidência visual direta disponível (gravação/captura acessível).
- **INSPECIONADO NO CÓDIGO:** implementação identificada no código-fonte.
- **RELATADO POR FONTE:** descrito em auditoria ou material de terceiro; ainda não validado independentemente.
- **INFERIDO:** hipótese técnica baseada no comportamento.
- **RECOMENDADO:** padrão proposto para projetos futuros, não atribuído à referência.
- **NÃO VERIFICADO:** ainda sem evidência suficiente.

Não inferir GSAP, Framer Motion, React, IntersectionObserver ou qualquer biblioteca apenas pela aparência do efeito.

## Critérios que nunca podem ser sacrificados

- conteúdo utilizável sem depender da animação;
- respeito a `prefers-reduced-motion`;
- navegação por teclado e foco visível;
- controles claros para mídia/marquee contínuo;
- sem scroll hijacking ou pinning que aprisione o usuário;
- sem autoplay com áudio;
- mobile e toque tratados como primeira classe;
- movimento fora do caminho crítico de renderização sempre que possível;
- dependências justificadas e limitadas;
- teste real antes de declarar concluído.

## Fluxo de uso

Descoberta → estratégia → UX → direção visual → **Motion Brief** → arquitetura técnica → implementação → **Motion QA** → release.

O Motion Designer especifica. O Front-end Engineer implementa. O QA Specialist verifica. O coordenador não encerra uma landing page com motion apenas planejado.
