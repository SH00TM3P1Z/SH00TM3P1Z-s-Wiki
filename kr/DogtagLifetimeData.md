# 독택 라이프타임 데이터 (DogtagLifetime.json)

**파일 경로:** `$profile:EnhancedDogtag\Data\DogtagLifetime.json`

플레이어별 독택 생존 시간, 킬 수, 데스 위시 레벨 등을 **서버가 자동으로 저장**하는 데이터 파일입니다. 설정 파일이 아니라 **런타임 데이터**이므로 수동 편집을 권장하지 않습니다.

---

## 용도

- **데스 위시 유지:** `KeepDeathWishOnDeath`가 켜져 있을 때, 사망 시 데스 위시 레벨을 다음 리스폰에 복원
- **킬 카운트 유지:** `KeepKillCountsOnDeath`가 켜져 있을 때, 사망 시 플레이어/AI 킬 수를 새 독택에 반영
- **초기화:** 모든 플레이어의 독택 정보를 초기화
- 플레이어 사망 시 생성되는 독택에 이전 데이터를 적용

---

## JSON 구조

```json
{
    "PlayerEntries": [
        {
            "PlayerName": "Ya-Mahaba",
            "PlayerId": "d2xG6LXwQPwK10j4pPC2LnItlC7RxZcmRCLyyqJaRNk=",
            "LifetimeSeconds": 3670,
            "TagType": "SMPZ_Dogtag_DeathWish_5",
            "BloodType": "None",
            "PlayerKillCount": 29,
            "AIKillCount": 819,
            "LastUpdateTime": "2026-3-5 14:39:50"
        }
    ]
}
```

---

## PlayerEntries 항목 설명

| 항목 | 타입 | 설명 |
|------|------|------|
| `PlayerName` | string | 플레이어 이름 |
| `PlayerId` | string | 플레이어 고유 식별자 (Base64 인코딩) |
| `LifetimeSeconds` | int | 마지막 생존 시간(초) |
| `TagType` | string | 독택 타입 (예: `SMPZ_Dogtag_DeathWish_1` ~ `5`, 기본 독택 등) |
| `BloodType` | string | 혈액형 (O+, O-, A+, A-, B+, B-, AB+, AB-, None) |
| `PlayerKillCount` | int | 플레이어 킬 수 |
| `AIKillCount` | int | AI 킬 수 |
| `LastUpdateTime` | string | 마지막 업데이트 시각 |

---

## 참고 사항

- **자동 생성:** 서버가 플레이어 사망 또는 독택 생성 시 자동으로 갱신합니다.
- **최대 1000명:** 저장되는 플레이어 수는 최대 1000명이며, 생존 시간이 짧은 순으로 오래된 항목이 삭제됩니다.
- **수동 편집 비권장:** 잘못된 형식이나 데이터는 오동작을 유발할 수 있습니다.
- **Config vs Data:** `Config\` 폴더는 설정, `Data\` 폴더는 런타임 데이터입니다.

---

## 세부 동작

**LifetimeSeconds:** 플레이어가 마지막으로 생존한 시간(초)입니다. 사망 시점의 생존 시간이 저장됩니다.

**TagType:** 다음 리스폰 시 생성될 독택 타입입니다. `SMPZ_Dogtag_DeathWish_1`부터 `5`까지, 또는 기본 독택 타입이 저장됩니다.

**PlayerKillCount, AIKillCount:** KeepKillCountsOnDeath가 true일 때 새 독택에 반영될 킬 수입니다.

**KeepDeathWishOnDeath 연동:** 이 값이 true면 사망 후 DogtagLifetime.json의 TagType, 킬 수 등이 유지되고, 다음 리스폰 시 새 독택에 적용됩니다.

[독택 기본 설정 →](DogtagSettings)