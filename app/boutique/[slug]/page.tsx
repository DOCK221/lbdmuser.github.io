import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import {
  getProduct,
  getRelatedProducts,
  products,
} from "@/lib/products";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produit" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Nid de Plumes`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelatedProducts(slug);

  return (
    <div className="bg-ivory pt-28 pb-24 md:pt-36 md:pb-32">
      <Container>
        <p className="kicker">
          <Link href="/boutique" className="hover:text-ink">
            Boutique
          </Link>
          <span className="mx-3">/</span>
          {product.category.replaceAll("-", " ")}
        </p>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} />
          </div>
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <h1 className="editorial text-4xl md:text-5xl lg:text-[3.4rem]">
              {product.name}
            </h1>
            <p className="mt-6 text-[0.8rem] tracking-[0.2em] uppercase text-stone">
              Prix sur demande
            </p>
            <p className="mt-2 text-sm text-ink">{product.availability}</p>
            <p className="mt-8 text-[0.95rem] leading-[1.85] text-stone">
              {product.description}
            </p>

            <dl className="mt-10 space-y-4 border-t border-line pt-8">
              {product.dimensions ? (
                <div className="flex justify-between gap-6 text-sm">
                  <dt className="tracking-[0.16em] uppercase text-stone">Dimensions</dt>
                  <dd>{product.dimensions}</dd>
                </div>
              ) : null}
              {product.weight ? (
                <div className="flex justify-between gap-6 text-sm">
                  <dt className="tracking-[0.16em] uppercase text-stone">Poids</dt>
                  <dd>{product.weight}</dd>
                </div>
              ) : null}
              {product.composition ? (
                <div className="flex justify-between gap-6 text-sm">
                  <dt className="tracking-[0.16em] uppercase text-stone">Composition</dt>
                  <dd className="text-right">{product.composition}</dd>
                </div>
              ) : null}
              <div>
                <dt className="tracking-[0.16em] uppercase text-stone text-[0.7rem]">
                  Caractéristiques
                </dt>
                <dd className="mt-3 space-y-2">
                  {product.features.map((feature) => (
                    <p key={feature} className="text-sm">
                      {feature}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col gap-3">
              <AddToCartButton slug={product.slug} />
              <Button
                href={getWhatsAppUrl(whatsappMessages.product(product.name))}
                variant="ghost"
              >
                Commander sur WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <section className="mt-28">
          <p className="kicker">Continuer</p>
          <h2 className="editorial mt-4 text-3xl md:text-5xl">Vous aimerez aussi</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/boutique/${item.slug}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <Image
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 font-serif text-2xl">{item.name}</h3>
                <p className="mt-1 text-[0.68rem] tracking-[0.16em] uppercase text-stone">
                  Prix sur demande
                </p>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
