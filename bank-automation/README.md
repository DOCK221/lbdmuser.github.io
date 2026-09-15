# 🏦 Automatisation du Suivi Bancaire avec Node-RED

[![Node-RED](https://img.shields.io/badge/Node--RED-Ready-red?logo=node-red)](https://nodered.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Educational-blue)](LICENSE)
[![Français](https://img.shields.io/badge/Lang-Français-blue)](README.md)

> 🎓 **Projet pédagogique complet** pour apprendre l'automatisation avec Node-RED

## 📋 Description du Projet

Ce projet est un exercice académique qui permet de **suivre automatiquement plusieurs comptes bancaires** et de consulter les soldes à intervalles réguliers (toutes les heures par exemple).

### ⚡ Démarrage Ultra-Rapide

```bash
# Installation (une seule fois)
cd bank-automation
./install.sh

# Démarrage
./start.sh    # Terminal 1 (API)
node-red      # Terminal 2 (Node-RED)

# Puis ouvrez http://localhost:1880/ui
```

**C'est tout !** En 2 minutes, vous avez un système d'automatisation bancaire fonctionnel.

## 🎯 Objectif

Créer un système d'automatisation simple qui :
- Récupère les soldes de plusieurs comptes bancaires
- Met à jour les informations toutes les heures
- Affiche un tableau de bord visuel
- Envoie des notifications (optionnel)

## 🛠️ Solution Choisie : Node-RED

**Node-RED** est la solution idéale pour cet exercice car :
- ✅ Interface visuelle (glisser-déposer)
- ✅ Pas besoin de coder (ou très peu)
- ✅ Gratuit et open-source
- ✅ Parfait pour les débutants
- ✅ Dashboard intégré

## 📦 Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (inclus avec Node.js)

### Étapes d'installation

1. **Installer Node-RED globalement**
```bash
npm install -g --unsafe-perm node-red
```

2. **Installer les modules complémentaires**
```bash
cd ~/.node-red
npm install node-red-dashboard
npm install node-red-contrib-cron-plus
```

3. **Démarrer Node-RED**
```bash
node-red
```

4. **Accéder à l'interface**
Ouvrez votre navigateur : `http://localhost:1880`

## 🚀 Démarrage Rapide

### Option 1 : Avec l'API simulée (pour l'exercice)

1. Démarrez l'API bancaire simulée :
```bash
cd bank-automation
node mock-bank-api.js
```

2. Dans un autre terminal, démarrez Node-RED :
```bash
node-red
```

3. Importez le flow :
   - Ouvrez `http://localhost:1880`
   - Menu (☰) → Import → Clipboard
   - Copiez le contenu de `node-red-flow.json`
   - Cliquez sur "Import"

4. Déployez le flow :
   - Cliquez sur le bouton rouge "Deploy" en haut à droite

5. Consultez le dashboard :
   - Ouvrez `http://localhost:1880/ui`

### Option 2 : Avec de vraies API bancaires

Pour utiliser de vraies API bancaires, vous devrez :
1. Vous inscrire à une API bancaire (Budget Insight, Bankin', Plaid)
2. Obtenir vos clés API
3. Modifier les URLs dans le flow Node-RED

## 🎯 Aperçu Rapide

```
Dashboard → http://localhost:1880/ui
   │
   │ Actualisation automatique toutes les heures
   │
   ▼
Comptes Bancaires (Simulés)
   ├─ 💳 Compte Courant : 2,450.75 €
   ├─ 💰 Livret A : 8,920.50 €
   ├─ 📊 Compte Épargne : 15,300.00 €
   └─ 👥 Compte Joint : 3,720.25 €
   
   💵 Total : 30,391.50 EUR
```

## 📁 Structure du Projet

```
bank-automation/
├── 📄 README.md                  # Ce fichier
├── 🚀 install.sh                 # Installation automatique
├── ▶️  start.sh                  # Démarrage rapide (créé par install.sh)
├── 🧪 test-system.sh             # Test du système
├── ⚙️  mock-bank-api.js          # API simulée pour l'exercice
├── 🔄 node-red-flow.json         # Flow Node-RED à importer
├── 📦 package.json               # Dépendances Node.js
├── config/
│   └── accounts.json             # Configuration des comptes
├── docs/
│   ├── 📖 GUIDE_COMPLET.md       # Guide détaillé pas-à-pas
│   ├── 🎓 GUIDE_PRESENTATION.md  # Pour présenter en cours
│   ├── 🎨 VISUAL_EXAMPLES.md     # Aperçus visuels
│   └── ❓ FAQ.md                 # Questions fréquentes
└── alternative-solutions/
    ├── python-script.py          # Alternative en Python
    └── zapier-config.md          # Alternative avec Zapier/n8n
```

## 🔧 Configuration

Éditez le fichier `config/accounts.json` pour ajouter vos comptes :

```json
{
  "accounts": [
    {
      "id": "compte-1",
      "name": "Compte Courant",
      "bank": "Banque A",
      "api_url": "http://localhost:3000/api/account/1"
    },
    {
      "id": "compte-2",
      "name": "Livret A",
      "bank": "Banque B",
      "api_url": "http://localhost:3000/api/account/2"
    }
  ]
}
```

## ⏰ Configuration de la Fréquence

Dans Node-RED :
1. Double-cliquez sur le nœud "Inject" (horloge)
2. Réglez la fréquence :
   - Toutes les heures : `0 * * * *`
   - Toutes les 30 minutes : `*/30 * * * *`
   - Tous les jours à 9h : `0 9 * * *`

## 📊 Fonctionnalités

### Incluses dans ce projet
- ✅ Récupération automatique des soldes
- ✅ Dashboard visuel avec graphiques
- ✅ Historique des soldes
- ✅ Alertes si solde < seuil
- ✅ Export des données en CSV

### Extensions possibles
- 📧 Notifications par email
- 📱 Notifications SMS
- 📈 Analyse des dépenses
- 🔔 Alertes personnalisées

## 🎓 Pour votre Exercice de Cours

### Ce qui est attendu
1. Démonstration du système fonctionnel
2. Explication du flux d'automatisation
3. Capture d'écran du dashboard
4. Documentation de la configuration

### Livrables suggérés
- ✅ Code source (fourni ici)
- ✅ Documentation (ce README)
- ✅ Captures d'écran du dashboard
- ✅ Présentation du flux Node-RED

## 📚 Documentation

| Document | Description | Temps de lecture |
|----------|-------------|------------------|
| [QUICK_START.md](QUICK_START.md) | Démarrage en 5 minutes | ⏱️ 5 min |
| [docs/GUIDE_COMPLET.md](docs/GUIDE_COMPLET.md) | Installation et configuration détaillées | ⏱️ 20 min |
| [docs/GUIDE_PRESENTATION.md](docs/GUIDE_PRESENTATION.md) | Comment présenter en cours | ⏱️ 15 min |
| [docs/VISUAL_EXAMPLES.md](docs/VISUAL_EXAMPLES.md) | Aperçus visuels du système | ⏱️ 5 min |
| [docs/FAQ.md](docs/FAQ.md) | 50+ questions/réponses | ⏱️ Variable |

## 🆚 Alternatives Envisagées

| Solution | Complexité | Coût | Recommandé pour |
|----------|-----------|------|-----------------|
| **Node-RED** ⭐ | ⭐⭐ Facile | Gratuit | Débutants, exercices |
| Python | ⭐⭐⭐ Moyen | Gratuit | Développeurs |
| Zapier | ⭐ Très facile | Payant | Non-techniques |
| n8n | ⭐⭐ Facile | Gratuit | Alternative à Node-RED |
| Power Automate | ⭐⭐ Facile | Payant | Environnement Microsoft |

**⭐ Node-RED est la solution recommandée pour cet exercice académique.**

## 🔐 Sécurité

⚠️ **Important pour un vrai projet** :
- Ne jamais stocker les identifiants en clair
- Utiliser des variables d'environnement
- Chiffrer les données sensibles
- Utiliser HTTPS pour les API

Pour cet exercice, l'API simulée suffit.

## 📚 Ressources Utiles

- [Documentation Node-RED](https://nodered.org/docs/)
- [Node-RED Dashboard](https://flows.nodered.org/node/node-red-dashboard)
- [Tutoriels vidéo Node-RED](https://www.youtube.com/c/nodered)

## 🤝 Support

Pour toute question sur cet exercice :
1. Consultez le `GUIDE_COMPLET.md` dans le dossier `docs/`
2. Vérifiez les logs Node-RED : `~/.node-red/`
3. Testez l'API simulée directement : `curl http://localhost:3000/api/account/1`

## 📝 Licence

Ce projet est un exercice académique - libre d'utilisation pour l'apprentissage.

---

**Créé pour un exercice de cours - Automatisation bancaire avec Node-RED**
