"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useUi } from "@/lib/ui-context";
import { products } from "@/lib/products";

export function SearchModal() {
  const { searchOpen, closeSearch } = useUi();
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") closeSearch();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeSearch]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 6);
    return products.filter((product) =>
      `${product.name} ${product.shortDescription} ${product.category}`
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <AnimatePresence>
      {searchOpen ? (
        <motion.div
          className="fixed inset-0 z-[70] bg-ivory/96 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="mx-auto flex max-w-3xl flex-col px-6 pt-28 md:pt-36">
            <div className="flex items-center gap-4 border-b border-ink/15 pb-4">
              <Search className="h-5 w-5 text-stone" strokeWidth={1.3} />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Rechercher un linge, une catégorie…"
                className="w-full bg-transparent font-serif text-2xl outline-none placeholder:text-mist md:text-4xl"
              />
              <button type="button" onClick={closeSearch} aria-label="Fermer">
                <X className="h-6 w-6" strokeWidth={1.2} />
              </button>
            </div>
            <ul className="mt-10 space-y-4">
              {results.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/boutique/${product.slug}`}
                    onClick={closeSearch}
                    className="group flex items-center gap-5"
                  >
                    <span className="relative h-16 w-12 overflow-hidden bg-cream md:h-20 md:w-16">
                      <Image
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="64px"
                      />
                    </span>
                    <span>
                      <span className="block font-serif text-xl md:text-2xl">
                        {product.name}
                      </span>
                      <span className="kicker mt-1 block">{product.category.replaceAll("-", " ")}</span>
                    </span>
                  </Link>
                </li>
              ))}
              {results.length === 0 ? (
                <li className="text-sm text-stone">Aucun résultat pour cette recherche.</li>
              ) : null}
            </ul>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
