type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function Photo({ src, alt, className = "", priority = false }: PhotoProps) {
  return (
    // Native img so photos always load (including via tunnel preview).
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
