// Variables globales
let currentScreen = 'screen-home';
let gameData = {
    city: '',
    duration: 120,
    teams: 2,
    players: 4,
    meetingPoint: '',
    gameCode: generateCode(),
    raidTimer: null,
    flashTimer: null,
    score: 0
};

// Liste des défis
const challenges = [
    { id: 1, title: "Photo devant un monument", description: "Prenez une photo d'équipe devant un monument célèbre", points: 3, completed: false },
    { id: 2, title: "Photomaton", description: "Toute l'équipe dans un photomaton", points: 5, completed: false },
    { id: 3, title: "10 inconnus", description: "Rassemblez 10 personnes pour une photo", points: 10, completed: false },
    { id: 4, title: "Flash mob", description: "Organisez une mini chorégraphie avec des passants", points: 10, completed: false },
    { id: 5, title: "Cuisine participative", description: "Participez à la préparation d'un plat dans un fast-food", points: 15, completed: false },
    { id: 6, title: "Interview radio", description: "Faites une fausse interview de rue avec 5 personnes", points: 15, completed: false },
    { id: 7, title: "Statue vivante", description: "Restez immobiles 5 minutes dans un lieu public", points: 5, completed: false },
    { id: 8, title: "Dance challenge", description: "Reproduisez une chorégraphie TikTok en public", points: 10, completed: false },
    { id: 9, title: "Photo avec un chien", description: "Prenez une photo avec 3 chiens différents", points: 5, completed: false },
    { id: 10, title: "Le pouce levé", description: "Obtenez 20 pouces levés de passants", points: 10, completed: false },
    // ... Ajoutez 40 autres défis ici
];

// Navigation
function goToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
}

function goBack() {
    const backMap = {
        'screen-how': 'screen-home',
        'screen-join': 'screen-home',
        'screen-create': 'screen-home',
        'screen-payment': 'screen-create',
        'screen-player': 'screen-join'
    };
    
    if (backMap[currentScreen]) {
        goToScreen(backMap[currentScreen]);
    }
}

// Générer un code de partie
function generateCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// Rejoindre une partie
function nextInput(input, index) {
    if (input.value.length === 1 && index < 3) {
        const inputs = document.querySelectorAll('.code-digit');
        inputs[index + 1].focus();
    }
}

function scanQR() {
    alert('Scanner QR Code (fonctionnalité caméra à implémenter)');
    // Ici, vous implémenteriez la fonctionnalité de scan QR
}

function joinGame() {
    const inputs = document.querySelectorAll('.code-digit');
    const code = Array.from(inputs).map(input => input.value).join('');
    
    if (code.length === 4) {
        goToScreen('screen-player');
    } else {
        alert('Veuillez entrer un code à 4 chiffres');
    }
}

// Créer une partie
function selectDuration(btn, duration) {
    document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    gameData.duration = duration;
}

function changeTeams(delta) {
    gameData.teams = Math.max(2, Math.min(8, gameData.teams + delta));
    document.getElementById('teams-count').textContent = gameData.teams;
}

function changePlayers(delta) {
    gameData.players = Math.max(2, Math.min(6, gameData.players + delta));
    document.getElementById('players-count').textContent = gameData.players;
}

// Paiement
function processPayment() {
    // Simulation du paiement
    setTimeout(() => {
        alert('Paiement accepté ! 🎉');
        goToScreen('screen-lobby');
        generateLobbyCode();
    }, 1500);
}

function generateLobbyCode() {
    const code = gameData.gameCode;
    document.getElementById('lobby-code').textContent = code;
}

// Lancer le RAID
function launchRaid() {
    goToScreen('screen-countdown');
    startCountdown();
}

function startCountdown() {
    let count = 3;
    const countdownElement = document.getElementById('countdown');
    const textElement = document.querySelector('.countdown-text');
    
    const interval = setInterval(() => {
        if (count === 0) {
            countdownElement.textContent = 'RAID!';
            textElement.textContent = 'C\'est parti ! 🔥';
            setTimeout(() => {
                clearInterval(interval);
                goToScreen('screen-challenges');
                startRaidTimer();
                loadChallenges();
                // Lancer un défi flash après 30 secondes (pour demo)
                setTimeout(showFlashChallenge, 30000);
            }, 1000);
        } else {
            countdownElement.textContent = count;
            count--;
        }
    }, 1000);
}

// Timer du RAID
function startRaidTimer() {
    let timeLeft = gameData.duration * 60; // en secondes
    
    gameData.raidTimer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(gameData.raidTimer);
            endRaid();
            return;
        }
        
        timeLeft--;
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('raid-timer').textContent = display;
    }, 1000);
}

// Charger les défis
function loadChallenges() {
    const container = document.getElementById('challenges-list');
    container.innerHTML = '';
    
    challenges.forEach(challenge => {
        const item = document.createElement('div');
        item.className = 'challenge-item';
        item.innerHTML = `
            <div class="challenge-points-badge">${challenge.points} pts</div>
            <div class="challenge-info">
                <h4>${challenge.title}</h4>
                <p>${challenge.description}</p>
            </div>
            <div class="challenge-action">
                <button class="btn-camera ${challenge.completed ? 'completed' : ''}" onclick="takePhoto(${challenge.id})">
                    ${challenge.completed ? '✓' : '📸'}
                </button>
            </div>
        `;
        container.appendChild(item);
    });
}

function filterChallenges(filter) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    const container = document.getElementById('challenges-list');
    container.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? challenges 
        : challenges.filter(c => c.points === parseInt(filter));
    
    filtered.forEach(challenge => {
        const item = document.createElement('div');
        item.className = 'challenge-item';
        item.innerHTML = `
            <div class="challenge-points-badge">${challenge.points} pts</div>
            <div class="challenge-info">
                <h4>${challenge.title}</h4>
                <p>${challenge.description}</p>
            </div>
            <div class="challenge-action">
                <button class="btn-camera ${challenge.completed ? 'completed' : ''}" onclick="takePhoto(${challenge.id})">
                    ${challenge.completed ? '✓' : '📸'}
                </button>
            </div>
        `;
        container.appendChild(item);
    });
}

function takePhoto(challengeId) {
    // Ici, vous implémenteriez l'accès à la caméra
    alert('Ouverture de la caméra... (à implémenter)');
    
    // Simulation de la complétion
    const challenge = challenges.find(c => c.id === challengeId);
    if (challenge) {
        challenge.completed = true;
        gameData.score += challenge.points;
        document.getElementById('team-score').textContent = gameData.score + ' pts';
        loadChallenges();
    }
}

// Défi Flash
function showFlashChallenge() {
    goToScreen('screen-flash');
    startFlashTimer();
}

function startFlashTimer() {
    let timeLeft = 60; // 60 secondes
    
    gameData.flashTimer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(gameData.flashTimer);
            alert('Temps écoulé pour le défi flash !');
            goToScreen('screen-challenges');
            return;
        }
        
        timeLeft--;
        const display = `00:${timeLeft.toString().padStart(2, '0')}`;
        document.getElementById('flash-timer').textContent = display;
    }, 1000);
}

function takeFlashPhoto() {
    clearInterval(gameData.flashTimer);
    alert('Photo prise ! +20 points 🔥');
    gameData.score += 20;
    document.getElementById('team-score').textContent = gameData.score + ' pts';
    goToScreen('screen-challenges');
}

// Profil joueur
let selectedTeam = null;

function selectTeam(teamNumber) {
    selectedTeam = teamNumber;
    document.querySelectorAll('.team-option').forEach(opt => opt.classList.remove('selected'));
    event.target.closest('.team-option').classList.add('selected');
}

function playerReady() {
    const name = document.getElementById('player-name').value;
    
    if (!name) {
        alert('Entre ton pseudo !');
        return;
    }
    
    if (!selectedTeam) {
        alert('Choisis une équipe !');
        return;
    }
    
    alert(`Bienvenue ${name} dans la Team ${selectedTeam} ! En attente du lancement...`);
}

// Fin du RAID
function endRaid() {
    alert(`RAID terminé ! Score final : ${gameData.score} points 🎉`);
    // Ici, vous afficheriez l'écran de résultats
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    console.log('RAID App chargée 🎯');
    
    // Empêcher le zoom sur les inputs
    document.querySelectorAll('input, select').forEach(element => {
        element.addEventListener('touchstart', (e) => {
            e.target.style.fontSize = '16px';
        });
    });
});
