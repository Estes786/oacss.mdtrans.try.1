# 📱 OASIS V4 - MOBILE DEPLOYMENT GUIDE

> **100% Mobile-Friendly Deployment - No CLI Required!**

Deploy OASIS V4 Superintelligence Ecosystem menggunakan browser mobile saja. Semua langkah dapat dilakukan melalui web interface tanpa perlu terminal atau command line.

## 🎯 OVERVIEW

OASIS V4 menggunakan infrastruktur 100% gratis:
- **Frontend**: Vercel (via GitHub integration)
- **Backend**: Supabase Edge Functions (via Dashboard)
- **Database**: Supabase PostgreSQL (via SQL Editor)
- **AI/ML**: HuggingFace Inference API (via Web UI)
- **Payment**: DOKU Payment Gateway

## 📋 PREREQUISITES

1. **Akun yang Diperlukan** (Semua gratis):
   - GitHub account (untuk source code)
   - Vercel account (untuk frontend hosting)
   - Supabase account (untuk backend + database)
   - HuggingFace account (untuk AI features)
   - DOKU account (untuk payment gateway)

2. **Browser Mobile**:
   - Chrome, Safari, Firefox, atau browser modern lainnya
   - Koneksi internet stabil

## 🚀 DEPLOYMENT STEPS

### STEP 1: SETUP GITHUB REPOSITORY (5 menit)

#### 1.1 Buat Repository Baru
1. Buka **github.com** di browser mobile
2. Tap icon **+** di pojok kanan atas
3. Pilih **"New repository"**
4. Isi details:
   - **Repository name**: `oasis-v4-ecosystem`
   - **Description**: `OASIS V4 Superintelligence Ecosystem - The Proven Money Machine`
   - **Visibility**: Private atau Public (pilihan Anda)
   - ✅ Centang **"Initialize with README"**
5. Tap **"Create repository"**

#### 1.2 Upload Source Code
**Cara 1: Via GitHub Web UI**
1. Di repository baru, tap **"Add file"** → **"Upload files"**
2. Upload semua folder dari project:
   - `front-oasis/` folder
   - `back-oasis/` folder  
   - `database-oasis/` folder
   - `hf-oasis/` folder
   - `docs/` folder
3. Tap **"Commit changes"**

**Cara 2: Via GitHub Mobile App**
1. Download **GitHub Mobile App** dari Play Store/App Store
2. Login dan navigate ke repository
3. Gunakan file manager untuk upload folder

**Cara 3: Via Desktop Transfer (Jika Tersedia)**
1. Transfer folder ke desktop/laptop
2. Push menggunakan git atau GitHub Desktop
3. Lanjutkan deployment dari mobile

---

### STEP 2: SETUP SUPABASE (10 menit)

#### 2.1 Buat Project Supabase
1. Buka **supabase.com** di browser mobile
2. Tap **"Start your project"** atau **"New Project"**
3. Pilih organization atau buat baru
4. Isi project details:
   - **Name**: `oasis-v4-production`
   - **Database Password**: (simpan password ini!)
   - **Region**: Pilih yang terdekat (Singapore, Tokyo, etc.)
5. Tap **"Create new project"**
6. Tunggu ~2 menit hingga project ready

#### 2.2 Setup Database Schema
1. Di Supabase Dashboard, buka **"SQL Editor"** (dari sidebar)
2. Tap **"New query"**
3. Copy paste seluruh isi file `database-oasis/migrations/001_trinity_moat_schemas.sql`
   - **Tips Mobile**: Buka file di GitHub → Tap "Raw" → Select All → Copy
4. Paste ke SQL Editor
5. Tap **"Run"** atau tekan **Ctrl+Enter**
6. Tunggu hingga muncul **"Success"**

#### 2.3 Simpan API Keys
1. Di Supabase Dashboard, buka **"Settings"** → **"API"**
2. Catat/Screenshot informasi berikut:
   - **Project URL**: `https://xxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (key panjang)
   - **service_role key**: `eyJhbGc...` (key panjang, **RAHASIA!**)
3. Simpan di notes app untuk langkah berikutnya

#### 2.4 Setup Authentication
1. Buka **"Authentication"** → **"Providers"**
2. Enable providers yang diinginkan:
   - ✅ Email (default enabled)
   - ✅ Google (optional)
   - ✅ GitHub (optional)
3. Konfigurasi redirect URLs:
   - Add: `http://localhost:3000/**`
   - Add: `https://your-vercel-app.vercel.app/**` (akan diupdate nanti)

---

### STEP 3: SETUP VERCEL (5 menit)

#### 3.1 Connect GitHub Repository
1. Buka **vercel.com** di browser mobile
2. Tap **"Add New..."** → **"Project"**
3. Tap **"Import Git Repository"**
4. Authorize Vercel to access GitHub (jika belum)
5. Pilih repository **`oasis-v4-ecosystem`**
6. Tap **"Import"**

#### 3.2 Configure Build Settings
1. **Framework Preset**: Next.js
2. **Root Directory**: Tap "Edit" → Set ke `front-oasis`
3. **Build Command**: `npm run build`
4. **Output Directory**: `.next`
5. **Install Command**: `npm install`

#### 3.3 Add Environment Variables
Tap **"Environment Variables"** dan tambahkan:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
NEXT_PUBLIC_HF_API_URL=https://api-inference.huggingface.co
NEXT_PUBLIC_HF_API_TOKEN=(akan diisi nanti)
NEXT_PUBLIC_DOKU_CLIENT_ID=(akan diisi nanti)
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

**Cara Paste di Mobile**:
- Tap field "Name" → ketik `NEXT_PUBLIC_SUPABASE_URL`
- Tap field "Value" → paste value dari notes
- Tap "Add" untuk setiap variable

#### 3.4 Deploy
1. Tap **"Deploy"**
2. Tunggu 2-5 menit hingga build selesai
3. Jika berhasil, akan muncul **"Congratulations!"** 🎉
4. Tap **"Visit"** untuk preview aplikasi
5. Catat URL production: `https://oasis-v4-xxx.vercel.app`

---

### STEP 4: SETUP HUGGINGFACE (5 menit)

#### 4.1 Buat Account dan Get API Token
1. Buka **huggingface.co** di browser mobile
2. Sign up atau Login
3. Tap profile icon → **"Settings"**
4. Scroll ke **"Access Tokens"**
5. Tap **"New token"**
   - **Name**: `oasis-v4-api`
   - **Role**: Read
6. Tap **"Generate token"**
7. **COPY TOKEN SEKARANG** (hanya muncul sekali!)
8. Simpan di notes app

#### 4.2 Update Vercel Environment Variable
1. Kembali ke Vercel Dashboard
2. Buka project **oasis-v4-ecosystem**
3. Tap **"Settings"** → **"Environment Variables"**
4. Tambahkan:
   - **Name**: `NEXT_PUBLIC_HF_API_TOKEN`
   - **Value**: (paste HuggingFace token)
5. Tap **"Save"**
6. Tap **"Redeploy"** (jika muncul popup)

#### 4.3 Deploy Model Space (Optional - untuk Advanced AI)
1. Di HuggingFace, tap **"New Space"**
2. Nama: `oasis-v4-models`
3. SDK: Gradio atau Streamlit
4. Upload file dari `hf-oasis/` folder
5. Space akan auto-deploy (5-10 menit)

---

### STEP 5: SETUP SUPABASE EDGE FUNCTIONS (10 menit)

#### 5.1 Deploy Edge Functions via Dashboard
1. Buka Supabase Dashboard
2. Tap **"Edge Functions"** (dari sidebar)

#### 5.2 Create DACOO Functions
**Function 1: create-goal**
1. Tap **"New function"**
2. **Name**: `dacoo-create-goal`
3. Copy paste code dari `back-oasis/functions/dacoo/create-goal.ts`
4. Tap **"Deploy function"**

**Function 2: create-asset**
1. Tap **"New function"**
2. **Name**: `dacoo-create-asset`
3. Copy paste code dari `back-oasis/functions/dacoo/create-asset.ts`
4. Tap **"Deploy function"**

#### 5.3 Set Environment Variables untuk Functions
1. Dalam setiap function, tap **"Settings"**
2. Tambahkan secrets:
   ```
   SUPABASE_URL=https://xxx.supabase.co
   SUPABASE_ANON_KEY=eyJhbGc...
   SUPABASE_SERVICE_KEY=eyJhbGc... (service_role key)
   HF_API_TOKEN=hf_xxx...
   ```
3. Tap **"Save"**

#### 5.4 Test Functions
1. Tap **"Invoke"** di setiap function
2. Masukkan test payload:
   ```json
   {
     "title": "Test Goal",
     "description": "Testing DACOO goal creation",
     "target_revenue": 10000
   }
   ```
3. Tap **"Invoke"**
4. Cek response - harus **Success**

---

### STEP 6: SETUP DOKU PAYMENT (15 menit)

#### 6.1 Register DOKU Account
1. Buka **doku.com** di browser mobile
2. Tap **"Daftar"** atau **"Sign Up"**
3. Pilih **"Developer/Sandbox"** untuk testing
4. Lengkapi formulir registrasi
5. Verifikasi email

#### 6.2 Get API Credentials
1. Login ke DOKU Dashboard
2. Tap **"Developers"** atau **"API Keys"**
3. Catat:
   - **Client ID**: `BRN-xxx-xxx`
   - **Secret Key**: `SK-xxx-xxx`
   - **Merchant Code**: (jika ada)
4. Simpan di notes app

#### 6.3 Deploy Payment Webhook
1. Buka Supabase Edge Functions
2. Tap **"New function"**
3. **Name**: `payments-doku-webhook`
4. Copy paste code dari `back-oasis/functions/payments/doku-webhook.ts`
5. Add environment variables:
   ```
   DOKU_CLIENT_ID=BRN-xxx-xxx
   DOKU_SECRET_KEY=SK-xxx-xxx
   ```
6. Tap **"Deploy"**
7. Copy function URL: `https://xxx.supabase.co/functions/v1/payments-doku-webhook`

#### 6.4 Configure DOKU Webhook
1. Di DOKU Dashboard, buka **"Webhook Settings"**
2. **Webhook URL**: Paste Supabase function URL
3. **Events**: Pilih semua payment events
4. Tap **"Save"**

#### 6.5 Update Vercel Environment Variables
1. Kembali ke Vercel Settings
2. Tambahkan:
   ```
   NEXT_PUBLIC_DOKU_CLIENT_ID=BRN-xxx-xxx
   ```
3. Tap **"Save"** dan **"Redeploy"**

---

### STEP 7: FINAL CONFIGURATION (5 menit)

#### 7.1 Update Supabase Redirect URLs
1. Buka Supabase Dashboard → **"Authentication"** → **"URL Configuration"**
2. Update **"Site URL"**: `https://oasis-v4-xxx.vercel.app`
3. Add **"Redirect URLs"**:
   - `https://oasis-v4-xxx.vercel.app/**`
   - `https://oasis-v4-xxx.vercel.app/dashboard/**`
4. Tap **"Save"**

#### 7.2 Enable Row Level Security (RLS)
1. Buka **"Database"** → **"Policies"**
2. Pastikan RLS enabled untuk semua Trinity MOAT tables
3. (Sudah di-setup otomatis via migration SQL)

#### 7.3 Test Full Application
1. Buka production URL: `https://oasis-v4-xxx.vercel.app`
2. Test features:
   - ✅ Landing page loads
   - ✅ Sign up / Login works
   - ✅ Dashboard accessible
   - ✅ DACOO: Create goal works
   - ✅ Database updates correctly
   - ✅ AI features respond

---

## ✅ VERIFICATION CHECKLIST

### Frontend (Vercel)
- [ ] Landing page responsive di mobile
- [ ] Dashboard loads tanpa error
- [ ] Navigation berfungsi dengan baik
- [ ] Styling tampil sempurna (TailwindCSS)

### Backend (Supabase)
- [ ] Database tables created successfully
- [ ] Edge functions deployed dan running
- [ ] Authentication works (email signup/login)
- [ ] RLS policies active

### AI Integration (HuggingFace)
- [ ] API token valid
- [ ] Goal decomposition menghasilkan tasks
- [ ] Asset generation dengan AI works

### Payment (DOKU)
- [ ] Credentials valid
- [ ] Webhook configured
- [ ] Test transaction berhasil

---

## 🎯 POST-DEPLOYMENT

### Monitor Application
1. **Vercel Analytics**:
   - Buka Vercel Dashboard → **"Analytics"**
   - Monitor traffic, performance, errors

2. **Supabase Logs**:
   - Buka **"Logs"** → **"Edge Functions"**
   - Monitor API calls dan errors

3. **Error Tracking**:
   - Check browser console (mobile debugging)
   - Use Vercel deployment logs untuk errors

### Update Configuration
Untuk update environment variables:
1. Vercel: **Settings** → **Environment Variables** → Edit → **Save** → **Redeploy**
2. Supabase: **Edge Functions** → Select function → **Settings** → Update secrets

### Domain Custom (Optional)
1. Beli domain (Namecheap, GoDaddy, dll)
2. Di Vercel: **Settings** → **Domains** → Add domain
3. Update DNS records sesuai instruksi Vercel
4. Update Supabase redirect URLs dengan domain baru

---

## 🔧 TROUBLESHOOTING

### Issue: Vercel Build Failed
**Solusi**:
1. Check build logs di Vercel
2. Pastikan `package.json` ada di `front-oasis/`
3. Pastikan root directory set ke `front-oasis`
4. Clear cache: Settings → **"Clear cache"** → Redeploy

### Issue: Database Connection Error
**Solusi**:
1. Verifikasi Supabase URL dan keys
2. Check RLS policies (might block access)
3. Verify environment variables di Vercel
4. Redeploy setelah fix

### Issue: Edge Function Error
**Solusi**:
1. Check function logs di Supabase
2. Verify semua environment variables set
3. Test payload format sesuai dengan function code
4. Redeploy function setelah fix

### Issue: CORS Error
**Solusi**:
1. Pastikan `corsHeaders` ada di semua edge functions
2. Add production URL ke allowed origins
3. Check browser console untuk detail error

### Issue: Payment Not Processing
**Solusi**:
1. Verify DOKU credentials (sandbox vs production)
2. Check webhook URL configured correctly
3. Test webhook dengan DOKU dashboard tools
4. Monitor Supabase function logs

---

## 📞 SUPPORT & RESOURCES

### Documentation
- **OASIS V4 Docs**: `/docs` folder dalam repository
- **Trinity MOAT Architecture**: `/docs/TRINITY-MOAT-ARCHITECTURE.md`
- **API Reference**: Coming soon

### External Resources
- **Vercel Docs**: vercel.com/docs
- **Supabase Docs**: supabase.com/docs
- **HuggingFace Docs**: huggingface.co/docs
- **DOKU Docs**: doku.com/docs

### Community
- **GitHub Issues**: Report bugs dan request features
- **GitHub Discussions**: Community support
- **Email**: support@oasis-v4.com (coming soon)

---

## 🎉 SUCCESS!

Selamat! OASIS V4 Superintelligence Ecosystem Anda sekarang live dan siap menghasilkan revenue!

**Next Steps**:
1. ✅ Customize branding dan content
2. ✅ Create digital assets di DACOO
3. ✅ Setup growth strategies di AEGM  
4. ✅ Monitor outcomes di OVS
5. ✅ Launch marketplace products
6. ✅ Deploy AI agents
7. ✅ Start generating revenue! 💰

---

**Built with ❤️ | Deployed via 📱 Mobile | 100% Free Infrastructure | The Proven Money Machine 💰**
