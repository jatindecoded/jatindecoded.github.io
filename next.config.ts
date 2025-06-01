import type { NextConfig } from "next";

const withExportImages = require('next-export-optimize-images')

const nextConfig: NextConfig = withExportImages({
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)\\.(png|jpg|jpeg|woff2|css|js|svg|ico)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable", // 7 days
          },
        ],
      },
    ];
  },
  // basePath: '/kenrax',
  // assetPrefix: '/kenrax/',
  // trailingSlash: true,
});

export default nextConfig;
