import { SITE } from "@/lib/constants";
import { FUEL_LABELS, TRANSMISSION_LABELS } from "@/lib/constants";
import { vehicleDisplayName, vehiclePhotos } from "@/lib/vehicle";
import type { Vehicle } from "@/lib/types";

export function VehicleJsonLd({ vehicle }: { vehicle: Vehicle }) {
  const color =
    vehicle.colors.find((item) => item.id === vehicle.defaultColorId) ??
    vehicle.colors[0];
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: vehicleDisplayName(vehicle),
    brand: { "@type": "Brand", name: vehicle.brand },
    model: vehicle.model || undefined,
    image: vehiclePhotos(vehicle),
    url: `${SITE.url}/vehicules/${vehicle.slug}`,
  };

  if (vehicle.year) data.vehicleModelDate = String(vehicle.year);
  if (vehicle.mileage != null) {
    data.mileageFromOdometer = {
      "@type": "QuantitativeValue",
      value: vehicle.mileage,
      unitCode: "KMT",
    };
  }
  if (color?.name) data.color = color.name;
  if (vehicle.transmission) {
    data.vehicleTransmission = TRANSMISSION_LABELS[vehicle.transmission];
  }
  if (vehicle.fuel) data.fuelType = FUEL_LABELS[vehicle.fuel];
  if (vehicle.seats != null) data.seatingCapacity = vehicle.seats;
  if (vehicle.price != null) {
    data.offers = {
      "@type": "Offer",
      price: vehicle.price,
      priceCurrency: SITE.currency,
      availability:
        vehicle.availability === "disponible"
          ? "https://schema.org/InStock"
          : vehicle.availability === "vendu"
            ? "https://schema.org/SoldOut"
            : "https://schema.org/LimitedAvailability",
      url: `${SITE.url}/vehicules/${vehicle.slug}`,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: SITE.legalName,
    url: SITE.url,
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressCountry: SITE.country,
    },
    sameAs: [SITE.instagram, SITE.tiktok],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
