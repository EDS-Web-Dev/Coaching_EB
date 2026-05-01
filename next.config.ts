import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "www.serfaus-fiss-ladis.at" },
      { hostname: "www.bone-joint.com" },
      { hostname: "static.wixstatic.com" },
      { hostname: "www.mountaineering.scot" },
      { hostname: "images.findarace.com" },
      { hostname: "images.uk.findarace.com" },
    ],
  },
};

export default nextConfig;
