import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "ivory" | "ghost" | "line" | "dark";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  gold:
    "bg-gold text-ink hover:bg-gold-soft shadow-[0_0_0_1px_rgba(196,165,116,0.3)]",
  ivory:
    "bg-ivory text-ink hover:bg-white",
  ghost:
    "bg-transparent text-ivory border border-ivory/20 hover:border-gold/50 hover:text-gold",
  line:
    "bg-transparent text-gold border border-gold/35 hover:bg-gold/10",
  dark:
    "bg-anthracite text-ivory border border-white/5 hover:border-gold/30",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-[11px] tracking-[0.18em]",
  md: "h-12 px-6 text-[11px] tracking-[0.2em]",
  lg: "h-14 px-8 text-xs tracking-[0.22em]",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
} & Omit<ComponentProps<"button">, "className"> &
  Omit<ComponentProps<"a">, "className" | "href">;

export function Button({
  children,
  variant = "gold",
  size = "md",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 uppercase font-medium transition-all duration-500 ease-out",
    "rounded-none",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...(props as ComponentProps<"a">)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
