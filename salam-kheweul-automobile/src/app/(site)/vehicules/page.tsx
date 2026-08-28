import { Suspense } from "react";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { VehicleFilters } from "@/components/vehicles/VehicleFilters";
import { Container, SectionHeading } from "@/components/ui/Container";
import { filterVehicles, vehicles } from "@/data/vehicles";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Nos véhicules",
  description:
    "Catalogue premium Salam Kheweul Automobile : Mercedes, BMW, Range Rover, Toyota et plus. Filtrez par prix, année, carburant.",
  path: "/vehicules",
});

type Search = Record<string, string | string[] | undefined>;

export default async function VehiclesPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const params = await searchParams;
  const read = (key: string) => {
    const value = params[key];
    return Array.isArray(value) ? value[0] : value;
  };
  const list = filterVehicles(vehicles, {
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

  return (
    <div className="bg-ink pt-28 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Catalogue"
          title="Nos véhicules"
          description="Chaque automobile a été sélectionnée, inspectée et photographiée. Utilisez les filtres pour affiner."
        />
        <div className="mt-12">
          <Suspense>
            <VehicleFilters />
          </Suspense>
        </div>
        <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-mist">
          {list.length} véhicule{list.length > 1 ? "s" : ""}
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        {list.length === 0 ? (
          <p className="mt-16 text-center text-mist">
            Aucun véhicule ne correspond à votre recherche.
          </p>
        ) : null}
      </Container>
    </div>
  );
}
