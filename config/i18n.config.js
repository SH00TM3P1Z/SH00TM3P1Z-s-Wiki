/**
 * 다국어 위키 설정
 * 
 * 사용법:
 * 1. languages 배열에 언어 추가 (code: URL 경로, name: 표시 이름)
 * 2. translations/{code}.json 에 번역 추가
 * 3. node build-i18n.js 실행
 */

module.exports = {
  // 한국어 = 기준(소스). 다른 언어는 translations/{code}.json 에서 로드
  languages: [
    { code: 'kr', name: '한국어' },
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'jp', name: '日本語' },
    { code: 'zh', name: '简体中文' },
    { code: 'zhtw', name: '繁體中文' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'fr', name: 'Français' },
  ],
  
  // 소스 파일 경로 (한국어)
  sourceDir: 'wiki/Kr',
  
  // 출력 경로: URL과 일치하도록 {code}/ (예: en/, kr/). Node 없으면 copy-wiki-folders.ps1 실행
  outputDir: '',
};
