/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['localhost:3000', 'localhost'],
  }, 
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, stream: false, constants: false };
    return config;
  }
}
module.exports = nextConfig
