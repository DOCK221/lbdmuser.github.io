"use client";

import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getVehicleBySlug } from "@/data/vehicles";
import { vehicleWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const pathname = usePathname();
  const slug = pathname.startsWith("/vehicules/")
    ? pathname.split("/")[2]
    : undefined;
  const vehicle = slug ? getVehicleBySlug(slug) : undefined;
  const message = vehicle
    ? vehicleWhatsAppMessage(vehicle.brand, vehicle.model)
    : undefined;

  if (pathname.startsWith("/admin")) return null;

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={`WhatsApp ${SITE.name}`}
      className="group fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-[#128C7E] shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-105 lg:bottom-6 lg:right-6"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden>
        <path d="M19.05 4.91A9.87 9.87 0 0 0 12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.45 1.28 4.92L2 22l5.21-1.37A9.9 9.9 0 0 0 12.02 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.97-7.09ZM12.02 20.2a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.09.81.83-3.01-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4a8.16 8.16 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.21 8.2Zm4.49-6.13c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-sm bg-anthracite px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-ivory opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
        Discuter
      </span>
    </a>
  );
}
