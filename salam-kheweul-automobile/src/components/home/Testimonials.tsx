import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const quotes = [
  {
    name: "Awa Diop",
    role: "Dakar",
    text: "Accueil chic, essai le jour même, papiers suivis. J’ai pris la Classe C sans stress.",
  },
  {
    name: "Mamadou Ndiaye",
    role: "Almadies",
    text: "Le Prado était comme sur les photos. Prix clair en FCFA, conseiller disponible sur WhatsApp.",
  },
  {
    name: "Fatou Ba",
    role: "Mermoz",
    text: "Location du GLE pour un mariage : véhicule impeccable, horaires respectés.",
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
