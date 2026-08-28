"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getVehicleById } from "@/data/vehicles";
import { PAYMENT_METHOD_LABELS, RESERVATION_TYPE_LABELS } from "@/lib/constants";
import { formatPrice } from "@/lib/format";
import { useSessionJson } from "@/lib/hooks/session";
import type { Reservation } from "@/lib/types";

const statusCopy: Record<string, { title: string; text: string }> = {
  success: {
    title: "Paiement confirmé.",
    text: "Votre acompte a été reçu. Un conseiller finalise la réservation.",
  },
  pending: {
    title: "Paiement en attente.",
    text: "Dès confirmation du prestataire, votre réservation sera verrouillée.",
  },
  failed: {
    title: "Paiement échoué.",
    text: "Aucun débit n’a été conservé. Vous pouvez réessayer ou nous écrire.",
  },
  cancelled: {
    title: "Paiement annulé.",
    text: "Votre demande reste enregistrée, sans acompte.",
  },
  idle: {
    title: "Demande enregistrée.",
    text: "Nous vous contactons pour confirmer la suite.",
  },
};

function ConfirmationInner() {
  const params = useSearchParams();
  const reservation = useSessionJson<Reservation>("ska-reservation");
  const status = params.get("status") ?? reservation?.paymentStatus ?? "idle";
  const tx = params.get("tx");
  const copy = statusCopy[status] ?? statusCopy.idle;
  const vehicle = reservation ? getVehicleById(reservation.vehicleId) : undefined;

  return (
    <div className="bg-ink pt-32 pb-24">
      <Container className="max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
          Confirmation
        </p>
        <h1 className="mt-4 font-display text-5xl leading-tight">{copy.title}</h1>
        <p className="mt-5 text-sm leading-relaxed text-mist">{copy.text}</p>
        <dl className="mt-12 space-y-4 border-y border-white/5 py-8 text-sm">
          {reservation ? (
            <>
              <Row label="Référence" value={reservation.reference} />
              <Row label="Type" value={RESERVATION_TYPE_LABELS[reservation.type]} />
              <Row
                label="Véhicule"
                value={
                  vehicle
                    ? `${vehicle.brand} ${vehicle.model}`
                    : reservation.vehicleId
                }
              />
              <Row
                label="Client"
                value={`${reservation.customer.firstName} ${reservation.customer.lastName}`}
              />
              <Row label="Montant" value={formatPrice(reservation.amountDue)} />
              <Row label="Acompte" value={formatPrice(reservation.depositAmount)} />
            </>
          ) : (
            <Row label="Référence" value={params.get("ref") ?? "—"} />
          )}
          {tx ? <Row label="Transaction" value={tx} /> : null}
          {reservation?.paymentMethod ? (
            <Row
              label="Méthode"
              value={PAYMENT_METHOD_LABELS[reservation.paymentMethod]}
            />
          ) : null}
        </dl>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Accueil</Button>
          <Button href="/contact" variant="ghost">
            Contacter un conseiller
          </Button>
        </div>
      </Container>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <dt className="text-mist">{label}</dt>
      <dd className="text-right text-ivory">{value}</dd>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense>
      <ConfirmationInner />
    </Suspense>
  );
}
