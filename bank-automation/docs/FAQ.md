# ❓ Foire Aux Questions (FAQ)

## Questions Générales

### Q1 : C'est quoi Node-RED ?
**R :** Node-RED est un outil de programmation visuelle qui permet de créer des automatisations en glissant-déposant des blocs. C'est comme IFTTT ou Zapier, mais open-source et auto-hébergé.

### Q2 : Pourquoi Node-RED plutôt que du code Python ou JavaScript ?
**R :** Node-RED est plus accessible pour les débutants car :
- Interface visuelle (pas besoin de coder)
- Parfait pour l'apprentissage
- Résultat visible immédiatement
- Facile à présenter en cours

Cependant, une version Python est aussi fournie dans `alternative-solutions/` si vous préférez coder.

### Q3 : Est-ce que c'est gratuit ?
**R :** Oui, 100% gratuit ! Node-RED, l'API, tout est open-source et sans frais.

### Q4 : Combien de temps faut-il pour l'installer ?
**R :** 5-10 minutes si Node.js est déjà installé, 15-20 minutes sinon.

---

## Installation

### Q5 : J'ai une erreur "EACCES: permission denied" lors de l'installation
**R :** Sur Linux/Mac, utilisez `sudo` :
```bash
sudo npm install -g --unsafe-perm node-red
```

Ou mieux, configurez npm pour ne pas nécessiter sudo :
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Q6 : "node-red: command not found" après l'installation
**R :** Le chemin npm global n'est peut-être pas dans votre PATH. Essayez :
```bash
export PATH=$PATH:$(npm config get prefix)/bin
```

Ou réinstallez avec :
```bash
npm install -g --unsafe-perm node-red
```

### Q7 : Quelle version de Node.js dois-je utiliser ?
**R :** Version 14 ou supérieure. Pour vérifier :
```bash
node --version
```

Si votre version est < 14, téléchargez la dernière depuis [nodejs.org](https://nodejs.org/)

### Q8 : Ça fonctionne sur Windows ?
**R :** Oui ! Tous les composants fonctionnent sur Windows, macOS et Linux.

---

## Configuration

### Q9 : Comment changer la fréquence de mise à jour ?
**R :** Dans Node-RED :
1. Double-cliquez sur le nœud "Récupération horaire"
2. Modifiez "Repeat interval" :
   - Toutes les 30 min : `1800`
   - Toutes les 2h : `7200`
   - Toutes les 5 min : `300`
3. Cliquez "Done" puis "Deploy"

### Q10 : Comment ajouter un nouveau compte ?
**R :** Modifiez deux fichiers :

**1. Dans `mock-bank-api.js`** :
```javascript
5: {
  id: 5,
  name: "Nouveau Compte",
  bank: "Ma Banque",
  balance: 1000.00,
  currency: "EUR",
  lastUpdate: new Date()
}
```

**2. Dans Node-RED** (nœud "Préparer requêtes") :
```javascript
{ id: 5, name: "Nouveau Compte" }
```

### Q11 : Comment modifier le seuil d'alerte ?
**R :** Dans le nœud "Vérifier alertes" :
```javascript
const SEUIL_ALERTE = 500; // Au lieu de 1000
```

### Q12 : Puis-je personnaliser le dashboard ?
**R :** Oui ! Dans Node-RED :
- Taille des widgets : Propriété "Width" et "Height"
- Couleurs : Onglet "Dashboard" → Theme
- Disposition : Glissez-déposez les widgets

---

## Utilisation

### Q13 : Comment démarrer le système ?
**R :** Deux étapes simples :

**Terminal 1** :
```bash
cd bank-automation
node mock-bank-api.js
```

**Terminal 2** :
```bash
node-red
```

Puis ouvrez `http://localhost:1880/ui`

### Q14 : Le dashboard est vide, pourquoi ?
**R :** Plusieurs raisons possibles :
1. Le flow n'est pas déployé (cliquez "Deploy")
2. L'API n'est pas démarrée (lancez `node mock-bank-api.js`)
3. Attendez 5 secondes (première exécution automatique)
4. Ou cliquez manuellement sur "Récupération manuelle"

### Q15 : Comment arrêter le système ?
**R :** Dans chaque terminal : `Ctrl+C`

### Q16 : Comment accéder au dashboard depuis mon téléphone ?
**R :** 
1. Trouvez l'IP de votre PC :
   ```bash
   # Linux/Mac
   ifconfig | grep inet
   
   # Windows
   ipconfig
   ```

2. Sur votre téléphone, ouvrez :
   ```
   http://[VOTRE-IP]:1880/ui
   ```
   
   Exemple : `http://192.168.1.100:1880/ui`

---

## Dépannage

### Q17 : "Port 3000 already in use"
**R :** Le port est déjà utilisé. Trouvez et arrêtez le processus :
```bash
# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

### Q18 : "Port 1880 already in use"
**R :** Même solution que Q17, remplacez 3000 par 1880.

### Q19 : L'API ne répond pas
**R :** Vérifications :
1. L'API est-elle démarrée ? (vous devriez voir le message de bienvenue)
2. Testez directement : `curl http://localhost:3000/api/accounts`
3. Vérifiez les logs dans le terminal de l'API

### Q20 : Les données ne se mettent pas à jour
**R :** Dans Node-RED :
1. Ouvrez l'onglet "Debug" à droite
2. Vérifiez les messages d'erreur
3. Cliquez sur "Récupération manuelle" pour forcer
4. Vérifiez que l'URL de l'API est correcte dans le nœud HTTP Request

### Q21 : "Module not found" après l'installation
**R :** Réinstallez les dépendances :
```bash
cd bank-automation
rm -rf node_modules
npm install
```

### Q22 : Node-RED ne démarre pas
**R :** Essayez :
```bash
# Réinitialiser la configuration
rm -rf ~/.node-red

# Redémarrer
node-red
```

---

## Fonctionnalités Avancées

### Q23 : Comment ajouter des notifications email ?
**R :** 
1. Installez le module email :
   ```bash
   cd ~/.node-red
   npm install node-red-node-email
   ```

2. Dans Node-RED :
   - Ajoutez un nœud "Email" après "Vérifier alertes"
   - Configurez votre SMTP (Gmail, etc.)
   - Déployez

### Q24 : Comment exporter les données en CSV ?
**R :** Ajoutez un nœud "File" dans Node-RED :
```javascript
msg.payload = {
  timestamp: new Date(),
  account: accountName,
  balance: balance
};
msg.filename = "exports/bank_data.csv";
return msg;
```

### Q25 : Puis-je sauvegarder dans une base de données ?
**R :** Oui ! Installez un connecteur :
```bash
# MySQL
npm install node-red-node-mysql

# MongoDB
npm install node-red-contrib-mongodb3

# InfluxDB
npm install node-red-contrib-influxdb
```

### Q26 : Comment faire des graphiques plus avancés ?
**R :** Node-RED Dashboard supporte :
- Graphiques en ligne
- Graphiques en barres
- Gauges (jauges)
- Camemberts
- Histogrammes

Explorez les nœuds "ui_chart" et "ui_gauge".

---

## API et Intégrations

### Q27 : Comment utiliser une vraie API bancaire ?
**R :** Trois options :

**1. Budget Insight (France)** :
```javascript
url: "https://api.budgetinsight.com/2.0/users/me/accounts"
headers: {
  "Authorization": "Bearer YOUR_TOKEN"
}
```

**2. Bankin' API** :
```javascript
url: "https://sync.bankin.com/v2/accounts"
headers: {
  "Bankin-Version": "2019-02-18",
  "Authorization": "Bearer YOUR_TOKEN"
}
```

**3. Plaid (International)** :
```javascript
url: "https://production.plaid.com/accounts/get"
```

### Q28 : L'API simulée est-elle réaliste ?
**R :** Oui, elle suit les standards REST et retourne du JSON structuré comme une vraie API bancaire. Parfait pour l'apprentissage.

### Q29 : Puis-je modifier les comptes de l'API ?
**R :** Oui, éditez `mock-bank-api.js` :
- Ajoutez des comptes
- Modifiez les soldes initiaux
- Changez les noms de banques
- Ajustez la fréquence de variation

### Q30 : Comment réinitialiser les données de l'API ?
**R :** 
```bash
curl -X POST http://localhost:3000/api/reset
```

Ou redémarrez simplement l'API.

---

## Pour l'Exercice de Cours

### Q31 : Que dois-je présenter en cours ?
**R :** Voir le guide complet dans `docs/GUIDE_PRESENTATION.md`. En résumé :
1. Le problème résolu
2. Le choix de Node-RED
3. L'architecture du système
4. Une démo en direct
5. Les fonctionnalités

### Q32 : Combien de temps pour la présentation ?
**R :** 10-15 minutes recommandées :
- 2 min : Introduction
- 3 min : Choix techniques
- 5 min : Démo
- 2 min : Fonctionnalités avancées
- 1 min : Conclusion

### Q33 : Faut-il imprimer du code ?
**R :** Non, montrez plutôt :
- Le flow Node-RED (visuel)
- Le dashboard fonctionnel
- Les logs en temps réel

Le code est secondaire, l'automatisation est l'essentiel.

### Q34 : Si ça plante pendant la démo ?
**R :** Préparez des captures d'écran de backup dans `docs/CAPTURES/`. Expliquez ce qui devrait se passer et continuez.

### Q35 : Questions probables du prof ?
**R :** Voir `docs/GUIDE_PRESENTATION.md` section "Questions Probables". Les plus courantes :
- Pourquoi Node-RED ?
- Comment gérer la sécurité ?
- Ça marche avec de vraies banques ?
- Quelles sont les limites ?

---

## Sécurité

### Q36 : Est-ce sécurisé pour de vraies données ?
**R :** Non, pas en l'état. Pour la production, il faudrait :
- HTTPS (pas HTTP)
- Authentification forte (OAuth2, JWT)
- Chiffrement des données sensibles
- Rate limiting
- Audit logs
- Conformité RGPD

Pour un exercice avec données simulées, c'est parfait.

### Q37 : Où sont stockées les données ?
**R :** En mémoire seulement (elles disparaissent à l'arrêt). Pour persister :
- Ajoutez un nœud "File" ou "Database"
- Ou utilisez le contexte de Node-RED

### Q38 : Peut-on partager publiquement le dashboard ?
**R :** Oui, mais :
1. Configurez un reverse proxy (nginx)
2. Ajoutez HTTPS (Let's Encrypt)
3. Activez l'authentification Node-RED
4. Changez les ports par défaut

Pour l'exercice, gardez-le en local.

---

## Performance

### Q39 : Combien de comptes puis-je surveiller ?
**R :** En théorie, des centaines. En pratique :
- 1-10 comptes : Parfait
- 10-50 comptes : Bien
- 50+ comptes : Considérez une base de données

### Q40 : Ça consomme beaucoup de ressources ?
**R :** Non :
- RAM : ~100 MB
- CPU : Négligeable (~1% lors des requêtes)
- Disque : ~50 MB
- Réseau : Minimal

Parfait pour tourner 24/7 sur un Raspberry Pi.

### Q41 : Puis-je mettre à jour plus fréquemment ?
**R :** Oui, mais attention :
- Toutes les minutes : OK pour tests
- Toutes les secondes : Possible mais inutile
- Temps réel continu : Utilisez WebSockets

---

## Alternatives

### Q42 : Y a-t-il d'autres solutions que Node-RED ?
**R :** Oui, plusieurs alternatives sont documentées dans `alternative-solutions/` :

| Solution | Difficulté | Coût |
|----------|-----------|------|
| **Node-RED** | ⭐⭐ | Gratuit |
| **Python** | ⭐⭐⭐ | Gratuit |
| **Zapier** | ⭐ | Payant |
| **n8n** | ⭐⭐ | Gratuit |
| **Home Assistant** | ⭐⭐⭐ | Gratuit |

### Q43 : Pourquoi pas Zapier ?
**R :** Zapier est plus simple, mais :
- Payant après 100 tâches/mois
- Moins éducatif (boîte noire)
- Moins flexible
- Pas adapté pour un exercice technique

Pour l'apprentissage, Node-RED est mieux.

### Q44 : La version Python est-elle meilleure ?
**R :** Ni meilleure ni pire, différente :
- **Python** : Plus de contrôle, pour développeurs
- **Node-RED** : Plus visuel, pour débutants

Les deux sont fournies, choisissez selon votre niveau.

---

## Support

### Q45 : Où trouver de l'aide ?
**R :** 
1. **Documentation fournie** :
   - `README.md`
   - `QUICK_START.md`
   - `docs/GUIDE_COMPLET.md`

2. **Communautés** :
   - [Forum Node-RED](https://discourse.nodered.org/)
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/node-red)

3. **Ressources** :
   - [Documentation Node-RED](https://nodered.org/docs/)
   - [YouTube Node-RED](https://www.youtube.com/c/nodered)

### Q46 : Puis-je modifier le code fourni ?
**R :** Oui, absolument ! C'est fait pour ça. Personnalisez :
- Les comptes
- Les banques
- Les seuils
- Le design
- Les fonctionnalités

### Q47 : Comment contribuer au projet ?
**R :** Ce projet est un exemple éducatif. Si vous l'améliorez :
- Partagez vos modifications
- Documentez vos ajouts
- Aidez d'autres étudiants

---

## Licence et Utilisation

### Q48 : Puis-je utiliser ce projet pour mon cours ?
**R :** Oui ! C'est fait pour ça. Vous pouvez :
- L'utiliser tel quel
- Le modifier
- Le présenter
- Le partager

### Q49 : Puis-je l'utiliser pour un projet professionnel ?
**R :** Le code est libre, mais pour la production :
- Renforcez la sécurité
- Ajoutez des tests
- Utilisez de vraies API
- Respectez le RGPD

### Q50 : Où signaler un bug ?
**R :** Ce projet est un exemple pédagogique. Pour un bug :
1. Vérifiez la FAQ
2. Consultez les logs
3. Testez les composants séparément
4. Réinstallez si nécessaire

---

**Cette FAQ est mise à jour régulièrement. Si votre question n'y figure pas, consultez les guides complets dans le dossier `docs/`.**
