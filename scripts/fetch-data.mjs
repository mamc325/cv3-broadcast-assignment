// 라방바 데이터랩 과제 페이지에서 방송 데이터를 크롤링해 app/broadcasts.json 생성.
// 실행: node scripts/fetch-data.mjs
//
// 원리: 과제 페이지는 Next.js 앱이라, 서버가 내려주는 HTML 안
//       <script id="__NEXT_DATA__">에 방송 목록(JSON)이 그대로 들어있다.
//       그 스크립트를 뽑아 파싱한 뒤, 표에 쓸 모양(Broadcast)으로 정리해 저장한다.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "app", "broadcasts.json");
const BASE = "http://live.ecomm-data.com/assignment";

// 라이브 플랫폼 id → 화면 "분류" 표시명.
// (표시명은 원본 JSON에 없고 페이지가 platform_id로 렌더하므로, 알려진 것만 매핑하고
//  모르는 id는 그대로 둔다.)
const LIVE_PLATFORM_LABELS = {
  naver: "네이버쇼핑LIVE",
  hmall: "현대Hmall 쇼라",
  cjonstyle: "CJ온스타일",
  gsshop: "지에스샵 샤피라이브",
  ssg_live: "신세계쇼핑라이브",
};

// 과제 페이지에서 유형별 방송 목록(list) 가져오기
async function fetchList(type) {
  const res = await fetch(`${BASE}?type=${type}`);
  const html = await res.text();
  const match = html.match(/id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!match) throw new Error("__NEXT_DATA__ 스크립트를 찾지 못했습니다.");
  const json = JSON.parse(match[1]);
  return json.props?.pageProps?.list ?? [];
}

// 방송시간 문자열 → "YY.MM.DD HH:MM"
// 라이브는 "2607171200"(10자리), 홈쇼핑은 "202607171335"(12자리)로 형식이 다르다.
function formatDatetime(raw) {
  const s = String(raw);
  const d = s.length === 12 ? s.slice(2) : s; // 12자리면 앞 "20" 떼서 YYMMDDHHMM으로 통일
  return `${d.slice(0, 2)}.${d.slice(2, 4)}.${d.slice(4, 6)} ${d.slice(6, 8)}:${d.slice(8, 10)}`;
}

// 라이브 원본 → 공통 Broadcast 모양
function mapLive(item) {
  return {
    id: item.objectID,
    title: item.title.trim(),
    category: LIVE_PLATFORM_LABELS[item.platform_id] ?? item.platform_id,
    datetime: formatDatetime(item.datetime_start),
    views: item.visit_cnt, // 잠기면 null
    salesCount: item.sales_cnt,
    salesAmount: item.sales_amt,
    productCount: item.product_cnt,
  };
}

// 홈쇼핑 원본 → 공통 Broadcast 모양 (분류 = 방송사명 platform_name)
function mapHome(item) {
  return {
    id: item.hsshow_id,
    title: item.hsshow_title.trim(),
    category: item.platform_name,
    datetime: formatDatetime(item.hsshow_datetime_start),
    views: item.visit_cnt,
    salesCount: item.sales_cnt,
    salesAmount: item.sales_amt,
    productCount: item.item_cnt,
  };
}

async function main() {
  // 라이브(lb)와 홈쇼핑(hs)을 동시에 가져오기
  const [liveRaw, homeRaw] = await Promise.all([
    fetchList("lb"),
    fetchList("hs"),
  ]);

  const data = {
    capturedAt: new Date().toISOString(), // 확보 시점 기록
    live: liveRaw.slice(0, 10).map(mapLive), // 유형별 최대 10개
    home: homeRaw.slice(0, 10).map(mapHome),
  };

  writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n", "utf-8");
  console.log(`✅ 저장 완료: ${OUT}`);
  console.log(`   라이브 ${data.live.length}개, 홈쇼핑 ${data.home.length}개`);
  console.log(`   확보 시점: ${data.capturedAt}`);
}

main().catch((err) => {
  console.error("크롤링 실패:", err.message);
  process.exit(1);
});
