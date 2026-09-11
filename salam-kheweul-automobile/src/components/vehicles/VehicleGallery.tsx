"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Photo } from "@/components/ui/Photo";
import { vehicleDisplayName, vehiclePhotos } from "@/lib/vehicle";
import type { Vehicle, VehicleColor } from "@/lib/types";

export function VehicleGallery({
  vehicle,
  color,
}: {
  vehicle: Vehicle;
  color?: VehicleColor;
}) {
  const media = useMemo(() => {
    const shots = vehiclePhotos(vehicle);
    const name = vehicleDisplayName(vehicle);
    return shots.map((src, index) => ({
      src,
      alt: `${name} — photo ${index + 1}`,
    }));
  }, [vehicle]);

  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const current = media[Math.min(active, Math.max(media.length - 1, 0))] ?? media[0];

  const go = useCallback(
    (delta: number) => {
      if (!media.length) return;
      setActive((index) => (index + delta + media.length) % media.length);
    },
    [media.length],
  );

  useEffect(() => {
    if (!zoomed) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setZoomed(false);
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed, go]);

  if (!current) return null;

  return (
    <div>
      <div className="relative">
        <button
          type="button"
          onClick={() => setZoomed(true)}
          className="relative aspect-[16/10] w-full overflow-hidden bg-anthracite"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.src}-${active}`}
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
            </motion.div>
          </AnimatePresence>
          {color?.name ? (
            <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ivory">
              {color.name}
            </span>
          ) : null}
          <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em] text-ivory/80">
            Agrandir
          </span>
        </button>
        {media.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Photo précédente"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-ink/60 text-ivory backdrop-blur-sm sm:flex"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Photo suivante"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-ink/60 text-ivory backdrop-blur-sm sm:flex"
            >
              →
            </button>
          </>
        ) : null}
      </div>

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
            <button
              type="button"
              className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 text-ivory sm:flex"
              onClick={(event) => {
                event.stopPropagation();
                go(-1);
              }}
            >
              ←
            </button>
            <div
              className="relative h-[80vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Photo
                src={current.src}
                alt={current.alt}
                className="h-full w-full object-contain"
              />
            </div>
            <button
              type="button"
              className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 text-ivory sm:flex"
              onClick={(event) => {
                event.stopPropagation();
                go(1);
              }}
            >
              →
            </button>
            <button
              type="button"
              className="absolute right-6 top-6 text-[11px] uppercase tracking-[0.2em] text-ivory"
            >
              Fermer
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.18em] text-mist">
              {active + 1} / {media.length}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
