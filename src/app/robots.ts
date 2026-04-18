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
        // Give Bingbot a crawl delay to be a considerate host
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1,
      },
    ],
    sitemap: "https://www.trypadelup.com/sitemap.xml",
  };
}
