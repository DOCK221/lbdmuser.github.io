import type { PaymentMethod, PaymentSession, PaymentStatus } from "@/lib/types";
import { generateReference } from "@/lib/format";

export interface InitiatePaymentInput {
  amount: number;
  currency: "XOF";
  method: PaymentMethod;
  customerEmail: string;
  customerPhone: string;
  description: string;
  reservationId?: string;
  isDeposit: boolean;
  successUrl: string;
  cancelUrl: string;
}

/**
 * Payment provider contract.
 * Never persist PAN / CVV / PIN. Store only provider references.
 */
export interface PaymentProvider {
  readonly name: PaymentSession["provider"];
  initiate(input: InitiatePaymentInput): Promise<PaymentSession>;
  verify(reference: string): Promise<PaymentStatus>;
  parseWebhook(
    payload: unknown,
    signature: string | null,
  ): Promise<{
    reference: string;
    status: PaymentStatus;
    amount: number;
    currency: "XOF";
    providerReference: string;
  }>;
}

function env(name: string): string | undefined {
  return process.env[name];
}

export class PayDunyaProvider implements PaymentProvider {
  readonly name = "paydunya" as const;

  initiate(input: InitiatePaymentInput): Promise<PaymentSession> {
    const master = env("PAYDUNYA_MASTER_KEY");
    const token = env("PAYDUNYA_TOKEN");
    if (!master || !token) {
      return Promise.reject(
        new Error("PayDunya n’est pas configuré. Renseignez PAYDUNYA_MASTER_KEY et PAYDUNYA_TOKEN."),
      );
    }
    void input;
    // Official PayDunya checkout API lives at https://app.paydunya.com/api/v1/checkout-invoice/create
    return Promise.reject(
      new Error("Implémentation PayDunya prête à être branchée — clés détectées, appel API à activer."),
    );
  }

  verify(): Promise<PaymentStatus> {
    return Promise.resolve("pending");
  }

  parseWebhook() {
    return Promise.reject(new Error("Webhook PayDunya non branché."));
  }
}

export class PayTechProvider implements PaymentProvider {
  readonly name = "paytech" as const;

  initiate(input: InitiatePaymentInput): Promise<PaymentSession> {
    const key = env("PAYTECH_API_KEY");
    const secret = env("PAYTECH_SECRET_KEY");
    if (!key || !secret) {
      return Promise.reject(
        new Error("PayTech n’est pas configuré. Renseignez PAYTECH_API_KEY et PAYTECH_SECRET_KEY."),
      );
    }
    void input;
    return Promise.reject(
      new Error("Implémentation PayTech prête à être branchée — clés détectées, appel API à activer."),
    );
  }

  verify(): Promise<PaymentStatus> {
    return Promise.resolve("pending");
  }

  parseWebhook() {
    return Promise.reject(new Error("Webhook PayTech non branché."));
  }
}

/**
 * Local sandbox used until a real PSP is configured.
 * Simulates Wave / Orange Money / card / transfer checkout.
 */
export class MockPaymentProvider implements PaymentProvider {
  readonly name = "mock" as const;
  private sessions = new Map<string, PaymentSession>();

  async initiate(input: InitiatePaymentInput): Promise<PaymentSession> {
    const reference = generateReference("TX");
    const session: PaymentSession = {
      id: `pay-${Date.now()}`,
      provider: "mock",
      method: input.method,
      amount: input.amount,
      currency: "XOF",
      reference,
      status: "pending",
      isDeposit: input.isDeposit,
      reservationId: input.reservationId,
      checkoutUrl: `${input.successUrl}?reference=${reference}&mock=1`,
    };
    this.sessions.set(reference, session);
    return session;
  }

  async verify(reference: string): Promise<PaymentStatus> {
    return this.sessions.get(reference)?.status ?? "pending";
  }

  async parseWebhook(payload: unknown) {
    const body = payload as {
      reference?: string;
      status?: PaymentStatus;
      amount?: number;
    };
    return {
      reference: body.reference ?? "",
      status: body.status ?? "pending",
      amount: body.amount ?? 0,
      currency: "XOF" as const,
      providerReference: body.reference ?? "",
    };
  }
}

export function getPaymentProvider(): PaymentProvider {
  if (env("PAYDUNYA_MASTER_KEY") && env("PAYDUNYA_TOKEN")) {
    return new PayDunyaProvider();
  }
  if (env("PAYTECH_API_KEY") && env("PAYTECH_SECRET_KEY")) {
    return new PayTechProvider();
  }
  return new MockPaymentProvider();
}
