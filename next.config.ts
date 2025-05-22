import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '/kenrax',
  assetPrefix: '/kenrax/',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
