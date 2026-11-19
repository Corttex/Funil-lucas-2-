# Guia de Deploy na VPS — Best Me Fasting

Este guia ensina como subir o banco de dados PostgreSQL e a aplicação web completa na sua VPS via Docker e Docker Compose.

---

## 1. Pré-requisitos na VPS (Ubuntu / Debian)

Instale o Git, Docker e Docker Compose na VPS caso ainda não estejam instalados:

```bash
sudo apt-get update
sudo apt-get install -y git curl docker.io docker-compose
sudo systemctl enable --now docker
```

---

## 2. Clonar o Repositório

```bash
git clone https://github.com/Corttex/lucasfinil-11.11-.git best-me-fasting
cd best-me-fasting
```

---

## 3. Subir com Docker Compose (PostgreSQL + App Web)

O arquivo `docker-compose.yml` já configura automaticamente:
- **PostgreSQL 16** com o schema completo inicializado (`src/database/schema.sql`).
- **Nginx** servindo a aplicação SPA/PWA na porta **3008** (ou porta 80).

Para iniciar em background:
```bash
docker-compose up -d --build
```

Para verificar se os containers estão rodando:
```bash
docker-compose ps
```

---

## 4. Como Acessar o PostgreSQL na VPS

Conectar diretamente pelo terminal da VPS:
```bash
docker exec -it bestme_fasting_db psql -U bestme_user -d bestme_fasting
```

Verificar as tabelas criadas:
```sql
\dt
```

---

## 5. Estrutura do Banco Criada

- `funnel_user`: Cadastro dos dados do lead, respostas das 46 etapas, IMC calculado e protocolo.
- `user_objective`: Objetivos selecionados (perda de peso, saúde, etc.).
- `user_past_method`: Métodos de emagrecimento tentados anteriormente.
- `user_health_condition`: Histórico clínico (diabetes, hipertensão, etc.).
- `payment_order`: Pedidos, planos (1 mês, 4 meses, vitalício), cupons e status de pagamento (valores em `amount_cents`).
- `fasting_session`: Sessões de jejum ativas e concluídas no app.
- `water_log`: Registros diários de hidratação.
- `weight_log`: Histórico de pesagens.
