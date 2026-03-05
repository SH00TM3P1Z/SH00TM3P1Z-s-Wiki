# Trade Item List

**Folder path:** `$profile:EnhancedDogtag\Config\Category\`

## Folder Structure

```
Config/
└── Category/
    ├── Weapons/          ← Category folder
    │   ├── Rifles.json   ← Subcategory JSON
    │   └── Pistols.json
    ├── Gear/
    │   └── Backpacks.json
    └── ...
```

## Item JSON Structure

Each JSON file is an **array**.

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

## Option Descriptions

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `ItemClassName` | string | ✓ | DayZ item class name (e.g., AKM, M4A1) |
| `CustomName` | string | | Display name (empty = game default name) |
| `NeedDogtagAmount` | int | ✓ | Dogtags required for trade |
| `Attachments` | array | | Attachment list (optional) |
| `ItemTradeConditions` | object | | Item-specific trade conditions (optional) |

### Option Detailed Behavior

**ItemClassName:** DayZ in-game item class name. Invalid names prevent item creation.

**CustomName:** Empty uses game default name. If set, shows in trade UI with this name.

**NeedDogtagAmount:** Dogtags required to trade for one of this item. If DogtagTradeSettings IncludeAttachmentsPrice is true, attachment prices are added here.

**Attachments:** Attachments to attach to this item. If attachments are in the trade item list and IncludeAttachmentsPrice is true, their prices are summed.

**ItemTradeConditions:** If absent or Enabled is 0, global TradeConditions are used. If Enabled is 1, this item uses different trade conditions.

---

## Attachments Example

```json
"Attachments": [
  {
    "ItemClassName": "AK_RailHndguard",
    "Attachments": []
  }
]
```

---

## Nested Attachments Example

Attachments can have attachments nested inside. Example: SCAR-L full config in Assault Rifle.json.

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

`SCAR_Polymer_Buttstock_FDE` has two attachments: `Retractable_Buttstock` and `Cheek`. Attachments can be nested: attachment → attachment → … as needed.

---

## Notes

- **Category/subcategory** names are determined by folder name and JSON filename (without extension).
- If `ItemTradeConditions` is absent or `Enabled: 0`, global `TradeConditions` are used.
