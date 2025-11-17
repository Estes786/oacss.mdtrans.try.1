import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OASIS V4 - Superintelligence Ecosystem',
  description: 'The Proven Money Machine - Unified Intelligent Business Ecosystem Platform',
  keywords: ['AI', 'Business Intelligence', 'Revenue Optimization', 'Digital Assets', 'Growth Machine'],
  authors: [{ name: 'OASIS V4 Team' }],
  openGraph: {
    title: 'OASIS V4 - Superintelligence Ecosystem',
    description: 'The Proven Money Machine - Unified Intelligent Business Ecosystem Platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
          {children}
        </div>
      </body>
    </html>
  );
}
