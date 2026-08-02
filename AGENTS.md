# AGENTS.md

## Cursor Cloud specific instructions

This is a single-service **Next.js 15 (App Router) + TypeScript** portfolio site ("Aminata Sow"). It is a fully static/SSG front-end — there is no backend, database, or external service, and no environment variables are required to run it.

- Package manager: **npm** (a `package-lock.json` is committed). Dependencies are refreshed automatically by the startup update script (`npm ci`).
- Standard commands live in `package.json` scripts; use them directly:
  - Dev server: `npm run dev` (serves on `http://localhost:3000`).
  - Lint: `npm run lint` (ESLint via `eslint-config-next`).
  - Production build: `npm run build`; serve the build with `npm run start`.
- Editorial content is data-driven and lives in `src/data/*.ts`; images live under `public/images/`. Project detail pages are statically generated from `src/data/projects.ts` via `generateStaticParams`, so slugs must exist there (e.g. `/projects/burger-coffee`).
- Node 22 (the VM default) works fine; Next.js 15 only requires Node >= 18.18.
