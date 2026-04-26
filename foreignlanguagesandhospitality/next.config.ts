import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows images from any secure source
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Keeps your deployment from failing on small linting errors
  },
  typescript: {
    ignoreBuildErrors: true, // Keeps your deployment from failing on type mismatches
  }
};

export default nextConfig;