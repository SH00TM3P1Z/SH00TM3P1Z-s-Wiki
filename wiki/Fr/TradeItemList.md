# Liste des objets échangeables

**Chemin du dossier :** `$profile:EnhancedDogtag\Config\Category\`

## Structure des dossiers

```
Config/
└── Category/
    ├── Weapons/          ← Dossier de catégorie
    │   ├── Rifles.json   ← JSON de sous-catégorie
    │   └── Pistols.json
    ├── Gear/
    │   └── Backpacks.json
    └── ...
```

## Structure JSON des objets

Chaque fichier JSON est un **tableau**.

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

## Description des options

| Option | Type | Requis | Description |
|------|------|------|------|
| `ItemClassName` | string | ✓ | Nom de classe d'objet DayZ (ex. : AKM, M4A1) |
| `CustomName` | string | | Nom d'affichage (vide = nom par défaut du jeu) |
| `NeedDogtagAmount` | int | ✓ | Nombre de dogtags requis pour l'échange |
| `Attachments` | array | | Liste des accessoires (optionnel) |
| `ItemTradeConditions` | object | | Conditions d'échange par objet (optionnel) |

### Comportement détaillé des options

**ItemClassName :** Nom de classe d'objet DayZ en jeu. Des noms invalides empêchent la création de l'objet.

**CustomName :** Vide = nom par défaut du jeu. Si défini, s'affiche dans l'interface d'échange avec ce nom.

**NeedDogtagAmount :** Nombre de dogtags requis pour échanger un de cet objet. Si IncludeAttachmentsPrice de DogtagTradeSettings est true, les prix des accessoires s'ajoutent.

**Attachments :** Liste des accessoires à attacher à cet objet. Si les accessoires sont dans la liste et IncludeAttachmentsPrice est true, leurs prix sont additionnés.

**ItemTradeConditions :** Si absent ou Enabled 0, les TradeConditions globales sont utilisées. Si Enabled 1, cet objet utilise des conditions d'échange différentes.

---

## Exemple d'Attachments

```json
"Attachments": [
  {
    "ItemClassName": "AK_RailHndguard",
    "Attachments": []
  }
]
```

---

## Exemple d'accessoires imbriqués

Les accessoires peuvent contenir d'autres accessoires. Exemple : configuration complète SCAR-L dans Assault Rifle.json.

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

`SCAR_Polymer_Buttstock_FDE` a deux accessoires : `Retractable_Buttstock` et `Cheek`. Les accessoires peuvent être imbriqués : accessoire → accessoire → … selon les besoins.

---

## Notes

- Les noms de **catégorie/sous-catégorie** sont déterminés par le nom du dossier et du fichier JSON (sans extension).
- Si `ItemTradeConditions` est absent ou `Enabled: 0`, les `TradeConditions` globales sont utilisées.