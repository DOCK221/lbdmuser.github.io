import { generateReference } from "@/lib/format";
import type {
  Appointment,
  AppointmentSlot,
  AppointmentStatus,
  CustomerInfo,
  AppointmentType,
} from "@/lib/types";

export interface CreateAppointmentInput {
  vehicleId?: string;
  type: AppointmentType;
  date: string;
  time: string;
  customer: CustomerInfo;
  notes?: string;
}

export interface AppointmentRepository {
  list(): Promise<Appointment[]>;
  getByReference(reference: string): Promise<Appointment | null>;
  create(input: CreateAppointmentInput): Promise<Appointment>;
  updateStatus(id: string, status: AppointmentStatus): Promise<Appointment | null>;
  getSlots(fromDate: string, days?: number): Promise<AppointmentSlot[]>;
}

const HOURS = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

function toISODate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function isSunday(date: Date): boolean {
  return date.getDay() === 0;
}

/**
 * Placeholder for a future Google Calendar / booking engine adapter.
 * Keep this interface stable when wiring Calendar API or a CRM.
 */
export interface CalendarProvider {
  listBusySlots(from: string, to: string): Promise<AppointmentSlot[]>;
  createEvent(appointment: Appointment): Promise<{ externalId: string }>;
  cancelEvent(externalId: string): Promise<void>;
}

export class NullCalendarProvider implements CalendarProvider {
  async listBusySlots(): Promise<AppointmentSlot[]> {
    return [];
  }
  async createEvent(): Promise<{ externalId: string }> {
    return { externalId: `local-${Date.now()}` };
  }
  async cancelEvent(): Promise<void> {
    return;
  }
}

class MemoryAppointmentRepository implements AppointmentRepository {
  private items: Appointment[] = [
    {
      id: "apt-1001",
      reference: "RDV-SKA-1001",
      vehicleId: "veh-001",
      type: "essai",
      date: "2026-09-02",
      time: "10:00",
      customer: {
        firstName: "Awa",
        lastName: "Diop",
        phone: "+221 77 111 22 33",
        whatsapp: "+221 77 111 22 33",
        email: "awa.diop@email.sn",
      },
      status: "confirmed",
      createdAt: "2026-08-20T10:00:00.000Z",
    },
    {
      id: "apt-1002",
      reference: "RDV-SKA-1002",
      vehicleId: "veh-004",
      type: "visite",
      date: "2026-09-03",
      time: "15:00",
      customer: {
        firstName: "Mamadou",
        lastName: "Ndiaye",
        phone: "+221 76 222 33 44",
        whatsapp: "+221 76 222 33 44",
        email: "mamadou.ndiaye@email.sn",
      },
      status: "pending",
      createdAt: "2026-08-22T16:30:00.000Z",
    },
  ];

  private calendar: CalendarProvider = new NullCalendarProvider();

  async list() {
    return [...this.items].sort((a, b) => `${b.date}${b.time}`.localeCompare(`${a.date}${a.time}`));
  }

  async getByReference(reference: string) {
    return this.items.find((item) => item.reference === reference) ?? null;
  }

  async create(input: CreateAppointmentInput) {
    const appointment: Appointment = {
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
    this.items.unshift(appointment);
    await this.calendar.createEvent(appointment);
    return appointment;
  }

  async updateStatus(id: string, status: AppointmentStatus) {
    const item = this.items.find((entry) => entry.id === id);
    if (!item) return null;
    item.status = status;
    return item;
  }

  async getSlots(fromDate: string, days = 14) {
    const start = new Date(`${fromDate}T12:00:00`);
    const slots: AppointmentSlot[] = [];
    const booked = new Set(
      this.items
        .filter((item) => item.status !== "cancelled")
        .map((item) => `${item.date}|${item.time}`),
    );

    for (let i = 0; i < days; i += 1) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      if (isSunday(date)) continue;
      const iso = toISODate(date);
      for (const time of HOURS) {
        const key = `${iso}|${time}`;
        const artificiallyBusy = iso.endsWith("5") && time === "12:00";
        slots.push({
          date: iso,
          time,
          available: !booked.has(key) && !artificiallyBusy,
        });
      }
    }
    return slots;
  }
}

export const appointmentRepository: AppointmentRepository =
  new MemoryAppointmentRepository();
