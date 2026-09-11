import { Suspense } from "react";
import { AppointmentWizard } from "@/components/appointment/AppointmentWizard";
import { Container, SectionHeading } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Rendez-vous",
  description:
    "Réservez un créneau en concession : visite, essai ou conseil personnalisé.",
  path: "/rendez-vous",
});

export default function AppointmentPage() {
  return (
    <div className="bg-ink pt-28 pb-24">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Agenda"
          title="Prendre rendez-vous"
          description="Choisissez un véhicule, une date et un horaire. Votre confirmation arrive immédiatement."
        />
        <div className="mt-14">
          <Suspense>
            <AppointmentWizard />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
