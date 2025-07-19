import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'], // ajoute ici tous les domaines externes utilisés
  },
};

export default nextConfig;
