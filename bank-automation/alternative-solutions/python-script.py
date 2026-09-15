#!/usr/bin/env python3
"""
Alternative Python pour l'automatisation bancaire
Pour ceux qui préfèrent coder plutôt qu'utiliser Node-RED
"""

import requests
import json
import time
from datetime import datetime
import schedule

# Configuration
API_BASE_URL = "http://localhost:3000/api"
ACCOUNTS = [1, 2, 3, 4]
ALERT_THRESHOLD = 1000
UPDATE_INTERVAL = 60  # minutes

class BankMonitor:
    def __init__(self):
        self.accounts_data = {}
        self.history = []
        
    def fetch_account(self, account_id):
        """Récupérer les données d'un compte"""
        try:
            url = f"{API_BASE_URL}/account/{account_id}"
            response = requests.get(url, timeout=5)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"❌ Erreur lors de la récupération du compte {account_id}: {e}")
            return None
    
    def fetch_all_accounts(self):
        """Récupérer tous les comptes"""
        print(f"\n{'='*60}")
        print(f"🔄 Mise à jour des comptes - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"{'='*60}\n")
        
        total_balance = 0
        
        for account_id in ACCOUNTS:
            data = self.fetch_account(account_id)
            if data and 'account' in data:
                account = data['account']
                self.accounts_data[account_id] = account
                
                # Afficher les informations
                print(f"🏦 {account['name']} ({account['bank']})")
                print(f"   💰 Solde: {account['balance']:.2f} {account['currency']}")
                print(f"   📅 Mis à jour: {account['lastUpdate']}")
                
                # Vérifier les alertes
                if account['balance'] < ALERT_THRESHOLD:
                    print(f"   ⚠️  ALERTE: Solde inférieur à {ALERT_THRESHOLD}€")
                
                print()
                total_balance += account['balance']
                
                # Sauvegarder dans l'historique
                self.history.append({
                    'timestamp': datetime.now().isoformat(),
                    'account_id': account_id,
                    'account_name': account['name'],
                    'balance': account['balance']
                })
        
        print(f"{'='*60}")
        print(f"💵 SOLDE TOTAL: {total_balance:.2f} EUR")
        print(f"{'='*60}\n")
        
        return total_balance
    
    def save_history(self, filename='bank_history.json'):
        """Sauvegarder l'historique dans un fichier"""
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(self.history, f, indent=2, ensure_ascii=False)
            print(f"✅ Historique sauvegardé dans {filename}")
        except Exception as e:
            print(f"❌ Erreur lors de la sauvegarde: {e}")
    
    def generate_report(self):
        """Générer un rapport HTML"""
        html = f"""
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rapport Bancaire - {datetime.now().strftime('%Y-%m-%d')}</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }}
        .header {{
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 30px;
        }}
        .accounts-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }}
        .account-card {{
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }}
        .balance {{
            font-size: 32px;
            font-weight: bold;
            color: #667eea;
            margin: 10px 0;
        }}
        .total {{
            background: #4CAF50;
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            font-size: 24px;
        }}
        .alert {{
            background: #ff9800;
            color: white;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
        }}
        .timestamp {{
            color: #666;
            font-size: 14px;
        }}
    </style>
</head>
<body>
    <div class="header">
        <h1>📊 Rapport de Suivi Bancaire</h1>
        <p class="timestamp">Généré le {datetime.now().strftime('%d/%m/%Y à %H:%M:%S')}</p>
    </div>
    
    <div class="accounts-grid">
"""
        
        total = 0
        for account_id, account in self.accounts_data.items():
            alert_html = ""
            if account['balance'] < ALERT_THRESHOLD:
                alert_html = f'<div class="alert">⚠️ Solde bas (< {ALERT_THRESHOLD}€)</div>'
            
            html += f"""
        <div class="account-card">
            <h2>{account['name']}</h2>
            <p>{account['bank']}</p>
            <div class="balance">{account['balance']:.2f} {account['currency']}</div>
            {alert_html}
        </div>
"""
            total += account['balance']
        
        html += f"""
    </div>
    
    <div class="total">
        <h2>Solde Total</h2>
        <div style="font-size: 48px; font-weight: bold;">{total:.2f} EUR</div>
    </div>
</body>
</html>
"""
        
        filename = f"rapport_bancaire_{datetime.now().strftime('%Y%m%d_%H%M%S')}.html"
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f"✅ Rapport généré: {filename}")
        except Exception as e:
            print(f"❌ Erreur lors de la génération du rapport: {e}")

def main():
    """Fonction principale"""
    print("""
╔════════════════════════════════════════════════════════════╗
║     SYSTÈME DE SUIVI BANCAIRE AUTOMATIQUE (Python)        ║
╚════════════════════════════════════════════════════════════╝
    """)
    
    monitor = BankMonitor()
    
    # Première exécution
    monitor.fetch_all_accounts()
    
    # Programmer les mises à jour
    schedule.every(UPDATE_INTERVAL).minutes.do(monitor.fetch_all_accounts)
    
    # Sauvegarder l'historique toutes les 6 heures
    schedule.every(6).hours.do(monitor.save_history)
    
    # Générer un rapport quotidien
    schedule.every().day.at("18:00").do(monitor.generate_report)
    
    print(f"⏰ Mise à jour programmée toutes les {UPDATE_INTERVAL} minutes")
    print(f"💾 Sauvegarde de l'historique toutes les 6 heures")
    print(f"📄 Rapport quotidien à 18:00")
    print(f"\n➡️  Appuyez sur Ctrl+C pour arrêter\n")
    
    try:
        while True:
            schedule.run_pending()
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n\n👋 Arrêt du système...")
        monitor.save_history()
        monitor.generate_report()
        print("✅ Historique et rapport sauvegardés")

if __name__ == "__main__":
    # Vérifier les dépendances
    try:
        import requests
        import schedule
    except ImportError:
        print("❌ Modules manquants. Installez-les avec:")
        print("   pip install requests schedule")
        exit(1)
    
    main()
