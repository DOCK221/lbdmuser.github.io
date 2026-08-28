"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=80";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink grain">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Véhicule premium Salam Kheweul Automobile"
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:justify-center lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] uppercase tracking-[0.42em] text-gold"
        >
          {SITE.legalName}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
        >
          Votre prochaine voiture commence ici.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-6 max-w-md text-sm leading-relaxed text-mist"
        >
          Vente, achat, location et services automobiles. Une sélection exigeante,
          un accompagnement confidentiel.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="/vehicules" variant="ivory" size="lg">
            Découvrir nos véhicules
          </Button>
          <Button href="/rendez-vous" variant="ghost" size="lg">
            Prendre rendez-vous
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-mist">
          Défiler
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
