# Enhanced Dogtags - 독택 설정 위키

SH00TM3P1Z(SMPZ)가 제작한 Enhanced Dogtags 모드의 모든 독택 관련 설정을 설명하는 문서입니다.

> **실시간 동기화:** 모든 독택 설정(DogtagSettings, AIDogtagSettings, DogtagTradeSettings, 카테고리별 JSON 등)은 **파일 저장 시 실시간으로 서버에 반영**되므로 서버 재시작 없이 설정 변경이 적용됩니다.

## 목차

1. [설정 파일 경로](#설정-파일-경로)
2. [독택 기본 설정 (DogtagSettings)](#독택-기본-설정)
3. [AI 독택 설정 (AIDogtagSettings)](#ai-독택-설정)
4. [독택 거래 설정 (DogtagTradeSettings)](#독택-거래-설정)
5. [거래 조건 (TradeConditions)](#거래-조건)
6. [아이템별 거래 조건 (ItemTradeConditions)](#아이템별-거래-조건)
7. [거래 아이템 목록](#거래-아이템-목록)
8. [독택 라이프타임 데이터 (DogtagLifetime)](#독택-라이프타임-데이터)

---

## 설정 파일 경로

모든 설정 파일은 서버 프로필 폴더 기준으로 저장됩니다.

| 경로 | 설명 |
|------|------|
| `$profile:EnhancedDogtag\Config\` | 설정 폴더 |
| `$profile:EnhancedDogtag\Config\DogtagSettings.json` | 독택 기본 설정 (루팅, 데스 위시 등) |
| `$profile:EnhancedDogtag\Config\AIDogtagSettings.json` | AI 독택 설정 |
| `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json` | 독택 거래 메인 설정 |
| `$profile:EnhancedDogtag\Config\Category\` | 카테고리별 거래 아이템 JSON |
| `$profile:EnhancedDogtag\Data\DogtagLifetime.json` | 독택 라이프타임 데이터 (자동 생성, 수동 편집 비권장) |

> **참고:** `$profile:`은 DayZ 서버 프로필 경로입니다. (예: `DayZServer\Profiles\`)

---

## 모드 매니저에서 설정

`SMPZ Mod Manager`가 설치되어 있다면, **어드민 권한**으로 모든 독택 설정을 게임 내 모드 매니저 메뉴에서 변경할 수 있습니다.
<img width="1339" height="806" alt="스크린샷 2026-03-05 151403" src="https://github.com/user-attachments/assets/b7cf9f89-93ce-461d-8715-56c54838e2d9" />

---

## 독택 기본 설정

[기본 설정 상세 문서 →](DogtagSettings)

---

## AI 독택 설정

[AI 독택 설정 상세 문서 →](AIDogtagSettings)

---

## 독택 거래 설정

[거래 설정 상세 문서 →](DogtagTradeSettings)

---

## 거래 조건 (TradeConditions)

[거래 조건 상세 문서 →](TradeConditions)

---

## 아이템별 거래 조건 (ItemTradeConditions)

[아이템별 거래 조건 상세 문서 →](ItemTradeConditions)

---

## 거래 아이템 목록

[거래 아이템 목록 상세 문서 →](TradeItemList)

---

## 독택 라이프타임 데이터 (DogtagLifetime)

[독택 라이프타임 데이터 상세 문서 →](DogtagLifetimeData)