# Déploiement — Portfolio Aminata Sow

## Site en ligne (ZeroDeploy)

**URL :** https://bitter-hill-8613.zerodeploy.app

Claim (rendre permanent) :
https://dashboard.zerodeploy.dev/drop-claim?token=zdr_cbb8883a42f5ec43148f4c291e4d47691222d326fa72405ffe945d81fa3d8523

> Les drops ZeroDeploy expirent en 72 h sauf claim. Un redeploy avec le claim token remet le compteur à zéro.

## Build local (site statique)

```bash
npm install
npm run build   # génère /out
npx serve out   # preview local
```

## Redeploy ZeroDeploy

```bash
npm run build
tar -czf site.tar.gz -C out .
curl -X POST https://api.zerodeploy.dev/drop \
  -H "Content-Type: application/gzip" \
  -H "X-Claim-Token: zdr_cbb8883a42f5ec43148f4c291e4d47691222d326fa72405ffe945d81fa3d8523" \
  --data-binary @site.tar.gz
```

## GitHub Pages

Après merge sur `main`, le workflow `.github/workflows/deploy-pages.yml` publie le site sur GitHub Pages.
