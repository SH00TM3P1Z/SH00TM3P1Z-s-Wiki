# Handels-Item-Liste

**Ordnerpfad:** `$profile:EnhancedDogtag\Config\Category\`

## Ordnerstruktur

```
Config/
└── Category/
    ├── Weapons/          ← Kategorieordner
    │   ├── Rifles.json   ← Unterkategorie-JSON
    │   └── Pistols.json
    ├── Gear/
    │   └── Backpacks.json
    └── ...
```

## Item-JSON-Struktur

Jede JSON-Datei ist ein **Array**.

```json
[
  {
    "ItemClassName": "AKM",
    "CustomName": "",
    "NeedDogtagAmount": 5,
    "Attachments": [],
    "ItemTradeConditions": { ... }
  },
  {
    "ItemClassName": "M4A1",
    "CustomName": "Death Wish Rifle",
    "NeedDogtagAmount": 10,
    "Attachments": [],
    "ItemTradeConditions": { ... }
  }
]
```

---

## Optionsbeschreibungen

| Option | Typ | Erforderlich | Beschreibung |
|------|------|------|------|
| `ItemClassName` | string | ✓ | DayZ-Item-Klassenname (z.B. AKM, M4A1) |
| `CustomName` | string | | Anzeigename (leer = Spiel-Standardname) |
| `NeedDogtagAmount` | int | ✓ | Für Handel erforderliche Dogtag-Anzahl |
| `Attachments` | array | | Aufsatzliste (optional) |
| `ItemTradeConditions` | object | | Itemspezifische Handelsbedingungen (optional) |

### Option Detailliertes Verhalten

**ItemClassName:** DayZ-Spiel-Item-Klassenname. Ungültige Namen verhindern Item-Erstellung.

**CustomName:** Leer verwendet Spiel-Standardname. Bei Wert wird in der Handels-UI dieser Name angezeigt.

**NeedDogtagAmount:** Dogtags erforderlich für den Handel eines dieser Items. Bei DogtagTradeSettings IncludeAttachmentsPrice true werden Aufsatzpreise addiert.

**Attachments:** Aufsätze für dieses Item. Sind Aufsätze in der Handels-Item-Liste und IncludeAttachmentsPrice true, werden ihre Preise addiert.

**ItemTradeConditions:** Fehlt oder Enabled 0: globale TradeConditions. Enabled 1: dieses Item nutzt andere Handelsbedingungen.

---

## Attachments-Beispiel

```json
"Attachments": [
  {
    "ItemClassName": "AK_RailHndguard",
    "Attachments": []
  }
]
```

---

## Verschachtelte Aufsätze Beispiel

Aufsätze können weitere Aufsätze enthalten. Beispiel: SCAR-L vollständige Konfiguration in Assault Rifle.json.

```json
{
    "ItemClassName": "SMPZ_Weapon_SCAR_L",
    "CustomName": "",
    "NeedDogtagAmount": 20,
    "Attachments": [
        {
            "ItemClassName": "SMPZ_Mag_SCAR_L_30Rnd",
            "Attachments": []
        },
        {
            "ItemClassName": "SMPZ_Attachments_SCAR_Rearsight",
            "Attachments": []
        },
        {
            "ItemClassName": "SMPZ_Attachments_SCAR_Polymer_Buttstock_FDE",
            "Attachments": [
                {
                    "ItemClassName": "SMPZ_Attachments_SCAR_Retractable_Buttstock_FDE",
                    "Attachments": []
                },
                {
                    "ItemClassName": "SMPZ_Attachments_SCAR_Cheek_FDE",
                    "Attachments": []
                }
            ]
        }
    ],
    "ItemTradeConditions": {
        "Enabled": 0,
        "PlayerDogtag": {
            "Enabled": 0,
            "NeedDeathWishDogtag": 0,
            "RequireSelfKill": 0,
            "RequireAny": 0,
            "AllowSuicideDogtag": 0
        },
        "AIDogtag": {
            "Enabled": 0,
            "NeedDeathWishDogtag": 0,
            "RequireSelfKill": 0,
            "RequireAny": 0,
            "AllowSuicideDogtag": 0
        }
    }
}
```

`SCAR_Polymer_Buttstock_FDE` hat zwei Aufsätze: `Retractable_Buttstock` und `Cheek`. Aufsätze können verschachtelt werden: Aufsatz → Aufsatz → … nach Bedarf.

---

## Hinweise

- **Kategorie-/Unterkategorie**-Namen werden durch Ordnernamen und JSON-Dateinamen (ohne Erweiterung) bestimmt.
- Bei fehlendem `ItemTradeConditions` oder `Enabled: 0` werden globale `TradeConditions` verwendet.