import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://brasserie-le-ste-foy.fr";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/histoire`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reservation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
