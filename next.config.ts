import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.onthebeach.co.uk",
      },
    ],
  },
};

export default nextConfig;
