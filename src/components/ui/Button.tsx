"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-accent text-ink hover:bg-white border border-accent",
    secondary:
      "bg-transparent text-white border border-white/30 hover:border-accent hover:text-accent",
    ghost:
      "bg-transparent text-white border border-transparent hover:text-accent",
  } as const;

  const classes = cn(
    "group relative inline-flex items-center justify-center overflow-hidden px-7 py-3.5 text-sm tracking-[0.18em] uppercase transition-colors duration-500",
    styles[variant],
    className,
  );

  const content = (
    <motion.span
      className="relative z-10"
      whileHover={{ letterSpacing: "0.22em" }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
