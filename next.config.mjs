/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 ADD THIS
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
