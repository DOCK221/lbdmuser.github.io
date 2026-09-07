import { Suspense } from "react";
import { VehicleCatalog } from "@/components/vehicles/VehicleCatalog";
import { Container, SectionHeading } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Nos véhicules",
  description:
    "Catalogue Salam Kheweul Automobile : photos réelles du stock à Dakar. Filtrez par marque, modèle, prix, année, carburant.",
  path: "/vehicules",
});

export default function VehiclesPage() {
  return (
    <div className="bg-ink pt-28 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Catalogue"
          title="Nos véhicules"
          description="Chaque automobile a été photographiée pour ce catalogue. Les champs non communiqués ne sont pas affichés comme s’ils existaient."
        />
        <div className="mt-12">
          <Suspense>
            <VehicleCatalog />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
