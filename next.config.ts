import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bornovamobilya.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'bornovamobilya.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'www.istikbal.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'istikbal.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'www.forummobilya.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/bornovamobilya',
        destination: '/bornova-mobilya',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
