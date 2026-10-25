/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.thedogapi.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
