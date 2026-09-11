import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

const amenities = [
  {
    title: "Essai du véhicule",
    text: "Prenez le volant avant de décider. Un conseiller vous accompagne.",
  },
  {
    title: "Acompte en ligne",
    text: "Bloquez un véhicule avec 10 % via Wave, Orange Money, carte ou virement.",
  },
  {
    title: "Rachat de votre auto",
    text: "Estimation claire, offre ferme, paiement sécurisé.",
  },
  {
    title: "Dossier & carte grise",
    text: "On vous guide sur les démarches administratives au Sénégal.",
  },
  {
    title: "Conseil WhatsApp",
    text: `Une question ? Un conseiller répond au ${SITE.phoneDisplay}.`,
  },
];

export function Amenities() {
  return (
    <section className="bg-ink-soft py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Tout est prévu"
            title="Les commodités de la maison"
            description="Une concession pensée pour que vous n’ayez qu’à choisir la voiture."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="border border-white/10 bg-ink p-6"
            >
              <h3 className="font-display text-2xl text-ivory">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
