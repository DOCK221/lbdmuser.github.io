import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { Providers } from "@/components/layout/Providers";
import { PageLoader } from "@/components/layout/PageLoader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SearchModal } from "@/components/layout/SearchModal";
import { CartDrawer } from "@/components/layout/CartDrawer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.seoTitle,
    template: "%s | Nid de Plumes",
  },
  description: siteConfig.description,
  keywords: [
    "linge hôtelier",
    "Nid de Plumes",
    "linge premium Sénégal",
    "Airbnb Dakar",
    "linge hôtel",
    "coton égyptien",
    "serviettes hôtelières",
    "résidences meublées",
  ],
  authors: [{ name: "Nid de Plumes" }],
  openGraph: {
    type: "website",
    locale: "fr_SN",
    siteName: siteConfig.name,
    title: siteConfig.seoTitle,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0C0B0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-ink">
        <Providers>
          <PageLoader />
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <SearchModal />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
