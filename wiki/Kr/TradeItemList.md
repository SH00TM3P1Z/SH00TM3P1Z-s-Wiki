# 거래 아이템 목록

**폴더 경로:** `$profile:EnhancedDogtag\Config\Category\`

## 폴더 구조

```
Config/
└── Category/
    ├── Weapons/          ← 카테고리 폴더
    │   ├── Rifles.json   ← 서브카테고리 JSON
    │   └── Pistols.json
    ├── Gear/
    │   └── Backpacks.json
    └── ...
```

## 아이템 JSON 구조

각 JSON 파일은 **배열** 형태입니다.

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

## 항목 설명

| 항목 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `ItemClassName` | string | ✓ | DayZ 아이템 클래스명 (예: AKM, M4A1) |
| `CustomName` | string | | 표시 이름 (비우면 게임 기본 이름 사용) |
| `NeedDogtagAmount` | int | ✓ | 거래에 필요한 독택 개수 |
| `Attachments` | array | | 부착물 목록 (선택) |
| `ItemTradeConditions` | object | | 아이템별 거래 조건 (선택) |

### 항목 세부 동작

**ItemClassName:** DayZ 게임 내 아이템 클래스명입니다. 잘못된 이름을 쓰면 아이템이 생성되지 않습니다.

**CustomName:** 비우면 게임 기본 이름을 사용합니다. 값을 넣으면 거래 UI에 이 이름으로 표시됩니다.

**NeedDogtagAmount:** 이 아이템 하나를 거래하는 데 필요한 독택 개수입니다. DogtagTradeSettings의 IncludeAttachmentsPrice가 true면 부착물 가격이 여기에 더해집니다.

**Attachments:** 이 아이템에 달릴 부착물 목록입니다. 부착물도 거래 아이템 목록에 등록된 경우 IncludeAttachmentsPrice가 true일 때 가격이 합산됩니다.

**ItemTradeConditions:** 없거나 Enabled가 0이면 전역 TradeConditions를 사용합니다. Enabled가 1이면 이 아이템만 다른 거래 조건을 사용합니다.

---

## Attachments 예시

```json
"Attachments": [
  {
    "ItemClassName": "AK_RailHndguard",
    "Attachments": []
  }
]
```

---

## 재귀 부착물 예시

부착물 안에 또 다른 부착물을 중첩할 수 있습니다. Assault Rifle.json의 SCAR-L 전체 설정 예시입니다.

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

`SCAR_Polymer_Buttstock_FDE`는 그 자체에 `Retractable_Buttstock`과 `Cheek` 두 개의 부착물을 갖습니다. 이처럼 부착물 → 부착물 → … 형태로 계층을 이어갈 수 있습니다.

---

## 참고

- **카테고리/서브카테고리** 이름은 폴더명과 JSON 파일명(확장자 제외)으로 결정됩니다.
- `ItemTradeConditions`가 없거나 `Enabled: 0`이면 전역 `TradeConditions`를 사용합니다.