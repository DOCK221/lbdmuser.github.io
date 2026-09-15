# 🎨 Aperçu Visuel du Système

Ce document vous montre à quoi ressemble le système d'automatisation bancaire.

## 📊 Dashboard Node-RED

### Vue d'ensemble
```
┌─────────────────────────────────────────────────────────────────┐
│  🏦 Suivi Bancaire                                    [Settings] │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  💰 Solde Total                                                  │
│  ┌──────────────────────┐                                       │
│  │   30,391.50 EUR      │                                       │
│  └──────────────────────┘                                       │
│                                                                   │
│  📊 Mes Comptes Bancaires                                        │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Compte Courant - Banque Populaire                         │ │
│  │  2,450.75 EUR                                              │ │
│  │  Mis à jour: 14:32:15                                      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Livret A - Caisse d'Épargne                               │ │
│  │  8,920.50 EUR                                              │ │
│  │  Mis à jour: 14:32:16                                      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Compte Épargne - BNP Paribas                              │ │
│  │  15,300.00 EUR                                             │ │
│  │  Mis à jour: 14:32:17                                      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Compte Joint - Crédit Mutuel                              │ │
│  │  3,720.25 EUR                                              │ │
│  │  Mis à jour: 14:32:18                                      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  📈 Répartition des soldes                                       │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                                                            │ │
│  │  █████████         Compte Épargne (50%)                   │ │
│  │  ████              Livret A (29%)                         │ │
│  │  ██                Compte Joint (12%)                     │ │
│  │  ██                Compte Courant (8%)                    │ │
│  │                                                            │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## 🔄 Flow Node-RED

### Visualisation du flux d'automatisation
```
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│  ⏰ Inject       │──────▶│  📝 Function     │──────▶│  🌐 HTTP Request │
│  (Horaire)       │       │  Préparer        │       │  GET /api/...    │
│  Toutes les 1h   │       │  Requêtes        │       │                  │
└──────────────────┘       └──────────────────┘       └────────┬─────────┘
                                                                │
┌──────────────────┐       ┌──────────────────┐                │
│  🔍 Debug        │◀──────│  📝 Function     │◀───────────────┘
│  Log Comptes     │       │  Traiter         │
└──────────────────┘       │  Données         │
                           └────────┬─────────┘
                                    │
┌──────────────────┐       ┌───────▼─────────┐
│  🔔 Debug        │◀──────│  ⚠️  Function   │
│  Alertes         │       │  Vérifier       │
└──────────────────┘       │  Alertes        │
                           └──────────────────┘
                                    │
                           ┌────────▼─────────┐
                           │  📊 Dashboard    │
                           │  UI Widgets      │
                           └──────────────────┘
```

## 🔌 API Response Examples

### GET /api/accounts
```json
{
  "timestamp": "2026-09-15T14:32:15.123Z",
  "accountsCount": 4,
  "totalBalance": 30391.50,
  "accounts": [
    {
      "id": 1,
      "name": "Compte Courant",
      "bank": "Banque Populaire",
      "balance": 2450.75,
      "currency": "EUR",
      "lastUpdate": "2026-09-15T14:32:15.120Z"
    },
    {
      "id": 2,
      "name": "Livret A",
      "bank": "Caisse d'Épargne",
      "balance": 8920.50,
      "currency": "EUR",
      "lastUpdate": "2026-09-15T14:32:15.121Z"
    }
  ]
}
```

### GET /api/account/1
```json
{
  "timestamp": "2026-09-15T14:32:15.123Z",
  "account": {
    "id": 1,
    "name": "Compte Courant",
    "bank": "Banque Populaire",
    "balance": 2450.75,
    "currency": "EUR",
    "lastUpdate": "2026-09-15T14:32:15.120Z"
  }
}
```

### GET /api/total
```json
{
  "timestamp": "2026-09-15T14:32:15.123Z",
  "totalBalance": 30391.50,
  "currency": "EUR",
  "accountsCount": 4
}
```

## 📱 Interface Mobile

Le dashboard est responsive et fonctionne sur mobile :

```
┌─────────────────────┐
│  🏦 Suivi Bancaire  │
├─────────────────────┤
│                     │
│  💰 Solde Total     │
│  ┌───────────────┐  │
│  │ 30,391.50 EUR │  │
│  └───────────────┘  │
│                     │
│  📊 Comptes         │
│  ┌───────────────┐  │
│  │ Compte Courant│  │
│  │ 2,450.75 EUR  │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │ Livret A      │  │
│  │ 8,920.50 EUR  │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │ Compte Épargne│  │
│  │ 15,300.00 EUR │  │
│  └───────────────┘  │
│                     │
└─────────────────────┘
```

## 🖥️ Terminal - API démarrée

```
╔════════════════════════════════════════════════════════════╗
║        API BANCAIRE SIMULÉE - Pour Exercice de Cours       ║
╚════════════════════════════════════════════════════════════╝

🚀 Serveur démarré sur : http://localhost:3000

📋 Endpoints disponibles :
   • http://localhost:3000/api/accounts
   • http://localhost:3000/api/account/1
   • http://localhost:3000/api/total

💡 Comptes disponibles : 1, 2, 3, 4

⚠️  Ceci est une API SIMULÉE pour l'apprentissage uniquement
═══════════════════════════════════════════════════════════════

[14:32:15] Mise à jour automatique des soldes
[14:37:15] Mise à jour automatique des soldes
[14:42:15] Mise à jour automatique des soldes
```

## 🖥️ Terminal - Node-RED démarré

```
15 Sep 14:30:00 - [info] 

Welcome to Node-RED
===================

15 Sep 14:30:00 - [info] Node-RED version: v3.1.0
15 Sep 14:30:00 - [info] Node.js  version: v18.17.0
15 Sep 14:30:00 - [info] Loading palette nodes
15 Sep 14:30:01 - [info] Dashboard version 3.6.0 started at /ui
15 Sep 14:30:01 - [info] Settings file  : ~/.node-red/settings.js
15 Sep 14:30:01 - [info] Context store  : 'default' [module=memory]
15 Sep 14:30:01 - [info] User directory : ~/.node-red
15 Sep 14:30:01 - [warn] Projects disabled : editorTheme.projects.enabled=false
15 Sep 14:30:01 - [info] Flows file     : flows.json
15 Sep 14:30:01 - [info] Server now running at http://127.0.0.1:1880/
15 Sep 14:30:01 - [info] Starting flows
15 Sep 14:30:01 - [info] Started flows
```

## 🔔 Exemple d'Alerte

Dans l'onglet Debug de Node-RED :

```
[14:32:15] Compte Courant - Banque Populaire: 2450.75 EUR
[14:32:16] Livret A - Caisse d'Épargne: 8920.50 EUR
[14:32:17] Compte Épargne - BNP Paribas: 15300.00 EUR
[14:32:18] Compte Joint - Crédit Mutuel: 720.25 EUR
[14:32:18] ⚠️ Attention: Le solde du compte Compte Joint est inférieur à 1000€ (720.25€)
[14:32:18] Total: 27091.75 EUR
```

## 📊 Graphiques Disponibles

### Graphique en barres (par défaut)
```
Répartition des soldes

15000 │                    ████████
      │                    ████████
12000 │                    ████████
      │                    ████████
 9000 │         ██████     ████████
      │         ██████     ████████
 6000 │         ██████     ████████
      │         ██████     ████████
 3000 │  ████   ██████     ████████     ████
      │  ████   ██████     ████████     ████
    0 └──────────────────────────────────────
         C.Courant  Livret A  C.Épargne  C.Joint
```

### Graphique camembert (optionnel)
```
        Répartition des soldes
        
              ┌───────┐
          ┌───┤████   │
      ┌───┤   │████   │  50% C.Épargne
      │   │   └───────┤
      │29%│           │  12% C.Joint
      │   │     8%    │
      │   └───────────┘
      └───── Livret A
      
      C.Courant
```

## 🎯 États du Système

### ✅ Tout fonctionne
```
┌─────────────────────────────────┐
│  ✓ API Active (Port 3000)       │
│  ✓ Node-RED Active (Port 1880)  │
│  ✓ Dashboard Accessible          │
│  ✓ Flow Déployé                  │
│  ✓ Données à jour                │
└─────────────────────────────────┘
```

### ⚠️ Problème de connexion
```
┌─────────────────────────────────┐
│  ✗ Erreur de connexion           │
│  ⚠️ Vérifier que l'API tourne   │
│                                   │
│  Solution:                        │
│  cd bank-automation               │
│  node mock-bank-api.js            │
└─────────────────────────────────┘
```

## 📈 Évolution dans le Temps

Le système garde un historique et peut afficher l'évolution :

```
Solde Total au fil du temps

30500 │                              ●
      │                         ●
30400 │                    ●
      │               ●
30300 │          ●
      │     ●
30200 │●
      └─────────────────────────────────
        9h  10h  11h  12h  13h  14h  15h
```

## 🎨 Personnalisation

Vous pouvez personnaliser :

- ✅ Couleurs du dashboard
- ✅ Types de graphiques (barres, lignes, camembert)
- ✅ Fréquence de mise à jour
- ✅ Seuils d'alerte
- ✅ Nombre de comptes
- ✅ Disposition des widgets

## 🌐 URLs du Système

| Service | URL | Description |
|---------|-----|-------------|
| **API Home** | `http://localhost:3000` | Page d'accueil API |
| **API Accounts** | `http://localhost:3000/api/accounts` | Tous les comptes |
| **API Account** | `http://localhost:3000/api/account/1` | Un compte spécifique |
| **API Total** | `http://localhost:3000/api/total` | Solde total |
| **Node-RED Editor** | `http://localhost:1880` | Éditeur de flows |
| **Dashboard** | `http://localhost:1880/ui` | Interface utilisateur |

## 🎓 Ce que vous allez montrer en cours

1. **L'API qui fonctionne** (curl ou navigateur)
2. **Le flow Node-RED** (éditeur visuel)
3. **Le dashboard** (interface finale)
4. **Les alertes en temps réel** (onglet Debug)
5. **La configuration** (fichiers JSON)

---

**Tout ceci sera généré automatiquement une fois le système démarré !** 🚀
