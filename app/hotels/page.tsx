import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/hotels/QuoteForm";

export const metadata: Metadata = {
  title: "Hôtels & Professionnels",
  description:
    "Solutions de linge hôtelier pour hôtels, résidences, maisons d’hôtes et gestionnaires. Devis, volume, réassort — stock disponible à Dakar.",
};

const why = [
  {
    title: "Un partenaire local",
    text: "Stock disponible à Dakar, pour des délais adaptés aux réalités de l’exploitation.",
  },
  {
    title: "Une exigence hôtelière",
    text: "Des pièces sélectionnées pour la présentation, la douceur et la tenue dans le temps.",
  },
  {
    title: "Un accompagnement simple",
    text: "Devis, volumes, réassort : un échange direct, sans friction, pensé pour les professionnels.",
  },
];

const solutions = [
  {
    title: "Commandes en volume",
    text: "Équiper plusieurs chambres, étages ou logements avec une collection cohérente.",
  },
  {
    title: "Réapprovisionnement",
    text: "Maintenir le niveau d’accueil grâce à un réassort régulier, au rythme de votre établissement.",
  },
  {
    title: "Devis personnalisés",
    text: "Une proposition adaptée à votre type d’établissement, vos volumes et vos usages.",
  },
];

export default function HotelsPage() {
  return (
    <>
      <PageHero
        image="/images/hotel.jpg"
        alt="Architecture d’un hôtel contemporain de prestige"
        kicker="Hôtels & professionnels"
        title={"Le linge des\nprofessionnels de\nl’hospitalité."}
        subtitle="Hôtels, résidences, maisons d’hôtes et gestionnaires de plusieurs logements."
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="kicker">Pourquoi Nid de Plumes</p>
            <h2 className="editorial mt-5 text-4xl md:text-6xl">
              Une maison pensée
              <br />
              pour l’exploitation.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {why.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <p className="gold-rule mb-6" />
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.8] text-stone">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image
              src="/images/suite.jpg"
              alt="Suite hôtelière avec literie blanche"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center py-20">
            <Container>
              <Reveal>
                <p className="kicker">Solutions professionnelles</p>
                <h2 className="editorial mt-5 text-4xl md:text-5xl">
                  Volume, rythme,
                  <br />
                  continuité.
                </h2>
              </Reveal>
              <div className="mt-12 space-y-10">
                {solutions.map((item) => (
                  <Reveal key={item.title}>
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">
                      {item.text}
                    </p>
                  </Reveal>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32" id="devis">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="kicker">Demande de devis</p>
              <h2 className="editorial mt-5 text-4xl md:text-5xl">
                Parlons de
                <br />
                votre établissement.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-stone">
                Renseignez les éléments essentiels. La demande s’ouvre ensuite
                dans WhatsApp, prête à être envoyée à Nid de Plumes.
              </p>
            </Reveal>
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
