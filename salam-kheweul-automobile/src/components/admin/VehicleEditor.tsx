"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getVehicleById } from "@/data/vehicles";
import type { Vehicle } from "@/lib/types";

const field =
  "h-11 w-full border border-white/10 bg-transparent px-3 text-sm outline-none focus:border-gold/40";

const empty: Partial<Vehicle> = {
  brand: "",
  model: "",
  year: null,
  price: null,
  currency: "FCFA",
  mileage: null,
  fuel: null,
  transmission: null,
  engine: "",
  power: "",
  seats: null,
  condition: null,
  origin: "",
  availability: "",
  category: "",
  description: "",
  exteriorColor: "",
  interiorColor: "",
  slug: "",
  defaultColorId: "unique",
  images: [],
  mainImage: "",
  features: [],
  colors: [
    {
      id: "unique",
      name: "",
      hex: "#8A8D91",
      images: [],
    },
  ],
  isNewArrival: true,
};

function optionalNumber(value: string): number | null {
  if (value.trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

export function VehicleEditor({ vehicleId }: { vehicleId?: string }) {
  const router = useRouter();
  const [data, setData] = useState<Partial<Vehicle>>(empty);
  const [features, setFeatures] = useState("");
  const [photos, setPhotos] = useState("");
  const [video, setVideo] = useState("");

  useEffect(() => {
    if (!vehicleId) return;
    const vehicle = getVehicleById(vehicleId);
    if (!vehicle) return;
    setData(vehicle);
    setFeatures((vehicle.features ?? []).join(", "));
    setPhotos(
      (vehicle.images?.length ? vehicle.images : vehicle.colors?.[0]?.images ?? []).join(
        "\n",
      ),
    );
    setVideo(vehicle.video?.url ?? "");
  }, [vehicleId]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    router.push("/admin/vehicules");
  }

  function set<K extends keyof Vehicle>(key: K, value: Vehicle[K]) {
    setData((current) => ({ ...current, [key]: value }));
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input className={field} placeholder="Marque" value={data.brand ?? ""} onChange={(e) => set("brand", e.target.value)} />
      <input className={field} placeholder="Modèle" value={data.model ?? ""} onChange={(e) => set("model", e.target.value)} />
      <input className={field} type="number" placeholder="Année (laisser vide si inconnue)" value={data.year ?? ""} onChange={(e) => set("year", optionalNumber(e.target.value))} />
      <input className={field} type="number" placeholder="Prix FCFA (vide = non renseigné)" value={data.price ?? ""} onChange={(e) => set("price", optionalNumber(e.target.value))} />
      <input className={field} type="number" placeholder="Kilométrage (vide = non renseigné)" value={data.mileage ?? ""} onChange={(e) => set("mileage", optionalNumber(e.target.value))} />
      <select className={field} value={data.availability ?? ""} onChange={(e) => set("availability", e.target.value as Vehicle["availability"])}>
        <option value="" className="bg-ink">Disponibilité non renseignée</option>
        <option value="disponible" className="bg-ink">Disponible</option>
        <option value="reserve" className="bg-ink">Réservé</option>
        <option value="vendu" className="bg-ink">Vendu</option>
        <option value="en_arrivage" className="bg-ink">En arrivage</option>
      </select>
      <input className={field} placeholder="Moteur" value={data.engine ?? ""} onChange={(e) => set("engine", e.target.value)} />
      <input className={field} placeholder="Puissance" value={data.power ?? ""} onChange={(e) => set("power", e.target.value)} />
      <select className={field} value={data.fuel ?? ""} onChange={(e) => set("fuel", (e.target.value || null) as Vehicle["fuel"])}>
        <option value="" className="bg-ink">Carburant non renseigné</option>
        <option value="essence" className="bg-ink">Essence</option>
        <option value="diesel" className="bg-ink">Diesel</option>
        <option value="hybride" className="bg-ink">Hybride</option>
        <option value="electrique" className="bg-ink">Électrique</option>
      </select>
      <select className={field} value={data.transmission ?? ""} onChange={(e) => set("transmission", (e.target.value || null) as Vehicle["transmission"])}>
        <option value="" className="bg-ink">Transmission non renseignée</option>
        <option value="automatique" className="bg-ink">Automatique</option>
        <option value="manuelle" className="bg-ink">Manuelle</option>
      </select>
      <input className={field} placeholder="Couleur extérieure" value={data.exteriorColor ?? ""} onChange={(e) => set("exteriorColor", e.target.value)} />
      <input className={field} placeholder="Couleur intérieure" value={data.interiorColor ?? ""} onChange={(e) => set("interiorColor", e.target.value)} />
      <textarea
        className="min-h-24 sm:col-span-2 border border-white/10 bg-transparent p-3 text-sm outline-none"
        placeholder="Description (laisser vide plutôt que d’inventer)"
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
        placeholder="Photos (un chemin par ligne, ex. /vehicles/bmw-x5-2020/bmw-x5-2020-front.jpg)"
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
        Ajoutez les fichiers dans /public/vehicles/&lt;slug&gt;/ puis listez les chemins ici.
        Ne renseignez que les informations connues.
      </p>
      <div className="sm:col-span-2">
        <Button type="submit">{vehicleId ? "Enregistrer" : "Créer le véhicule"}</Button>
      </div>
    </form>
  );
}
