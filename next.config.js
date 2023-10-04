/** @type {import('next').NextConfig} */
const nextConfig = {  
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chris-n.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
