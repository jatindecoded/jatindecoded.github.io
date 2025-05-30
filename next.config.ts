import type { NextConfig } from "next";

const withExportImages = require('next-export-optimize-images')

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = withExportImages({
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  // basePath: '/kenrax',
  // assetPrefix: '/kenrax/',
  // trailingSlash: true,
});

export default nextConfig;
