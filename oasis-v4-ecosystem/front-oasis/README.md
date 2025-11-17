# 🎨 OASIS V4 Frontend - Next.js 15 Application

Frontend application untuk OASIS V4 Superintelligence Ecosystem, dibangun dengan Next.js 15, React 19, TypeScript, dan TailwindCSS.

## 📁 Project Structure

```
front-oasis/
├── app/                      # Next.js 15 App Router
│   ├── page.tsx             # Landing page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── dashboard/           # Dashboard pages
│   ├── marketplace/         # Marketplace pages
│   ├── analytics/           # Analytics pages
│   ├── agents/              # AI Agents pages
│   └── settings/            # Settings pages
├── components/              # React components
│   ├── ui/                  # UI components
│   ├── dashboard/           # Dashboard components
│   ├── trinity-moat/        # DACOO, AEGM, OVS components
│   └── marketplace/         # Marketplace components
├── lib/                     # Utilities & libraries
│   ├── supabase.ts          # Supabase client & helpers
│   └── huggingface.ts       # HuggingFace AI integration
├── public/                  # Static assets
├── styles/                  # Additional styles
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🚀 Quick Start

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_HF_API_TOKEN=your_huggingface_token
   NEXT_PUBLIC_DOKU_CLIENT_ID=your_doku_client_id
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Features

### Landing Page
- Hero section dengan stats
- Trinity MOAT showcase
- Features overview
- Pricing (coming soon)
- Responsive design

### Dashboard
- Overview dengan real-time stats
- Trinity MOAT access (DACOO, AEGM, OVS)
- Marketplace integration
- Analytics visualization
- AI Agents management
- Settings panel

### Trinity MOAT Integration
- **DACOO**: Goal creation, task management, asset generation
- **AEGM**: Growth analytics, A/B testing, journey optimization
- **OVS**: Outcome verification, channel tracking, ROI reporting

## 🔌 API Integration

### Supabase (Backend + Database)
```typescript
import { supabase, dacoo, aegm, ovs } from '@/lib/supabase';

// Example: Create goal
const goal = await dacoo.createGoal({
  user_id: user.id,
  title: 'Increase Revenue',
  target_revenue: 10000,
  status: 'planning'
});
```

### HuggingFace (AI Features)
```typescript
import { oasisAI } from '@/lib/huggingface';

// Example: Decompose goal with AI
const { data } = await oasisAI.dacoo.decomposeGoal(
  'Launch digital product marketplace',
  10000
);
```

## 🎨 Styling

### TailwindCSS
- Custom color palette (primary, secondary)
- Responsive utilities
- Dark mode support
- Custom animations

### Components
- Modular component architecture
- Reusable UI components
- Consistent design system

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly interfaces
- Mobile-first approach
- Progressive Web App ready

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository di Vercel
3. Set root directory: `front-oasis`
4. Add environment variables
5. Deploy!

### Manual Deployment
```bash
npm run build
# Deploy ./out or .next folder
```

## 🔐 Environment Variables

Required environment variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# HuggingFace
NEXT_PUBLIC_HF_API_URL=https://api-inference.huggingface.co
NEXT_PUBLIC_HF_API_TOKEN=hf_xxx...

# DOKU Payment
NEXT_PUBLIC_DOKU_CLIENT_ID=BRN-xxx-xxx

# App Config
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NEXT_PUBLIC_API_URL=https://your-app.vercel.app/api
```

## 📊 Performance

- **Lighthouse Score**: 90+ (target)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Bundle Size**: Optimized with Next.js

## 🧪 Testing

```bash
# Run tests
npm test

# Run linting
npm run lint
```

## 📚 Documentation

- **API Documentation**: `/docs/api`
- **Component Guide**: `/docs/components`
- **Deployment Guide**: `/docs/MOBILE-DEPLOYMENT-GUIDE.md`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📄 License

Proprietary - All rights reserved © 2025 OASIS V4

---

**Built with Next.js 15 + React 19 + TypeScript + TailwindCSS**
