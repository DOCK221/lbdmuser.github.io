"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { socials } from "@/data/socials";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const iconMap = {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
  FiMail,
} as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");

    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,195,165,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Let's talk"
          title="Contact"
          description="Un projet, une collaboration, une idée ? Écrivons la suite ensemble."
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="border border-white/10 bg-surface/40 p-7 md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs tracking-[0.2em] text-mute uppercase">
                    Nom
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full border border-white/10 bg-ink/60 px-4 py-3 text-white outline-none transition focus:border-accent"
                    placeholder="Votre nom"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs tracking-[0.2em] text-mute uppercase">
                    Email
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full border border-white/10 bg-ink/60 px-4 py-3 text-white outline-none transition focus:border-accent"
                    placeholder="vous@email.com"
                  />
                </label>
              </div>

              <label className="mt-6 block">
                <span className="mb-2 block text-xs tracking-[0.2em] text-mute uppercase">
                  Sujet
                </span>
                <input
                  required
                  name="subject"
                  type="text"
                  className="w-full border border-white/10 bg-ink/60 px-4 py-3 text-white outline-none transition focus:border-accent"
                  placeholder="Site web, branding, contenu…"
                />
              </label>

              <label className="mt-6 block">
                <span className="mb-2 block text-xs tracking-[0.2em] text-mute uppercase">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-none border border-white/10 bg-ink/60 px-4 py-3 text-white outline-none transition focus:border-accent"
                  placeholder="Parlez-moi de votre projet…"
                />
              </label>

              <motion.button
                type="submit"
                className="mt-8 inline-flex items-center justify-center bg-accent px-8 py-3.5 text-sm tracking-[0.2em] text-ink uppercase transition hover:bg-white"
                whileHover={{ letterSpacing: "0.24em" }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer
              </motion.button>

              {submitted ? (
                <p className="mt-4 text-sm text-accent">
                  Merci — votre client email va s’ouvrir pour finaliser l’envoi.
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-between border border-white/10 bg-ink/50 p-7 md:p-10">
              <div>
                <p className="text-xs tracking-[0.28em] text-accent uppercase">
                  Réseaux
                </p>
                <h3 className="font-display mt-4 text-3xl text-white">
                  Restons connectés
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mute">
                  Suivez mon univers créatif ou écrivez-moi directement.
                </p>

                <ul className="mt-10 space-y-4">
                  {socials.map((social) => {
                    const Icon = iconMap[social.icon as keyof typeof iconMap];
                    return (
                      <li key={social.id}>
                        <a
                          href={social.href}
                          target={
                            social.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            social.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group flex items-center gap-4 text-white/75 transition hover:text-accent"
                        >
                          <span className="flex h-11 w-11 items-center justify-center border border-white/10 transition group-hover:border-accent/50">
                            <Icon size={18} />
                          </span>
                          <span className="text-sm tracking-[0.18em] uppercase">
                            {social.label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-12 border-t border-white/8 pt-6">
                <p className="text-xs tracking-[0.2em] text-mute uppercase">
                  Email direct
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-lg text-white transition hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
