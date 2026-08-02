import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <p className="text-xs tracking-[0.3em] text-accent uppercase">404</p>
      <h1 className="font-display mt-4 text-4xl text-white md:text-6xl">
        Page introuvable
      </h1>
      <Link
        href="/"
        className="mt-10 border border-white/20 px-6 py-3 text-xs tracking-[0.2em] text-white uppercase transition hover:border-accent hover:text-accent"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
