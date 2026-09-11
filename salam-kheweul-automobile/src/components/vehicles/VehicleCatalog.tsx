"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { VehicleFilters } from "@/components/vehicles/VehicleFilters";
import { filterVehicles, vehicles } from "@/data/vehicles";

export function VehicleCatalog() {
  const params = useSearchParams();
  const list = useMemo(() => {
    const read = (key: string) => params.get(key) ?? undefined;
    return filterVehicles(vehicles, {
      query: read("q"),
      brand: read("brand"),
      model: read("model"),
      minPrice: read("minPrice") ? Number(read("minPrice")) : undefined,
      maxPrice: read("maxPrice") ? Number(read("maxPrice")) : undefined,
      year: read("year") ? Number(read("year")) : undefined,
      fuel: read("fuel"),
      transmission: read("transmission"),
      sort: read("sort") ?? "newest",
    });
  }, [params]);

  return (
    <>
      <VehicleFilters />
      <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-mist">
        {list.length} véhicule{list.length > 1 ? "s" : ""}
      </p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {list.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
      {list.length === 0 ? (
        <p className="mt-16 text-center text-mist">
          Aucun véhicule ne correspond à votre recherche.
        </p>
      ) : null}
    </>
  );
}
