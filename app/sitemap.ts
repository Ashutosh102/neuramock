import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://liftoff-steel.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://liftoff-steel.vercel.app/demo",
      lastModified: new Date(),
    },
  ];
}
