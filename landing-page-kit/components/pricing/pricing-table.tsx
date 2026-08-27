"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    description: "Perfect for side projects and MVPs",
    monthlyPrice: 29,
    annualPrice: 290,
    features: [
      "Complete source code",
      "Authentication system",
      "Database setup",
      "Email templates",
      "Basic components",
      "Community support",
      "Free updates for 1 year",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For serious builders and startups",
    monthlyPrice: 49,
    annualPrice: 490,
    features: [
      "Everything in Starter",
      "Stripe payments integration",
      "AI chat interface",
      "Advanced components",
      "40+ UI components",
      "Dark mode included",
      "Priority email support",
      "Lifetime updates",
      "Commercial license",
    ],
    cta: "Start Building",
    popular: true,
  },
  {
    name: "Complete",
    description: "Full package for agencies",
    monthlyPrice: 79,
    annualPrice: 790,
    features: [
      "Everything in Pro",
      "5 complete templates",
      "Figma design files",
      "Custom integrations guide",
      "Team collaboration features",
      "White-label ready",
      "1-on-1 setup call",
      "Priority support",
      "Unlimited projects",
    ],
    cta: "Go Premium",
    popular: false,
  },
]

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-24 bg-secondary/20" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            One-time payment. Use forever. No subscriptions, no hidden fees.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 rounded-full border border-border bg-card p-1"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                !isAnnual
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              One-time Payment
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                isAnnual
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Lifetime Deal
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                Save 50%
              </span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg",
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-sm font-medium text-white shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {isAnnual ? "Lifetime access" : "One-time payment"}
                </p>
              </div>

              <Button
                variant={plan.popular ? "gradient" : "outline"}
                className="w-full mb-6 cursor-pointer"
                size="lg"
                onClick={() => window.open('https://gumroad.com', '_blank')}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            All plans include 30-day money-back guarantee • Commercial license • Free updates
          </p>
        </motion.div>
      </div>
    </section>
  )
}
