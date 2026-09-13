# Base de données — Les Badges de Mickael

Chiffrage de la base de données pour l'application d'aide aux personnes en situation
de handicap. Site hébergé en France, à Bordeaux. Montants en euros HT, relevés le
20 août 2026.

Le détail chiffré est dans `budget-base-de-donnees.xlsx` (5 feuilles : synthèse,
prix, scénarios, mise en place, sources).

## Le prix

| Nombre de personnes | Base conseillée | Standard France | Estimation HDS |
|---|---|---|---|
| 20 à 100 | Scaleway DB-DEV-S | **13 € / mois** | 60 à 80 € / mois |
| 100 à 300 | Scaleway DB-DEV-M | **29 € / mois** | 120 € / mois |
| 300 à 1 000 | Scaleway DB-PRO2-XXS | **82 € / mois** | 200 à 300 € / mois |

Alternative française équivalente : OVHcloud, à partir de 54 € HT/mois/nœud en
Essential, 139 € en Business (2 nœuds, SLA 99,95 %).

## Les deux choses à comprendre

**Le volume ne coûte rien.** Une fiche (identifiant, nom, domiciliation, téléphone,
aide à apporter, gestes de secours) pèse environ 2 Ko. Mille personnes représentent
moins de 20 Mo. La plus petite base managée du marché suffit, aujourd'hui et dans
plusieurs années. C'est pour cela que le prix bouge à peine entre 20 et 500 personnes.

**Ce qui coûte, c'est la conformité.** Les fiches contiennent des informations de
santé et de handicap : des données sensibles au sens de l'article 9 du RGPD. En
France, héberger des données de santé pour le compte d'un tiers impose de passer par
un prestataire certifié HDS (article L.1111-8 du code de la santé publique). Ce cadre
coûte 20 à 50 % de plus qu'un hébergement classique, et c'est lui qui fait la
différence entre 13 € et 300 € par mois.

## Point à trancher avant tout achat

L'obligation HDS vise les données de santé recueillies **lors d'une activité de
prévention, de diagnostic, de soins ou de suivi médico-social**. Selon le rôle exact
de l'association — simple mise à disposition d'une fiche remplie par la personne
elle-même, ou accompagnement médico-social — le HDS peut être obligatoire ou non.

Cette question n'est pas tranchée ici : elle relève d'un juriste ou du délégué à la
protection des données. La réponse fait varier le budget d'un facteur 4 à 20, donc
c'est la première étape, avant de souscrire quoi que ce soit.

Dans tous les cas, le RGPD s'applique : base légale explicite, minimisation des
données, journalisation des accès, registre des traitements.

## Plan proposé

1. **Cadrer** — faire trancher la question HDS. Coût nul ou faible, impact maximal.
2. **Démarrer petit** — base Scaleway DB-DEV-S à Paris, 11,39 € HT/mois plus environ
   1,30 € de stockage et de sauvegardes. Largement suffisant pour la première
   centaine de personnes.
3. **Basculer en HDS** si le cadre juridique l'exige, ou dès le départ si
   l'association intervient dans un cadre médico-social. Si vous souhaitez rester
   dans la région, le datacenter TDF de Bordeaux-Bouliac est certifié ISO 27001 et
   HDS.

## Ce qui n'est pas dans ce budget

- **Le développement du back-end.** Aujourd'hui les fiches sont dans le navigateur
  (`localStorage`) : elles ne sortent pas de l'appareil et disparaissent si le
  navigateur est réinitialisé. Passer à une vraie base demande d'écrire une
  authentification, une API et un écran d'administration. C'est le poste le plus
  lourd, et il ne dépend pas de l'hébergeur choisi.
- **L'hébergement du site**, déjà en place à Bordeaux.

## Mettre à jour les chiffres

```bash
pip install openpyxl
python3 scripts/generer-budget-bdd.py
```

Les tarifs sont en clair dans le script. Ils évoluent : à revérifier avant de signer.
