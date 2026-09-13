export type HostPackage = {
  slug: string;
  name: string;
  intent: string;
  image: string;
  imageAlt: string;
};

export const hostPackages: HostPackage[] = [
  {
    slug: "essential-room",
    name: "Essential Room",
    intent:
      "L’essentiel pour habiller une chambre avec la tenue d’un hôtel, sans superflu.",
    image: "/images/bedroom-soft.jpg",
    imageAlt: "Chambre lumineuse habillée de linge blanc hôtelier",
  },
  {
    slug: "premium-host",
    name: "Premium Host",
    intent:
      "Une composition plus complète pour les hôtes qui veulent une expérience visiblement supérieure.",
    image: "/images/host.jpg",
    imageAlt: "Intérieur raffiné destiné à un accueil Airbnb premium",
  },
  {
    slug: "executive-airbnb",
    name: "Executive Airbnb",
    intent:
      "Le standard des logements d’exception, pensé pour des séjours mémorables.",
    image: "/images/suite.jpg",
    imageAlt: "Suite contemporaine avec literie d’exception",
  },
  {
    slug: "deluxe-host",
    name: "Deluxe Host",
    intent:
      "Le geste le plus généreux de la collection hôte, pour une signature d’hospitalité totale.",
    image: "/images/lifestyle.jpg",
    imageAlt: "Chambre d’hôtel deluxe avec linge blanc impeccable",
  },
  {
    slug: "bathroom-refresh",
    name: "Bathroom Refresh",
    intent:
      "Renouveler la salle de bain avec un linge cohérent, dense et visiblement soigné.",
    image: "/images/bathroom.jpg",
    imageAlt: "Salle de bain premium prête pour un renouvellement de linge",
  },
  {
    slug: "pool-beach",
    name: "Pool & Beach",
    intent:
      "Le linge des bords d’eau : piscine, terrasse et journées au soleil.",
    image: "/images/hotel-pool.jpg",
    imageAlt: "Bord de piscine d’hôtel avec serviettes",
  },
  {
    slug: "apartment-starter",
    name: "Apartment Starter",
    intent:
      "Démarrer un appartement meublé avec une base de linge hôtelière, claire et élégante.",
    image: "/images/residence.jpg",
    imageAlt: "Appartement contemporain destiné à la location meublée",
  },
  {
    slug: "kit-remplacement-serviettes",
    name: "Kit remplacement serviettes",
    intent:
      "Réassort express du linge de toilette, pour maintenir le niveau d’accueil au quotidien.",
    image: "/images/towels-stack.jpg",
    imageAlt: "Pile de serviettes blanches prêtes pour le réassort",
  },
];

export function getPackage(slug: string) {
  return hostPackages.find((item) => item.slug === slug);
}
