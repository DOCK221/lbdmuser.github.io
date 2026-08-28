import { vehicles as seedVehicles } from "@/data/vehicles";
import type { Vehicle, VehicleFilters } from "@/lib/types";
import { filterVehicles } from "@/data/vehicles";

/**
 * Repository contract — swap MemoryVehicleRepository for a Prisma/SQL
 * implementation without touching UI or API route signatures.
 */
export interface VehicleRepository {
  list(filters?: VehicleFilters & { rentalOnly?: boolean }): Promise<Vehicle[]>;
  getById(id: string): Promise<Vehicle | null>;
  getBySlug(slug: string): Promise<Vehicle | null>;
  create(input: Omit<Vehicle, "id" | "createdAt">): Promise<Vehicle>;
  update(id: string, patch: Partial<Vehicle>): Promise<Vehicle | null>;
  remove(id: string): Promise<boolean>;
}

class MemoryVehicleRepository implements VehicleRepository {
  private items: Vehicle[] = structuredClone(seedVehicles);

  async list(filters: VehicleFilters & { rentalOnly?: boolean } = {}) {
    return filterVehicles(this.items, filters);
  }

  async getById(id: string) {
    return this.items.find((item) => item.id === id) ?? null;
  }

  async getBySlug(slug: string) {
    return this.items.find((item) => item.slug === slug) ?? null;
  }

  async create(input: Omit<Vehicle, "id" | "createdAt">) {
    const vehicle: Vehicle = {
      ...input,
      id: `veh-${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    this.items.unshift(vehicle);
    return vehicle;
  }

  async update(id: string, patch: Partial<Vehicle>) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index < 0) return null;
    this.items[index] = { ...this.items[index], ...patch, id };
    return this.items[index];
  }

  async remove(id: string) {
    const before = this.items.length;
    this.items = this.items.filter((item) => item.id !== id);
    return this.items.length < before;
  }
}

export const vehicleRepository: VehicleRepository = new MemoryVehicleRepository();
