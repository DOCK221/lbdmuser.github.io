"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-12 md:flex-row md:items-center md:px-8">
        <div>
          <Link
            href="#top"
            className="font-display text-xl tracking-[0.18em] text-white uppercase transition hover:text-accent"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-3 max-w-md text-sm text-mute">
            Creative Director · Web Designer · Content Creator
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-xs tracking-[0.2em] text-white/55 uppercase transition hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs tracking-[0.15em] text-white/35 uppercase md:px-8">
          {siteConfig.copyright}
        </p>
      </div>
    </footer>
  );
}
