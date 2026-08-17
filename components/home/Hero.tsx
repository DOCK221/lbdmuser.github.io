"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeatherMark } from "@/components/brand/Logo";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Chambre d’hôtel luxueuse au linge blanc parfaitement installé"
          fill
          priority
          sizes="100vw"
          className={`object-cover ${reduce ? "" : "img-ken"}`}
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="grain" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-ivory">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <FeatherMark className="h-14 w-9 text-ivory" />
        </motion.div>
        <motion.p
          className="mt-8 font-serif text-[0.8rem] tracking-[0.55em] md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 2.1 }}
        >
          NID DE PLUMES
        </motion.p>
        <motion.h1
          className="editorial mt-8 text-[2.7rem] text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.25, ease: [0.22, 1, 0.36, 1] }}
        >
          Le confort,
          <br />
          élevé au rang d’art.
        </motion.h1>
        <motion.p
          className="mt-8 max-w-xl text-sm leading-relaxed text-ivory/78 md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Linge hôtelier premium pour hôtels, Airbnb, résidences et intérieurs
          d’exception.
        </motion.p>
        <motion.div
          className="mt-12 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.7 }}
        >
          <Button href="/boutique" variant="ivory" className="w-full sm:w-auto">
            Découvrir la collection
          </Button>
          <Button
            href={getWhatsAppUrl(whatsappMessages.collection)}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Commander sur WhatsApp
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <span className="block h-10 w-px bg-ivory/40" />
      </div>
    </section>
  );
}
