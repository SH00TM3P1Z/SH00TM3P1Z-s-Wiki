# wiki/En, wiki/Kr 등을 en/, kr/ 등으로 복사 (Docsify가 /en/ 경로로 요청하므로)
# Node 없이 실행 가능. 빌드 후에는 node build-i18n.js 사용 권장.

$root = $PSScriptRoot
$map = @{
  'Kr' = 'kr'
  'En' = 'en'
  'Ru' = 'ru'
  'Jp' = 'jp'
  'Zh' = 'zh'
  'Zhtw' = 'zhtw'
  'Es' = 'es'
  'De' = 'de'
  'It' = 'it'
  'Fr' = 'fr'
}

foreach ($entry in $map.GetEnumerator()) {
  $src = Join-Path $root "wiki\$($entry.Key)"
  $dst = Join-Path $root $entry.Value
  if (Test-Path $src) {
    if (Test-Path $dst) { Remove-Item $dst -Recurse -Force }
    New-Item -ItemType Directory -Path $dst -Force | Out-Null
    Copy-Item -Path "$src\*" -Destination $dst -Recurse -Force
    $sidebar = Join-Path $dst "_sidebar.md"
    if (Test-Path (Join-Path $dst "_Sidebar.md")) {
      Rename-Item (Join-Path $dst "_Sidebar.md") "_sidebar.md" -Force -ErrorAction SilentlyContinue
    }
    Write-Host "Copied wiki/$($entry.Key) -> $($entry.Value)/"
  }
}
Write-Host "Done. Restart the HTTP server if running."
