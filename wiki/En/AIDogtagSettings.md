# AI Dogtag Settings (AIDogtagSettings)

**File path:** `$profile:EnhancedDogtag\Config\AIDogtagSettings.json`

Config file that controls whether AI can carry dogtags and whether AI dogtags can be looted.

---

## Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `Version` | int | 2 | Config version (not recommended to modify) |
| `AIDogtagEnabled` | bool | true | Enable AI dogtags (whether AI can carry dogtags) |
| `AIDogtagLootingEnabled` | bool | true | Allow AI dogtag looting (whether dogtags can be looted from AI corpses) |

### Detailed Behavior

**AIDogtagEnabled:** If false, AI do not carry dogtags. No dogtags drop from AI corpses.

**AIDogtagLootingEnabled:** If false, players cannot loot dogtags from AI corpses even if they exist. Looting is blocked even when AIDogtagEnabled is true.

Both settings must be true to obtain AI dogtags and use them in dogtag trade.

---

## Config Example

```json
{
  "Version": 2,
  "AIDogtagEnabled": true,
  "AIDogtagLootingEnabled": true
}
```

---

## Relationship with DogtagSettings

| File | Purpose |
|------|---------|
| **DogtagSettings.json** | Player dogtag base behavior (looting, Death Wish, etc.) |
| **AIDogtagSettings.json** | AI dogtag behavior (AI carry/looting) |

AI dogtags can be used in the trade system. Used together with the `AIDogtag` settings in [Trade Conditions (TradeConditions)](TradeConditions).

[Dogtag Settings →](DogtagSettings)
