import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { hostPackages } from "@/lib/packages";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Airbnb",
  description:
    "Donnez à votre logement les standards d’un hôtel. Packages Nid de Plumes pour Airbnb, locations meublées et conciergeries.",
};

export default function AirbnbPage() {
  return (
    <>
      <PageHero
        image="/images/host.jpg"
        alt="Chambre d’un logement raffiné, linge blanc hôtelier"
        kicker="Airbnb & locations meublées"
        title={"Donnez à votre logement\nles standards d’un hôtel."}
        subtitle="Des packages conçus pour préparer chaque chambre avec confort, cohérence et élégance."
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="kicker">Les packages</p>
            <h2 className="editorial mt-5 text-4xl md:text-5xl">
              Huit compositions,
              <br />
              une même exigence.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-stone md:text-base">
              Le contenu détaillé, le nombre de pièces et les tarifs de chaque
              package sont communiqués sur demande — afin de les ajuster à
              votre logement.
            </p>
          </Reveal>

          <div className="mt-16 space-y-20">
            {hostPackages.map((item, index) => (
              <Reveal key={item.slug}>
                <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <div
                    className={`relative aspect-[4/5] overflow-hidden bg-cream lg:col-span-6 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="lg:col-span-6">
                    <p className="font-serif text-sm tracking-[0.28em] text-champagne">
                      0{index + 1}
                    </p>
                    <h3 className="editorial mt-4 text-4xl md:text-5xl">{item.name}</h3>
                    <p className="mt-6 max-w-md text-[0.95rem] leading-[1.8] text-stone">
                      {item.intent}
                    </p>
                    <dl className="mt-8 space-y-3 text-sm">
                      <div className="flex justify-between gap-6 border-b border-line py-3">
                        <dt className="tracking-[0.14em] uppercase text-stone">Contenu</dt>
                        <dd>Sur demande</dd>
                      </div>
                      <div className="flex justify-between gap-6 border-b border-line py-3">
                        <dt className="tracking-[0.14em] uppercase text-stone">Pièces</dt>
                        <dd>Selon le logement</dd>
                      </div>
                      <div className="flex justify-between gap-6 border-b border-line py-3">
                        <dt className="tracking-[0.14em] uppercase text-stone">Prix</dt>
                        <dd>Sur demande</dd>
                      </div>
                    </dl>
                    <div className="mt-8">
                      <Button
                        href={getWhatsAppUrl(whatsappMessages.package(item.name))}
                      >
                        Commander
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="kicker">Comparer</p>
            <h2 className="editorial mt-5 text-4xl md:text-5xl">
              Une lecture claire
              <br />
              des packages.
            </h2>
          </Reveal>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/15">
                  <th className="py-4 pr-6 font-medium tracking-[0.16em] uppercase text-stone">
                    Package
                  </th>
                  <th className="py-4 pr-6 font-medium tracking-[0.16em] uppercase text-stone">
                    Destination
                  </th>
                  <th className="py-4 font-medium tracking-[0.16em] uppercase text-stone">
                    Intention
                  </th>
                </tr>
              </thead>
              <tbody>
                {hostPackages.map((item) => (
                  <tr key={item.slug} className="border-b border-line">
                    <td className="py-5 pr-6 font-serif text-lg">{item.name}</td>
                    <td className="py-5 pr-6 text-stone">{destination(item.slug)}</td>
                    <td className="py-5 text-stone">{item.intent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Reveal className="mt-14">
            <Button href={getWhatsAppUrl(whatsappMessages.advisor)} variant="ghost">
              Parler à un conseiller
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function destination(slug: string) {
  if (slug === "bathroom-refresh" || slug === "kit-remplacement-serviettes") {
    return "Salle de bain";
  }
  if (slug === "pool-beach") return "Piscine & extérieur";
  if (slug === "apartment-starter") return "Appartement meublé";
  return "Chambre / logement";
}
