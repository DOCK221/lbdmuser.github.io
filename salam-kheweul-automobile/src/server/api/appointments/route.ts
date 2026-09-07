import { appointmentRepository } from "@/lib/repositories/appointments";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const from =
    request.nextUrl.searchParams.get("from") ??
    new Date().toISOString().slice(0, 10);
  const [slots, appointments] = await Promise.all([
    appointmentRepository.getSlots(from),
    appointmentRepository.list(),
  ]);
  return NextResponse.json({ slots, appointments });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body?.date || !body?.time || !body?.customer?.lastName) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }
  const appointment = await appointmentRepository.create(body);
  return NextResponse.json({ appointment }, { status: 201 });
}
