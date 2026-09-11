# 🎯 RAID - Site Web

Site web pour le jeu RAID (défis urbains en équipe)

## 🚀 Déploiement sur Vercel

### Option 1 : Via l'interface Vercel (Recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "New Project"
4. Sélectionnez ce repository
5. Configurez :
   - **Root Directory** : `raid-site`
   - **Framework Preset** : Other
   - **Build Command** : (laisser vide)
   - **Output Directory** : (laisser vide)
6. Cliquez sur "Deploy"

### Option 2 : Via CLI

```bash
cd raid-site
vercel --prod
```

## 🌐 Alternative : GitHub Pages

Le site peut aussi être hébergé sur GitHub Pages :

1. Dans les Settings du repo GitHub
2. Pages → Source → Deploy from branch
3. Sélectionnez la branche `cursor/raid-website-ef20`
4. Dossier : `/raid-site`
5. Save

Le site sera accessible à : `https://dock221.github.io/lbdmuser.github.io/raid-site/`

## 📁 Structure

```
raid-site/
├── index.html      # Page principale
├── style.css       # Styles
├── script.js       # JavaScript
├── logo-raid.jpg   # Logo
├── logo-raid.png   # Logo PNG
└── vercel.json     # Config Vercel
```

## 🎨 Fonctionnalités

- Hero section avec animations
- Présentation du concept
- Exemples de défis
- Règles du jeu
- Formulaire de contact
- Design responsive
- Animations au scroll

---

**Besoin d'aide pour le déploiement ?** Contactez-moi !
