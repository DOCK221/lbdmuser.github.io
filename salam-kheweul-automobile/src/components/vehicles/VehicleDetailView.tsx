"use client";

import { useMemo, useState } from "react";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { ColorConfigurator } from "@/components/vehicles/ColorConfigurator";
import { VehicleActions } from "@/components/vehicles/VehicleActions";
import { VehicleFeatures, VehicleSpecs } from "@/components/vehicles/VehicleSpecs";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { formatPrice } from "@/lib/format";
import type { Vehicle } from "@/lib/types";

export function VehicleDetailView({ vehicle }: { vehicle: Vehicle }) {
  const [colorId, setColorId] = useState(vehicle.defaultColorId);
  const color = useMemo(
    () => vehicle.colors.find((item) => item.id === colorId) ?? vehicle.colors[0],
    [colorId, vehicle],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <VehicleGallery vehicle={vehicle} color={color} />
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-[11px] uppercase tracking-[0.32em] text-gold">
          {vehicle.brand}
        </p>
        <h1 className="mt-3 font-display text-4xl text-ivory sm:text-5xl">
          {vehicle.model}
        </h1>
        <div className="mt-4">
          <AvailabilityBadge value={vehicle.availability} />
        </div>
        <p className="mt-8 text-[11px] uppercase tracking-[0.24em] text-mist">
          Prix
        </p>
        <p className="mt-2 font-display text-4xl text-ivory">
          {formatPrice(vehicle.price)}
        </p>
        <p className="mt-8 text-sm leading-relaxed text-mist">{vehicle.description}</p>
        <div className="mt-10">
          <ColorConfigurator
            colors={vehicle.colors}
            selectedId={color.id}
            onSelect={setColorId}
          />
        </div>
        <div className="mt-10">
          <VehicleActions vehicle={vehicle} color={color} />
        </div>
      </div>
      <div className="lg:col-span-2 grid gap-14 lg:grid-cols-2">
        <VehicleSpecs vehicle={vehicle} />
        <VehicleFeatures features={vehicle.features} />
      </div>
    </div>
  );
}
