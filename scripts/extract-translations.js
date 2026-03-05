/**
 * 기존 Kr/En 파일 비교로 번역 JSON 초기 생성
 * 한 번만 실행. 이후 수동으로 translations/*.json 편집
 *
 * 실행: node scripts/extract-translations.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const krDir = path.join(ROOT, 'wiki/Kr');
const enDir = path.join(ROOT, 'wiki/En');

const files = fs.readdirSync(krDir).filter((f) => f.endsWith('.md'));

const enTranslations = {};

for (const file of files) {
  const krPath = path.join(krDir, file);
  const enPath = path.join(enDir, file);
  if (!fs.existsSync(enPath)) continue;

  const krLines = fs.readFileSync(krPath, 'utf8').split('\n');
  const enLines = fs.readFileSync(enPath, 'utf8').split('\n');

  const fileKey = file.replace('.md', '');
  enTranslations[fileKey] = {};

  const maxLen = Math.max(krLines.length, enLines.length);
  for (let i = 0; i < maxLen; i++) {
    const kr = krLines[i] ?? '';
    const en = enLines[i] ?? '';
    if (kr && en && kr !== en) {
      enTranslations[fileKey][kr] = en;
    }
  }
}

const outDir = path.join(ROOT, 'translations');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, 'en.json'),
  JSON.stringify(enTranslations, null, 2),
  'utf8'
);

console.log('Extracted en.json from Kr/En comparison. Files:', files.length);
