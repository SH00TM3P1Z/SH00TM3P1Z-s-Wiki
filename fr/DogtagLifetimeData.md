# Données de durée de vie Dogtag (DogtagLifetime.json)

**Chemin du fichier :** `$profile:EnhancedDogtag\Data\DogtagLifetime.json`

Fichier de données où le serveur **enregistre automatiquement** le temps de survie dogtag, le nombre de kills, le niveau Death Wish, etc. par joueur. Ce sont des **données d'exécution**, pas un fichier de configuration, la modification manuelle est déconseillée.

---

## Utilité

- **Persistance Death Wish :** Quand `KeepDeathWishOnDeath` est activé, le niveau Death Wish est restauré au prochain respawn après la mort
- **Persistance du compteur de kills :** Quand `KeepKillCountsOnDeath` est activé, les kills joueur/IA sont appliqués au nouveau dogtag à la mort
- **Réinitialisation :** Les informations dogtag de tous les joueurs peuvent être réinitialisées
- Appliquer les données précédentes au dogtag créé à la mort du joueur

---

## Structure JSON

```json
{
    "PlayerEntries": [
        {
            "PlayerName": "Ya-Mahaba",
            "PlayerId": "d2xG6LXwQPwK10j4pPC2LnItlC7RxZcmRCLyyqJaRNk=",
            "LifetimeSeconds": 3670,
            "TagType": "SMPZ_Dogtag_DeathWish_5",
            "BloodType": "None",
            "PlayerKillCount": 29,
            "AIKillCount": 819,
            "LastUpdateTime": "2026-3-5 14:39:50"
        }
    ]
}
```

---

## Description des options PlayerEntries

| Option | Type | Description |
|------|------|------|
| `PlayerName` | string | Nom du joueur |
| `PlayerId` | string | Identifiant unique du joueur (encodé Base64) |
| `LifetimeSeconds` | int | Dernier temps de survie (secondes) |
| `TagType` | string | Type de dogtag (ex. : `SMPZ_Dogtag_DeathWish_1` ~ `5`, dogtag de base) |
| `BloodType` | string | Groupe sanguin (O+, O-, A+, A-, B+, B-, AB+, AB-, None) |
| `PlayerKillCount` | int | Nombre de kills joueurs |
| `AIKillCount` | int | Nombre de kills IA |
| `LastUpdateTime` | string | Heure de dernière mise à jour |

---

## Notes

- **Génération automatique :** Le serveur met à jour automatiquement à la mort du joueur ou à la création du dogtag.
- **Maximum 1000 joueurs :** Jusqu'à 1000 joueurs sont stockés. Les entrées les plus anciennes sont supprimées quand c'est plein, triées par temps de survie le plus court.
- **Modification manuelle déconseillée :** Un format ou des données invalides peuvent causer des dysfonctionnements.
- **Config vs Data :** Le dossier `Config\` est pour les paramètres, le dossier `Data\` pour les données d'exécution.

---

## Comportement détaillé

**LifetimeSeconds :** Dernier temps de survie du joueur en secondes. Le temps de survie au moment de la mort est enregistré.

**TagType :** Type de dogtag à créer au prochain respawn. Enregistré comme `SMPZ_Dogtag_DeathWish_1` à `5`, ou type de dogtag de base.

**PlayerKillCount, AIKillCount :** Compteurs de kills appliqués au nouveau dogtag quand KeepKillCountsOnDeath est true.

**Intégration KeepDeathWishOnDeath :** Quand true, TagType, compteurs de kills, etc. dans DogtagLifetime.json persistent après la mort et sont appliqués au nouveau dogtag au prochain respawn.

[Paramètres Dogtag de base →](DogtagSettings)