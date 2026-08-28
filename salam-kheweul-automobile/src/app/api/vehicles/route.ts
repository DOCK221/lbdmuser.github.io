import { vehicleRepository } from "@/lib/repositories/vehicles";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const vehicles = await vehicleRepository.list({
    brand: searchParams.get("brand") ?? undefined,
    model: searchParams.get("model") ?? undefined,
    minPrice: searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : undefined,
    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : undefined,
    year: searchParams.get("year") ? Number(searchParams.get("year")) : undefined,
    fuel: (searchParams.get("fuel") as never) ?? undefined,
    transmission: (searchParams.get("transmission") as never) ?? undefined,
    query: searchParams.get("q") ?? undefined,
    sort: (searchParams.get("sort") as never) ?? "newest",
    rentalOnly: searchParams.get("rental") === "1",
  });
  return NextResponse.json({ vehicles });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const vehicle = await vehicleRepository.create(body);
  return NextResponse.json({ vehicle }, { status: 201 });
}
