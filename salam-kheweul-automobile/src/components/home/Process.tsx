import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Choisissez",
    text: "Parcourez le catalogue, filtrez, ouvrez la fiche. Tout est en photos et en FCFA.",
  },
  {
    n: "02",
    title: "Venez essayer",
    text: "Prenez rendez-vous en 1 minute. Visite en concession ou essai sur route.",
  },
  {
    n: "03",
    title: "On s’occupe du reste",
    text: "Papiers, acompte Wave / Orange Money, livraison. Un conseiller dédié jusqu’aux clés.",
  },
];

export function Process() {
  return (
    <section className="bg-ink py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Simple"
            title="Comment ça se passe"
            description="Pas de jargon, pas de pression. Trois étapes claires."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.08} className="border border-white/10 p-8">
              <p className="text-[11px] tracking-[0.28em] text-gold">{step.n}</p>
              <h3 className="mt-5 font-display text-3xl text-ivory">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
