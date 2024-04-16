/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_APIURL: "http://localhost:8080/api/v1",
        NEXTAUTH_SECRET: "zLyzifwhhTMnpaER8oTDyCnF8iQRSLRsta7xq7WhWbc=",
        GITHUB_SECRET: "54e0b63ab1462d1b4134368ad84937975c0cfa9f",
        GITHUB_ID: "27b2c87493b67d537ff5",
    },
};

export default nextConfig;
