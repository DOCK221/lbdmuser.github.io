import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Rendez-vous confirmé",
  description: "Votre rendez-vous chez Salam Kheweul Automobile est confirmé.",
  path: "/rendez-vous/confirmation",
});

export default function AppointmentConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
