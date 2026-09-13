import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerLinks, siteConfig } from "@/lib/site";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

export function Footer() {
  const instagram = siteConfig.instagramUrl;

  return (
    <footer className="bg-ink text-ivory">
      <Container className="py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              {siteConfig.signature}
            </p>
            <p className="mt-8 font-serif text-3xl leading-tight md:text-4xl">
              Transformer chaque chambre
              <br />
              en une expérience 5 étoiles.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="kicker text-ivory/45">Explorer</p>
              <ul className="mt-6 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/75 transition-colors duration-300 hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker text-ivory/45">Échanger</p>
              <ul className="mt-6 space-y-3 text-sm text-ivory/75">
                <li>
                  {instagram ? (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-ivory"
                    >
                      Instagram
                    </a>
                  ) : (
                    <span>Instagram</span>
                  )}
                </li>
                <li>
                  <a
                    href={getWhatsAppUrl(whatsappMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-ivory"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>{siteConfig.location}</li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="kicker text-ivory/45">Newsletter</p>
              <p className="mt-6 font-serif text-2xl leading-snug">
                Recevez nos nouvelles collections
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-[0.7rem] tracking-[0.16em] uppercase text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nid de Plumes</p>
          <p>Dakar, Sénégal</p>
        </div>
      </Container>
    </footer>
  );
}
