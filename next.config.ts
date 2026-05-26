import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/profile",
  assetPrefix: "/profile",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
