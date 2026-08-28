import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.legalName} · Concession premium à Dakar`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "voiture Dakar",
    "vente voiture Sénégal",
    "location voiture Dakar",
    "Salam Kheweul Automobile",
    "concession automobile premium",
  ],
  openGraph: {
    type: "website",
    locale: "fr_SN",
    siteName: SITE.name,
    title: SITE.legalName,
    description: SITE.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.legalName,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-ivory">
        {children}
      </body>
    </html>
  );
}
