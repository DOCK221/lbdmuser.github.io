import type { ComponentProps } from "react";
import Link from "next/link";

type Variant = "solid" | "outline" | "ghost" | "ivory" | "gold";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-ivory hover:bg-ink-soft border border-ink",
  ivory: "bg-ivory text-ink hover:bg-paper border border-ivory",
  outline:
    "bg-transparent text-ivory border border-ivory/55 hover:bg-ivory hover:text-ink",
  ghost: "bg-transparent text-ink border border-ink/20 hover:border-ink",
  gold:
    "bg-transparent text-ink border border-champagne/70 hover:bg-ink hover:text-ivory hover:border-ink",
};

const base =
  "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.68rem] font-medium tracking-[0.22em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.985]";

type ButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & ComponentProps<"button">;

export function Button({
  variant = "solid",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
