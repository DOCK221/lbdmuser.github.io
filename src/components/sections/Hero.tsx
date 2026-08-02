"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { siteConfig } from "@/data/site";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const rolesRef = useRef<HTMLUListElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, -60]);

  useEffect(() => {
    if (!rolesRef.current) return;

    const items = rolesRef.current.querySelectorAll("li");
    gsap.fromTo(
      items,
      { opacity: 0, y: 24, filter: "blur(8px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.1,
        delay: 1.1,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative h-svh min-h-[680px] overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src={siteConfig.heroImage}
          alt={`${siteConfig.name} — Creative Director`}
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/50 to-ink" />
        <div className="absolute inset-0 bg-ink/35" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 md:px-8 md:pb-28"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-4xl">
          <AnimatedText
            text={siteConfig.name.toUpperCase()}
            className="font-display text-[12vw] leading-[0.9] tracking-[-0.03em] text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            delay={0.2}
            stagger={0.04}
          />

          <ul
            ref={rolesRef}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-[0.22em] text-accent uppercase md:text-sm"
          >
            {siteConfig.roles.map((role) => (
              <li key={role} className="opacity-0">
                {role}
              </li>
            ))}
          </ul>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85, duration: 0.7 }}
          >
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <span className="text-[10px] tracking-[0.35em] text-white/50 uppercase">
          Scroll
        </span>
        <motion.span
          className="block h-12 w-px origin-top bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
