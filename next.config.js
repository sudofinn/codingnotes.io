/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=370406&theme=dark'],
  },
}

module.exports = nextConfig
