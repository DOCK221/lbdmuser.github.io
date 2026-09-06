import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.trycloudflare.com"],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [{ source: "/location", destination: "/", permanent: true }];
  },
};

export default nextConfig;
