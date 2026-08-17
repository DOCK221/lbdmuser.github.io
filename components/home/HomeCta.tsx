import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export function HomeCta() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container className="text-center">
        <Reveal>
          <p className="kicker">L’invitation</p>
          <h2 className="editorial mx-auto mt-6 max-w-3xl text-4xl md:text-6xl">
            Le luxe commence
            <br />
            par le confort.
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-stone md:text-base">
            Découvrez la collection, composez votre solution, ou échangez
            directement avec Nid de Plumes.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/boutique">Découvrir la collection</Button>
            <Button href={getWhatsAppUrl(whatsappMessages.advisor)} variant="ghost">
              Parler à un conseiller
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
