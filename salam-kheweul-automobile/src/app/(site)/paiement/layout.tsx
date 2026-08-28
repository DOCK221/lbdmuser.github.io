import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Paiement",
  description: "Paiement sécurisé Wave, Orange Money, carte ou virement. Devise XOF.",
  path: "/paiement",
});

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
