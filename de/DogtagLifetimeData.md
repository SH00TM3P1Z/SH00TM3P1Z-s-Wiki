# Dogtag-Lebensdauer-Daten (DogtagLifetime.json)

**Dateipfad:** `$profile:EnhancedDogtag\Data\DogtagLifetime.json`

Laufzeit-Datendatei, in der der Server **automatisch** pro Spieler Dogtag-Überlebenszeit, Kill-Anzahl, Death-Wish-Level usw. speichert. Dies sind **Laufzeitdaten**, keine Konfigurationsdatei – manuelle Bearbeitung wird nicht empfohlen.

---

## Zweck

- **Death-Wish-Beibehaltung:** Bei aktiviertem `KeepDeathWishOnDeath` wird das Death-Wish-Level beim nächsten Respawn nach Tod wiederhergestellt
- **Kill-Anzahl-Beibehaltung:** Bei aktiviertem `KeepKillCountsOnDeath` werden Spieler-/KI-Kill-Anzahlen beim Tod auf den neuen Dogtag angewendet
- **Zurücksetzen:** Dogtag-Infos aller Spieler können zurückgesetzt werden
- Vorherige Daten auf bei Spielertod erstellten Dogtag anwenden

---

## JSON-Struktur

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

## PlayerEntries Optionsbeschreibungen

| Option | Typ | Beschreibung |
|------|------|------|
| `PlayerName` | string | Spielername |
| `PlayerId` | string | Spieler-eindeutige ID (Base64-kodiert) |
| `LifetimeSeconds` | int | Letzte Überlebenszeit (Sekunden) |
| `TagType` | string | Dogtag-Typ (z.B. `SMPZ_Dogtag_DeathWish_1` ~ `5`, Basis-Dogtag) |
| `BloodType` | string | Blutgruppe (O+, O-, A+, A-, B+, B-, AB+, AB-, None) |
| `PlayerKillCount` | int | Spieler-Kill-Anzahl |
| `AIKillCount` | int | KI-Kill-Anzahl |
| `LastUpdateTime` | string | Letzte Aktualisierungszeit |

---

## Hinweise

- **Automatisch generiert:** Server aktualisiert automatisch bei Spielertod oder Dogtag-Erstellung.
- **Max. 1000 Spieler:** Bis zu 1000 Spieler werden gespeichert. Ältere Einträge werden bei Vollständigkeit entfernt, sortiert nach kürzester Überlebenszeit.
- **Manuelle Bearbeitung nicht empfohlen:** Ungültiges Format oder Daten können Fehlfunktionen verursachen.
- **Config vs Data:** `Config\` ist für Einstellungen, `Data\` für Laufzeitdaten.

---

## Detailliertes Verhalten

**LifetimeSeconds:** Letzte Überlebenszeit des Spielers in Sekunden. Überlebenszeit beim Tod wird gespeichert.

**TagType:** Dogtag-Typ für nächsten Respawn. Gespeichert als `SMPZ_Dogtag_DeathWish_1` bis `5` oder Basis-Dogtag-Typ.

**PlayerKillCount, AIKillCount:** Kill-Anzahlen, die bei KeepKillCountsOnDeath true auf den neuen Dogtag angewendet werden.

**KeepDeathWishOnDeath-Integration:** Bei true bleiben TagType, Kill-Anzahlen usw. in DogtagLifetime.json nach Tod erhalten und werden beim nächsten Respawn auf den neuen Dogtag angewendet.

[Dogtag-Einstellungen →](DogtagSettings)