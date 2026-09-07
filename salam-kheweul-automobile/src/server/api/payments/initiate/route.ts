import { getPaymentProvider } from "@/lib/payment/provider";
import { reservationRepository } from "@/lib/repositories/reservations";
import { SITE } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const amount = Number(body.amount);
  if (!amount || amount <= 0) {
    return NextResponse.json({ error: "Montant invalide." }, { status: 400 });
  }

  const provider = getPaymentProvider();
  const reservation = body.reservationReference
    ? await reservationRepository.getByReference(body.reservationReference)
    : null;

  const session = await provider.initiate({
    amount,
    currency: "XOF",
    method: body.method,
    customerEmail: reservation?.customer.email ?? "client@salamkheweulautomobile.sn",
    customerPhone: reservation?.customer.phone ?? SITE.phoneTel,
    description: body.isDeposit
      ? `Acompte réservation ${body.reservationReference ?? ""}`
      : `Paiement ${body.reservationReference ?? ""}`,
    reservationId: reservation?.id,
    isDeposit: Boolean(body.isDeposit),
    successUrl: `${SITE.url}/confirmation`,
    cancelUrl: `${SITE.url}/paiement`,
  });

  if (reservation) {
    await reservationRepository.updatePayment(reservation.id, {
      paymentStatus: "success",
      orderStatus: body.isDeposit ? "deposit_paid" : "paid",
      paymentMethod: body.method,
      transactionReference: session.reference,
    });
  }

  return NextResponse.json({
    session: { ...session, status: "success" },
    reservationReference: reservation?.reference ?? body.reservationReference,
  });
}
