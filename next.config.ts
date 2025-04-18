import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.verticalclick.us',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
