import { Place } from "./types";

export const INITIAL_PLACES: Place[] = [
  {
    id: "preset-1",
    name: "어니언 성수 (onion)",
    category: "카페",
    address: "서울특별시 성동구 아차산로9길 8",
    latitude: 37.5446,
    longitude: 127.0559,
    hours: "매일 08:00 - 22:00 (라스트오더 21:30)",
    menu: [
      { name: "팡도르 (Pandoro)", price: "6,000원" },
      { name: "아메리카노", price: "5,300원" },
      { name: "앙버터", price: "5,500원" }
    ],
    reviewSummary: "폐공장을 개조한 성수동 대표 힙스터 감성 카페. 슈가 파우더 가득한 팡도르가 매우 인기이며, 이국적이고 빈티지한 사진 맛집으로 유명합니다.",
    screenshotText: "#성수동카페 #어니언 #onion 성수동 대표 핫플 드디어 방문! 팡도르 너무 달콤하고 맛있어요...",
    createdAt: new Date().toISOString()
  },
  {
    id: "preset-2",
    name: "난포 성수",
    category: "식당",
    address: "서울특별시 성동구 서울숲4길 18.000",
    latitude: 37.5471,
    longitude: 127.0425,
    hours: "매일 11:00 - 21:30 (브레이크타임 15:50 - 17:00)",
    menu: [
      { name: "강된장쌈밥", price: "12,000원" },
      { name: "돌문어국수", price: "14,000원" },
      { name: "제철회묵은지말이", price: "13,000원" }
    ],
    reviewSummary: "정갈한 퓨전 한식 맛집으로 곰취 강된장쌈밥과 제철회묵은지말이가 시그니처입니다. 분위기가 고급스럽고 맛이 삼삼해서 항상 대기가 긴 숲길 맛집.",
    screenshotText: "서울숲 한식 핫플 난포 드디어 ㅠㅠ 강된장 쌈밥 대박 고소하고 제철회묵은지말이도 넘 맛있어요!",
    createdAt: new Date().toISOString()
  },
  {
    id: "preset-3",
    name: "서촌 율한 (독채 한옥숙소)",
    category: "펜션/숙소",
    address: "서울특별시 종로구 필운대로5가길 12",
    latitude: 37.5802,
    longitude: 126.9691,
    hours: "체크인 15:00 / 체크아웃 11:00",
    menu: [
      { name: "평일 독채 1박", price: "320,000원" },
      { name: "주말 독채 1박", price: "420,000원" }
    ],
    reviewSummary: "서촌의 한적한 주택가에 있는 자쿠지 탑재 고급 한옥 펜션. 프라이빗 자쿠지에서 스파를 즐기며 조용하고 고즈넉한 시간을 보낼 수 있습니다.",
    screenshotText: "서촌 골목 한옥 독채 숙소에서 주말 힐링 자쿠지 너무 이뻐요...",
    createdAt: new Date().toISOString()
  },
  {
    id: "preset-4",
    name: "서울숲 공원",
    category: "관광지/기타",
    address: "서울특별시 성동구 동부간선도로 273",
    latitude: 37.5443,
    longitude: 127.0374,
    hours: "24시간 운영 (연중무휴)",
    menu: [
      { name: "공원 입장료", price: "무료" },
      { name: "자전거 대여 (1시간)", price: "4,000원" }
    ],
    reviewSummary: "도심 속 자연을 만끽하기 좋은 거대한 녹지 공간. 사슴 방사장, 생태숲, 튤립 정원 등 다양한 볼거리와 피크닉을 즐기기 아주 좋은 서울의 랜드마크 공원입니다.",
    screenshotText: "#서울숲 피크닉 가기 딱 좋은 날씨! 사슴들도 너무 귀엽고 숲길 산책하면 힐링 그 자체...",
    createdAt: new Date().toISOString()
  }
];

// Provide some preset screenshots with real designs for the user to try instantly without searching their phone!
export const DEMO_SCREENSHOTS = [
  {
    name: "성수 대형 에스프레소 바 캡처",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=80",
    promptHint: "성수동 에스프레소 바 스크린샷 텍스트 추출 시뮬레이션"
  },
  {
    name: "제주도 감성 독채 펜션 캡처",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80",
    promptHint: "제주 애월읍 감성 한옥 숙소 스크린샷 텍스트 추출 시뮬레이션"
  },
  {
    name: "한남동 퓨전 정식 파스타 맛집 캡처",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
    promptHint: "이태원 한남동 미슐랭 파스타 맛집 스크린샷 텍스트 추출 시뮬레이션"
  }
];
