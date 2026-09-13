import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { hostPackages } from "@/lib/packages";

export function Hosts() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="kicker">Pour les hôtes</p>
            <h2 className="editorial mt-6 text-4xl md:text-6xl lg:text-7xl">
              Votre logement.
              <br />
              L’expérience d’un hôtel.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:pb-2" delay={0.1}>
            <p className="text-[0.95rem] leading-[1.8] text-stone">
              Parce qu’un séjour se joue dans les détails, nos collections
              Airbnb permettent de préparer chaque logement avec un linge pensé
              pour offrir confort, cohérence et élégance.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hostPackages.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-5 font-serif text-2xl">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {item.intent}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Button href="/airbnb" variant="gold">
            Découvrir les packages
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
