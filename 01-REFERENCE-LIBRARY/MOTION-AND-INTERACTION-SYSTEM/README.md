# Sistema universal de Motion & Interaction

**Status:** sistema de conhecimento e implementação reutilizável.  
**Escopo:** landing pages, sites institucionais, portfolios, catálogos e experiências digitais.  
**Princípio:** motion e interação fazem parte da experiência, da direção criativa e do produto — não são adornos adicionados no final.

## Objetivo
Transformar referências e técnicas em padrões pesquisáveis, especificáveis, implementáveis e testáveis. O sistema é transversal a todos os nichos, mas cada seleção é exclusiva do contexto do projeto.

## Regra operacional
- Considerar motion e interações desde **Experience & Creative Blueprint**.
- Registrar na seção de Motion & Interaction do `EXPERIENCE-BLUEPRINT.md` a intenção, o comportamento, as referências e os estados selecionados.
- Criar um Motion Brief independente somente quando a complexidade justificar: sequências coordenadas, interação avançada, múltiplas páginas/breakpoints, protótipo especializado ou handoff dedicado.
- Consultar somente os IDs de catálogo, componentes e receitas relevantes; não carregar o catálogo inteiro por padrão.
- Implementar efeitos e comportamentos reais no projeto; planos, placeholders e comentários não contam como entrega.
- Testar tudo o que foi selecionado no navegador e registrar limitações/evidências no QA.

## Sem quotas artificiais
Não existe quantidade mínima ou máxima universal de animações, efeitos, interações, bibliotecas ou tecnologias. A liberdade criativa e técnica é ampla: CSS, Web Animations API, IntersectionObserver, SVG, GSAP/ScrollTrigger, Framer Motion/Motion, Lenis, WebGL, Three.js ou outras soluções podem ser consideradas quando forem adequadas.

A escolha deve ser guiada por:
- objetivo de UX, narrativa, compreensão, exploração ou conversão;
- coerência com identidade, conteúdo e direção de arte;
- fluidez, timing, hierarquia e legibilidade;
- responsividade, toque e diferentes alturas de viewport;
- acessibilidade, teclado, foco e ``;
- performance, compatibilidade, segurança, licença, custo e manutenção.

Não limitar uma ideia útil por uma contagem arbitrária. Também não adicionar efeitos apenas para demonstrar capacidade. Uma experiência minimalista pode ser tão bem resolvida quanto uma experiência imersiva.

## Documentos
| Documento | Uso |
|---|---|
| `PATTERN-CATALOG.md` | Localizar padrões de motion |
| `INTERACTIVE-COMPONENTS.md` | Localizar componentes e comportamentos interativos |
| `IMPLEMENTATION-PLAYBOOK.md` | Escolher tecnologia e implementar |
| `CASE-STUDY-ANA-MARQUES.md` | Proveniência dos padrões derivados da auditoria |
| `MOTION-BRIEF-TEMPLATE.md` | Brief independente quando a complexidade justificar |
| `PROJECT-BOOTSTRAP-INSTRUCTIONS.md` | Disponibilizar o sistema em repositórios de clientes |

Starter Kit: `06-DEVELOPMENT-STANDARDS/MOTION-STARTER-KIT/`. Consulte apenas o arquivo/receita necessário e adapte ao framework e ciclo de vida do projeto.

## Evidência
Diferencie:
- **USER-OBSERVED:** observação do usuário.
- **OBSERVED:** comportamento visual diretamente observado.
- **CODE-VERIFIED:** tecnologia/implementação confirmada no código.
- **REPORTED:** descrito por fonte ou auditoria.
- **INFERRED:** hipótese técnica.
- **RECOMMENDED:** opção sugerida para projetos futuros.
- **PENDING:** ainda não verificado.

Não inferir GSAP, Framer Motion, Lenis ou outra biblioteca pela aparência isolada.

## Critérios inegociáveis
- O conteúdo e a função permanecem disponíveis sem depender da animação.
-.
- Navegação por teclado, foco visível e semântica correta.
- Estados operáveis por toque; não depender exclusivamente de hover.
- Marquee/autoplay contínuo com pausa/controle quando aplicável.
- Sem scroll hijacking ou pinning que aprisione o usuário.
- Sem autoplay com áudio.
- Evitar CLS, bloqueio do conteúdo, scripts excessivos ou dependências sem justificativa.
- Fallback funcional sem JavaScript quando aplicável.
- Teste real antes de declarar concluído.

## Fluxo
Strategic Diagnosis → Experience & Creative Blueprint (motion planejado) → Technical Planning → Development & Integration → Validation, QA & Release.

Motion é especificado no blueprint, implementado durante o desenvolvimento e validado no QA. A ferramenta e a intensidade são determinadas pelo projeto.
