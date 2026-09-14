"use client"

import { motion } from "framer-motion"
import { AlertCircle, Clock, Code, DollarSign } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Weeks of Setup Work",
    description: "Setting up auth, payments, and database from scratch takes months of development time away from building features.",
  },
  {
    icon: Code,
    title: "Complex Integrations",
    description: "Integrating Stripe, authentication, emails, and AI requires deep technical knowledge and countless hours of debugging.",
  },
  {
    icon: DollarSign,
    title: "Expensive Development",
    description: "Hiring developers to build infrastructure costs $10,000-50,000 before you even start on your core product.",
  },
  {
    icon: AlertCircle,
    title: "Security Concerns",
    description: "Getting authentication and payments wrong can lead to security vulnerabilities and compliance issues.",
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
          >
            Building SaaS is <span className="text-red-500">Painfully Slow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Most founders waste months on infrastructure instead of validating their idea and talking to customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-red-200 dark:border-red-900/30 bg-card p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-medium">
            Sound familiar? There's a better way. 👇
          </p>
        </motion.div>
      </div>
    </section>
  )
}
