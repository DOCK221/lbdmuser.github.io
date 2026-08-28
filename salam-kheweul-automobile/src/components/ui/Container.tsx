import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[15px] leading-relaxed text-mist">{description}</p>
      ) : null}
    </div>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-16 gold-hairline ${className}`} />;
}
