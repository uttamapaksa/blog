import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  output: 'export',
};

export default nextConfig;
