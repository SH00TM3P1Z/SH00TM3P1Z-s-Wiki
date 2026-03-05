# 아이템별 거래 조건 (ItemTradeConditions)

각 **거래 아이템 JSON** 파일 내부에 `ItemTradeConditions`를 넣어, **해당 아이템만** 다른 거래 조건을 적용할 수 있습니다.

## 사용 위치

카테고리 폴더 내 JSON 파일 (`$profile:EnhancedDogtag\Config\Category\{카테고리}\*.json`)

## 구조

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

## Enabled (아이템별)

| 값 | 설명 |
|----|------|
| 1 | 이 아이템은 **전역 TradeConditions를 무시**하고, 아래 PlayerDogtag/AIDogtag 조건 사용 |
| 0 | 이 아이템은 전역 TradeConditions 사용 (ItemTradeConditions 없음과 동일) |

---

## PlayerDogtag / AIDogtag

전역 `TradeConditions`의 `PlayerDogtag`, `AIDogtag`와 동일한 구조입니다.

| 항목 | 설명 |
|------|------|
| `Enabled` | 해당 독택 타입 허용 여부 |
| `NeedDeathWishDogtag` | (PlayerDogtag만) 데스 위시 독택만 허용 |
| `RequireSelfKill` | 본인이 직접 죽인 독택만 허용 |
| `AllowSuicideDogtag` | (PlayerDogtag만) 자살 독택 허용 |

### 세부 동작

`ItemTradeConditions.Enabled`가 1인 아이템은 전역 TradeConditions를 사용하지 않고, 이 아이템에 설정된 PlayerDogtag, AIDogtag 조건만 적용됩니다. 예를 들어 전역에서는 AI 독택을 허용하지만, 특정 M4A1 아이템만 데스 위시 플레이어 독택으로만 거래되게 할 수 있습니다.

---

## 예시: 데스 위시 전용 M4A1

```json
{
  "ItemClassName": "M4A1",
  "CustomName": "데스 위시 Rifle",
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

- M4A1은 **데스 위시 플레이어 독택 10개**로만 거래 가능
- AI 독택은 사용 불가 (`AIDogtag.Enabled: 0`)

---

## UI 동작

- **아이템 리스트:** 해당 아이템별로 필요한 독택 타입(일반/데스 위시/AI) 표시
- **선택 시:** 액션 패널의 독택 프리뷰와 인벤토리 독택 개수가 해당 아이템 조건에 맞게 갱신

[거래 아이템 목록 →](TradeItemList)