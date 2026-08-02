# Déploiement — Portfolio Aminata Sow

## Site en ligne

**https://winter-dew-3115.zerodeploy.app**

Rendre permanent (claim) :
https://dashboard.zerodeploy.dev/drop-claim?token=zdr_4ce4add822c7488bd4cae3fd1fbaba48782ae46e232f19d294cda18ede2562f5

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
  -H "X-Claim-Token: zdr_4ce4add822c7488bd4cae3fd1fbaba48782ae46e232f19d294cda18ede2562f5" \
  --data-binary @site.tar.gz
```

## GitHub Pages

Après merge sur `main`, le workflow `.github/workflows/deploy-pages.yml` publie sur GitHub Pages.
