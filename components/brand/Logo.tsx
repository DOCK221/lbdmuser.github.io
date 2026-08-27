type LogoProps = {
  variant?: "light" | "dark";
  withWordmark?: boolean;
  className?: string;
};

export function FeatherMark({
  className = "h-10 w-7",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 56 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M28 6c14 10 20 32 12 58-4 12-9 18-12 20-3-2-8-8-12-20C8 38 14 16 28 6Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M28 10.5c.4 18 .6 36 0 66.5"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M28 22c6 4 10 10 12 18M28 34c5 3 8 8 9.5 14M28 46c4 2.5 6.5 6 8 11M28 26c-6 4-10 10-12 18M28 38c-5 3-8 8-9.5 14M28 50c-4 2.5-6.5 6-8 11"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  withWordmark = true,
  className = "",
}: LogoProps) {
  const color = variant === "light" ? "text-ivory" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-3 ${color} ${className}`}>
      <FeatherMark className="h-8 w-5 shrink-0 md:h-9 md:w-6" />
      {withWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-[1.05rem] tracking-[0.22em] md:text-[1.15rem]">
            NID DE PLUMES
          </span>
        </span>
      ) : null}
    </span>
  );
}
