import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Hero1 from "@/components/hero/hero-1"
import ProblemSection from "@/components/problem/problem-section"
import FeatureGrid from "@/components/features/feature-grid"
import TestimonialGrid from "@/components/testimonials/testimonial-grid"
import PricingTable from "@/components/pricing/pricing-table"
import FaqAccordion from "@/components/faq/faq-accordion"
import CtaSection from "@/components/cta/cta-section"

export default function CourseTemplate() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero1 />
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
