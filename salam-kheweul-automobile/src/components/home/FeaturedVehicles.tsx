import Link from "next/link";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Vehicle } from "@/lib/types";

export function FeaturedVehicles({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="En stock à Dakar"
              title="Nos véhicules"
              description="Photos réelles du stock. Cliquez une carte pour la galerie, les informations disponibles, un rendez-vous ou une commande."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Button href="/vehicules" variant="ghost">
              Voir tous les véhicules
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        <p className="mt-10 text-center lg:hidden">
          <Link href="/vehicules" className="text-sm text-gold">
            Voir tous les véhicules →
          </Link>
        </p>
      </Container>
    </section>
  );
}
