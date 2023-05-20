/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/advertisement',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
