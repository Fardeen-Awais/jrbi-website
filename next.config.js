/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three'])
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'cdn.sanity.io',
   
      },
      {
        protocol: 'https',
        hostname:'lh3.googleusercontent.com',
      }
    ],
  },
}

module.exports = withTM()
module.exports = nextConfig
