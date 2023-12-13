import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://neuramock-ai.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://neuramock-ai.vercel.app/demo",
      lastModified: new Date(),
    },
  ];
}
