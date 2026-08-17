import Image from "next/image";

export function PageHero({
  image,
  alt,
  kicker,
  title,
  subtitle,
}: {
  image: string;
  alt: string;
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-ink pb-16 pt-36 md:min-h-[80svh] md:pb-24">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/30 to-ink/20" />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        {kicker ? <p className="kicker text-ivory/60">{kicker}</p> : null}
        <h1 className="editorial mt-5 max-w-4xl whitespace-pre-line text-4xl text-ivory sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
