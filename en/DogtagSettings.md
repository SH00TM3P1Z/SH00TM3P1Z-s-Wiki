# Dogtag Settings (DogtagSettings)

**File path:** `$profile:EnhancedDogtag\Config\DogtagSettings.json`

This config file defines the base dogtag behavior (looting, Death Wish, display options, etc.). It is **separate from dogtag trade** and controls how the dogtag item itself works.

---

## Top-level Settings

| Option | Type | Default | Description |
|------|------|--------|------|
| `Version` | int | 10 | Config version (not recommended to modify) |
| `DogtagEnabled` | bool | true | Enable dogtag system (1=on, 0=off) |

---

## GeneralDogtagSettings (General Dogtag Settings)

| Option | Type | Default | Description |
|------|------|--------|------|
| `AllowDogtagLooting` | bool | true | Allow dogtag looting on death |
| `DisableSuicideDogtagLooting` | bool | false | Disable dogtag looting on suicide |
| `EnableDogtagRespawnDelay` | bool | false | Enable dogtag looting delay after respawn |
| `DogtagRespawnDelaySeconds` | int | 300 | Delay in seconds before dogtag can be looted after spawn |
| `ShowPlayerKills` | bool | true | Show player kill count |
| `ShowAIKills` | bool | true | Show AI kill count |
| `DistanceUnit` | int | 0 | Distance unit (0=meters, 1=yards) |
| `ShowDistance` | bool | true | Show distance |
| `KeepKillCountsOnDeath` | bool | true | Keep kill count on death |

### GeneralDogtagSettings Detailed Behavior

**AllowDogtagLooting:** If false, no one can loot dogtags from corpses. If true, looting is allowed when other conditions are met.

**DisableSuicideDogtagLooting:** If true, dogtags from players who died by suicide can never be looted. If false, suicide dogtags can be looted (subject to other conditions).

**EnableDogtagRespawnDelay / DogtagRespawnDelaySeconds:** Only applies to suicide deaths. If true, the dogtag can only be looted after the specified seconds (default 300, 5 minutes) have passed since death. If false, suicide dogtags can be looted immediately.

**ShowPlayerKills, ShowAIKills:** Toggle display of player kill count and AI kill count on the dogtag item.

**DistanceUnit:** 0 = meters (m), 1 = yards (yd) for distance display on the player's death dogtag info.

**KeepKillCountsOnDeath:** If true, kill counts from the previous life are saved to DogtagLifetime.json and applied to the new dogtag. If false, kill counts are reset on death.

---

## DeathWishSettings (Death Wish Settings)

| Option | Type | Default | Description |
|------|------|--------|------|
| `DeathWishEnabled` | bool | true | Enable Death Wish feature |
| `ShowLifetimeToDeathWish` | bool | true | Show survival time to Death Wish |
| `ShowPlayerKillsToDeathWish` | bool | true | Show player kills to Death Wish |
| `ShowAIKillsToDeathWish` | bool | true | Show AI kills to Death Wish |
| `DeathWishConditionType` | int | 0 | Death Wish kill condition type (0 = player and AI, 1 = player, 2 = AI) |
| `KeepDeathWishOnDeath` | bool | true | Keep Death Wish level on death |
| `ShowSpecialPhrase` | int | 1 | Death Wish special phrase display mode |
| `DeathWishRespawnEnabled` | bool | true | Enable Death Wish respawn (respawn at last death location) |

### DeathWishSettings Detailed Behavior

**DeathWishConditionType:** Kill condition required for Death Wish level up.
- 0: Both player kills and AI kills must meet the target
- 1: Only player kills must meet the target (AI kills ignored)
- 2: Only AI kills must meet the target (player kills ignored)

**KeepDeathWishOnDeath:** If true, Death Wish level is preserved after death and respawn. Stored in DogtagLifetime.json.

**DeathWishRespawnEnabled:** If true, respawn chance at last death location is applied based on Death Wish level. Uses DeathWishRespawnSettings probabilities.

---

## NeedDeathWishTimeSettings (Death Wish Time Conditions)

All time values are in **seconds**. (e.g., 21600 = 6 hours)

**Behavior:** Survival time required for each level. NeedDeathWishInitialTime is the time needed to change from normal dogtag to Death Wish. Level-specific times are the survival time needed to reach the next level. Kill conditions (based on DeathWishConditionType) must also be met along with time.

| Option | Type | Default | Description |
|------|------|--------|------|
| `NeedDeathWishInitialTime` | int | 21600 | Survival time needed for base Death Wish |
| `NeedDeathWishLevel1Time` | int | 36000 | Survival time needed for level 1 |
| `NeedDeathWishLevel2Time` | int | 54000 | Survival time needed for level 2 |
| `NeedDeathWishLevel3Time` | int | 72000 | Survival time needed for level 3 |
| `NeedDeathWishLevel4Time` | int | 86400 | Survival time needed for level 4 |
| `NeedDeathWishLevel5Time` | int | 129600 | Survival time needed for level 5 |

---

## NeedDeathWishPlayerKillsSettings (Death Wish Level Up Player Kill Conditions)

| Option | Type | Default | Description |
|------|------|--------|------|
| `NeedDeathWishPlayerKills1` | int | 50 | Player kills needed for level 1 |
| `NeedDeathWishPlayerKills2` | int | 100 | Player kills needed for level 2 |
| `NeedDeathWishPlayerKills3` | int | 200 | Player kills needed for level 3 |
| `NeedDeathWishPlayerKills4` | int | 300 | Player kills needed for level 4 |
| `NeedDeathWishPlayerKills5` | int | 500 | Player kills needed for level 5 |

---

## NeedDeathWishAIKillsSettings (Death Wish Level Up AI Kill Conditions)

| Option | Type | Default | Description |
|------|------|--------|------|
| `NeedDeathWishAIKills1` | int | 50 | AI kills needed for level 1 |
| `NeedDeathWishAIKills2` | int | 100 | AI kills needed for level 2 |
| `NeedDeathWishAIKills3` | int | 200 | AI kills needed for level 3 |
| `NeedDeathWishAIKills4` | int | 300 | AI kills needed for level 4 |
| `NeedDeathWishAIKills5` | int | 500 | AI kills needed for level 5 |

---

## DeathWishRespawnSettings (Death Wish Respawn Chance)

Respawn chance (%) at last death location per Death Wish level.

**Behavior:** On death, a random value from 0 to 99 is generated. If it is less than the level's chance, the player respawns at last death location. E.g., DeathWishRespawnChance3 of 50 means 50% respawn chance. 100 means always respawn.

| Option | Type | Default | Description |
|------|------|--------|------|
| `DeathWishRespawnChance1` | int | 10 | Level 1 respawn chance (%) |
| `DeathWishRespawnChance2` | int | 30 | Level 2 respawn chance (%) |
| `DeathWishRespawnChance3` | int | 50 | Level 3 respawn chance (%) |
| `DeathWishRespawnChance4` | int | 75 | Level 4 respawn chance (%) |
| `DeathWishRespawnChance5` | int | 100 | Level 5 respawn chance (%) |

---

## Config Example

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

## Relationship with DogtagTradeSettings

| File | Purpose |
|------|------|
| **DogtagSettings.json** | Dogtag base behavior (looting, Death Wish, display, etc.) |
| **DogtagTradeSettings.json** | Dogtag trade system (item exchange, conditions, etc.) |

`DogtagEnabled` in DogtagSettings.json must be `true` to use the dogtag trade shop system.

[Dogtag Trade Settings →](DogtagTradeSettings)