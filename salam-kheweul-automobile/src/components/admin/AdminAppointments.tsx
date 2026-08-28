"use client";

import { useEffect, useState } from "react";
import { APPOINTMENT_TYPE_LABELS } from "@/lib/constants";
import { formatDate } from "@/lib/format";
import type { Appointment, AppointmentStatus } from "@/lib/types";

export function AdminAppointments() {
  const [items, setItems] = useState<Appointment[]>([]);

  async function load() {
    const res = await fetch("/api/appointments");
    const data = await res.json();
    setItems(data.appointments ?? []);
  }

  useEffect(() => {
    let cancelled = false;
    fetch("/api/appointments")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setItems(data.appointments ?? []);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function setStatus(id: string, status: AppointmentStatus) {
    await fetch(`/api/appointments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load();
  }

  return (
    <div>
      <h1 className="font-display text-4xl">Rendez-vous</h1>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="text-[10px] uppercase tracking-[0.18em] text-mist">
            <tr className="border-b border-white/10">
              <th className="py-3 font-normal">Réf.</th>
              <th className="py-3 font-normal">Client</th>
              <th className="py-3 font-normal">Créneau</th>
              <th className="py-3 font-normal">Type</th>
              <th className="py-3 font-normal">Statut</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-white/5">
                <td className="py-4">{item.reference}</td>
                <td className="py-4">
                  {item.customer.firstName} {item.customer.lastName}
                  <span className="block text-xs text-mist">{item.customer.phone}</span>
                </td>
                <td className="py-4">
                  {formatDate(item.date)} · {item.time}
                </td>
                <td className="py-4">{APPOINTMENT_TYPE_LABELS[item.type]}</td>
                <td className="py-4">
                  <select
                    className="border border-white/10 bg-transparent px-2 py-1 text-xs"
                    value={item.status}
                    onChange={(e) =>
                      setStatus(item.id, e.target.value as AppointmentStatus)
                    }
                  >
                    <option value="pending" className="bg-ink">En attente</option>
                    <option value="confirmed" className="bg-ink">Confirmé</option>
                    <option value="rescheduled" className="bg-ink">Modifié</option>
                    <option value="cancelled" className="bg-ink">Annulé</option>
                    <option value="completed" className="bg-ink">Terminé</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
