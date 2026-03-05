# GitHub Pages 배포 가이드

## 1. GitHub 저장소 만들기

1. [GitHub](https://github.com) 로그인
2. 우측 상단 **+** → **New repository**
3. Repository name: `SH00TM3P1Z-Wiki` (또는 원하는 이름)
4. **Public** 선택
5. **Create repository** 클릭

## 2. 터미널에서 업로드

```powershellgit remote set-url origin https://github.com/SH00TM3P1Z/SH00TM3P1Z-s-Wiki.git
cd "P:\SH00TM3P1Z's-Wiki"

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SH00TM3P1Z/SH00TM3P1Z-s-Wiki.git
git push -u origin main
```

> `내GitHub아이디`를 본인 GitHub 사용자명으로 바꾸세요.

## 3. docs 폴더 준비 및 푸시

```powershell
cd "P:\SH00TM3P1Z's-Wiki"
powershell -ExecutionPolicy Bypass -File setup-docs.ps1
git add docs
git commit -m "Add docs folder for GitHub Pages"
git push
```

## 4. GitHub Pages 활성화

1. 저장소 페이지에서 **Settings** 클릭
2. 왼쪽 메뉴 **Pages** 클릭
3. **Source**: `Deploy from a branch` 선택
4. **Branch**: `main` 선택, **폴더 `/docs` 선택** (중요!)
5. **Save** 클릭

## 5. 배포 완료

몇 분 후 아래 주소로 접속 가능합니다:

```
https://내GitHub아이디.github.io/SH00TM3P1Z-Wiki/
```

---

## 업데이트 방법

내용 수정 후:

```powershell
cd "P:\SH00TM3P1Z's-Wiki"
git add .
git commit -m "업데이트 내용"
git push
```
