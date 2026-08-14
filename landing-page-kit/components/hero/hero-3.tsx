"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero3() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 pt-20 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm text-white mb-8"
          >
            <CheckCircle className="h-4 w-4" />
            <span className="font-medium">Join the Waitlist - Early Bird Pricing</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-6"
          >
            The Future of{" "}
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Developer Tools
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            A revolutionary CLI tool that automates your entire development workflow. 
            Build, test, and deploy with a single command.
          </motion.p>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button 
              size="lg" 
              variant="gradient" 
              className="group cursor-pointer"
              onClick={() => window.location.href = '#pricing'}
            >
              Join Waitlist
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-muted-foreground mb-16"
          >
            Join 5,247 developers already on the waitlist
          </motion.p>

          {/* Terminal Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="rounded-xl border border-border bg-card p-4 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="rounded-lg bg-secondary p-6 font-mono text-sm text-left">
                <div className="text-green-500">$ devtool init my-app</div>
                <div className="text-muted-foreground mt-2">✓ Project initialized</div>
                <div className="text-muted-foreground">✓ Dependencies installed</div>
                <div className="text-muted-foreground">✓ Git repository created</div>
                <div className="text-muted-foreground">✓ CI/CD configured</div>
                <div className="text-primary mt-4">→ Ready to code in 30 seconds!</div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-2 -z-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
