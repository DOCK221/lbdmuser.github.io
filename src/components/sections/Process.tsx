"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Method"
          title="Process"
          description="Un parcours clair, élégant et collaboratif — de la découverte au suivi."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[1.15rem] w-px bg-gradient-to-b from-accent via-white/15 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-10 md:space-y-0">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Reveal key={step.id} delay={index * 0.08}>
                  <li className="relative md:grid md:grid-cols-2 md:gap-16 md:py-10">
                    <div
                      className={`pl-14 md:pl-0 ${
                        isLeft ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                      }`}
                    >
                      <motion.div
                        className="inline-block"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                      >
                        <p className="font-display text-5xl text-accent/80 md:text-6xl">
                          {step.number}
                        </p>
                        <h3 className="mt-3 font-display text-2xl text-white md:text-3xl">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-mute md:text-base">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    <span className="absolute top-2 left-3 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-ink md:left-1/2 md:-translate-x-1/2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>

                    {index < processSteps.length - 1 ? (
                      <span className="absolute top-10 left-[1.35rem] text-accent/40 md:hidden">
                        ↓
                      </span>
                    ) : null}
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
