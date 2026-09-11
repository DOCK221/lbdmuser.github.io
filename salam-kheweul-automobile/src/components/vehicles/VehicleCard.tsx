"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { Photo } from "@/components/ui/Photo";
import { formatMileage, formatPrice } from "@/lib/format";
import {
  TRANSMISSION_LABELS,
} from "@/lib/constants";
import { vehicleDisplayName, vehicleMainImage } from "@/lib/vehicle";
import type { Vehicle } from "@/lib/types";

export function VehicleCard({
  vehicle,
  rental = false,
}: {
  vehicle: Vehicle;
  rental?: boolean;
}) {
  const image = vehicleMainImage(vehicle);
  const name = vehicleDisplayName(vehicle);
  const price =
    rental && vehicle.rental
      ? `${formatPrice(vehicle.rental.dailyRate)} / jour`
      : formatPrice(vehicle.price);

  const meta = [
    vehicle.year ? String(vehicle.year) : null,
    vehicle.mileage != null ? formatMileage(vehicle.mileage) : null,
    vehicle.transmission ? TRANSMISSION_LABELS[vehicle.transmission] : null,
  ].filter(Boolean);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/vehicules/${vehicle.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-anthracite">
          <Photo
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-black/10" />
          {vehicle.availability ? (
            <div className="absolute left-4 top-4">
              <AvailabilityBadge value={vehicle.availability} />
            </div>
          ) : null}
          {vehicle.isNewArrival ? (
            <div className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink">
              Nouveau
            </div>
          ) : null}
        </div>
        <div className="border border-t-0 border-white/10 bg-ink-soft p-6 sm:p-7">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
            {vehicle.brand}
          </p>
          <h3 className="mt-2 font-display text-2xl text-ivory sm:text-3xl">
            {vehicle.model || name}
          </h3>
          {meta.length ? (
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[12px] uppercase tracking-[0.12em] text-mist">
              {meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-lg font-medium text-ivory sm:text-xl">{price}</p>
            <span className="border border-gold/40 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-gold transition-colors group-hover:bg-gold/10">
              Voir le véhicule
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
