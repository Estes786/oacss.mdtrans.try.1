# 📱 OASIS V4 - MOBILE DEPLOYMENT GUIDE

> **Deploy OASIS V4 Ecosystem entirely from your mobile device - NO CLI REQUIRED!**

## 🎯 Overview

This guide shows you how to deploy the complete OASIS V4 ecosystem using only web browsers on your mobile device. Every step can be done through web interfaces.

## ✅ Prerequisites

- Mobile device (Android/iOS) with web browser
- GitHub account
- Vercel account (sign up with GitHub)
- Supabase account (free tier)
- HuggingFace account (free tier)
- DOKU account (for payments - optional)

## 📋 Deployment Steps

### STEP 1: Setup GitHub Repository (via GitHub Mobile Website)

1. **Open GitHub.com in mobile browser**
   - Go to: `https://github.com`
   - Login to your account

2. **Create New Repository**
   - Tap the `+` icon (top right)
   - Select "New repository"
   - Name: `oasis-v4-ecosystem`
   - Description: `OASIS V4 Superintelligence Ecosystem`
   - Choose: **Public** or **Private**
   - Tap "Create repository"

3. **Upload Frontend Code**
   - Open your new repository
   - Tap "uploading an existing file"
   - Upload all files from `front-oasis/` folder:
     - Upload `package.json`
     - Upload `next.config.ts`
     - Upload `tsconfig.json`
     - Upload `tailwind.config.ts`
     - Upload `postcss.config.mjs`
     - Create `app` folder → Upload `app/` files
     - Create `components` folder → Upload `components/` files
     - Create `lib` folder → Upload `lib/` files
     - Create `public` folder → Upload `public/` files
   
4. **Create .env.local.example file**
   - Tap "Add file" → "Create new file"
   - Name: `.env.local.example`
   - Paste content (update later with actual values):
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
     NEXT_PUBLIC_HF_API_URL=your_huggingface_space_url_here
     NEXT_PUBLIC_HF_API_TOKEN=your_huggingface_token_here
     NEXT_PUBLIC_DOKU_CLIENT_ID=your_doku_client_id_here
     NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
     ```
   - Tap "Commit new file"

### STEP 2: Deploy Frontend to Vercel (via Vercel Mobile Website)

1. **Open Vercel.com**
   - Go to: `https://vercel.com`
   - Tap "Sign Up" → Continue with GitHub
   - Authorize Vercel to access your GitHub

2. **Import Project**
   - Tap "Add New" → "Project"
   - Select `oasis-v4-ecosystem` repository
   - Tap "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. **Add Environment Variables** (we'll update these after Supabase setup)
   - Skip for now, tap "Deploy"
   - Wait for deployment (2-5 minutes)

5. **Get Your Frontend URL**
   - After deployment completes, copy the URL
   - Example: `https://oasis-v4-ecosystem-xxx.vercel.app`
   - Save this URL for later!

### STEP 3: Setup Supabase Backend (via Supabase Dashboard)

1. **Open Supabase.com**
   - Go to: `https://supabase.com`
   - Sign in with GitHub

2. **Create New Project**
   - Tap "New project"
   - Organization: Select or create new
   - Name: `oasis-v4-production`
   - Database Password: Generate strong password (save it!)
   - Region: Choose closest to you
   - Pricing Plan: **Free** (starts with Free tier)
   - Tap "Create new project"
   - Wait for setup (2-3 minutes)

3. **Run Database Migrations (SQL Editor)**
   - In project dashboard, tap "SQL Editor" (left sidebar)
   - Tap "+ New query"
   - Copy entire content from `database-oasis/migrations/001_trinity_moat_schemas.sql`
   - Paste into SQL editor
   - Tap "Run" (bottom right)
   - Wait for execution to complete
   - You should see: "Success. No rows returned"

4. **Get API Keys**
   - Tap "Settings" → "API"
   - Copy these values:
     - **Project URL**: `https://xxxxx.supabase.co`
     - **anon/public key**: `eyJh...` (long string)
     - **service_role key**: `eyJh...` (keep this secret!)
   - Save these for next step!

5. **Setup Edge Functions (Optional - via Supabase Dashboard)**
   - Tap "Edge Functions" (left sidebar)
   - Tap "+ New Function"
   - Name: `dacoo-create-goal`
   - Copy code from `back-oasis/functions/dacoo/create-goal.ts`
   - Paste and tap "Deploy"
   - Repeat for other functions as needed

6. **Configure Storage (Optional - for file uploads)**
   - Tap "Storage" (left sidebar)
   - Tap "Create new bucket"
   - Name: `digital-assets`
   - Public: **Yes** (for marketplace products)
   - Tap "Create bucket"

### STEP 4: Update Vercel Environment Variables

1. **Go back to Vercel Dashboard**
   - Open `https://vercel.com/dashboard`
   - Select your `oasis-v4-ecosystem` project

2. **Add Environment Variables**
   - Tap "Settings" → "Environment Variables"
   - Add the following (using values from Supabase):
   
   ```
   NEXT_PUBLIC_SUPABASE_URL
   Value: https://xxxxx.supabase.co
   
   NEXT_PUBLIC_SUPABASE_ANON_KEY
   Value: eyJh... (your anon key)
   
   NEXT_PUBLIC_APP_URL
   Value: https://your-app.vercel.app (your Vercel URL)
   ```
   
3. **Redeploy to Apply Changes**
   - Tap "Deployments" tab
   - Tap latest deployment → "..." menu → "Redeploy"
   - Wait for redeployment (1-2 minutes)

### STEP 5: Setup HuggingFace (via HuggingFace Website)

1. **Open HuggingFace.co**
   - Go to: `https://huggingface.co`
   - Sign up / Login

2. **Get API Token**
   - Tap profile icon → "Settings"
   - Tap "Access Tokens"
   - Tap "New token"
   - Name: `oasis-v4-api`
   - Role: **Read**
   - Tap "Generate"
   - Copy token (save it!)

3. **Create Space (Optional - for custom models)**
   - Tap "Spaces" → "Create new Space"
   - Name: `oasis-v4-ai`
   - SDK: **Gradio** or **Streamlit**
   - Visibility: **Public**
   - Tap "Create Space"
   - Upload files from `hf-oasis/` folder

4. **Add HF Token to Vercel**
   - Go back to Vercel → Settings → Environment Variables
   - Add:
     ```
     NEXT_PUBLIC_HF_API_TOKEN
     Value: hf_xxx... (your HF token)
     ```
   - Redeploy

### STEP 6: Setup DOKU Payment Gateway (via DOKU Website)

1. **Register at DOKU**
   - Go to: `https://doku.com` (or sandbox: `https://sandbox.doku.com`)
   - Sign up for merchant account

2. **Get API Credentials**
   - Login to merchant dashboard
   - Go to "Settings" → "API Credentials"
   - Copy:
     - Client ID
     - Secret Key

3. **Add to Supabase Edge Function**
   - Go to Supabase → Edge Functions → Settings
   - Add secrets:
     ```
     DOKU_CLIENT_ID=your_client_id
     DOKU_SECRET_KEY=your_secret_key
     ```

4. **Configure Webhook URL**
   - In DOKU dashboard, set webhook URL to:
   - `https://xxxxx.supabase.co/functions/v1/payments/doku-webhook`

### STEP 7: Enable Authentication (Supabase)

1. **Configure Auth Providers**
   - Supabase dashboard → "Authentication" → "Providers"
   - Enable:
     - **Email** (default enabled)
     - **Google** (optional - requires Google OAuth setup)
     - **GitHub** (optional - requires GitHub OAuth setup)

2. **Add Site URL**
   - Auth → "URL Configuration"
   - Site URL: `https://your-app.vercel.app`
   - Redirect URLs: `https://your-app.vercel.app/**`

### STEP 8: Test Your Deployment

1. **Open Your Frontend URL**
   - Go to: `https://your-app.vercel.app`
   - You should see OASIS V4 landing page

2. **Test Features**
   - Sign up with email
   - Login to dashboard
   - Try creating a goal (DACOO)
   - Check analytics (AEGM)
   - View outcomes (OVS)

3. **Check Logs**
   - **Vercel**: Dashboard → Deployment → "Logs"
   - **Supabase**: Dashboard → "Logs" tab
   - Look for any errors

## 🔧 Troubleshooting

### Frontend not loading?
- Check Vercel deployment logs
- Verify all environment variables are set
- Check browser console for errors

### Database errors?
- Verify SQL migration ran successfully
- Check Supabase project is active (not paused)
- Verify API keys are correct

### API not responding?
- Check Supabase Edge Functions logs
- Verify CORS settings in functions
- Test API endpoints with browser DevTools

### Payment not working?
- Verify DOKU credentials
- Check webhook URL is correctly configured
- Test with DOKU sandbox first

## 📊 Monitoring & Analytics

### Vercel Analytics (Built-in)
- Vercel dashboard → "Analytics"
- View page performance
- Track errors

### Supabase Logs
- Supabase dashboard → "Logs"
- Filter by:
  - API requests
  - Database queries
  - Edge function executions

## 🚀 Next Steps

1. **Customize Your App**
   - Edit files in GitHub web editor
   - Vercel auto-deploys on every commit

2. **Add More Features**
   - Create more Edge Functions
   - Add marketplace products
   - Configure AI agents

3. **Upgrade Plans (When Ready)**
   - Vercel Pro: $20/month (better performance)
   - Supabase Pro: $25/month (more resources)
   - HuggingFace Pro: $9/month (faster inference)

## 💰 Cost Breakdown (100% FREE Tier)

| Service | Free Tier Limits | Upgrade Cost |
|---------|------------------|--------------|
| **Vercel** | 100GB bandwidth, Unlimited deployments | $20/mo (Pro) |
| **Supabase** | 500MB database, 2GB bandwidth, 50MB storage | $25/mo (Pro) |
| **HuggingFace** | Limited inference API calls | $9/mo (Pro) |
| **DOKU** | Sandbox testing free, Live has transaction fees | Per transaction |

**Total Monthly Cost (Free Tier): $0** 🎉

## 📞 Support

If you encounter issues:
1. Check official documentation:
   - Vercel: https://vercel.com/docs
   - Supabase: https://supabase.com/docs
   - HuggingFace: https://huggingface.co/docs

2. Check OASIS V4 repository issues
3. Join community Discord (if available)

---

**🎉 Congratulations! You've deployed OASIS V4 entirely from your mobile device!**

Now start building your superintelligence money machine! 💰🚀
