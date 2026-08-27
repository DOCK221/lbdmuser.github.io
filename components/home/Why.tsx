import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    index: "01",
    title: "Qualité",
    text: "Une sélection pensée pour répondre aux standards de l’hôtellerie.",
  },
  {
    index: "02",
    title: "Disponibilité",
    text: "Des produits déjà disponibles à Dakar.",
  },
  {
    index: "03",
    title: "Élégance",
    text: "Un linge conçu pour transformer visuellement un espace.",
  },
  {
    index: "04",
    title: "Service",
    text: "Une expérience simple, rapide et personnalisée.",
  },
];

export function Why() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="kicker">La signature</p>
          <h2 className="editorial mt-6 text-4xl md:text-6xl">
            Pourquoi
            <br />
            Nid de Plumes ?
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.title}
              delay={index * 0.08}
              className="bg-ivory px-8 py-12 md:px-10 md:py-16"
            >
              <p className="font-serif text-sm tracking-[0.28em] text-champagne">
                {reason.index}
              </p>
              <h3 className="mt-8 font-serif text-3xl">{reason.title}</h3>
              <p className="mt-5 text-sm leading-[1.8] text-stone">{reason.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
