import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/boutique",
    "/airbnb",
    "/hotels",
    "/a-propos",
    "/contact",
    "/panier",
  ];

  return [
    ...pages.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${base}/boutique/${product.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
