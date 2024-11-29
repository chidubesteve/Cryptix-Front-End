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
   webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/, // Match audio file types
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/media", // Public path for served files
            outputPath: "static/media", // Output directory
            name: "[name].[hash].[ext]", // Naming pattern
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
