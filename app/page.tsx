import { Hero } from "@/components/home/Hero";
import { ArtOfComfort } from "@/components/home/ArtOfComfort";
import { Collection } from "@/components/home/Collection";
import { Hosts } from "@/components/home/Hosts";
import { Professionals } from "@/components/home/Professionals";
import { Why } from "@/components/home/Why";
import { Lifestyle } from "@/components/home/Lifestyle";
import { HomeCta } from "@/components/home/HomeCta";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ArtOfComfort />
      <Collection />
      <Hosts />
      <Professionals />
      <Why />
      <Lifestyle />
      <HomeCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            description: siteConfig.description,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dakar",
              addressCountry: "SN",
            },
            areaServed: "SN",
          }),
        }}
      />
    </>
  );
}
