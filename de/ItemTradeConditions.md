# Item-Handelsbedingungen (ItemTradeConditions)

Fügen Sie `ItemTradeConditions` in jede **Handels-Item-JSON**-Datei ein, um **nur für dieses Item** andere Handelsbedingungen anzuwenden.

## Speicherort

JSON-Dateien in Kategorieordnern (`$profile:EnhancedDogtag\Config\Category\{Kategorie}\*.json`)

## Struktur

```json
{
  "ItemClassName": "M4A1",
  "CustomName": "Death Wish Rifle",
  "NeedDogtagAmount": 10,
  "Attachments": [],
  "ItemTradeConditions": {
    "Enabled": 1,
    "PlayerDogtag": {
      "Enabled": 1,
      "NeedDeathWishDogtag": 1,
      "RequireSelfKill": 1,
      "RequireAny": 0,
      "AllowSuicideDogtag": 0
    },
    "AIDogtag": {
      "Enabled": 0,
      "RequireSelfKill": 1,
      "RequireAny": 0
    }
  }
}
```

---

## Enabled (Itemspezifisch)

| Wert | Beschreibung |
|----|------|
| 1 | Dieses Item **ignoriert globale TradeConditions** und nutzt die PlayerDogtag-/AIDogtag-Bedingungen unten |
| 0 | Dieses Item nutzt globale TradeConditions (wie ohne ItemTradeConditions) |

---

## PlayerDogtag / AIDogtag

Gleiche Struktur wie globale `TradeConditions` PlayerDogtag und AIDogtag.

| Option | Beschreibung |
|------|------|
| `Enabled` | Ob dieser Dogtag-Typ erlaubt ist |
| `NeedDeathWishDogtag` | (nur PlayerDogtag) Nur Death-Wish-Dogtags |
| `RequireSelfKill` | Nur Dogtags von eigenen Kills |
| `AllowSuicideDogtag` | (nur PlayerDogtag) Selbstmord-Dogtags erlauben |

### Detailliertes Verhalten

Items mit `ItemTradeConditions.Enabled` 1 nutzen keine globalen TradeConditions und wenden nur ihre eigenen PlayerDogtag- und AIDogtag-Bedingungen an. Z.B. kann global KI-Dogtags erlauben, aber ein bestimmtes M4A1-Item nur mit Death-Wish-Spieler-Dogtags handelbar sein.

---

## Beispiel: Death-Wish-exklusives M4A1

```json
{
  "ItemClassName": "M4A1",
  "CustomName": "Death Wish Gewehr",
  "NeedDogtagAmount": 10,
  "Attachments": [],
  "ItemTradeConditions": {
    "Enabled": 1,
    "PlayerDogtag": {
      "Enabled": 1,
      "NeedDeathWishDogtag": 1,
      "RequireSelfKill": 1,
      "RequireAny": 0,
      "AllowSuicideDogtag": 0
    },
    "AIDogtag": {
      "Enabled": 0,
      "RequireSelfKill": 1,
      "RequireAny": 0
    }
  }
}
```

- M4A1 nur mit **10 Death-Wish-Spieler-Dogtags** handelbar
- KI-Dogtags können nicht verwendet werden (`AIDogtag.Enabled: 0`)

---

## UI-Verhalten

- **Item-Liste:** Zeigt erforderlichen Dogtag-Typ (normal/Death Wish/KI) pro Item
- **Bei Auswahl:** Dogtag-Vorschau im Aktionspanel und Inventar-Dogtag-Anzahl werden an Item-Bedingungen angepasst

[Handels-Item-Liste →](TradeItemList)