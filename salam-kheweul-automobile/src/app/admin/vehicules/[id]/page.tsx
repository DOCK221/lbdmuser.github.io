import { VehicleEditor } from "@/components/admin/VehicleEditor";
import { vehicles } from "@/data/vehicles";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ id: vehicle.id }));
}

export default async function EditVehiclePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1 className="mb-8 font-display text-4xl">Modifier le véhicule</h1>
      <VehicleEditor vehicleId={id} />
    </div>
  );
}
