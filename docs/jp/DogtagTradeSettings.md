# ドッグタグ取引設定 (DogtagTradeSettings)

**ファイルパス:** `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json`

## 基本設定項目

| 項目 | タイプ | デフォルト | 説明 |
|------|------|--------|------|
| `Enabled` | bool | true | ドッグタグ取引システム全体の有効化（1=ON、0=OFF） |
| `UseDateRange` | bool | false | 日付範囲の使用有無 |
| `UseWeekendOnly` | bool | false | 週末のみ取引可能か |
| `StartDate` | string | "" | 取引開始日 (YYYY/MM/DD) |
| `EndDate` | string | "" | 取引終了日 (YYYY/MM/DD) |
| `TimeZone` | string | "UTC" | タイムゾーン（例: KST、UTC） |
| `IncludeAttachmentsPrice` | bool | false | 付属品価格をドッグタグ数に含めるか |

---

## 日付/時間制限設定（詳細動作）

取引可否は**サーバー基準**で判断されます。`IsTradeEnabled()` が `false` の場合、取引は完全にブロックされます。

### UseDateRange

- **false:** 日付制限なし。`StartDate`、`EndDate` は無視されます。
- **true:** `StartDate`～`EndDate` の範囲内でのみ取引可能。

### StartDate / EndDate

- **形式:** `YYYY/MM/DD`（例: `2025/03/01`）
- **UseDateRange が true の場合:**
  - StartDate のみ: 現在日付が開始日と等しいかそれ以降の時のみ取引可能
  - EndDate のみ: 現在日付が終了日と等しいかそれ以前の時のみ取引可能
  - 両方: 現在日付が開始日と終了日の間（両方含む）の時のみ取引可能
  - 両方空: 日付制限なし（UseDateRange が true でも）

### TimeZone

- `StartDate`、`EndDate`、`UseWeekendOnly` の**日付/曜日計算**に使用されるタイムゾーンです。
- サーバー UTC 時間をこのタイムゾーンに変換してから比較します。

**サポート値（大文字小文字区別）:**

| 値 | 説明 |
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

- **true:** **土曜・日曜**のみ取引可能（該当 TimeZone 基準）。
- **注意:** `UseWeekendOnly` を使用するには**必ず**以下が全て満たされる必要があります。
  - `UseDateRange` を true に設定
  - `StartDate` に日付値を入力
  - `EndDate` に日付値を入力
- 上記条件のいずれかが欠けると取引は常にブロックされます。

### 動作順序まとめ

1. UseDateRange が false の場合: 日付/週末制限なし
2. UseDateRange が true の場合: StartDate と EndDate の範囲を確認
3. UseWeekendOnly が true の場合: 上記範囲内で**土・日曜のみ**取引可能

### 日付設定例

| 目的 | UseDateRange | StartDate | EndDate | UseWeekendOnly | TimeZone |
|------|--------------|-----------|---------|----------------|----------|
| 制限なし | false | "" | "" | false | - |
| 3月のみ | true | "2025/03/01" | "2025/03/31" | false | "KST" |
| 3月の週末のみ | true | "2025/03/01" | "2025/03/31" | true | "KST" |
| 特定日から無制限 | true | "2025/03/15" | "" | false | "UTC" |

---

## IncludeAttachmentsPrice（付属品価格詳細動作）

**false:** アイテムの `NeedDogtagAmount` のみを使用。付属品は個数に含まれません。

**true:** 아이템 기본 가격에 부착물 가격을 더합니다. 부착물도 각각 거래 아이템 목록에 등록된 경우 그 `NeedDogtagAmount`가 합산됩니다. 재귀 부착물(부착물 안의 부착물)도 모두 합산됩니다.

例: M4A1 基本10個、スコープ2個、マガジン1個装着時、true なら合計13個のドッグタグが必要です。

---

## 設定例

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

[取引条件 (TradeConditions) →](TradeConditions)
