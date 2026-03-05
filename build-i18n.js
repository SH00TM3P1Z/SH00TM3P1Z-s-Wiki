/**
 * 다국어 위키 빌드 스크립트
 *
 * 1. config/i18n.config.js 의 languages 읽기
 * 2. wiki/Kr/*.md (한국어) 를 기준으로
 * 3. translations/{code}.json 의 매핑으로 각 언어별 MD 생성
 * 4. index.html 자동 생성 (alias, 언어 선택)
 *
 * 실행: node build-i18n.js
 */

const fs = require('fs');
const path = require('path');

const config = require('./config/i18n.config.js');
const ROOT = path.resolve(__dirname);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getMdFiles(dir) {
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
}

function applyTranslations(content, translations) {
  if (!translations || Object.keys(translations).length === 0) return content;
  const keys = Object.keys(translations).sort((a, b) => b.length - a.length);
  let result = content;
  for (const kr of keys) {
    const translated = translations[kr];
    if (translated != null && kr !== translated) {
      result = result.split(kr).join(translated);
    }
  }
  return result;
}

function build() {
  const sourceDir = path.join(ROOT, config.sourceDir);
  const mdFiles = getMdFiles(sourceDir);

  for (const lang of config.languages) {
    const code = lang.code;
    const langDir = path.join(ROOT, config.outputDir || '.', code);
    ensureDir(langDir);

    const translationsPath = path.join(ROOT, 'translations', `${code}.json`);
    let allTranslations = {};
    if (fs.existsSync(translationsPath)) {
      allTranslations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));
    }

    for (const file of mdFiles) {
      const srcPath = path.join(sourceDir, file);
      const content = fs.readFileSync(srcPath, 'utf8');
      const fileKey = file.replace('.md', '');
      const fileTranslations = Object.assign(
        {},
        allTranslations._common || {},
        allTranslations[fileKey] || allTranslations[file] || {}
      );
      const translated =
        code === 'kr'
          ? content
          : applyTranslations(content, fileTranslations);
      const outFile = file === '_Sidebar.md' ? '_sidebar.md' : file;
      const outPath = path.join(langDir, outFile);
      fs.writeFileSync(outPath, translated, 'utf8');
    }
  }

  updateIndexHtml();
  console.log('Build complete. Languages:', config.languages.map((l) => l.code).join(', '));
}

function updateIndexHtml() {
  const templatePath = path.join(ROOT, 'index.template.html');
  let html = fs.readFileSync(templatePath, 'utf8');

  if (html.includes('{{ALIAS}}')) html = html.replace('{{ALIAS}}', '');

  const options = config.languages.map(
    (l) => `      <option value="${l.code}">${l.name}</option>`
  );
  html = html.replace('{{LANG_OPTIONS}}', options.join('\n      '));

  const syncParts = config.languages.map(
    (l) => `(h.indexOf('/${l.code}/') >= 0 ? '${l.code}'`
  );
  const syncLogic =
    syncParts.join(' : ') +
    " : ''" +
    ')'.repeat(config.languages.length);
  html = html.replace('{{SYNC_LOGIC}}', syncLogic);

  const LANG_UI_MAP = {
    kr: { l: '언어', p: '-- 선택 --' },
    en: { l: 'Language', p: '-- Select --' },
    ru: { l: 'Язык', p: '-- Выбрать --' },
    jp: { l: '言語', p: '-- 選択 --' },
    zh: { l: '语言', p: '-- 选择 --' },
    zhtw: { l: '語言', p: '-- 選擇 --' },
    es: { l: 'Idioma', p: '-- Seleccionar --' },
    de: { l: 'Sprache', p: '-- Auswählen --' },
    it: { l: 'Lingua', p: '-- Seleziona --' },
    fr: { l: 'Langue', p: '-- Sélectionner --' },
  };
  const langUi = {};
  config.languages.forEach((l) => {
    const u = LANG_UI_MAP[l.code] || { l: l.name, p: '--' };
    langUi[l.code] = u;
  });
  html = html.replace('{{LANG_UI}}', JSON.stringify(langUi));

  const indexPath = path.join(ROOT, 'index.html');
  fs.writeFileSync(indexPath, html, 'utf8');
}

build();
