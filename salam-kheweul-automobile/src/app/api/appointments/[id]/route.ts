import { appointmentRepository } from "@/lib/repositories/appointments";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const { status } = await request.json();
  const appointment = await appointmentRepository.updateStatus(id, status);
  if (!appointment) {
    return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  }
  return NextResponse.json({ appointment });
}
