# Item Trade Conditions (ItemTradeConditions)

Add `ItemTradeConditions` inside each **trade item JSON** to apply **different trade conditions** for that item only.

## Location

JSON files inside category folders (`$profile:EnhancedDogtag\Config\Category\{category}\*.json`)

## Structure

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

## Enabled (Item-specific)

| Value | Description |
|----|------|
| 1 | This item **ignores global TradeConditions** and uses the PlayerDogtag/AIDogtag below |
| 0 | This item uses global TradeConditions (same as no ItemTradeConditions) |

---

## PlayerDogtag / AIDogtag

Same structure as global `TradeConditions` PlayerDogtag and AIDogtag.

| Option | Description |
|------|------|
| `Enabled` | Whether to allow that dogtag type |
| `NeedDeathWishDogtag` | (PlayerDogtag only) Death Wish dogtags only |
| `RequireSelfKill` | Only dogtags from own kills |
| `AllowSuicideDogtag` | (PlayerDogtag only) Allow suicide dogtags |

### Detailed Behavior

Items with `ItemTradeConditions.Enabled` 1 do not use global TradeConditions and only apply their own PlayerDogtag and AIDogtag conditions. For example, global can allow AI dogtags, but a specific M4A1 item can require Death Wish player dogtags only.

---

## Example: Death Wish Only M4A1

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

- M4A1 tradable only with **10 Death Wish player dogtags**
- AI dogtags cannot be used (`AIDogtag.Enabled: 0`)

---

## UI Behavior

- **Item list:** Shows required dogtag type (normal/Death Wish/AI) per item
- **On selection:** Action panel dogtag preview and inventory dogtag count update to match item conditions

[Trade Item List →](TradeItemList)