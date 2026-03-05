# Dogtag Lifetime Data (DogtagLifetime.json)

**File path:** `$profile:EnhancedDogtag\Data\DogtagLifetime.json`

Runtime data file where the server **automatically saves** per-player dogtag survival time, kill count, Death Wish level, etc. This is **runtime data**, not a config file, so manual editing is not recommended.

---

## Purpose

- **Death Wish persistence:** When `KeepDeathWishOnDeath` is enabled, Death Wish level is restored on next respawn after death
- **Kill count persistence:** When `KeepKillCountsOnDeath` is enabled, player/AI kill counts are applied to new dogtag on death
- **Reset:** All players' dogtag info can be reset
- Apply previous data to dogtag created on player death

---

## JSON Structure

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

## PlayerEntries Option Descriptions

| Option | Type | Description |
|--------|------|--------------|
| `PlayerName` | string | Player name |
| `PlayerId` | string | Player unique ID (Base64 encoded) |
| `LifetimeSeconds` | int | Last survival time (seconds) |
| `TagType` | string | Dogtag type (e.g., `SMPZ_Dogtag_DeathWish_1` ~ `5`, base dogtag) |
| `BloodType` | string | Blood type (O+, O-, A+, A-, B+, B-, AB+, AB-, None) |
| `PlayerKillCount` | int | Player kill count |
| `AIKillCount` | int | AI kill count |
| `LastUpdateTime` | string | Last update time |

---

## Notes

- **Auto-generated:** Server automatically updates on player death or dogtag creation.
- **Max 1000 players:** Up to 1000 players are stored. Older entries are removed when full, sorted by shortest survival time.
- **Manual edit not recommended:** Invalid format or data may cause issues.
- **Config vs Data:** `Config\` is for settings, `Data\` is for runtime data.

---

## Detailed Behavior

**LifetimeSeconds:** Player's last survival time in seconds. Survival time at death is stored.

**TagType:** Dogtag type to create on next respawn. Stored as `SMPZ_Dogtag_DeathWish_1` through `5`, or base dogtag type.

**PlayerKillCount, AIKillCount:** Kill counts applied to new dogtag when KeepKillCountsOnDeath is true.

**KeepDeathWishOnDeath integration:** When true, TagType, kill counts, etc. in DogtagLifetime.json persist after death and are applied to new dogtag on next respawn.

[Dogtag Settings →](DogtagSettings)
