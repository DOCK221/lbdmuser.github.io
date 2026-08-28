"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useReservationStore } from "@/lib/store/reservation-store";
import { vehicleWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
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

  function reserve() {
    setBusy(true);
    setVehicle(vehicle.id, color.id);
    router.push("/reservation");
  }

  return (
    <div className="flex flex-col gap-3">
      <Button onClick={reserve} disabled={busy || vehicle.availability === "vendu"}>
        Réserver ce véhicule
      </Button>
      <Button href={`/rendez-vous?vehicule=${vehicle.slug}`} variant="ghost">
        Prendre rendez-vous
      </Button>
      <Button
        href={whatsappLink(vehicleWhatsAppMessage(vehicle.brand, vehicle.model))}
        variant="line"
      >
        Contacter un conseiller
      </Button>
    </div>
  );
}
