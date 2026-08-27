"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder @ TechStart",
    avatar: "👩‍💼",
    content: "This template saved me 3 months of development. Launched my SaaS in 2 weeks and already have paying customers!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Indie Hacker",
    avatar: "👨‍💻",
    content: "Best investment for my startup. The code quality is outstanding and everything just works out of the box.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager",
    avatar: "👩‍🎨",
    content: "Finally, a boilerplate that doesn't need hours of configuration. Our team was productive from day one.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Full Stack Developer",
    avatar: "👨‍🔬",
    content: "The authentication and payment systems alone are worth the price. Saved countless hours of integration work.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "CEO @ StartupLab",
    avatar: "👩‍⚕️",
    content: "We've built 3 client projects with this. The ROI is incredible. Highly recommend for agencies.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Software Engineer",
    avatar: "👨‍🚀",
    content: "Clean code, great documentation, and modern stack. This is how boilerplates should be done.",
    rating: 5,
  },
]

export default function TestimonialGrid() {
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
            Loved by Builders Worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Join thousands of developers who are shipping faster with our template.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats below testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">12K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-muted-foreground">Products Shipped</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
