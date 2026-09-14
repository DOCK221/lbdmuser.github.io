"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Limited Time Offer</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-white">
            Ready to Ship Your Next Big Idea?
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join 12,000+ developers who are building faster and launching sooner. 
            Get instant access to the complete template and start shipping today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-white/90 shadow-xl group cursor-pointer"
              onClick={() => window.location.href = '#pricing'}
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 cursor-pointer"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              View Documentation
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2">
              ✓ 30-day money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              ✓ Instant access after purchase
            </span>
            <span className="flex items-center gap-2">
              ✓ Free lifetime updates
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
