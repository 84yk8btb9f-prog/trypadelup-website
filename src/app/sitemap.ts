import type { MetadataRoute } from "next";
import { AUDIENCE_SLUGS } from "./for/[audience]/data";
import { FEATURE_SLUGS } from "./features/[feature]/data";

const BASE_URL = "https://www.trypadelup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/invite`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const features: MetadataRoute.Sitemap = FEATURE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/features/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const audiences: MetadataRoute.Sitemap = AUDIENCE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/for/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...core, ...features, ...audiences];
}
