"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Code, Smartphone, Database, Cloud, LineChart, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with sub-second response times",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Clean APIs and docs",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Perfect on every device",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Database,
    title: "Scalable Infrastructure",
    description: "Grows with your business",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Deploy anywhere instantly",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Real-time insights dashboard",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams of all sizes",
    className: "md:col-span-1 md:row-span-1",
  },
]

export default function BentoGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
          >
            Everything You Need, Nothing You Don't
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A complete platform built for modern development teams
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all hover:border-primary/50 ${feature.className}`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
