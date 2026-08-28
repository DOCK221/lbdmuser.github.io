export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3 text-ivory">
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-gold/50" />
        <span className="absolute inset-[3px] rounded-full border border-gold/20" />
        <span className="font-display text-[13px] tracking-[0.18em] text-gold">
          SK
        </span>
      </span>
      {compact ? null : (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[17px] tracking-[0.18em]">
            SALAM KHEWEUL
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.42em] text-gold/80">
            Automobile
          </span>
        </span>
      )}
    </span>
  );
}
