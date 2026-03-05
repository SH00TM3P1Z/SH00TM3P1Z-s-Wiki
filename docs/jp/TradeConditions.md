# 取引条件 (TradeConditions)

`DogtagTradeSettings.json` 内の `TradeConditions` セクションで**グローバル取引条件**を定義します。

## 構造

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

## Enabled（グローバル）

| 値 | 説明 |
|----|------|
| 1 | グローバル取引条件を有効化。全アイテムにこの条件を適用（ただしアイテム別条件があれば該当アイテムは除外） |
| 0 | グローバル取引条件を無効化。アイテム json に `ItemTradeConditions.Enabled=1` の場合のみ取引可能 |

> **取引可能条件:** グローバル `Enabled` またはアイテム `ItemTradeConditions.Enabled` のいずれかが 1 なら該当条件で取引可能。両方 0 なら取引不可、「Trade Fail」通知が表示されます。

---

## PlayerDogtag（プレイヤードッグタグ）

| 項目 | タイプ | 説明 |
|------|------|------|
| `Enabled` | bool | プレイヤードッグタグでの取引許可（1=許可、0=不許可） |
| `NeedDeathWishDogtag` | bool | Death Wish ドッグタグのみ許可（1=Death Wish のみ、0=通常プレイヤードッグタグ含む） |
| `RequireSelfKill` | bool | 自分が直接倒したドッグタグのみ許可（1=自分キルのみ、0=誰が倒しても許可） |
| `RequireAny` | bool | （未使用） |
| `AllowSuicideDogtag` | bool | 自殺で得たドッグタグを許可（1=許可、0=除外） |

### PlayerDogtag 詳細動作

**NeedDeathWishDogtag:** 1 の場合、Death Wish ドッグタグのみ取引に使用可能。通常プレイヤードッグタグは使用不可。0 の場合、通常ドッグタグと Death Wish ドッグタグの両方使用可能。

**RequireSelfKill:** 1 の場合、自分が直接倒したドッグタグのみ取引に使用可能。他のプレイヤーが倒したドッグタグを拾ったものは使用不可。0 の場合、誰が倒しても使用可能。

**AllowSuicideDogtag:** 1 の場合、自殺で得たドッグタグも取引に使用可能。0 の場合、自殺ドッグタグは取引から除外されます。

---

## AIDogtag（AI ドッグタグ）

| 項目 | タイプ | 説明 |
|------|------|------|
| `Enabled` | bool | AI ドッグタグでの取引許可（1=許可、0=不許可） |
| `RequireSelfKill` | bool | 自分が直接倒した AI ドッグタグのみ許可（1=自分キルのみ、0=誰が倒しても許可） |
| `RequireAny` | bool | （未使用） |

### AIDogtag 詳細動作

**RequireSelfKill:** PlayerDogtag と同様。1 の場合、自分が直接倒した AI ドッグタグのみ。0 の場合、誰が倒しても使用可能。

---

## 条件適用優先順位

| グローバル Enabled | アイテム ItemTradeConditions.Enabled | 適用される条件 |
|--------------|-----------------------------------|----------------|
| 1 | 0 | グローバル TradeConditions（アイテムに別条件がなければグローバル使用） |
| 0 | 1 | アイテム ItemTradeConditions（該当アイテムのみ別条件使用） |
| 1 | 1 | アイテム ItemTradeConditions（アイテム別条件がグローバルより優先） |
| 0 | 0 | 取引不可 (TRADE_FAIL) |

アイテムに `ItemTradeConditions` があり `Enabled` が 1 の場合、そのアイテムはグローバル設定を無視し、該当アイテムの PlayerDogtag、AIDogtag 条件のみを使用します。

[アイテム別取引条件 →](ItemTradeConditions)