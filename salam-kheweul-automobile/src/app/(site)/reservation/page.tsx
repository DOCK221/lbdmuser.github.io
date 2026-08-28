import { ReservationWizard } from "@/components/reservation/ReservationWizard";
import { Container, SectionHeading } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Réservation",
  description: "Réservez un véhicule, une visite ou un essai chez Salam Kheweul Automobile.",
  path: "/reservation",
});

export default function ReservationPage() {
  return (
    <div className="bg-ink pt-28 pb-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Réservation"
          title="Votre parcours"
          description="Quatre étapes, sans friction. Vous pourrez verser un acompte pour bloquer le véhicule."
        />
        <div className="mt-14">
          <ReservationWizard />
        </div>
      </Container>
    </div>
  );
}
