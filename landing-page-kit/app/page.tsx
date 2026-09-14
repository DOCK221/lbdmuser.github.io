import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Hero1 from "@/components/hero/hero-1"
import ProblemSection from "@/components/problem/problem-section"
import FeatureGrid from "@/components/features/feature-grid"
import LogoCloud from "@/components/logo-cloud/logo-cloud"
import TestimonialGrid from "@/components/testimonials/testimonial-grid"
import PricingTable from "@/components/pricing/pricing-table"
import FaqAccordion from "@/components/faq/faq-accordion"
import CtaSection from "@/components/cta/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero1 />
      <LogoCloud />
      <ProblemSection />
      <FeatureGrid />
      <TestimonialGrid />
      <PricingTable />
      <FaqAccordion />
      <CtaSection />
      <Footer />
    </main>
  )
}
