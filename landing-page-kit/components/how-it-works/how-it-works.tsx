"use client"

import { motion } from "framer-motion"
import { Download, Settings, Rocket } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "1. Download & Install",
    description: "Get started in seconds with our simple installation process. No complex setup required.",
  },
  {
    icon: Settings,
    title: "2. Configure Your Project",
    description: "Customize settings to match your needs with our intuitive configuration wizard.",
  },
  {
    icon: Rocket,
    title: "3. Launch & Scale",
    description: "Deploy to production with one command and scale effortlessly as you grow.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Get up and running in three simple steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-[16.666%] right-[16.666%] h-0.5 bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-50"></div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
                  <step.icon className="h-10 w-10" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
