import { notFound } from "next/navigation";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { VehicleDetailView } from "@/components/vehicles/VehicleDetailView";
import { VehicleJsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { getRelatedVehicles, getVehicleBySlug, vehicles } from "@/data/vehicles";
import { createMetadata } from "@/lib/seo";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return {};
  const image =
    vehicle.colors.find((c) => c.id === vehicle.defaultColorId)?.images[0];
  return createMetadata({
    title: `${vehicle.brand} ${vehicle.model}`,
    description: `${vehicle.brand} ${vehicle.model} ${vehicle.year} · ${formatPrice(vehicle.price)}. ${vehicle.description}`,
    path: `/vehicules/${vehicle.slug}`,
    image,
  });
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();
  const related = getRelatedVehicles(vehicle);

  return (
    <div className="bg-ink pt-28 pb-24">
      <VehicleJsonLd vehicle={vehicle} />
      <Container>
        <VehicleDetailView vehicle={vehicle} />
        {related.length ? (
          <div className="mt-24">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Dans la même veine
            </p>
            <h2 className="mt-3 font-display text-4xl">Autres véhicules</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <VehicleCard key={item.id} vehicle={item} />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
