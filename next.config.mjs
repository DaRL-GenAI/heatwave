/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/heatwave',
  assetPrefix: '/heatwave/',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
