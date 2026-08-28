"use client";

import { useEffect, useState } from "react";
import { ORDER_STATUS, PAYMENT_STATUS } from "./labels";
import { formatPrice } from "@/lib/format";
import type { Reservation } from "@/lib/types";

export function AdminOrders() {
  const [items, setItems] = useState<Reservation[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/reservations")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setItems(data.reservations ?? []);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <h1 className="font-display text-4xl">Commandes</h1>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="text-[10px] uppercase tracking-[0.18em] text-mist">
            <tr className="border-b border-white/10">
              <th className="py-3 font-normal">Réf.</th>
              <th className="py-3 font-normal">Client</th>
              <th className="py-3 font-normal">Montant</th>
              <th className="py-3 font-normal">Paiement</th>
              <th className="py-3 font-normal">Commande</th>
              <th className="py-3 font-normal">Transaction</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-white/5">
                <td className="py-4">{item.reference}</td>
                <td className="py-4">
                  {item.customer.firstName} {item.customer.lastName}
                </td>
                <td className="py-4">{formatPrice(item.amountDue)}</td>
                <td className="py-4">{PAYMENT_STATUS[item.paymentStatus]}</td>
                <td className="py-4">{ORDER_STATUS[item.orderStatus]}</td>
                <td className="py-4 text-mist">{item.transactionReference ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
