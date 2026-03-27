import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const baseUrl = rawBaseUrl.replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency,
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified,
      changeFrequency,
      priority: 0.7,
    })),
  ];
}
