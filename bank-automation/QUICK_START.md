# 🚀 Guide de Démarrage Rapide - 5 Minutes

## Pour les Pressés

Vous voulez tester le système **MAINTENANT** ? Suivez ces 4 étapes :

### ✅ Étape 1 : Installer Node.js (si pas déjà fait)

```bash
# Vérifier si Node.js est installé
node --version

# Si non installé, téléchargez depuis https://nodejs.org/
```

### ✅ Étape 2 : Installer les dépendances

```bash
# Installer Node-RED
npm install -g --unsafe-perm node-red

# Installer le dashboard
npm install -g node-red-dashboard

# Installer les dépendances de l'API
cd bank-automation
npm install
```

### ✅ Étape 3 : Démarrer l'API Bancaire

```bash
# Dans un premier terminal
cd bank-automation
node mock-bank-api.js
```

Vous devriez voir :
```
╔════════════════════════════════════════════════════════════╗
║        API BANCAIRE SIMULÉE - Pour Exercice de Cours       ║
╚════════════════════════════════════════════════════════════╝

🚀 Serveur démarré sur : http://localhost:3000
```

### ✅ Étape 4 : Démarrer Node-RED

```bash
# Dans un deuxième terminal
node-red
```

### ✅ Étape 5 : Importer le Flow

1. Ouvrez `http://localhost:1880` dans votre navigateur
2. Cliquez sur le menu (≡) en haut à droite
3. Cliquez sur "Import"
4. Cliquez sur "select a file to import"
5. Sélectionnez `bank-automation/node-red-flow.json`
6. Cliquez sur "Import"
7. Cliquez sur le bouton rouge "Deploy" en haut à droite

### ✅ Étape 6 : Voir le Dashboard

Ouvrez `http://localhost:1880/ui` dans votre navigateur

🎉 **C'EST TOUT !** Votre système de suivi bancaire est opérationnel !

---

## 🧪 Tester Manuellement

### Tester l'API directement

```bash
# Voir tous les comptes
curl http://localhost:3000/api/accounts

# Voir un compte spécifique
curl http://localhost:3000/api/account/1

# Voir le solde total
curl http://localhost:3000/api/total
```

### Déclencher une mise à jour manuelle

Dans Node-RED :
1. Cliquez sur le carré à gauche du nœud "Récupération manuelle"
2. Regardez l'onglet "Debug" à droite pour voir les données

---

## 📊 Ce que vous voyez

### Dashboard (`http://localhost:1880/ui`)
- **Solde Total** : La somme de tous vos comptes
- **Graphique** : Répartition visuelle de vos soldes
- **Liste des comptes** : Détails de chaque compte

### API (`http://localhost:3000`)
- Simule 4 comptes bancaires
- Les soldes varient légèrement toutes les 5 minutes
- Parfait pour tester l'automatisation

---

## ⏰ Fréquence des Mises à Jour

Par défaut :
- ✅ Mise à jour automatique **toutes les heures**
- ✅ Première mise à jour **5 secondes** après le démarrage
- ✅ Dashboard actualisé **toutes les minutes**

---

## 🛑 Arrêter le Système

Dans chaque terminal : appuyez sur `Ctrl+C`

---

## 🔧 Personnalisation Rapide

### Changer la fréquence (ex: toutes les 30 minutes)

1. Dans Node-RED, double-cliquez sur "Récupération horaire"
2. Changez "3600" par "1800" (30 minutes = 1800 secondes)
3. Cliquez sur "Done"
4. Cliquez sur "Deploy"

### Changer le seuil d'alerte

1. Double-cliquez sur "Vérifier alertes"
2. Modifiez `const SEUIL_ALERTE = 1000;`
3. Cliquez sur "Done"
4. Cliquez sur "Deploy"

---

## ❓ Problèmes Courants

### "Port 3000 already in use"
```bash
# Trouvez et tuez le processus
lsof -ti:3000 | xargs kill -9
```

### "Port 1880 already in use"
```bash
# Trouvez et tuez le processus
lsof -ti:1880 | xargs kill -9
```

### "Module not found"
```bash
# Réinstallez les dépendances
cd bank-automation
npm install
```

### "node-red: command not found"
```bash
# Réinstallez Node-RED
npm install -g --unsafe-perm node-red
```

---

## 📱 Accès depuis un autre appareil

Si vous voulez accéder au dashboard depuis votre téléphone/tablette :

1. Trouvez l'IP de votre PC :
```bash
# Sur Linux/Mac
ifconfig | grep inet

# Sur Windows
ipconfig
```

2. Sur votre appareil mobile, ouvrez :
```
http://[VOTRE-IP]:1880/ui
```

Exemple : `http://192.168.1.100:1880/ui`

---

## 🎓 Pour Présenter votre Exercice

### Captures d'écran à faire

1. **Dashboard** : `http://localhost:1880/ui`
2. **Flow Node-RED** : `http://localhost:1880`
3. **API Response** : `http://localhost:3000/api/accounts`

### Démo en direct

1. Ouvrez le dashboard
2. Cliquez sur "Récupération manuelle" dans Node-RED
3. Montrez les données s'actualiser en temps réel
4. Montrez les alertes dans l'onglet "Debug"

### Points à mentionner

- ✅ Automatisation toutes les heures
- ✅ API simulée pour l'exercice
- ✅ Dashboard en temps réel
- ✅ Alertes si solde bas
- ✅ Historique des données
- ✅ Extensible (email, SMS, etc.)

---

## 🚀 Prochaines Étapes

Une fois le système maîtrisé :

1. Lisez le [Guide Complet](docs/GUIDE_COMPLET.md)
2. Testez l'[alternative Python](alternative-solutions/python-script.py)
3. Explorez les [alternatives](alternative-solutions/zapier-config.md)
4. Personnalisez selon vos besoins

---

## 📞 Support

- **Documentation** : Voir `docs/GUIDE_COMPLET.md`
- **Logs Node-RED** : `~/.node-red/`
- **Logs API** : Dans le terminal où tourne l'API

---

**Temps estimé : 5-10 minutes** ⏱️

**Bon exercice !** 🎯
