import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-ink pt-28">
      <Container>
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">404</p>
        <h1 className="mt-4 font-display text-5xl">Page introuvable</h1>
        <p className="mt-4 max-w-md text-sm text-mist">
          Ce véhicule ou cette page n’est plus disponible.
        </p>
        <div className="mt-10">
          <Button href="/vehicules">Retour au catalogue</Button>
        </div>
      </Container>
    </div>
  );
}
