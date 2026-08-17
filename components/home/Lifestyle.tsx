"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Lifestyle() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative h-[88vh] min-h-[560px] overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-[-12%]">
        <Image
          src="/images/lifestyle.jpg"
          alt="Chambre d’exception baignée de lumière, linge blanc impeccable"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/40" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <blockquote className="editorial max-w-4xl text-3xl text-ivory sm:text-5xl md:text-6xl">
          Une chambre n’est pas simplement un espace.
          <br />
          C’est une expérience.
        </blockquote>
      </div>
    </section>
  );
}
