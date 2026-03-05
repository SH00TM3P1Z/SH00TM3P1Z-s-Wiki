# AI 狗牌設定 (AIDogtagSettings)

**檔案路徑:** `$profile:EnhancedDogtag\Config\AIDogtagSettings.json`

控制 AI 是否可携带狗牌及是否可从 AI 拾取狗牌的配置文件。

---

## 設定项

| 選項 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `Version` | int | 2 | 配置版本（不建议修改） |
| `AIDogtagEnabled` | bool | true | 启用 AI 狗牌（AI 是否可携带狗牌） |
| `AIDogtagLootingEnabled` | bool | true | 允许拾取 AI 狗牌（是否可从 AI 尸体拾取狗牌） |

### 详细行為

**AIDogtagEnabled：** 设為 false 時 AI 不携带狗牌。AI 尸体不会掉落狗牌。

**AIDogtagLootingEnabled：** 设為 false 時，即使 AI 尸体有狗牌玩家也无法拾取。即使 AIDogtagEnabled 為 true 也会阻止拾取。

两项均需為 true 才能获得 AI 狗牌并在狗牌交易中使用。

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
| **DogtagSettings.json** | 玩家狗牌基本行為（拾取、Death Wish 等） |
| **AIDogtagSettings.json** | AI 狗牌行為（AI 携带/拾取许可） |

AI 狗牌可用于交易系统。与[交易条件 (TradeConditions)](TradeConditions) 中的 `AIDogtag` 設定配合使用。

[狗牌基本設定 →](DogtagSettings)