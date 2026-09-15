const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Base de données simulée pour les comptes bancaires
let accounts = {
  1: {
    id: 1,
    name: "Compte Courant",
    bank: "Banque Populaire",
    balance: 2450.75,
    currency: "EUR",
    lastUpdate: new Date()
  },
  2: {
    id: 2,
    name: "Livret A",
    bank: "Caisse d'Épargne",
    balance: 8920.50,
    currency: "EUR",
    lastUpdate: new Date()
  },
  3: {
    id: 3,
    name: "Compte Épargne",
    bank: "BNP Paribas",
    balance: 15300.00,
    currency: "EUR",
    lastUpdate: new Date()
  },
  4: {
    id: 4,
    name: "Compte Joint",
    bank: "Crédit Mutuel",
    balance: 3720.25,
    currency: "EUR",
    lastUpdate: new Date()
  }
};

// Historique des transactions (pour simulation)
const transactionHistory = {};

// Fonction pour simuler de légères variations de solde
function simulateBalanceChange(accountId) {
  const account = accounts[accountId];
  if (!account) return;
  
  // Variation aléatoire entre -50€ et +100€
  const variation = (Math.random() * 150) - 50;
  account.balance = Math.max(0, account.balance + variation);
  account.balance = Math.round(account.balance * 100) / 100; // Arrondir à 2 décimales
  account.lastUpdate = new Date();
}

// Route de test
app.get('/', (req, res) => {
  res.json({
    message: "API Bancaire Simulée - Pour exercice académique",
    status: "running",
    endpoints: {
      getAllAccounts: "GET /api/accounts",
      getAccount: "GET /api/account/:id",
      getTotalBalance: "GET /api/total",
      getHistory: "GET /api/account/:id/history"
    }
  });
});

// Récupérer tous les comptes
app.get('/api/accounts', (req, res) => {
  const accountsList = Object.values(accounts);
  const total = accountsList.reduce((sum, acc) => sum + acc.balance, 0);
  
  res.json({
    timestamp: new Date(),
    accountsCount: accountsList.length,
    totalBalance: Math.round(total * 100) / 100,
    accounts: accountsList
  });
});

// Récupérer un compte spécifique
app.get('/api/account/:id', (req, res) => {
  const accountId = parseInt(req.params.id);
  const account = accounts[accountId];
  
  if (!account) {
    return res.status(404).json({
      error: "Compte non trouvé",
      accountId: accountId
    });
  }
  
  // Simuler une légère variation (optionnel)
  if (Math.random() > 0.7) {
    simulateBalanceChange(accountId);
  }
  
  res.json({
    timestamp: new Date(),
    account: account
  });
});

// Récupérer le solde total de tous les comptes
app.get('/api/total', (req, res) => {
  const accountsList = Object.values(accounts);
  const total = accountsList.reduce((sum, acc) => sum + acc.balance, 0);
  
  res.json({
    timestamp: new Date(),
    totalBalance: Math.round(total * 100) / 100,
    currency: "EUR",
    accountsCount: accountsList.length
  });
});

// Récupérer l'historique d'un compte (simulé)
app.get('/api/account/:id/history', (req, res) => {
  const accountId = parseInt(req.params.id);
  const account = accounts[accountId];
  
  if (!account) {
    return res.status(404).json({
      error: "Compte non trouvé",
      accountId: accountId
    });
  }
  
  // Générer un historique fictif des 7 derniers jours
  const history = [];
  const now = new Date();
  let balance = account.balance;
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    const variation = (Math.random() * 100) - 30;
    balance = balance - variation;
    
    history.push({
      date: date.toISOString().split('T')[0],
      balance: Math.round(balance * 100) / 100
    });
  }
  
  res.json({
    accountId: accountId,
    accountName: account.name,
    history: history
  });
});

// Endpoint pour réinitialiser les comptes (utile pour les tests)
app.post('/api/reset', (req, res) => {
  accounts = {
    1: {
      id: 1,
      name: "Compte Courant",
      bank: "Banque Populaire",
      balance: 2450.75,
      currency: "EUR",
      lastUpdate: new Date()
    },
    2: {
      id: 2,
      name: "Livret A",
      bank: "Caisse d'Épargne",
      balance: 8920.50,
      currency: "EUR",
      lastUpdate: new Date()
    },
    3: {
      id: 3,
      name: "Compte Épargne",
      bank: "BNP Paribas",
      balance: 15300.00,
      currency: "EUR",
      lastUpdate: new Date()
    },
    4: {
      id: 4,
      name: "Compte Joint",
      bank: "Crédit Mutuel",
      balance: 3720.25,
      currency: "EUR",
      lastUpdate: new Date()
    }
  };
  
  res.json({
    message: "Comptes réinitialisés avec succès",
    accounts: Object.values(accounts)
  });
});

// Simulation de variations automatiques toutes les 5 minutes
setInterval(() => {
  Object.keys(accounts).forEach(id => {
    if (Math.random() > 0.5) {
      simulateBalanceChange(parseInt(id));
    }
  });
  console.log(`[${new Date().toLocaleTimeString()}] Mise à jour automatique des soldes`);
}, 5 * 60 * 1000); // 5 minutes

// Démarrage du serveur
app.listen(PORT, () => {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║        API BANCAIRE SIMULÉE - Pour Exercice de Cours       ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`🚀 Serveur démarré sur : http://localhost:${PORT}`);
  console.log('');
  console.log('📋 Endpoints disponibles :');
  console.log(`   • http://localhost:${PORT}/api/accounts`);
  console.log(`   • http://localhost:${PORT}/api/account/1`);
  console.log(`   • http://localhost:${PORT}/api/total`);
  console.log('');
  console.log('💡 Comptes disponibles : 1, 2, 3, 4');
  console.log('');
  console.log('⚠️  Ceci est une API SIMULÉE pour l\'apprentissage uniquement');
  console.log('═══════════════════════════════════════════════════════════════');
});
