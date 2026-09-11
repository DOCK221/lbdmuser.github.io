import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["*.trycloudflare.com"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
