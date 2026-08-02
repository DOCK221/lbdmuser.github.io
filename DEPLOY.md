# Déploiement — Portfolio Aminata Sow

## Site en ligne

**https://empty-snow-3685.zerodeploy.app**

## Build local (site statique)

```bash
npm install
npm run build   # génère /out
npx serve out   # preview
```

## Publier sur ZeroDeploy (Drop API)

```bash
npm run build
tar -czf site.tar.gz -C out .
curl -X POST https://api.zerodeploy.dev/drop \
  -H "Content-Type: application/gzip" \
  --data-binary @site.tar.gz
```

La réponse JSON contient l’URL publique et un lien `claim` pour rendre le site permanent.

## GitHub Pages

Après merge sur `main`, le workflow `.github/workflows/deploy-pages.yml` publie le site sur GitHub Pages.
