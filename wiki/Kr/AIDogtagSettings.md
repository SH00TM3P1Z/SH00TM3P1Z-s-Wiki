# AI 독택 설정 (AIDogtagSettings)

**파일 경로:** `$profile:EnhancedDogtag\Config\AIDogtagSettings.json`

AI가 독택을 소지할 수 있는지, AI 독택을 루팅할 수 있는지를 제어하는 설정 파일입니다.

---

## 설정 항목

| 항목 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `Version` | int | 2 | 설정 버전 (수정 권장하지 않음) |
| `AIDogtagEnabled` | bool | true | AI 독택 기능 활성화 (AI가 독택을 소지할 수 있는지) |
| `AIDogtagLootingEnabled` | bool | true | AI 독택 루팅 허용 (AI 시체에서 독택을 루팅할 수 있는지) |

### 세부 동작

**AIDogtagEnabled:** false면 AI가 독택을 소지하지 않습니다. AI 시체에서 독택이 나오지 않습니다.

**AIDogtagLootingEnabled:** false면 AI 시체에 독택이 있어도 플레이어가 루팅할 수 없습니다. AIDogtagEnabled가 true여도 루팅이 막힙니다.

두 설정 모두 true여야 AI 독택을 얻을 수 있고, 독택 거래에서 AI 독택을 사용할 수 있습니다.

---

## 설정 예시

```json
{
  "Version": 2,
  "AIDogtagEnabled": true,
  "AIDogtagLootingEnabled": true
}
```

---

## DogtagSettings와의 관계

| 파일 | 용도 |
|------|------|
| **DogtagSettings.json** | 플레이어 독택 기본 동작 (루팅, 데스 위시 등) |
| **AIDogtagSettings.json** | AI 독택 동작 (AI 소지/루팅 허용) |

AI 독택은 거래 시스템에서 사용 가능합니다. [거래 조건 (TradeConditions)](TradeConditions)의 `AIDogtag` 설정과 함께 사용됩니다.

[독택 기본 설정 →](DogtagSettings)