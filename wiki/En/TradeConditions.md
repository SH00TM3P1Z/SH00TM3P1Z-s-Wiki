# Trade Conditions (TradeConditions)

The `TradeConditions` section inside `DogtagTradeSettings.json` defines **global trade conditions**.

## Structure

```json
{
  "TradeConditions": {
    "Enabled": 1,
    "PlayerDogtag": {
      "Enabled": true,
      "NeedDeathWishDogtag": 0,
      "RequireSelfKill": 1,
      "RequireAny": 0,
      "AllowSuicideDogtag": 0
    },
    "AIDogtag": {
      "Enabled": true,
      "RequireSelfKill": 1,
      "RequireAny": 0
    }
  }
}
```

---

## Enabled (Global)

| Value | Description |
|-------|--------------|
| 1 | Global trade conditions enabled. Applied to all items (except items with item-specific conditions) |
| 0 | Global trade conditions disabled. Trade only possible when item JSON has `ItemTradeConditions.Enabled=1` |

> **Trade availability:** Trade is allowed when either global `Enabled` or item `ItemTradeConditions.Enabled` is 1. If both are 0, trade is blocked and "Trade Fail" notification appears.

---

## PlayerDogtag (Player Dogtags)

| Option | Type | Description |
|--------|------|-------------|
| `Enabled` | bool | Allow trade with player dogtags (1=allow, 0=disallow) |
| `NeedDeathWishDogtag` | bool | Death Wish dogtags only (1=Death Wish only, 0=include normal player dogtags) |
| `RequireSelfKill` | bool | Only dogtags from player's own kills (1=own kills only, 0=anyone's kills allowed) |
| `RequireAny` | bool | (Unused) |
| `AllowSuicideDogtag` | bool | Allow trade with suicide dogtags (1=allow, 0=exclude) |

### PlayerDogtag Detailed Behavior

**NeedDeathWishDogtag:** If 1, only Death Wish dogtags can be used for trade. Normal player dogtags cannot. If 0, both normal and Death Wish dogtags can be used.

**RequireSelfKill:** If 1, only dogtags from the player's own kills can be used. Dogtags from players killed by others cannot. If 0, any dogtag can be used regardless of who killed.

**AllowSuicideDogtag:** If 1, suicide dogtags can be used for trade. If 0, suicide dogtags are excluded from trade.

---

## AIDogtag (AI Dogtags)

| Option | Type | Description |
|--------|------|-------------|
| `Enabled` | bool | Allow trade with AI dogtags (1=allow, 0=disallow) |
| `RequireSelfKill` | bool | Only AI dogtags from player's own kills (1=own kills only, 0=anyone's kills allowed) |
| `RequireAny` | bool | (Unused) |

### AIDogtag Detailed Behavior

**RequireSelfKill:** Same as PlayerDogtag. If 1, only AI dogtags from own kills. If 0, any AI dogtag can be used.

---

## Condition Priority

| Global Enabled | Item ItemTradeConditions.Enabled | Applied Conditions |
|----------------|----------------------------------|---------------------|
| 1 | 0 | Global TradeConditions (items without item-specific conditions use global) |
| 0 | 1 | Item ItemTradeConditions (only that item uses different conditions) |
| 1 | 1 | Item ItemTradeConditions (item-specific conditions override global) |
| 0 | 0 | Trade blocked (TRADE_FAIL) |

If an item has `ItemTradeConditions` with `Enabled` 1, that item ignores global settings and uses only its own PlayerDogtag and AIDogtag conditions.

[Item Trade Conditions →](ItemTradeConditions)
