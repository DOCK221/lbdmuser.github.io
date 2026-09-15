#!/bin/bash

# Script de test pour vérifier que tout fonctionne
# Utilisez ce script pour tester rapidement le système

echo "╔════════════════════════════════════════════════════════════╗"
echo "║            TEST DU SYSTÈME D'AUTOMATISATION BANCAIRE        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction de test
test_endpoint() {
    local url=$1
    local description=$2
    
    echo -n "Testing $description... "
    
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null)
    
    if [ "$response" = "200" ]; then
        echo -e "${GREEN}✓ OK${NC}"
        return 0
    else
        echo -e "${RED}✗ FAILED (HTTP $response)${NC}"
        return 1
    fi
}

# Vérifier Node.js
echo "1. Vérification de Node.js"
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✓${NC} Node.js installé : $NODE_VERSION"
else
    echo -e "${RED}✗${NC} Node.js n'est pas installé"
    echo "   Installez Node.js depuis https://nodejs.org/"
    exit 1
fi

echo ""

# Vérifier npm
echo "2. Vérification de npm"
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo -e "${GREEN}✓${NC} npm installé : $NPM_VERSION"
else
    echo -e "${RED}✗${NC} npm n'est pas installé"
    exit 1
fi

echo ""

# Vérifier Node-RED
echo "3. Vérification de Node-RED"
if command -v node-red &> /dev/null; then
    NODERED_VERSION=$(node-red --version 2>&1 | head -1)
    echo -e "${GREEN}✓${NC} Node-RED installé : $NODERED_VERSION"
else
    echo -e "${YELLOW}⚠${NC} Node-RED n'est pas installé"
    echo "   Installez avec : npm install -g --unsafe-perm node-red"
fi

echo ""

# Tester l'API (si elle tourne)
echo "4. Test de l'API bancaire"
echo "   Note: L'API doit être démarrée avec 'node mock-bank-api.js'"
echo ""

if test_endpoint "http://localhost:3000" "Accueil API"; then
    test_endpoint "http://localhost:3000/api/accounts" "Liste des comptes"
    test_endpoint "http://localhost:3000/api/account/1" "Compte 1"
    test_endpoint "http://localhost:3000/api/account/2" "Compte 2"
    test_endpoint "http://localhost:3000/api/total" "Solde total"
    
    echo ""
    echo -e "${GREEN}✓ API bancaire fonctionnelle !${NC}"
    echo ""
    echo "Exemple de réponse (Compte 1):"
    curl -s "http://localhost:3000/api/account/1" | python3 -m json.tool 2>/dev/null || curl -s "http://localhost:3000/api/account/1"
else
    echo -e "${YELLOW}⚠ API bancaire non démarrée${NC}"
    echo "  Démarrez l'API avec : cd bank-automation && node mock-bank-api.js"
fi

echo ""
echo ""

# Tester Node-RED (si il tourne)
echo "5. Test de Node-RED"
if test_endpoint "http://localhost:1880" "Node-RED Editor"; then
    echo -e "${GREEN}✓ Node-RED est accessible !${NC}"
    echo "  • Éditeur : http://localhost:1880"
    echo "  • Dashboard : http://localhost:1880/ui"
else
    echo -e "${YELLOW}⚠ Node-RED non démarré${NC}"
    echo "  Démarrez Node-RED avec : node-red"
fi

echo ""
echo "══════════════════════════════════════════════════════════════"
echo ""

# Résumé
echo "📋 RÉSUMÉ"
echo ""

if command -v node &> /dev/null && command -v npm &> /dev/null; then
    echo -e "${GREEN}✓${NC} Environnement Node.js prêt"
else
    echo -e "${RED}✗${NC} Environnement Node.js incomplet"
fi

if command -v node-red &> /dev/null; then
    echo -e "${GREEN}✓${NC} Node-RED installé"
else
    echo -e "${YELLOW}⚠${NC} Node-RED à installer"
fi

if curl -s "http://localhost:3000" > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} API bancaire active"
else
    echo -e "${YELLOW}⚠${NC} API bancaire à démarrer"
fi

if curl -s "http://localhost:1880" > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Node-RED actif"
else
    echo -e "${YELLOW}⚠${NC} Node-RED à démarrer"
fi

echo ""
echo "══════════════════════════════════════════════════════════════"
echo ""

# Instructions suivantes
echo "🚀 PROCHAINES ÉTAPES"
echo ""

if ! command -v node-red &> /dev/null; then
    echo "1. Installer Node-RED :"
    echo "   npm install -g --unsafe-perm node-red"
    echo "   npm install -g node-red-dashboard"
    echo ""
fi

if ! curl -s "http://localhost:3000" > /dev/null 2>&1; then
    echo "2. Démarrer l'API bancaire :"
    echo "   cd bank-automation"
    echo "   npm install"
    echo "   node mock-bank-api.js"
    echo ""
fi

if ! curl -s "http://localhost:1880" > /dev/null 2>&1; then
    echo "3. Démarrer Node-RED (dans un autre terminal) :"
    echo "   node-red"
    echo ""
fi

if curl -s "http://localhost:1880" > /dev/null 2>&1 && curl -s "http://localhost:3000" > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Système prêt !${NC}"
    echo ""
    echo "4. Importer le flow :"
    echo "   • Ouvrez http://localhost:1880"
    echo "   • Menu (≡) → Import"
    echo "   • Sélectionnez 'node-red-flow.json'"
    echo "   • Cliquez 'Deploy'"
    echo ""
    echo "5. Voir le dashboard :"
    echo "   • Ouvrez http://localhost:1880/ui"
    echo ""
fi

echo "📚 Documentation complète : bank-automation/QUICK_START.md"
echo ""
