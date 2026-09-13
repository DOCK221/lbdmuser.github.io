"use client";

import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import { WhatsAppGlyph } from "@/components/brand/WhatsAppGlyph";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl(whatsappMessages.advisor)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Parler à un conseiller sur WhatsApp"
      className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ivory shadow-[0_12px_40px_rgba(12,11,10,0.28)] transition-transform duration-500 hover:scale-105 md:bottom-8 md:right-8"
    >
      <WhatsAppGlyph className="h-5 w-5" />
    </a>
  );
}
