import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { getRentalVehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Location",
  description:
    "Location de véhicules à Dakar chez Salam Kheweul Automobile. Demandez un devis : aucun tarif de location n’est publié tant qu’il n’a pas été communiqué.",
  path: "/location",
});

export default function RentalPage() {
  const list = getRentalVehicles();
  return (
    <div className="bg-ink pt-28 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Location"
          title="Location sur devis"
          description="Aucun véhicule du catalogue actuel n’a de tarif de location renseigné. Contactez-nous pour un devis, sans montant inventé."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/rendez-vous">Prendre rendez-vous</Button>
          <Button href="/contact" variant="ghost">
            Demander un devis
          </Button>
        </div>
        {list.length ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {list.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} rental />
            ))}
          </div>
        ) : (
          <p className="mt-16 max-w-xl text-sm leading-relaxed text-mist">
            La flotte de location sera affichée ici dès que des tarifs et des
            disponibilités auront été fournis.
          </p>
        )}
      </Container>
    </div>
  );
}
