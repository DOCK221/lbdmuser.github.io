import { VehicleEditor } from "@/components/admin/VehicleEditor";

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
