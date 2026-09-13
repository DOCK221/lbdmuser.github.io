"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import { Minus, Plus } from "lucide-react";

export default function CartPage() {
  const { items, count, setQuantity, removeItem, clear } = useCart();
  const message = whatsappMessages.cart(
    items.map((line) => `• ${line.product.name} × ${line.quantity}`).join("\n") ||
      "—",
  );

  return (
    <div className="bg-ivory pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <p className="kicker">Panier</p>
        <h1 className="editorial mt-5 text-4xl md:text-6xl">Votre sélection</h1>
        <p className="mt-4 text-sm tracking-[0.16em] uppercase text-stone">
          {count} pièce{count > 1 ? "s" : ""} · Prix sur demande
        </p>

        {items.length === 0 ? (
          <div className="mt-16">
            <p className="font-serif text-2xl text-stone">Le panier est vide.</p>
            <div className="mt-8">
              <Button href="/boutique">Découvrir la collection</Button>
            </div>
          </div>
        ) : (
          <div className="mt-14 grid gap-16 lg:grid-cols-12">
            <ul className="space-y-10 lg:col-span-8">
              {items.map((line) => (
                <li
                  key={line.slug}
                  className="flex gap-5 border-b border-line pb-10"
                >
                  <Link
                    href={`/boutique/${line.slug}`}
                    className="relative h-36 w-28 shrink-0 overflow-hidden bg-cream md:h-44 md:w-32"
                  >
                    <Image
                      src={line.product.images[0].src}
                      alt={line.product.images[0].alt}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <Link
                      href={`/boutique/${line.slug}`}
                      className="font-serif text-2xl md:text-3xl"
                    >
                      {line.product.name}
                    </Link>
                    <p className="mt-2 text-sm text-stone">
                      {line.product.shortDescription}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <div className="flex items-center gap-4 border border-ink/10 px-3 py-2">
                        <button
                          type="button"
                          aria-label="Diminuer"
                          onClick={() => setQuantity(line.slug, line.quantity - 1)}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span>{line.quantity}</span>
                        <button
                          type="button"
                          aria-label="Augmenter"
                          onClick={() => setQuantity(line.slug, line.quantity + 1)}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-[0.65rem] tracking-[0.16em] uppercase text-stone"
                        onClick={() => removeItem(line.slug)}
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <aside className="lg:col-span-4">
              <div className="border border-line p-8">
                <p className="kicker">Commande</p>
                <p className="mt-4 font-serif text-3xl">Prix sur demande</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  Finalisez votre sélection auprès de Nid de Plumes. Un
                  conseiller confirme disponibilités et tarifs.
                </p>
                <Button href={getWhatsAppUrl(message)} className="mt-8 w-full">
                  Commander sur WhatsApp
                </Button>
                <button
                  type="button"
                  onClick={clear}
                  className="mt-4 w-full text-center text-[0.65rem] tracking-[0.18em] uppercase text-stone"
                >
                  Vider le panier
                </button>
              </div>
            </aside>
          </div>
        )}
      </Container>
    </div>
  );
}
