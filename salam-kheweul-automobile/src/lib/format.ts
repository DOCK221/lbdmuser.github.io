import { SITE } from "@/lib/constants";

export function formatPrice(amount: number, withCurrency = true): string {
  const formatted = new Intl.NumberFormat("fr-FR").format(amount);
  return withCurrency ? `${formatted} ${SITE.currencyLabel}` : formatted;
}

export function formatMileage(km: number): string {
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
  return `${brand} ${model}`;
}

export function generateReference(prefix: string): string {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${stamp}-${rand}`;
}
