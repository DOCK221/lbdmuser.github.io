"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Photo } from "@/components/ui/Photo";
import type { Vehicle, VehicleColor } from "@/lib/types";

const PAINT_FILTERS: Record<string, string> = {
  noir: "brightness(0.86) contrast(1.08)",
  blanc: "brightness(1.35) saturate(0.45) contrast(0.92)",
  gris: "grayscale(0.55) brightness(1.12)",
  rouge: "sepia(0.5) hue-rotate(-20deg) saturate(1.7)",
  bleu: "sepia(0.45) hue-rotate(195deg) saturate(1.5)",
};

export function VehicleGallery({
  vehicle,
  color,
}: {
  vehicle: Vehicle;
  color: VehicleColor;
}) {
  const media = useMemo(() => {
    const defaultColor =
      vehicle.colors.find((item) => item.id === vehicle.defaultColorId) ??
      vehicle.colors[0];
    const shots = defaultColor.images;
    return shots.map((src, index) => ({
      src,
      alt: `${vehicle.brand} ${vehicle.model} — ${color.name} ${index + 1}`,
    }));
  }, [color.name, vehicle]);

  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const current = media[Math.min(active, media.length - 1)] ?? media[0];
  const paint = PAINT_FILTERS[color.id] ?? PAINT_FILTERS.noir;

  return (
    <div>
      <button
        type="button"
        onClick={() => setZoomed(true)}
        className="relative aspect-[16/10] w-full overflow-hidden bg-anthracite"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${color.id}-${current?.src}-${active}`}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0"
          >
            <Photo
              src={current.src}
              alt={current.alt}
              priority
              className="h-full w-full object-cover"
            />
            <span
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  color.id === "blanc" ? "rgba(255,255,255,0.22)" : `${color.hex}40`,
                mixBlendMode: "soft-light",
                filter: paint,
              }}
            />
          </motion.div>
        </AnimatePresence>
        <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ivory">
          {color.name}
        </span>
        <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em] text-ivory/80">
          Zoom
        </span>
      </button>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {media.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={`relative h-16 w-24 shrink-0 overflow-hidden border ${
              active === index ? "border-gold" : "border-white/10"
            }`}
          >
            <Photo src={item.src} alt={item.alt} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {zoomed ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4"
            onClick={() => setZoomed(false)}
          >
            <div className="relative h-[80vh] w-full max-w-6xl">
              <Photo
                src={current.src}
                alt={current.alt}
                className="h-full w-full object-contain"
              />
            </div>
            <button
              type="button"
              className="absolute right-6 top-6 text-[11px] uppercase tracking-[0.2em] text-ivory"
            >
              Fermer
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
