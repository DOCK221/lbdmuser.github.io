"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Shield, 
  Sparkles, 
  Rocket, 
  Lock, 
  CreditCard,
  Database,
  Mail,
  Smartphone
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on Next.js 15 with optimized performance and instant page loads.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security best practices built-in.",
  },
  {
    icon: Lock,
    title: "Authentication Ready",
    description: "Complete auth system with social logins, 2FA, and session management.",
  },
  {
    icon: CreditCard,
    title: "Payments Integrated",
    description: "Stripe checkout, subscriptions, and webhooks fully configured.",
  },
  {
    icon: Database,
    title: "Database Setup",
    description: "Prisma ORM with PostgreSQL, migrations, and type-safe queries.",
  },
  {
    icon: Mail,
    title: "Email System",
    description: "Transactional emails with beautiful templates using Resend.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "OpenAI chat interface with streaming responses and history.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Perfect on every device from mobile to 4K displays.",
  },
  {
    icon: Rocket,
    title: "Deploy in Minutes",
    description: "One-click deployment to Vercel with automatic CI/CD.",
  },
]

export default function FeatureGrid() {
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
            Everything You Need to Launch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Stop wasting time on setup. Get all the essential features pre-built and production-ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
