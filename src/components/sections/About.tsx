"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(216,195,165,0.08),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-8">
        <div>
          <SectionHeading
            eyebrow="Introduction"
            title={siteConfig.about.title}
          />
          <div className="space-y-6">
            {siteConfig.about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.1 * index}>
                <p className="text-base leading-relaxed text-mute md:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative overflow-hidden">
            <div className="absolute -inset-px bg-gradient-to-br from-accent/40 via-transparent to-transparent opacity-60" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
                <Image
                  src={siteConfig.about.image}
                  alt={`${siteConfig.name} portrait`}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
          </div>
          <p className="mt-4 text-xs tracking-[0.28em] text-accent uppercase">
            Creative presence
          </p>
        </Reveal>
      </div>
    </section>
  );
}
