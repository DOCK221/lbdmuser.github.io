import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link href={`/boutique/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            className="object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl leading-tight">{product.name}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-stone">
              {product.shortDescription}
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[0.68rem] tracking-[0.16em] uppercase text-stone">
          {product.dimensions ? <span>{product.dimensions}</span> : null}
          {product.weight ? <span>{product.weight}</span> : null}
          <span>{product.availability}</span>
          <span>Prix sur demande</span>
        </div>
      </Link>
    </article>
  );
}
