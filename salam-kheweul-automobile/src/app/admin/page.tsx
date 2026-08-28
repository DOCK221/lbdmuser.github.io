import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { appointmentRepository } from "@/lib/repositories/appointments";
import { reservationRepository } from "@/lib/repositories/reservations";

export default async function AdminHomePage() {
  const [appointments, reservations] = await Promise.all([
    appointmentRepository.list(),
    reservationRepository.list(),
  ]);
  const available = vehicles.filter((v) => v.availability === "disponible").length;

  const cards = [
    { href: "/admin/vehicules", label: "Véhicules", value: String(vehicles.length) },
    { href: "/admin/vehicules", label: "Disponibles", value: String(available) },
    { href: "/admin/rendez-vous", label: "Rendez-vous", value: String(appointments.length) },
    { href: "/admin/commandes", label: "Commandes", value: String(reservations.length) },
  ];

  return (
    <div>
      <h1 className="font-display text-4xl">Vue d’ensemble</h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="border border-white/5 p-6 transition-colors hover:border-gold/30"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-mist">{card.label}</p>
            <p className="mt-4 font-display text-4xl">{card.value}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
