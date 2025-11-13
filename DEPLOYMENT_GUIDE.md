# 🚀 OASIS V4 - DEPLOYMENT GUIDE

## 📋 Deployment Checklist

Panduan lengkap untuk deploy OASIS V4 ke production dengan Vercel.

---

## ✅ Pre-Deployment Checklist

### 1. Code & Documentation
- [x] README.md completed
- [x] BUSINESS_MODEL.md documented
- [x] MIDTRANS_REQUIREMENTS.md prepared
- [x] All legal pages (Terms, Privacy, Refund) complete
- [x] Contact information verified
- [x] .env.local configured
- [x] All features tested locally

### 2. Environment Variables Prepared
- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `NEXT_PUBLIC_MIDTRANS_CLIENT_KEY`
- [ ] `NEXT_PUBLIC_MIDTRANS_ENV` (sandbox/production)
- [ ] `NEXT_PUBLIC_APP_URL`
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL`
- [ ] `NEXT_PUBLIC_CONTACT_PHONE`

### 3. Git Repository
- [x] All changes committed
- [ ] Pushed to GitHub
- [ ] Repository is accessible
- [ ] No sensitive data in commits

### 4. Domain & SSL
- [ ] Domain name decided (optional, can use vercel.app)
- [ ] SSL certificate (auto-provided by Vercel)

---

## 🌐 DEPLOYMENT TO VERCEL

### Step 1: Install Vercel CLI (if not already)

```bash
npm i -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Pilih salah satu method:
- Continue with GitHub
- Continue with GitLab
- Continue with Bitbucket
- Continue with Email

### Step 3: Navigate to Project Directory

```bash
cd /home/user/webapp
```

### Step 4: Initialize Vercel Project

```bash
vercel
```

Anda akan ditanya:
- **Set up and deploy?** → Y (Yes)
- **Which scope?** → Pilih personal account atau team
- **Link to existing project?** → N (No, jika pertama kali)
- **What's your project's name?** → `oasis-v4` (atau nama lain)
- **In which directory is your code located?** → `./` (root directory)
- **Want to override settings?** → N (No, gunakan auto-detect)

Vercel akan:
1. Detect Next.js project
2. Build project
3. Deploy to temporary URL
4. Return preview URL

### Step 5: Configure Environment Variables

Ada 2 cara:

#### Option A: Via Vercel CLI

```bash
# Set environment variables satu per satu
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Paste value ketika diminta

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add NEXT_PUBLIC_MIDTRANS_CLIENT_KEY
vercel env add NEXT_PUBLIC_MIDTRANS_ENV
vercel env add NEXT_PUBLIC_APP_URL
vercel env add NEXT_PUBLIC_CONTACT_EMAIL
vercel env add NEXT_PUBLIC_CONTACT_PHONE
```

#### Option B: Via Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project (oasis-v4)
3. Click "Settings" tab
4. Click "Environment Variables"
5. Add each variable:
   - Key: Variable name
   - Value: Variable value
   - Environment: Production, Preview, Development

**Variables to Add:**

```
NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY = SB-Mid-client-your-key (sandbox) or Mid-client-your-key (production)
NEXT_PUBLIC_MIDTRANS_ENV = sandbox (or production)
NEXT_PUBLIC_APP_URL = https://oasis-v4.vercel.app (or your custom domain)
NEXT_PUBLIC_CONTACT_EMAIL = elfaress2425@gmail.com
NEXT_PUBLIC_CONTACT_PHONE = +6285712658316
```

### Step 6: Deploy to Production

```bash
# Deploy to production
vercel --prod
```

Atau dengan environment variables:

```bash
vercel --prod -e NEXT_PUBLIC_MIDTRANS_ENV=production
```

### Step 7: Verify Deployment

Setelah deployment selesai, Anda akan mendapat:
- **Production URL**: https://oasis-v4.vercel.app (atau custom domain)
- **Preview URL**: https://oasis-v4-xxxxx.vercel.app

Test website:
1. Buka production URL
2. Check semua pages loading
3. Test navigation
4. Verify contact information
5. Check legal pages
6. Test payment button (Midtrans Snap)

---

## 🔗 CONNECTING GITHUB REPOSITORY

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select "Import Git Repository"
4. Authorize GitHub access
5. Select repository: `Estes786/oacss.mdtrans.try.1`
6. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
7. Add Environment Variables
8. Click "Deploy"

**Benefits:**
- Auto-deploy on every git push
- Preview deployments untuk setiap branch
- Automatic builds
- CI/CD pipeline

### Option 2: Via Vercel CLI

```bash
cd /home/user/webapp

# Link to GitHub
vercel link

# Select "Link to existing project"
# Choose GitHub repository
# Select branch (main)
```

---

## 🔧 POST-DEPLOYMENT CONFIGURATION

### 1. Update App URL in Environment Variables

Setelah dapat production URL, update:

```bash
# Via CLI
vercel env rm NEXT_PUBLIC_APP_URL production
vercel env add NEXT_PUBLIC_APP_URL production
# Enter: https://oasis-v4.vercel.app (your actual URL)

# Redeploy
vercel --prod
```

### 2. Configure Custom Domain (Optional)

#### Via Vercel Dashboard:
1. Go to Project Settings → Domains
2. Add domain (e.g., `oasis.yourdomain.com`)
3. Follow DNS configuration steps:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A record pointing to Vercel IP
4. Wait for DNS propagation (5 minutes - 48 hours)
5. SSL certificate auto-generated

#### Via CLI:
```bash
vercel domains add oasis.yourdomain.com
```

### 3. Configure Production Midtrans

**When Ready for Production Payments:**

1. Get Production Credentials from Midtrans:
   - Client Key (not Sandbox)
   - Server Key (not Sandbox)

2. Update Environment Variables:
   ```bash
   vercel env rm NEXT_PUBLIC_MIDTRANS_CLIENT_KEY production
   vercel env add NEXT_PUBLIC_MIDTRANS_CLIENT_KEY production
   # Enter production client key: Mid-client-xxxxx
   
   vercel env rm NEXT_PUBLIC_MIDTRANS_ENV production
   vercel env add NEXT_PUBLIC_MIDTRANS_ENV production
   # Enter: production
   ```

3. Update Midtrans Snap Script URL in `app/layout.tsx`:
   ```typescript
   // Change from:
   src="https://app.sandbox.midtrans.com/snap/snap.js"
   
   // To:
   src="https://app.midtrans.com/snap/snap.js"
   ```

4. Redeploy:
   ```bash
   vercel --prod
   ```

---

## 📊 MONITORING & ANALYTICS

### Vercel Analytics

Enable built-in analytics:
1. Go to Project → Analytics
2. Enable Analytics
3. View real-time traffic data

### Custom Analytics

Add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🔒 SECURITY BEST PRACTICES

### 1. Environment Variables
- ✅ Never commit `.env.local` to git
- ✅ Use Vercel environment variables
- ✅ Separate sandbox and production keys
- ✅ Rotate keys regularly

### 2. API Security
- ✅ Use server-side API routes for sensitive operations
- ✅ Validate all inputs
- ✅ Implement rate limiting
- ✅ Use CORS properly

### 3. Content Security
- ✅ Use Content Security Policy (CSP)
- ✅ Enable HTTPS only
- ✅ Implement security headers

Add to `next.config.ts`:

```typescript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

---

## 🚨 TROUBLESHOOTING

### Build Fails

**Error: Module not found**
```bash
# Solution: Install missing dependencies
npm install
vercel --prod
```

**Error: Environment variable not found**
```bash
# Solution: Add missing env vars
vercel env add VARIABLE_NAME production
vercel --prod
```

### Runtime Errors

**500 Internal Server Error**
- Check Vercel function logs
- Verify environment variables
- Check Supabase connection
- Review error in Vercel dashboard → Deployments → Logs

**Midtrans not loading**
- Verify CLIENT_KEY is correct
- Check MIDTRANS_ENV setting
- Verify script URL (sandbox vs production)
- Check browser console for errors

### DNS Issues

**Domain not resolving**
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records in domain registrar
- Use `dig` command to check: `dig yourdomain.com`
- Check Vercel dashboard for DNS status

---

## 📈 PERFORMANCE OPTIMIZATION

### 1. Next.js Image Optimization

Already enabled by default in Next.js 15.

### 2. Enable Edge Functions

Deploy Edge Functions untuk faster responses:

```typescript
// app/api/example/route.ts
export const runtime = 'edge';

export async function GET() {
  return Response.json({ message: 'Hello from Edge!' });
}
```

### 3. Enable Incremental Static Regeneration (ISR)

For pages that don't change often:

```typescript
// app/pricing/page.tsx
export const revalidate = 3600; // Revalidate every hour
```

### 4. Optimize Bundle Size

```bash
# Analyze bundle
npm run build

# Check bundle size in terminal output
```

---

## 🔄 CONTINUOUS DEPLOYMENT

### Auto-Deploy on Git Push

**Already enabled if using Vercel + GitHub integration.**

Workflow:
1. Make changes locally
2. Commit to git: `git commit -m "feat: new feature"`
3. Push to GitHub: `git push origin main`
4. Vercel auto-detects push
5. Automatic build & deploy
6. Get notification when complete

### Preview Deployments

**Automatically created for:**
- Every git push to non-production branches
- Every pull request

**Benefits:**
- Test changes before production
- Share with team for review
- Unique URL per deployment

---

## 📝 DEPLOYMENT COMMANDS REFERENCE

### Vercel CLI Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List all deployments
vercel ls

# View deployment logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-url]

# List environment variables
vercel env ls

# Add environment variable
vercel env add [name]

# Remove environment variable
vercel env rm [name] [environment]

# View project info
vercel inspect [deployment-url]
```

---

## 🎯 FINAL VERIFICATION CHECKLIST

### Before Going Live

- [ ] All pages load correctly
- [ ] Legal pages complete (Terms, Privacy, Refund)
- [ ] Contact information accurate
- [ ] SSL certificate active (HTTPS)
- [ ] Environment variables set correctly
- [ ] Midtrans integration tested (sandbox mode first)
- [ ] Mobile responsive checked
- [ ] Performance acceptable (Lighthouse score > 80)
- [ ] Analytics tracking working
- [ ] Error monitoring setup
- [ ] Backup strategy in place

### After Going Live

- [ ] Monitor error rates
- [ ] Check analytics daily
- [ ] Test payment flow
- [ ] Monitor user feedback
- [ ] Review Vercel logs regularly
- [ ] Update documentation as needed

---

## 📞 SUPPORT

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Support: https://vercel.com/support

### Project Support
- Email: elfaress2425@gmail.com
- Phone: +62 857-1265-8316

---

## 📚 ADDITIONAL RESOURCES

### Vercel Documentation
- [Vercel Platform](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)

### Next.js Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

### Midtrans Resources
- [Midtrans Docs](https://docs.midtrans.com)
- [Snap Integration](https://docs.midtrans.com/en/snap/overview)

---

**Last Updated**: 2025-01-13  
**Version**: 1.0.0  
**Status**: Ready for Production 🚀
