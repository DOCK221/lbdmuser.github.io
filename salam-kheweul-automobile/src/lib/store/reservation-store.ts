import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CustomerInfo, ReservationType } from "@/lib/types";

interface ReservationState {
  vehicleId?: string;
  colorId?: string;
  type?: ReservationType;
  customer: CustomerInfo;
  payDeposit: boolean;
  notes: string;
  setVehicle: (vehicleId: string, colorId?: string) => void;
  setType: (type: ReservationType) => void;
  setCustomer: (customer: Partial<CustomerInfo>) => void;
  setPayDeposit: (value: boolean) => void;
  setNotes: (notes: string) => void;
  reset: () => void;
}

const emptyCustomer: CustomerInfo = {
  firstName: "",
  lastName: "",
  phone: "",
  whatsapp: "",
  email: "",
};

export const useReservationStore = create<ReservationState>()(
  persist(
    (set) => ({
      customer: emptyCustomer,
      payDeposit: false,
      notes: "",
      setVehicle: (vehicleId, colorId) =>
        set((state) => ({
          vehicleId,
          colorId: colorId ?? state.colorId,
        })),
      setType: (type) => set({ type }),
      setCustomer: (customer) =>
        set((state) => ({ customer: { ...state.customer, ...customer } })),
      setPayDeposit: (payDeposit) => set({ payDeposit }),
      setNotes: (notes) => set({ notes }),
      reset: () =>
        set({
          vehicleId: undefined,
          colorId: undefined,
          type: undefined,
          customer: emptyCustomer,
          payDeposit: false,
          notes: "",
        }),
    }),
    { name: "ska-reservation" },
  ),
);
