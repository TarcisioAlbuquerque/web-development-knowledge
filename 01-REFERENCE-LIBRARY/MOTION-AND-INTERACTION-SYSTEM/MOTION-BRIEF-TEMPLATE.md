# Motion & Interaction Brief — Template

> Usar como seção do `EXPERIENCE-BLUEPRINT.md`. Criar arquivo separado somente quando a complexidade ou o handoff justificar.

## 1. Identificação
- Projeto/cliente:
- Segmento:
- Responsável:
- Data:
- Estado: DRAFT / IN_REVIEW / APPROVED / BLOCKED

## 2. Intenção
- Que sensação e percepção a marca deve transmitir?
- O que o visitante precisa entender, explorar ou decidir?
- Que ação a interação facilita?
- Que conteúdo ou ação nunca pode ser atrasado/ocultado?
- Restrições de mídia, orçamento, dispositivo e prazo:

## 3. Referências
| Referência/URL | Estado da evidência | Padrão útil | Adaptar/descartar | Motivo |
|---|---|---|---|---|

## 4. Motion selecionado
| Padrão/ID | Seção/elemento | Objetivo | Trigger | Comportamento | Desktop/mobile | Reduced motion/fallback | Critério de aceite |
|---|---|---|---|---|---|---|---|

Não há mínimo ou máximo de efeitos. Registrar somente os movimentos que contribuam para a experiência. A ausência de motion avançado também pode ser uma decisão de design válida.

## 5. Interações selecionadas
| Componente | Tarefa do visitante | Estados/eventos | Dados necessários | Teclado/toque | Feedback e critério de aceite |
|---|---|---|---|---|---|

## 6. Direção de movimento
- Ritmo e personalidade:
- Duração/easing quando relevante:
- Distância/escala:
- Sequência/stagger:
- Repetição e triggers:
- Elementos que não devem se mover:
- Comportamento de mídia/autoplay:

## 7. Implementação
- Stack existente:
- CSS / Web Animations API / IntersectionObserver:
- GSAP / ScrollTrigger (se útil, justificar):
- Outras dependências/licenças:
- Componentes/receitas do Starter Kit:
- Código customizado:
- Cleanup em SPA/framework:

## 8. Acessibilidade, responsividade e fallback
- Breakpoints:
- Touch e orientação:
- Teclado e foco:
- `prefers-reduced-motion`:
- Pausa de movimento contínuo:
- Comportamento sem JavaScript:
- Conteúdo e funções continuam disponíveis?:

## 9. QA e evidências
- [ ] Cada efeito selecionado foi visto no navegador.
- [ ] Cada interação funciona e tem feedback real.
- [ ] Desktop e mobile testados.
- [ ] Teclado, foco e toque testados quando aplicáveis.
- [ ] Reduced-motion testado.
- [ ] Sem conteúdo escondido ou bloqueio de navegação.
- [ ] Sem erros conhecidos no console/build, quando verificável.
- [ ] Evidências ligadas aos padrões selecionados.

## 10. Handoff
- Implementado:
- Arquivos/componentes:
- Testes executados:
- Limitações/pendências:
- Decisões aprovadas:
- Estado: APPROVED / APPROVED WITH LIMITATIONS / REJECTED
