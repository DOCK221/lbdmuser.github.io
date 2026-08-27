import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-ivory px-6 pt-24 text-center">
      <p className="kicker">404</p>
      <h1 className="editorial mt-6 text-4xl md:text-6xl">
        Cette page
        <br />
        s’est égarée.
      </h1>
      <p className="mt-6 max-w-md text-sm text-stone">
        Revenez à l’accueil, ou poursuivez vers la collection.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Accueil</Button>
        <Button href="/boutique" variant="ghost">
          Boutique
        </Button>
      </div>
      <Link href="/contact" className="mt-8 text-[0.68rem] tracking-[0.2em] uppercase text-stone">
        Contact
      </Link>
    </div>
  );
}
