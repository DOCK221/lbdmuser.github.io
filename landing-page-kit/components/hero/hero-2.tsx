"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero2() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Now Available</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Launch Your Mobile App{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                10x Faster
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Beautiful, cross-platform mobile templates built with React Native. 
              Ship to iOS and Android from a single codebase.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg" 
                variant="gradient" 
                className="group cursor-pointer"
                onClick={() => window.location.href = '#pricing'}
              >
                Download Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group cursor-pointer"
                onClick={() => window.open('https://www.youtube.com', '_blank')}
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <div>
                <div className="text-2xl font-bold">500K+</div>
                <div className="text-muted-foreground">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.8★</div>
                <div className="text-muted-foreground">App Store</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Phone Frame */}
              <div className="relative z-10 rounded-[3rem] border-8 border-foreground bg-foreground p-2 shadow-2xl">
                <div className="aspect-[9/19.5] w-full rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 overflow-hidden">
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-sm text-muted-foreground">App Screenshot</p>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
