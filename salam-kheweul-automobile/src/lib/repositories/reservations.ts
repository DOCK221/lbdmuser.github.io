import { generateReference } from "@/lib/format";
import { vehicleRepository } from "@/lib/repositories/vehicles";
import { DEPOSIT_RATE } from "@/lib/constants";
import type {
  CustomerInfo,
  OrderStatus,
  PaymentStatus,
  Reservation,
  ReservationType,
} from "@/lib/types";

export interface CreateReservationInput {
  vehicleId: string;
  colorId: string;
  type: ReservationType;
  customer: CustomerInfo;
  payDeposit: boolean;
  notes?: string;
}

export interface ReservationRepository {
  list(): Promise<Reservation[]>;
  getById(id: string): Promise<Reservation | null>;
  getByReference(reference: string): Promise<Reservation | null>;
  create(input: CreateReservationInput): Promise<Reservation>;
  updatePayment(
    id: string,
    patch: Partial<
      Pick<
        Reservation,
        "paymentStatus" | "orderStatus" | "paymentMethod" | "transactionReference"
      >
    >,
  ): Promise<Reservation | null>;
}

class MemoryReservationRepository implements ReservationRepository {
  private items: Reservation[] = [
    {
      id: "res-9001",
      reference: "RES-SKA-9001",
      vehicleId: "veh-006",
      colorId: "noir",
      type: "reservation",
      customer: {
        firstName: "Fatou",
        lastName: "Ba",
        phone: "+221 77 555 66 77",
        whatsapp: "+221 77 555 66 77",
        email: "fatou.ba@email.sn",
      },
      amountDue: 54000000,
      depositAmount: 5400000,
      paymentStatus: "success",
      orderStatus: "deposit_paid",
      paymentMethod: "wave",
      transactionReference: "TX-WAVE-88421",
      createdAt: "2026-08-19T11:20:00.000Z",
    },
  ];

  async list() {
    return [...this.items];
  }

  async getById(id: string) {
    return this.items.find((item) => item.id === id) ?? null;
  }

  async getByReference(reference: string) {
    return this.items.find((item) => item.reference === reference) ?? null;
  }

  async create(input: CreateReservationInput) {
    const vehicle = await vehicleRepository.getById(input.vehicleId);
    if (!vehicle) {
      throw new Error("Véhicule introuvable");
    }
    const depositAmount = Math.round(vehicle.price * DEPOSIT_RATE);
    const reservation: Reservation = {
      id: `res-${Date.now()}`,
      reference: generateReference("RES"),
      vehicleId: input.vehicleId,
      colorId: input.colorId,
      type: input.type,
      customer: input.customer,
      notes: input.notes,
      amountDue: vehicle.price,
      depositAmount,
      paymentStatus: input.payDeposit ? "pending" : "idle",
      orderStatus: input.payDeposit ? "awaiting_payment" : "confirmed",
      createdAt: new Date().toISOString(),
    };
    this.items.unshift(reservation);
    return reservation;
  }

  async updatePayment(id: string, patch: Partial<Reservation>) {
    const item = this.items.find((entry) => entry.id === id);
    if (!item) return null;
    Object.assign(item, patch);
    return item;
  }
}

export const reservationRepository: ReservationRepository =
  new MemoryReservationRepository();

export function mapPaymentToOrder(
  payment: PaymentStatus,
): OrderStatus {
  switch (payment) {
    case "success":
      return "deposit_paid";
    case "pending":
    case "processing":
      return "awaiting_payment";
    case "failed":
    case "cancelled":
      return "cancelled";
    default:
      return "draft";
  }
}
