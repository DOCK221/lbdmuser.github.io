# Aminata Sow — Portfolio

Portfolio créatif haut de gamme pour **Aminata Sow** — Creative Director, Web Designer, Content Creator, Photographer & Digital Strategist.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- React Icons

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # développement
npm run build    # build production
npm run start    # serveur production
npm run lint     # eslint
```

## Contenu modifiable

Tout le contenu éditorial vit dans `/src/data` :

| Fichier | Contenu |
|---|---|
| `site.ts` | Identité, hero, about, SEO |
| `projects.ts` | Projets & détails |
| `services.ts` | Services |
| `process.ts` | Timeline process |
| `stats.ts` | Chiffres clés |
| `testimonials.ts` | Témoignages |
| `photography.ts` | Galerie photo |
| `socials.ts` | Réseaux sociaux |

## Images

Placer les médias dans `/public/images` :

```
public/images/
  hero/
  about/
  projects/
  photography/
    portrait/
    food/
    lifestyle/
    sport/
    business/
```

## Structure

```
src/
  app/                 # pages + SEO
  components/
    layout/            # Navbar, Footer, SmoothScroll
    sections/          # Hero, About, Projects…
    ui/                # Boutons, Reveal, Lightbox…
  data/                # contenu
  lib/                 # utilitaires
  types/               # types TypeScript
```

## Direction artistique

- Noir profond `#090909`
- Accent beige `#D8C3A5`
- Typographie Geist
- Animations fade / blur / parallax / tilt 3D
- Scroll Lenis ultra fluide
