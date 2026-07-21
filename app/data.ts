// 방송 데이터 + 타입 정의.
// 실제 데이터는 broadcasts.json에 있고(크롤러가 갱신), 여기서는 읽어와 타입을 붙인다.
// 데이터 갱신: node scripts/fetch-data.mjs 실행 → broadcasts.json 재생성.

import broadcasts from "./broadcasts.json";

// 방송 유형: 라이브 방송 / 홈쇼핑
export type BroadcastType = "live" | "home";

// 표 한 줄에 필요한 방송 정보 (라이브·홈쇼핑 공통 모양으로 정규화)
export interface Broadcast {
  id: string; // 고유 id (React 목록의 key로 사용)
  title: string; // 제목
  category: string; // 분류 (라이브=플랫폼 채널명, 홈쇼핑=방송사명)
  datetime: string; // 방송시간 ("YY.MM.DD HH:MM")
  views: number | null; // 조회수/시청률 (잠김이면 null)
  salesCount: number | null; // 판매량 (잠김이면 null)
  salesAmount: number | null; // 매출액 (잠김이면 null)
  productCount: number; // 상품수
}

// broadcasts.json에서 유형별 배열을 꺼내 Broadcast[] 타입으로 내보낸다.
export const liveBroadcasts: Broadcast[] = broadcasts.live;
export const homeBroadcasts: Broadcast[] = broadcasts.home;
