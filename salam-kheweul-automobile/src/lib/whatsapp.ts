import { SITE } from "@/lib/constants";

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ??
      "Bonjour Salam Kheweul Automobile, je souhaite obtenir plus d'informations.",
  );
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

export function vehicleWhatsAppMessage(brand: string, model: string): string {
  return `Bonjour Salam Kheweul Automobile, je suis intéressé(e) par le ${brand} ${model}. Pouvez-vous me donner plus d'informations ?`;
}
