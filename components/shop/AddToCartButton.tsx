"use client";

import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/Button";

export function AddToCartButton({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const { addItem } = useCart();

  return (
    <Button
      type="button"
      className={className}
      onClick={() => addItem(slug)}
    >
      Ajouter au panier
    </Button>
  );
}
