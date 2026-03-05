# Elenco Oggetti di Scambio

**Percorso cartella:** `$profile:EnhancedDogtag\Config\Category\`

## Struttura Cartelle

```
Config/
└── Category/
    ├── Weapons/          ← Cartella categoria
    │   ├── Rifles.json   ← JSON sottocategoria
    │   └── Pistols.json
    ├── Gear/
    │   └── Backpacks.json
    └── ...
```

## Struttura JSON Oggetto

Ogni file JSON è un **array**.

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

## Descrizione Opzioni

| Opzione | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `ItemClassName` | string | ✓ | Nome classe oggetto DayZ (es: AKM, M4A1) |
| `CustomName` | string | | Nome visualizzato (vuoto = nome predefinito gioco) |
| `NeedDogtagAmount` | int | ✓ | Numero dogtag richiesti per lo scambio |
| `Attachments` | array | | Elenco accessori (opzionale) |
| `ItemTradeConditions` | object | | Condizioni di scambio per oggetto (opzionale) |

### Comportamento Dettagliato Opzioni

**ItemClassName:** Nome della classe oggetto in-game DayZ. Nomi non validi impediscono la creazione dell'oggetto.

**CustomName:** Vuoto usa il nome predefinito del gioco. Se impostato, viene mostrato nell'UI scambio con questo nome.

**NeedDogtagAmount:** Dogtag richiesti per scambiare uno di questo oggetto. Se IncludeAttachmentsPrice di DogtagTradeSettings è true, i prezzi degli accessori vengono aggiunti.

**Attachments:** Accessori da attaccare a questo oggetto. Se gli accessori sono nell'elenco oggetti di scambio e IncludeAttachmentsPrice è true, i prezzi vengono sommati.

**ItemTradeConditions:** Se assente o Enabled è 0, vengono usate TradeConditions globali. Se Enabled è 1, questo oggetto usa condizioni di scambio diverse.

---

## Esempio Attachments

```json
"Attachments": [
  {
    "ItemClassName": "AK_RailHndguard",
    "Attachments": []
  }
]
```

---

## Esempio Accessori Annidati

Gli accessori possono avere altri accessori annidati. Esempio: configurazione completa SCAR-L in Assault Rifle.json.

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

`SCAR_Polymer_Buttstock_FDE` ha due accessori: `Retractable_Buttstock` e `Cheek`. Gli accessori possono essere annidati: accessorio → accessorio → … secondo necessità.

---

## Note

- I nomi **categoria/sottocategoria** sono determinati dal nome cartella e dal nome file JSON (senza estensione).
- Se `ItemTradeConditions` è assente o `Enabled: 0`, vengono usate `TradeConditions` globali.