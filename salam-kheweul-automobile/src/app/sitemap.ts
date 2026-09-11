import type { MetadataRoute } from "next";
import { vehicles } from "@/data/vehicles";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/vehicules",
    "/services",
    "/achat",
    "/a-propos",
    "/contact",
    "/informations",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const vehicleRoutes = vehicles.map((vehicle) => ({
    url: `${SITE.url}/vehicules/${vehicle.slug}`,
    lastModified: new Date(vehicle.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...vehicleRoutes];
}
