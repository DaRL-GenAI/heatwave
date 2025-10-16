/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/deepshade-website',
  assetPrefix: '/deepshade-website/',   // 👈 important for CSS/JS paths
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // needed for static export
  },
}

export default nextConfig
