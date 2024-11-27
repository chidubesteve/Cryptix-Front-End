/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: { allowFutureImage: true, formats: ["image/webp", "image/avif"] },
  },
};

module.exports = nextConfig;
