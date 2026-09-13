"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: index === active ? 1 : 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            className={`relative aspect-[4/5] overflow-hidden bg-cream ${
              index === active ? "ring-1 ring-ink" : "opacity-70 hover:opacity-100"
            }`}
            aria-label={`Voir l’image ${index + 1}`}
          >
            <Image src={image.src} alt="" fill className="object-cover" sizes="180px" />
          </button>
        ))}
      </div>
    </div>
  );
}
