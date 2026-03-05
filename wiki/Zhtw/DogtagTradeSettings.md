# 狗牌交易設定 (DogtagTradeSettings)

**檔案路徑:** `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json`

## 基本設定项

| 選項 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `Enabled` | bool | true | 启用狗牌交易系统（1=开，0=关） |
| `UseDateRange` | bool | false | 是否使用日期范围 |
| `UseWeekendOnly` | bool | false | 是否仅周末可交易 |
| `StartDate` | string | "" | 交易开始日期 (YYYY/MM/DD) |
| `EndDate` | string | "" | 交易结束日期 (YYYY/MM/DD) |
| `TimeZone` | string | "UTC" | 時区（例如：KST、UTC） |
| `IncludeAttachmentsPrice` | bool | false | 是否将配件价格计入狗牌数量 |

---

## 日期/時间限制設定（详细行為）

交易是否可用以**服务器**為准。`IsTradeEnabled()` 返回 false 時交易完全禁止。

### UseDateRange

- **false：** 无日期限制。`StartDate`、`EndDate` 被忽略。
- **true：** 仅在 `StartDate`～`EndDate` 范围内可交易。

### StartDate / EndDate

- **格式：** `YYYY/MM/DD`（例如：`2025/03/01`）
- **UseDateRange 為 true 時：**
  - 仅 StartDate：当前日期等于或晚于开始日期時可交易
  - 仅 EndDate：当前日期等于或早于结束日期時可交易
  - 两者都有：当前日期在开始与结束日期之间（含）時可交易
  - 两者都空：无日期限制（即使 UseDateRange 為 true）

### TimeZone

- 用于 `StartDate`、`EndDate`、`UseWeekendOnly` 的**日期/星期计算**的時区。
- 将服务器 UTC 時间转换為此時区后进行比较。

**支持值（区分大小写）：**

| 值 | 说明 |
|----|------|
| `UTC`, `GMT`, `UK`, `London` | UTC+0 |
| `KST`, `Korea`, `JST`, `Japan` | UTC+9 |
| `CST`, `China`, `HKT`, `HongKong`, `SGT`, `Singapore`, `MYT`, `Malaysia`, `PHT`, `Philippines`, `TPE`, `Taiwan` | UTC+8 |
| `ICT`, `Thailand`, `VNT`, `Vietnam`, `WIB`, `Indonesia` | UTC+7 |
| `IST`, `India` | UTC+5:30 |
| `MSK`, `Moscow`, `Russia` | UTC+3 |
| `CET`, `Europe`, `Germany`, `France`, `Paris`, `Italy`, `Rome`, `Spain`, `Madrid` | UTC+1 |
| `EST`, `US_East`, `NewYork`, `Toronto`, `Canada_East` | UTC-5 |
| `CST_MX`, `Mexico` | UTC-6 |
| `PST`, `US_West`, `LosAngeles`, `Vancouver`, `Canada_West` | UTC-8 |
| `BRT`, `Brazil` | UTC-3 |
| `AEST`, `Australia`, `Sydney` | UTC+10 |
| `NZST`, `NewZealand`, `Auckland` | UTC+12 |

### UseWeekendOnly

- **true：** 仅**周六·周日**可交易（以该 TimeZone 為准）。
- **注意：** 使用 `UseWeekendOnly` 必须满足以下全部条件：
  - 将 `UseDateRange` 设為 true
  - 在 `StartDate` 中输入日期
  - 在 `EndDate` 中输入日期
- 缺少任一条件则交易始终禁止。

### 行為顺序摘要

1. UseDateRange 為 false：无日期/周末限制
2. UseDateRange 為 true：检查 `StartDate` 与 `EndDate` 范围
3. UseWeekendOnly 為 true：在上述范围内仅**周六·周日**可交易

### 日期設定示例

| 目的 | UseDateRange | StartDate | EndDate | UseWeekendOnly | TimeZone |
|------|--------------|-----------|---------|----------------|----------|
| 无限制 | false | "" | "" | false | - |
| 仅 3 月 | true | "2025/03/01" | "2025/03/31" | false | "KST" |
| 仅 3 月周末 | true | "2025/03/01" | "2025/03/31" | true | "KST" |
| 自特定日起无限制 | true | "2025/03/15" | "" | false | "UTC" |

---

## IncludeAttachmentsPrice（配件价格详细行為）

**false：** 仅使用物品的 `NeedDogtagAmount`。配件不计入数量。

**true:** 아이템 기본 가격에 부착물 가격을 더합니다. 부착물도 각각 거래 아이템 목록에 등록된 경우 그 `NeedDogtagAmount`가 합산됩니다. 재귀 부착물(부착물 안의 부착물)도 모두 합산됩니다.

例如：M4A1 基础 10 个、瞄准镜 2 个、弹匣 1 个時，设為 true 则共需 13 个狗牌。

---

## 配置示例

```json
{
  "Version": 8,
  "Enabled": true,
  "UseDateRange": false,
  "UseWeekendOnly": false,
  "StartDate": "",
  "EndDate": "",
  "TimeZone": "UTC",
  "IncludeAttachmentsPrice": false,
  "TradeConditions": {
    "Enabled": 1,
    "PlayerDogtag": { ... },
    "AIDogtag": { ... }
  }
}
```

[交易条件 (TradeConditions) →](TradeConditions)
