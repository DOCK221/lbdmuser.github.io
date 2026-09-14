export type ProjectPalette = {
  name: string;
  colors: string[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  missions: string[];
  image: string;
  gallery?: string[];
  palette?: ProjectPalette;
  style?: string[];
  accent: string;
  year: string;
  href?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type Stat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type PhotoCategory =
  | "Portrait"
  | "Food"
  | "Lifestyle"
  | "Sport"
  | "Business";

export type Photo = {
  id: string;
  src: string;
  alt: string;
  category: PhotoCategory;
  width: number;
  height: number;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: string;
};
