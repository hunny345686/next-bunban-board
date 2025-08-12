import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // enables static HTML export
  assetPrefix: isProd ? "/next-kunban-board/" : "", // repo name
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next image optimization
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
