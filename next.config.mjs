/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    devIndicators: false,
    reactStrictMode: false,
};

export default nextConfig;