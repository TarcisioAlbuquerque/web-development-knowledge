# Case Study — Ana Marques Nutricionista

**URL:** https://anamarquesnutricionista.vercel.app/  
**Segmento:** nutrição / atendimento profissional online.  
**Origem deste registro:** transcrição e relatório de auditoria fornecidos pelo usuário, produzidos após análise de uma gravação de navegação de aproximadamente 134 segundos.  
**Status nesta base:** RELATADO POR FONTE — o vídeo original não foi anexado aos arquivos do repositório durante este registro; a equipe que atualizou a base não refez a inspeção quadro a quadro nem inspecionou o código-fonte.  
**Uso:** referência de padrões transferíveis; não copiar marca, texto, imagens ou código.

## 1. Padrões de Motion relatados no relatório

| ID local | Efeito relatado | Seção | Gatilho relatado | Observação |
|---|---|---|---|---|
| ANA-M01 | Header Fade-in + Slide Down | Header | Load | Entrada breve do cabeçalho |
| ANA-M02 | Hero Text Mask Reveal + Stagger | Hero | Load | Linhas do H1 reveladas em sequência |
| ANA-M03 | Hero Image Scale-in + Fade | Hero | Load | Entrada suave da fotografia |
| ANA-M04 | Animated Organic SVG Line | Divisores entre seções | Scroll/trecho da página | O relatório descreve traços orgânicos fluidos; gatilho e sincronização precisam de validação adicional |
| ANA-M05 | Quiz Card Slide | Mito ou Verdade | Click em Mito/Verdade | Card desloca e feedback aparece |
| ANA-M06 | Tabs Content Crossfade | Objetivos | Click em tab | Conteúdo muda por seleção |
| ANA-M07 | Video Autoplay Loop | Bastidores | Entrada na viewport | Vídeo em loop; autoplay deve ser silencioso e oferecer controle |
| ANA-M08 | FAQ Height Expansion + Icon Rotation | FAQ | Click | Expansão vertical e rotação do indicador |
| ANA-M09 | Infinite Horizontal Marquee | Instagram | Relatado durante navegação | O relatório também menciona deslocamento associado ao scroll; confirmar se é marquee automático, scroll-linked ou ambos |
| ANA-M10 | CTA Hover Feedback | Botões/CTAs | Hover | Mudança de cor, escala e movimento de seta |

**Nota:** timestamps específicos e curvas/durações fornecidos no relatório são estimativas visuais, não medições de código. Não transformar estimativas em valores exatos.

## 2. Interações relatadas

- Navegação sticky com links-âncora e smooth scroll.
- Quiz "Mito ou Verdade": seleção Mito/Verdade, feedback, contador, avanço e resultado.
- Tabs de objetivos: seleção de seis objetivos, conteúdo contextual e CTA de WhatsApp personalizado.
- Simulação visual de atendimento/chat e app na seção "Como funciona".
- Widget "Pergunta pra Ana": perguntas predefinidas, respostas e continuidade pelo WhatsApp.
- FAQ com acordeões.
- Vídeo de bastidores.
- Feed/marquee de Instagram.
- CTA final com bifurcação para primeira consulta e paciente atual.
- Links externos/social.

## 3. Padrões transferíveis

### Universais
- Text mask reveal para headline editorial.
- Sequência curta de hero com stagger.
- Imagem com scale/fade ou máscara.
- CTA com feedback hover/focus/active.
- Tabs com conteúdo contextual.
- FAQ acessível.
- Navegação por âncora com offset para header fixo.

### Dependentes do contexto
- Quiz educativo pré-conversão: útil quando o público precisa desfazer mitos ou entender conceitos.
- Widget de perguntas com saída para WhatsApp: adequado se o cliente realmente usa WhatsApp como canal de atendimento.
- Vídeo de bastidores em loop: útil para marcas pessoais/serviços, desde que haja vídeo autorizado e leve.
- Marquee de Instagram: só se houver conteúdo suficiente, atualizado e com direitos/autorizações adequados.

### Inspiracionais / requerem validação
- Linha SVG orgânica entre seções.
- Relação do marquee com o scroll.
- Exata técnica de transição do FAQ.
- Sticky state do header em diferentes breakpoints.
- Easing, duração e implementação das animações.

## 4. Cuidados ao adaptar

- O quiz não deve ser inserido em qualquer landing page; precisa responder a uma dúvida real do público.
- A simulação de WhatsApp deve ser identificada como ilustração, nunca apresentada como conversa real/testemunho.
- Mensagens predefinidas dependem de número e fluxo aprovados pelo cliente.
- Não inventar estatísticas, credenciais ou prova social.
- Marquee contínuo precisa de pausa e suporte a reduced-motion.
- Vídeo deve ter poster, dimensões reservadas, autoplay sem áudio e fallback.
- Não reproduzir a identidade visual ou os textos da Ana; transferir apenas o princípio de interação.

## 5. Decisão de biblioteca

Usar este caso como referência de:
- motion editorial leve;
- componentes interativos orientados à conversão;
- conteúdo conversacional;
- CTAs contextuais;
- combinação de educação, confiança e contato.

A seleção de padrões para cada novo projeto deve ser registrada no seu próprio Motion Brief. Esta ficha não implica que todos os padrões serão implementados em todos os sites.
