"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const fields = [
  { name: "nom", label: "Nom", type: "text", required: true },
  { name: "entreprise", label: "Entreprise", type: "text", required: true },
  { name: "type", label: "Type d’établissement", type: "text", required: true },
  {
    name: "chambres",
    label: "Nombre de chambres / logements",
    type: "text",
    required: true,
  },
  { name: "produits", label: "Produits recherchés", type: "text", required: true },
  { name: "quantite", label: "Quantité estimée", type: "text", required: false },
  { name: "telephone", label: "Téléphone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
] as const;

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Bonjour Nid de Plumes, je souhaite demander un devis professionnel.",
      "",
      `Nom : ${data.get("nom")}`,
      `Entreprise : ${data.get("entreprise")}`,
      `Type d’établissement : ${data.get("type")}`,
      `Nombre de chambres / logements : ${data.get("chambres")}`,
      `Produits recherchés : ${data.get("produits")}`,
      `Quantité estimée : ${data.get("quantite") || "—"}`,
      `Téléphone : ${data.get("telephone")}`,
      `Email : ${data.get("email")}`,
      `Message : ${data.get("message") || "—"}`,
    ].join("\n");
    window.open(getWhatsAppUrl(lines), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <p className="font-serif text-3xl leading-snug">
        Merci. Votre demande de devis s’ouvre dans WhatsApp.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 md:grid-cols-2">
      {fields.map((field) => (
        <label key={field.name} className="block">
          <span className="kicker">{field.label}</span>
          <input
            name={field.name}
            type={field.type}
            required={field.required}
            className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-ink"
          />
        </label>
      ))}
      <label className="md:col-span-2">
        <span className="kicker">Message</span>
        <textarea
          name="message"
          rows={4}
          className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-ink"
        />
      </label>
      <div className="md:col-span-2">
        <Button type="submit">Demander mon devis</Button>
      </div>
    </form>
  );
}
