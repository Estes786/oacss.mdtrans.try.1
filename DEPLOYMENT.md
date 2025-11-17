# OASIS Analytics - Complete Deployment Guide

## 🚀 Quick Status

**Current Progress: 85% Complete**

### ✅ Completed
- Frontend Next.js 15 application (100%)
- Rebranding to OASIS Analytics (100%)
- Privacy Policy - Enterprise-grade (1,173 lines)
- Database Schema - PostgreSQL with RLS (100%)
- README.md documentation (100%)
- Git repository initialized with proper commits

### 🔄 In Progress
- Terms of Service (needs expansion)
- Refund Policy (needs expansion)
- Contact Page (needs expansion)
- FAQ Page (needs creation)

### ⏳ Pending
- Supabase Edge Functions (backend API)
- GitHub deployment
- Vercel deployment
- AI/ML models on HuggingFace

## 📋 Pre-Deployment Checklist

### 1. GitHub Repository Setup

**Repository URL**: https://github.com/Estes786/oasis-bi-pro-1.1.git

**Steps:**
```bash
# Navigate to project
cd /home/user/webapp

# Add remote (if not already added)
git remote add origin https://github.com/Estes786/oasis-bi-pro-1.1.git

# Verify remote
git remote -v

# Push to GitHub (requires authentication setup)
git push -u origin main
```

**IMPORTANT**: Before pushing, ensure GitHub environment is configured using sandbox's GitHub tab.

### 2. Vercel Deployment

**Steps:**
1. Go to https://vercel.com/new
2. Import from GitHub: Select `oasis-bi-pro-1.1` repository
3. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

4. **Environment Variables** (Required):
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Midtrans Configuration (Sandbox for testing)
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=SB-Mid-client-your-key
NEXT_PUBLIC_MIDTRANS_ENV=sandbox

# Application Configuration
NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=elfaress2425@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+6285712658316
NEXT_PUBLIC_WHATSAPP=+6285712658316
```

5. Click **Deploy**
6. Wait for deployment to complete (~3-5 minutes)
7. Visit your production URL: `https://oasis-bi-pro-1-1.vercel.app`

### 3. Supabase Setup

**Create New Project:**
1. Go to https://supabase.com/dashboard
2. Click "New Project"
3. Fill in:
   - **Name**: `oasis-analytics-production`
   - **Database Password**: (generate strong password)
   - **Region**: Singapore (closest to Indonesia)
4. Click "Create Project" (wait 2-3 minutes)

**Run Database Migration:**
```bash
# Install Supabase CLI
npm install -g supabase

# Link to project
supabase link --project-ref your-project-ref

# Push schema
supabase db push --schema database/schema.sql

# Or manually in Supabase SQL Editor:
# 1. Go to SQL Editor in Supabase dashboard
# 2. Copy contents of database/schema.sql
# 3. Click "Run" to execute
```

**Enable Row Level Security:**
- RLS is already enabled in schema.sql
- Verify policies in Supabase Dashboard > Authentication > Policies

**Get API Keys:**
1. Go to Settings > API
2. Copy `URL` → Use as `NEXT_PUBLIC_SUPABASE_URL`
3. Copy `anon public` key → Use as `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Add these to Vercel Environment Variables
5. Redeploy Vercel project

### 4. Midtrans Integration

**Sandbox Setup (Testing):**
1. Go to https://dashboard.sandbox.midtrans.com/
2. Login or create account
3. Go to Settings > Access Keys
4. Copy `Client Key` (starts with `SB-Mid-client-`)
5. Copy `Server Key` (starts with `SB-Mid-server-`)
6. Add to environment variables

**Production Setup (After Testing):**
1. Submit business documents to Midtrans:
   - KTP (National ID)
   - NPWP (Tax ID)
   - Bank Statement (3 months)
   - Business Proposal
   - Website Screenshots (10 screenshots)

2. Wait for approval (2-4 weeks)

3. Once approved, switch to production keys:
   - Update `NEXT_PUBLIC_MIDTRANS_CLIENT_KEY`
   - Update `NEXT_PUBLIC_MIDTRANS_ENV=production`
   - Update server-side `MIDTRANS_SERVER_KEY`

### 5. HuggingFace AI/ML Setup

**Space URL**: https://huggingface.co/spaces/elmatador0197/oasis-ai-ml-back-1.1

**Integration Steps:**
1. Ensure Space is running
2. Get API endpoint from Space (usually: `https://elmatador0197-oasis-ai-ml-back-1-1.hf.space`)
3. Add to environment variables:
```env
NEXT_PUBLIC_AIML_API_URL=your-huggingface-space-url
```

## 🔐 Security Checklist

### Environment Variables
- [ ] All secrets stored in environment variables (not in code)
- [ ] `.env.local` added to `.gitignore`
- [ ] Different keys for development/production
- [ ] API keys rotated regularly

### Database Security
- [ ] Row Level Security (RLS) enabled on all tables
- [ ] Policies tested for each user role
- [ ] Database password stored securely
- [ ] No direct database access from frontend

### Payment Security
- [ ] Midtrans server key never exposed to frontend
- [ ] Webhook endpoint secured with signature verification
- [ ] HTTPS enforced on all pages
- [ ] PCI-DSS compliance through Midtrans

## 📊 Post-Deployment Verification

### 1. Frontend Verification
```bash
# Test homepage
curl https://your-project.vercel.app

# Test API route (once created)
curl https://your-project.vercel.app/api/health

# Check legal pages
curl https://your-project.vercel.app/legal/privacy
curl https://your-project.vercel.app/legal/terms
curl https://your-project.vercel.app/legal/refund
```

### 2. Database Verification
```sql
-- In Supabase SQL Editor, run:
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';

-- Should return: users, subscriptions, transactions, projects, events, etc.

-- Test sample query
SELECT COUNT(*) FROM users;
```

### 3. Payment Integration Test
1. Go to Pricing page
2. Click "Subscribe" on any plan
3. Complete payment with Midtrans test cards:
   - Test Card: `4811 1111 1111 1114`
   - Expiry: Any future date
   - CVV: `123`
4. Verify transaction appears in Midtrans dashboard
5. Check transaction record in database

## 🚨 Common Issues & Solutions

### Issue: "Build Failed" on Vercel
**Solution:**
- Check Node version (should be 18.x or 20.x)
- Verify all dependencies in package.json
- Check build logs for specific errors
- Run `npm run build` locally first

### Issue: "Environment variables not found"
**Solution:**
- Go to Vercel Dashboard > Project > Settings > Environment Variables
- Add all required variables
- Redeploy project (Vercel > Deployments > Redeploy)

### Issue: "Database connection error"
**Solution:**
- Verify Supabase URL and keys are correct
- Check if Supabase project is paused (free tier pauses after inactivity)
- Test connection in Supabase SQL Editor

### Issue: "Midtrans payment not working"
**Solution:**
- Check if using correct environment (sandbox vs production)
- Verify client key matches environment
- Check browser console for errors
- Test with Midtrans simulator: https://simulator.sandbox.midtrans.com/

## 📝 Midtrans Application Requirements

### Documents Needed
1. **KTP (National ID)** - High-quality scan, all 4 corners visible
2. **NPWP (Tax ID)** - Clear, number readable
3. **Bank Statement** - Last 3 months, account holder name visible
4. **Business Proposal** - 2-3 pages describing:
   - Business model (SaaS BI Platform)
   - Target market (Indonesian digital businesses)
   - Revenue model (3-tier subscription)
   - Technical implementation
   - Why you need payment gateway

5. **Website Screenshots** (10 mandatory):
   - Homepage (full page)
   - Pricing page (IDR format visible)
   - Terms & Conditions (top section)
   - Privacy Policy (top section)
   - Refund Policy (7-day guarantee highlighted)
   - Contact page (full page)
   - Footer (legal links visible)
   - Mobile view (homepage)
   - Payment methods showcase
   - FAQ section

### Screenshot Guidelines
- Resolution: 1920x1080 or higher
- Format: PNG (preferred) or JPG
- Full page captures (not just viewport)
- Clear, no compression artifacts
- File naming: `01_homepage_full_page.png`, `02_pricing_idr_format.png`, etc.

### Application Tips
✅ **Do:**
- Submit complete documentation
- Use clear, professional language
- Show working payment flow
- Respond quickly to Midtrans inquiries
- Be patient (2-4 weeks approval time)

❌ **Don't:**
- Submit incomplete application
- Use placeholder content
- Rush the process
- Hide business model details
- Apply multiple times (looks suspicious)

## 🎯 Success Metrics

After deployment, monitor:
- **Uptime**: 99.9% target (use Vercel analytics)
- **Page Load Time**: <3 seconds (check Lighthouse)
- **API Response Time**: <500ms average
- **Error Rate**: <1% of requests
- **Conversion Rate**: Track signups → paid subscriptions

## 📞 Support Contacts

**Technical Issues:**
- Email: elfaress2425@gmail.com
- Phone: +62 857-1265-8316
- WhatsApp: +62 857-1265-8316

**Vercel Support:**
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions

**Supabase Support:**
- Docs: https://supabase.com/docs
- Discord: https://discord.supabase.com

**Midtrans Support:**
- Email: support@midtrans.com
- Docs: https://docs.midtrans.com

---

**Last Updated**: 2025-01-17
**Version**: 1.1.0
**Status**: Ready for deployment (85% complete)

**Next Steps:**
1. Complete remaining legal pages (Terms, Refund, Contact, FAQ)
2. Push code to GitHub
3. Deploy to Vercel
4. Setup Supabase database
5. Test Midtrans integration
6. Submit Midtrans application
7. Launch! 🚀
