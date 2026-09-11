import { SITE } from "@/lib/constants";
import { vehicleInquiryMessage } from "@/lib/vehicle";
import type { Vehicle } from "@/lib/types";

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ??
      "Bonjour Salam Kheweul Automobile, je souhaite obtenir plus d'informations.",
  );
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

export function vehicleWhatsAppMessage(vehicle: Vehicle): string {
  return `${vehicleInquiryMessage(vehicle)} Pouvez-vous me donner plus d'informations ?`;
}
