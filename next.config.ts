import withPWA from 'next-pwa';

const withPWAFunc = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yourdomain.com'],
  },
};

export default withPWAFunc(nextConfig);
