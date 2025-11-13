import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OASIS V4 - Enterprise-Grade Superintelligence Ecosystem',
  description: 'The Proven Money Machine - Complete Business Intelligence Platform with Midtrans Payment Integration',
  keywords: ['AI', 'Business Intelligence', 'Revenue Optimization', 'Digital Assets', 'Growth Machine', 'Payment Gateway', 'Enterprise'],
  authors: [{ name: 'OASIS V4 Team' }],
  openGraph: {
    title: 'OASIS V4 - Enterprise-Grade Superintelligence Ecosystem',
    description: 'The Proven Money Machine - Complete Business Intelligence Platform',
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
