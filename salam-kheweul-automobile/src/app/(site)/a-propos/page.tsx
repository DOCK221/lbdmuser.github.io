import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "À propos",
  description:
    "Salam Kheweul Automobile — concession premium à Dakar. Vente, achat, location et conseil.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <div className="bg-ink pt-28 pb-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="La maison"
          title="Salam Kheweul Automobile"
          description="Une concession pensée comme un salon privé : peu de véhicules, beaucoup d’attention."
        />
        <div className="mt-12 space-y-6 text-sm leading-8 text-mist">
          <p>
            Salam Kheweul Automobile sélectionne, prépare et présente des automobiles
            d’exception à Dakar. Notre exigence est simple : chaque véhicule exposé
            doit pouvoir être défendu, mécaniquement et esthétiquement.
          </p>
          <p>
            Nous accompagnons les familles, les entrepreneurs et les voyageurs —
            de la première conversation jusqu’à la remise des clés. Vente, rachat,
            location, conseil : un seul interlocuteur, une parole tenue.
          </p>
        </div>
        <div className="mt-12">
          <Button href="/rendez-vous">Nous rencontrer</Button>
        </div>
      </Container>
    </div>
  );
}
