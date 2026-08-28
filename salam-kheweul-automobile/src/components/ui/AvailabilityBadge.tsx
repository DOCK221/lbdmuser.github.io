import { AVAILABILITY_LABELS } from "@/lib/constants";
import type { Availability } from "@/lib/types";

const tones: Record<Availability, string> = {
  disponible: "text-gold border-gold/30 bg-gold/10",
  reserve: "text-ivory/80 border-ivory/20 bg-white/5",
  vendu: "text-mist border-white/10 bg-white/5",
  en_arrivage: "text-gold-soft border-gold/20 bg-gold/5",
};

export function AvailabilityBadge({ value }: { value: Availability }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${tones[value]}`}
    >
      {AVAILABILITY_LABELS[value]}
    </span>
  );
}
