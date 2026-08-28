import { AppointmentCta } from "@/components/home/AppointmentCta";
import { ContactPreview } from "@/components/home/ContactPreview";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { SocialFeed } from "@/components/home/SocialFeed";
import { VehicleFinder } from "@/components/home/VehicleFinder";
import { WhyUs } from "@/components/home/WhyUs";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { getFeaturedVehicles, socialPosts } from "@/data/vehicles";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  const featured = getFeaturedVehicles(6);
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <FeaturedVehicles vehicles={featured} />
      <VehicleFinder />
      <WhyUs />
      <ServicesPreview />
      <AppointmentCta />
      <SocialFeed posts={socialPosts} />
      <ContactPreview />
    </>
  );
}
