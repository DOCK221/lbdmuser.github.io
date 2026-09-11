export const PAYMENT_STATUS: Record<string, string> = {
  idle: "Aucun",
  pending: "En attente",
  processing: "Traitement",
  success: "Réussi",
  failed: "Échoué",
  cancelled: "Annulé",
};

export const ORDER_STATUS: Record<string, string> = {
  draft: "Brouillon",
  awaiting_payment: "Attente paiement",
  deposit_paid: "Acompte reçu",
  paid: "Payée",
  confirmed: "Confirmée",
  cancelled: "Annulée",
};
