import { SITE } from "@/lib/constants";
import type { Vehicle } from "@/lib/types";

export const UNAVAILABLE = "Non renseigné";

export function vehicleDisplayName(
  vehicle: Pick<Vehicle, "brand" | "model">,
): string {
  return [vehicle.brand, vehicle.model].filter((part) => part.trim()).join(" ");
}

export function vehiclePhotos(vehicle: Vehicle): string[] {
  if (vehicle.images.length) return vehicle.images;
  const color =
    vehicle.colors.find((item) => item.id === vehicle.defaultColorId) ??
    vehicle.colors[0];
  return color?.images ?? [];
}

export function vehicleMainImage(vehicle: Vehicle): string {
  return vehicle.mainImage || vehiclePhotos(vehicle)[0] || "";
}

export function vehicleArticle(brand: string): "le" | "la" {
  return brand.toLowerCase().startsWith("mercedes") ? "la" : "le";
}

export function vehicleInquiryMessage(vehicle: Vehicle): string {
  const name = vehicleDisplayName(vehicle);
  return `Bonjour, je suis intéressé(e) par ${vehicleArticle(vehicle.brand)} ${name}.`;
}

export function vehicleSeoTitle(vehicle: Vehicle): string {
  return `${vehicleDisplayName(vehicle)} | ${SITE.name}`;
}

export function vehicleSeoDescription(vehicle: Vehicle): string {
  return `Découvrez ${vehicleDisplayName(vehicle)} chez ${SITE.name}.`;
}
