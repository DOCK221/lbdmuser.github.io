import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { title: "100 % coton égyptien", text: "Une matière d’exception, choisie pour sa douceur et sa tenue." },
  { title: "300 fils", text: "La densité d’un linge pensé pour l’hôtellerie de prestige." },
  { title: "Qualité hôtelière", text: "Des standards conçus pour les lieux où chaque détail compte." },
  { title: "Stock disponible à Dakar", text: "Une proximité réelle, pour habiller vos chambres sans attendre." },
];

export function ArtOfComfort() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative aspect-[3/4] overflow-hidden bg-cream lg:col-span-6">
            <Image
              src="/images/comfort.jpg"
              alt="Literie blanche d’hôtel, drapé impeccable"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <div className="lg:col-span-6">
            <Reveal>
              <p className="kicker">L’esprit de la maison</p>
              <h2 className="editorial mt-6 text-4xl md:text-6xl">
                L’art
                <br />
                du confort
              </h2>
              <p className="mt-8 max-w-lg text-[0.95rem] leading-[1.8] text-stone">
                Pensé pour les lieux où chaque détail compte, Nid de Plumes
                sélectionne du linge hôtelier conçu pour offrir douceur,
                élégance et qualité professionnelle.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              {pillars.map((item, index) => (
                <Reveal key={item.title} delay={0.08 * index}>
                  <p className="gold-rule mb-4" />
                  <h3 className="font-serif text-xl tracking-wide">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
