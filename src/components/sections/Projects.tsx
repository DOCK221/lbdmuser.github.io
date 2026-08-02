"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Mes Projets"
          description="Des collaborations où stratégie, design et émotion se rencontrent pour bâtir des marques mémorables."
        />

        <div className="grid gap-8 md:gap-10">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <TiltCard className="group">
                <article className="relative overflow-hidden border border-white/8 bg-surface">
                  <div className="grid md:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[420px]">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition duration-700 group-hover:brightness-110"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-surface/80" />
                      <span
                        className="absolute top-5 left-5 text-xs tracking-[0.3em] uppercase"
                        style={{ color: project.accent }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <p className="text-xs tracking-[0.28em] text-mute uppercase">
                        {project.subtitle}
                      </p>
                      <h3 className="font-display mt-3 text-3xl text-white md:text-5xl">
                        {project.title}
                      </h3>
                      <p className="mt-5 text-sm leading-relaxed text-mute md:text-base">
                        {project.description}
                      </p>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {project.missions.slice(0, 4).map((mission) => (
                          <li
                            key={mission}
                            className="border border-white/10 px-3 py-1.5 text-[11px] tracking-[0.14em] text-white/65 uppercase"
                          >
                            {mission}
                          </li>
                        ))}
                      </ul>

                      {project.palette ? (
                        <div className="mt-6 flex items-center gap-3">
                          {project.palette.colors.map((color) => (
                            <span
                              key={color}
                              className="h-3 w-3 rounded-full border border-white/20"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                          <span className="text-xs text-white/40">
                            {project.palette.name}
                          </span>
                        </div>
                      ) : null}

                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.2em] text-accent uppercase transition hover:gap-3"
                      >
                        Voir le projet
                        <FiArrowUpRight />
                      </Link>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
