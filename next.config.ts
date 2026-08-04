import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Hides the Next.js dev-mode route/build indicator badge. It never appears in
  // production builds anyway — this just keeps local dev preview visually clean.
  devIndicators: false,
};

export default nextConfig;
