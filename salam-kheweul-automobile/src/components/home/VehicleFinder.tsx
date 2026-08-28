"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { vehicles } from "@/data/vehicles";
import { FUEL_LABELS, TRANSMISSION_LABELS } from "@/lib/constants";

const fieldClass =
  "h-12 w-full border border-white/10 bg-transparent px-4 text-sm text-ivory outline-none transition-colors focus:border-gold/50";

export function VehicleFinder() {
  const router = useRouter();
  const brands = useMemo(
    () => [...new Set(vehicles.map((vehicle) => vehicle.brand))],
    [],
  );
  const years = useMemo(
    () => [...new Set(vehicles.map((vehicle) => vehicle.year))].sort((a, b) => b - a),
    [],
  );
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (brand) params.set("brand", brand);
    if (model) params.set("model", model);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (year) params.set("year", year);
    if (fuel) params.set("fuel", fuel);
    if (transmission) params.set("transmission", transmission);
    router.push(`/vehicules?${params.toString()}`);
  }

  return (
    <section className="relative border-y border-white/5 bg-ink-soft py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Recherche"
            title="Trouvez votre véhicule"
            description="Affinez par marque, budget, motorisation. Nous vous présentons uniquement ce qui mérite votre attention."
          />
        </Reveal>
        <Reveal delay={0.12}>
          <form
            onSubmit={onSubmit}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <select className={fieldClass} value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option value="">Marque</option>
              {brands.map((item) => (
                <option key={item} value={item} className="bg-ink">
                  {item}
                </option>
              ))}
            </select>
            <input
              className={fieldClass}
              placeholder="Modèle"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <input
              className={fieldClass}
              type="number"
              min={0}
              placeholder="Prix minimum (FCFA)"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              className={fieldClass}
              type="number"
              min={0}
              placeholder="Prix maximum (FCFA)"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <select className={fieldClass} value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Année</option>
              {years.map((item) => (
                <option key={item} value={item} className="bg-ink">
                  {item}
                </option>
              ))}
            </select>
            <select className={fieldClass} value={fuel} onChange={(e) => setFuel(e.target.value)}>
              <option value="">Carburant</option>
              {Object.entries(FUEL_LABELS).map(([value, label]) => (
                <option key={value} value={value} className="bg-ink">
                  {label}
                </option>
              ))}
            </select>
            <select
              className={fieldClass}
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
            >
              <option value="">Transmission</option>
              {Object.entries(TRANSMISSION_LABELS).map(([value, label]) => (
                <option key={value} value={value} className="bg-ink">
                  {label}
                </option>
              ))}
            </select>
            <Button type="submit" variant="gold" className="w-full">
              Rechercher
            </Button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
