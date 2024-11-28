/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    images: { allowFutureImage: true },
  },
};

module.exports = nextConfig;
