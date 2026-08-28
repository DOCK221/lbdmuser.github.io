export type FuelType = "essence" | "diesel" | "hybride" | "electrique";
export type Transmission = "automatique" | "manuelle";
export type Availability = "disponible" | "reserve" | "vendu" | "en_arrivage";
export type VehicleCategory = "berline" | "suv" | "coupe" | "crossover";
export type VehicleCondition = "excellent" | "tres_bon" | "bon";
export type ReservationType = "visite" | "essai" | "reservation";
export type PaymentMethod = "wave" | "orange_money" | "card" | "bank_transfer";
export type PaymentStatus =
  | "idle"
  | "pending"
  | "processing"
  | "success"
  | "failed"
  | "cancelled";
export type OrderStatus =
  | "draft"
  | "awaiting_payment"
  | "deposit_paid"
  | "paid"
  | "confirmed"
  | "cancelled";
export type AppointmentStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "completed"
  | "rescheduled";
export type AppointmentType = "visite" | "essai" | "conseil";

export interface VehicleColor {
  id: string;
  name: string;
  hex: string;
  images: string[];
}

export interface VehicleVideo {
  title: string;
  poster: string;
  url?: string;
}

export interface VehicleRental {
  available: boolean;
  dailyRate: number;
  weeklyRate: number;
  deposit: number;
}

export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: FuelType;
  transmission: Transmission;
  engine: string;
  power: string;
  seats: number;
  condition: VehicleCondition;
  origin: string;
  availability: Availability;
  category: VehicleCategory;
  description: string;
  colors: VehicleColor[];
  defaultColorId: string;
  features: string[];
  video?: VehicleVideo;
  rental?: VehicleRental;
  isNewArrival: boolean;
  createdAt: string;
}

export interface VehicleFilters {
  brand?: string;
  model?: string;
  minPrice?: number;
  maxPrice?: number;
  year?: number;
  fuel?: FuelType;
  transmission?: Transmission;
  availability?: Availability;
  query?: string;
  sort?: "price_asc" | "price_desc" | "year_desc" | "year_asc" | "newest";
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  phone: string;
  whatsapp: string;
  email: string;
}

export interface ReservationDraft {
  vehicleId?: string;
  colorId?: string;
  type?: ReservationType;
  customer?: CustomerInfo;
  payDeposit?: boolean;
  depositAmount?: number;
  notes?: string;
}

export interface Reservation {
  id: string;
  reference: string;
  vehicleId: string;
  colorId: string;
  type: ReservationType;
  customer: CustomerInfo;
  notes?: string;
  amountDue: number;
  depositAmount: number;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  paymentMethod?: PaymentMethod;
  transactionReference?: string;
  createdAt: string;
}

export interface AppointmentSlot {
  date: string;
  time: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  reference: string;
  vehicleId?: string;
  type: AppointmentType;
  date: string;
  time: string;
  customer: CustomerInfo;
  notes?: string;
  status: AppointmentStatus;
  createdAt: string;
}

export interface PaymentSession {
  id: string;
  provider: "paydunya" | "paytech" | "mock";
  method: PaymentMethod;
  amount: number;
  currency: "XOF";
  reference: string;
  status: PaymentStatus;
  checkoutUrl?: string;
  reservationId?: string;
  isDeposit: boolean;
}

export interface SocialPost {
  id: string;
  platform: "instagram" | "tiktok";
  image: string;
  caption: string;
  href: string;
  date: string;
}
