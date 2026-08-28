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
              description="Photos réelles, prix en FCFA, essai possible. Cliquez une carte pour tout voir : couleur, équipements, réservation."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Button href="/vehicules" variant="ghost">
              Tout le catalogue
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        <p className="mt-10 text-center lg:hidden">
          <Link href="/vehicules" className="text-sm text-gold">
            Voir tout le catalogue →
          </Link>
        </p>
      </Container>
    </section>
  );
}
