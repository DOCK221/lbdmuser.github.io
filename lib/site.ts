export const siteConfig = {
  name: "Nid de Plumes",
  nameUpper: "NID DE PLUMES",
  signature: "Linge hôtelier • Airbnb • Hôtels • Résidences",
  tagline: "Le confort, élevé au rang d’art.",
  promise: "Transformer chaque chambre en une expérience digne d’un hôtel 5 étoiles.",
  description:
    "Découvrez Nid de Plumes, spécialiste du linge hôtelier premium au Sénégal pour hôtels, Airbnb, résidences et appartements meublés.",
  location: "Dakar, Sénégal",
  seoTitle: "Nid de Plumes | Linge hôtelier premium au Sénégal",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
} as const;

export const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/airbnb", label: "Airbnb" },
  { href: "/hotels", label: "Hôtels & Professionnels" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/boutique", label: "Boutique" },
  { href: "/airbnb", label: "Collections Airbnb" },
  { href: "/hotels", label: "Hôtels & Professionnels" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;
