import { Suspense } from "react";
import { InquiryForm } from "@/components/vehicles/InquiryForm";
import { Container, SectionHeading } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Demande d’informations",
  description:
    "Demandez plus d’informations sur un véhicule Salam Kheweul Automobile.",
  path: "/informations",
});

export default function InquiryPage() {
  return (
    <div className="bg-ink pt-28 pb-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Conseil"
          title="Demander plus d’informations"
          description="Indiquez le véhicule qui vous intéresse. Un conseiller vous répondra avec les informations réellement disponibles."
        />
        <div className="mt-14">
          <Suspense>
            <InquiryForm />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
