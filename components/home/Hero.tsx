import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeatherMark } from "@/components/brand/Logo";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Chambre d’hôtel luxueuse au linge blanc parfaitement installé"
          fill
          priority
          sizes="100vw"
          className="img-ken object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="grain" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-ivory">
        <div className="hero-in">
          <FeatherMark className="h-14 w-9 text-ivory" />
        </div>
        <p className="hero-in hero-in-d1 mt-8 font-serif text-[0.8rem] tracking-[0.55em] md:text-sm">
          NID DE PLUMES
        </p>
        <h1 className="hero-in hero-in-d2 editorial mt-8 text-[2.7rem] text-ivory sm:text-6xl md:text-7xl lg:text-8xl">
          Le confort,
          <br />
          élevé au rang d’art.
        </h1>
        <p className="hero-in hero-in-d3 mt-8 max-w-xl text-sm leading-relaxed text-ivory/78 md:text-base">
          Linge hôtelier premium pour hôtels, Airbnb, résidences et intérieurs
          d’exception.
        </p>
        <div className="hero-in hero-in-d4 mt-12 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button href="/boutique" variant="ivory" className="w-full sm:w-auto">
            Découvrir la collection
          </Button>
          <Button
            href={getWhatsAppUrl(whatsappMessages.collection)}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Commander sur WhatsApp
          </Button>
        </div>
      </div>

      <div className="hero-in hero-in-d5 absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <span className="block h-10 w-px bg-ivory/40" />
      </div>
    </section>
  );
}
