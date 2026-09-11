import { DEPOSIT_RATE } from "@/lib/constants";
import { generateReference } from "@/lib/format";
import { getVehicleById } from "@/data/vehicles";
import type {
  Appointment,
  AppointmentSlot,
  AppointmentType,
  CustomerInfo,
  Reservation,
  ReservationType,
} from "@/lib/types";

const HOURS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

function toISODate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function generateAppointmentSlots(
  fromDate: string,
  days = 14,
): AppointmentSlot[] {
  const start = new Date(`${fromDate}T12:00:00`);
  const slots: AppointmentSlot[] = [];

  for (let i = 0; i < days; i += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    if (date.getDay() === 0) continue;
    const iso = toISODate(date);
    for (const time of HOURS) {
      slots.push({ date: iso, time, available: true });
    }
  }
  return slots;
}

export function createLocalAppointment(input: {
  vehicleId?: string;
  type: AppointmentType;
  date: string;
  time: string;
  customer: CustomerInfo;
  notes?: string;
}): Appointment {
  return {
    id: `apt-${Date.now()}`,
    reference: generateReference("RDV"),
    vehicleId: input.vehicleId,
    type: input.type,
    date: input.date,
    time: input.time,
    customer: input.customer,
    notes: input.notes,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };
}

export function createLocalReservation(input: {
  vehicleId: string;
  colorId: string;
  type: ReservationType;
  customer: CustomerInfo;
  payDeposit: boolean;
  notes?: string;
}): Reservation {
  const vehicle = getVehicleById(input.vehicleId);
  if (!vehicle) {
    throw new Error("Véhicule introuvable");
  }
  const depositAmount =
    input.payDeposit && vehicle.price != null
      ? Math.round(vehicle.price * DEPOSIT_RATE)
      : 0;
  return {
    id: `res-${Date.now()}`,
    reference: generateReference("RES"),
    vehicleId: input.vehicleId,
    colorId: input.colorId,
    type: input.type,
    customer: input.customer,
    notes: input.notes,
    amountDue: vehicle.price ?? 0,
    depositAmount,
    paymentStatus: input.payDeposit ? "pending" : "idle",
    orderStatus: input.payDeposit ? "awaiting_payment" : "confirmed",
    createdAt: new Date().toISOString(),
  };
}
