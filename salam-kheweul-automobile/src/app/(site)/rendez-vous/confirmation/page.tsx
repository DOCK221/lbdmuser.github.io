"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getVehicleById } from "@/data/vehicles";
import { APPOINTMENT_TYPE_LABELS } from "@/lib/constants";
import { formatDate } from "@/lib/format";
import { useSessionJson } from "@/lib/hooks/session";
import type { Appointment } from "@/lib/types";

function ConfirmationInner() {
  const params = useSearchParams();
  const appointment = useSessionJson<Appointment>("ska-appointment");
  const vehicle = appointment?.vehicleId
    ? getVehicleById(appointment.vehicleId)
    : undefined;

  if (!appointment) {
    return (
      <div className="bg-ink pt-32 pb-24">
        <Container className="max-w-2xl">
          <p className="text-mist">
            {params.get("ref")
              ? "Confirmation introuvable dans cette session."
              : "Chargement de la confirmation…"}
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-ink pt-32 pb-24">
      <Container className="max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Confirmé</p>
        <h1 className="mt-4 font-display text-5xl leading-tight">
          Votre rendez-vous est confirmé.
        </h1>
        <dl className="mt-12 space-y-5 border-y border-white/5 py-8 text-sm">
          <Row label="Référence" value={appointment.reference} />
          <Row
            label="Véhicule"
            value={vehicle ? `${vehicle.brand} ${vehicle.model}` : "Conseil général"}
          />
          <Row label="Type" value={APPOINTMENT_TYPE_LABELS[appointment.type]} />
          <Row label="Date" value={formatDate(appointment.date)} />
          <Row label="Heure" value={appointment.time} />
          <Row
            label="Client"
            value={`${appointment.customer.firstName} ${appointment.customer.lastName}`}
          />
        </dl>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Retour à l’accueil</Button>
          <Button href="/vehicules" variant="ghost">
            Voir les véhicules
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
      <dd className="text-ivory">{value}</dd>
    </div>
  );
}

export default function AppointmentConfirmationPage() {
  return (
    <Suspense>
      <ConfirmationInner />
    </Suspense>
  );
}
