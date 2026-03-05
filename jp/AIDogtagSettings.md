# AI ドッグタグ設定 (AIDogtagSettings)

**ファイルパス:** `$profile:EnhancedDogtag\Config\AIDogtagSettings.json`

AI がドッグタグを所持できるか、AI ドッグタグをルーティングできるかを制御する設定ファイルです。

---

## 設定項目

| 項目 | タイプ | デフォルト | 説明 |
|------|------|--------|------|
| `Version` | int | 2 | 設定バージョン（変更非推奨） |
| `AIDogtagEnabled` | bool | true | AI ドッグタグ機能の有効化（AI がドッグタグを所持できるか） |
| `AIDogtagLootingEnabled` | bool | true | AI ドッグタグルーティング許可（AI 死体からドッグタグをルーティングできるか） |

### 詳細動作

**AIDogtagEnabled:** false の場合、AI はドッグタグを所持しません。AI 死体からドッグタグは出ません。

**AIDogtagLootingEnabled:** false の場合、AI 死体にドッグタグがあってもプレイヤーはルーティングできません。AIDogtagEnabled が true でもルーティングはブロックされます。

両設定が true である必要があり、AI ドッグタグを取得し、ドッグタグ取引で AI ドッグタグを使用できます。

---

## 設定例

```json
{
  "Version": 2,
  "AIDogtagEnabled": true,
  "AIDogtagLootingEnabled": true
}
```

---

## DogtagSettings との関係

| 파일 | 용도 |
|------|------|
| **DogtagSettings.json** | プレイヤードッグタグ基本動作（ルーティング、Death Wish等） |
| **AIDogtagSettings.json** | AI ドッグタグ動作（AI 所持/ルーティング許可） |

AI ドッグタグは取引システムで使用可能です。[取引条件 (TradeConditions)](TradeConditions) の `AIDogtag` 設定と共に使用されます。

[ドッグタグ基本設定 →](DogtagSettings)