import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Hero3 from "@/components/hero/hero-3"
import LogoCloud from "@/components/logo-cloud/logo-cloud"
import FeatureGrid from "@/components/features/feature-grid"
import HowItWorks from "@/components/how-it-works/how-it-works"
import FaqAccordion from "@/components/faq/faq-accordion"
import CtaSection from "@/components/cta/cta-section"

export default function DevToolTemplate() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero3 />
      <LogoCloud />
      <FeatureGrid />
      <HowItWorks />
      <FaqAccordion />
      <CtaSection />
      <Footer />
    </main>
  )
}
