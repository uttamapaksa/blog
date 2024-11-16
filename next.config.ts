import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  transpilePackages: ['next-mdx-remote'],
  images: {
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
