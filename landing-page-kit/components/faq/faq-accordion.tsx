"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What's included in the template?",
    answer: "You get complete Next.js 15 source code with TypeScript, authentication system (email/password + OAuth), Stripe payment integration, Prisma database setup, email templates, AI chat interface, 40+ UI components, and comprehensive documentation. Everything you need to launch a production SaaS."
  },
  {
    question: "Do I need to pay monthly fees?",
    answer: "No! This is a one-time payment with lifetime access. You own the code forever and can use it for unlimited projects. No subscriptions, no recurring fees."
  },
  {
    question: "Can I use this for client projects?",
    answer: "Yes! The Pro and Complete plans include a commercial license, allowing you to use the template for client work and even white-label it for agencies."
  },
  {
    question: "How long does setup take?",
    answer: "Most developers have the template running locally in under 5 minutes. Full deployment to production typically takes 15-30 minutes, including database and environment setup."
  },
  {
    question: "What if I need help?",
    answer: "All plans include email support. Pro and Complete plans get priority support with faster response times. We also have comprehensive documentation and a community Discord channel."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes! We offer a 30-day money-back guarantee, no questions asked. If you're not satisfied for any reason, just email us within 30 days for a full refund."
  },
  {
    question: "How often is the template updated?",
    answer: "We regularly update the template with new features, security patches, and framework updates. Starter gets 1 year of updates, while Pro and Complete get lifetime updates."
  },
  {
    question: "What tech stack does it use?",
    answer: "Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma ORM, PostgreSQL, NextAuth/Clerk for auth, Stripe for payments, Resend for emails, and OpenAI for AI features."
  }
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to know about our template. Can't find what you're looking for? Email us at support@example.com
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full rounded-lg border border-border bg-card p-6 text-left transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-lg pr-8">{faq.question}</h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform flex-shrink-0",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
