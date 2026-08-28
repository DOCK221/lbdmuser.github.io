import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { getRentalVehicles } from "@/data/vehicles";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Location",
  description:
    "Location de véhicules premium à Dakar : SUV, berlines, crossovers. Tarifs à la journée et à la semaine.",
  path: "/location",
});

export default function RentalPage() {
  const list = getRentalVehicles();
  return (
    <div className="bg-ink pt-28 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Location"
          title="Une flotte d’exception"
          description="Choisissez le véhicule, la durée, le rythme. Un dépôt de garantie, un contrat limpide, une assistance dédiée."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/rendez-vous">Réserver une location</Button>
          <Button href="/contact" variant="ghost">
            Demander un devis
          </Button>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} rental />
          ))}
        </div>
      </Container>
    </div>
  );
}
