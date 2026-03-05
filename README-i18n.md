# 다국어 위키 관리 가이드

한국어를 기준으로, **config**와 **translations**만 수정하면 새 언어가 자동으로 추가됩니다.

## 새 언어 추가 방법

### 1. config/i18n.config.js 수정

`languages` 배열에 새 언어 추가:

```javascript
languages: [
  { code: 'kr', name: '한국어' },
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'jp', name: '日本語' },  // ← 추가
],
```

### 2. translations/{code}.json 생성

`translations/jp.json` 파일을 만들고, 한국어 → 일본어 매핑 입력:

```json
{
  "Home": {
    "# Enhanced Dogtags - 독택 설정 위키": "# Enhanced Dogtags - ドッグタグ設定Wiki",
    "SH00TM3P1Z(SMPZ)가 제작한...": "SH00TM3P1Z(SMPZ)が制作した...",
    ...
  },
  "_Sidebar": {
    "**[홈](/kr/Home)**": "**[ホーム](/jp/Home)**",
    "- [독택 기본 설정](/kr/DogtagSettings)": "- [基本設定](/jp/DogtagSettings)",
    ...
  },
  "DogtagSettings": { ... },
  ...
}
```

- **키**: 한국어 원문 (wiki/Kr/*.md 에 있는 텍스트)
- **값**: 해당 언어로 번역한 텍스트
- **사이드바**: 링크 경로를 `/jp/` 등으로 변경

### 3. 빌드 실행

```bash
node build-i18n.js
```

또는 `npm run build` (package.json에 스크립트 추가 시)

---

## 파일 구조

```
Enhanced-Dogtags-Wiki/
├── config/
│   └── i18n.config.js    ← 언어 목록 (여기만 추가하면 됨)
├── translations/
│   ├── en.json           ← 한국어 → 영어
│   ├── ru.json           ← 한국어 → 러시아어
│   └── jp.json           ← 한국어 → 일본어 (새로 추가)
├── wiki/
│   └── Kr/               ← 기준(소스). 여기만 편집
│       ├── Home.md
│       ├── _Sidebar.md
│       └── ...
├── build-i18n.js         ← 빌드 스크립트
├── index.template.html   ← index.html 템플릿
└── index.html            ← 빌드 시 자동 생성
```

## 주의사항

- **한국어 문서(wiki/Kr/)** 만 수정하세요. 다른 언어 폴더(En, Ru 등)는 빌드 시 덮어씁니다.
- 한국어 문서를 수정한 뒤, 해당 부분의 번역을 `translations/*.json` 에 추가하고 빌드하세요.
- JSON 키는 한국어 원문과 **정확히 일치**해야 합니다.
