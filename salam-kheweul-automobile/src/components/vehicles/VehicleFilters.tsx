"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { vehicles } from "@/data/vehicles";
import { FUEL_LABELS, TRANSMISSION_LABELS } from "@/lib/constants";

const field =
  "h-11 w-full border border-white/10 bg-transparent px-3 text-sm text-ivory outline-none focus:border-gold/40";

export function VehicleFilters() {
  const router = useRouter();
  const params = useSearchParams();
  const brands = [...new Set(vehicles.map((v) => v.brand))];
  const years = [...new Set(vehicles.map((v) => v.year))].sort((a, b) => b - a);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = new URLSearchParams();
    for (const [key, value] of data.entries()) {
      if (typeof value === "string" && value) next.set(key, value);
    }
    router.push(`/vehicules?${next.toString()}`);
  }

  return (
    <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <input
        name="q"
        defaultValue={params.get("q") ?? ""}
        placeholder="Recherche"
        className={field}
      />
      <select name="brand" defaultValue={params.get("brand") ?? ""} className={field}>
        <option value="">Marque</option>
        {brands.map((brand) => (
          <option key={brand} value={brand} className="bg-ink">
            {brand}
          </option>
        ))}
      </select>
      <input
        name="model"
        defaultValue={params.get("model") ?? ""}
        placeholder="Modèle"
        className={field}
      />
      <select name="year" defaultValue={params.get("year") ?? ""} className={field}>
        <option value="">Année</option>
        {years.map((year) => (
          <option key={year} value={year} className="bg-ink">
            {year}
          </option>
        ))}
      </select>
      <input
        name="minPrice"
        type="number"
        defaultValue={params.get("minPrice") ?? ""}
        placeholder="Prix min. FCFA"
        className={field}
      />
      <input
        name="maxPrice"
        type="number"
        defaultValue={params.get("maxPrice") ?? ""}
        placeholder="Prix max. FCFA"
        className={field}
      />
      <select name="fuel" defaultValue={params.get("fuel") ?? ""} className={field}>
        <option value="">Carburant</option>
        {Object.entries(FUEL_LABELS).map(([value, label]) => (
          <option key={value} value={value} className="bg-ink">
            {label}
          </option>
        ))}
      </select>
      <select
        name="transmission"
        defaultValue={params.get("transmission") ?? ""}
        className={field}
      >
        <option value="">Transmission</option>
        {Object.entries(TRANSMISSION_LABELS).map(([value, label]) => (
          <option key={value} value={value} className="bg-ink">
            {label}
          </option>
        ))}
      </select>
      <select name="sort" defaultValue={params.get("sort") ?? "newest"} className={field}>
        <option value="newest" className="bg-ink">
          Nouveauté
        </option>
        <option value="price_asc" className="bg-ink">
          Prix croissant
        </option>
        <option value="price_desc" className="bg-ink">
          Prix décroissant
        </option>
        <option value="year_desc" className="bg-ink">
          Année récente
        </option>
        <option value="year_asc" className="bg-ink">
          Année ancienne
        </option>
      </select>
      <button
        type="submit"
        className="h-11 border border-gold/40 text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10"
      >
        Filtrer
      </button>
    </form>
  );
}
