# Dogtag-Einstellungen (DogtagSettings)

**Dateipfad:** `$profile:EnhancedDogtag\Config\DogtagSettings.json`

Diese Konfigurationsdatei definiert das grundlegende Dogtag-Verhalten (Looting, Death Wish, Anzeigeoptionen usw.). Sie ist **getrennt vom Dogtag-Handel** und steuert, wie das Dogtag-Item selbst funktioniert.

---

## Top-Level-Einstellungen

| Option | Typ | Standard | Beschreibung |
|------|------|--------|------|
| `Version` | int | 10 | Konfigurationsversion (Änderung nicht empfohlen) |
| `DogtagEnabled` | bool | true | Dogtag-System aktivieren (1=an, 0=aus) |

---

## GeneralDogtagSettings (Allgemeine Dogtag-Einstellungen)

| Option | Typ | Standard | Beschreibung |
|------|------|--------|------|
| `AllowDogtagLooting` | bool | true | Dogtag-Looting bei Tod erlauben |
| `DisableSuicideDogtagLooting` | bool | false | Dogtag-Looting bei Selbstmord deaktivieren |
| `EnableDogtagRespawnDelay` | bool | false | Dogtag-Looting-Verzögerung nach Respawn aktivieren |
| `DogtagRespawnDelaySeconds` | int | 300 | Verzögerung in Sekunden, bis Dogtag nach Spawn gelootet werden kann |
| `ShowPlayerKills` | bool | true | Spieler-Kill-Anzahl anzeigen |
| `ShowAIKills` | bool | true | AI-Kill-Anzahl anzeigen |
| `DistanceUnit` | int | 0 | Entfernungseinheit (0=Meter, 1=Yards) |
| `ShowDistance` | bool | true | Entfernung anzeigen |
| `KeepKillCountsOnDeath` | bool | true | Kill-Anzahl bei Tod beibehalten |

### GeneralDogtagSettings Detailliertes Verhalten

**AllowDogtagLooting:** Bei false kann niemand Dogtags von Leichen looten. Bei true ist Looting erlaubt, wenn andere Bedingungen erfüllt sind.

**DisableSuicideDogtagLooting:** Bei true können Dogtags von Spielern, die durch Selbstmord starben, nie gelootet werden. Bei false können Selbstmord-Dogtags gelootet werden (je nach anderen Bedingungen).

**EnableDogtagRespawnDelay / DogtagRespawnDelaySeconds:** Gilt nur bei Selbstmord-Toden. Bei true kann der Dogtag erst nach der angegebenen Sekundenzahl (Standard 300, 5 Minuten) seit dem Tod gelootet werden. Bei false können Selbstmord-Dogtags sofort gelootet werden.

**ShowPlayerKills, ShowAIKills:** Schaltet die Anzeige von Spieler- und AI-Kill-Anzahl auf dem Dogtag-Item ein oder aus.

**DistanceUnit:** 0 = Meter (m), 1 = Yards (yd) für die Entfernungsanzeige bei den Spieler-Tod-Dogtag-Infos.

**KeepKillCountsOnDeath:** Bei true werden Kill-Anzahlen aus dem vorherigen Leben in DogtagLifetime.json gespeichert und auf den neuen Dogtag angewendet. Bei false werden Kill-Anzahlen bei Tod zurückgesetzt.

---

## DeathWishSettings (Death Wish Einstellungen)

| Option | Typ | Standard | Beschreibung |
|------|------|--------|------|
| `DeathWishEnabled` | bool | true | Death-Wish-Funktion aktivieren |
| `ShowLifetimeToDeathWish` | bool | true | Überlebenszeit bis Death Wish anzeigen |
| `ShowPlayerKillsToDeathWish` | bool | true | Spieler-Kills bis Death Wish anzeigen |
| `ShowAIKillsToDeathWish` | bool | true | AI-Kills bis Death Wish anzeigen |
| `DeathWishConditionType` | int | 0 | Death-Wish-Kill-Bedingungstyp (0 = Spieler und AI, 1 = Spieler, 2 = AI) |
| `KeepDeathWishOnDeath` | bool | true | Death-Wish-Level bei Tod beibehalten |
| `ShowSpecialPhrase` | int | 1 | Death-Wish-Spezialtext-Anzeigemodus |
| `DeathWishRespawnEnabled` | bool | true | Death-Wish-Respawn aktivieren (Respawn an letzter Todesposition) |

### DeathWishSettings Detailliertes Verhalten

**DeathWishConditionType:** Kill-Bedingung für Death-Wish-Levelaufstieg.
- 0: Sowohl Spieler- als auch AI-Kills müssen das Ziel erfüllen
- 1: Nur Spieler-Kills müssen das Ziel erfüllen (AI-Kills ignoriert)
- 2: Nur AI-Kills müssen das Ziel erfüllen (Spieler-Kills ignoriert)

**KeepDeathWishOnDeath:** Bei true bleibt das Death-Wish-Level nach Tod und Respawn erhalten. Wird in DogtagLifetime.json gespeichert.

**DeathWishRespawnEnabled:** Bei true wird die Respawn-Chance an der letzten Todesposition basierend auf dem Death-Wish-Level angewendet. Verwendet DeathWishRespawnSettings-Wahrscheinlichkeiten.

---

## NeedDeathWishTimeSettings (Death Wish Zeitbedingungen)

Alle Zeitwerte sind in **Sekunden**. (z.B. 21600 = 6 Stunden)

**Verhalten:** Überlebenszeit für jedes Level. NeedDeathWishInitialTime ist die Zeit, die benötigt wird, um von normalem Dogtag zu Death Wish zu wechseln. Levelspezifische Zeiten sind die Überlebenszeit für den Aufstieg zum nächsten Level. Kill-Bedingungen (basierend auf DeathWishConditionType) müssen ebenfalls zusammen mit der Zeit erfüllt werden.

| Option | Typ | Standard | Beschreibung |
|------|------|--------|------|
| `NeedDeathWishInitialTime` | int | 21600 | Überlebenszeit für Basis-Death-Wish |
| `NeedDeathWishLevel1Time` | int | 36000 | Überlebenszeit für Level 1 |
| `NeedDeathWishLevel2Time` | int | 54000 | Überlebenszeit für Level 2 |
| `NeedDeathWishLevel3Time` | int | 72000 | Überlebenszeit für Level 3 |
| `NeedDeathWishLevel4Time` | int | 86400 | Überlebenszeit für Level 4 |
| `NeedDeathWishLevel5Time` | int | 129600 | Überlebenszeit für Level 5 |

---

## NeedDeathWishPlayerKillsSettings (Death Wish Level-Up Spieler-Kill-Bedingungen)

| Option | Typ | Standard | Beschreibung |
|------|------|--------|------|
| `NeedDeathWishPlayerKills1` | int | 50 | Spieler-Kills für Level 1 |
| `NeedDeathWishPlayerKills2` | int | 100 | Spieler-Kills für Level 2 |
| `NeedDeathWishPlayerKills3` | int | 200 | Spieler-Kills für Level 3 |
| `NeedDeathWishPlayerKills4` | int | 300 | Spieler-Kills für Level 4 |
| `NeedDeathWishPlayerKills5` | int | 500 | Spieler-Kills für Level 5 |

---

## NeedDeathWishAIKillsSettings (Death Wish Level-Up AI-Kill-Bedingungen)

| Option | Typ | Standard | Beschreibung |
|------|------|--------|------|
| `NeedDeathWishAIKills1` | int | 50 | AI-Kills für Level 1 |
| `NeedDeathWishAIKills2` | int | 100 | AI-Kills für Level 2 |
| `NeedDeathWishAIKills3` | int | 200 | AI-Kills für Level 3 |
| `NeedDeathWishAIKills4` | int | 300 | AI-Kills für Level 4 |
| `NeedDeathWishAIKills5` | int | 500 | AI-Kills für Level 5 |

---

## DeathWishRespawnSettings (Death Wish Respawn-Wahrscheinlichkeit)

Respawn-Wahrscheinlichkeit (%) an letzter Todesposition pro Death-Wish-Level.

**Verhalten:** Bei Tod wird ein Zufallswert von 0 bis 99 generiert. Ist er kleiner als die Level-Chance, respawnt der Spieler an der letzten Todesposition. Z.B. DeathWishRespawnChance3 von 50 bedeutet 50% Respawn-Chance. 100 bedeutet immer Respawn.

| Option | Typ | Standard | Beschreibung |
|------|------|--------|------|
| `DeathWishRespawnChance1` | int | 10 | Level-1-Respawn-Chance (%) |
| `DeathWishRespawnChance2` | int | 30 | Level-2-Respawn-Chance (%) |
| `DeathWishRespawnChance3` | int | 50 | Level-3-Respawn-Chance (%) |
| `DeathWishRespawnChance4` | int | 75 | Level-4-Respawn-Chance (%) |
| `DeathWishRespawnChance5` | int | 100 | Level-5-Respawn-Chance (%) |

---

## Konfigurationsbeispiel

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

## Beziehung zu DogtagTradeSettings

| Datei | Zweck |
|------|------|
| **DogtagSettings.json** | Dogtag-Grundverhalten (Looting, Death Wish, Anzeige usw.) |
| **DogtagTradeSettings.json** | Dogtag-Handel-System (Item-Austausch, Bedingungen usw.) |

`DogtagEnabled` in DogtagSettings.json muss `true` sein, um das Dogtag-Handel-Shop-System zu nutzen.

[Dogtag-Handel-Einstellungen →](DogtagTradeSettings)