import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Skips ESLint during builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // Leave empty unless a specific port is required
        pathname: '/**', // Allow all paths under the domain
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '', // Leave empty unless a specific port is required
        pathname: '/**', // Allow all paths under the domain
      },
    ],
  },
};

export default nextConfig;
