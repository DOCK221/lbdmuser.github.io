# Salam Kheweul Automobile

Plateforme web premium pour la concession **SALAM KHEWEUL AUTOMOBILE** (Dakar) : vente, achat, location et services automobiles.

Stack : **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion**.

## Démarrage

```bash
cd salam-kheweul-automobile
cp .env.example .env.local
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
| --- | --- |
| `/` | Accueil cinematic |
| `/vehicules` | Catalogue + filtres + tri |
| `/vehicules/[slug]` | Fiche véhicule, galerie, couleurs, équipements |
| `/services` | Vente, achat, location, conseil |
| `/location` | Flotte de location |
| `/achat` | Rachat de véhicule |
| `/rendez-vous` | Prise de rendez-vous avec créneaux |
| `/reservation` | Parcours de réservation |
| `/paiement` | Wave / Orange Money / carte / virement |
| `/confirmation` | Confirmation commande / paiement |
| `/contact` | Contact + réseaux |
| `/admin` | Dashboard (véhicules, RDV, commandes) |

## Architecture backend (prête à brancher)

Les interfaces sont dans `src/lib/repositories/` et `src/lib/payment/`.

- **Véhicules** : `VehicleRepository` — remplacer l’implémentation mémoire par Prisma / Drizzle.
- **Rendez-vous** : `AppointmentRepository` + `CalendarProvider` (Google Calendar plus tard).
- **Commandes** : `ReservationRepository`.
- **Paiements** : `PaymentProvider` (`PayDunyaProvider`, `PayTechProvider`, `MockPaymentProvider`).

Aucune donnée bancaire n’est stockée. Seules les références prestataire, le montant et le statut sont conservés.

Variables d’environnement : voir `.env.example`.

## Déploiement (Vercel)

1. Root Directory : `salam-kheweul-automobile`
2. Variables : `NEXT_PUBLIC_SITE_URL` = URL de production
3. Ajouter les clés PayDunya / PayTech uniquement en production
4. Brancher `DATABASE_URL` lorsque la base est prête

```bash
npm run build
npm start
```

## Contact

- Téléphone / WhatsApp : **+221 77 347 39 20**
