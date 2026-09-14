"use client"

import { motion } from "framer-motion"

const companies = [
  { name: "Vercel", logo: "▲" },
  { name: "Stripe", logo: "S" },
  { name: "OpenAI", logo: "○" },
  { name: "Supabase", logo: "⚡" },
  { name: "Prisma", logo: "◇" },
  { name: "Resend", logo: "→" },
  { name: "NextAuth", logo: "🔐" },
  { name: "Tailwind", logo: "~" },
]

export default function LogoCloud() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Built with industry-leading technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all"
            >
              <div className="text-4xl">{company.logo}</div>
              <div className="text-sm font-medium text-muted-foreground">{company.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
