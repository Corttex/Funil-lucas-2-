## 1. Sobre

- 1.1 Task: App área de membros (4 abas)
- 1.2 Local da implementação: `src/pages/app/`, `src/data/recipes.ts`, `src/data/nutritionists.ts`
- 1.3 Branch: `feature/app-area-membros`
- 1.4 Estágio: `implementado`
- 1.5 Data de início: 19/11/2026
- 1.6 Data de término: 19/11/2026
- 1.7 Branch origem: `develop`
- 1.8 Branch destino: `develop`

## 2. A fazer

- [x] 2.1 Todo código criado deve ser simples, fácil de manter e alterar o mínimo possível as estruturas existentes
- [x] 2.2 Criar layout com Bottom Tab Bar de 4 abas (`Hoje`, `Nutrição`, `Progresso`, `Perfil`)
- [x] 2.3 Aba 1 (`Hoje`): cronômetro circular SVG de jejum (`14:10`, `16:8`, `18:6`, `20:4`), 4 fases metabólicas em tempo real e rastreador de hidratação (`peso * 35ml`) com `+250 ml` e `+500 ml`
- [x] 2.4 Aba 2 (`Nutrição`): janela alimentar do dia e catálogo pesquisável de receitas com filtros e modal de preparo
- [x] 2.5 Aba 3 (`Progresso`): registro rápido de peso, gráfico comparativo, monitor de IMC dinâmico e galeria de conquistas
- [x] 2.6 Aba 4 (`Perfil`): FAQ/dicas das nutricionistas (Elina, Anna, Simona), resumo da anamnese e botão para reiniciar funil

## 3. Regras de aceitação

- [ ] 3.1 Cronômetro de jejum atualiza a cada segundo e ilumina a fase metabólica correspondente
- [ ] 3.2 Registrar água ou peso atualiza os indicadores e persiste em `localStorage`

## 4. Dependências

- 4.1 [feature-funil-etapas-35-47-checkout](../feature-funil-etapas-35-47-checkout/sobre.md)

## 5. Pendências

## 6. Extra

