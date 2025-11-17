-- ========================================
-- OASIS V4 - TRINITY MOAT DATABASE SCHEMA
-- ========================================
-- This migration creates all tables for:
-- 1. DACOO (Digital Asset Creation & Optimization)
-- 2. AEGM (AI-Enhanced Growth Machine)
-- 3. OVS (Omnichannel Value System)
-- ========================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable pgvector for AI embeddings (optional, for advanced AI features)
CREATE EXTENSION IF NOT EXISTS vector;

-- ========================================
-- DACOO TABLES
-- ========================================

-- Goals Table
CREATE TABLE IF NOT EXISTS dacoo_goals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  target_revenue DECIMAL(10,2),
  deadline TIMESTAMP,
  status TEXT CHECK (status IN ('planning', 'in_progress', 'completed')) DEFAULT 'planning',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tasks Table
CREATE TABLE IF NOT EXISTS dacoo_tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  goal_id UUID REFERENCES dacoo_goals(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  priority TEXT CHECK (priority IN ('high', 'medium', 'low')) DEFAULT 'medium',
  status TEXT CHECK (status IN ('pending', 'in_progress', 'completed')) DEFAULT 'pending',
  dependencies JSONB DEFAULT '[]',
  estimated_time INTEGER, -- hours
  actual_time INTEGER, -- hours
  ai_generated BOOLEAN DEFAULT FALSE,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

-- Digital Assets Table
CREATE TABLE IF NOT EXISTS dacoo_assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('course', 'template', 'ebook', 'tool', 'service', 'other')) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  price DECIMAL(10,2) DEFAULT 0,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  created_by TEXT CHECK (created_by IN ('ai', 'human', 'hybrid')) DEFAULT 'human',
  downloads INTEGER DEFAULT 0,
  revenue DECIMAL(10,2) DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT FALSE,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  published_at TIMESTAMP
);

-- Asset Optimizations Table
CREATE TABLE IF NOT EXISTS dacoo_optimizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  asset_id UUID REFERENCES dacoo_assets(id) ON DELETE CASCADE,
  original_data JSONB NOT NULL,
  optimized_data JSONB NOT NULL,
  improvements TEXT[] DEFAULT '{}',
  revenue_increase DECIMAL(5,2), -- percentage
  applied BOOLEAN DEFAULT FALSE,
  applied_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ========================================
-- AEGM TABLES
-- ========================================

-- Analytics Table
CREATE TABLE IF NOT EXISTS aegm_analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  metric_type TEXT NOT NULL, -- revenue, users, conversions, engagement, churn, ltv, etc.
  metric_value DECIMAL(10,2) NOT NULL,
  period TEXT CHECK (period IN ('hourly', 'daily', 'weekly', 'monthly')) DEFAULT 'daily',
  period_start TIMESTAMP NOT NULL,
  period_end TIMESTAMP NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

-- A/B Tests Table
CREATE TABLE IF NOT EXISTS aegm_ab_tests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  hypothesis TEXT,
  variants JSONB NOT NULL, -- { variantA: {...}, variantB: {...} }
  status TEXT CHECK (status IN ('draft', 'running', 'completed', 'archived')) DEFAULT 'draft',
  winner TEXT,
  confidence DECIMAL(5,2), -- percentage
  total_traffic INTEGER DEFAULT 0,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Customer Journey Table
CREATE TABLE IF NOT EXISTS aegm_journeys (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  customer_id UUID NOT NULL,
  session_id TEXT,
  stage TEXT NOT NULL, -- awareness, consideration, decision, retention, etc.
  action TEXT NOT NULL, -- page_view, click, signup, purchase, etc.
  converted BOOLEAN DEFAULT FALSE,
  revenue DECIMAL(10,2) DEFAULT 0,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Growth Recommendations Table
CREATE TABLE IF NOT EXISTS aegm_recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  recommendation TEXT NOT NULL,
  category TEXT NOT NULL, -- pricing, marketing, product, operations, etc.
  priority TEXT CHECK (priority IN ('high', 'medium', 'low')) DEFAULT 'medium',
  expected_impact DECIMAL(10,2), -- revenue increase or cost reduction
  confidence DECIMAL(5,2), -- percentage
  implemented BOOLEAN DEFAULT FALSE,
  implemented_at TIMESTAMP,
  actual_impact DECIMAL(10,2),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

-- ========================================
-- OVS TABLES
-- ========================================

-- Outcomes Table
CREATE TABLE IF NOT EXISTS ovs_outcomes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  outcome_type TEXT CHECK (outcome_type IN ('revenue', 'conversion', 'engagement', 'retention', 'cost_reduction', 'other')) NOT NULL,
  channel TEXT NOT NULL, -- email, social, paid-ads, organic, referral, direct, etc.
  expected_value DECIMAL(10,2) NOT NULL,
  actual_value DECIMAL(10,2),
  variance DECIMAL(5,2), -- percentage
  verified BOOLEAN DEFAULT FALSE,
  proof JSONB DEFAULT '{}', -- { sources: [], screenshots: [], data: {} }
  confidence DECIMAL(5,2), -- percentage
  verified_by TEXT, -- ai, human, or specific user
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  verified_at TIMESTAMP
);

-- Channel Performance Table
CREATE TABLE IF NOT EXISTS ovs_channels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  channel TEXT NOT NULL,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  revenue DECIMAL(10,2) DEFAULT 0,
  cost DECIMAL(10,2) DEFAULT 0,
  roi DECIMAL(5,2), -- percentage
  attribution JSONB DEFAULT '{}', -- { firstTouch: 0.3, lastTouch: 0.5, multiTouch: 0.2 }
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

-- ROI Reports Table
CREATE TABLE IF NOT EXISTS ovs_roi_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  total_investment DECIMAL(10,2) NOT NULL,
  total_revenue DECIMAL(10,2) NOT NULL,
  roi DECIMAL(5,2) NOT NULL, -- percentage
  breakdown JSONB DEFAULT '{}', -- { category: { investment, revenue, roi } }
  recommendations TEXT[] DEFAULT '{}',
  executive_summary TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Investments Table
CREATE TABLE IF NOT EXISTS ovs_investments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  category TEXT NOT NULL, -- marketing, product, operations, technology, etc.
  amount DECIMAL(10,2) NOT NULL,
  description TEXT,
  channel TEXT, -- if related to specific channel
  date DATE NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

-- ========================================
-- MARKETPLACE TABLES (Portfolio + Marketplace)
-- ========================================

-- Marketplace Products Table
CREATE TABLE IF NOT EXISTS marketplace_products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  seller_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  asset_id UUID REFERENCES dacoo_assets(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  preview_url TEXT,
  file_url TEXT,
  sales_count INTEGER DEFAULT 0,
  revenue DECIMAL(10,2) DEFAULT 0,
  commission_rate DECIMAL(5,2) DEFAULT 20.00, -- percentage
  is_active BOOLEAN DEFAULT TRUE,
  featured BOOLEAN DEFAULT FALSE,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Marketplace Transactions Table
CREATE TABLE IF NOT EXISTS marketplace_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  buyer_id UUID REFERENCES auth.users(id),
  product_id UUID REFERENCES marketplace_products(id),
  amount DECIMAL(10,2) NOT NULL,
  commission DECIMAL(10,2) NOT NULL,
  seller_payout DECIMAL(10,2) NOT NULL,
  payment_method TEXT, -- doku, credit_card, etc.
  payment_status TEXT CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')) DEFAULT 'pending',
  payment_id TEXT, -- external payment gateway ID
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

-- ========================================
-- AI AGENTS TABLES (Agent as a Service)
-- ========================================

-- AI Agents Table
CREATE TABLE IF NOT EXISTS ai_agents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL, -- sales, support, marketing, operations, custom
  model TEXT, -- gpt-4, claude, etc.
  prompt_template TEXT,
  configuration JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT FALSE,
  is_public BOOLEAN DEFAULT FALSE,
  usage_count INTEGER DEFAULT 0,
  total_cost DECIMAL(10,2) DEFAULT 0,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Agent Executions Table
CREATE TABLE IF NOT EXISTS ai_agent_executions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  agent_id UUID REFERENCES ai_agents(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  input TEXT NOT NULL,
  output TEXT,
  status TEXT CHECK (status IN ('pending', 'running', 'completed', 'failed')) DEFAULT 'pending',
  execution_time INTEGER, -- milliseconds
  cost DECIMAL(10,2), -- cost of this execution
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

-- ========================================
-- INDEXES FOR PERFORMANCE
-- ========================================

-- DACOO Indexes
CREATE INDEX IF NOT EXISTS idx_dacoo_goals_user_id ON dacoo_goals(user_id);
CREATE INDEX IF NOT EXISTS idx_dacoo_goals_status ON dacoo_goals(status);
CREATE INDEX IF NOT EXISTS idx_dacoo_tasks_goal_id ON dacoo_tasks(goal_id);
CREATE INDEX IF NOT EXISTS idx_dacoo_tasks_status ON dacoo_tasks(status);
CREATE INDEX IF NOT EXISTS idx_dacoo_assets_user_id ON dacoo_assets(user_id);
CREATE INDEX IF NOT EXISTS idx_dacoo_assets_type ON dacoo_assets(type);
CREATE INDEX IF NOT EXISTS idx_dacoo_assets_published ON dacoo_assets(is_published);
CREATE INDEX IF NOT EXISTS idx_dacoo_assets_category ON dacoo_assets(category);

-- AEGM Indexes
CREATE INDEX IF NOT EXISTS idx_aegm_analytics_user_id ON aegm_analytics(user_id);
CREATE INDEX IF NOT EXISTS idx_aegm_analytics_metric_type ON aegm_analytics(metric_type);
CREATE INDEX IF NOT EXISTS idx_aegm_analytics_period ON aegm_analytics(period_start, period_end);
CREATE INDEX IF NOT EXISTS idx_aegm_ab_tests_user_id ON aegm_ab_tests(user_id);
CREATE INDEX IF NOT EXISTS idx_aegm_ab_tests_status ON aegm_ab_tests(status);
CREATE INDEX IF NOT EXISTS idx_aegm_journeys_user_id ON aegm_journeys(user_id);
CREATE INDEX IF NOT EXISTS idx_aegm_journeys_customer_id ON aegm_journeys(customer_id);

-- OVS Indexes
CREATE INDEX IF NOT EXISTS idx_ovs_outcomes_user_id ON ovs_outcomes(user_id);
CREATE INDEX IF NOT EXISTS idx_ovs_outcomes_channel ON ovs_outcomes(channel);
CREATE INDEX IF NOT EXISTS idx_ovs_outcomes_verified ON ovs_outcomes(verified);
CREATE INDEX IF NOT EXISTS idx_ovs_channels_user_id ON ovs_channels(user_id);
CREATE INDEX IF NOT EXISTS idx_ovs_channels_period ON ovs_channels(period_start, period_end);
CREATE INDEX IF NOT EXISTS idx_ovs_roi_reports_user_id ON ovs_roi_reports(user_id);
CREATE INDEX IF NOT EXISTS idx_ovs_investments_user_id ON ovs_investments(user_id);

-- Marketplace Indexes
CREATE INDEX IF NOT EXISTS idx_marketplace_products_seller_id ON marketplace_products(seller_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_products_category ON marketplace_products(category);
CREATE INDEX IF NOT EXISTS idx_marketplace_products_active ON marketplace_products(is_active);
CREATE INDEX IF NOT EXISTS idx_marketplace_transactions_buyer_id ON marketplace_transactions(buyer_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_transactions_product_id ON marketplace_transactions(product_id);

-- AI Agents Indexes
CREATE INDEX IF NOT EXISTS idx_ai_agents_user_id ON ai_agents(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_agents_type ON ai_agents(type);
CREATE INDEX IF NOT EXISTS idx_ai_agents_public ON ai_agents(is_public);
CREATE INDEX IF NOT EXISTS idx_ai_agent_executions_agent_id ON ai_agent_executions(agent_id);

-- ========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ========================================

-- Enable RLS on all tables
ALTER TABLE dacoo_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE dacoo_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE dacoo_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE dacoo_optimizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE aegm_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE aegm_ab_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE aegm_journeys ENABLE ROW LEVEL SECURITY;
ALTER TABLE aegm_recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ovs_outcomes ENABLE ROW LEVEL SECURITY;
ALTER TABLE ovs_channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE ovs_roi_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE ovs_investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_agent_executions ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access their own data
CREATE POLICY dacoo_goals_policy ON dacoo_goals FOR ALL USING (auth.uid() = user_id);
CREATE POLICY dacoo_tasks_policy ON dacoo_tasks FOR ALL USING (auth.uid() IN (SELECT user_id FROM dacoo_goals WHERE id = goal_id));
CREATE POLICY dacoo_assets_policy ON dacoo_assets FOR ALL USING (auth.uid() = user_id);
CREATE POLICY dacoo_optimizations_policy ON dacoo_optimizations FOR ALL USING (auth.uid() IN (SELECT user_id FROM dacoo_assets WHERE id = asset_id));
CREATE POLICY aegm_analytics_policy ON aegm_analytics FOR ALL USING (auth.uid() = user_id);
CREATE POLICY aegm_ab_tests_policy ON aegm_ab_tests FOR ALL USING (auth.uid() = user_id);
CREATE POLICY aegm_journeys_policy ON aegm_journeys FOR ALL USING (auth.uid() = user_id);
CREATE POLICY aegm_recommendations_policy ON aegm_recommendations FOR ALL USING (auth.uid() = user_id);
CREATE POLICY ovs_outcomes_policy ON ovs_outcomes FOR ALL USING (auth.uid() = user_id);
CREATE POLICY ovs_channels_policy ON ovs_channels FOR ALL USING (auth.uid() = user_id);
CREATE POLICY ovs_roi_reports_policy ON ovs_roi_reports FOR ALL USING (auth.uid() = user_id);
CREATE POLICY ovs_investments_policy ON ovs_investments FOR ALL USING (auth.uid() = user_id);
CREATE POLICY marketplace_products_policy ON marketplace_products FOR ALL USING (auth.uid() = seller_id OR is_active = true);
CREATE POLICY marketplace_transactions_policy ON marketplace_transactions FOR ALL USING (auth.uid() = buyer_id OR auth.uid() IN (SELECT seller_id FROM marketplace_products WHERE id = product_id));
CREATE POLICY ai_agents_policy ON ai_agents FOR ALL USING (auth.uid() = user_id OR is_public = true);
CREATE POLICY ai_agent_executions_policy ON ai_agent_executions FOR ALL USING (auth.uid() = user_id);

-- ========================================
-- FUNCTIONS AND TRIGGERS
-- ========================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to relevant tables
CREATE TRIGGER update_dacoo_goals_updated_at BEFORE UPDATE ON dacoo_goals FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_dacoo_tasks_updated_at BEFORE UPDATE ON dacoo_tasks FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_dacoo_assets_updated_at BEFORE UPDATE ON dacoo_assets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_aegm_ab_tests_updated_at BEFORE UPDATE ON aegm_ab_tests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_ovs_outcomes_updated_at BEFORE UPDATE ON ovs_outcomes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_ovs_roi_reports_updated_at BEFORE UPDATE ON ovs_roi_reports FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_marketplace_products_updated_at BEFORE UPDATE ON marketplace_products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_ai_agents_updated_at BEFORE UPDATE ON ai_agents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- SEED DATA (Optional - for testing)
-- ========================================

-- Insert sample goal (only if no goals exist)
-- INSERT INTO dacoo_goals (user_id, title, description, target_revenue, status)
-- SELECT 
--   auth.uid(),
--   'Increase Monthly Revenue to $10,000',
--   'Achieve $10,000 in monthly recurring revenue through digital product sales and consulting services',
--   10000.00,
--   'planning'
-- WHERE NOT EXISTS (SELECT 1 FROM dacoo_goals);

-- ========================================
-- MIGRATION COMPLETE
-- ========================================
