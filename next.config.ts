import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
    // AVIF first (smallest), WebP for browsers without AVIF support.
    formats: ["image/avif", "image/webp"],
    // Photos rarely change, so keep resized copies for 31 days.
    minimumCacheTTL: 2678400,
  },
  // Let browsers reuse photos, video and PDFs for a week instead of re-downloading them.
  async headers() {
    const cache = [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }];
    return ["/media/:path*", "/certificates/:path*", "/brand/:path*", "/:file(.*\\.pdf)"].map((source) => ({
      source,
      headers: cache,
    }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // The site lives at /en and /ar; the bare domain opens the English version.
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
