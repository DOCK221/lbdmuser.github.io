import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Vente, achat, location et conseil automobile premium à Dakar — Salam Kheweul Automobile.",
  path: "/services",
});

const services = [
  {
    title: "Vente",
    text: "Un catalogue exigeant, des prix transparents, un essai en concession. Nous vous accompagnons jusqu’à la remise des clés, y compris les démarches administratives.",
  },
  {
    title: "Achat",
    text: "Vous souhaitez céder votre véhicule ? Estimation précise, offre ferme, paiement sécurisé. Nous rachetons les automobiles en bon état, toutes marques premium.",
  },
  {
    title: "Location",
    text: "Une flotte soignée pour vos déplacements d’affaires, vos événements et vos séjours. Contrats clairs, assistance, véhicules entretenus.",
  },
  {
    title: "Conseil automobile",
    text: "Budget, import, choix du modèle, lecture d’un historique. Un avis indépendant, confidentiel, sans obligation d’achat.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-ink pt-28 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Savoir-faire"
          title="Services automobiles"
          description="Quatre métiers, une même exigence : vous servir comme on aimerait l’être."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08} className="border border-white/5 p-8">
              <p className="text-[11px] tracking-[0.28em] text-gold">0{index + 1}</p>
              <h2 className="mt-5 font-display text-4xl">{service.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-mist">{service.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap gap-3">
          <Button href="/vehicules">Voir les véhicules</Button>
          <Button href="/rendez-vous" variant="ghost">
            Prendre rendez-vous
          </Button>
        </div>
      </Container>
    </div>
  );
}
