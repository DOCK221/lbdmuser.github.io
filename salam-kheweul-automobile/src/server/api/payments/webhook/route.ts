import { getPaymentProvider } from "@/lib/payment/provider";
import { mapPaymentToOrder } from "@/lib/repositories/reservations";
import { reservationRepository } from "@/lib/repositories/reservations";
import { NextRequest, NextResponse } from "next/server";

/**
 * Server-to-server confirmation endpoint.
 * Verify the provider signature before updating order status.
 * Never trust the browser redirect alone.
 */
export async function POST(request: NextRequest) {
  const signature =
    request.headers.get("x-paydunya-signature") ??
    request.headers.get("x-paytech-signature");
  const payload = await request.json();
  const provider = getPaymentProvider();

  try {
    const result = await provider.parseWebhook(payload, signature);
    const list = await reservationRepository.list();
    const reservation = list.find(
      (item) => item.transactionReference === result.reference || item.reference === payload.reservationReference,
    );
    if (reservation) {
      await reservationRepository.updatePayment(reservation.id, {
        paymentStatus: result.status,
        orderStatus: mapPaymentToOrder(result.status),
        transactionReference: result.providerReference,
      });
    }
    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Webhook rejeté" },
      { status: 400 },
    );
  }
}
