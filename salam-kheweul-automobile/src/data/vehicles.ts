import { SITE } from "@/lib/constants";
import type { SocialPost, Vehicle, VehicleColor } from "@/lib/types";
import { vehicleDisplayName } from "@/lib/vehicle";

/**
 * Catalogue centralisé.
 * Pour ajouter une voiture :
 * 1. Déposer les photos dans /public/vehicles/<slug>/
 * 2. Ajouter une entrée via stock() ci-dessous
 * 3. Le véhicule apparaît automatiquement dans le catalogue, l’accueil et le SEO
 *
 * Ne renseigner que les informations fournies (notes, fichiers, badges visibles).
 * Laisser null / "" plutôt que d’inventer un prix, un kilométrage ou un moteur.
 */
type StockInput = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year?: number | null;
  price?: number | null;
  mileage?: number | null;
  fuel?: Vehicle["fuel"];
  transmission?: Vehicle["transmission"];
  engine?: string;
  power?: string;
  seats?: number | null;
  condition?: Vehicle["condition"];
  origin?: string;
  availability?: Vehicle["availability"];
  category?: Vehicle["category"];
  description?: string;
  exteriorColor?: string;
  interiorColor?: string;
  color?: Pick<VehicleColor, "id" | "name" | "hex">;
  features?: string[];
  photoDir: string;
  photos: string[];
  isNewArrival?: boolean;
  createdAt?: string;
};

function stock(input: StockInput): Vehicle {
  const images = input.photos.map(
    (file) => `/vehicles/${input.photoDir}/${file}`,
  );
  const colorMeta = input.color ?? {
    id: "unique",
    name: input.exteriorColor || "Non renseigné",
    hex: "#8A8D91",
  };
  const colors: VehicleColor[] = [{ ...colorMeta, images }];
  return {
    id: input.id,
    slug: input.slug,
    brand: input.brand,
    model: input.model,
    year: input.year ?? null,
    price: input.price ?? null,
    currency: "FCFA",
    mileage: input.mileage ?? null,
    fuel: input.fuel ?? null,
    transmission: input.transmission ?? null,
    engine: input.engine ?? "",
    power: input.power ?? "",
    seats: input.seats ?? null,
    condition: input.condition ?? null,
    origin: input.origin ?? "",
    availability: input.availability ?? "",
    category: input.category ?? "",
    description: input.description ?? "",
    exteriorColor: input.exteriorColor ?? "",
    interiorColor: input.interiorColor ?? "",
    colors,
    defaultColorId: colorMeta.id,
    images,
    mainImage: images[0] ?? "",
    features: input.features ?? [],
    isNewArrival: input.isNewArrival ?? true,
    createdAt: input.createdAt ?? "2026-09-06",
  };
}

export const vehicles: Vehicle[] = [
  stock({
    id: "vehicle-001",
    slug: "bmw-x5-2020",
    brand: "BMW",
    model: "X5",
    year: 2020,
    price: 30_000_000,
    fuel: "essence",
    transmission: "automatique",
    category: "suv",
    exteriorColor: "Noir",
    color: { id: "noir", name: "Noir", hex: "#0B0B0C" },
    features: ["Full option"],
    photoDir: "bmw-x5-2020",
    photos: [
      "bmw-x5-2020-front.jpg",
      "bmw-x5-2020-angle.jpg",
      "bmw-x5-2020-side.jpg",
      "bmw-x5-2020-04.jpg",
      "bmw-x5-2020-interior.jpg",
      "bmw-x5-2020-06.jpg",
    ],
  }),
  stock({
    id: "vehicle-002",
    slug: "toyota-fortuner-2024",
    brand: "Toyota",
    model: "Fortuner",
    year: 2024,
    price: 40_000_000,
    fuel: "essence",
    transmission: "automatique",
    seats: 7,
    category: "suv",
    exteriorColor: "Blanc",
    color: { id: "blanc", name: "Blanc", hex: "#F4F1EA" },
    features: ["Full option"],
    photoDir: "toyota-fortuner-2024",
    photos: [
      "toyota-fortuner-front.jpg",
      "toyota-fortuner-angle.jpg",
      "toyota-fortuner-side.jpg",
      "toyota-fortuner-04.jpg",
      "toyota-fortuner-interior.jpg",
      "toyota-fortuner-06.jpg",
    ],
  }),
  stock({
    id: "vehicle-003",
    slug: "bmw-x5-2019",
    brand: "BMW",
    model: "X5",
    year: 2019,
    price: 30_000_000,
    category: "suv",
    exteriorColor: "Blanc",
    color: { id: "blanc", name: "Blanc", hex: "#F4F1EA" },
    features: ["Pack M", "Full option"],
    photoDir: "bmw-x5-2019",
    photos: [
      "bmw-x5-2019-front.jpg",
      "bmw-x5-2019-angle.jpg",
      "bmw-x5-2019-side.jpg",
      "bmw-x5-2019-04.jpg",
      "bmw-x5-2019-interior.jpg",
      "bmw-x5-2019-06.jpg",
    ],
  }),
  stock({
    id: "vehicle-004",
    slug: "mercedes-gle-53-amg-2021",
    brand: "Mercedes-Benz",
    model: "GLE 53 AMG",
    year: 2021,
    price: 57_000_000,
    fuel: "essence",
    transmission: "automatique",
    category: "suv",
    exteriorColor: "Blanc",
    color: { id: "blanc", name: "Blanc", hex: "#F4F1EA" },
    features: ["Full option"],
    photoDir: "mercedes-gle-53-amg-2021",
    photos: [
      "mercedes-gle-53-amg-front.jpg",
      "mercedes-gle-53-amg-side.jpg",
      "mercedes-gle-53-amg-03.jpg",
      "mercedes-gle-53-amg-04.jpg",
    ],
  }),
  stock({
    id: "vehicle-005",
    slug: "mercedes-glc-2026",
    brand: "Mercedes-Benz",
    model: "GLC",
    year: 2026,
    price: 45_000_000,
    fuel: "essence",
    transmission: "automatique",
    category: "suv",
    exteriorColor: "Noir",
    color: { id: "noir", name: "Noir", hex: "#0B0B0C" },
    features: ["Full option"],
    photoDir: "mercedes-glc-2026",
    photos: [
      "mercedes-glc-front.jpg",
      "mercedes-glc-angle.jpg",
      "mercedes-glc-side.jpg",
      "mercedes-glc-04.jpg",
      "mercedes-glc-interior.jpg",
      "mercedes-glc-06.jpg",
    ],
  }),
  stock({
    id: "vehicle-006",
    slug: "samsung-qm6-2017",
    brand: "Samsung",
    model: "QM6",
    year: 2017,
    price: 10_000_000,
    fuel: "diesel",
    transmission: "automatique",
    category: "suv",
    exteriorColor: "Noir",
    color: { id: "noir", name: "Noir", hex: "#0B0B0C" },
    photoDir: "samsung-qm6-2017",
    photos: [
      "samsung-qm6-front.jpg",
      "samsung-qm6-angle.jpg",
      "samsung-qm6-side.jpg",
      "samsung-qm6-04.jpg",
      "samsung-qm6-interior.jpg",
      "samsung-qm6-06.jpg",
    ],
  }),
  stock({
    id: "vehicle-007",
    slug: "geely-2023",
    brand: "Geely",
    model: "",
    year: 2023,
    price: 17_000_000,
    fuel: "essence",
    transmission: "automatique",
    category: "suv",
    exteriorColor: "Noir",
    color: { id: "noir", name: "Noir", hex: "#0B0B0C" },
    features: ["Full option"],
    photoDir: "geely-2023",
    photos: [
      "geely-front.jpg",
      "geely-angle.jpg",
      "geely-side.jpg",
      "geely-rear.jpg",
      "geely-05.jpg",
      "geely-06.jpg",
    ],
  }),
  stock({
    id: "vehicle-008",
    slug: "toyota-frontlander-2023",
    brand: "Toyota",
    model: "Frontlander",
    year: 2023,
    price: 18_000_000,
    fuel: "essence",
    transmission: "automatique",
    category: "suv",
    exteriorColor: "Blanc",
    color: { id: "blanc", name: "Blanc", hex: "#F4F1EA" },
    features: ["Full option"],
    photoDir: "toyota-frontlander-2023",
    photos: [
      "toyota-frontlander-front.jpg",
      "toyota-frontlander-angle.jpg",
      "toyota-frontlander-03.jpg",
      "toyota-frontlander-04.jpg",
      "toyota-frontlander-interior.jpg",
      "toyota-frontlander-06.jpg",
      "toyota-frontlander-rear.jpg",
    ],
  }),
];

export const socialPosts: SocialPost[] = vehicles.slice(0, 6).map((vehicle, index) => ({
  id: `social-${vehicle.id}`,
  platform: index % 2 === 0 ? "instagram" : "tiktok",
  image: vehicle.mainImage,
  caption: vehicleDisplayName(vehicle),
  href: index % 2 === 0 ? SITE.instagram : SITE.tiktok,
  date: vehicle.createdAt,
}));

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((vehicle) => vehicle.id === id);
}

export function getFeaturedVehicles(limit = 6): Vehicle[] {
  return [...vehicles]
    .filter((vehicle) => vehicle.availability !== "vendu")
    .sort((a, b) => (a.isNewArrival === b.isNewArrival ? 0 : a.isNewArrival ? -1 : 1))
    .slice(0, limit);
}

export function getRentalVehicles(): Vehicle[] {
  return vehicles.filter((vehicle) => vehicle.rental?.available);
}

export function getRelatedVehicles(vehicle: Vehicle, limit = 3): Vehicle[] {
  return vehicles
    .filter((item) => item.id !== vehicle.id && item.availability !== "vendu")
    .sort((a, b) => {
      const score = (item: Vehicle) =>
        (item.category && item.category === vehicle.category ? 2 : 0) +
        (item.brand === vehicle.brand ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}

export function filterVehicles(
  list: Vehicle[],
  filters: {
    brand?: string;
    model?: string;
    minPrice?: number;
    maxPrice?: number;
    year?: number;
    fuel?: string;
    transmission?: string;
    query?: string;
    sort?: string;
    rentalOnly?: boolean;
  },
): Vehicle[] {
  let result = [...list];

  if (filters.rentalOnly) {
    result = result.filter((vehicle) => vehicle.rental?.available);
  }
  if (filters.brand) {
    result = result.filter((vehicle) => vehicle.brand === filters.brand);
  }
  if (filters.model) {
    const needle = filters.model.toLowerCase();
    result = result.filter((vehicle) =>
      vehicle.model.toLowerCase().includes(needle),
    );
  }
  if (filters.minPrice) {
    result = result.filter(
      (vehicle) => vehicle.price != null && vehicle.price >= filters.minPrice!,
    );
  }
  if (filters.maxPrice) {
    result = result.filter(
      (vehicle) => vehicle.price != null && vehicle.price <= filters.maxPrice!,
    );
  }
  if (filters.year) {
    result = result.filter((vehicle) => vehicle.year === filters.year);
  }
  if (filters.fuel) {
    result = result.filter((vehicle) => vehicle.fuel === filters.fuel);
  }
  if (filters.transmission) {
    result = result.filter(
      (vehicle) => vehicle.transmission === filters.transmission,
    );
  }
  if (filters.query) {
    const q = filters.query.toLowerCase();
    result = result.filter((vehicle) =>
      `${vehicle.brand} ${vehicle.model} ${vehicle.year ?? ""}`
        .toLowerCase()
        .includes(q),
    );
  }

  const withPrice = (value: number | null) => value ?? Number.POSITIVE_INFINITY;
  const withYear = (value: number | null) => value ?? 0;

  switch (filters.sort) {
    case "price_asc":
      result.sort((a, b) => withPrice(a.price) - withPrice(b.price));
      break;
    case "price_desc":
      result.sort((a, b) => withPrice(b.price) - withPrice(a.price));
      break;
    case "year_asc":
      result.sort((a, b) => withYear(a.year) - withYear(b.year));
      break;
    case "year_desc":
      result.sort((a, b) => withYear(b.year) - withYear(a.year));
      break;
    case "newest":
    default:
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }

  return result;
}
