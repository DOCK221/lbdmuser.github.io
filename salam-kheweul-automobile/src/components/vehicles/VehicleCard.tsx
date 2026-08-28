"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { formatMileage, formatPrice } from "@/lib/format";
import type { Vehicle } from "@/lib/types";

export function VehicleCard({
  vehicle,
  rental = false,
}: {
  vehicle: Vehicle;
  rental?: boolean;
}) {
  const color =
    vehicle.colors.find((item) => item.id === vehicle.defaultColorId) ??
    vehicle.colors[0];
  const image = color.images[0];
  const price = rental && vehicle.rental
    ? `${formatPrice(vehicle.rental.dailyRate)} / jour`
    : formatPrice(vehicle.price);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/vehicules/${vehicle.slug}`} className="block">
        <div className="relative aspect-[16/11] overflow-hidden bg-anthracite">
          <Image
            src={image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-70" />
          <div className="absolute left-4 top-4">
            <AvailabilityBadge value={vehicle.availability} />
          </div>
          {vehicle.isNewArrival ? (
            <div className="absolute right-4 top-4 text-[10px] uppercase tracking-[0.22em] text-ivory">
              Nouveau
            </div>
          ) : null}
        </div>
        <div className="border border-t-0 border-white/5 bg-ink-soft p-5 transition-colors duration-500 group-hover:border-gold/25">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
            {vehicle.brand}
          </p>
          <h3 className="mt-2 font-display text-2xl text-ivory">{vehicle.model}</h3>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.14em] text-mist">
            <span>{vehicle.year}</span>
            <span>{formatMileage(vehicle.mileage)}</span>
          </div>
          <div className="mt-5 flex items-end justify-between gap-4">
            <p className="text-lg text-ivory">{price}</p>
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Voir le véhicule
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
