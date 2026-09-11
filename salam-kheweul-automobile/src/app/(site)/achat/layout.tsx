import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Achat de véhicule",
  description:
    "Vendez votre véhicule à Salam Kheweul Automobile. Estimation confidentielle à Dakar.",
  path: "/achat",
});

export default function BuyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
