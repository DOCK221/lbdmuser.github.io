"use client";

import { useState } from "react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "Puis-je essayer le véhicule avant d’acheter ?",
    a: "Oui. Réservez un créneau d’essai en ligne ou par WhatsApp. Un conseiller vous accueille en concession.",
  },
  {
    q: "Comment payer un acompte ?",
    a: "Wave, Orange Money, carte bancaire ou virement. Nous ne stockons jamais vos données bancaires.",
  },
  {
    q: "Les prix sont-ils en FCFA ?",
    a: "Oui, tous les prix affichés sont en francs CFA (XOF), TTC indiqués sur la fiche.",
  },
  {
    q: "Rachetez-vous mon ancienne voiture ?",
    a: "Oui. Envoyez photos et infos via la page Achat : estimation sous 24 h.",
  },
  {
    q: "Où êtes-vous situés ?",
    a: "À Dakar. Horaires : lundi–samedi 9h–19h, dimanche sur rendez-vous. Appelez le +221 77 347 39 20.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-ink-soft py-20">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="Questions" title="Pour y voir clair" />
        </Reveal>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item, index) => (
            <button
              key={item.q}
              type="button"
              onClick={() => setOpen(index === open ? -1 : index)}
              className="block w-full py-5 text-left"
            >
              <span className="flex items-center justify-between gap-4">
                <span className="font-display text-xl text-ivory">{item.q}</span>
                <span className="text-gold">{open === index ? "–" : "+"}</span>
              </span>
              {open === index ? (
                <span className="mt-3 block text-sm leading-relaxed text-mist">{item.a}</span>
              ) : null}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
