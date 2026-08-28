import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

const items = [
  { label: "Véhicules en stock", value: "10+" },
  { label: "Services", value: "Vente · Achat · Location" },
  { label: "Paiement", value: "Wave · OM · Carte" },
  { label: "WhatsApp", value: SITE.phoneDisplay },
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-ink-soft">
      <Container className="grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
              {item.label}
            </p>
            <p className="mt-2 font-display text-xl text-ivory sm:text-2xl">
              {item.value}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
