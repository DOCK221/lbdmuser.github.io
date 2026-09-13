import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Nid de Plumes à Dakar. Commander, demander un devis ou parler à un conseiller.",
};

export default function ContactPage() {
  return (
    <div className="bg-ivory pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <p className="kicker">Contact</p>
        <h1 className="editorial mt-5 max-w-3xl text-4xl md:text-6xl lg:text-7xl">
          Une conversation,
          <br />
          un conseil,
          <br />
          une commande.
        </h1>
        <p className="mt-8 max-w-lg text-sm leading-relaxed text-stone md:text-base">
          Nid de Plumes vous répond depuis Dakar. WhatsApp est le chemin le plus
          direct pour commander, demander un devis ou préciser un besoin.
        </p>

        <div className="mt-16 grid gap-10 border-t border-line pt-16 md:grid-cols-3">
          <article>
            <p className="kicker">Commander</p>
            <h2 className="mt-4 font-serif text-3xl">Boutique</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Parcourez la collection, ajoutez au panier, puis finalisez sur
              WhatsApp.
            </p>
            <div className="mt-6">
              <Button href="/boutique" variant="ghost">
                Voir la boutique
              </Button>
            </div>
          </article>
          <article>
            <p className="kicker">Professionnels</p>
            <h2 className="mt-4 font-serif text-3xl">Devis</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Hôtels, résidences, maisons d’hôtes : une demande de devis dédiée.
            </p>
            <div className="mt-6">
              <Button href="/hotels#devis" variant="ghost">
                Demander un devis
              </Button>
            </div>
          </article>
          <article>
            <p className="kicker">{siteConfig.location}</p>
            <h2 className="mt-4 font-serif text-3xl">WhatsApp</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Échangez directement avec un conseiller Nid de Plumes.
            </p>
            <div className="mt-6 flex flex-col items-start gap-3">
              <Button href={getWhatsAppUrl(whatsappMessages.advisor)}>
                Parler à un conseiller
              </Button>
              <Button href={getWhatsAppUrl(whatsappMessages.quote)} variant="ghost">
                Demander un devis
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </div>
  );
}
