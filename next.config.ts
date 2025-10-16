import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: '/Users/elfovo/Desktop/DEV/Mondev',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
