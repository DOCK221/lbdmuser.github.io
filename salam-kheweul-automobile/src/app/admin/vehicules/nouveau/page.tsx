import { VehicleEditor } from "@/components/admin/VehicleEditor";

export default function NewVehiclePage() {
  return (
    <div>
      <h1 className="mb-8 font-display text-4xl">Ajouter un véhicule</h1>
      <VehicleEditor />
    </div>
  );
}
