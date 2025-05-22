import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: isProd ? '/business-site' : '',
  assetPrefix: isProd ? '/business-site/' : '',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
