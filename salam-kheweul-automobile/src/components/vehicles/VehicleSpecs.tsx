import {
  CONDITION_LABELS,
  FUEL_LABELS,
  TRANSMISSION_LABELS,
} from "@/lib/constants";
import { formatMileage } from "@/lib/format";
import type { Vehicle } from "@/lib/types";

export function VehicleSpecs({ vehicle }: { vehicle: Vehicle }) {
  const rows = [
    ["Année", String(vehicle.year)],
    ["Kilométrage", formatMileage(vehicle.mileage)],
    ["Moteur", vehicle.engine],
    ["Puissance", vehicle.power],
    ["Transmission", TRANSMISSION_LABELS[vehicle.transmission]],
    ["Carburant", FUEL_LABELS[vehicle.fuel]],
    ["Nombre de places", String(vehicle.seats)],
    ["État", CONDITION_LABELS[vehicle.condition]],
    ["Origine", vehicle.origin],
  ];

  return (
    <div>
      <h2 className="text-[11px] uppercase tracking-[0.28em] text-gold">
        Caractéristiques
      </h2>
      <dl className="mt-6 divide-y divide-white/5 border-y border-white/5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-baseline justify-between gap-6 py-4">
            <dt className="text-sm text-mist">{label}</dt>
            <dd className="text-sm text-ivory">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function VehicleFeatures({ features }: { features: string[] }) {
  return (
    <div>
      <h2 className="text-[11px] uppercase tracking-[0.28em] text-gold">
        Équipements
      </h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-ivory/90">
            <span className="h-px w-4 bg-gold/60" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
