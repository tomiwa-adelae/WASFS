/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                port: ''
            },
             {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: ''
            },
            ]
    }

};

export default nextConfig;
