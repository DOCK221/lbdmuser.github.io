import { SITE } from "@/lib/constants";
import type { Vehicle } from "@/lib/types";

export function VehicleJsonLd({ vehicle }: { vehicle: Vehicle }) {
  const color =
    vehicle.colors.find((item) => item.id === vehicle.defaultColorId) ??
    vehicle.colors[0];
  const data = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: `${vehicle.brand} ${vehicle.model}`,
    brand: { "@type": "Brand", name: vehicle.brand },
    model: vehicle.model,
    vehicleModelDate: String(vehicle.year),
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: vehicle.mileage,
      unitCode: "KMT",
    },
    color: color?.name,
    vehicleTransmission: vehicle.transmission,
    fuelType: vehicle.fuel,
    seatingCapacity: vehicle.seats,
    image: color?.images ?? [],
    offers: {
      "@type": "Offer",
      price: vehicle.price,
      priceCurrency: SITE.currency,
      availability:
        vehicle.availability === "disponible"
          ? "https://schema.org/InStock"
          : vehicle.availability === "vendu"
            ? "https://schema.org/SoldOut"
            : "https://schema.org/PreOrder",
      url: `${SITE.url}/vehicules/${vehicle.slug}`,
    },
  };

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
