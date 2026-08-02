"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <section id="testimonials" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Voices"
          title="Témoignages"
          description="Ce que disent les marques accompagnées."
          align="center"
        />

        <Reveal>
          <div className="relative mx-auto max-w-4xl border border-white/8 bg-surface/50 px-8 py-14 md:px-16 md:py-20">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.id}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="font-display text-2xl leading-relaxed text-white md:text-4xl">
                  “{item.quote}”
                </p>
                <footer className="mt-10">
                  <p className="text-sm tracking-[0.2em] text-accent uppercase">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm text-mute">
                    {item.role} · {item.company}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-center gap-6">
              <button
                type="button"
                aria-label="Témoignage précédent"
                className="text-white/60 transition hover:text-accent"
                onClick={() =>
                  setIndex(
                    (current) =>
                      (current - 1 + testimonials.length) % testimonials.length,
                  )
                }
              >
                <FiChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((testimonial, i) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    aria-label={`Aller au témoignage ${i + 1}`}
                    className={`h-1.5 w-6 transition ${
                      i === index ? "bg-accent" : "bg-white/20"
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Témoignage suivant"
                className="text-white/60 transition hover:text-accent"
                onClick={() =>
                  setIndex((current) => (current + 1) % testimonials.length)
                }
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
