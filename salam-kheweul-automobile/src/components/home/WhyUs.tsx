import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const advantages = [
  {
    n: "01",
    title: "Expertise automobile",
    text: "Une lecture précise de chaque véhicule : historique, mécanique, provenance et valeur réelle du marché.",
  },
  {
    n: "02",
    title: "Véhicules sélectionnés",
    text: "Nous n’affichons que ce que nous revendiquerions. Inspection, esthétique, cohérence du prix.",
  },
  {
    n: "03",
    title: "Accompagnement personnalisé",
    text: "Un conseiller dédié, de la première visite jusqu’à la remise des clés. Discrétion comprise.",
  },
  {
    n: "04",
    title: "Service professionnel",
    text: "Rendez-vous, essai, réservation, paiement sécurisé. Une concession pensée comme un hôtel.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-ink py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="La maison"
            title="Pourquoi Salam Kheweul Automobile"
            description="L’exigence d’une concession internationale, l’attention d’une maison familiale dakaroise."
          />
        </Reveal>
        <div className="mt-16 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <Reveal key={item.n} delay={index * 0.08} className="bg-ink p-8">
              <p className="text-[11px] tracking-[0.28em] text-gold">{item.n}</p>
              <h3 className="mt-6 font-display text-2xl text-ivory">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
