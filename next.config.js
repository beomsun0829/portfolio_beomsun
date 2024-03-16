/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "out",
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
