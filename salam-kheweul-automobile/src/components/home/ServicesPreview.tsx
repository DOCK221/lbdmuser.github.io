import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    href: "/vehicules",
    title: "Vente",
    text: "Berlines, SUV et crossovers premium, prêts à être essayés.",
  },
  {
    href: "/achat",
    title: "Achat",
    text: "Nous évaluons et rachetons votre véhicule dans des conditions claires.",
  },
  {
    href: "/location",
    title: "Location",
    text: "Une flotte soignée, à la journée ou à la semaine, avec dépôt sécurisé.",
  },
  {
    href: "/services",
    title: "Conseil automobile",
    text: "Orientation, budget, import, financement : un avis d’expert, sans pression.",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-ink-soft py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Savoir-faire" title="Services" />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <Link
                href={service.href}
                className="group flex min-h-[180px] flex-col justify-between border border-white/5 p-8 transition-all duration-500 hover:border-gold/30 hover:bg-white/[0.02]"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
                  0{index + 1}
                </p>
                <div>
                  <h3 className="font-display text-3xl text-ivory">{service.title}</h3>
                  <p className="mt-3 max-w-md text-sm text-mist">{service.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
