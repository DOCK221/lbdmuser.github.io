import { vehicleRepository } from "@/lib/repositories/vehicles";
import { NextRequest, NextResponse } from "next/server";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Ctx) {
  const { id } = await params;
  const vehicle = await vehicleRepository.getById(id);
  if (!vehicle) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  return NextResponse.json({ vehicle });
}

export async function PATCH(request: NextRequest, { params }: Ctx) {
  const { id } = await params;
  const patch = await request.json();
  const vehicle = await vehicleRepository.update(id, patch);
  if (!vehicle) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  return NextResponse.json({ vehicle });
}

export async function DELETE(_request: NextRequest, { params }: Ctx) {
  const { id } = await params;
  const ok = await vehicleRepository.remove(id);
  if (!ok) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
