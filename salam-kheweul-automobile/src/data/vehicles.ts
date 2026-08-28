import type { SocialPost, Vehicle } from "@/lib/types";

function img(id: string, w = 1800): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const vehicles: Vehicle[] = [
  {
    id: "veh-001",
    slug: "mercedes-benz-classe-c-300-2022",
    brand: "Mercedes-Benz",
    model: "Classe C 300",
    year: 2022,
    price: 28900000,
    mileage: 28400,
    fuel: "essence",
    transmission: "automatique",
    engine: "2.0L turbo 4 cylindres",
    power: "258 ch",
    seats: 5,
    condition: "excellent",
    origin: "Europe",
    availability: "disponible",
    category: "berline",
    description:
      "Une berline d’exception, signature de l’élégance Mercedes-Benz. Intérieur cuir, éclairage d’ambiance, conduite fluide et silence de roulement. Idéale pour Dakar comme pour les longs trajets.",
    defaultColorId: "noir",
    isNewArrival: true,
    createdAt: "2026-08-12",
    colors: [
      {
        id: "noir",
        name: "Noir obsidienne",
        hex: "#0B0B0C",
        images: [
          img("photo-1485291571150-772bcfc10da5"),
          img("photo-1617531653332-bd46c24f2068"),
          img("photo-1605559424843-9e4c228bf1c2"),
        ],
      },
      {
        id: "blanc",
        name: "Blanc polaire",
        hex: "#F4F1EA",
        images: [
          img("photo-1549317661-bd32c8ce0db2"),
          img("photo-1485291571150-772bcfc10da5"),
        ],
      },
      {
        id: "gris",
        name: "Gris sélénite",
        hex: "#8A8D91",
        images: [
          img("photo-1617531653332-bd46c24f2068"),
          img("photo-1485291571150-772bcfc10da5"),
        ],
      },
    ],
    features: [
      "Climatisation bi-zone",
      "Caméra 360°",
      "GPS MBUX",
      "Sièges cuir",
      "Toit ouvrant panoramique",
      "Apple CarPlay / Android Auto",
      "Bluetooth",
      "Aide au stationnement",
      "Phares LED Multibeam",
      "Régulateur adaptatif",
    ],
    video: {
      title: "Présentation Classe C 300",
      poster: img("photo-1485291571150-772bcfc10da5", 1400),
    },
    rental: {
      available: true,
      dailyRate: 85000,
      weeklyRate: 490000,
      deposit: 500000,
    },
  },
  {
    id: "veh-002",
    slug: "toyota-land-cruiser-prado-2021",
    brand: "Toyota",
    model: "Land Cruiser Prado",
    year: 2021,
    price: 39500000,
    mileage: 41200,
    fuel: "diesel",
    transmission: "automatique",
    engine: "2.8L turbo diesel",
    power: "204 ch",
    seats: 7,
    condition: "excellent",
    origin: "Japon",
    availability: "disponible",
    category: "suv",
    description:
      "L’icône de la route sénégalaise. Robustesse légendaire, habitabilité sept places et confort premium. Un SUV de prestige, prêt pour la ville comme pour l’intérieur du pays.",
    defaultColorId: "blanc",
    isNewArrival: false,
    createdAt: "2026-07-28",
    colors: [
      {
        id: "blanc",
        name: "Blanc nacre",
        hex: "#F6F4EE",
        images: [
          img("photo-1533473359331-0135ef1b58bf"),
          img("photo-1519641471654-76ce0107ad1b"),
        ],
      },
      {
        id: "noir",
        name: "Noir attitude",
        hex: "#111111",
        images: [
          img("photo-1519641471654-76ce0107ad1b"),
          img("photo-1533473359331-0135ef1b58bf"),
        ],
      },
      {
        id: "gris",
        name: "Gris graphite",
        hex: "#6E7176",
        images: [
          img("photo-1563720360172-67b8f3dce741"),
          img("photo-1533473359331-0135ef1b58bf"),
        ],
      },
    ],
    features: [
      "Climatisation tri-zone",
      "Caméra de recul",
      "GPS",
      "Cuir",
      "Bluetooth",
      "7 places",
      "Barres de toit",
      "Différentiels verrouillables",
      "Jantes 18\"",
      "Régulateur de vitesse",
    ],
    rental: {
      available: true,
      dailyRate: 120000,
      weeklyRate: 720000,
      deposit: 800000,
    },
  },
  {
    id: "veh-003",
    slug: "bmw-x5-xdrive40i-2020",
    brand: "BMW",
    model: "X5 xDrive40i",
    year: 2020,
    price: 34800000,
    mileage: 52600,
    fuel: "essence",
    transmission: "automatique",
    engine: "3.0L 6 cylindres turbo",
    power: "340 ch",
    seats: 5,
    condition: "tres_bon",
    origin: "Allemagne",
    availability: "disponible",
    category: "suv",
    description:
      "Le Sports Activity Vehicle par excellence. Dynamisme BMW, présence sculpturale et cockpit digital. Une mécanique précise, un confort de grand voyage.",
    defaultColorId: "bleu",
    isNewArrival: false,
    createdAt: "2026-07-04",
    colors: [
      {
        id: "bleu",
        name: "Bleu phytonic",
        hex: "#1C3A6B",
        images: [
          img("photo-1555215695-3004980ad54e"),
          img("photo-1494905998402-395d579af36f"),
        ],
      },
      {
        id: "noir",
        name: "Noir saphir",
        hex: "#0D0D10",
        images: [
          img("photo-1494905998402-395d579af36f"),
          img("photo-1555215695-3004980ad54e"),
        ],
      },
      {
        id: "blanc",
        name: "Blanc alpin",
        hex: "#F2F2F0",
        images: [
          img("photo-1549317661-bd32c8ce0db2"),
          img("photo-1555215695-3004980ad54e"),
        ],
      },
    ],
    features: [
      "Climatisation 4 zones",
      "Caméra 360°",
      "GPS Professional",
      "Cuir Vernasca",
      "Toit panoramique",
      "Apple CarPlay",
      "Harman Kardon",
      "Sièges sport électriques",
      "Head-up display",
      "Suspension pneumatique",
    ],
    video: {
      title: "Essai BMW X5",
      poster: img("photo-1555215695-3004980ad54e", 1400),
    },
  },
  {
    id: "veh-004",
    slug: "range-rover-sport-hse-2021",
    brand: "Range Rover",
    model: "Sport HSE",
    year: 2021,
    price: 47500000,
    mileage: 33800,
    fuel: "diesel",
    transmission: "automatique",
    engine: "3.0L 6 cylindres",
    power: "300 ch",
    seats: 5,
    condition: "excellent",
    origin: "Royaume-Uni",
    availability: "disponible",
    category: "suv",
    description:
      "Présence souveraine, silence feutré, allure indéniable. Le Range Rover Sport allie l’élégance britannique à une polyvalence rare. Un choix d’exception.",
    defaultColorId: "noir",
    isNewArrival: true,
    createdAt: "2026-08-18",
    colors: [
      {
        id: "noir",
        name: "Noir santorini",
        hex: "#101114",
        images: [
          img("photo-1519641471654-76ce0107ad1b"),
          img("photo-1563720360172-67b8f3dce741"),
        ],
      },
      {
        id: "blanc",
        name: "Blanc fuji",
        hex: "#EEECE6",
        images: [
          img("photo-1563720360172-67b8f3dce741"),
          img("photo-1519641471654-76ce0107ad1b"),
        ],
      },
      {
        id: "gris",
        name: "Gris eiger",
        hex: "#7A7D82",
        images: [
          img("photo-1606016159991-dfe4f2746ad5"),
          img("photo-1519641471654-76ce0107ad1b"),
        ],
      },
    ],
    features: [
      "Climatisation 3 zones",
      "Caméra surround",
      "Meridian Sound",
      "Cuir Windsor",
      "Toit panoramique",
      "Apple CarPlay",
      "Air suspension",
      "Terrain Response 2",
      "Hayon électrique",
      "Sièges massants",
    ],
    rental: {
      available: true,
      dailyRate: 180000,
      weeklyRate: 1050000,
      deposit: 1500000,
    },
  },
  {
    id: "veh-005",
    slug: "audi-q7-55-tfsi-2022",
    brand: "Audi",
    model: "Q7 55 TFSI",
    year: 2022,
    price: 41200000,
    mileage: 21900,
    fuel: "essence",
    transmission: "automatique",
    engine: "3.0L V6 TFSI",
    power: "340 ch",
    seats: 7,
    condition: "excellent",
    origin: "Allemagne",
    availability: "disponible",
    category: "suv",
    description:
      "Sculpté, technologique, spacieux. Le Q7 offre sept places véritables, un Virtual Cockpit d’exception et une présence lumineuse unique. Le SUV familial haut de gamme.",
    defaultColorId: "gris",
    isNewArrival: true,
    createdAt: "2026-08-21",
    colors: [
      {
        id: "gris",
        name: "Gris daytona",
        hex: "#5C5F64",
        images: [
          img("photo-1606664515524-ed2f786a0bd6"),
          img("photo-1603386329225-868f9b1ee6c9"),
        ],
      },
      {
        id: "noir",
        name: "Noir mythos",
        hex: "#0C0C0E",
        images: [
          img("photo-1603386329225-868f9b1ee6c9"),
          img("photo-1606664515524-ed2f786a0bd6"),
        ],
      },
      {
        id: "blanc",
        name: "Blanc glacier",
        hex: "#F3F1EC",
        images: [
          img("photo-1549317661-bd32c8ce0db2"),
          img("photo-1606664515524-ed2f786a0bd6"),
        ],
      },
      {
        id: "bleu",
        name: "Bleu navarra",
        hex: "#1A3358",
        images: [
          img("photo-1606664515524-ed2f786a0bd6"),
        ],
      },
    ],
    features: [
      "Climatisation 4 zones",
      "Caméra 360°",
      "Virtual Cockpit",
      "Cuir Valcona",
      "Toit ouvrant",
      "Bang & Olufsen",
      "Matrix LED",
      "7 places",
      "Aide au stationnement",
      "Apple CarPlay",
    ],
  },
  {
    id: "veh-006",
    slug: "mercedes-benz-gle-450-2023",
    brand: "Mercedes-Benz",
    model: "GLE 450",
    year: 2023,
    price: 54000000,
    mileage: 12400,
    fuel: "essence",
    transmission: "automatique",
    engine: "3.0L 6 cylindres mild-hybrid",
    power: "367 ch",
    seats: 5,
    condition: "excellent",
    origin: "Allemagne",
    availability: "disponible",
    category: "suv",
    description:
      "Le GLE 450 incarne le luxe contemporain Mercedes-Benz. MBUX dernière génération, présence magistrale, finitions soyeuses. Un véhicule presque neuf, prêt à impressionner.",
    defaultColorId: "noir",
    isNewArrival: true,
    createdAt: "2026-08-24",
    colors: [
      {
        id: "noir",
        name: "Noir cosmos",
        hex: "#0A0A0C",
        images: [
          img("photo-1485291571150-772bcfc10da5"),
          img("photo-1617531653332-bd46c24f2068"),
          img("photo-1605559424843-9e4c228bf1c2"),
        ],
      },
      {
        id: "blanc",
        name: "Blanc diamant",
        hex: "#F5F2EB",
        images: [
          img("photo-1549317661-bd32c8ce0db2"),
          img("photo-1485291571150-772bcfc10da5"),
        ],
      },
      {
        id: "rouge",
        name: "Rouge hyacinthe",
        hex: "#6B1D28",
        images: [
          img("photo-1503376780353-7e6692767b70"),
          img("photo-1485291571150-772bcfc10da5"),
        ],
      },
    ],
    features: [
      "Climatisation thermotronic",
      "Caméra 360°",
      "MBUX Hyperscreen",
      "Cuir Nappa",
      "Toit panoramique",
      "Burmester 3D",
      "Apple CarPlay",
      "Airmatic",
      "Sièges climatisé",
      "Aide à la conduite Distronic",
    ],
    video: {
      title: "GLE 450 — présentation",
      poster: img("photo-1617531653332-bd46c24f2068", 1400),
    },
    rental: {
      available: true,
      dailyRate: 200000,
      weeklyRate: 1190000,
      deposit: 2000000,
    },
  },
  {
    id: "veh-007",
    slug: "porsche-macan-s-2021",
    brand: "Porsche",
    model: "Macan S",
    year: 2021,
    price: 46800000,
    mileage: 29750,
    fuel: "essence",
    transmission: "automatique",
    engine: "3.0L V6 biturbo",
    power: "354 ch",
    seats: 5,
    condition: "excellent",
    origin: "Allemagne",
    availability: "disponible",
    category: "suv",
    description:
      "Le SUV qui se conduit comme une Porsche. Précision de châssis, sonorité du V6, design taut. Un plaisir de conduite rare, dans un format parfaitement urbain.",
    defaultColorId: "gris",
    isNewArrival: false,
    createdAt: "2026-06-19",
    colors: [
      {
        id: "gris",
        name: "Gris craie",
        hex: "#B9B6B0",
        images: [
          img("photo-1503376780353-7e6692767b70"),
          img("photo-1614162692292-7ac56d7f7f1e"),
        ],
      },
      {
        id: "noir",
        name: "Noir jet",
        hex: "#111111",
        images: [
          img("photo-1614162692292-7ac56d7f7f1e"),
          img("photo-1503376780353-7e6692767b70"),
        ],
      },
      {
        id: "rouge",
        name: "Rouge carmin",
        hex: "#8B1E2D",
        images: [
          img("photo-1503376780353-7e6692767b70"),
        ],
      },
      {
        id: "bleu",
        name: "Bleu gentiane",
        hex: "#1E3A6E",
        images: [
          img("photo-1614162692292-7ac56d7f7f1e"),
        ],
      },
    ],
    features: [
      "Climatisation bi-zone",
      "Caméra de recul",
      "PCM Navigation",
      "Cuir",
      "Toit panoramique",
      "Apple CarPlay",
      "Sport Chrono",
      "PASM",
      "Échappement sport",
      "Sièges sport 18 positions",
    ],
  },
  {
    id: "veh-008",
    slug: "hyundai-tucson-hybrid-2023",
    brand: "Hyundai",
    model: "Tucson Hybrid",
    year: 2023,
    price: 19750000,
    mileage: 18600,
    fuel: "hybride",
    transmission: "automatique",
    engine: "1.6L turbo hybride",
    power: "230 ch",
    seats: 5,
    condition: "excellent",
    origin: "Corée",
    availability: "disponible",
    category: "crossover",
    description:
      "Design paramétrique, consommation maîtrisée, garantie de sérénité. Le Tucson Hybrid est le choix intelligent pour une conduite contemporaine à Dakar, sans compromis sur le style.",
    defaultColorId: "blanc",
    isNewArrival: true,
    createdAt: "2026-08-08",
    colors: [
      {
        id: "blanc",
        name: "Blanc atlas",
        hex: "#F1EFE8",
        images: [
          img("photo-1609521263047-f8f205293f24"),
          img("photo-1606016159991-dfe4f2746ad5"),
        ],
      },
      {
        id: "noir",
        name: "Noir phantom",
        hex: "#121212",
        images: [
          img("photo-1606016159991-dfe4f2746ad5"),
          img("photo-1609521263047-f8f205293f24"),
        ],
      },
      {
        id: "bleu",
        name: "Bleu teal",
        hex: "#1B4B5A",
        images: [
          img("photo-1609521263047-f8f205293f24"),
        ],
      },
    ],
    features: [
      "Climatisation",
      "Caméra de recul",
      "GPS",
      "Apple CarPlay",
      "Android Auto",
      "Bluetooth",
      "Régulateur adaptatif",
      "Toit ouvrant",
      "Jantes 19\"",
      "Aide au maintien de voie",
    ],
    rental: {
      available: true,
      dailyRate: 55000,
      weeklyRate: 320000,
      deposit: 300000,
    },
  },
  {
    id: "veh-009",
    slug: "lexus-rx-350-2022",
    brand: "Lexus",
    model: "RX 350",
    year: 2022,
    price: 37900000,
    mileage: 24100,
    fuel: "essence",
    transmission: "automatique",
    engine: "3.5L V6",
    power: "275 ch",
    seats: 5,
    condition: "excellent",
    origin: "Japon",
    availability: "reserve",
    category: "suv",
    description:
      "Le raffinement japonais à son sommet. Silence de cathédrale, fiabilité Lexus, finitions d’horloger. Un SUV pour ceux qui privilégient la quiétude et la durabilité.",
    defaultColorId: "blanc",
    isNewArrival: false,
    createdAt: "2026-05-30",
    colors: [
      {
        id: "blanc",
        name: "Blanc sonic",
        hex: "#F4F2EC",
        images: [
          img("photo-1549317661-bd32c8ce0db2"),
          img("photo-1606016159991-dfe4f2746ad5"),
        ],
      },
      {
        id: "noir",
        name: "Noir caviar",
        hex: "#0E0E10",
        images: [
          img("photo-1606016159991-dfe4f2746ad5"),
          img("photo-1549317661-bd32c8ce0db2"),
        ],
      },
      {
        id: "gris",
        name: "Gris mercure",
        hex: "#8C8F93",
        images: [
          img("photo-1563720360172-67b8f3dce741"),
        ],
      },
    ],
    features: [
      "Climatisation tri-zone",
      "Caméra 360°",
      "Mark Levinson",
      "Cuir semi-aniline",
      "Toit panoramique",
      "Apple CarPlay",
      "Sièges ventilés",
      "Hayon mains libres",
      "Aide au stationnement",
      "Head-up display",
    ],
  },
  {
    id: "veh-010",
    slug: "peugeot-3008-gt-2023",
    brand: "Peugeot",
    model: "3008 GT",
    year: 2023,
    price: 17400000,
    mileage: 15200,
    fuel: "essence",
    transmission: "automatique",
    engine: "1.6L PureTech",
    power: "180 ch",
    seats: 5,
    condition: "excellent",
    origin: "France",
    availability: "disponible",
    category: "crossover",
    description:
      "Le i-Cockpit signature, une allure de lion, un habitacle soigné. Le 3008 GT est le crossover français qui séduit par son design et son agrément de conduite au quotidien.",
    defaultColorId: "gris",
    isNewArrival: false,
    createdAt: "2026-07-15",
    colors: [
      {
        id: "gris",
        name: "Gris artense",
        hex: "#6A6E73",
        images: [
          img("photo-1606016159991-dfe4f2746ad5"),
          img("photo-1609521263047-f8f205293f24"),
        ],
      },
      {
        id: "blanc",
        name: "Blanc nacré",
        hex: "#F2EFE8",
        images: [
          img("photo-1549317661-bd32c8ce0db2"),
          img("photo-1606016159991-dfe4f2746ad5"),
        ],
      },
      {
        id: "rouge",
        name: "Rouge elixir",
        hex: "#7A1F2B",
        images: [
          img("photo-1503376780353-7e6692767b70"),
        ],
      },
      {
        id: "noir",
        name: "Noir perla nera",
        hex: "#111111",
        images: [
          img("photo-1605559424843-9e4c228bf1c2"),
          img("photo-1606016159991-dfe4f2746ad5"),
        ],
      },
    ],
    features: [
      "Climatisation bi-zone",
      "Caméra 180°",
      "i-Cockpit",
      "Sièges Alcantara",
      "GPS",
      "Apple CarPlay",
      "Android Auto",
      "Toit ouvrant",
      "Aide au stationnement",
      "Full LED",
    ],
    rental: {
      available: true,
      dailyRate: 45000,
      weeklyRate: 260000,
      deposit: 250000,
    },
  },
];

export const socialPosts: SocialPost[] = [
  {
    id: "ig-1",
    platform: "instagram",
    image: img("photo-1485291571150-772bcfc10da5", 900),
    caption: "Nouvelle arrivée · Mercedes-Benz Classe C",
    href: "https://instagram.com/salamkheweulautomobile",
    date: "2026-08-24",
  },
  {
    id: "tt-1",
    platform: "tiktok",
    image: img("photo-1519641471654-76ce0107ad1b", 900),
    caption: "Range Rover Sport — présence.",
    href: "https://www.tiktok.com/@salamkheweulautomobile",
    date: "2026-08-22",
  },
  {
    id: "ig-2",
    platform: "instagram",
    image: img("photo-1503376780353-7e6692767b70", 900),
    caption: "Détail Porsche Macan S",
    href: "https://instagram.com/salamkheweulautomobile",
    date: "2026-08-19",
  },
  {
    id: "tt-2",
    platform: "tiktok",
    image: img("photo-1555215695-3004980ad54e", 900),
    caption: "BMW X5 · essai en ville",
    href: "https://www.tiktok.com/@salamkheweulautomobile",
    date: "2026-08-16",
  },
  {
    id: "ig-3",
    platform: "instagram",
    image: img("photo-1617531653332-bd46c24f2068", 900),
    caption: "GLE 450 · lumière du soir à Dakar",
    href: "https://instagram.com/salamkheweulautomobile",
    date: "2026-08-12",
  },
  {
    id: "tt-3",
    platform: "tiktok",
    image: img("photo-1533473359331-0135ef1b58bf", 900),
    caption: "Land Cruiser Prado — prêt pour la route",
    href: "https://www.tiktok.com/@salamkheweulautomobile",
    date: "2026-08-09",
  },
];

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
        (item.category === vehicle.category ? 2 : 0) +
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
    result = result.filter((vehicle) => vehicle.price >= filters.minPrice!);
  }
  if (filters.maxPrice) {
    result = result.filter((vehicle) => vehicle.price <= filters.maxPrice!);
  }
  if (filters.year) {
    result = result.filter((vehicle) => vehicle.year === filters.year);
  }
  if (filters.fuel) {
    result = result.filter((vehicle) => vehicle.fuel === filters.fuel);
  }
  if (filters.transmission) {
    result = result.filter((vehicle) => vehicle.transmission === filters.transmission);
  }
  if (filters.query) {
    const q = filters.query.toLowerCase();
    result = result.filter((vehicle) =>
      `${vehicle.brand} ${vehicle.model} ${vehicle.year}`.toLowerCase().includes(q),
    );
  }

  switch (filters.sort) {
    case "price_asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "year_asc":
      result.sort((a, b) => a.year - b.year);
      break;
    case "year_desc":
      result.sort((a, b) => b.year - a.year);
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
