import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Nid de Plumes, marque sénégalaise de linge hôtelier premium. Rendre accessible le linge de qualité hôtelière, à Dakar et au-delà.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/architecture.jpg"
        alt="Architecture contemporaine, lumière et calme"
        kicker="La maison"
        title={"Né d’une vision simple :\nrendre le confort exceptionnel."}
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="kicker">Nid de Plumes</p>
              <h2 className="editorial mt-5 text-4xl md:text-5xl">
                Une marque
                <br />
                sénégalaise.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
              <div className="space-y-6 text-[1.05rem] leading-[1.85] text-stone">
                <p>
                  Nid de Plumes est née avec une ambition claire : rendre
                  accessible le linge de qualité hôtelière, pour que chaque
                  chambre — d’hôtel, d’Airbnb, de résidence ou de maison —
                  puisse offrir une expérience digne des plus belles adresses.
                </p>
                <p>
                  La maison s’adresse aux hôtels, aux hôtes, aux conciergeries,
                  aux appartements meublés et aux particuliers qui recherchent
                  une qualité professionnelle. Le stock est disponible à Dakar.
                </p>
                <p>
                  Rien d’ostentatoire. Une exigence de matière, de tenue, de
                  lumière. Le luxe, ici, commence par le confort.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-ink">
        <Image
          src="/images/interior.jpg"
          alt="Intérieur contemporain, tons ivoire et pierre"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <p className="editorial max-w-3xl text-3xl text-ivory md:text-5xl">
            Transformer chaque chambre en une expérience 5 étoiles.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container className="text-center">
          <Reveal>
            <h2 className="editorial text-4xl md:text-5xl">Échanger avec la maison</h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/boutique">Découvrir la collection</Button>
              <Button href="/contact" variant="ghost">
                Contact
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
