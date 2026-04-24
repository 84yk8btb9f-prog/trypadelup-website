import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        crawlDelay: 2,
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
      // AI crawlers — keep open for citation & retrieval in AI answers
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: "https://www.trypadelup.com/sitemap.xml",
    host: "https://www.trypadelup.com",
  };
}
