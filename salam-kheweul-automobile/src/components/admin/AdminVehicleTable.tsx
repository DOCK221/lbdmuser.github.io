"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { formatPrice } from "@/lib/format";
import type { Vehicle } from "@/lib/types";

export function AdminVehicleTable() {
  const [items, setItems] = useState<Vehicle[]>([]);

  async function load() {
    const res = await fetch("/api/vehicles");
    const data = await res.json();
    setItems(data.vehicles ?? []);
  }

  useEffect(() => {
    let cancelled = false;
    fetch("/api/vehicles")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setItems(data.vehicles ?? []);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function patch(id: string, body: Partial<Vehicle>) {
    await fetch(`/api/vehicles/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    load();
  }

  async function remove(id: string) {
    await fetch(`/api/vehicles/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-4xl">Véhicules</h1>
        <Button href="/admin/vehicules/nouveau" size="sm">
          Ajouter
        </Button>
      </div>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="text-[10px] uppercase tracking-[0.18em] text-mist">
            <tr className="border-b border-white/10">
              <th className="py-3 font-normal">Véhicule</th>
              <th className="py-3 font-normal">Prix</th>
              <th className="py-3 font-normal">Statut</th>
              <th className="py-3 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((vehicle) => (
              <tr key={vehicle.id} className="border-b border-white/5">
                <td className="py-4">
                  {vehicle.brand} {vehicle.model}
                  <span className="block text-xs text-mist">{vehicle.year}</span>
                </td>
                <td className="py-4">{formatPrice(vehicle.price)}</td>
                <td className="py-4">
                  <AvailabilityBadge value={vehicle.availability} />
                </td>
                <td className="py-4">
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/admin/vehicules/${vehicle.id}`}
                      className="text-[10px] uppercase tracking-[0.14em] text-gold"
                    >
                      Modifier
                    </Link>
                    <button
                      type="button"
                      className="text-[10px] uppercase tracking-[0.14em] text-mist"
                      onClick={() =>
                        patch(vehicle.id, {
                          availability:
                            vehicle.availability === "vendu"
                              ? "disponible"
                              : "vendu",
                        })
                      }
                    >
                      {vehicle.availability === "vendu" ? "Disponible" : "Vendu"}
                    </button>
                    <button
                      type="button"
                      className="text-[10px] uppercase tracking-[0.14em] text-red-300"
                      onClick={() => remove(vehicle.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
