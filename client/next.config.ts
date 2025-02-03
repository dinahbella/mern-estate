import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy requests starting with /api
        destination: "http://localhost:3000/api/:path*", // Proxy target
      },
    ];
  },
};

/* config options here */

export default nextConfig;
