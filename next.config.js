/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "s3.app.zerops.io"],
  },
}

module.exports = nextConfig
