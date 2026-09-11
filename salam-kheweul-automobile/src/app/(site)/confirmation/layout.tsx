import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Confirmation",
  description: "Votre demande a bien été enregistrée.",
  path: "/confirmation",
});

export default function ConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
