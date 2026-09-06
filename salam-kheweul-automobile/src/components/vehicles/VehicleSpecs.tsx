import {
  CONDITION_LABELS,
  FUEL_LABELS,
  TRANSMISSION_LABELS,
} from "@/lib/constants";
import { formatMileage } from "@/lib/format";
import { UNAVAILABLE } from "@/lib/vehicle";
import type { Vehicle } from "@/lib/types";

export function VehicleSpecs({ vehicle }: { vehicle: Vehicle }) {
  const rows: [string, string | null][] = [
    ["Année", vehicle.year ? String(vehicle.year) : null],
    ["Kilométrage", vehicle.mileage != null ? formatMileage(vehicle.mileage) : null],
    ["Moteur", vehicle.engine || null],
    ["Puissance", vehicle.power || null],
    [
      "Transmission",
      vehicle.transmission ? TRANSMISSION_LABELS[vehicle.transmission] : null,
    ],
    ["Carburant", vehicle.fuel ? FUEL_LABELS[vehicle.fuel] : null],
    ["Nombre de places", vehicle.seats != null ? String(vehicle.seats) : null],
    ["Couleur extérieure", vehicle.exteriorColor || null],
    ["Couleur intérieure", vehicle.interiorColor || null],
    ["État", vehicle.condition ? CONDITION_LABELS[vehicle.condition] : null],
    ["Origine", vehicle.origin || null],
  ];

  const visible = rows.filter(([, value]) => value);
  const hiddenCount = rows.length - visible.length;

  return (
    <div>
      <h2 className="text-[11px] uppercase tracking-[0.28em] text-gold">
        Caractéristiques
      </h2>
      <dl className="mt-6 divide-y divide-white/5 border-y border-white/5">
        {visible.map(([label, value]) => (
          <div key={label} className="flex items-baseline justify-between gap-6 py-4">
            <dt className="text-sm text-mist">{label}</dt>
            <dd className="text-sm text-ivory">{value}</dd>
          </div>
        ))}
        {hiddenCount > 0 ? (
          <div className="flex items-baseline justify-between gap-6 py-4">
            <dt className="text-sm text-mist">Autres informations</dt>
            <dd className="text-sm text-ivory">{UNAVAILABLE}</dd>
          </div>
        ) : null}
      </dl>
    </div>
  );
}

export function VehicleFeatures({ features }: { features: string[] }) {
  if (!features.length) return null;
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
