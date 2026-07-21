# 라방바 데이터랩 방송 리스트 (CV3 기술과제)

라방바 데이터랩의 방송 리스트를 보여주는 웹 페이지입니다.
유형 토글(라이브 방송 / 홈쇼핑)로 목록을 전환하며, 유형별 최대 10개의 방송을
테이블로 표시합니다.

## 실행 방법

Node.js가 설치돼 있어야 합니다. (권장: Node 20 이상)

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev
```

실행 후 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

## 기능

- **유형 토글**: 상단 버튼으로 `라이브 방송` / `홈쇼핑` 목록을 전환.
- **테이블 컬럼**: 순번, 방송정보(제목), 분류, 방송시간, 조회수/시청률,
  판매량, 매출액, 상품수.
  - "조회수/시청률" 컬럼 제목은 유형에 따라 바뀝니다 (라이브=조회수, 홈쇼핑=시청률).
  - "분류"는 방송 채널/플랫폼명입니다 (예: 네이버쇼핑LIVE, 현대홈쇼핑).

## 데이터에 대해

- 별도 API가 제공되지 않아, 과제 페이지가 서버에서 내려주는 데이터
  (`__NEXT_DATA__`)를 **크롤러 스크립트로 확보**해 스냅샷으로 저장합니다.
- 실제 데이터는 [app/broadcasts.json](app/broadcasts.json)에 있고,
  [app/data.ts](app/data.ts)가 이를 읽어 타입을 붙여 사용합니다.
- **데이터 갱신**: 아래 명령을 실행하면 최신 데이터로 `broadcasts.json`이 재생성됩니다.
  ```bash
  node scripts/fetch-data.mjs
  ```
  (확보 시점은 json의 `capturedAt`에 기록됩니다. 원본 페이지는 실시간 랭킹이라
  갱신할 때마다 목록·순서가 달라질 수 있습니다.)
- 조회수/시청률·판매량·매출액은 원본에서 로그인 잠금(🔒) 상태라 값이 없어,
  표에도 `🔒`로 표시합니다. (과제 안내에 따라 잠금 해제 기능은 구현하지 않음)

## 기술 스택

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## 프로젝트 구조

```
app/
  layout.tsx                  # 공통 레이아웃 (탭 제목 등)
  page.tsx                    # 메인 화면 (유형 토글 + 테이블)
  data.ts                     # broadcasts.json을 읽어 Broadcast 타입으로 내보냄
  broadcasts.json             # 크롤링된 방송 데이터 (스냅샷)
  components/
    BroadcastTable.tsx        # 방송 목록 테이블 컴포넌트
scripts/
  fetch-data.mjs              # 과제 페이지에서 데이터를 크롤링하는 스크립트
```
