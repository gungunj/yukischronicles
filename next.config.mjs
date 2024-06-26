/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/repository/' : '',
  basePath: isProd ? '/repository' : '',
};

export default nextConfig;
