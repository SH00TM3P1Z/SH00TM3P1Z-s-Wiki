# 독택 기본 설정 (DogtagSettings)

**파일 경로:** `$profile:EnhancedDogtag\Config\DogtagSettings.json`

독택 시스템의 기본 동작(루팅, 데스 위시, 표시 옵션 등)을 정의하는 설정 파일입니다. **독택 거래**와는 별도로, 독택 아이템 자체의 동작을 제어합니다.

---

## 최상위 설정

| 항목 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `Version` | int | 10 | 설정 버전 (수정 권장하지 않음) |
| `DogtagEnabled` | bool | true | 독택 시스템 전체 활성화 (1=켜기, 0=끄기) |

---

## GeneralDogtagSettings (일반 독택 설정)

| 항목 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `AllowDogtagLooting` | bool | true | 사망 시 독택 루팅 허용 |
| `DisableSuicideDogtagLooting` | bool | false | 자살 시 독택 루팅 비활성화 |
| `EnableDogtagRespawnDelay` | bool | false | 리스폰 후 독택 루팅 지연 사용 |
| `DogtagRespawnDelaySeconds` | int | 300 | 스폰 후 독택 루팅 가능까지의 지연 시간(초) |
| `ShowPlayerKills` | bool | true | 플레이어 킬 수 표시 |
| `ShowAIKills` | bool | true | AI 킬 수 표시 |
| `DistanceUnit` | int | 0 | 거리 단위 (0=미터, 1=야드) |
| `ShowDistance` | bool | true | 거리 표시 |
| `KeepKillCountsOnDeath` | bool | true | 사망 시 킬 카운트 유지 |

### GeneralDogtagSettings 세부 동작

**AllowDogtagLooting:** false로 두면 아무도 시체에서 독택을 주울 수 없습니다. true면 다른 조건을 만족할 때 루팅 가능합니다.

**DisableSuicideDogtagLooting:** true면 자살로 죽은 플레이어의 독택은 절대 루팅할 수 없습니다. false면 자살 독택도 루팅 가능합니다(다른 조건에 따라).

**EnableDogtagRespawnDelay / DogtagRespawnDelaySeconds:** 자살로 죽은 경우에만 적용됩니다. true로 두면 사망 후 지정한 초(기본 300초, 5분)가 지나야 그 독택을 루팅할 수 있습니다. false면 자살 독택도 즉시 루팅 가능합니다.

**ShowPlayerKills, ShowAIKills:** 독택 아이템에 표시되는 플레이어 킬 수, AI 킬 수를 켜거나 끕니다.

**DistanceUnit:** 0이면 미터(m), 1이면 야드(yd)로 플레이어의 사망 독택 정보에 거리를 표시합니다.

**KeepKillCountsOnDeath:** true면 사망 시 이전 생존 동안의 킬 수가 DogtagLifetime.json에 저장되고, 새 독택에 반영됩니다. false면 사망 시 킬 수가 초기화됩니다.

---

## DeathWishSettings (데스 위시 설정)

| 항목 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `DeathWishEnabled` | bool | true | 데스 위시 기능 활성화 |
| `ShowLifetimeToDeathWish` | bool | true | 데스 위시까지 생존 시간 표시 |
| `ShowPlayerKillsToDeathWish` | bool | true | 데스 위시까지 플레이어 킬 수 표시 |
| `ShowAIKillsToDeathWish` | bool | true | 데스 위시까지 AI 킬 수 표시 |
| `DeathWishConditionType` | int | 0 | 데스 위시 킬 조건 타입 (0 = 플레이어와 AI, 1 = 플레이어, 2 = AI) |
| `KeepDeathWishOnDeath` | bool | true | 사망 시 데스 위시 레벨 유지 |
| `ShowSpecialPhrase` | int | 1 | 데스 위시 특수 문구 표시 모드 |
| `DeathWishRespawnEnabled` | bool | true | 데스 위시 리스폰 시스템 활성화(플레이어의 마지막 사망 위치에서 리스폰)|

### DeathWishSettings 세부 동작

**DeathWishConditionType:** 데스 위시 레벨 업에 필요한 킬 조건입니다.
- 0: 플레이어 킬 수와 AI 킬 수 둘 다 목표치를 채워야 레벨 업
- 1: 플레이어 킬 수만 목표치를 채우면 레벨 업 (AI 킬은 무시)
- 2: AI 킬 수만 목표치를 채우면 레벨 업 (플레이어 킬은 무시)

**KeepDeathWishOnDeath:** true면 사망 후 리스폰해도 이전 데스 위시 레벨이 유지됩니다. DogtagLifetime.json에 저장됩니다.

**DeathWishRespawnEnabled:** true면 데스 위시 레벨에 따라 마지막 사망 위치에서 리스폰될 확률이 적용됩니다. DeathWishRespawnSettings의 확률을 사용합니다.

---

## NeedDeathWishTimeSettings (데스 위시 시간 조건)

모든 시간 값은 **초 단위**입니다. (예: 21600은 6시간)

**동작:** 각 레벨로 올라가려면 해당 시간만큼 생존해야 합니다. NeedDeathWishInitialTime은 일반 독택에서 데스 위시로 바뀌는 데 필요한 시간이고, 이후 레벨별 시간은 그 다음 레벨로 올라가는 데 필요한 생존 시간입니다. 시간 조건과 함께 킬 수 조건(DeathWishConditionType에 따라)도 충족해야 합니다.

| 항목 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `NeedDeathWishInitialTime` | int | 21600 | 기본 데스 위시까지 필요한 생존 시간 |
| `NeedDeathWishLevel1Time` | int | 36000 | 레벨 1까지 필요한 생존 시간 |
| `NeedDeathWishLevel2Time` | int | 54000 | 레벨 2까지 필요한 생존 시간 |
| `NeedDeathWishLevel3Time` | int | 72000 | 레벨 3까지 필요한 생존 시간 |
| `NeedDeathWishLevel4Time` | int | 86400 | 레벨 4까지 필요한 생존 시간 |
| `NeedDeathWishLevel5Time` | int | 129600 | 레벨 5까지 필요한 생존 시간 |

---

## NeedDeathWishPlayerKillsSettings (데스 위시 레벨 업 플레이어 킬 수 조건)

| 항목 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `NeedDeathWishPlayerKills1` | int | 50 | 레벨 1까지 필요한 플레이어 킬 수 |
| `NeedDeathWishPlayerKills2` | int | 100 | 레벨 2까지 필요한 플레이어 킬 수 |
| `NeedDeathWishPlayerKills3` | int | 200 | 레벨 3까지 필요한 플레이어 킬 수 |
| `NeedDeathWishPlayerKills4` | int | 300 | 레벨 4까지 필요한 플레이어 킬 수 |
| `NeedDeathWishPlayerKills5` | int | 500 | 레벨 5까지 필요한 플레이어 킬 수 |

---

## NeedDeathWishAIKillsSettings (데스 위시 레벨 업 AI 킬 수 조건)

| 항목 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `NeedDeathWishAIKills1` | int | 50 | 레벨 1까지 필요한 AI 킬 수 |
| `NeedDeathWishAIKills2` | int | 100 | 레벨 2까지 필요한 AI 킬 수 |
| `NeedDeathWishAIKills3` | int | 200 | 레벨 3까지 필요한 AI 킬 수 |
| `NeedDeathWishAIKills4` | int | 300 | 레벨 4까지 필요한 AI 킬 수 |
| `NeedDeathWishAIKills5` | int | 500 | 레벨 5까지 필요한 AI 킬 수 |

---

## DeathWishRespawnSettings (데스 위시 리스폰 확률)

데스 위시 리스폰 시스템으로, 각 데스 위시 레벨별 마지막 사망 위치로 리스폰될 확률(%)입니다.

**동작:** 사망 시 0에서 99 사이의 난수가 생성되고, 해당 레벨의 확률보다 작으면 마지막 사망 위치에서 리스폰됩니다. 예를 들어 DeathWishRespawnChance3이 50이면 50% 확률로 리스폰됩니다. 100이면 항상 리스폰됩니다.

| 항목 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `DeathWishRespawnChance1` | int | 10 | 레벨 1 리스폰 확률 (%) |
| `DeathWishRespawnChance2` | int | 30 | 레벨 2 리스폰 확률 (%) |
| `DeathWishRespawnChance3` | int | 50 | 레벨 3 리스폰 확률 (%) |
| `DeathWishRespawnChance4` | int | 75 | 레벨 4 리스폰 확률 (%) |
| `DeathWishRespawnChance5` | int | 100 | 레벨 5 리스폰 확률 (%) |

---

## 설정 예시

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

## DogtagTradeSettings와의 관계

| 파일 | 용도 |
|------|------|
| **DogtagSettings.json** | 독택 기본 동작 (루팅, 데스 위시, 표시 등) |
| **DogtagTradeSettings.json** | 독택 거래 시스템 (아이템 교환, 조건 등) |

`독택 거래 상점 시스템`을 사용하려면 `DogtagSettings.json`의 `DogtagEnabled`가 `true`여야 합니다.

[독택 거래 설정 →](DogtagTradeSettings)