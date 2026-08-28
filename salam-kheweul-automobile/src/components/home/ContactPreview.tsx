import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function ContactPreview() {
  return (
    <section className="border-t border-white/5 bg-ink-soft py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Parlons de votre prochain véhicule"
              description="Un appel, un message WhatsApp, ou un passage en concession. Nous sommes disponibles."
            />
          </Reveal>
          <Reveal delay={0.1} className="space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                Téléphone
              </p>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-2 block font-display text-3xl text-ivory"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                WhatsApp
              </p>
              <a
                href={whatsappLink()}
                className="mt-2 block font-display text-3xl text-ivory"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={SITE.instagram} variant="ghost" size="sm">
                Instagram
              </Button>
              <Button href={SITE.tiktok} variant="ghost" size="sm">
                TikTok
              </Button>
              <Button href={whatsappLink()} variant="line" size="sm">
                WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
