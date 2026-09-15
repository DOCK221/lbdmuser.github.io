#!/bin/bash

# Script d'installation automatique pour le système d'automatisation bancaire
# Exécutez ce script pour installer toutes les dépendances nécessaires

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   INSTALLATION DU SYSTÈME D'AUTOMATISATION BANCAIRE        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Compteurs
STEP=1
TOTAL_STEPS=5

# Fonction pour afficher une étape
step() {
    echo ""
    echo -e "${BLUE}[$STEP/$TOTAL_STEPS]${NC} $1"
    ((STEP++))
}

# Fonction pour afficher le succès
success() {
    echo -e "${GREEN}✓${NC} $1"
}

# Fonction pour afficher une erreur
error() {
    echo -e "${RED}✗${NC} $1"
}

# Fonction pour afficher un avertissement
warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Vérifier si on est dans le bon répertoire
if [ ! -f "package.json" ]; then
    error "Ce script doit être exécuté depuis le dossier bank-automation/"
    echo "Exécutez : cd bank-automation && ./install.sh"
    exit 1
fi

# Étape 1 : Vérifier Node.js
step "Vérification de Node.js"
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    success "Node.js est installé : $NODE_VERSION"
    
    # Vérifier la version minimale (v14+)
    NODE_MAJOR_VERSION=$(node --version | cut -d'.' -f1 | sed 's/v//')
    if [ "$NODE_MAJOR_VERSION" -lt 14 ]; then
        warning "Node.js version $NODE_VERSION détectée. Version 14+ recommandée."
        echo "Téléchargez la dernière version depuis https://nodejs.org/"
    fi
else
    error "Node.js n'est pas installé"
    echo ""
    echo "Veuillez installer Node.js depuis : https://nodejs.org/"
    echo ""
    echo "Sur Ubuntu/Debian :"
    echo "  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -"
    echo "  sudo apt-get install -y nodejs"
    echo ""
    echo "Sur macOS :"
    echo "  brew install node"
    echo ""
    exit 1
fi

# Étape 2 : Vérifier npm
step "Vérification de npm"
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    success "npm est installé : $NPM_VERSION"
else
    error "npm n'est pas installé (normalement inclus avec Node.js)"
    exit 1
fi

# Étape 3 : Installer les dépendances de l'API
step "Installation des dépendances de l'API bancaire"
echo ""
npm install
if [ $? -eq 0 ]; then
    success "Dépendances API installées avec succès"
else
    error "Erreur lors de l'installation des dépendances API"
    exit 1
fi

# Étape 4 : Installer Node-RED
step "Installation de Node-RED"
echo ""

if command -v node-red &> /dev/null; then
    NODERED_VERSION=$(node-red --version 2>&1 | head -1)
    warning "Node-RED est déjà installé : $NODERED_VERSION"
    
    read -p "Voulez-vous réinstaller Node-RED ? (o/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Oo]$ ]]; then
        npm install -g --unsafe-perm node-red
    fi
else
    echo "Installation de Node-RED (peut prendre quelques minutes)..."
    npm install -g --unsafe-perm node-red
    
    if [ $? -eq 0 ]; then
        success "Node-RED installé avec succès"
    else
        error "Erreur lors de l'installation de Node-RED"
        warning "Essayez avec sudo si vous avez des problèmes de permissions"
        exit 1
    fi
fi

# Étape 5 : Installer node-red-dashboard
step "Installation de node-red-dashboard"
echo ""

# Vérifier si le dashboard est déjà installé
NODERED_DIR="$HOME/.node-red"
if [ -d "$NODERED_DIR/node_modules/node-red-dashboard" ]; then
    warning "node-red-dashboard est déjà installé"
else
    npm install -g node-red-dashboard
    
    if [ $? -eq 0 ]; then
        success "node-red-dashboard installé avec succès"
    else
        error "Erreur lors de l'installation de node-red-dashboard"
        warning "Le dashboard pourra être installé manuellement plus tard"
    fi
fi

echo ""
echo "══════════════════════════════════════════════════════════════"
echo ""
echo -e "${GREEN}✓ INSTALLATION TERMINÉE AVEC SUCCÈS !${NC}"
echo ""
echo "══════════════════════════════════════════════════════════════"
echo ""

# Résumé de l'installation
echo "📦 Composants installés :"
echo ""
echo "  • Node.js $(node --version)"
echo "  • npm $(npm --version)"
echo "  • Node-RED $(node-red --version 2>&1 | head -1)"
echo "  • Express + CORS (API bancaire)"
echo "  • node-red-dashboard"
echo ""

# Instructions de démarrage
echo "══════════════════════════════════════════════════════════════"
echo ""
echo "🚀 PROCHAINES ÉTAPES"
echo ""
echo "1️⃣  Démarrer l'API bancaire (dans ce terminal) :"
echo ""
echo "    node mock-bank-api.js"
echo ""
echo "2️⃣  Démarrer Node-RED (dans un nouveau terminal) :"
echo ""
echo "    node-red"
echo ""
echo "3️⃣  Importer le flow Node-RED :"
echo ""
echo "    • Ouvrez http://localhost:1880"
echo "    • Menu (≡) → Import → Clipboard"
echo "    • Sélectionnez le fichier 'node-red-flow.json'"
echo "    • Cliquez 'Import' puis 'Deploy'"
echo ""
echo "4️⃣  Consulter le dashboard :"
echo ""
echo "    • Ouvrez http://localhost:1880/ui"
echo ""
echo "══════════════════════════════════════════════════════════════"
echo ""
echo "📚 Documentation complète :"
echo ""
echo "  • Démarrage rapide : QUICK_START.md"
echo "  • Guide complet : docs/GUIDE_COMPLET.md"
echo "  • Guide présentation : docs/GUIDE_PRESENTATION.md"
echo ""
echo "══════════════════════════════════════════════════════════════"
echo ""

# Créer un script de lancement rapide
cat > start.sh << 'EOF'
#!/bin/bash

# Script de démarrage rapide

echo "╔════════════════════════════════════════════════════════════╗"
echo "║        DÉMARRAGE DU SYSTÈME D'AUTOMATISATION BANCAIRE       ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "🚀 Démarrage de l'API bancaire..."
echo ""
echo "Pour démarrer Node-RED, ouvrez un nouveau terminal et exécutez :"
echo "    node-red"
echo ""
echo "Puis ouvrez http://localhost:1880 pour l'éditeur"
echo "Et http://localhost:1880/ui pour le dashboard"
echo ""
echo "Appuyez sur Ctrl+C pour arrêter l'API"
echo ""
echo "══════════════════════════════════════════════════════════════"
echo ""

node mock-bank-api.js
EOF

chmod +x start.sh
success "Script de démarrage rapide créé : ./start.sh"

echo ""
echo "💡 Astuce : Pour un démarrage rapide, utilisez simplement :"
echo ""
echo "    ./start.sh"
echo ""
echo "Bon exercice ! 🎓"
echo ""
