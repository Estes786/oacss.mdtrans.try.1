# 📱 OASIS V4 - Mobile Deployment Guide

> **100% Web-Based Deployment** - No CLI, No Terminal, No Desktop Required!

Panduan ini dirancang khusus untuk deployment via **mobile browser** (Chrome, Safari, Firefox di Android/iOS).

---

## 🎯 OVERVIEW

OASIS V4 terdiri dari 4 komponen yang dideploy secara terpisah:

1. **Frontend** → Vercel (Next.js App)
2. **Backend** → Supabase Edge Functions
3. **Database** → Supabase PostgreSQL
4. **AI/ML** → HuggingFace Spaces

**Total Waktu Deployment**: 30-45 menit (pertama kali)

---

## 📋 PREREQUISITES

### Akun yang Dibutuhkan (Semua Gratis!)

- [ ] **GitHub Account** - github.com
- [ ] **Vercel Account** - vercel.com
- [ ] **Supabase Account** - supabase.com
- [ ] **HuggingFace Account** - huggingface.co (optional untuk AI features)
- [ ] **DOKU Account** - doku.com (optional untuk payment)

**Catatan**: Sign up semua akun menggunakan email yang sama untuk kemudahan management.

---

## 🚀 STEP 1: SETUP DATABASE (Supabase)

### 1.1 Create Supabase Project

1. Buka **supabase.com** di mobile browser
2. Tap **"Start your project"** / **"New Project"**
3. Isi details:
   - **Name**: `oasis-v4-production`
   - **Database Password**: [Generate strong password, SIMPAN!]
   - **Region**: Choose closest region (Singapore untuk Indonesia)
   - **Pricing Plan**: Free tier (500MB database)
4. Tap **"Create new project"**
5. **Tunggu 2-3 menit** sampai database ready

### 1.2 Run Database Migration

1. Di project dashboard, tap menu **"SQL Editor"**
2. Tap **"+ New query"**
3. Buka file ini di GitHub atau local: `database-oasis/migrations/001_trinity_moat_schemas.sql`
4. **Copy semua isi file** (18KB SQL)
5. **Paste** ke SQL Editor di Supabase
6. Tap **"Run"** (pojok kanan bawah)
7. ✅ **Verify**: Lihat "Success" message

**Troubleshooting**:
- Jika error "extension not found": 
  - Go to **Database** → **Extensions**
  - Enable: `uuid-ossp` dan `vector`
  - Retry migration

### 1.3 Get API Keys

1. Tap menu **"Settings"** → **"API"**
2. **COPY dan SIMPAN** values ini (ke Notes app):
   ```
   Project URL: https://xxxxx.supabase.co
   anon public: eyJhbGc...
   service_role: eyJhbGc... (⚠️ JANGAN BAGIKAN!)
   ```

---

## 🚀 STEP 2: DEPLOY FRONTEND (Vercel)

### 2.1 Upload Code ke GitHub

**Option A: Via GitHub Mobile App**

1. Install **GitHub Mobile** app
2. Login dan tap **"+"** → **"New repository"**
3. Name: `oasis-v4-frontend`
4. Visibility: **Private**
5. Tap **"Create repository"**
6. Tap **"+"** → **"Upload files"**
7. Upload folder `front-oasis/` (bisa zip dulu jika terlalu besar)

**Option B: Via GitHub Web**

1. Buka **github.com** di browser
2. Tap **"+"** (top right) → **"New repository"**
3. Name: `oasis-v4-frontend`
4. Visibility: **Private**
5. Tap **"Create repository"**
6. Scroll ke bawah → **"uploading an existing file"**
7. Drag & drop atau tap untuk select files dari folder `front-oasis/`
8. Tap **"Commit changes"**

**⚠️ PENTING**: Jangan upload file `.env.local` atau `node_modules/`!

### 2.2 Deploy ke Vercel

1. Buka **vercel.com** di browser
2. Tap **"Add New..."** → **"Project"**
3. **Import** repository `oasis-v4-frontend`
   - Jika pertama kali: Authorize GitHub terlebih dahulu
4. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. **Environment Variables** (PENTING!):
   Tap **"Environment Variables"** dan add:
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGc... [paste dari step 1.3]
   ```

6. Tap **"Deploy"**
7. **Tunggu 2-3 menit** - Vercel akan build & deploy automatically
8. ✅ **Done!** Tap URL untuk open app: `https://oasis-v4-frontend.vercel.app`

**Troubleshooting**:
- Build failed: Check error logs di Vercel dashboard
- Missing env vars: Add di **Settings** → **Environment Variables**

---

## 🚀 STEP 3: DEPLOY BACKEND (Supabase Edge Functions)

### 3.1 Setup Edge Functions

**⚠️ Catatan**: Supabase Edge Functions saat ini memerlukan CLI untuk deployment. 

**Mobile Workaround**:

**Option A: Deploy via Supabase Dashboard API Editor (Beta)**

1. Di Supabase dashboard, tap **"Edge Functions"**
2. Jika ada option **"Create via Dashboard"**:
   - Tap **"+ New Function"**
   - Name: `dacoo-create-goal`
   - Paste code dari `back-oasis/functions/dacoo/create-goal.ts`
   - Tap **"Deploy"**
3. Repeat untuk functions lainnya

**Option B: Use Cloud IDE (Replit/Gitpod)**

1. Buka **replit.com** atau **gitpod.io**
2. Import repository dari GitHub
3. Open terminal dan run:
   ```bash
   npx supabase login
   npx supabase link --project-ref your-project-ref
   npx supabase functions deploy
   ```

**Option C: Desktop Assistance**

Jika tidak ada akses desktop sama sekali:
- Functions dapat ditambahkan later
- Frontend akan bekerja dengan mock data terlebih dahulu
- Functionality seperti goal creation akan disabled temporarily

### 3.2 Set Function Secrets

1. Di Supabase dashboard → **Edge Functions**
2. Select function → **Settings** tab
3. Add secrets:
   ```
   SUPABASE_URL = https://xxxxx.supabase.co
   SUPABASE_ANON_KEY = eyJhbGc...
   SUPABASE_SERVICE_KEY = eyJhbGc... [service_role key]
   HF_API_TOKEN = hf_your_token (optional)
   ```

---

## 🚀 STEP 4: DEPLOY AI/ML (HuggingFace Spaces) - OPTIONAL

### 4.1 Create HuggingFace Space

1. Buka **huggingface.co/spaces**
2. Tap **"Create new Space"**
3. Configure:
   - **Name**: `oasis-v4-ml-ops`
   - **SDK**: **Gradio**
   - **Visibility**: **Public** (or Private with Pro)
4. Tap **"Create Space"**

### 4.2 Upload ML Code

1. Di Space dashboard, tap **"Files"**
2. Upload files dari folder `hf-oasis/spaces/ml-ops/`:
   - `app.py` (main Gradio app)
   - `requirements.txt`
   - Any model files
3. Tap **"Commit changes to main"**
4. HuggingFace akan auto-build Space
5. ✅ **Done!** Space akan live di: `https://huggingface.co/spaces/yourusername/oasis-v4-ml-ops`

### 4.3 Get Space URL

1. Copy Space URL
2. Add ke Vercel environment variables:
   ```
   NEXT_PUBLIC_HF_API_URL = https://yourusername-oasis-v4-ml-ops.hf.space
   ```
3. **Redeploy** Vercel app untuk apply changes

---

## 🚀 STEP 5: CONFIGURE PAYMENT (DOKU) - OPTIONAL

### 5.1 Register DOKU Account

1. Buka **sandbox.doku.com** (untuk testing)
2. Sign up dan verify email
3. Complete merchant profile

### 5.2 Get API Credentials

1. Go to **Settings** → **API Keys**
2. Copy:
   - `Client ID`: BRN-xxxx-xxxx
   - `Secret Key`: SK-xxxx-xxxx

### 5.3 Add to Edge Functions

1. Supabase dashboard → **Edge Functions** → **payments-doku-webhook**
2. **Settings** tab → Add secrets:
   ```
   DOKU_CLIENT_ID = BRN-xxxx-xxxx
   DOKU_SECRET_KEY = SK-xxxx-xxxx
   ```

### 5.4 Setup Webhook

1. Di DOKU dashboard → **Webhooks**
2. Add webhook URL:
   ```
   https://xxxxx.supabase.co/functions/v1/payments-doku-webhook
   ```
3. Enable events: `payment.success`, `payment.failed`

---

## ✅ STEP 6: VERIFY DEPLOYMENT

### 6.1 Test Frontend

1. Open Vercel URL: `https://oasis-v4-frontend.vercel.app`
2. Check:
   - [ ] Landing page loads correctly
   - [ ] Navigation works
   - [ ] Dashboard accessible
   - [ ] Trinity MOAT sections visible

### 6.2 Test Database Connection

1. Open browser console (Chrome DevTools)
2. Pada dashboard, coba login/signup
3. Verify user created di Supabase:
   - **Authentication** → **Users**

### 6.3 Test Edge Functions (if deployed)

1. Di dashboard, coba create new goal
2. Check function logs:
   - Supabase → **Edge Functions** → Select function → **Logs**

---

## 🎉 DEPLOYMENT COMPLETE!

### Your Live URLs:

- **Frontend**: `https://oasis-v4-frontend.vercel.app`
- **Backend API**: `https://xxxxx.supabase.co/functions/v1/`
- **ML Ops**: `https://huggingface.co/spaces/yourusername/oasis-v4-ml-ops`
- **Database**: Supabase Dashboard

### Next Steps:

1. **Setup Custom Domain** (optional):
   - Vercel: Settings → Domains → Add custom domain
   - Follow DNS configuration instructions

2. **Enable Analytics**:
   - Vercel: Analytics tab (built-in)
   - Supabase: Database → Insights

3. **Setup Monitoring**:
   - Vercel: Integrations → Add monitoring service
   - Supabase: Project Settings → Integrations

4. **Go to Production**:
   - Replace sandbox credentials dengan production
   - DOKU: Switch to production environment
   - Test payment flow thoroughly

---

## 🆘 TROUBLESHOOTING

### Frontend Issues

**Problem**: Build failed on Vercel
- **Solution**: Check build logs untuk specific error
- **Common fix**: Ensure all dependencies di `package.json`

**Problem**: Environment variables not working
- **Solution**: 
  1. Verify vars di Vercel Settings → Environment Variables
  2. Redeploy project setelah add/update vars

**Problem**: 404 on routes
- **Solution**: Ensure `next.config.ts` configured correctly

### Backend Issues

**Problem**: Edge Function not found
- **Solution**: Verify function deployed via CLI atau dashboard

**Problem**: CORS errors
- **Solution**: Check CORS headers di function code

**Problem**: Authentication failed
- **Solution**: Verify Supabase keys di environment variables

### Database Issues

**Problem**: Migration failed
- **Solution**: 
  1. Check SQL syntax errors
  2. Ensure extensions enabled
  3. Retry with individual table CREATE statements

**Problem**: RLS policy denying access
- **Solution**: Temporarily disable RLS untuk testing:
  ```sql
  ALTER TABLE table_name DISABLE ROW LEVEL SECURITY;
  ```

---

## 📚 ADDITIONAL RESOURCES

- **Vercel Docs**: vercel.com/docs
- **Supabase Docs**: supabase.com/docs
- **Next.js Docs**: nextjs.org/docs
- **HuggingFace Docs**: huggingface.co/docs

---

## 📞 SUPPORT

Jika mengalami kesulitan:

1. **Check Documentation** di folder `docs/`
2. **Review Error Logs** di dashboard masing-masing platform
3. **Community Support**: GitHub Discussions

---

**Deployment completed! 🎉 Now start generating revenue with OASIS V4!** 💰

---

**Last Updated**: January 2025  
**Version**: 4.0.0  
**License**: Proprietary - All rights reserved © 2025 OASIS V4
