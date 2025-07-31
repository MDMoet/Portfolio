import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // For development, don't use standalone output
  ...(process.env.NODE_ENV === 'production' && { output: 'standalone' }),
  
  // Enable file watching in Docker
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
