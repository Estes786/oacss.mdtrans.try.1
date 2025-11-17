# ⚡ OASIS V4 Backend - Supabase Edge Functions

Backend API untuk OASIS V4 Superintelligence Ecosystem, dibangun dengan Supabase Edge Functions (Deno runtime).

## 📁 Project Structure

```
back-oasis/
├── functions/
│   ├── dacoo/              # DACOO API endpoints
│   │   ├── create-goal.ts
│   │   ├── create-asset.ts
│   │   └── optimize-asset.ts
│   ├── aegm/               # AEGM API endpoints
│   │   ├── analytics.ts
│   │   ├── ab-test.ts
│   │   └── journey.ts
│   ├── ovs/                # OVS API endpoints
│   │   ├── verify-outcome.ts
│   │   ├── channel-tracking.ts
│   │   └── roi-report.ts
│   ├── marketplace/        # Marketplace endpoints
│   │   ├── products.ts
│   │   └── transactions.ts
│   ├── agents/             # AI Agents endpoints
│   │   ├── create-agent.ts
│   │   └── execute-agent.ts
│   └── payments/           # Payment processing
│       └── doku-webhook.ts
├── middleware/             # Shared middleware
├── services/               # Business logic services
└── integrations/           # Third-party integrations
```

## 🚀 Quick Start

### Deploy via Supabase Dashboard (Mobile-Friendly)

1. Buka Supabase Dashboard
2. Navigate ke **Edge Functions**
3. Tap **"New Function"**
4. Copy paste function code
5. Add environment variables
6. Deploy!

### Deploy via CLI (Advanced)

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link project
supabase link --project-ref your-project-ref

# Deploy function
supabase functions deploy function-name
```

## 🔧 Edge Functions

### DACOO Functions

#### `dacoo-create-goal`
Create new business goal with AI task decomposition.

**Endpoint**: `POST /functions/v1/dacoo-create-goal`

**Request**:
```json
{
  "title": "Increase Monthly Revenue",
  "description": "Achieve $10k MRR",
  "target_revenue": 10000,
  "deadline": "2025-12-31"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Increase Monthly Revenue",
    "status": "planning",
    "tasks": [...]
  }
}
```

#### `dacoo-create-asset`
Create digital asset with optional AI content generation.

**Endpoint**: `POST /functions/v1/dacoo-create-asset`

**Request**:
```json
{
  "type": "course",
  "title": "AI Marketing Masterclass",
  "price": 99,
  "use_ai": true,
  "ai_prompt": "Create comprehensive course outline"
}
```

### Payment Functions

#### `payments-doku-webhook`
Handle DOKU payment webhooks.

**Endpoint**: `POST /functions/v1/payments-doku-webhook`

Automatically processes payment notifications from DOKU gateway.

## 🔐 Authentication

All functions use Supabase Auth:

```typescript
// Get authenticated user
const {
  data: { user },
  error: userError,
} = await supabaseClient.auth.getUser();
```

## 🌐 CORS

CORS headers are configured for all functions:

```typescript
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};
```

## 🔑 Environment Variables

Required secrets for Edge Functions:

```env
# Supabase
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_KEY=eyJhbGc... (for admin operations)

# HuggingFace AI
HF_API_TOKEN=hf_xxx...
HF_API_URL=https://api-inference.huggingface.co

# DOKU Payment
DOKU_CLIENT_ID=BRN-xxx-xxx
DOKU_SECRET_KEY=SK-xxx-xxx
```

### Set Secrets via Dashboard
1. Select function
2. Go to **Settings**
3. Add secret key-value pairs
4. Save

### Set Secrets via CLI
```bash
supabase secrets set SUPABASE_URL=xxx
supabase secrets set HF_API_TOKEN=xxx
```

## 📊 Monitoring

### View Logs
1. Supabase Dashboard → **Edge Functions**
2. Select function
3. View **Logs** tab

### Invoke Function (Testing)
1. Select function
2. Click **Invoke**
3. Enter test payload
4. View response

## 🔄 Integration Flow

```
Frontend (Next.js)
    ↓
Edge Functions (Deno)
    ↓
Database (PostgreSQL) + External APIs (HF, DOKU)
    ↓
Response to Frontend
```

## 🛡️ Security

- **Row Level Security (RLS)**: Database access control
- **JWT Authentication**: Supabase Auth tokens
- **API Key Validation**: For external services
- **CORS Configuration**: Controlled origins
- **Webhook Signature Verification**: For payment webhooks

## 📈 Performance

- **Cold Start**: ~100-300ms
- **Warm Execution**: ~10-50ms
- **Global Edge Network**: Deployed to 10+ regions
- **Auto-scaling**: Handles high traffic automatically

## 🧪 Testing

### Local Testing
```bash
# Serve function locally
supabase functions serve function-name

# Invoke with curl
curl -i --location --request POST 'http://localhost:54321/functions/v1/function-name' \
  --header 'Authorization: Bearer xxx' \
  --header 'Content-Type: application/json' \
  --data '{"test":"data"}'
```

### Remote Testing
Use Supabase Dashboard **Invoke** feature.

## 🚀 Deployment Checklist

- [ ] All functions deployed
- [ ] Environment variables set
- [ ] CORS configured
- [ ] Authentication working
- [ ] Database access verified
- [ ] External integrations tested
- [ ] Logs monitored
- [ ] Error handling implemented

## 📚 Documentation

- **Supabase Edge Functions**: supabase.com/docs/guides/functions
- **Deno Runtime**: deno.land/manual
- **API Reference**: Coming soon

## 📄 License

Proprietary - All rights reserved © 2025 OASIS V4

---

**Built with Supabase Edge Functions + Deno Runtime**
