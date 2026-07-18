// 방송 데이터 (과제 페이지에서 직접 확보한 값)
// - 라이브 방송(lb)과 홈쇼핑(hs)은 원본 필드 이름이 서로 다르지만,
//   표에서 똑같이 다루기 위해 아래 하나의 Broadcast 모양으로 통일(정규화)했다.
// - 조회수/판매량/매출액은 페이지에서 잠겨(🔒) 있어 값이 없으므로 null.

// 방송 유형: 라이브 방송 / 홈쇼핑
export type BroadcastType = "live" | "home";

// 표 한 줄에 필요한 방송 정보 (두 유형 공통 모양)
export interface Broadcast {
  id: string; // 고유 id (React 목록의 key로 사용)
  title: string; // 제목
  category: string; // 분류 (라이브=플랫폼, 홈쇼핑=카테고리)
  datetime: string; // 방송시간 (표시용으로 "YY.MM.DD HH:MM" 포맷)
  views: number | null; // 조회수/시청률 (잠김이면 null)
  salesCount: number | null; // 판매량 (잠김이면 null)
  salesAmount: number | null; // 매출액 (잠김이면 null)
  productCount: number; // 상품수
}

// 라이브 방송 (앞 10개)
// ⚠️ category(분류)는 플랫폼명이다. 아래 라벨이 페이지의 "분류" 칸과
//    정확히 같은지 확인하고 다르면 고칠 것.
export const liveBroadcasts: Broadcast[] = [
  {
    id: "4f7c6e090208304e1848c6e93714ce4e",
    title: "[AI]⭐삼성 TV,에어컨⭐ 삼성이 선물하는 스마트 라이프",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.17 12:00",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 52,
  },
  {
    id: "63ce043d66fc7e2a899920589cb3a4fe",
    title: "[AI라이브] 🏡TV,사운드바,공청기, 오늘 다솜에서 가전 다품목!",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.17 12:03",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 40,
  },
  {
    id: "3e00f1aafbc433dcf4af137afad20324",
    title: "👀삼성가전 총 출동! 라이브로 만나보세요",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.17 11:58",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 39,
  },
  {
    id: "62ba75d6559fb2e5ed448ab986eed3c0",
    title: "💥삼성 에어컨 냉장고 김치냉장고 키친핏 세트 Live사은품🎁[AI]",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.17 12:01",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 46,
  },
  {
    id: "6980bb630bb44310fbaf8c075165b4d6",
    title: "다시보는 한샘🛋️ 한샘의 베스트 소/파/특/집 할인",
    category: "CJ온스타일",
    datetime: "26.07.17 13:00",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 59,
  },
  {
    id: "1a681d55a2ecd83acb2e245eb8ba1d26",
    title: "[신일S11 서큘레이터] 7%+7% 할인! 더블7페스타",
    category: "GS SHOP",
    datetime: "26.07.17 13:00",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 4,
  },
  {
    id: "3f5c988a82c21b150ceaa11e6907b342",
    title: "[퓨어플러스] 아보카도 오일 쇼라 한정! 사은품 증정",
    category: "현대Hmall",
    datetime: "26.07.17 13:00",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 8,
  },
  {
    id: "b95f8094c7f3414c76b69fc22fb5f068",
    title: "[7/17] 하만카돈 X JBL 스피커 이어폰 썸머 이벤트",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.17 13:03",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 30,
  },
  {
    id: "d76d3c8b92c096ece9ac0a72138b793c",
    title: "[갤럭시탭S10+오늘끝딜]갤럭시탭 A11+/S10L/S11 혜택라이브📺",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.17 12:58",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 4,
  },
  {
    id: "7a5348362c64927b7e280243598fbf40",
    title: "[AI라이브] 🎀 7월 가정의 달, 삼성 비스포크로 주방을 업그레이드!",
    category: "네이버쇼핑LIVE",
    datetime: "26.07.17 12:59",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 18,
  },
];

// 홈쇼핑 (앞 10개)
export const homeBroadcasts: Broadcast[] = [
  {
    id: "42fdf74e671a8a6e6141f49c3c948339",
    title: "(무)흥Good 든든한 3N5 간편종합보험(치료비+생활비플랜)",
    category: "여가/생활편의",
    datetime: "26.07.17 13:35",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 1,
  },
  {
    id: "bb82866989b21b38619500edaf930866",
    title: "비에날씬 프로 다이어트 유산균(6박스)",
    category: "식품",
    datetime: "26.07.17 13:30",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 3,
  },
  {
    id: "2570d1a9fa4cbd39120480bca1f287cb",
    title: "[50% SALE+앱10%] 아이스 초경량 에센셜 커버플러스 5세트",
    category: "패션의류",
    datetime: "26.07.17 13:35",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 1,
  },
  {
    id: "2de57419b4365e4226e07ea13fda885c",
    title: "[방송에서만][Calvin Klein] 26SS 캘빈클라인 썸머 레이온 컴포트 드로즈 (27차)",
    category: "패션의류",
    datetime: "26.07.17 13:30",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 1,
  },
  {
    id: "47c6da3b7d4c1863ee1f951f3c02d84b",
    title: "브로킹냉감소파매트",
    category: "가구/인테리어",
    datetime: "26.07.17 13:30",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 4,
  },
  {
    id: "954dbba58664a4e4b3b2872f350f52f6",
    title: "[방송에서만]라포레 스타일 텀블러 풀세트(900ml 2개+ 600ml 1개+ 400ml 1개)",
    category: "생활/건강",
    datetime: "26.07.17 13:31",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 1,
  },
  {
    id: "fc470c43adc0b9abae9050b2b7597eb2",
    title:
      "(조윤주 패키지)[35회 관리] 리브이셀 콜라겐 투명 랩핑 마스크 30g x 총 35매 (총 7박스) 최저가 패키지",
    category: "화장품/미용",
    datetime: "26.07.17 13:33",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 5,
  },
  {
    id: "6ef561e347d49e918d9ea4a27e9422e5",
    title: "[우리참바다] 국내산 참돔 320g(2미)×6팩+250g×1미 추가구성",
    category: "식품",
    datetime: "26.07.17 13:40",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 6,
  },
  {
    id: "886f1b1ac7e1dca62996b9dd86462048",
    title: "슈리오 소가죽 주얼 키높이 샌들",
    category: "패션잡화",
    datetime: "26.07.17 13:34",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 1,
  },
  {
    id: "9c8a30833fdfabde057bcba92e5eb177",
    title: "몽크로스_바디서큘레이터",
    category: "디지털/가전",
    datetime: "26.07.17 13:36",
    views: null,
    salesCount: null,
    salesAmount: null,
    productCount: 2,
  },
];
