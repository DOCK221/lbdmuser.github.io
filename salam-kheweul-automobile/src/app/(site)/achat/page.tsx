"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";

const field =
  "h-12 w-full border border-white/10 bg-transparent px-4 text-sm text-ivory outline-none focus:border-gold/40";

export default function BuyPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-ink pt-28 pb-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Achat de véhicule"
          title="Nous rachetons votre automobile"
          description="Estimation confidentielle, offre claire, paiement sécurisé. Décrivez votre véhicule — un conseiller vous répond sous 24 h."
        />
        {sent ? (
          <p className="mt-12 font-display text-3xl text-ivory">
            Demande reçue. Un conseiller vous contacte très bientôt.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-12 grid gap-4 sm:grid-cols-2">
            <input required className={field} placeholder="Nom" name="lastName" />
            <input required className={field} placeholder="Prénom" name="firstName" />
            <input required className={field} placeholder="Téléphone" name="phone" />
            <input className={field} type="email" placeholder="Email" name="email" />
            <input required className={field} placeholder="Marque" name="brand" />
            <input required className={field} placeholder="Modèle" name="model" />
            <input className={field} placeholder="Année" name="year" />
            <input className={field} placeholder="Kilométrage" name="mileage" />
            <textarea
              className="min-h-32 sm:col-span-2 border border-white/10 bg-transparent p-4 text-sm outline-none focus:border-gold/40"
              placeholder="État, options, historique…"
              name="notes"
            />
            <div className="sm:col-span-2">
              <Button type="submit">Demander une estimation</Button>
            </div>
          </form>
        )}
      </Container>
    </div>
  );
}
