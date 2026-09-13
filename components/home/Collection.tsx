import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { categoryCopy } from "@/lib/products";

const order = ["literie", "serviettes", "salle-de-bain", "piscine"] as const;

export function Collection() {
  return (
    <section className="bg-paper py-24 md:py-36">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="kicker">La collection</p>
          <h2 className="editorial mt-6 text-4xl md:text-6xl">
            Une collection pensée
            <br />
            pour les plus belles chambres
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {order.map((key, index) => {
            const category = categoryCopy[key];
            return (
              <Reveal key={key} delay={index * 0.08} className="group relative">
                <Link href={category.href} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[5/6]">
                    <Image
                      src={category.image}
                      alt={`Collection ${category.title} Nid de Plumes`}
                      fill
                      className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 text-ivory md:p-10">
                      <p className="kicker text-ivory/70">0{index + 1}</p>
                      <h3 className="editorial mt-3 text-4xl md:text-5xl">
                        {category.title}
                      </h3>
                      <ul className="mt-6 space-y-1.5 text-sm text-ivory/80">
                        {category.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
