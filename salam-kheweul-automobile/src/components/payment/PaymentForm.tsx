"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { PAYMENT_METHOD_LABELS, SITE } from "@/lib/constants";
import { formatPrice, generateReference } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";
import type { PaymentMethod } from "@/lib/types";

const methods: { id: PaymentMethod; hint: string }[] = [
  { id: "wave", hint: "Wave — interface prévue, API non connectée" },
  { id: "orange_money", hint: "Orange Money — interface prévue, API non connectée" },
  { id: "card", hint: "Carte bancaire — aucun encaissement réel pour le moment" },
  { id: "bank_transfer", hint: "Virement bancaire — références à confirmer avec un conseiller" },
];

export function PaymentForm({
  amount,
  reservationRef,
  isDeposit,
}: {
  amount: number;
  reservationRef?: string;
  isDeposit: boolean;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const [method, setMethod] = useState<PaymentMethod>("wave");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function pay() {
    setBusy(true);
    setError("");
    try {
      const reference = generateReference("TX");
      const reservationReference = reservationRef ?? params.get("reservation") ?? "";
      const cached = sessionStorage.getItem("ska-reservation");
      if (cached) {
        const reservation = JSON.parse(cached);
        sessionStorage.setItem(
          "ska-reservation",
          JSON.stringify({
            ...reservation,
            paymentStatus: "pending",
            orderStatus: "awaiting_payment",
            paymentMethod: method,
            transactionReference: reference,
          }),
        );
      }
      window.open(
        whatsappLink(
          [
            `Bonjour ${SITE.name},`,
            `Je souhaite verser un acompte (${PAYMENT_METHOD_LABELS[method]}).`,
            `Montant : ${formatPrice(amount)}`,
            reservationReference ? `Réservation : ${reservationReference}` : "",
            `Référence : ${reference}`,
          ]
            .filter(Boolean)
            .join("\n"),
        ),
        "_blank",
        "noopener,noreferrer",
      );
      router.push(
        `/confirmation?ref=${reservationReference}&tx=${reference}&status=pending`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Paiement refusé.");
      setBusy(false);
    }
  }

  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
        {isDeposit ? "Acompte" : "Paiement"}
      </p>
      <p className="mt-3 font-display text-5xl text-ivory">{formatPrice(amount)}</p>
      <p className="mt-3 text-sm text-mist">Devise : XOF · FCFA</p>

      <div className="mt-10 grid gap-3">
        {methods.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setMethod(item.id)}
            className={`flex items-center justify-between border px-5 py-5 text-left ${
              method === item.id ? "border-gold bg-gold/10" : "border-white/10"
            }`}
          >
            <span>
              <span className="block text-sm uppercase tracking-[0.16em]">
                {PAYMENT_METHOD_LABELS[item.id]}
              </span>
              <span className="mt-1 block text-xs text-mist">{item.hint}</span>
            </span>
            <span
              className={`h-3 w-3 rounded-full ${
                method === item.id ? "bg-gold" : "border border-white/30"
              }`}
            />
          </button>
        ))}
      </div>

      <p className="mt-8 max-w-lg text-xs leading-relaxed text-mist">
        Aucune API de paiement n’est configurée. Cette page prépare Wave, Orange
        Money, carte bancaire et virement. Aucun débit réel n’est effectué.
        Salam Kheweul Automobile ne demande pas et ne stocke pas de données de
        carte, PIN ou code secret.
      </p>

      {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={pay} disabled={busy} size="lg">
          {busy ? "Enregistrement…" : "Confirmer le mode de paiement"}
        </Button>
        <Button
          href={`/confirmation?ref=${reservationRef ?? ""}&status=pending`}
          variant="ghost"
        >
          Payer plus tard
        </Button>
      </div>
    </div>
  );
}
