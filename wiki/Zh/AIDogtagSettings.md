# AI 狗牌设置 (AIDogtagSettings)

**文件路径:** `$profile:EnhancedDogtag\Config\AIDogtagSettings.json`

控制 AI 是否可携带狗牌及是否可从 AI 拾取狗牌的配置文件。

---

## 设置项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `Version` | int | 2 | 配置版本（不建议修改） |
| `AIDogtagEnabled` | bool | true | 启用 AI 狗牌（AI 是否可携带狗牌） |
| `AIDogtagLootingEnabled` | bool | true | 允许拾取 AI 狗牌（是否可从 AI 尸体拾取狗牌） |

### 详细行为

**AIDogtagEnabled：** 设为 false 时 AI 不携带狗牌。AI 尸体不会掉落狗牌。

**AIDogtagLootingEnabled：** 设为 false 时，即使 AI 尸体有狗牌玩家也无法拾取。即使 AIDogtagEnabled 为 true 也会阻止拾取。

两项均需为 true 才能获得 AI 狗牌并在狗牌交易中使用。

---

## 配置示例

```json
{
  "Version": 2,
  "AIDogtagEnabled": true,
  "AIDogtagLootingEnabled": true
}
```

---

## 与 DogtagSettings 的关系

| 파일 | 용도 |
|------|------|
| **DogtagSettings.json** | 玩家狗牌基本行为（拾取、Death Wish 等） |
| **AIDogtagSettings.json** | AI 狗牌行为（AI 携带/拾取许可） |

AI 狗牌可用于交易系统。与[交易条件 (TradeConditions)](TradeConditions) 中的 `AIDogtag` 设置配合使用。

[狗牌基本设置 →](DogtagSettings)