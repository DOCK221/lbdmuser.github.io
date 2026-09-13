import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const points = [
  "Commandes en volume",
  "Tarifs professionnels",
  "Devis personnalisés",
  "Approvisionnement récurrent",
  "Réassort",
  "Stock disponible localement",
];

export function Professionals() {
  return (
    <section className="bg-ink text-ivory">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-full">
          <Image
            src="/images/hotel.jpg"
            alt="Hôtel de prestige, architecture contemporaine"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center py-20 md:py-28">
          <Container className="lg:px-16">
            <Reveal>
              <p className="kicker text-ivory/45">Hôtels & professionnels</p>
              <h2 className="editorial mt-6 text-4xl md:text-5xl lg:text-6xl">
                Le linge des professionnels de l’hospitalité
              </h2>
              <p className="mt-8 max-w-lg text-[0.95rem] leading-[1.8] text-ivory/70">
                Pour les hôtels, résidences, maisons d’hôtes et gestionnaires de
                plusieurs logements, Nid de Plumes propose des solutions
                adaptées aux besoins professionnels.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {points.map((point, index) => (
                <Reveal key={point} delay={index * 0.04}>
                  <p className="flex items-baseline gap-4 text-sm tracking-wide">
                    <span className="font-serif text-champagne">0{index + 1}</span>
                    {point}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12">
              <Button href="/hotels" variant="ivory">
                Demander un devis professionnel
              </Button>
            </Reveal>
          </Container>
        </div>
      </div>
    </section>
  );
}
