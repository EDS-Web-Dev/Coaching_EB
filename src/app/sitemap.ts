import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ktl-running.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/a-propos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/offres`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/confidentialite`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
