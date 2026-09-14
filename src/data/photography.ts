import type { Photo, PhotoCategory } from "@/types";

export const photoCategories: PhotoCategory[] = [
  "Portrait",
  "Food",
  "Lifestyle",
  "Sport",
  "Business",
];

export const photos: Photo[] = [
  // Portrait — WeTransfer gallery
  {
    id: "portrait-01",
    src: "/images/photography/portrait/aminata-01.jpg",
    alt: "Portrait plage — profil contemplatif",
    category: "Portrait",
    width: 1260,
    height: 2240,
  },
  {
    id: "portrait-02",
    src: "/images/photography/portrait/aminata-02.jpg",
    alt: "Portrait éditorial en lumière naturelle",
    category: "Portrait",
    width: 1260,
    height: 2240,
  },
  {
    id: "portrait-03",
    src: "/images/photography/portrait/aminata-03.jpg",
    alt: "Portrait lifestyle côtier",
    category: "Portrait",
    width: 1260,
    height: 2240,
  },
  {
    id: "portrait-04",
    src: "/images/photography/portrait/aminata-04.jpg",
    alt: "Portrait atmosphère douce",
    category: "Portrait",
    width: 1260,
    height: 2240,
  },
  {
    id: "portrait-05",
    src: "/images/photography/portrait/aminata-05.jpg",
    alt: "Portrait groupe — moment candid",
    category: "Portrait",
    width: 3024,
    height: 4536,
  },
  {
    id: "portrait-06",
    src: "/images/photography/portrait/aminata-06.jpg",
    alt: "Portrait cinéma documentaire",
    category: "Portrait",
    width: 3024,
    height: 4536,
  },
  {
    id: "portrait-07",
    src: "/images/photography/portrait/aminata-07.jpg",
    alt: "Portrait émotion et lumière",
    category: "Portrait",
    width: 3024,
    height: 4536,
  },
  {
    id: "portrait-signature",
    src: "/images/photography/portrait/aminata-portrait.jpg",
    alt: "Aminata Sow — portrait signature",
    category: "Portrait",
    width: 677,
    height: 1035,
  },

  // Food
  {
    id: "food-01",
    src: "/images/photography/food/food-01.jpg",
    alt: "Photographie culinaire",
    category: "Food",
    width: 900,
    height: 700,
  },
  {
    id: "food-02",
    src: "/images/photography/food/smash-classic.jpg",
    alt: "Burger signature",
    category: "Food",
    width: 900,
    height: 900,
  },
  {
    id: "food-03",
    src: "/images/photography/food/caramel-macchiato.jpg",
    alt: "Boisson artisanale",
    category: "Food",
    width: 900,
    height: 1100,
  },
  {
    id: "food-04",
    src: "/images/photography/food/salade-tropicale.jpg",
    alt: "Cuisine lifestyle",
    category: "Food",
    width: 900,
    height: 800,
  },

  // Lifestyle
  {
    id: "life-01",
    src: "/images/photography/lifestyle/life-01.jpg",
    alt: "Ambiance lifestyle",
    category: "Lifestyle",
    width: 900,
    height: 700,
  },
  {
    id: "life-02",
    src: "/images/photography/lifestyle/image00003.jpeg",
    alt: "Moment lifestyle",
    category: "Lifestyle",
    width: 900,
    height: 1200,
  },
  {
    id: "life-03",
    src: "/images/photography/lifestyle/image00008.jpeg",
    alt: "Scène quotidienne",
    category: "Lifestyle",
    width: 900,
    height: 900,
  },

  // Sport
  {
    id: "sport-01",
    src: "/images/photography/sport/sport-01.jpg",
    alt: "Performance sportive",
    category: "Sport",
    width: 900,
    height: 700,
  },
  {
    id: "sport-02",
    src: "/images/photography/sport/image00004.jpeg",
    alt: "Énergie sportive",
    category: "Sport",
    width: 900,
    height: 1100,
  },
  {
    id: "sport-03",
    src: "/images/photography/sport/image00009.jpeg",
    alt: "Mouvement athlétique",
    category: "Sport",
    width: 900,
    height: 900,
  },

  // Business
  {
    id: "biz-01",
    src: "/images/photography/business/biz-01.jpg",
    alt: "Espace business",
    category: "Business",
    width: 900,
    height: 700,
  },
  {
    id: "biz-02",
    src: "/images/photography/business/biz-02.jpg",
    alt: "Portrait corporate",
    category: "Business",
    width: 900,
    height: 1000,
  },
  {
    id: "biz-03",
    src: "/images/photography/business/image00005.jpeg",
    alt: "Univers professionnel",
    category: "Business",
    width: 900,
    height: 1100,
  },
];
