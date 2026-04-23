import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security headers that also signal trust to search engines
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache fonts from public dir
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Compress responses — helps TTFB
  compress: true,

  // Strict mode for better React hygiene
  reactStrictMode: true,

  // Image optimization — helps LCP
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      { hostname: "tools.applemediaservices.com" },
      { hostname: "i.pravatar.cc" },
    ],
  },

  async redirects() {
    return [
      // Legacy prototype landing page — consolidate to homepage so Google
      // drops the duplicate and any external backlinks still work.
      {
        source: "/landing.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
