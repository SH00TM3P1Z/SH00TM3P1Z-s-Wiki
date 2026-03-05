# 交易条件 (TradeConditions)

`DogtagTradeSettings.json` 内的 `TradeConditions` 部分定义**全局交易条件**。

## 结构

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

## Enabled（全局）

| 值 | 说明 |
|----|------|
| 1 | 启用全局交易条件。应用于所有物品（若有物品特定条件则排除该物品） |
| 0 | 禁用全局交易条件。仅当物品 json 中 `ItemTradeConditions.Enabled=1` 時可交易 |

> **可交易条件：** 全局 `Enabled` 或物品 `ItemTradeConditions.Enabled` 任一為 1 则按该条件可交易。两者均為 0 则不可交易，显示「Trade Fail」通知。

---

## PlayerDogtag（玩家狗牌）

| 选项 | 类型 | 说明 |
|------|------|------|
| `Enabled` | bool | 允许使用玩家狗牌交易（1=允许，0=不允许） |
| `NeedDeathWishDogtag` | bool | 仅允许 Death Wish 狗牌（1=仅 Death Wish，0=含普通玩家狗牌） |
| `RequireSelfKill` | bool | 仅允许自己击杀的狗牌（1=仅自己击杀，0=谁击杀均可） |
| `RequireAny` | bool | （未使用） |
| `AllowSuicideDogtag` | bool | 允许自杀获得的狗牌（1=允许，0=排除） |

### PlayerDogtag 详细行為

**NeedDeathWishDogtag：** 為 1 時仅 Death Wish 狗牌可用于交易。普通玩家狗牌不可用。為 0 時普通狗牌和 Death Wish 狗牌均可使用。

**RequireSelfKill：** 為 1 時仅自己击杀的狗牌可用于交易。拾取他人击杀的狗牌不可用。為 0 時谁击杀均可使用。

**AllowSuicideDogtag：** 為 1 時自杀获得的狗牌也可用于交易。為 0 時自杀狗牌排除在交易之外。

---

## AIDogtag（AI 狗牌）

| 选项 | 类型 | 说明 |
|------|------|------|
| `Enabled` | bool | 允许使用 AI 狗牌交易（1=允许，0=不允许） |
| `RequireSelfKill` | bool | 仅允许自己击杀的 AI 狗牌（1=仅自己击杀，0=谁击杀均可） |
| `RequireAny` | bool | （未使用） |

### AIDogtag 详细行為

**RequireSelfKill：** 与 PlayerDogtag 相同。為 1 時仅自己击杀的 AI 狗牌，為 0 時谁击杀均可使用。

---

## 条件应用优先级

| 全局 Enabled | 物品 ItemTradeConditions.Enabled | 应用的条件 |
|--------------|-----------------------------------|----------------|
| 1 | 0 | 全局 TradeConditions（物品无单独条件则使用全局） |
| 0 | 1 | 物品 ItemTradeConditions（仅该物品使用不同条件） |
| 1 | 1 | 物品 ItemTradeConditions（物品条件优先于全局） |
| 0 | 0 | 不可交易 (TRADE_FAIL) |

若物品有 `ItemTradeConditions` 且 `Enabled` 為 1，该物品忽略全局設定，仅使用其 PlayerDogtag、AIDogtag 条件。

[物品交易条件 →](ItemTradeConditions)