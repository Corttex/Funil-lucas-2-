## 1. Sobre

- 1.1 Task: Motor de cálculo e estado global
- 1.2 Local da implementação: `src/engine/`, `src/store/`, `tests/engine.test.ts`
- 1.3 Branch: `feature/motor-calculo-estado`
- 1.4 Estágio: `implementado`
- 1.5 Data de início: 19/11/2026
- 1.6 Data de término: 19/11/2026
- 1.7 Branch origem: `develop`
- 1.8 Branch destino: `develop`

## 2. A fazer

- [x] 2.1 Todo código criado deve ser simples, fácil de manter e alterar o mínimo possível as estruturas existentes
- [x] 2.2 Implementar `src/engine/calculations.ts`: flexão de gênero (`mulher`/`homem`), IMC e classificação, peso ideal (IMC `21.5`, faixa `19.0`–`24.5`), semanas e data estimada PT-BR, recomendação de protocolo (`14:10`, `16:8`, `18:6`) e meta de água (`peso * 35ml`)
- [x] 2.3 Implementar `src/store/useBestMeStore.ts` com Zustand + `persist` em `localStorage` cobrindo estado do funil (46 etapas) e estado do app (jejum ativo, histórico de água, pesagens, refeições, conquistas)
- [x] 2.4 Criar testes unitários em `tests/engine.test.ts`

## 3. Regras de aceitação

- [x] 3.1 Todos os testes unitários em `tests/engine.test.ts` passam via `npx vitest run`
- [ ] 3.2 Estado do funil e do app persiste após recarregamento da página

## 4. Dependências

- 4.1 [feature-setup-base-design-system](../feature-setup-base-design-system/sobre.md)

## 5. Pendências

## 6. Extra

