import { reservationRepository } from "@/lib/repositories/reservations";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const reservations = await reservationRepository.list();
  return NextResponse.json({ reservations });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body?.vehicleId || !body?.type || !body?.customer?.lastName) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }
    const reservation = await reservationRepository.create(body);
    return NextResponse.json({ reservation }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur" },
      { status: 400 },
    );
  }
}
