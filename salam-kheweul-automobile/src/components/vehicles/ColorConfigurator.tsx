"use client";

import type { VehicleColor } from "@/lib/types";

export function ColorConfigurator({
  colors,
  selectedId,
  onSelect,
}: {
  colors: VehicleColor[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const selected = colors.find((color) => color.id === selectedId) ?? colors[0];

  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
        Couleurs disponibles
      </p>
      <p className="mt-2 font-display text-2xl text-ivory">{selected.name}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {colors.map((color) => {
          const active = color.id === selected.id;
          return (
            <button
              key={color.id}
              type="button"
              onClick={() => onSelect(color.id)}
              className="group flex items-center gap-3"
              aria-pressed={active}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
                  active ? "border-gold scale-110" : "border-white/15 hover:border-white/40"
                }`}
              >
                <span
                  className="h-7 w-7 rounded-full border border-white/10"
                  style={{ backgroundColor: color.hex }}
                />
              </span>
              <span
                className={`text-[11px] uppercase tracking-[0.16em] ${
                  active ? "text-ivory" : "text-mist"
                }`}
              >
                {color.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
