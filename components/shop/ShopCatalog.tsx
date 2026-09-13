"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import { categories, getProductsByCategory, type ProductCategory } from "@/lib/products";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export function ShopCatalog() {
  const params = useSearchParams();
  const router = useRouter();
  const current = (params.get("categorie") ?? "all") as ProductCategory | "all";
  const valid = categories.some((item) => item.id === current) ? current : "all";
  const list = useMemo(() => getProductsByCategory(valid), [valid]);

  function setFilter(id: string) {
    if (id === "all") router.replace("/boutique", { scroll: false });
    else router.replace(`/boutique?categorie=${id}`, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-6">
        {categories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-500 ${
              valid === item.id ? "text-ink" : "text-mist hover:text-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {list.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-20 border-t border-line pt-12 text-center">
        <p className="font-serif text-3xl">Une question de format, de volume, de finition ?</p>
        <div className="mt-8">
          <Button href={getWhatsAppUrl(whatsappMessages.advisor)} variant="ghost">
            Parler à un conseiller
          </Button>
        </div>
      </div>
    </div>
  );
}
