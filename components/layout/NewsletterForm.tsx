"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="mt-6 text-sm leading-relaxed text-ivory/70">
        Merci. Vous serez informé des prochaines collections.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6">
      <label htmlFor="newsletter-email" className="sr-only">
        Adresse e-mail
      </label>
      <div className="flex border-b border-ivory/25">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Votre e-mail"
          className="w-full bg-transparent py-3 text-sm text-ivory outline-none placeholder:text-ivory/35"
        />
        <button
          type="submit"
          className="shrink-0 px-2 text-[0.65rem] tracking-[0.2em] uppercase text-ivory/80 transition-colors hover:text-ivory"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
