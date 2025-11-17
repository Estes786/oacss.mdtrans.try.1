# 🚀 OASIS V4 - QUICK START GUIDE

## 1. Clone or Download Repository

```bash
git clone https://github.com/yourusername/oasis-v4-ecosystem.git
cd oasis-v4-ecosystem
```

## 2. Frontend Setup (front-oasis)

### Install Dependencies
```bash
cd front-oasis
npm install
```

### Configure Environment
Create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_HF_API_TOKEN=your_huggingface_token
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Run Development Server
```bash
npm run dev
```

Open `http://localhost:3000`

## 3. Database Setup (database-oasis)

### Via Supabase Dashboard (Mobile-Friendly)

1. Go to https://supabase.com
2. Create new project
3. Go to SQL Editor
4. Copy & paste `database-oasis/migrations/001_trinity_moat_schemas.sql`
5. Run the migration
6. Done! ✅

## 4. Backend Setup (back-oasis)

### Via Supabase Dashboard

1. Go to Edge Functions tab
2. Create new function
3. Copy code from `back-oasis/functions/`
4. Deploy
5. Add environment variables in Settings

## 5. AI Setup (hf-oasis)

### Option A: Use Inference API (Easiest)
1. Get HF token from https://huggingface.co/settings/tokens
2. Add to `.env.local`
3. Done! AI features work via API

### Option B: Deploy Custom Space
1. Go to https://huggingface.co/spaces
2. Create new Space
3. Upload files from `hf-oasis/spaces/dacoo-ai/`
4. Space auto-builds and deploys

## 6. Payment Integration (Optional)

1. Register at https://doku.com
2. Get API credentials
3. Add to Supabase Edge Functions secrets:
   - DOKU_CLIENT_ID
   - DOKU_SECRET_KEY
4. Configure webhook URL

## 7. Deploy to Production

### Frontend → Vercel
1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy!

URL: `https://your-app.vercel.app`

### Backend → Already on Supabase
- Edge Functions auto-deployed
- Database already configured
- Just update environment variables

### AI → Already on HuggingFace
- Using Inference API or deployed Space
- No additional deployment needed

## 🎉 You're Done!

Your OASIS V4 ecosystem is now running!

### Next Steps:
1. Create your first account
2. Set a business goal (DACOO)
3. Create a digital asset
4. Track growth (AEGM)
5. Verify outcomes (OVS)
6. Start generating revenue! 💰

## 📱 Mobile Users

Follow the detailed **MOBILE-DEPLOYMENT-GUIDE.md** for step-by-step instructions using only web browsers.

## 🆘 Need Help?

- Check documentation in `/docs`
- Read API docs
- Open GitHub issue
- Join community Discord

---

**Built with ❤️ by OASIS V4 Team**
