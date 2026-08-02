"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import type { Photo } from "@/types";

type LightboxProps = {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const photo = index !== null ? photos[index] : null;

  useEffect(() => {
    if (index === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {photo ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Fermer"
            className="absolute top-6 right-6 z-10 text-white/80 transition hover:text-accent"
            onClick={onClose}
          >
            <FiX size={28} />
          </button>

          <button
            type="button"
            aria-label="Photo précédente"
            className="absolute left-4 z-10 text-white/70 transition hover:text-accent md:left-8"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <FiChevronLeft size={36} />
          </button>

          <motion.div
            key={photo.id}
            className="relative mx-4 max-h-[85vh] w-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/10]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm tracking-[0.2em] text-white/60 uppercase">
              {photo.category} — {photo.alt}
            </p>
          </motion.div>

          <button
            type="button"
            aria-label="Photo suivante"
            className="absolute right-4 z-10 text-white/70 transition hover:text-accent md:right-8"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <FiChevronRight size={36} />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
