/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/seedv3',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

export default nextConfig;
