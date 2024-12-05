import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        
        "hostname": "assets.aceternity.com"
      },
      {
        "hostname": "images.unsplash.com"
      },
      {
        "hostname": "images.pexels.com"
      }
    ]
  }
};

export default nextConfig;
