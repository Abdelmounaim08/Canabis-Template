import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'lagazettefrance.fr',
      'www.lagazettefrance.fr' // ✅ ajoutez ce sous-domaine
    ],
  },
};

export default nextConfig;
