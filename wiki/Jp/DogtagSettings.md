# ドッグタグ基本設定 (DogtagSettings)

**ファイルパス:** `$profile:EnhancedDogtag\Config\DogtagSettings.json`

この設定ファイルはドッグタグシステムの基本動作（ルーティング、Death Wish、表示オプション等）を定義します。**ドッグタグ取引**とは別に、ドッグタグアイテム自体の動作を制御します。

---

## トップレベル設定

| 項目 | タイプ | デフォルト | 説明 |
|------|------|--------|------|
| `Version` | int | 10 | 設定バージョン（変更非推奨） |
| `DogtagEnabled` | bool | true | ドッグタグシステム全体の有効化（1=ON、0=OFF） |

---

## GeneralDogtagSettings（一般ドッグタグ設定）

| 項目 | タイプ | デフォルト | 説明 |
|------|------|--------|------|
| `AllowDogtagLooting` | bool | true | 死亡時のドッグタグルーティング許可 |
| `DisableSuicideDogtagLooting` | bool | false | 自殺時のドッグタグルーティング無効化 |
| `EnableDogtagRespawnDelay` | bool | false | リスポーン後のドッグタグルーティング遅延を有効化 |
| `DogtagRespawnDelaySeconds` | int | 300 | スポーン後ドッグタグルーティング可能までの遅延時間（秒） |
| `ShowPlayerKills` | bool | true | プレイヤーキル数表示 |
| `ShowAIKills` | bool | true | AI キル数表示 |
| `DistanceUnit` | int | 0 | 距離単位（0=メートル、1=ヤード） |
| `ShowDistance` | bool | true | 距離表示 |
| `KeepKillCountsOnDeath` | bool | true | 死亡時キルカウント維持 |

### GeneralDogtagSettings 詳細動作

**AllowDogtagLooting:** false の場合、誰も死体からドッグタグを拾えません。true の場合、他の条件を満たせばルーティング可能です。

**DisableSuicideDogtagLooting:** true の場合、自殺したプレイヤーのドッグタグは絶対にルーティングできません。false の場合、自殺ドッグタグもルーティング可能です（他の条件による）。

**EnableDogtagRespawnDelay / DogtagRespawnDelaySeconds:** 自殺死亡の場合のみ適用。true の場合、死亡後指定秒数（デフォルト300秒、5分）経過後にのみルーティング可能。false の場合、自殺ドッグタグも即座にルーティング可能。

**ShowPlayerKills, ShowAIKills:** ドッグタグアイテムに表示されるプレイヤーキル数、AIキル数の表示をON/OFFします。

**DistanceUnit:** 0=メートル(m)、1=ヤード(yd)でプレイヤーの死亡ドッグタグ情報に距離を表示します。

**KeepKillCountsOnDeath:** true の場合、死亡時以前の生存中のキル数が DogtagLifetime.json に保存され、新しいドッグタグに反映されます。false の場合、死亡時キル数がリセットされます。

---

## DeathWishSettings（Death Wish 設定）

| 項目 | タイプ | デフォルト | 説明 |
|------|------|--------|------|
| `DeathWishEnabled` | bool | true | Death Wish 機能の有効化 |
| `ShowLifetimeToDeathWish` | bool | true | Death Wish までの生存時間表示 |
| `ShowPlayerKillsToDeathWish` | bool | true | Death Wish までのプレイヤーキル数表示 |
| `ShowAIKillsToDeathWish` | bool | true | Death Wish までのAIキル数表示 |
| `DeathWishConditionType` | int | 0 | Death Wish キル条件タイプ（0=プレイヤーとAI、1=プレイヤー、2=AI） |
| `KeepDeathWishOnDeath` | bool | true | 死亡時 Death Wish レベル維持 |
| `ShowSpecialPhrase` | int | 1 | Death Wish 特殊文言表示モード |
| `DeathWishRespawnEnabled` | bool | true | Death Wish リスポーンシステム有効化（最終死亡位置でリスポーン） |

### DeathWishSettings 詳細動作

**DeathWishConditionType:** Death Wish レベルアップに必要なキル条件です。
- 0: プレイヤーキル数とAIキル数の両方が目標値を満たす必要あり
- 1: プレイヤーキル数のみ目標値を満たせばレベルアップ（AIキルは無視）
- 2: AIキル数のみ目標値を満たせばレベルアップ（プレイヤーキルは無視）

**KeepDeathWishOnDeath:** true の場合、死亡後リスポーンしても以前の Death Wish レベルが維持されます。DogtagLifetime.json に保存されます。

**DeathWishRespawnEnabled:** true の場合、Death Wish レベルに応じて最終死亡位置でのリスポーン確率が適用されます。DeathWishRespawnSettings の確率を使用します。

---

## NeedDeathWishTimeSettings（Death Wish 時間条件）

全時間値は**秒単位**です。（例: 21600=6時間）

**動作:** 各レベルに上がるには該当時間の生存が必要。NeedDeathWishInitialTime は通常ドッグタグから Death Wish に変わるのに必要な時間。以降のレベル別時間は次のレベルに上がるのに必要な生存時間。時間条件と共にキル数条件（DeathWishConditionType による）も満たす必要あり。

| 項目 | タイプ | デフォルト | 説明 |
|------|------|--------|------|
| `NeedDeathWishInitialTime` | int | 21600 | 基本 Death Wish までに必要な生存時間 |
| `NeedDeathWishLevel1Time` | int | 36000 | レベル1までに必要な生存時間 |
| `NeedDeathWishLevel2Time` | int | 54000 | レベル2までに必要な生存時間 |
| `NeedDeathWishLevel3Time` | int | 72000 | レベル3までに必要な生存時間 |
| `NeedDeathWishLevel4Time` | int | 86400 | レベル4までに必要な生存時間 |
| `NeedDeathWishLevel5Time` | int | 129600 | レベル5までに必要な生存時間 |

---

## NeedDeathWishPlayerKillsSettings（Death Wish レベルアップ プレイヤーキル数条件）

| 項目 | タイプ | デフォルト | 説明 |
|------|------|--------|------|
| `NeedDeathWishPlayerKills1` | int | 50 | レベル1までに必要なプレイヤーキル数 |
| `NeedDeathWishPlayerKills2` | int | 100 | レベル2までに必要なプレイヤーキル数 |
| `NeedDeathWishPlayerKills3` | int | 200 | レベル3까지に必要なプレイヤーキル数 |
| `NeedDeathWishPlayerKills4` | int | 300 | レベル4までに必要なプレイヤーキル数 |
| `NeedDeathWishPlayerKills5` | int | 500 | レベル5までに必要なプレイヤーキル数 |

---

## NeedDeathWishAIKillsSettings（Death Wish レベルアップ AIキル数条件）

| 項目 | タイプ | デフォルト | 説明 |
|------|------|--------|------|
| `NeedDeathWishAIKills1` | int | 50 | レベル1までに必要なAIキル数 |
| `NeedDeathWishAIKills2` | int | 100 | レベル2までに必要なAIキル数 |
| `NeedDeathWishAIKills3` | int | 200 | レベル3までに必要なAIキル数 |
| `NeedDeathWishAIKills4` | int | 300 | レベル4までに必要なAIキル数 |
| `NeedDeathWishAIKills5` | int | 500 | レベル5までに必要なAIキル数 |

---

## DeathWishRespawnSettings（Death Wish リスポーン確率）

Death Wish リスポーンシステム。各 Death Wish レベル別の最終死亡位置でのリスポーン確率（%）です。

**動作:** 死亡時に0～99の乱数が生成され、該当レベルの確率より小さければ最終死亡位置でリスポーン。例: DeathWishRespawnChance3 が 50 なら 50% の確率でリスポーン。100 なら常にリスポーン。

| 項目 | タイプ | デフォルト | 説明 |
|------|------|--------|------|
| `DeathWishRespawnChance1` | int | 10 | レベル1 リスポーン確率 (%) |
| `DeathWishRespawnChance2` | int | 30 | レベル2 リスポーン確率 (%) |
| `DeathWishRespawnChance3` | int | 50 | レベル3 リスポーン確率 (%) |
| `DeathWishRespawnChance4` | int | 75 | レベル4 リスポーン確率 (%) |
| `DeathWishRespawnChance5` | int | 100 | レベル5 リスポーン確率 (%) |

---

## 設定例

```json
{
  "Version": 10,
  "DogtagEnabled": true,
  "GeneralDogtagSettings": {
    "AllowDogtagLooting": true,
    "DisableSuicideDogtagLooting": false,
    "EnableDogtagRespawnDelay": false,
    "DogtagRespawnDelaySeconds": 300,
    "ShowPlayerKills": true,
    "ShowAIKills": true,
    "DistanceUnit": 0,
    "ShowDistance": true,
    "KeepKillCountsOnDeath": true
  },
  "DeathWishSettings": {
    "DeathWishEnabled": true,
    "ShowLifetimeToDeathWish": true,
    "ShowPlayerKillsToDeathWish": true,
    "ShowAIKillsToDeathWish": true,
    "DeathWishConditionType": 0,
    "KeepDeathWishOnDeath": true,
    "ShowSpecialPhrase": 1,
    "DeathWishRespawnEnabled": true
  },
  "NeedDeathWishTimeSettings": {
    "NeedDeathWishInitialTime": 21600,
    "NeedDeathWishLevel1Time": 36000,
    "NeedDeathWishLevel2Time": 54000,
    "NeedDeathWishLevel3Time": 72000,
    "NeedDeathWishLevel4Time": 86400,
    "NeedDeathWishLevel5Time": 129600
  },
  "NeedDeathWishPlayerKillsSettings": {
    "NeedDeathWishPlayerKills1": 50,
    "NeedDeathWishPlayerKills2": 100,
    "NeedDeathWishPlayerKills3": 200,
    "NeedDeathWishPlayerKills4": 300,
    "NeedDeathWishPlayerKills5": 500
  },
  "NeedDeathWishAIKillsSettings": {
    "NeedDeathWishAIKills1": 50,
    "NeedDeathWishAIKills2": 100,
    "NeedDeathWishAIKills3": 200,
    "NeedDeathWishAIKills4": 300,
    "NeedDeathWishAIKills5": 500
  },
  "DeathWishRespawnSettings": {
    "DeathWishRespawnChance1": 10,
    "DeathWishRespawnChance2": 30,
    "DeathWishRespawnChance3": 50,
    "DeathWishRespawnChance4": 75,
    "DeathWishRespawnChance5": 100
  }
}
```

---

## DogtagTradeSettings との関係

| ファイル | 用途 |
|------|------|
| **DogtagSettings.json** | ドッグタグ基本動作（ルーティング、Death Wish、表示等） |
| **DogtagTradeSettings.json** | ドッグタグ取引システム（アイテム交換、条件等） |

`ドッグタグ取引ショップシステム` を使用するには `DogtagSettings.json` の `DogtagEnabled` が `true` である必要があります。

[ドッグタグ取引設定 →](DogtagTradeSettings)