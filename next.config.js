/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'cdn.sanity.io',
      }
    ],
  },
}

module.exports = nextConfig
