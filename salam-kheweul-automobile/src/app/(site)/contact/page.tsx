"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

const field =
  "h-12 w-full border border-white/10 bg-transparent px-4 text-sm text-ivory outline-none focus:border-gold/40";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-ink pt-28 pb-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Écrivons-nous"
              description="Téléphone, WhatsApp ou formulaire. Nous répondons avec la même attention."
            />
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                  Téléphone
                </p>
                <a href={`tel:${SITE.phoneTel}`} className="mt-2 block font-display text-3xl">
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                  WhatsApp
                </p>
                <a href={whatsappLink()} className="mt-2 block font-display text-3xl">
                  {SITE.phoneDisplay}
                </a>
              </div>
              <p className="text-sm text-mist">
                {SITE.address}
                <br />
                {SITE.hours}
                <br />
                {SITE.sunday}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={SITE.instagram} variant="ghost" size="sm">
                  Instagram
                </Button>
                <Button href={SITE.tiktok} variant="ghost" size="sm">
                  TikTok
                </Button>
                <Button href={whatsappLink()} variant="line" size="sm">
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
          <div>
            {sent ? (
              <p className="font-display text-3xl">Message envoyé. Merci.</p>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <input required className={field} placeholder="Nom" />
                <input required className={field} placeholder="Prénom" />
                <input required className={field} placeholder="Téléphone" />
                <input className={field} type="email" placeholder="Email" />
                <textarea
                  required
                  className="min-h-36 border border-white/10 bg-transparent p-4 text-sm outline-none focus:border-gold/40"
                  placeholder="Votre message"
                />
                <Button type="submit">Envoyer</Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
