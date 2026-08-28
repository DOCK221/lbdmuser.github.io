import { Amenities } from "@/components/home/Amenities";
import { AppointmentCta } from "@/components/home/AppointmentCta";
import { ContactPreview } from "@/components/home/ContactPreview";
import { Faq } from "@/components/home/Faq";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { SocialFeed } from "@/components/home/SocialFeed";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustStrip } from "@/components/home/TrustStrip";
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
  const featured = getFeaturedVehicles(9);
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <TrustStrip />
      <FeaturedVehicles vehicles={featured} />
      <VehicleFinder />
      <Process />
      <WhyUs />
      <ServicesPreview />
      <Amenities />
      <Testimonials />
      <AppointmentCta />
      <SocialFeed posts={socialPosts} />
      <Faq />
      <ContactPreview />
    </>
  );
}
