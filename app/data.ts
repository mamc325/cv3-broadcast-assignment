// 방송 데이터 (과제 페이지에서 직접 확보한 값) — 2026.07.19 22시경 스냅샷
// - 라이브 방송(lb)과 홈쇼핑(hs)은 원본 필드 이름이 서로 다르지만,
//   표에서 똑같이 다루기 위해 아래 하나의 Broadcast 모양으로 통일(정규화)했다.
// - 조회수/판매량/매출액은 페이지에서 잠겨(🔒) 있어 값이 없으므로 null.

// 방송 유형: 라이브 방송 / 홈쇼핑
export type BroadcastType = "live" | "home";

// 표 한 줄에 필요한 방송 정보 (두 유형 공통 모양)
export interface Broadcast {
  id: string; // 고유 id (React 목록의 key로 사용)
  title: string; // 제목
  category: string; // 분류 (라이브=플랫폼 채널명, 홈쇼핑=상품 카테고리)
  datetime: string; // 방송시간 (표시용으로 "YY.MM.DD HH:MM" 포맷)
  views: number | null; // 조회수/시청률 (잠김이면 null)
  salesCount: number | null; // 판매량 (잠김이면 null)
  salesAmount: number | null; // 매출액 (잠김이면 null)
  productCount: number; // 상품수
}

// 라이브 방송 (앞 10개)
// category(분류) = 플랫폼의 라이브 채널명 (페이지 "분류" 칸 기준)
export const liveBroadcasts: Broadcast[] = [
  {
    id: "bf9c4ee5cd33d7b582877d185acb66cb",
    title: "[LG] 다품목 특집전💦",
    category: "현대Hmall 쇼라",
    datetime: "26.07.19 21:00",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 26,
  },
  {
    id: "a8c9e0e391149937459373a5a547b54b",
    title: "✅삼성 에어컨 AI 라이브행사! 상품권증정혜택🎁",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.19 22:01",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 12,
  },
  {
    id: "0581047e423798aada6fe6de5b643a67",
    title: "Live적립🩷 LG휘센 오브제컬렉션 에어컨 라이브✨",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.19 21:59",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 6,
  },
  {
    id: "d07a6ed07f6692b0608b1da40bd8c153",
    title: "★주말2부★플리츠 끝판대장....올게왔습니다......EE 최대특가혜택!",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.19 20:59",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 30,
  },
  {
    id: "113125c30c2ca0210c884e5c32ae8341",
    title: "💥삼성 에어컨 냉장고 김치냉장고 키친핏 세트 Live사은품🎁[AI]",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.19 22:00",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 46,
  },
  {
    id: "439e004c09c6566929050f53e486d632",
    title: "JBL 사운드바 무선헤드폰 블루투스스피커 어린이 헤드셋 게이밍헤드셋 특가",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.19 20:58",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 22,
  },
  {
    id: "b78a788f87590eb7a94f0a2d1b2f777a",
    title: "[입고또입고 시즌2] 코어 어센틱 l 5만원 균일특가",
    category: "지에스샵 샤피라이브",
    datetime: "26.07.19 22:00",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 10,
  },
  {
    id: "a0ed368854df8abab32db986e0b63095",
    title: "[7/19] 하만카돈 X JBL 스피커 이어폰 썸머 이벤트",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.19 21:59",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 30,
  },
  {
    id: "a637de53e3dd1d45dad5b4920138c0e2",
    title: "💖 삼성전자 💟 비즈니스 UHD TV 예약 판매",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.19 22:03",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 15,
  },
  {
    id: "e086115cd8bf3cc718b4c28c5bd0703c",
    title: "다시보는 브티나는생활 X 바바코💜 품절대란 NMN 미러팩 특가!",
    category: "CJ온스타일",
    datetime: "26.07.19 22:00",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 13,
  },
];

// 홈쇼핑 (앞 10개)
// category(분류) = 방송사(platform_name) — 페이지 "분류" 칸 기준
export const homeBroadcasts: Broadcast[] = [
  {
    id: "faa9d027a35b7800ab39ff333ce699ce",
    title: "햇 가족 의성眞 황도복숭아(말랑이) 4kg",
    category: "공영쇼핑",
    datetime: "26.07.19 22:00",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 2,
  },
  {
    id: "79f96909fa85b0d4525a1d2884fbc5e4",
    title: "한일이동식에어컨",
    category: "NS홈쇼핑",
    datetime: "26.07.19 21:40",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 3,
  },
  {
    id: "9f025a9b6499a1bb307db2649d76d438",
    title: "[메가스터디교육] 엠베스트 중등학습 상담예약",
    category: "현대홈쇼핑",
    datetime: "26.07.19 22:45",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 2,
  },
  {
    id: "85ac924d12b526f89bb8af66093e0975",
    title: "[구독] 세라젬 마스터 시리즈",
    category: "현대홈쇼핑 플러스샵",
    datetime: "26.07.19 22:40",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 1,
  },
  {
    id: "0c1cd818de3cd1463d756b4aba612851",
    title: "(방송에서만) 스위스알파인클럽 프라임 트윈 에어베드 싱글+싱글",
    category: "신세계쇼핑",
    datetime: "26.07.19 22:26",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 2,
  },
  {
    id: "e25924cb9a792a1f0a63b7160e9b30cc",
    title: "이지듀 최신상 쿨링핏 기미쿠션 멜라 비 토닝 앰플 메쉬쿠션 리필 18g",
    category: "GS홈쇼핑",
    datetime: "26.07.19 22:40",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 3,
  },
  {
    id: "d2de555108742e0390e3e11df24423ba",
    title:
      "[슈라멕] ★단한번★☆한창서패키지☆ 독일 직수입 슈라멕 블레미쉬밤 클래식 30ml 4통+♡리뷰시♡ 본품 1통 더+체험분 2매+브러쉬+파우치",
    category: "롯데홈쇼핑",
    datetime: "26.07.19 22:35",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 3,
  },
  {
    id: "4e4b8fa8fba8fe8317a378c5efe3438e",
    title: "모이스춰라이징 앰플 400병패키지 프랑스 공식수입원 정품",
    category: "CJ온스타일",
    datetime: "26.07.19 22:40",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 4,
  },
  {
    id: "d8028c0170290e7d103ac7bcb602910e",
    title: "블라우풍트_오픈핏이어폰",
    category: "KT알파쇼핑",
    datetime: "26.07.19 22:39",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 1,
  },
  {
    id: "66b6f84873b3e43b04e0a61fdf924336",
    title: "푸마드로즈1",
    category: "NS홈쇼핑 샵플러스",
    datetime: "26.07.19 22:42",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 15,
  },
];
