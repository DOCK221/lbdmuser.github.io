"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { vehicles } from "@/data/vehicles";
import {
  vehicleDisplayName,
  vehicleInquiryMessage,
} from "@/lib/vehicle";
import { whatsappLink } from "@/lib/whatsapp";
import { SITE } from "@/lib/constants";

const field =
  "h-12 w-full border border-white/10 bg-transparent px-4 text-sm text-ivory outline-none focus:border-gold/40";

export function InquiryForm({ initialSlug }: { initialSlug?: string }) {
  const params = useSearchParams();
  const preset = params.get("vehicule") ?? initialSlug;
  const selected = useMemo(
    () => vehicles.find((vehicle) => vehicle.slug === preset) ?? vehicles[0],
    [preset],
  );
  const [vehicleId, setVehicleId] = useState(selected?.id ?? "");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const vehicle = vehicles.find((item) => item.id === vehicleId) ?? selected;
  const [message, setMessage] = useState(
    vehicle ? vehicleInquiryMessage(vehicle) : "",
  );
  const [sent, setSent] = useState(false);

  function onVehicleChange(id: string) {
    setVehicleId(id);
    const next = vehicles.find((item) => item.id === id);
    if (next) setMessage(vehicleInquiryMessage(next));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!vehicle) return;
    const body = [
      `Bonjour ${SITE.name},`,
      vehicleInquiryMessage(vehicle).replace(/^Bonjour, /, ""),
      "",
      `${firstName} ${lastName}`.trim(),
      `Téléphone : ${phone}`,
      email ? `Email : ${email}` : "",
      message ? `Message : ${message}` : "",
    ]
      .filter((line) => line !== "")
      .join("\n");
    window.open(whatsappLink(body), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <p className="font-display text-3xl text-ivory">
        Merci. Votre demande s’ouvre sur WhatsApp pour être transmise à un conseiller.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <select
        required
        className={field}
        value={vehicleId}
        onChange={(event) => onVehicleChange(event.target.value)}
      >
        {vehicles.map((item) => (
          <option key={item.id} value={item.id} className="bg-ink">
            {vehicleDisplayName(item)}
            {item.year ? ` · ${item.year}` : ""}
          </option>
        ))}
      </select>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          className={field}
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          required
          className={field}
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <input
        required
        className={field}
        placeholder="Téléphone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className={field}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        required
        className="min-h-36 border border-white/10 bg-transparent p-4 text-sm outline-none focus:border-gold/40"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">Envoyer la demande</Button>
      <p className="text-xs leading-relaxed text-mist">
        La demande est préparée pour WhatsApp. Aucune information technique non
        communiquée n’est ajoutée automatiquement.
      </p>
    </form>
  );
}
