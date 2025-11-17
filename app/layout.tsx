import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OASIS Analytics - Real-Time Business Intelligence Platform',
  description: 'Enterprise-grade Business Intelligence platform for Indonesian digital businesses - Real-time analytics, AI-powered insights, and unified dashboard with Midtrans payment integration',
  keywords: ['Business Intelligence', 'Analytics Platform', 'Real-time Dashboard', 'Data Analytics', 'Revenue Optimization', 'AI Insights', 'Midtrans Payment', 'SaaS BI', 'Enterprise Analytics'],
  authors: [{ name: 'OASIS Analytics Team' }],
  openGraph: {
    title: 'OASIS Analytics - Real-Time Business Intelligence Platform',
    description: 'Unified BI dashboard with AI-powered insights for digital businesses in Indonesia',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
          async
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
