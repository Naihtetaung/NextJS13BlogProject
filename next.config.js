/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["images.pexels.com"],
    },
  };
  
  module.exports = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    ...nextConfig,
  };
  