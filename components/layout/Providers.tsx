"use client";

import { CartProvider } from "@/lib/cart-context";
import { UiProvider } from "@/lib/ui-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UiProvider>
      <CartProvider>{children}</CartProvider>
    </UiProvider>
  );
}
