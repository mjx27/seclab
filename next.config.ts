import path from 'path';

import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    const aliases: Record<string, string> = {
      '@': path.resolve(__dirname, 'src'),
    };

    const newConfig: Configuration = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...aliases,
        },
      },
    };

    if (!isServer) {
      newConfig.resolve = {
        ...newConfig.resolve,
        fallback: {
          ...newConfig.resolve?.fallback,
          fs: false,
          path: false,
        },
      };
    }

    return newConfig;
  },
};

export default nextConfig;
