# Paramètres Dogtag de base (DogtagSettings)

**Chemin du fichier :** `$profile:EnhancedDogtag\Config\DogtagSettings.json`

Ce fichier de configuration définit le comportement de base des dogtags (loot, Death Wish, options d'affichage, etc.). Il est **distinct du système d'échange dogtag** et contrôle le fonctionnement de l'objet dogtag lui-même.

---

## Paramètres de niveau supérieur

| Option | Type | Défaut | Description |
|------|------|--------|------|
| `Version` | int | 10 | Version de la configuration (modification non recommandée) |
| `DogtagEnabled` | bool | true | Activer le système dogtag (1=activé, 0=désactivé) |

---

## GeneralDogtagSettings (Paramètres dogtag généraux)

| Option | Type | Défaut | Description |
|------|------|--------|------|
| `AllowDogtagLooting` | bool | true | Autoriser le loot des dogtags à la mort |
| `DisableSuicideDogtagLooting` | bool | false | Désactiver le loot des dogtags en cas de suicide |
| `EnableDogtagRespawnDelay` | bool | false | Activer le délai de loot des dogtags après respawn |
| `DogtagRespawnDelaySeconds` | int | 300 | Délai en secondes avant que le dogtag puisse être looté après le spawn |
| `ShowPlayerKills` | bool | true | Afficher le nombre de kills joueurs |
| `ShowAIKills` | bool | true | Afficher le nombre de kills IA |
| `DistanceUnit` | int | 0 | Unité de distance (0=mètres, 1=yards) |
| `ShowDistance` | bool | true | Afficher la distance |
| `KeepKillCountsOnDeath` | bool | true | Conserver le compteur de kills à la mort |

### Comportement détaillé GeneralDogtagSettings

**AllowDogtagLooting :** Si false, personne ne peut loot les dogtags sur les cadavres. Si true, le loot est autorisé lorsque les autres conditions sont remplies.

**DisableSuicideDogtagLooting :** Si true, les dogtags des joueurs morts par suicide ne peuvent jamais être lootés. Si false, les dogtags de suicide peuvent être lootés (selon les autres conditions).

**EnableDogtagRespawnDelay / DogtagRespawnDelaySeconds :** S'applique uniquement aux morts par suicide. Si true, le dogtag ne peut être looté qu'après le nombre de secondes spécifié (défaut 300, 5 minutes) depuis la mort. Si false, les dogtags de suicide peuvent être lootés immédiatement.

**ShowPlayerKills, ShowAIKills :** Active ou désactive l'affichage du nombre de kills joueurs et IA sur l'objet dogtag.

**DistanceUnit :** 0 = mètres (m), 1 = yards (yd) pour l'affichage de la distance sur les informations du dogtag de mort du joueur.

**KeepKillCountsOnDeath :** Si true, les compteurs de kills de la vie précédente sont enregistrés dans DogtagLifetime.json et appliqués au nouveau dogtag. Si false, les compteurs de kills sont réinitialisés à la mort.

---

## DeathWishSettings (Paramètres Death Wish)

| Option | Type | Défaut | Description |
|------|------|--------|------|
| `DeathWishEnabled` | bool | true | Activer la fonction Death Wish |
| `ShowLifetimeToDeathWish` | bool | true | Afficher le temps de survie jusqu'à Death Wish |
| `ShowPlayerKillsToDeathWish` | bool | true | Afficher les kills joueurs jusqu'à Death Wish |
| `ShowAIKillsToDeathWish` | bool | true | Afficher les kills IA jusqu'à Death Wish |
| `DeathWishConditionType` | int | 0 | Type de condition de kill Death Wish (0 = joueur et IA, 1 = joueur, 2 = IA) |
| `KeepDeathWishOnDeath` | bool | true | Conserver le niveau Death Wish à la mort |
| `ShowSpecialPhrase` | int | 1 | Mode d'affichage de la phrase spéciale Death Wish |
| `DeathWishRespawnEnabled` | bool | true | Activer le respawn Death Wish (respawn à l'emplacement de la dernière mort) |

### Comportement détaillé DeathWishSettings

**DeathWishConditionType :** Condition de kill requise pour la montée de niveau Death Wish.
- 0 : Les kills joueurs et IA doivent tous deux atteindre l'objectif
- 1 : Seuls les kills joueurs doivent atteindre l'objectif (kills IA ignorés)
- 2 : Seuls les kills IA doivent atteindre l'objectif (kills joueurs ignorés)

**KeepDeathWishOnDeath :** Si true, le niveau Death Wish est conservé après la mort et le respawn. Enregistré dans DogtagLifetime.json.

**DeathWishRespawnEnabled :** Si true, la probabilité de respawn à l'emplacement de la dernière mort est appliquée selon le niveau Death Wish. Utilise les probabilités de DeathWishRespawnSettings.

---

## NeedDeathWishTimeSettings (Conditions temporelles Death Wish)

Toutes les valeurs de temps sont en **secondes**. (ex. : 21600 = 6 heures)

**Comportement :** Temps de survie requis pour chaque niveau. NeedDeathWishInitialTime est le temps nécessaire pour passer du dogtag normal à Death Wish. Les temps par niveau sont le temps de survie nécessaire pour atteindre le niveau suivant. Les conditions de kill (selon DeathWishConditionType) doivent également être remplies avec le temps.

| Option | Type | Défaut | Description |
|------|------|--------|------|
| `NeedDeathWishInitialTime` | int | 21600 | Temps de survie requis pour le Death Wish de base |
| `NeedDeathWishLevel1Time` | int | 36000 | Temps de survie requis pour le niveau 1 |
| `NeedDeathWishLevel2Time` | int | 54000 | Temps de survie requis pour le niveau 2 |
| `NeedDeathWishLevel3Time` | int | 72000 | Temps de survie requis pour le niveau 3 |
| `NeedDeathWishLevel4Time` | int | 86400 | Temps de survie requis pour le niveau 4 |
| `NeedDeathWishLevel5Time` | int | 129600 | Temps de survie requis pour le niveau 5 |

---

## NeedDeathWishPlayerKillsSettings (Conditions de kills joueurs pour montée Death Wish)

| Option | Type | Défaut | Description |
|------|------|--------|------|
| `NeedDeathWishPlayerKills1` | int | 50 | Kills joueurs requis pour le niveau 1 |
| `NeedDeathWishPlayerKills2` | int | 100 | Kills joueurs requis pour le niveau 2 |
| `NeedDeathWishPlayerKills3` | int | 200 | Kills joueurs requis pour le niveau 3 |
| `NeedDeathWishPlayerKills4` | int | 300 | Kills joueurs requis pour le niveau 4 |
| `NeedDeathWishPlayerKills5` | int | 500 | Kills joueurs requis pour le niveau 5 |

---

## NeedDeathWishAIKillsSettings (Conditions de kills IA pour montée Death Wish)

| Option | Type | Défaut | Description |
|------|------|--------|------|
| `NeedDeathWishAIKills1` | int | 50 | Kills IA requis pour le niveau 1 |
| `NeedDeathWishAIKills2` | int | 100 | Kills IA requis pour le niveau 2 |
| `NeedDeathWishAIKills3` | int | 200 | Kills IA requis pour le niveau 3 |
| `NeedDeathWishAIKills4` | int | 300 | Kills IA requis pour le niveau 4 |
| `NeedDeathWishAIKills5` | int | 500 | Kills IA requis pour le niveau 5 |

---

## DeathWishRespawnSettings (Probabilité de respawn Death Wish)

Probabilité (%) de respawn à l'emplacement de la dernière mort par niveau Death Wish.

**Comportement :** À la mort, une valeur aléatoire de 0 à 99 est générée. Si elle est inférieure à la probabilité du niveau, le joueur respawn à l'emplacement de la dernière mort. Ex. : DeathWishRespawnChance3 à 50 = 50 % de chance de respawn. 100 = respawn toujours.

| Option | Type | Défaut | Description |
|------|------|--------|------|
| `DeathWishRespawnChance1` | int | 10 | Probabilité de respawn niveau 1 (%) |
| `DeathWishRespawnChance2` | int | 30 | Probabilité de respawn niveau 2 (%) |
| `DeathWishRespawnChance3` | int | 50 | Probabilité de respawn niveau 3 (%) |
| `DeathWishRespawnChance4` | int | 75 | Probabilité de respawn niveau 4 (%) |
| `DeathWishRespawnChance5` | int | 100 | Probabilité de respawn niveau 5 (%) |

---

## Exemple de configuration

```json
{
  "Version": 10,
  "DogtagEnabled": true,
  "GeneralDogtagSettings": {
    "AllowDogtagLooting": true,
    "DisableSuicideDogtagLooting": false,
    "EnableDogtagRespawnDelay": false,
    "DogtagRespawnDelaySeconds": 300,
    "ShowPlayerKills": true,
    "ShowAIKills": true,
    "DistanceUnit": 0,
    "ShowDistance": true,
    "KeepKillCountsOnDeath": true
  },
  "DeathWishSettings": {
    "DeathWishEnabled": true,
    "ShowLifetimeToDeathWish": true,
    "ShowPlayerKillsToDeathWish": true,
    "ShowAIKillsToDeathWish": true,
    "DeathWishConditionType": 0,
    "KeepDeathWishOnDeath": true,
    "ShowSpecialPhrase": 1,
    "DeathWishRespawnEnabled": true
  },
  "NeedDeathWishTimeSettings": {
    "NeedDeathWishInitialTime": 21600,
    "NeedDeathWishLevel1Time": 36000,
    "NeedDeathWishLevel2Time": 54000,
    "NeedDeathWishLevel3Time": 72000,
    "NeedDeathWishLevel4Time": 86400,
    "NeedDeathWishLevel5Time": 129600
  },
  "NeedDeathWishPlayerKillsSettings": {
    "NeedDeathWishPlayerKills1": 50,
    "NeedDeathWishPlayerKills2": 100,
    "NeedDeathWishPlayerKills3": 200,
    "NeedDeathWishPlayerKills4": 300,
    "NeedDeathWishPlayerKills5": 500
  },
  "NeedDeathWishAIKillsSettings": {
    "NeedDeathWishAIKills1": 50,
    "NeedDeathWishAIKills2": 100,
    "NeedDeathWishAIKills3": 200,
    "NeedDeathWishAIKills4": 300,
    "NeedDeathWishAIKills5": 500
  },
  "DeathWishRespawnSettings": {
    "DeathWishRespawnChance1": 10,
    "DeathWishRespawnChance2": 30,
    "DeathWishRespawnChance3": 50,
    "DeathWishRespawnChance4": 75,
    "DeathWishRespawnChance5": 100
  }
}
```

---

## Relation avec DogtagTradeSettings

| Fichier | Usage |
|------|------|
| **DogtagSettings.json** | Comportement de base dogtag (loot, Death Wish, affichage, etc.) |
| **DogtagTradeSettings.json** | Système d'échange dogtag (échange d'objets, conditions, etc.) |

`DogtagEnabled` dans DogtagSettings.json doit être `true` pour utiliser le système de boutique d'échange dogtag.

[Paramètres d'échange Dogtag →](DogtagTradeSettings)