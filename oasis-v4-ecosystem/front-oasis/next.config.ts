import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '**.huggingface.co',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'OASIS V4',
    NEXT_PUBLIC_APP_VERSION: '4.0.0',
  },
};

export default nextConfig;
