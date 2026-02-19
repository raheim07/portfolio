/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 VERY IMPORTANT

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  basePath: '/portfolio', // 👈 replace with your repo name
}

export default nextConfig