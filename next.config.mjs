/** @type {import('next').NextConfig} */
module.exports = {
    output: "export",
};

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.imgur.com",
                port: "",
                pathname: "/**",
            },
        ],
    }
};

export default nextConfig;
