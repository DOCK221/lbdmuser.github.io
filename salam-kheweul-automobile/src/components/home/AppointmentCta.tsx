import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AppointmentCta() {
  return (
    <section className="relative overflow-hidden py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-ink/80" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.34em] text-gold">
            Rendez-vous
          </p>
          <h2 className="mt-5 font-display text-4xl text-ivory sm:text-6xl">
            Venez découvrir votre prochaine voiture.
          </h2>
          <p className="mt-6 text-sm text-mist">
            Un créneau privé en concession. Essai, conseil, ou simple visite —
            à votre rythme.
          </p>
          <div className="mt-10">
            <Button href="/rendez-vous" variant="ivory" size="lg">
              Réserver un rendez-vous
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
