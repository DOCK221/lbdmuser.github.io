import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "burger-coffee",
    title: "Burger Coffee",
    subtitle: "Restaurant & lifestyle brand",
    description:
      "Identité digitale complète et site immersif pour un restaurant-terrasse premium à Saly. Branding orange-noir, contenu social et stratégie marketing.",
    missions: [
      "Création du site web",
      "Stratégie digitale",
      "Création de contenu",
      "Marketing",
      "Branding",
    ],
    image: "/images/projects/burger-coffee.jpg",
    gallery: [
      "/images/projects/burger-coffee.jpg",
      "/images/projects/burger-coffee-alt.jpg",
      "/images/projects/burger-coffee-story.jpg",
    ],
    palette: {
      name: "Orange · Noir · Blanc",
      colors: ["#F97316", "#090909", "#FFFFFF"],
    },
    accent: "#F97316",
    year: "2025",
  },
  {
    id: "2",
    slug: "b-studio",
    title: "B Studio",
    subtitle: "Direction artistique & contenu",
    description:
      "Direction artistique élégante et production de contenus premium pour une marque studio. Esthétique raffinée, réseaux sociaux et vidéos signature.",
    missions: [
      "Direction artistique",
      "Création de contenu",
      "Réseaux sociaux",
      "Vidéos",
    ],
    image: "/images/projects/b-studio.jpg",
    style: ["Élégant", "Premium"],
    accent: "#D8C3A5",
    year: "2025",
  },
  {
    id: "3",
    slug: "adn-academy",
    title: "Complexe ADN Academy",
    subtitle: "Communication sportive",
    description:
      "Communication digitale dynamique pour une académie sportive. Photo, vidéo et branding avec une énergie athlétique moderne.",
    missions: [
      "Communication digitale",
      "Réseaux sociaux",
      "Photo",
      "Vidéo",
      "Branding",
    ],
    image: "/images/projects/adn-academy.jpg",
    style: ["Sportif", "Dynamique", "Moderne"],
    accent: "#EF4444",
    year: "2024",
  },
  {
    id: "4",
    slug: "mixed-shop",
    title: "Mixed Shop",
    subtitle: "Retail & community",
    description:
      "Branding, contenu et publicités Meta pour une boutique lifestyle. Palette blanc, noir et beige pour une présence digitale cohérente.",
    missions: [
      "Création de contenu",
      "Branding",
      "Community Management",
      "Publicités Meta",
    ],
    image: "/images/projects/mixed-shop.jpg",
    palette: {
      name: "Blanc · Noir · Beige",
      colors: ["#FFFFFF", "#090909", "#D8C3A5"],
    },
    accent: "#D8C3A5",
    year: "2024",
  },
  {
    id: "5",
    slug: "photographie",
    title: "Photographie",
    subtitle: "Galerie premium",
    description:
      "Galerie photographique haut de gamme couvrant portrait, food, lifestyle, sport et business — une vision visuelle signature.",
    missions: ["Portrait", "Food", "Lifestyle", "Sport", "Business"],
    image: "/images/projects/photography.jpg",
    style: ["Editorial", "Premium", "Cinematic"],
    accent: "#A8A29E",
    year: "2025",
  },
  {
    id: "6",
    slug: "equilibre-sante",
    title: "Équilibre & Santé",
    subtitle: "Cabinet de santé et bien-être",
    description:
      "Identité digitale apaisante pour un cabinet de santé. Contenu, photographie et community management dans une palette verte et blanche inspirant confiance.",
    missions: [
      "Community Management",
      "Création de contenu",
      "Photographie",
      "Identité digitale",
      "Communication",
    ],
    image: "/images/projects/equilibre-sante.jpg",
    palette: {
      name: "Vert · Blanc",
      colors: ["#4A7C59", "#FFFFFF", "#E8F0EA"],
    },
    style: ["Minimaliste", "Apaisant"],
    accent: "#4A7C59",
    year: "2024",
  },
  {
    id: "7",
    slug: "kamex-tax-legal",
    title: "Kamex Tax & Legal",
    subtitle: "Cabinet juridique et fiscal",
    description:
      "Branding digital professionnel pour un cabinet fiscal et juridique. Communication premium en bleu marine, gris et blanc.",
    missions: [
      "Création de contenu",
      "Community Management",
      "Branding digital",
      "Communication",
      "Stratégie digitale",
    ],
    image: "/images/projects/kamex.jpg",
    palette: {
      name: "Bleu marine · Gris · Blanc",
      colors: ["#1B2A4A", "#9CA3AF", "#FFFFFF"],
    },
    style: ["Professionnel", "Premium", "Confiance"],
    accent: "#1B2A4A",
    year: "2025",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
