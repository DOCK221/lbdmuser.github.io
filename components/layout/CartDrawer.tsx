"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { isOpen, closeCart, items, count, setQuantity, removeItem } = useCart();

  const message = whatsappMessages.cart(
    items
      .map((line) => `• ${line.product.name} × ${line.quantity}`)
      .join("\n") || "—",
  );

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Fermer le panier"
            className="fixed inset-0 z-[60] bg-ink/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[65] flex h-full w-full max-w-md flex-col bg-paper shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-6">
              <p className="kicker text-ink">Panier · {count}</p>
              <button type="button" onClick={closeCart} aria-label="Fermer">
                <X strokeWidth={1.2} className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              {items.length === 0 ? (
                <p className="font-serif text-2xl leading-snug text-stone">
                  Votre sélection est encore vide.
                </p>
              ) : (
                <ul className="space-y-8">
                  {items.map((line) => (
                    <li key={line.slug} className="flex gap-4">
                      <Link
                        href={`/boutique/${line.slug}`}
                        onClick={closeCart}
                        className="relative h-28 w-20 shrink-0 overflow-hidden bg-cream"
                      >
                        <Image
                          src={line.product.images[0].src}
                          alt={line.product.images[0].alt}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col">
                        <Link
                          href={`/boutique/${line.slug}`}
                          onClick={closeCart}
                          className="font-serif text-xl leading-tight"
                        >
                          {line.product.name}
                        </Link>
                        <p className="mt-1 text-xs tracking-[0.14em] uppercase text-stone">
                          Prix sur demande
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center gap-3 border border-ink/10 px-2 py-1">
                            <button
                              type="button"
                              aria-label="Diminuer"
                              onClick={() =>
                                setQuantity(line.slug, line.quantity - 1)
                              }
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-4 text-center text-sm">
                              {line.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label="Augmenter"
                              onClick={() =>
                                setQuantity(line.slug, line.quantity + 1)
                              }
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            className="text-[0.62rem] tracking-[0.16em] uppercase text-stone hover:text-ink"
                            onClick={() => removeItem(line.slug)}
                          >
                            Retirer
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-line px-6 py-6">
              <Button href="/panier" className="w-full" onClick={closeCart}>
                Voir le panier
              </Button>
              <Button
                href={getWhatsAppUrl(message)}
                variant="ghost"
                className="mt-3 w-full"
              >
                Commander sur WhatsApp
              </Button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
