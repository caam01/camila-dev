/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
   experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}


export default nextConfig
