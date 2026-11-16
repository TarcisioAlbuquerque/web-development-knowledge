# Conversion Playbook

## Conversão

Escolher ação primária: orçamento, agendamento, compra, reserva, telefonema, conversa, download ou visita. Uma secundária pode existir sem competir. Definir o que conta como conversão concluída e quem confirma o resultado.

## CTA

Usar verbo e resultado esperado; manter rótulo coerente; repetir após blocos relevantes quando reduzir esforço; explicar o que acontece após clique; evitar falsa urgência ou promessa de resposta instantânea; confirmar destino no release.

## WhatsApp/contato

Número, país e mensagem devem ser aprovados. Codificar mensagem na URL. Definir fluxo de novo contato/suporte somente se existir. Não simular atendimento real. Em mobile, testar app/browser e fallback.

## Leads e confiança

Solicitar apenas dados necessários, explicar finalidade/próximo passo. Usar depoimentos, avaliações, credenciais, cases, endereço e horários somente quando reais, autorizados e verificados. Identificar projetos conceituais.

## Mobile

CTA visível sem cobrir controles; alvos de toque confortáveis; teclado não esconde campo/erro; formulário curto; auto-fill e input types adequados; links tel/mailto/WhatsApp válidos; evitar popup intrusivo.

## Analytics — plano de medição

Definir medição proporcional ao objetivo, orçamento, tráfego e requisitos de privacidade. Não instalar ferramenta sem necessidade ou autorização.

1. **Objetivo:** registrar resultado de negócio e conversão concluída (ex.: lead qualificado, agendamento confirmado, compra).
2. **Eventos:** mapear apenas interações necessárias. Nomear de forma consistente e documentar quando, onde e por que disparam.
3. **Atribuição:** preservar origem/canal/campanha quando disponível e permitido; registrar como o contato evolui para lead qualificado e cliente no sistema operacional do negócio, se existir. Não presumir que Analytics conhece vendas offline.
4. **Ferramenta e governança:** indicar ferramenta, responsável, acesso, consentimento, retenção e limitações. Nunca enviar nome, telefone, e-mail, mensagem livre ou outro dado pessoal identificável em eventos, URLs ou parâmetros.
5. **Validação:** testar disparo, duplicidade, parâmetros, destino e consentimento em ambiente disponível; guardar data, evidência e limitações.
6. **Relatório:** comparar período e fonte consistentes; separar eventos intermediários, conversões confirmadas e resultados comerciais. Registrar denominador, amostra e contexto.

| Evento | O que representa | Acionador | Parâmetros não sensíveis | Destino | Como validar |
|---|---|---|---|---|---|
| `cta_click` | Clique em CTA identificado | Clique no CTA | placement, page, cta_id | Ferramenta aprovada | Clique e verificar uma ocorrência |
| `form_start` | Primeiro uso do formulário | Interação inicial | form_id, page | Ferramenta aprovada | Iniciar sem enviar |
| `form_submit` | Envio aceito pelo sistema | Confirmação real de envio | form_id, page | Ferramenta aprovada | Enviar teste e confirmar sucesso |
| `contact_click` | Abertura de canal de contato | Clique em canal | channel, placement | Ferramenta aprovada | Testar destino |
| `booking_confirmed` / `purchase` | Resultado concluído | Confirmação confiável do sistema | transaction/event id não pessoal, quando permitido | Integração aprovada | Confirmar fonte de verdade |

A tabela é referência, não lista obrigatória. Não contar clique de WhatsApp como conversa iniciada, formulário enviado como lead qualificado ou CTA como venda.

## CRO — ciclo de melhoria

1. Identificar fricção por dados, feedback, observação ou teste de usabilidade.
2. Registrar evidência, página/etapa afetada, público e impacto provável.
3. Formular uma hipótese testável: se fizermos X para resolver Y, esperamos observar Z.
4. Priorizar considerando impacto esperado, confiança da evidência, esforço, risco e dependências. Uma pontuação simples pode apoiar a conversa, mas não substitui julgamento.
5. Definir mudança, métrica, período e critério de decisão antes de implementar.
6. Avaliar dados e contexto após a mudança; registrar resultado, limitações e próxima decisão.

| Problema/evidência | Hipótese | Mudança | Prioridade/motivo | Métrica e período | Resultado/decisão |
|---|---|---|---|---|---|

Não realizar A/B testing por padrão. Com baixo tráfego ou amostra insuficiente, preferir testes de usabilidade, feedback qualitativo e correções de fricção evidentes. Não declarar causalidade ou significância sem desenho e dados adequados. Alterar oferta, preço ou claims somente com aprovação.

## Privacidade e qualidade dos dados

Aplicar minimização, consentimento quando exigido, controle de acesso e retenção adequada. Não inserir PII em analytics. Documentar bloqueadores de consentimento, limitações de atribuição, tráfego interno/bots quando relevante e mudanças na configuração.
