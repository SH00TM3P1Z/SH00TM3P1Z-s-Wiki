# 독택 거래 설정 (DogtagTradeSettings)

**파일 경로:** `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json`

## 기본 설정 항목

| 항목 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `Enabled` | bool | true | 독택 거래 시스템 전체 활성화 (1=켜기, 0=끄기) |
| `UseDateRange` | bool | false | 날짜 범위 사용 여부 |
| `UseWeekendOnly` | bool | false | 주말에만 거래 가능 여부 |
| `StartDate` | string | "" | 거래 시작일 (YYYY/MM/DD) |
| `EndDate` | string | "" | 거래 종료일 (YYYY/MM/DD) |
| `TimeZone` | string | "UTC" | 시간대 (예: KST, UTC) |
| `IncludeAttachmentsPrice` | bool | false | 부착물 가격을 독택 수에 포함 여부 |

---

## 날짜/시간 제한 설정 (세부 동작)

거래 가능 여부는 **서버 기준**으로 판단됩니다. `IsTradeEnabled()`가 `false`이면 거래가 완전히 차단됩니다.

### UseDateRange

- **false:** 날짜 제한 없음. `StartDate`, `EndDate`는 무시됩니다.
- **true:** `StartDate` ~ `EndDate` 범위 내에서만 거래 가능.

### StartDate / EndDate

- **형식:** `YYYY/MM/DD` (예: `2025/03/01`)
- **UseDateRange가 true일 때:**
  - `StartDate`만 있으면: 현재 날짜가 시작일과 같거나 그 이후일 때만 거래 가능
  - `EndDate`만 있으면: 현재 날짜가 종료일과 같거나 그 이전일 때만 거래 가능
  - 둘 다 있으면: 현재 날짜가 시작일과 종료일 사이(둘 다 포함)일 때만 거래 가능
  - 둘 다 비어 있으면: 날짜 제한 없음 (UseDateRange가 true여도)

### TimeZone

- `StartDate`, `EndDate`, `UseWeekendOnly`의 **날짜/요일 계산**에 사용되는 시간대입니다.
- 서버 UTC 시간을 이 시간대로 변환한 뒤 비교합니다.

**지원 값 (대소문자 구분):**

| 값 | 설명 |
|----|------|
| `UTC`, `GMT`, `UK`, `London` | UTC+0 |
| `KST`, `Korea`, `JST`, `Japan` | UTC+9 |
| `CST`, `China`, `HKT`, `HongKong`, `SGT`, `Singapore`, `MYT`, `Malaysia`, `PHT`, `Philippines`, `TPE`, `Taiwan` | UTC+8 |
| `ICT`, `Thailand`, `VNT`, `Vietnam`, `WIB`, `Indonesia` | UTC+7 |
| `IST`, `India` | UTC+5:30 |
| `MSK`, `Moscow`, `Russia` | UTC+3 |
| `CET`, `Europe`, `Germany`, `France`, `Paris`, `Italy`, `Rome`, `Spain`, `Madrid` | UTC+1 |
| `EST`, `US_East`, `NewYork`, `Toronto`, `Canada_East` | UTC-5 |
| `CST_MX`, `Mexico` | UTC-6 |
| `PST`, `US_West`, `LosAngeles`, `Vancouver`, `Canada_West` | UTC-8 |
| `BRT`, `Brazil` | UTC-3 |
| `AEST`, `Australia`, `Sydney` | UTC+10 |
| `NZST`, `NewZealand`, `Auckland` | UTC+12 |

### UseWeekendOnly

- **true:** **토요일·일요일**에만 거래 가능 (해당 TimeZone 기준).
- **주의:** `UseWeekendOnly`를 사용하려면 **반드시** 다음이 모두 충족되어야 합니다.
  - `UseDateRange`를 true로 설정
  - `StartDate`에 날짜 값 입력
  - `EndDate`에 날짜 값 입력
- 위 조건 중 하나라도 빠지면 거래가 항상 차단됩니다.

### 동작 순서 요약

1. `UseDateRange`가 false면 날짜/주말 제한 없음
2. `UseDateRange`가 true면 `StartDate`와 `EndDate` 범위 확인
3. `UseWeekendOnly`가 true면 위 범위 안에서 **토·일요일만** 거래 가능

### 날짜 설정 예시

| 목적 | UseDateRange | StartDate | EndDate | UseWeekendOnly | TimeZone |
|------|--------------|-----------|---------|----------------|----------|
| 제한 없음 | false | "" | "" | false | - |
| 3월 한 달만 | true | "2025/03/01" | "2025/03/31" | false | "KST" |
| 3월 주말만 | true | "2025/03/01" | "2025/03/31" | true | "KST" |
| 특정일부터 무제한 | true | "2025/03/15" | "" | false | "UTC" |

---

## IncludeAttachmentsPrice (부착물 가격 세부 동작)

**false:** 아이템의 `NeedDogtagAmount`만 사용합니다. 부착물은 개수에 포함되지 않습니다.

**true:** 아이템 기본 가격에 부착물 가격을 더합니다. 부착물도 각각 거래 아이템 목록에 등록된 경우 그 `NeedDogtagAmount`가 합산됩니다. 재귀 부착물(부착물 안의 부착물)도 모두 합산됩니다.

예: M4A1 기본 10개, 스코프 2개, 탄창 1개 부착 시, true면 총 13개 독택이 필요합니다.

---

## 설정 예시

```json
{
  "Version": 8,
  "Enabled": true,
  "UseDateRange": false,
  "UseWeekendOnly": false,
  "StartDate": "",
  "EndDate": "",
  "TimeZone": "UTC",
  "IncludeAttachmentsPrice": false,
  "TradeConditions": {
    "Enabled": 1,
    "PlayerDogtag": { ... },
    "AIDogtag": { ... }
  }
}
```

[거래 조건 (TradeConditions) →](TradeConditions)
