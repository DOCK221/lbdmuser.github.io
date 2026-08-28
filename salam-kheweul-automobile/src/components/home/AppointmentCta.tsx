import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

export function AppointmentCta() {
  return (
    <section className="relative overflow-hidden py-28">
      <Photo
        src="/ambiance/night.jpg"
        alt="Véhicule premium de nuit"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.34em] text-gold">
            Rendez-vous
          </p>
          <h2 className="mt-5 font-display text-4xl text-ivory sm:text-6xl">
            Venez découvrir votre prochaine voiture.
          </h2>
          <p className="mt-6 text-sm text-mist sm:text-base">
            Un créneau privé en concession. Essai, conseil ou simple visite —
            à votre rythme. Réponse WhatsApp le jour même.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/rendez-vous" variant="ivory" size="lg">
              Réserver un rendez-vous
            </Button>
            <Button href="/vehicules" variant="ghost" size="lg">
              Voir les véhicules
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
