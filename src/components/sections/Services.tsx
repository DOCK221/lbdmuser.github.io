"use client";

import { motion } from "framer-motion";
import {
  FiMonitor,
  FiLayout,
  FiShare2,
  FiEdit3,
  FiCamera,
  FiFilm,
  FiNavigation,
  FiAperture,
  FiTrendingUp,
  FiMessageCircle,
} from "react-icons/fi";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const iconMap = {
  FiMonitor,
  FiLayout,
  FiShare2,
  FiEdit3,
  FiCamera,
  FiFilm,
  FiNavigation,
  FiAperture,
  FiTrendingUp,
  FiMessageCircle,
} as const;

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(216,195,165,0.07),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Services"
          description="Une offre complète pour bâtir, animer et faire rayonner votre marque."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <Reveal key={service.id} delay={index * 0.04}>
                <motion.article
                  className="group relative h-full border border-white/8 bg-surface/60 p-6 transition duration-500 hover:border-accent/40 hover:bg-surface"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                >
                  <motion.div
                    className="mb-5 inline-flex text-accent"
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  >
                    <Icon size={26} />
                  </motion.div>
                  <h3 className="font-display text-xl text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {service.description}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
