# 📖 Guide Complet - Automatisation du Suivi Bancaire

## Table des Matières

1. [Introduction](#introduction)
2. [Installation Détaillée](#installation-détaillée)
3. [Configuration de Node-RED](#configuration-de-node-red)
4. [Comprendre le Flow](#comprendre-le-flow)
5. [Personnalisation](#personnalisation)
6. [Dépannage](#dépannage)
7. [FAQ](#faq)

---

## 1. Introduction

### Qu'est-ce que Node-RED ?

Node-RED est un outil de programmation visuelle basé sur les flux (flows). Il permet de connecter différents services et appareils sans écrire beaucoup de code.

### Pourquoi Node-RED pour ce projet ?

- **Visuel** : Vous voyez votre automatisation sous forme de diagramme
- **Simple** : Glissez-déposez des blocs pour créer votre logique
- **Puissant** : Peut gérer des tâches complexes facilement
- **Gratuit** : Open-source et sans frais

---

## 2. Installation Détaillée

### Étape 1 : Installer Node.js

#### Sur Windows
1. Téléchargez Node.js depuis [nodejs.org](https://nodejs.org/)
2. Exécutez l'installateur
3. Vérifiez l'installation :
```bash
node --version
npm --version
```

#### Sur macOS
```bash
brew install node
```

#### Sur Linux (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Étape 2 : Installer Node-RED

```bash
npm install -g --unsafe-perm node-red
```

Cette commande installe Node-RED globalement sur votre système.

### Étape 3 : Installer les modules complémentaires

```bash
# Dashboard pour l'interface visuelle
npm install -g node-red-dashboard

# Pour les tâches planifiées avancées (optionnel)
npm install -g node-red-contrib-cron-plus
```

### Étape 4 : Vérifier l'installation

```bash
node-red --version
```

---

## 3. Configuration de Node-RED

### Démarrer Node-RED

```bash
node-red
```

Vous devriez voir :
```
Welcome to Node-RED
===================
[info] Node-RED version: v3.x.x
[info] Node.js  version: v18.x.x
[info] Server now running at http://127.0.0.1:1880/
```

### Accéder à l'interface

Ouvrez votre navigateur et allez sur : `http://localhost:1880`

### Premier aperçu

Vous verrez :
- **Palette à gauche** : Les nœuds disponibles
- **Zone centrale** : Votre espace de travail
- **Panneau à droite** : Informations et débogage

---

## 4. Comprendre le Flow

### Structure du Flow Bancaire

Notre flow se compose de plusieurs parties :

#### A. Déclenchement (Trigger)

**Nœud "Inject"** - L'horloge qui lance l'automatisation

```javascript
Répétition : Toutes les heures (3600 secondes)
Au démarrage : Oui (après 5 secondes)
```

**Ce qu'il fait** :
- Lance automatiquement la vérification toutes les heures
- Démarre automatiquement au lancement de Node-RED

#### B. Préparation des Requêtes

**Nœud "Function: Préparer les requêtes"**

```javascript
const accounts = [
    { id: 1, name: "Compte Courant" },
    { id: 2, name: "Livret A" },
    { id: 3, name: "Compte Épargne" },
    { id: 4, name: "Compte Joint" }
];
```

**Ce qu'il fait** :
- Crée une liste de tous vos comptes
- Prépare les URLs pour chaque API
- Envoie un message pour chaque compte

#### C. Récupération des Données

**Nœud "HTTP Request"**

```javascript
Méthode : GET
URL : http://localhost:3000/api/account/{id}
```

**Ce qu'il fait** :
- Contacte l'API bancaire
- Récupère les informations du compte
- Retourne les données au format JSON

#### D. Traitement des Données

**Nœud "Function: Traiter les données"**

```javascript
msg.payload = {
    timestamp: new Date(),
    accountId: accountData.id,
    accountName: accountData.name,
    balance: accountData.balance
};
```

**Ce qu'il fait** :
- Extrait les informations importantes
- Sauvegarde dans la mémoire globale
- Calcule le solde total

#### E. Alertes

**Nœud "Function: Vérifier alertes"**

```javascript
const SEUIL_ALERTE = 1000;
if (balance < SEUIL_ALERTE) {
    // Déclencher une alerte
}
```

**Ce qu'il fait** :
- Vérifie si le solde est bas
- Envoie une notification si nécessaire

#### F. Dashboard

**Nœuds UI**
- Affichage du solde total
- Graphiques des comptes
- Historique des variations

---

## 5. Personnalisation

### Modifier la Fréquence de Récupération

#### Toutes les 30 minutes
Double-cliquez sur le nœud "Inject" :
```
Repeat : interval
Every : 30 minutes
```

#### Tous les jours à 9h du matin
```
Repeat : at a specific time
At : 09:00
```

#### Expression CRON personnalisée
```
*/15 * * * *  → Toutes les 15 minutes
0 */2 * * *   → Toutes les 2 heures
0 9,12,17 * * * → À 9h, 12h et 17h
```

### Ajouter un Nouveau Compte

1. **Dans l'API simulée** (`mock-bank-api.js`) :
```javascript
5: {
  id: 5,
  name: "PEL",
  bank: "LCL",
  balance: 5000.00,
  currency: "EUR",
  lastUpdate: new Date()
}
```

2. **Dans le Flow Node-RED** :
```javascript
{ id: 5, name: "PEL" }
```

### Modifier le Seuil d'Alerte

Dans le nœud "Vérifier alertes" :
```javascript
const SEUIL_ALERTE = 500; // Au lieu de 1000
```

### Personnaliser le Dashboard

Vous pouvez modifier :
- Les couleurs des graphiques
- La taille des widgets
- L'ordre d'affichage
- Les types de graphiques (barres, lignes, camembert)

---

## 6. Dépannage

### Problème : Node-RED ne démarre pas

**Solution 1** : Vérifier que le port 1880 n'est pas utilisé
```bash
netstat -an | grep 1880
```

**Solution 2** : Réinstaller Node-RED
```bash
npm uninstall -g node-red
npm install -g --unsafe-perm node-red
```

### Problème : L'API ne répond pas

**Vérifier que l'API est lancée** :
```bash
curl http://localhost:3000/api/accounts
```

**Relancer l'API** :
```bash
cd bank-automation
node mock-bank-api.js
```

### Problème : Le Dashboard est vide

**Solutions** :
1. Vérifiez que node-red-dashboard est installé
2. Déployez le flow (bouton "Deploy")
3. Attendez la première récupération automatique (5 secondes)
4. Cliquez sur le bouton "Récupération manuelle"

### Problème : Les données ne se mettent pas à jour

**Dans Node-RED** :
1. Ouvrez l'onglet "Debug" à droite
2. Vérifiez les messages d'erreur
3. Cliquez sur "Récupération manuelle" pour tester

### Logs Node-RED

Les logs se trouvent dans :
```bash
~/.node-red/
```

Pour voir les logs en temps réel :
```bash
tail -f ~/.node-red/node-red.log
```

---

## 7. FAQ

### Q : Combien de comptes puis-je surveiller ?
**R** : Autant que vous voulez ! Ajoutez simplement de nouveaux éléments dans le tableau `accounts`.

### Q : Puis-je utiliser de vraies API bancaires ?
**R** : Oui, mais vous devrez :
1. Vous inscrire à un service d'agrégation bancaire (Budget Insight, Bankin', Plaid)
2. Obtenir des clés API
3. Modifier les URLs dans le flow

### Q : Est-ce sécurisé ?
**R** : Pour un exercice académique avec des données simulées, c'est parfait. Pour de vraies données :
- Utilisez HTTPS
- Chiffrez les identifiants
- Utilisez des variables d'environnement
- Ne partagez jamais vos clés API

### Q : Puis-je ajouter des notifications email ?
**R** : Oui ! Installez le module :
```bash
npm install -g node-red-node-email
```
Puis ajoutez un nœud "Email" après "Vérifier alertes".

### Q : Comment exporter mes données ?
**R** : Plusieurs options :
1. Nœud "File" pour sauvegarder en CSV
2. Nœud "Database" pour une base de données
3. API REST pour exporter vers Excel

### Q : Puis-je consulter le dashboard sur mon téléphone ?
**R** : Oui ! Si votre ordinateur et téléphone sont sur le même réseau :
```
http://[IP-DE-VOTRE-PC]:1880/ui
```

### Q : Node-RED consomme-t-il beaucoup de ressources ?
**R** : Non, très peu :
- RAM : ~50-100 MB
- CPU : Négligeable en attente
- Parfait pour tourner 24/7

### Q : Comment arrêter Node-RED ?
**R** : Dans le terminal où il tourne : `Ctrl+C`

### Q : Comment lancer Node-RED au démarrage ?
**R** : 
**Linux/Mac** :
```bash
pm2 start node-red
pm2 save
pm2 startup
```

**Windows** :
Utilisez NSSM (Non-Sucking Service Manager)

---

## Commandes Utiles

### Tester l'API manuellement

```bash
# Tous les comptes
curl http://localhost:3000/api/accounts

# Un compte spécifique
curl http://localhost:3000/api/account/1

# Solde total
curl http://localhost:3000/api/total

# Réinitialiser les comptes
curl -X POST http://localhost:3000/api/reset
```

### Redémarrer Node-RED

```bash
# Si lancé avec pm2
pm2 restart node-red

# Si lancé manuellement
Ctrl+C puis node-red
```

### Sauvegarder votre Flow

Votre flow est automatiquement sauvegardé dans :
```
~/.node-red/flows_[nom-machine].json
```

---

## Ressources Supplémentaires

### Tutoriels Vidéo
- [Node-RED pour débutants](https://www.youtube.com/c/nodered)
- [Créer un Dashboard](https://nodered.org/docs/user-guide/dashboard)

### Documentation
- [Documentation Node-RED](https://nodered.org/docs/)
- [Guide du Dashboard](https://flows.nodered.org/node/node-red-dashboard)
- [Bibliothèque de Flows](https://flows.nodered.org/)

### Communauté
- [Forum Node-RED](https://discourse.nodered.org/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/node-red)
- [Reddit r/nodered](https://www.reddit.com/r/nodered/)

---

## Prochaines Étapes

Une fois ce système maîtrisé, vous pouvez :

1. **Ajouter des notifications push** (Telegram, Slack)
2. **Créer des rapports PDF** automatiques
3. **Analyser vos dépenses** avec Machine Learning
4. **Comparer vos comptes** avec des graphiques avancés
5. **Créer des budgets** et des objectifs d'épargne

---

**Bon apprentissage avec Node-RED !** 🚀
