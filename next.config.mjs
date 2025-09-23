import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.microlink.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/dev",
        permanent: false, // kalau nanti portfolionya udah jadi, gampang dicabut
      },
      {
        source: "/info",
        destination: "/dev",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
