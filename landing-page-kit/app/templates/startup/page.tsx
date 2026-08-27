import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Hero3 from "@/components/hero/hero-3"
import ProblemSection from "@/components/problem/problem-section"
import BentoGrid from "@/components/bento/bento-grid"
import HowItWorks from "@/components/how-it-works/how-it-works"
import TestimonialGrid from "@/components/testimonials/testimonial-grid"
import CtaSection from "@/components/cta/cta-section"

export default function StartupTemplate() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero3 />
      <ProblemSection />
      <BentoGrid />
      <HowItWorks />
      <TestimonialGrid />
      <CtaSection />
      <Footer />
    </main>
  )
}
