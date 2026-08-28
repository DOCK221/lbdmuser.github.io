import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-ink-soft">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              Concession automobile premium à Dakar. Vente, achat, location et
              accompagnement sur-mesure pour votre prochain véhicule.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/achat" className="text-sm text-mist hover:text-ivory">
                  Vendre votre véhicule
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-mist">
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-ivory">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} className="hover:text-ivory">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={SITE.instagram} className="hover:text-ivory">
                  Instagram
                </a>
              </li>
              <li>
                <a href={SITE.tiktok} className="hover:text-ivory">
                  TikTok
                </a>
              </li>
              <li>{SITE.address}</li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/5 pt-6 text-[11px] uppercase tracking-[0.18em] text-mist/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}</p>
          <p>Dakar · Sénégal</p>
        </div>
      </Container>
    </footer>
  );
}
