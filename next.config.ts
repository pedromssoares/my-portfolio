import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["raw.githubusercontent.com", "private-user-images.githubusercontent.com", "encrypted-tbn0.gstatic.com", "github.com", "images.unsplash.com"],
  },
};

export default nextConfig;
