# Déploiement — Portfolio Aminata Sow

## Site en ligne (principal)

**https://cool-river-3612.zerodeploy.app**

Claim (rendre permanent) :
https://dashboard.zerodeploy.dev/drop-claim?token=zdr_7d44b717a9ec908d87cdf1facb7d794fe86af4ddc0b0dc1aaf3f8553d3db8434

## GitHub Pages (permanent)

Branche `gh-pages` déjà poussée.

Activer dans GitHub :
1. Repo → **Settings** → **Pages**
2. Source : Deploy from branch
3. Branch : `gh-pages` / `/ (root)`
4. URL : https://dock221.github.io/lbdmuser.github.io/

## Build local

```bash
npm install
npm run build
npx serve out
```

## Republier ZeroDeploy

```bash
npm run build
tar -czf site.tar.gz -C out .
curl -X POST https://api.zerodeploy.dev/drop \
  -H "Content-Type: application/gzip" \
  -H "X-Claim-Token: zdr_7d44b717a9ec908d87cdf1facb7d794fe86af4ddc0b0dc1aaf3f8553d3db8434" \
  --data-binary @site.tar.gz
```
