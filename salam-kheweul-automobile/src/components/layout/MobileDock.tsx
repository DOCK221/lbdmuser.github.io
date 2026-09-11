import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-3 py-3 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Button href={`tel:${SITE.phoneTel}`} variant="dark" size="sm" className="w-full px-2">
          Appeler
        </Button>
        <Button href={whatsappLink()} variant="ghost" size="sm" className="w-full px-2">
          WhatsApp
        </Button>
        <Button href="/rendez-vous" variant="gold" size="sm" className="w-full px-2">
          RDV
        </Button>
      </div>
    </div>
  );
}
