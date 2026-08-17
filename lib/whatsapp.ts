const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

/** Digits only. Leave empty until the real number is provided. */
export const WHATSAPP_NUMBER = rawNumber.replace(/\D/g, "");

export function getWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  if (WHATSAPP_NUMBER) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }
  return `https://wa.me/?text=${text}`;
}

export const whatsappMessages = {
  general: "Bonjour Nid de Plumes, je souhaite en savoir plus sur vos collections.",
  advisor: "Bonjour Nid de Plumes, je souhaite parler à un conseiller.",
  quote: "Bonjour Nid de Plumes, je souhaite demander un devis professionnel.",
  collection: "Bonjour Nid de Plumes, je souhaite découvrir la collection.",
  product: (name: string) =>
    `Bonjour Nid de Plumes, je souhaite commander : ${name}.`,
  package: (name: string) =>
    `Bonjour Nid de Plumes, je souhaite commander le package ${name}.`,
  cart: (lines: string) =>
    `Bonjour Nid de Plumes, je souhaite passer commande :\n${lines}`,
} as const;
