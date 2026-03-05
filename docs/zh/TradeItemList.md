# 交易物品列表

**文件夹路径：** `$profile:EnhancedDogtag\Config\Category\`

## 文件夹结构

```
Config/
└── Category/
    ├── Weapons/          ← 分类文件夹
    │   ├── Rifles.json   ← 子分类 JSON
    │   └── Pistols.json
    ├── Gear/
    │   └── Backpacks.json
    └── ...
```

## 物品 JSON 结构

每个 JSON 文件为**数组**形式。

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

## 选项说明

| 选项 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `ItemClassName` | string | ✓ | DayZ 物品类名（例如：AKM、M4A1） |
| `CustomName` | string | | 显示名称（空则使用游戏默认名） |
| `NeedDogtagAmount` | int | ✓ | 交易所需狗牌数量 |
| `Attachments` | array | | 配件列表（可选） |
| `ItemTradeConditions` | object | | 物品交易条件（可选） |

### 选项详细行为

**ItemClassName：** DayZ 游戏内物品类名。错误名称会导致物品无法生成。

**CustomName：** 空则使用游戏默认名。填写则在交易 UI 中显示该名称。

**NeedDogtagAmount：** 交易该物品一个所需的狗牌数量。DogtagTradeSettings 的 IncludeAttachmentsPrice 为 true 时配件价格会加在此处。

**Attachments：** 该物品的配件列表。配件若也登记在交易物品列表中，IncludeAttachmentsPrice 为 true 时价格会累加。

**ItemTradeConditions：** 无或 Enabled 为 0 时使用全局 TradeConditions。Enabled 为 1 时仅此物品使用不同交易条件。

---

## Attachments 示例

```json
"Attachments": [
  {
    "ItemClassName": "AK_RailHndguard",
    "Attachments": []
  }
]
```

---

## 嵌套配件示例

配件内可嵌套其他配件。Assault Rifle.json 中 SCAR-L 的完整配置示例。

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

`SCAR_Polymer_Buttstock_FDE` 本身带有 `Retractable_Buttstock` 和 `Cheek` 两个配件。可如此以配件→配件→…形式延续层级。

---

## 备注

- **分类/子分类** 名称由文件夹名和 JSON 文件名（不含扩展名）决定。
- 无 `ItemTradeConditions` 或 `Enabled: 0` 时使用全局 `TradeConditions`。