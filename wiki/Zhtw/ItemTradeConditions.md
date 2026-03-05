# 物品交易条件 (ItemTradeConditions)

在各**交易物品 JSON** 文件中加入 `ItemTradeConditions`，可**仅对该物品**应用不同交易条件。

## 使用位置

分类文件夹内的 JSON 文件（`$profile:EnhancedDogtag\Config\Category\{分类}\*.json`）

## 结构

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

## Enabled（物品级）

| 值 | 說明 |
|----|------|
| 1 | 此物品**忽略全局 TradeConditions**，使用下方 PlayerDogtag/AIDogtag 条件 |
| 0 | 此物品使用全局 TradeConditions（等同于无 ItemTradeConditions） |

---

## PlayerDogtag / AIDogtag

与全局 `TradeConditions` 的 `PlayerDogtag`、`AIDogtag` 结构相同。

| 选项 | 说明 |
|------|------|
| `Enabled` | 是否允许该狗牌类型 |
| `NeedDeathWishDogtag` | （仅 PlayerDogtag）仅允许 Death Wish 狗牌 |
| `RequireSelfKill` | 仅允许自己击杀的狗牌 |
| `AllowSuicideDogtag` | （仅 PlayerDogtag）允许自杀狗牌 |

### 详细行為

`ItemTradeConditions.Enabled` 為 1 的物品不使用全局 TradeConditions，仅应用该物品的 PlayerDogtag、AIDogtag 条件。例如全局允许 AI 狗牌，但可让特定 M4A1 仅用 Death Wish 玩家狗牌交易。

---

## 示例：Death Wish 专用 M4A1

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

- M4A1 仅可用**10 个 Death Wish 玩家狗牌**交易
- 不可使用 AI 狗牌（`AIDogtag.Enabled: 0`）

---

## UI 行為

- **物品列表：** 显示各物品所需狗牌类型（普通/Death Wish/AI）
- **选择時：** 操作面板狗牌预览与背包狗牌数量按该物品条件更新

[交易物品列表 →](TradeItemList)