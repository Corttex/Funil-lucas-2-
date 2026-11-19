-- ============================================================================
-- BEST ME FASTING (PT-BR) - SCHEMA POSTGRESQL (VPS)
-- ============================================================================

-- Extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Tabela de Leads / Usuários do Funil
CREATE TABLE IF NOT EXISTS funnel_user (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(150),
  gender VARCHAR(20),                -- 'mulher' | 'homem'
  age_range VARCHAR(50),
  exact_age INTEGER,
  body_type VARCHAR(50),
  fasting_experience VARCHAR(50),    -- 'experimentei' | 'ouvi_falar' | 'nao_conheco'
  hunger_time VARCHAR(50),
  meal_breakfast VARCHAR(50),
  meal_lunch VARCHAR(50),
  meal_dinner VARCHAR(50),
  cooking_habit VARCHAR(50),
  activity_level VARCHAR(50),
  work_schedule VARCHAR(50),
  daily_routine VARCHAR(50),
  goal_intensity VARCHAR(50),
  height_cm INTEGER,
  current_weight_kg NUMERIC(5,2),
  target_weight_kg NUMERIC(5,2),
  weekly_pace NUMERIC(3,2) DEFAULT 1.00,
  bmi_calculated NUMERIC(4,1),
  bmi_category VARCHAR(30),
  recommended_protocol VARCHAR(20) DEFAULT '16:8',
  walking_time VARCHAR(50),
  sleep_quality VARCHAR(50),
  water_intake VARCHAR(50),
  sugary_drinks VARCHAR(50),
  takes_medication BOOLEAN DEFAULT FALSE,
  signature_saved BOOLEAN DEFAULT FALSE,
  utm_source VARCHAR(100),
  utm_campaign VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_funnel_user_email ON funnel_user(email);
CREATE INDEX IF NOT EXISTS idx_funnel_user_created ON funnel_user(created_at);

-- 2. Tabela de Objetivos Selecionados (Relacionamento 1:N)
CREATE TABLE IF NOT EXISTS user_objective (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES funnel_user(id) ON DELETE CASCADE,
  objective VARCHAR(150) NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_user_objective_user ON user_objective(user_id);

-- 3. Tabela de Métodos Tentados Anteriormente
CREATE TABLE IF NOT EXISTS user_past_method (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES funnel_user(id) ON DELETE CASCADE,
  method_name VARCHAR(150) NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_user_past_method_user ON user_past_method(user_id);

-- 4. Tabela de Condições Clínicas / Histórico de Saúde
CREATE TABLE IF NOT EXISTS user_health_condition (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES funnel_user(id) ON DELETE CASCADE,
  condition_name VARCHAR(150) NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_user_health_condition_user ON user_health_condition(user_id);

-- 5. Tabela de Pedidos / Pagamentos (Valores em Centavos: *_cents conforme padrão de engenharia)
CREATE TABLE IF NOT EXISTS payment_order (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES funnel_user(id) ON DELETE CASCADE,
  plan_type VARCHAR(50) NOT NULL,        -- '1_month' | '4_months' | 'lifetime'
  coupon_applied VARCHAR(50),
  extra_discount BOOLEAN DEFAULT FALSE,
  amount_cents INTEGER NOT NULL,         -- R$ 97,00 = 9700 cents
  payment_method VARCHAR(50) NOT NULL,   -- 'pix' | 'credit_card' | 'apple_pay' | 'google_pay'
  payment_status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending' | 'approved' | 'failed' | 'refunded'
  gateway_transaction_id VARCHAR(255),
  paid_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_payment_order_user ON payment_order(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_order_status ON payment_order(payment_status);

-- 6. Tabela de Sessões de Jejum Intermitente (App PWA)
CREATE TABLE IF NOT EXISTS fasting_session (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES funnel_user(id) ON DELETE CASCADE,
  protocol VARCHAR(20) NOT NULL DEFAULT '16:8',
  started_at TIMESTAMP WITH TIME ZONE NOT NULL,
  ended_at TIMESTAMP WITH TIME ZONE,
  target_duration_hours INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_fasting_session_user ON fasting_session(user_id);

-- 7. Tabela de Registros Diários de Hidratação
CREATE TABLE IF NOT EXISTS water_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES funnel_user(id) ON DELETE CASCADE,
  log_date DATE NOT NULL DEFAULT CURRENT_DATE,
  amount_ml INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uq_user_water_day UNIQUE (user_id, log_date)
);

CREATE INDEX IF NOT EXISTS idx_water_log_user_date ON water_log(user_id, log_date);

-- 8. Tabela de Histórico de Peso (Evolução)
CREATE TABLE IF NOT EXISTS weight_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES funnel_user(id) ON DELETE CASCADE,
  log_date DATE NOT NULL DEFAULT CURRENT_DATE,
  weight_kg NUMERIC(5,2) NOT NULL,
  bmi NUMERIC(4,1),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uq_user_weight_day UNIQUE (user_id, log_date)
);

CREATE INDEX IF NOT EXISTS idx_weight_log_user_date ON weight_log(user_id, log_date);
