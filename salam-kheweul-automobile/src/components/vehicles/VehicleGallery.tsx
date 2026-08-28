"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Vehicle, VehicleColor } from "@/lib/types";

export function VehicleGallery({
  vehicle,
  color,
}: {
  vehicle: Vehicle;
  color: VehicleColor;
}) {
  const media = useMemo(() => {
    type MediaItem = { type: "image" | "video"; src: string; alt: string };
    const items: MediaItem[] = color.images.map((src, index) => ({
      type: "image",
      src,
      alt: `${vehicle.brand} ${vehicle.model} — ${color.name} ${index + 1}`,
    }));
    if (vehicle.video) {
      items.push({
        type: "video",
        src: vehicle.video.url ?? vehicle.video.poster,
        alt: vehicle.video.title,
      });
    }
    return items;
  }, [color, vehicle]);

  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const current = media[Math.min(active, media.length - 1)] ?? media[0];
  const isVideo = current?.type === "video";

  return (
    <div>
      <button
        type="button"
        onClick={() => setZoomed(true)}
        className="relative aspect-[16/11] w-full overflow-hidden bg-anthracite"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${color.id}-${current?.src}`}
            initial={{ opacity: 0.4, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={isVideo ? (vehicle.video?.poster ?? current.src) : current.src}
              alt={current.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {isVideo ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-ink/50 text-[10px] uppercase tracking-[0.2em] text-ivory backdrop-blur-sm">
              Vidéo
            </span>
          </span>
        ) : (
          <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em] text-ivory/70">
            Zoom
          </span>
        )}
      </button>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {media.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={`relative h-16 w-24 shrink-0 overflow-hidden border transition-colors ${
              active === index ? "border-gold" : "border-white/10 hover:border-white/30"
            }`}
          >
            <Image
              src={item.type === "video" ? (vehicle.video?.poster ?? item.src) : item.src}
              alt={item.alt}
              fill
              sizes="96px"
              className="object-cover"
            />
            {item.type === "video" ? (
              <span className="absolute inset-0 flex items-center justify-center bg-ink/30 text-[8px] uppercase tracking-[0.16em] text-ivory">
                Film
              </span>
            ) : null}
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
              {isVideo && vehicle.video?.url ? (
                <video
                  src={vehicle.video.url}
                  poster={vehicle.video.poster}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={isVideo ? (vehicle.video?.poster ?? current.src) : current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              )}
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
