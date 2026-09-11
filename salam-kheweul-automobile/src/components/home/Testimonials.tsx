import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const quotes = [
  {
    name: "Awa Diop",
    role: "Dakar",
    text: "Accueil soigné, essai possible, papiers suivis. Un conseiller disponible du premier message jusqu’à la remise des clés.",
  },
  {
    name: "Mamadou Ndiaye",
    role: "Almadies",
    text: "Les photos correspondaient au véhicule vu en concession. Échanges clairs sur WhatsApp, rendez-vous respecté.",
  },
  {
    name: "Fatou Ba",
    role: "Mermoz",
    text: "Un accompagnement calme, sans pression. On prend le temps de regarder le véhicule et de poser toutes les questions.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-ink py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Ils nous ont fait confiance" title="Paroles de clients" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((quote, index) => (
            <Reveal key={quote.name} delay={index * 0.08} className="border border-white/10 p-7">
              <p className="text-sm leading-relaxed text-ivory/90">“{quote.text}”</p>
              <p className="mt-6 font-display text-xl text-gold">{quote.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-mist">{quote.role}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
