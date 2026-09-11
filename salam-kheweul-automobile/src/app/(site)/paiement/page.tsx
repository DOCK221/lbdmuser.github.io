"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PaymentForm } from "@/components/payment/PaymentForm";
import { Container } from "@/components/ui/Container";
import { useSessionJson } from "@/lib/hooks/session";
import type { Reservation } from "@/lib/types";

function PaymentInner() {
  const params = useSearchParams();
  const reservation = useSessionJson<Reservation>("ska-reservation");
  const ref = params.get("reservation") ?? reservation?.reference;
  const isDeposit = params.get("deposit") === "1";
  const amountFromQuery = Number(params.get("amount") ?? 0);
  const amount =
    amountFromQuery ||
    (reservation
      ? isDeposit
        ? reservation.depositAmount
        : reservation.amountDue
      : 0);

  return (
    <PaymentForm amount={amount} reservationRef={ref} isDeposit={isDeposit} />
  );
}

export default function PaymentPage() {
  return (
    <div className="bg-ink pt-28 pb-24">
      <Container className="max-w-2xl">
        <Suspense>
          <PaymentInner />
        </Suspense>
      </Container>
    </div>
  );
}
