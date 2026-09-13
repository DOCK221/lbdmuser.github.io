import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { ShopCatalog } from "@/components/shop/ShopCatalog";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "La collection Nid de Plumes : literie, serviettes, salle de bain et piscine. Linge hôtelier premium disponible à Dakar.",
};

export default function BoutiquePage() {
  return (
    <div className="bg-ivory pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <p className="kicker">Boutique</p>
        <h1 className="editorial mt-5 max-w-4xl text-4xl md:text-6xl lg:text-7xl">
          La collection,
          <br />
          pièce par pièce.
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-stone md:text-base">
          Literie, serviettes, salle de bain et piscine. Un linge conçu pour
          les plus belles chambres, disponible à Dakar.
        </p>
        <div className="mt-16">
          <Suspense>
            <ShopCatalog />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
