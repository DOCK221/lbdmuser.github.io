import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Hero2 from "@/components/hero/hero-2"
import FeatureGrid from "@/components/features/feature-grid"
import TestimonialGrid from "@/components/testimonials/testimonial-grid"
import PricingTable from "@/components/pricing/pricing-table"
import CtaSection from "@/components/cta/cta-section"

export default function MobileAppTemplate() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero2 />
      <FeatureGrid />
      <TestimonialGrid />
      <PricingTable />
      <CtaSection />
      <Footer />
    </main>
  )
}
