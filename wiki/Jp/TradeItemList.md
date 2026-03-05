# 取引アイテム一覧

**フォルダパス:** `$profile:EnhancedDogtag\Config\Category\`

## フォルダ構造

```
Config/
└── Category/
    ├── Weapons/          ← カテゴリフォルダ
    │   ├── Rifles.json   ← サブカテゴリ JSON
    │   └── Pistols.json
    ├── Gear/
    │   └── Backpacks.json
    └── ...
```

## アイテム JSON 構造

各 JSON ファイルは**配列**形式です。

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

## 項目説明

| 項目 | タイプ | 必須 | 説明 |
|------|------|------|------|
| `ItemClassName` | string | ✓ | DayZ アイテムクラス名（例: AKM、M4A1） |
| `CustomName` | string | | 表示名（空ならゲームデフォルト名を使用） |
| `NeedDogtagAmount` | int | ✓ | 取引に必要なドッグタグ数 |
| `Attachments` | array | | 付属品リスト（任意） |
| `ItemTradeConditions` | object | | アイテム別取引条件（任意） |

### 項目詳細動作

**ItemClassName:** DayZ ゲーム内アイテムクラス名。不正な名前だとアイテムが生成されません。

**CustomName:** 空ならゲームデフォルト名を使用。値を入れると取引 UI にこの名前で表示されます。

**NeedDogtagAmount:** このアイテム1つを取引するのに必要なドッグタグ数。DogtagTradeSettings の IncludeAttachmentsPrice が true の場合、付属品価格がここに加算されます。

**Attachments:** このアイテムに装着する付属品リスト。付属品も取引アイテム一覧に登録されている場合、IncludeAttachmentsPrice が true の時に価格が合算されます。

**ItemTradeConditions:** なしまたは Enabled が 0 ならグローバル TradeConditions を使用。Enabled が 1 ならこのアイテムのみ別の取引条件を使用。

---

## Attachments 例

```json
"Attachments": [
  {
    "ItemClassName": "AK_RailHndguard",
    "Attachments": []
  }
]
```

---

## 再帰付属品例

付属品内に別の付属品をネストできます。Assault Rifle.json の SCAR-L 全体設定例です。

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

`SCAR_Polymer_Buttstock_FDE` はそれ自体に `Retractable_Buttstock` と `Cheek` の2つの付属品を持ちます。このように付属品→付属品→…の形で階層を続けられます。

---

## 参考

- **カテゴリ/サブカテゴリ** 名はフォルダ名と JSON ファイル名（拡張子除く）で決定されます。
- `ItemTradeConditions` がなしまたは `Enabled: 0` の場合、グローバル `TradeConditions` を使用します。