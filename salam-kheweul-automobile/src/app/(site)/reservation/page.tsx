import { Suspense } from "react";
import { ReservationWizard } from "@/components/reservation/ReservationWizard";
import { Container, SectionHeading } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Commande",
  description:
    "Commandez un véhicule chez Salam Kheweul Automobile. Wave, Orange Money, carte ou virement — interface préparée, sans paiement réel tant qu’aucune API n’est connectée.",
  path: "/reservation",
});

export default function ReservationPage() {
  return (
    <div className="bg-ink pt-28 pb-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Commande"
          title="Votre parcours"
          description="Coordonnées, véhicule, type de demande, puis choix du mode de paiement si un acompte est possible. Aucun encaissement réel n’est actif pour le moment."
        />
        <div className="mt-14">
          <Suspense>
            <ReservationWizard />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
