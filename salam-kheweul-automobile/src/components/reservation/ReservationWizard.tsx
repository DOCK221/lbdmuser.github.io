"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Photo } from "@/components/ui/Photo";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getVehicleById } from "@/data/vehicles";
import { DEPOSIT_RATE, RESERVATION_TYPE_LABELS } from "@/lib/constants";
import { formatPrice } from "@/lib/format";
import { useReservationStore } from "@/lib/store/reservation-store";
import type { ReservationType } from "@/lib/types";

const field =
  "h-12 w-full border border-white/10 bg-transparent px-4 text-sm text-ivory outline-none focus:border-gold/40";

const steps = ["Informations", "Véhicule", "Type", "Paiement"];

export function ReservationWizard() {
  const router = useRouter();
  const store = useReservationStore();
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const vehicle = store.vehicleId ? getVehicleById(store.vehicleId) : undefined;
  const color =
    vehicle?.colors.find((item) => item.id === store.colorId) ?? vehicle?.colors[0];
  const deposit = vehicle ? Math.round(vehicle.price * DEPOSIT_RATE) : 0;

  const canNext = useMemo(() => {
    if (step === 0) {
      const { firstName, lastName, phone, email } = store.customer;
      return firstName && lastName && phone && email;
    }
    if (step === 1) return Boolean(vehicle);
    if (step === 2) return Boolean(store.type);
    return true;
  }, [step, store, vehicle]);

  async function confirm() {
    if (!vehicle || !store.type) return;
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vehicleId: vehicle.id,
          colorId: color?.id ?? vehicle.defaultColorId,
          type: store.type,
          customer: store.customer,
          payDeposit: store.payDeposit && store.type === "reservation",
          notes: store.notes,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Erreur");
      sessionStorage.setItem("ska-reservation", JSON.stringify(data.reservation));
      if (store.payDeposit && store.type === "reservation") {
        router.push(
          `/paiement?reservation=${data.reservation.reference}&deposit=1&amount=${data.reservation.depositAmount}`,
        );
      } else {
        router.push(`/confirmation?ref=${data.reservation.reference}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
      setSubmitting(false);
    }
  }

  return (
    <div>
      <ol className="mb-12 flex gap-4 overflow-x-auto text-[10px] uppercase tracking-[0.2em] text-mist">
        {steps.map((label, index) => (
          <li
            key={label}
            className={index === step ? "text-gold" : index < step ? "text-ivory" : ""}
          >
            0{index + 1} {label}
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            className={field}
            placeholder="Nom"
            value={store.customer.lastName}
            onChange={(e) => store.setCustomer({ lastName: e.target.value })}
          />
          <input
            className={field}
            placeholder="Prénom"
            value={store.customer.firstName}
            onChange={(e) => store.setCustomer({ firstName: e.target.value })}
          />
          <input
            className={field}
            placeholder="Téléphone"
            value={store.customer.phone}
            onChange={(e) => store.setCustomer({ phone: e.target.value })}
          />
          <input
            className={field}
            placeholder="WhatsApp"
            value={store.customer.whatsapp}
            onChange={(e) => store.setCustomer({ whatsapp: e.target.value })}
          />
          <input
            className={`${field} sm:col-span-2`}
            type="email"
            placeholder="Email"
            value={store.customer.email}
            onChange={(e) => store.setCustomer({ email: e.target.value })}
          />
        </div>
      ) : null}

      {step === 1 ? (
        vehicle && color ? (
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="relative h-40 w-full overflow-hidden bg-anthracite sm:w-64">
              <Photo src={color.images[0]} alt="" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                {vehicle.brand}
              </p>
              <h2 className="mt-2 font-display text-3xl">{vehicle.model}</h2>
              <p className="mt-3 text-mist">{color.name}</p>
              <p className="mt-4 text-xl">{formatPrice(vehicle.price)}</p>
            </div>
          </div>
        ) : (
          <p className="text-mist">
            Aucun véhicule sélectionné.{" "}
            <Link href="/vehicules" className="text-gold">
              Choisir un véhicule
            </Link>
          </p>
        )
      ) : null}

      {step === 2 ? (
        <div className="grid gap-3">
          {(Object.keys(RESERVATION_TYPE_LABELS) as ReservationType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => store.setType(type)}
              className={`border px-5 py-5 text-left transition-colors ${
                store.type === type
                  ? "border-gold bg-gold/10"
                  : "border-white/10 hover:border-white/25"
              }`}
            >
              <p className="font-display text-2xl">{RESERVATION_TYPE_LABELS[type]}</p>
              <p className="mt-2 text-sm text-mist">
                {type === "visite" && "Découvrir le véhicule en concession."}
                {type === "essai" && "Prendre le volant, accompagné d’un conseiller."}
                {type === "reservation" &&
                  "Bloquer le véhicule. Un acompte peut être versé."}
              </p>
            </button>
          ))}
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-6">
          {store.type === "reservation" && vehicle ? (
            <>
              <label className="flex cursor-pointer items-start gap-4 border border-white/10 p-5">
                <input
                  type="checkbox"
                  checked={store.payDeposit}
                  onChange={(e) => store.setPayDeposit(e.target.checked)}
                  className="mt-1 accent-[#c4a574]"
                />
                <span>
                  <span className="block font-display text-2xl">
                    Verser un acompte de {formatPrice(deposit)}
                  </span>
                  <span className="mt-2 block text-sm text-mist">
                    10 % du prix pour réserver le véhicule. Wave, Orange Money, carte
                    ou virement. Aucune donnée bancaire n’est stockée chez nous.
                  </span>
                </span>
              </label>
              <p className="text-sm text-mist">
                Prix du véhicule : {formatPrice(vehicle.price)}
              </p>
            </>
          ) : (
            <p className="text-sm leading-relaxed text-mist">
              Aucun paiement n’est requis pour une visite ou un essai. Votre demande
              sera confirmée immédiatement.
            </p>
          )}
          <textarea
            className="min-h-28 w-full border border-white/10 bg-transparent p-4 text-sm outline-none focus:border-gold/40"
            placeholder="Message (optionnel)"
            value={store.notes}
            onChange={(e) => store.setNotes(e.target.value)}
          />
        </div>
      ) : null}

      {error ? <p className="mt-6 text-sm text-red-300">{error}</p> : null}

      <div className="mt-10 flex gap-3">
        {step > 0 ? (
          <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
            Retour
          </Button>
        ) : null}
        {step < 3 ? (
          <Button disabled={!canNext} onClick={() => setStep((s) => s + 1)}>
            Continuer
          </Button>
        ) : (
          <Button disabled={submitting} onClick={confirm}>
            {submitting ? "Confirmation…" : "Confirmer"}
          </Button>
        )}
      </div>
    </div>
  );
}
