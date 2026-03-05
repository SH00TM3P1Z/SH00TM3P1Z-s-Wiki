# docs 폴더에 배포용 파일 복사 (GitHub Pages /docs 배포용)
$root = $PSScriptRoot
$docs = Join-Path $root "docs"
if (Test-Path $docs) { Remove-Item $docs -Recurse -Force }
New-Item -ItemType Directory -Path $docs -Force | Out-Null

$copy = @('index.html', 'choose.md', 'README.md', '_sidebar.md', '.nojekyll', '404.html', 'plugins')
foreach ($item in $copy) {
  $src = Join-Path $root $item
  if (Test-Path $src) {
    if (Test-Path $src -PathType Container) {
      Copy-Item $src (Join-Path $docs $item) -Recurse -Force
    } else {
      Copy-Item $src (Join-Path $docs $item) -Force
    }
  }
}
foreach ($dir in @('kr','en','ru','jp','zh','zhtw','es','de','it','fr')) {
  $src = Join-Path $root $dir
  if (Test-Path $src) {
    Copy-Item $src (Join-Path $docs $dir) -Recurse -Force
  }
}
Write-Host "docs/ folder ready. Push and set GitHub Pages Source to /docs"
