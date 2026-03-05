# アイテム別取引条件 (ItemTradeConditions)

各**取引アイテム JSON** ファイル内に `ItemTradeConditions` を入れ、**該当アイテムのみ**別の取引条件を適用できます。

## 使用場所

カテゴリフォルダ内の JSON ファイル（`$profile:EnhancedDogtag\Config\Category\{カテゴリ}\*.json`）

## 構造

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

## Enabled（アイテム別）

| 値 | 説明 |
|----|------|
| 1 | このアイテムは**グローバル TradeConditions を無視**し、以下の PlayerDogtag/AIDogtag 条件を使用 |
| 0 | このアイテムはグローバル TradeConditions を使用（ItemTradeConditions なしと同じ） |

---

## PlayerDogtag / AIDogtag

グローバル `TradeConditions` の `PlayerDogtag`、`AIDogtag` と同じ構造です。

| 項目 | 説明 |
|------|------|
| `Enabled` | 該当ドッグタグタイプの許可有無 |
| `NeedDeathWishDogtag` | （PlayerDogtag のみ）Death Wish ドッグタグのみ許可 |
| `RequireSelfKill` | 自分が直接倒したドッグタグのみ許可 |
| `AllowSuicideDogtag` | （PlayerDogtag のみ）自殺ドッグタグ許可 |

### 詳細動作

`ItemTradeConditions.Enabled` が 1 のアイテムはグローバル TradeConditions を使用せず、このアイテムに設定された PlayerDogtag、AIDogtag 条件のみ適用。例: グローバルでは AI ドッグタグを許可するが、特定の M4A1 アイテムのみ Death Wish プレイヤードッグタグでのみ取引可能にできる。

---

## 例: Death Wish 専用 M4A1

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

- M4A1 は**Death Wish プレイヤードッグタグ10個**でのみ取引可能
- AI ドッグタグは使用不可（`AIDogtag.Enabled: 0`）

---

## UI 動作

- **アイテムリスト:** 該当アイテム別に必要なドッグタグタイプ（通常/Death Wish/AI）を表示
- **選択時:** アクションパネルのドッグタグプレビューとインベントリドッグタグ数が該当アイテム条件に合わせて更新

[取引アイテム一覧 →](TradeItemList)