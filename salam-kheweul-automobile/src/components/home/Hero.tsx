"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative bg-ink pt-[72px] lg:pt-0">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="relative order-2 flex flex-col justify-center px-5 py-12 sm:px-10 lg:order-1 lg:px-16 lg:py-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.34em] text-gold"
          >
            Bienvenue à Dakar
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.15 }}
            className="mt-4 max-w-xl font-display text-[2.6rem] leading-[1.08] text-ivory sm:text-6xl lg:text-7xl"
          >
            Salam Kheweul Automobile
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-mist sm:text-lg"
          >
            Votre prochaine voiture commence ici. Vente, achat, location et
            essai — une concession premium, un accueil simple, un conseiller
            pour vous.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button href="/vehicules" variant="ivory" size="lg">
              Voir les voitures
            </Button>
            <Button href="/rendez-vous" variant="gold" size="lg">
              Prendre rendez-vous
            </Button>
            <Button href={whatsappLink()} variant="ghost" size="lg">
              WhatsApp
            </Button>
          </motion.div>
          <p className="mt-8 text-sm text-ivory">
            <a href={`tel:${SITE.phoneTel}`} className="text-gold hover:underline">
              {SITE.phoneDisplay}
            </a>
            <span className="mx-3 text-white/20">·</span>
            {SITE.hours}
          </p>
        </div>

        <div className="relative order-1 min-h-[46vh] lg:order-2 lg:min-h-[100svh]">
          <Photo
            src="/ambiance/hero.jpg"
            alt="Voiture premium exposée chez Salam Kheweul Automobile"
            priority
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 lg:hidden">
            <p className="font-display text-2xl text-ivory">Collection 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
