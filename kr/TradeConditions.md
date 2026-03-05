# 거래 조건 (TradeConditions)

`DogtagTradeSettings.json` 내부의 `TradeConditions` 섹션으로, **전역 거래 조건**을 정의합니다.

## 구조

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

## Enabled (전역)

| 값 | 설명 |
|----|------|
| 1 | 전역 거래 조건 활성화. 모든 아이템에 이 조건 적용 (단, 아이템별 조건이 있으면 해당 아이템은 제외) |
| 0 | 전역 거래 조건 비활성화. 아이템 json에 `ItemTradeConditions.Enabled=1`인 경우에만 거래 가능 |

> **거래 가능 조건:** 전역 `Enabled` 또는 아이템 `ItemTradeConditions.Enabled` 둘 중 하나라도 1이면 해당 조건으로 거래 가능. 둘 다 0이면 거래 불가, "Trade Fail" 알림이 뜹니다.

---

## PlayerDogtag (플레이어 독택)

| 항목 | 타입 | 설명 |
|------|------|------|
| `Enabled` | bool | 플레이어 독택으로 거래 허용 (1=허용, 0=미허용) |
| `NeedDeathWishDogtag` | bool | 데스 위시 독택만 허용 (1=데스 위시만, 0=일반 플레이어 독택 포함) |
| `RequireSelfKill` | bool | 본인이 직접 죽인 독택만 허용 (1=본인 킬만, 0=누가 죽였든 허용) |
| `RequireAny` | bool | (미사용) |
| `AllowSuicideDogtag` | bool | 자살로 얻은 독택 허용 (1=허용, 0=제외) |

### PlayerDogtag 세부 동작

**NeedDeathWishDogtag:** 1이면 데스 위시 독택만 거래에 사용할 수 있습니다. 일반 플레이어 독택은 사용할 수 없습니다. 0이면 일반 독택과 데스 위시 독택 모두 사용 가능합니다.

**RequireSelfKill:** 1이면 본인이 직접 죽인 독택만 거래에 사용할 수 있습니다. 다른 플레이어가 죽인 독택을 주운 것은 사용할 수 없습니다. 0이면 누가 죽였든 사용 가능합니다.

**AllowSuicideDogtag:** 1이면 자살로 얻은 독택도 거래에 사용할 수 있습니다. 0이면 자살 독택은 거래에서 제외됩니다.

---

## AIDogtag (AI 독택)

| 항목 | 타입 | 설명 |
|------|------|------|
| `Enabled` | bool | AI 독택으로 거래 허용 (1=허용, 0=미허용) |
| `RequireSelfKill` | bool | 본인이 직접 죽인 AI 독택만 허용 (1=본인 킬만, 0=누가 죽였든 허용) |
| `RequireAny` | bool | (미사용) |

### AIDogtag 세부 동작

**RequireSelfKill:** PlayerDogtag와 동일합니다. 1이면 본인이 직접 죽인 AI 독택만, 0이면 누가 죽였든 사용 가능합니다.

---

## 조건 적용 우선순위

| 전역 Enabled | 아이템 ItemTradeConditions.Enabled | 적용되는 조건 |
|--------------|-----------------------------------|----------------|
| 1 | 0 | 전역 TradeConditions (아이템에 별도 조건 없으면 전역 사용) |
| 0 | 1 | 아이템 ItemTradeConditions (해당 아이템만 다른 조건 사용) |
| 1 | 1 | 아이템 ItemTradeConditions (아이템별 조건이 전역보다 우선) |
| 0 | 0 | 거래 불가 (TRADE_FAIL) |

아이템에 `ItemTradeConditions`가 있고 `Enabled`가 1이면, 그 아이템은 전역 설정을 무시하고 해당 아이템의 PlayerDogtag, AIDogtag 조건만 사용합니다.

[아이템별 거래 조건 →](ItemTradeConditions)