"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { vehicles } from "@/data/vehicles";
import { APPOINTMENT_TYPE_LABELS } from "@/lib/constants";
import { formatDate } from "@/lib/format";
import type { AppointmentSlot, AppointmentType, CustomerInfo } from "@/lib/types";

const field =
  "h-12 w-full border border-white/10 bg-transparent px-4 text-sm text-ivory outline-none focus:border-gold/40";

export function AppointmentWizard() {
  const router = useRouter();
  const params = useSearchParams();
  const preset = params.get("vehicule");
  const [vehicleId, setVehicleId] = useState(
    vehicles.find((v) => v.slug === preset)?.id ?? "",
  );
  const [type, setType] = useState<AppointmentType>("visite");
  const [slots, setSlots] = useState<AppointmentSlot[]>([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [customer, setCustomer] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    phone: "",
    whatsapp: "",
    email: "",
  });
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const from = new Date().toISOString().slice(0, 10);
    fetch(`/api/appointments?from=${from}`)
      .then((res) => res.json())
      .then((data) => setSlots(data.slots ?? []))
      .catch(() => setSlots([]));
  }, []);

  const dates = useMemo(
    () => [...new Set(slots.map((slot) => slot.date))],
    [slots],
  );
  const times = slots.filter((slot) => slot.date === date);

  async function submit() {
    setError("");
    if (!date || !time || !customer.firstName || !customer.lastName || !customer.phone) {
      setError("Merci de renseigner le créneau et vos coordonnées.");
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vehicleId: vehicleId || undefined,
          type,
          date,
          time,
          customer,
          notes,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Erreur");
      sessionStorage.setItem("ska-appointment", JSON.stringify(data.appointment));
      router.push(`/rendez-vous/confirmation?ref=${data.appointment.reference}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Impossible de confirmer.");
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-12">
      <section>
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">01 · Véhicule</p>
        <select
          className={`${field} mt-4`}
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
        >
          <option value="" className="bg-ink">
            Conseil général (sans véhicule)
          </option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id} className="bg-ink">
              {vehicle.brand} {vehicle.model} · {vehicle.year}
            </option>
          ))}
        </select>
        <div className="mt-4 flex flex-wrap gap-2">
          {(Object.keys(APPOINTMENT_TYPE_LABELS) as AppointmentType[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setType(item)}
              className={`h-10 px-4 text-[11px] uppercase tracking-[0.16em] border ${
                type === item ? "border-gold text-gold" : "border-white/10 text-mist"
              }`}
            >
              {APPOINTMENT_TYPE_LABELS[item]}
            </button>
          ))}
        </div>
      </section>

      <section>
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">02 · Date</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {dates.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setDate(item);
                setTime("");
              }}
              className={`border px-3 py-3 text-left text-xs ${
                date === item ? "border-gold bg-gold/10" : "border-white/10"
              }`}
            >
              {formatDate(item).replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          ))}
        </div>
      </section>

      <section>
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">03 · Heure</p>
        {date ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {times.map((slot) => (
              <button
                key={slot.time}
                type="button"
                disabled={!slot.available}
                onClick={() => setTime(slot.time)}
                className={`h-11 min-w-20 border px-3 text-sm ${
                  !slot.available
                    ? "cursor-not-allowed border-white/5 text-white/20"
                    : time === slot.time
                      ? "border-gold bg-gold/10 text-ivory"
                      : "border-white/10 text-mist hover:border-white/30"
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-mist">Choisissez d’abord une date.</p>
        )}
      </section>

      <section>
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
          04 · Coordonnées
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input className={field} placeholder="Nom" value={customer.lastName} onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })} />
          <input className={field} placeholder="Prénom" value={customer.firstName} onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })} />
          <input className={field} placeholder="Téléphone" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
          <input className={field} placeholder="WhatsApp" value={customer.whatsapp} onChange={(e) => setCustomer({ ...customer, whatsapp: e.target.value })} />
          <input className={`${field} sm:col-span-2`} type="email" placeholder="Email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />
          <textarea className="min-h-24 sm:col-span-2 border border-white/10 bg-transparent p-4 text-sm outline-none focus:border-gold/40" placeholder="Précisions (optionnel)" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
      </section>

      {error ? <p className="text-sm text-red-300">{error}</p> : null}

      <Button size="lg" disabled={submitting} onClick={submit}>
        {submitting ? "Confirmation…" : "Confirmer le rendez-vous"}
      </Button>
    </div>
  );
}
