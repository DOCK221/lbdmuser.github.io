export type ProductCategory = "literie" | "serviettes" | "salle-de-bain" | "piscine";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  features: string[];
  dimensions?: string;
  composition?: string;
  weight?: string;
  availability: string;
  images: { src: string; alt: string }[];
};

export const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "Tout" },
  { id: "literie", label: "Literie" },
  { id: "serviettes", label: "Serviettes" },
  { id: "salle-de-bain", label: "Salle de bain" },
  { id: "piscine", label: "Piscine" },
];

export const products: Product[] = [
  {
    slug: "draps-plats-king",
    name: "Draps plats King",
    category: "literie",
    shortDescription:
      "Drap plat King en coton égyptien 300 fils, pour une literie d’une tenue hôtelière.",
    description:
      "Pensé pour les chambres où chaque détail se voit, le drap plat King Nid de Plumes habille le lit avec la netteté et la douceur attendues d’un établissement 5 étoiles. Tissé en coton égyptien 300 fils, il offre une présentation impeccable et un confort durable, au quotidien comme en hôtellerie.",
    features: [
      "100 % coton égyptien",
      "300 fils",
      "Qualité hôtelière",
      "Stock disponible à Dakar",
    ],
    dimensions: "King",
    composition: "100 % coton égyptien — 300 fils",
    availability: "Disponible à Dakar",
    images: [
      {
        src: "/images/bedding.jpg",
        alt: "Drap plat blanc parfaitement tendu sur un lit King",
      },
      {
        src: "/images/comfort.jpg",
        alt: "Literie hôtelière blanche, détail du drap plat",
      },
      {
        src: "/images/pillows.jpg",
        alt: "Chambre d’hôtel avec linge blanc Nid de Plumes",
      },
    ],
  },
  {
    slug: "housses-de-couette-king",
    name: "Housses de couette King",
    category: "literie",
    shortDescription:
      "Housse de couette King, conçue pour habiller le lit avec la présence d’une suite.",
    description:
      "La housse de couette King Nid de Plumes donne au lit son volume, sa lumière et sa tenue. Elle est destinée aux hôtels, Airbnb et résidences qui souhaitent une literie à la fois généreuse et parfaitement maîtrisée, dans l’esprit des plus belles chambres.",
    features: ["Format King", "Qualité hôtelière", "Stock disponible à Dakar"],
    dimensions: "King",
    availability: "Disponible à Dakar",
    images: [
      {
        src: "/images/duvet.jpg",
        alt: "Housse de couette King sur un lit d’hôtel lumineux",
      },
      {
        src: "/images/hotel-room.jpg",
        alt: "Chambre hôtelière habillée d’une housse de couette blanche",
      },
      {
        src: "/images/suite.jpg",
        alt: "Suite avec literie King parfaitement installée",
      },
    ],
  },
  {
    slug: "taies-doreiller",
    name: "Taies d’oreiller",
    category: "literie",
    shortDescription:
      "Taies d’oreiller pour une literie cohérente, nette et profondément confortable.",
    description:
      "Les taies d’oreiller Nid de Plumes parachèvent le lit. Elles assurent la continuité visuelle de la literie et le premier contact, celui qui donne immédiatement le sentiment d’un accueil soigné.",
    features: ["Qualité hôtelière", "Stock disponible à Dakar"],
    availability: "Disponible à Dakar",
    images: [
      {
        src: "/images/pillows.jpg",
        alt: "Taies d’oreiller blanches sur une literie hôtelière",
      },
      {
        src: "/images/bedroom-soft.jpg",
        alt: "Détail d’oreillers habillés de taies blanches",
      },
      {
        src: "/images/comfort.jpg",
        alt: "Composition de literie blanche avec taies d’oreiller",
      },
    ],
  },
  {
    slug: "serviettes-de-bain-gm",
    name: "Serviettes de bain GM",
    category: "serviettes",
    shortDescription:
      "Serviette de bain grand modèle, 600 g, pour un séchage généreux et une présence hôtelière.",
    description:
      "La serviette de bain GM Nid de Plumes est le geste essentiel de la salle de bain. À 600 g, elle offre la densité attendue en hôtellerie : une matière généreuse, une belle tenue sur la barre, un confort immédiat après le bain.",
    features: ["600 g", "Grand modèle", "Qualité hôtelière", "Stock disponible à Dakar"],
    weight: "600 g",
    availability: "Disponible à Dakar",
    images: [
      {
        src: "/images/towels-stack.jpg",
        alt: "Serviettes de bain GM blanches pliée en pile hôtelière",
      },
      {
        src: "/images/hotel-bath.jpg",
        alt: "Salle de bain d’hôtel avec serviettes de bain GM",
      },
      {
        src: "/images/spa.jpg",
        alt: "Serviette de bain dans un univers spa et hôtel",
      },
    ],
  },
  {
    slug: "serviettes-main-moyennes",
    name: "Serviettes main / moyennes",
    category: "serviettes",
    shortDescription:
      "Serviettes main et moyennes, 600 g, pour accompagner le rituel de la salle de bain.",
    description:
      "Les serviettes main et moyennes Nid de Plumes prolongent la même exigence que les grands formats. À 600 g, elles assurent cohérence, densité et élégance sur le lavabo comme dans les espaces communs.",
    features: ["600 g", "Qualité hôtelière", "Stock disponible à Dakar"],
    weight: "600 g",
    availability: "Disponible à Dakar",
    images: [
      {
        src: "/images/vanity.jpg",
        alt: "Serviettes main près d’un lavabo de salle de bain premium",
      },
      {
        src: "/images/bath-detail.jpg",
        alt: "Détail de serviettes moyennes dans une salle de bain",
      },
      {
        src: "/images/towels-stack.jpg",
        alt: "Pile de serviettes blanches qualité hôtelière",
      },
    ],
  },
  {
    slug: "serviettes-visage-pm",
    name: "Serviettes visage PM",
    category: "serviettes",
    shortDescription:
      "Serviette visage petit modèle, 600 g, pour les détails qui font la différence.",
    description:
      "Petit format, même exigence. La serviette visage PM à 600 g complète le linge de toilette avec la douceur et la densité d’une collection hôtelière complète.",
    features: ["600 g", "Petit modèle", "Qualité hôtelière", "Stock disponible à Dakar"],
    weight: "600 g",
    availability: "Disponible à Dakar",
    images: [
      {
        src: "/images/bath-luxury.jpg",
        alt: "Serviettes visage PM dans une salle de bain raffinée",
      },
      {
        src: "/images/vanity.jpg",
        alt: "Linge de toilette petit modèle près du lavabo",
      },
      {
        src: "/images/hotel-bath.jpg",
        alt: "Salle de bain hôtelière avec linge de toilette complet",
      },
    ],
  },
  {
    slug: "bath-sheets",
    name: "Bath sheets",
    category: "serviettes",
    shortDescription:
      "Bath sheets pour un enveloppement généreux, dans l’esprit des spas et des suites.",
    description:
      "Les bath sheets Nid de Plumes offrent le format le plus ample de la collection serviettes. Elles sont destinées aux salles de bain d’exception, aux spas et aux chambres qui veulent un geste d’hospitalité plus vaste, plus confortable.",
    features: ["Qualité hôtelière", "Stock disponible à Dakar"],
    availability: "Disponible à Dakar",
    images: [
      {
        src: "/images/spa-calm.jpg",
        alt: "Bath sheet blanche dans un univers spa",
      },
      {
        src: "/images/spa.jpg",
        alt: "Linge de bain ample de type bath sheet",
      },
      {
        src: "/images/towels-stack.jpg",
        alt: "Bath sheets pliées, présentation hôtelière",
      },
    ],
  },
  {
    slug: "peignoirs",
    name: "Peignoirs",
    category: "salle-de-bain",
    shortDescription:
      "Peignoirs pour prolonger le confort de la chambre jusque dans la salle de bain.",
    description:
      "Le peignoir Nid de Plumes est un signe d’hospitalité immédiat. Il habille le corps comme la salle de bain habille l’espace : avec calme, densité et une élégance discrète, digne des plus belles adresses.",
    features: ["Qualité hôtelière", "Stock disponible à Dakar"],
    availability: "Disponible à Dakar",
    images: [
      {
        src: "/images/spa.jpg",
        alt: "Peignoir dans une salle de bain d’esprit hôtel et spa",
      },
      {
        src: "/images/bath-luxury.jpg",
        alt: "Espace bain premium destiné à un peignoir hôtelier",
      },
      {
        src: "/images/hotel-bath.jpg",
        alt: "Salle de bain de suite avec peignoir",
      },
    ],
  },
  {
    slug: "tapis-de-bain",
    name: "Tapis de bain",
    category: "salle-de-bain",
    shortDescription:
      "Tapis de bain pour ancrer la salle de bain dans le confort et la précision hôtelière.",
    description:
      "Le tapis de bain Nid de Plumes pose le premier pas au sortir de la douche. Il complète la salle de bain avec la même exigence que le linge de toilette : une présence sobre, un confort immédiat, une finition de chambre d’hôtel.",
    features: ["Qualité hôtelière", "Stock disponible à Dakar"],
    availability: "Disponible à Dakar",
    images: [
      {
        src: "/images/bath-detail.jpg",
        alt: "Tapis de bain dans une salle de bain contemporaine",
      },
      {
        src: "/images/bathroom.jpg",
        alt: "Salle de bain lumineuse avec tapis de bain",
      },
      {
        src: "/images/bath-stone.jpg",
        alt: "Détail d’un sol de salle de bain premium",
      },
    ],
  },
  {
    slug: "serviettes-de-piscine",
    name: "Serviettes de piscine",
    category: "piscine",
    shortDescription:
      "Serviettes de piscine pour les terrasses, bords d’eau et journées au soleil.",
    description:
      "Les serviettes de piscine Nid de Plumes accompagnent les espaces extérieurs avec la même exigence que la chambre. Elles sont destinées aux hôtels, résidences et villas qui veulent un linge de piscine à la hauteur de leur accueil.",
    features: ["Qualité hôtelière", "Stock disponible à Dakar"],
    availability: "Disponible à Dakar",
    images: [
      {
        src: "/images/pool.jpg",
        alt: "Serviette de piscine au bord d’un bassin d’hôtel",
      },
      {
        src: "/images/pool-lounge.jpg",
        alt: "Transat et serviette de piscine en terrasse",
      },
      {
        src: "/images/infinity.jpg",
        alt: "Piscine d’hôtel avec linge de bain extérieur",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategory | "all") {
  if (category === "all") return products;
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(slug: string, limit = 3) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  const sameCategory = products.filter(
    (product) => product.slug !== slug && product.category === current.category,
  );
  const others = products.filter(
    (product) => product.slug !== slug && product.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export const categoryCopy: Record<
  ProductCategory,
  { title: string; items: string[]; image: string; href: string }
> = {
  literie: {
    title: "Literie",
    items: [
      "Draps plats King — 100 % coton égyptien — 300 fils",
      "Housses de couette King",
      "Taies d’oreiller",
    ],
    image: "/images/comfort.jpg",
    href: "/boutique?categorie=literie",
  },
  serviettes: {
    title: "Serviettes",
    items: [
      "Serviettes de bain GM — 600 g",
      "Serviettes main / moyennes — 600 g",
      "Serviettes visage PM — 600 g",
      "Bath sheets",
    ],
    image: "/images/towels-stack.jpg",
    href: "/boutique?categorie=serviettes",
  },
  "salle-de-bain": {
    title: "Salle de bain",
    items: ["Peignoirs", "Tapis de bain"],
    image: "/images/bathroom.jpg",
    href: "/boutique?categorie=salle-de-bain",
  },
  piscine: {
    title: "Piscine",
    items: ["Serviettes de piscine"],
    image: "/images/pool.jpg",
    href: "/boutique?categorie=piscine",
  },
};
