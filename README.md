# Burger Coffee — Site web

Site premium immersif pour **Burger Coffee**, restaurant-terrasse à Saly, Sénégal.

## Site public (visible à tous)

Le dépôt est **public**. Une fois GitHub Pages activé, le site est en ligne ici :

- **GitHub Pages :** [https://dock221.github.io/lbdmuser.github.io/](https://dock221.github.io/lbdmuser.github.io/)
- **Commander :** [https://dock221.github.io/lbdmuser.github.io/commander.html](https://dock221.github.io/lbdmuser.github.io/commander.html)

### Activer GitHub Pages (une seule fois)

1. Ouvrir le dépôt → **Settings** → **Pages**
2. Source : **GitHub Actions**
3. Enregistrer — le workflow `Deploy GitHub Pages` publie automatiquement à chaque push sur `main`

En attendant Pages, le site peut aussi être consulté via jsDelivr (CDN public) :

- [https://cdn.jsdelivr.net/gh/DOCK221/lbdmuser.github.io@main/index.html](https://cdn.jsdelivr.net/gh/DOCK221/lbdmuser.github.io@main/index.html)

## Lancer en local

```bash
python3 -m http.server 8000
```

Puis visiter `http://localhost:8000`.

## Structure

- `index.html` — page d’accueil
- `commander.html` — commande en ligne (panier + Wave + WhatsApp)
- `css/` — styles
- `js/` — interactions
- `assets/` — photos restaurant, galerie, plats
- `robots.txt` / `sitemap.xml` — référencement

## Contact

+221 78 150 87 88 · +221 77 717 10 31  
À côté de la résidence Plein Sud 2, Saly  
Livraison gratuite sur tout Saly
