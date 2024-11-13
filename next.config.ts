import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, must-revalidate',
          },
        ],
      },
    ];
  },
  transpilePackages: ['next-mdx-remote'],
  images: {
    minimumCacheTTL: 604800,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-*',
      },
      {
        protocol: 'https',
        hostname: 'contents.kyobobook.co.kr',
        port: '',
        pathname: '/sih/fit-in/458x0/pdt/*',
      },
    ],
  },
};

export default nextConfig;
