export const SITE = {
  name: "Salam Kheweul Automobile",
  legalName: "SALAM KHEWEUL AUTOMOBILE",
  tagline: "Votre prochaine voiture commence ici.",
  description:
    "Concession automobile premium à Dakar. Vente, achat, location et services automobiles. Véhicules sélectionnés, accompagnement personnalisé.",
  phoneDisplay: "+221 77 347 39 20",
  phoneTel: "+221773473920",
  whatsappNumber: "221773473920",
  email: "contact@salamkheweulautomobile.sn",
  address: "Dakar, Sénégal",
  city: "Dakar",
  country: "SN",
  hours: "Lun — Sam · 09h00 – 19h00",
  sunday: "Dimanche sur rendez-vous",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://instagram.com/salamkheweulautomobile",
  tiktok:
    process.env.NEXT_PUBLIC_TIKTOK_URL ??
    "https://www.tiktok.com/@salamkheweulautomobile",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  currency: "XOF",
  currencyLabel: "FCFA",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/vehicules", label: "Véhicules" },
  { href: "/services", label: "Services" },
  { href: "/location", label: "Location" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

export const DEPOSIT_RATE = 0.1;

export const FUEL_LABELS: Record<string, string> = {
  essence: "Essence",
  diesel: "Diesel",
  hybride: "Hybride",
  electrique: "Électrique",
};

export const TRANSMISSION_LABELS: Record<string, string> = {
  automatique: "Automatique",
  manuelle: "Manuelle",
};

export const AVAILABILITY_LABELS: Record<string, string> = {
  disponible: "Disponible",
  reserve: "Réservé",
  vendu: "Vendu",
  en_arrivage: "En arrivage",
};

export const CONDITION_LABELS: Record<string, string> = {
  excellent: "Excellent",
  tres_bon: "Très bon",
  bon: "Bon",
};

export const CATEGORY_LABELS: Record<string, string> = {
  berline: "Berline",
  suv: "SUV",
  coupe: "Coupé",
  crossover: "Crossover",
};

export const RESERVATION_TYPE_LABELS: Record<string, string> = {
  visite: "Visite en concession",
  essai: "Essai du véhicule",
  reservation: "Réservation du véhicule",
};

export const APPOINTMENT_TYPE_LABELS: Record<string, string> = {
  visite: "Visite",
  essai: "Essai routier",
  conseil: "Conseil personnalisé",
};

export const PAYMENT_METHOD_LABELS: Record<string, string> = {
  wave: "Wave",
  orange_money: "Orange Money",
  card: "Carte bancaire",
  bank_transfer: "Virement bancaire",
};

export const BRANDS = [
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Range Rover",
  "Porsche",
  "Toyota",
  "Lexus",
  "Hyundai",
  "Peugeot",
] as const;
