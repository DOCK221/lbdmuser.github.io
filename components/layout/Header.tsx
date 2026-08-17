"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { navItems } from "@/lib/site";
import { useCart } from "@/lib/cart-context";
import { useUi } from "@/lib/ui-context";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import { WhatsAppGlyph } from "@/components/brand/WhatsAppGlyph";

const darkHeroRoutes = new Set(["/", "/airbnb", "/hotels", "/a-propos"]);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();
  const { openSearch } = useUi();
  const overDark = darkHeroRoutes.has(pathname) && !scrolled && !open;
  const logoVariant = overDark ? "light" : "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          overDark ? "bg-transparent" : "glass-header"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1600px] items-center justify-between px-5 md:h-[5.25rem] md:px-8 lg:px-12">
          <Link href="/" aria-label="Nid de Plumes — Accueil" className="relative z-50">
            <Logo variant={open ? "dark" : logoVariant} />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex xl:gap-10"
            aria-label="Navigation principale"
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.68rem] tracking-[0.22em] uppercase transition-colors duration-500 ${
                    overDark
                      ? active
                        ? "text-ivory"
                        : "text-ivory/70 hover:text-ivory"
                      : active
                        ? "text-ink"
                        : "text-ink/55 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative z-50 flex items-center gap-1 md:gap-2">
            <IconButton
              label="Rechercher"
              onClick={openSearch}
              light={overDark}
            >
              <Search strokeWidth={1.4} className="h-[18px] w-[18px]" />
            </IconButton>
            <IconButton
              label="Panier"
              onClick={openCart}
              light={overDark}
            >
              <span className="relative">
                <ShoppingBag strokeWidth={1.4} className="h-[18px] w-[18px]" />
                <AnimatePresence>
                  {count > 0 ? (
                    <motion.span
                      key={count}
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`absolute -right-2.5 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px] ${
                        overDark ? "bg-ivory text-ink" : "bg-ink text-ivory"
                      }`}
                    >
                      {count}
                    </motion.span>
                  ) : null}
                </AnimatePresence>
              </span>
            </IconButton>
            <a
              href={getWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-1 hidden items-center gap-2 border px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-500 md:inline-flex ${
                overDark
                  ? "border-ivory/40 text-ivory hover:bg-ivory hover:text-ink"
                  : "border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-ivory"
              }`}
            >
              <WhatsAppGlyph className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <button
              type="button"
              className={`ml-1 flex h-10 w-10 items-center justify-center lg:hidden ${
                open ? "text-ink" : overDark ? "text-ivory" : "text-ink"
              }`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X strokeWidth={1.2} className="h-6 w-6" />
              ) : (
                <span className="flex w-5 flex-col gap-[5px]">
                  <span className="block h-px w-full bg-current" />
                  <span className="block h-px w-3.5 self-end bg-current" />
                  <span className="block h-px w-full bg-current" />
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <nav className="flex h-full flex-col justify-center px-8 pt-16">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.55 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink/8 py-4 font-serif text-3xl tracking-wide"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={getWhatsAppUrl(whatsappMessages.advisor)}
                className="mt-10 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.22em] uppercase"
              >
                <WhatsAppGlyph className="h-4 w-4" />
                Parler à un conseiller
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function IconButton({
  children,
  onClick,
  label,
  light,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  light: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex h-10 w-10 items-center justify-center transition-colors duration-500 ${
        light ? "text-ivory hover:text-ivory/70" : "text-ink hover:text-stone"
      }`}
    >
      {children}
    </button>
  );
}
