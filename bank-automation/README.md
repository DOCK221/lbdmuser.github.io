# 🏦 Automatisation du Suivi Bancaire avec Node-RED

## 📋 Description du Projet

Ce projet est un exercice académique qui permet de **suivre automatiquement plusieurs comptes bancaires** et de consulter les soldes à intervalles réguliers (toutes les heures par exemple).

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

## 📁 Structure du Projet

```
bank-automation/
├── README.md                  # Ce fichier
├── mock-bank-api.js          # API simulée pour l'exercice
├── node-red-flow.json        # Flow Node-RED à importer
├── package.json              # Dépendances Node.js
├── config/
│   └── accounts.json         # Configuration des comptes
├── docs/
│   ├── GUIDE_COMPLET.md      # Guide détaillé
│   └── CAPTURES/             # Captures d'écran
└── alternative-solutions/
    ├── python-script.py      # Alternative en Python
    └── zapier-config.md      # Alternative avec Zapier
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

## 🆚 Alternatives Envisagées

| Solution | Complexité | Coût | Recommandé pour |
|----------|-----------|------|-----------------|
| **Node-RED** | ⭐⭐ Facile | Gratuit | Débutants, exercices |
| Python + Cron | ⭐⭐⭐ Moyen | Gratuit | Développeurs |
| Zapier | ⭐ Très facile | Payant | Non-techniques |
| n8n | ⭐⭐ Facile | Gratuit | Alternative à Node-RED |
| Power Automate | ⭐⭐ Facile | Payant | Environnement Microsoft |

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
