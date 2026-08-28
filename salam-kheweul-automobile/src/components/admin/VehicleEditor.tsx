"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import type { Vehicle } from "@/lib/types";

const field =
  "h-11 w-full border border-white/10 bg-transparent px-3 text-sm outline-none focus:border-gold/40";

const empty: Partial<Vehicle> = {
  brand: "",
  model: "",
  year: new Date().getFullYear(),
  price: 0,
  mileage: 0,
  fuel: "essence",
  transmission: "automatique",
  engine: "",
  power: "",
  seats: 5,
  condition: "excellent",
  origin: "Europe",
  availability: "disponible",
  category: "suv",
  description: "",
  slug: "",
  defaultColorId: "noir",
  features: [],
  colors: [
    {
      id: "noir",
      name: "Noir",
      hex: "#0B0B0C",
      images: [
        "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1600&q=80",
      ],
    },
  ],
  isNewArrival: true,
};

export function VehicleEditor({ vehicleId }: { vehicleId?: string }) {
  const router = useRouter();
  const [data, setData] = useState<Partial<Vehicle>>(empty);
  const [features, setFeatures] = useState("Climatisation, Caméra, GPS, Cuir, Bluetooth");
  const [photos, setPhotos] = useState("");
  const [video, setVideo] = useState("");

  useEffect(() => {
    if (!vehicleId) return;
    fetch(`/api/vehicles/${vehicleId}`)
      .then((res) => res.json())
      .then((payload) => {
        if (payload.vehicle) {
          setData(payload.vehicle);
          setFeatures(payload.vehicle.features.join(", "));
          setPhotos(payload.vehicle.colors?.[0]?.images.join("\n") ?? "");
          setVideo(payload.vehicle.video?.url ?? "");
        }
      });
  }, [vehicleId]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const images = photos
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const colors = (data.colors ?? empty.colors!).map((color, index) =>
      index === 0 && images.length ? { ...color, images } : color,
    );
    const payload = {
      ...empty,
      ...data,
      slug:
        data.slug ||
        `${data.brand}-${data.model}-${data.year}`
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-"),
      features: features.split(",").map((item) => item.trim()).filter(Boolean),
      colors,
      video: video
        ? { title: "Présentation", poster: images[0] ?? colors[0].images[0], url: video }
        : data.video,
    };
    if (vehicleId) {
      await fetch(`/api/vehicles/${vehicleId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/vehicles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
    router.push("/admin/vehicules");
    router.refresh();
  }

  function set<K extends keyof Vehicle>(key: K, value: Vehicle[K]) {
    setData((current) => ({ ...current, [key]: value }));
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input className={field} placeholder="Marque" value={data.brand ?? ""} onChange={(e) => set("brand", e.target.value)} />
      <input className={field} placeholder="Modèle" value={data.model ?? ""} onChange={(e) => set("model", e.target.value)} />
      <input className={field} type="number" placeholder="Année" value={data.year ?? ""} onChange={(e) => set("year", Number(e.target.value))} />
      <input className={field} type="number" placeholder="Prix FCFA" value={data.price ?? ""} onChange={(e) => set("price", Number(e.target.value))} />
      <input className={field} type="number" placeholder="Kilométrage" value={data.mileage ?? ""} onChange={(e) => set("mileage", Number(e.target.value))} />
      <select className={field} value={data.availability} onChange={(e) => set("availability", e.target.value as Vehicle["availability"])}>
        <option value="disponible" className="bg-ink">Disponible</option>
        <option value="reserve" className="bg-ink">Réservé</option>
        <option value="vendu" className="bg-ink">Vendu</option>
        <option value="en_arrivage" className="bg-ink">En arrivage</option>
      </select>
      <input className={field} placeholder="Moteur" value={data.engine ?? ""} onChange={(e) => set("engine", e.target.value)} />
      <input className={field} placeholder="Puissance" value={data.power ?? ""} onChange={(e) => set("power", e.target.value)} />
      <select className={field} value={data.fuel} onChange={(e) => set("fuel", e.target.value as Vehicle["fuel"])}>
        <option value="essence" className="bg-ink">Essence</option>
        <option value="diesel" className="bg-ink">Diesel</option>
        <option value="hybride" className="bg-ink">Hybride</option>
        <option value="electrique" className="bg-ink">Électrique</option>
      </select>
      <select className={field} value={data.transmission} onChange={(e) => set("transmission", e.target.value as Vehicle["transmission"])}>
        <option value="automatique" className="bg-ink">Automatique</option>
        <option value="manuelle" className="bg-ink">Manuelle</option>
      </select>
      <textarea
        className="min-h-24 sm:col-span-2 border border-white/10 bg-transparent p-3 text-sm outline-none"
        placeholder="Description"
        value={data.description ?? ""}
        onChange={(e) => set("description", e.target.value)}
      />
      <textarea
        className="min-h-24 sm:col-span-2 border border-white/10 bg-transparent p-3 text-sm outline-none"
        placeholder="Équipements (séparés par des virgules)"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
      />
      <textarea
        className="min-h-24 sm:col-span-2 border border-white/10 bg-transparent p-3 text-sm outline-none"
        placeholder="Photos (une URL par ligne) — une URL par couleur pourra être ajoutée plus tard"
        value={photos}
        onChange={(e) => setPhotos(e.target.value)}
      />
      <input
        className={`${field} sm:col-span-2`}
        placeholder="URL vidéo (optionnel)"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
      />
      <p className="sm:col-span-2 text-xs text-mist">
        Couleurs par défaut : Noir, extensible. Architecture prévue pour une image
        distincte par teinte.
      </p>
      <div className="sm:col-span-2">
        <Button type="submit">{vehicleId ? "Enregistrer" : "Créer le véhicule"}</Button>
      </div>
    </form>
  );
}
