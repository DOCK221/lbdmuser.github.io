"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useReservationStore } from "@/lib/store/reservation-store";
import type { Vehicle, VehicleColor } from "@/lib/types";

export function VehicleActions({
  vehicle,
  color,
}: {
  vehicle: Vehicle;
  color: VehicleColor;
}) {
  const router = useRouter();
  const setVehicle = useReservationStore((state) => state.setVehicle);
  const [busy, setBusy] = useState(false);

  function order() {
    setBusy(true);
    setVehicle(vehicle.id, color.id);
    router.push(`/reservation?vehicule=${vehicle.slug}`);
  }

  return (
    <div className="flex flex-col gap-3">
      <Button href={`/rendez-vous?vehicule=${vehicle.slug}`}>
        Prendre rendez-vous
      </Button>
      <Button href={`/informations?vehicule=${vehicle.slug}`} variant="ghost">
        Demander plus d’informations
      </Button>
      <Button
        onClick={order}
        disabled={busy || vehicle.availability === "vendu"}
        variant="line"
      >
        Commander
      </Button>
    </div>
  );
}
