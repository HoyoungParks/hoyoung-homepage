# 호영 홈페이지 업데이트 매뉴얼

이 문서는 `hoyoung-homepage` GitHub Pages 홈페이지를 직접 수정하고 반영하는 방법을 정리한 것입니다.

홈페이지 주소:

```text
https://hoyoungparks.github.io/hoyoung-homepage/
```

GitHub 저장소:

```text
https://github.com/HoyoungParks/hoyoung-homepage
```

## 1. 작업 폴더로 이동

호영님 MacBook에서는 보통 아래 경로입니다.

```bash
cd /Users/Ho-Young/Library/CloudStorage/Dropbox/OpenClaw/openclaw_work/hoyoung-homepage
```

경로가 안 맞으면 Finder에서 `hoyoung-homepage` 폴더를 찾거나, 터미널에서 아래 명령으로 찾습니다.

```bash
find ~/Library/CloudStorage -type d -name hoyoung-homepage 2>/dev/null
```

## 2. 파일 구조

주요 파일은 다음과 같습니다.

- `index.html`: 홈페이지 내용 대부분이 들어 있는 파일입니다.
- `styles.css`: 글꼴, 색, 간격, 모바일 반응형 등 디자인 설정입니다.
- `script.js`: 메뉴, 아이콘, 스크롤 효과 같은 간단한 동작입니다.
- `assets/CV_Hoyoung_Park.pdf`: 홈페이지에서 연결되는 CV 파일입니다.
- `assets/HP_Photo.jpg`: 프로필 사진입니다.
- `assets/research-hero.png`: 첫 화면 배경 이미지입니다.
- `README.md`: 프로젝트 요약 문서입니다.
- `HOMEPAGE_UPDATE_MANUAL_KO.md`: 지금 보고 있는 한글 업데이트 매뉴얼입니다.

일반적인 내용 수정은 거의 항상 `index.html`만 고치면 됩니다.

## 3. CV 업데이트 방법

CV 버튼들은 모두 아래 파일을 바라봅니다.

```text
assets/CV_Hoyoung_Park.pdf
```

따라서 새 CV를 같은 파일명으로 덮어쓰면 `index.html`을 수정할 필요가 없습니다.

순서:

1. 새 CV PDF 파일명을 정확히 `CV_Hoyoung_Park.pdf`로 둡니다.
2. 그 파일을 `hoyoung-homepage/assets/` 폴더 안에 덮어씁니다.
3. 터미널에서 변경 여부를 확인합니다.

```bash
git status
```

아래처럼 나오면 정상입니다.

```text
modified:   assets/CV_Hoyoung_Park.pdf
```

4. 변경을 commit하고 push합니다.

```bash
git add assets/CV_Hoyoung_Park.pdf
git commit -m "Update CV"
git push
```

파일명을 바꾸고 싶을 때만 `index.html` 안의 `CV_Hoyoung_Park.pdf` 링크를 모두 새 파일명으로 바꿔야 합니다.

## 4. 홈페이지 문구 수정 방법

내용은 `index.html`에서 수정합니다.

추천 방법:

1. VS Code, Cursor, TextEdit, 또는 편한 편집기로 `index.html`을 엽니다.
2. 수정하고 싶은 문구를 검색합니다.
3. 문장만 조심해서 바꿉니다.
4. `<section>`, `<article>`, `<a href=...>` 같은 HTML 태그는 구조가 깨지지 않게 둡니다.

예를 들어 사람 목록은 `People` 또는 `Students and alumni` 근처에 있습니다.

링크를 바꿀 때는 보통 이런 형태입니다.

```html
<a href="https://github.com/ChaewonSong914" target="_blank" rel="noreferrer">Chaewon Song (송채원)</a>
```

바꿀 부분은 대개 `href="..."` 안의 주소와 화면에 보이는 이름입니다.

## 5. 논문, 뉴스, 강의, 학생 목록 수정

`index.html` 안에서 아래 제목을 검색하면 해당 섹션으로 바로 갈 수 있습니다.

- `News`
- `Research`
- `Publications`
- `Presentations`
- `Grants`
- `Students and alumni`
- `Teaching`
- `Contact`

새 항목을 추가할 때는 기존 `<article>` 블록 하나를 복사해서 바로 위나 아래에 붙인 뒤, 날짜와 제목과 링크만 바꾸는 방식이 가장 안전합니다.

예:

```html
<article class="news-card">
  <span>2026</span>
  <h3>새 소식 제목</h3>
  <p>새 소식 설명 문장.</p>
</article>
```

기존 카드의 class 이름은 되도록 유지하세요. 그래야 디자인이 그대로 적용됩니다.

뉴스 항목은 하나의 `News` 섹션 안에 두고, 카드 안의 category label만 바꾸는 방식이 좋습니다. 예를 들어 `Lab News`, `Presentation`, `Award`, `Publication`, `Alumni` 같은 짧은 라벨을 사용합니다.

학술발표 목록은 `Presentations` 섹션에서 관리합니다. 호영님의 발표는 CV 전체 목록을 그대로 다 옮기기보다 `Selected Recent Talks by Hoyoung Park`에 최근/대표 발표 5개 안팎만 유지하고, 오래된 발표는 `Full CV`에서 확인하게 두는 편이 좋습니다. 새 발표가 생기면 기존 발표 `<article>` 하나를 복사해서 날짜, 제목, 발표 장소/학회명, 발표 형식만 바꿉니다.

## 6. 로컬에서 미리보기

수정한 뒤 바로 GitHub에 올리기 전에 로컬에서 확인할 수 있습니다.

```bash
python3 -m http.server 5174
```

그다음 브라우저에서 아래 주소를 엽니다.

```text
http://localhost:5174
```

확인이 끝나면 터미널에서 `Control + C`를 눌러 서버를 종료합니다.

## 7. HTML 문법 간단 점검

수정 후 아래 명령을 실행하면 큰 HTML 문법 오류를 빠르게 확인할 수 있습니다.

```bash
python3 -m html.parser index.html >/dev/null
```

아무 메시지도 안 나오면 일단 통과입니다.

## 8. 변경사항 GitHub Pages에 반영하기

수정이 끝나면 아래 순서로 올립니다.

```bash
git status
git add index.html styles.css script.js README.md HOMEPAGE_UPDATE_MANUAL_KO.md assets
git commit -m "Update homepage content"
git push
```

CV만 바꾼 경우에는 더 좁게 해도 됩니다.

```bash
git add assets/CV_Hoyoung_Park.pdf
git commit -m "Update CV"
git push
```

문구만 바꾼 경우:

```bash
git add index.html
git commit -m "Update homepage text"
git push
```

`git push` 후 GitHub Pages 반영에는 보통 수십 초에서 몇 분 정도 걸릴 수 있습니다.

## 9. 자주 생기는 문제

### `Not a git repository`가 나올 때

현재 위치가 `hoyoung-homepage` 폴더가 아닙니다.

```bash
cd /Users/Ho-Young/Library/CloudStorage/Dropbox/OpenClaw/openclaw_work/hoyoung-homepage
git status
```

`On branch main`이 나오면 정상 위치입니다.

### `Authentication failed`가 나올 때

GitHub 인증 토큰이 만료됐거나 잘못 저장됐을 가능성이 큽니다.

저장된 인증을 지우고 다시 push합니다.

```bash
printf "protocol=https\nhost=github.com\n\n" | git credential-osxkeychain erase
git push
```

물어보면:

```text
Username: HoyoungParks
Password: GitHub 비밀번호가 아니라 Personal Access Token
```

토큰은 절대 단톡방이나 문서에 붙여넣지 마세요.

### `HTTP 400 curl 56`이 나올 때

GitHub HTTPS 전송 문제일 수 있습니다. 한 번만 아래 설정을 해둡니다.

```bash
git config --global http.version HTTP/1.1
git config --global http.postBuffer 524288000
git push
```

### GitHub Pages 주소가 바로 안 열릴 때

배포 반영 중일 수 있습니다. 1-3분 정도 기다린 뒤 아래 주소를 다시 엽니다.

```text
https://hoyoungparks.github.io/hoyoung-homepage/
```

브라우저 캐시 문제일 수도 있으므로 시크릿 창에서 열어보는 것도 좋습니다.

## 10. 수정할 때 조심할 점

- `openclaw_work` 전체를 GitHub에 올리지 말고, 항상 `hoyoung-homepage` 폴더 안에서만 `git` 명령을 실행합니다.
- 토큰, 비밀번호, 개인 연락처 중 공개하면 안 되는 정보는 홈페이지 파일에 넣지 않습니다.
- `assets/`에 큰 파일을 많이 넣으면 페이지 로딩이 느려질 수 있습니다.
- HTML 태그의 `<`와 `>`를 실수로 지우면 레이아웃이 깨질 수 있습니다.
- 중요한 수정 전에는 `git status`로 현재 상태를 확인합니다.

## 11. 가장 자주 쓰는 명령 모음

작업 폴더 이동:

```bash
cd /Users/Ho-Young/Library/CloudStorage/Dropbox/OpenClaw/openclaw_work/hoyoung-homepage
```

현재 상태 확인:

```bash
git status
```

로컬 미리보기:

```bash
python3 -m http.server 5174
```

문법 점검:

```bash
python3 -m html.parser index.html >/dev/null
```

수정 반영:

```bash
git add index.html assets README.md HOMEPAGE_UPDATE_MANUAL_KO.md
git commit -m "Update homepage"
git push
```
