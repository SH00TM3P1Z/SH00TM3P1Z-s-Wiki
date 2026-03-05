# 狗牌基本設定 (DogtagSettings)

**文件路径：** `$profile:EnhancedDogtag\Config\DogtagSettings.json`

此配置文件定义狗牌系统的基本行為（拾取、Death Wish、显示选项等）。与**狗牌交易**分开，控制狗牌物品本身的行為。

---

## 顶层設定

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `Version` | int | 10 | 配置版本（不建议修改） |
| `DogtagEnabled` | bool | true | 启用狗牌系统（1=开，0=关） |

---

## GeneralDogtagSettings（一般狗牌設定）

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `AllowDogtagLooting` | bool | true | 允许死亡時拾取狗牌 |
| `DisableSuicideDogtagLooting` | bool | false | 禁用自杀時拾取狗牌 |
| `EnableDogtagRespawnDelay` | bool | false | 启用重生后狗牌拾取延迟 |
| `DogtagRespawnDelaySeconds` | int | 300 | 重生后至可拾取狗牌的延迟時间（秒） |
| `ShowPlayerKills` | bool | true | 显示玩家击杀数 |
| `ShowAIKills` | bool | true | 显示 AI 击杀数 |
| `DistanceUnit` | int | 0 | 距离单位（0=米，1=码） |
| `ShowDistance` | bool | true | 显示距离 |
| `KeepKillCountsOnDeath` | bool | true | 死亡時保留击杀数 |

### GeneralDogtagSettings 详细行為

**AllowDogtagLooting：** 设為 false 時无人可从尸体拾取狗牌。设為 true 時满足其他条件即可拾取。

**DisableSuicideDogtagLooting：** 设為 true 時，自杀玩家的狗牌永远无法拾取。设為 false 時自杀狗牌也可拾取（取决于其他条件）。

**EnableDogtagRespawnDelay / DogtagRespawnDelaySeconds：** 仅适用于自杀死亡。设為 true 時，死亡后需经过指定秒数（默认 300 秒，5 分钟）才能拾取该狗牌。设為 false 時自杀狗牌可立即拾取。

**ShowPlayerKills, ShowAIKills：** 切换狗牌物品上显示的玩家击杀数和 AI 击杀数。

**DistanceUnit：** 0=米(m)，1=码(yd)，用于在玩家死亡狗牌信息中显示距离。

**KeepKillCountsOnDeath：** 设為 true 時，死亡時之前生存期间的击杀数会保存到 DogtagLifetime.json 并反映到新狗牌。设為 false 時死亡時击杀数会重置。

---

## DeathWishSettings（Death Wish 設定）

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `DeathWishEnabled` | bool | true | 启用 Death Wish 功能 |
| `ShowLifetimeToDeathWish` | bool | true | 显示至 Death Wish 的生存時间 |
| `ShowPlayerKillsToDeathWish` | bool | true | 显示至 Death Wish 的玩家击杀数 |
| `ShowAIKillsToDeathWish` | bool | true | 显示至 Death Wish 的 AI 击杀数 |
| `DeathWishConditionType` | int | 0 | Death Wish 击杀条件类型（0=玩家和 AI，1=玩家，2=AI） |
| `KeepDeathWishOnDeath` | bool | true | 死亡時保留 Death Wish 等级 |
| `ShowSpecialPhrase` | int | 1 | Death Wish 特殊语句显示模式 |
| `DeathWishRespawnEnabled` | bool | true | 启用 Death Wish 重生系统（在最后死亡位置重生） |

### DeathWishSettings 详细行為

**DeathWishConditionType：** Death Wish 升级所需的击杀条件。
- 0：玩家击杀数和 AI 击杀数均需达到目标才能升级
- 1：仅玩家击杀数达到目标即可升级（忽略 AI 击杀）
- 2：仅 AI 击杀数达到目标即可升级（忽略玩家击杀）

**KeepDeathWishOnDeath：** 设為 true 時，死亡重生后仍保留之前的 Death Wish 等级。保存到 DogtagLifetime.json。

**DeathWishRespawnEnabled：** 设為 true 時，根据 Death Wish 等级应用在最后死亡位置重生的概率。使用 DeathWishRespawnSettings 的概率。

---

## NeedDeathWishTimeSettings（Death Wish 時间条件）

所有時间值均為**秒**。（例如：21600=6 小時）

**行為：** 升至各级别需生存相应時间。NeedDeathWishInitialTime 為从普通狗牌变為 Death Wish 所需時间，之后各级别時间為升至下一级所需生存時间。除時间条件外，还需满足击杀数条件（根据 DeathWishConditionType）。

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `NeedDeathWishInitialTime` | int | 21600 | 达到基础 Death Wish 所需生存時间 |
| `NeedDeathWishLevel1Time` | int | 36000 | 达到 1 级所需生存時间 |
| `NeedDeathWishLevel2Time` | int | 54000 | 达到 2 级所需生存時间 |
| `NeedDeathWishLevel3Time` | int | 72000 | 达到 3 级所需生存時间 |
| `NeedDeathWishLevel4Time` | int | 86400 | 达到 4 级所需生存時间 |
| `NeedDeathWishLevel5Time` | int | 129600 | 达到 5 级所需生存時间 |

---

## NeedDeathWishPlayerKillsSettings（Death Wish 升级玩家击杀数条件）

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `NeedDeathWishPlayerKills1` | int | 50 | 达到 1 级所需玩家击杀数 |
| `NeedDeathWishPlayerKills2` | int | 100 | 达到 2 级所需玩家击杀数 |
| `NeedDeathWishPlayerKills3` | int | 200 | 达到 3 级所需玩家击杀数 |
| `NeedDeathWishPlayerKills4` | int | 300 | 达到 4 级所需玩家击杀数 |
| `NeedDeathWishPlayerKills5` | int | 500 | 达到 5 级所需玩家击杀数 |

---

## NeedDeathWishAIKillsSettings（Death Wish 升级 AI 击杀数条件）

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `NeedDeathWishAIKills1` | int | 50 | 达到 1 级所需 AI 击杀数 |
| `NeedDeathWishAIKills2` | int | 100 | 达到 2 级所需 AI 击杀数 |
| `NeedDeathWishAIKills3` | int | 200 | 达到 3 级所需 AI 击杀数 |
| `NeedDeathWishAIKills4` | int | 300 | 达到 4 级所需 AI 击杀数 |
| `NeedDeathWishAIKills5` | int | 500 | 达到 5 级所需 AI 击杀数 |

---

## DeathWishRespawnSettings（Death Wish 重生概率）

Death Wish 重生系统，各 Death Wish 等级在最后死亡位置重生的概率（%）。

**行為：** 死亡時生成 0 到 99 的随机数，若小于该等级概率则在最后死亡位置重生。例如 DeathWishRespawnChance3 為 50 则 50% 概率重生。100 则始终重生。

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `DeathWishRespawnChance1` | int | 10 | 1 级重生概率 (%) |
| `DeathWishRespawnChance2` | int | 30 | 2 级重生概率 (%) |
| `DeathWishRespawnChance3` | int | 50 | 3 级重生概率 (%) |
| `DeathWishRespawnChance4` | int | 75 | 4 级重生概率 (%) |
| `DeathWishRespawnChance5` | int | 100 | 5 级重生概率 (%) |

---

## 配置示例

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

## 与 DogtagTradeSettings 的关系

| 文件 | 用途 |
|------|------|
| **DogtagSettings.json** | 狗牌基本行為（拾取、Death Wish、显示等） |
| **DogtagTradeSettings.json** | 狗牌交易系统（物品交换、条件等） |

使用`狗牌交易商店系统`需将 `DogtagSettings.json` 中的 `DogtagEnabled` 设為 `true`。

[狗牌交易設定 →](DogtagTradeSettings)