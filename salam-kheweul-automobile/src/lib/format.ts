import { SITE } from "@/lib/constants";
import { UNAVAILABLE } from "@/lib/vehicle";

export function formatPrice(
  amount: number | null | undefined,
  withCurrency = true,
): string {
  if (amount == null) return UNAVAILABLE;
  const formatted = new Intl.NumberFormat("fr-FR").format(amount);
  return withCurrency ? `${formatted} ${SITE.currencyLabel}` : formatted;
}

export function formatMileage(km: number | null | undefined): string {
  if (km == null) return UNAVAILABLE;
  return `${new Intl.NumberFormat("fr-FR").format(km)} km`;
}

export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${isoDate}T12:00:00`));
}

export function formatShortDate(isoDate: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${isoDate}T12:00:00`));
}

export function vehicleTitle(brand: string, model: string): string {
  return [brand, model].filter((part) => part.trim()).join(" ");
}

export function generateReference(prefix: string): string {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${stamp}-${rand}`;
}
