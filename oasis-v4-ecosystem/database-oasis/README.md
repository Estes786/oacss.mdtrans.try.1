# 🗄️ OASIS V4 Database - Supabase PostgreSQL

Database schema dan migrations untuk OASIS V4 Superintelligence Ecosystem Trinity MOAT.

## 📁 Structure

```
database-oasis/
├── migrations/
│   └── 001_trinity_moat_schemas.sql    # Main schema migration
├── schemas/                             # Individual schema files
├── seeds/                               # Seed data for testing
└── functions/                           # PostgreSQL functions
```

## 🗃️ Database Schema Overview

### Trinity MOAT Tables

#### DACOO (Digital Asset Creation & Optimization)
- `dacoo_goals` - Business goals
- `dacoo_tasks` - Goal-related tasks
- `dacoo_assets` - Digital assets/products
- `dacoo_optimizations` - Asset optimization history

#### AEGM (AI-Enhanced Growth Machine)
- `aegm_analytics` - Growth metrics
- `aegm_ab_tests` - A/B test campaigns
- `aegm_journeys` - Customer journey tracking
- `aegm_recommendations` - AI growth recommendations

#### OVS (Omnichannel Value System)
- `ovs_outcomes` - Business outcome verification
- `ovs_channels` - Channel performance tracking
- `ovs_roi_reports` - ROI analysis reports
- `ovs_investments` - Business investments tracking

### Additional Tables

#### Marketplace
- `marketplace_products` - Products for sale
- `marketplace_transactions` - Purchase transactions

#### AI Agents
- `ai_agents` - AI agent definitions
- `ai_agent_executions` - Agent execution logs

## 🚀 Deployment

### Via Supabase Dashboard (Mobile-Friendly)

1. **Open Supabase Dashboard**
2. Navigate to **SQL Editor**
3. Click **"New Query"**
4. Copy entire content of `migrations/001_trinity_moat_schemas.sql`
5. Paste into editor
6. Click **"Run"** or press `Ctrl+Enter`
7. Wait for **"Success. No rows returned"** message

### Via Supabase CLI

```bash
# Run migration
supabase db push

# Or apply specific migration
supabase migration up
```

## 📊 Key Features

### Row Level Security (RLS)
All tables have RLS enabled with policies:
- Users can only access their own data
- Public data accessible to all
- Admin access via service role key

### Indexes
Optimized indexes for:
- User queries
- Date range searches
- Status filtering
- Category lookups

### Triggers
- `updated_at` auto-update on row changes
- Timestamp management

### Foreign Keys
- Referential integrity enforced
- Cascade deletes where appropriate
- User data cleanup

## 🔍 Common Queries

### Get User Goals
```sql
SELECT * FROM dacoo_goals 
WHERE user_id = auth.uid() 
ORDER BY created_at DESC;
```

### Get Goal Tasks
```sql
SELECT t.* FROM dacoo_tasks t
JOIN dacoo_goals g ON t.goal_id = g.id
WHERE g.user_id = auth.uid()
  AND t.status != 'completed'
ORDER BY t.priority;
```

### Get Analytics Summary
```sql
SELECT 
  metric_type,
  SUM(metric_value) as total,
  AVG(metric_value) as average
FROM aegm_analytics
WHERE user_id = auth.uid()
  AND period = 'monthly'
  AND period_start >= NOW() - INTERVAL '6 months'
GROUP BY metric_type;
```

### Calculate ROI
```sql
SELECT 
  category,
  SUM(amount) as investment,
  (SELECT SUM(revenue) FROM dacoo_assets WHERE user_id = auth.uid()) as revenue,
  ((SELECT SUM(revenue) FROM dacoo_assets WHERE user_id = auth.uid()) / SUM(amount) * 100) as roi
FROM ovs_investments
WHERE user_id = auth.uid()
GROUP BY category;
```

## 🔧 Maintenance

### Backup Database
```bash
# Via Supabase CLI
supabase db dump -f backup.sql

# Via Dashboard
# Settings → Database → Backups → Download
```

### Restore Database
```bash
supabase db reset
psql -h db.xxx.supabase.co -U postgres -d postgres -f backup.sql
```

### Check Performance
```sql
-- Find slow queries
SELECT * FROM pg_stat_statements 
ORDER BY total_time DESC 
LIMIT 10;

-- Table sizes
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

## 🛡️ Security

### RLS Policies
```sql
-- Example: Users can only see their own goals
CREATE POLICY "Users can view own goals" 
ON dacoo_goals FOR SELECT 
USING (auth.uid() = user_id);

-- Example: Public marketplace products
CREATE POLICY "Anyone can view active products" 
ON marketplace_products FOR SELECT 
USING (is_active = true);
```

### API Access
- **anon key**: Limited read/write via RLS
- **service_role key**: Full admin access (use carefully!)

## 📈 Monitoring

### Active Connections
```sql
SELECT count(*) FROM pg_stat_activity;
```

### Database Size
```sql
SELECT pg_size_pretty(pg_database_size('postgres'));
```

### Recent Activity
```sql
SELECT * FROM pg_stat_activity 
WHERE state = 'active';
```

## 🧪 Testing

### Seed Test Data
```sql
-- Insert test goal
INSERT INTO dacoo_goals (user_id, title, description, target_revenue)
VALUES (auth.uid(), 'Test Goal', 'Test Description', 5000);

-- Insert test asset
INSERT INTO dacoo_assets (user_id, type, title, price)
VALUES (auth.uid(), 'course', 'Test Course', 99);
```

### Verify RLS
```sql
-- Should only return current user's data
SELECT * FROM dacoo_goals;

-- Should return all public products
SELECT * FROM marketplace_products WHERE is_active = true;
```

## 📚 Documentation

- **PostgreSQL Docs**: postgresql.org/docs
- **Supabase Database**: supabase.com/docs/guides/database
- **SQL Reference**: supabase.com/docs/guides/database/tables

## 🔄 Migrations

### Create New Migration
```bash
supabase migration new migration_name
```

### Naming Convention
- `001_trinity_moat_schemas.sql` - Initial schemas
- `002_add_feature_tables.sql` - Feature additions
- `003_update_indexes.sql` - Performance improvements
- `004_add_marketplace.sql` - New modules

## 📄 License

Proprietary - All rights reserved © 2025 OASIS V4

---

**Built with PostgreSQL + Supabase**
