import type { MetadataRoute } from "next";

const siteUrl = "https://www.heroiclogistics.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/quote` },
  ];
}