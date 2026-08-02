"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { photoCategories, photos } from "@/data/photography";
import type { PhotoCategory } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";
import { cn } from "@/lib/cn";

export default function Photography() {
  const [category, setCategory] = useState<PhotoCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === "All") return photos;
    return photos.filter((photo) => photo.category === category);
  }, [category]);

  const openAt = (id: string) => {
    const index = filtered.findIndex((photo) => photo.id === id);
    setLightboxIndex(index >= 0 ? index : 0);
  };

  return (
    <section id="photography" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Visual World"
          title="Photographie"
          description="Une galerie premium — portrait, food, lifestyle, sport et business."
        />

        <Reveal>
          <div className="mb-10 flex flex-wrap gap-3">
            {(["All", ...photoCategories] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "px-4 py-2 text-xs tracking-[0.2em] uppercase transition",
                  category === item
                    ? "bg-accent text-ink"
                    : "border border-white/10 text-white/60 hover:border-accent hover:text-accent",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, index) => (
              <motion.button
                key={photo.id}
                type="button"
                layout
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden"
                onClick={() => openAt(photo.id)}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: `${photo.width} / ${photo.height}`,
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/35" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs tracking-[0.22em] text-accent uppercase">
                      {photo.category}
                    </p>
                    <p className="mt-1 text-sm text-white">{photo.alt}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Lightbox
        photos={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((current) => {
            if (current === null) return current;
            return (current - 1 + filtered.length) % filtered.length;
          })
        }
        onNext={() =>
          setLightboxIndex((current) => {
            if (current === null) return current;
            return (current + 1) % filtered.length;
          })
        }
      />
    </section>
  );
}
