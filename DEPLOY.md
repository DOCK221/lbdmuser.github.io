# Déploiement — Portfolio Aminata Sow

## Site en ligne

**https://small-thunder-5101.zerodeploy.app**

Rendre permanent (claim) :
https://dashboard.zerodeploy.dev/drop-claim?token=zdr_c03a7911d40e3d6b328c86d7c291b3c7f33cd7b49c425243475b2d9b2e7d97a8

> Expire en 72 h sauf claim. Redeploy avec le claim token pour renouveler.

## Build local

```bash
npm install
npm run build   # génère /out
npx serve out
```

## Redeploy ZeroDeploy

```bash
npm run build
tar -czf site.tar.gz -C out .
curl -X POST https://api.zerodeploy.dev/drop \
  -H "Content-Type: application/gzip" \
  -H "X-Claim-Token: zdr_c03a7911d40e3d6b328c86d7c291b3c7f33cd7b49c425243475b2d9b2e7d97a8" \
  --data-binary @site.tar.gz
```

## GitHub Pages

Après merge sur `main`, le workflow `.github/workflows/deploy-pages.yml` publie sur GitHub Pages.
