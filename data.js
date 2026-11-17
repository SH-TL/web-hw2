const titles = [
    "스파이더맨: 브랜드 뉴 데이",
    "스파이더맨: 홈커밍",
    "스파이더맨: 노 웨이 홈",
    "스파이더맨: 파 프롬 홈",
    "어벤져스: 인피니티 워",
    "하트 오브 비스트",
    "극장판 치이카와: 인어 섬의 비밀",
    "암살자(들)",
    "수능, 출제의 비밀",
    "진격의 거인:홍련의 화살",
];

const ratings = [
    8.5, 7.3, 7.9, 7.4, 8.2, 7.3, 7.6, 7.5, 7.0, 8.1
];

const years = [
    2026, 2017, 2021, 2019, 2018, 2026, 2026, 2026, 2026, 2015
];

const audiences = [
    0, 0, 0, 0, 0, 236100, 2599005, 3453117, 76615, 76397
];

// Part B : 영화 객체 10건(Part A와 같은 순서)
const movies = [
 { title: "스파이더맨: 브랜드 뉴 데이", year: 2026, date: "2026-07-29", rating: 8.5,
 audience: 0, poster: "/mt6uZzy7DAsncHlGGzMsyNgLR6v.jpg", type: "mine", rank: null },

 { title: "하트 오브 비스트", year: 2026, date: "2026-10-28", rating: 7.3,
 audience: 236100, poster: "/zC4E522V1n3H4SGdYOaiqhF5DnS.jpg", type: "boxoffice", rank: 1 },
 // 같은 모양으로 8건 더(내 영화 4편을 먼저, 박스오피스 2~5위를 나중에)

  { title: "스파이더맨: 홈커밍", year: 2017, date: "2017-07-05", rating: 7.3,
 audience: 0, poster: "/hjki9weYYVABvkpZbX5jBOmKXXv.jpg", type: "mine", rank: null },

  { title: "스파이더맨: 노 웨이 홈", year: 2021, date: "2021-12-15", rating: 7.9,
 audience: 0, poster: "/fvqoI9r1GU2EFkc0xjZ6dKCuDVR.jpg", type: "mine", rank: null },

  { title: "스파이더맨: 파 프롬 홈", year: 2019, date: "2019-06-28", rating: 7.4,
 audience: 0, poster: "3YewJtji80oIroeXUavNRZkeXfQ.jpg", type: "mine", rank: null },

  { title: "어벤져스: 인피니티 워", year: 2018, date: "2018-04-25", rating: 8.2,
 audience: 0, poster: "/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg", type: "mine", rank: null },

  { title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2016-09-30", rating: 7.6,
 audience: 2599005, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 2 },

  { title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.5,
 audience: 3453117, poster: "/mCUZLymzVjfYJXEON4wg8ilx2H8.jpg", type: "boxoffice", rank: 3 },

  { title: "수능, 출제의 비밀", year: 2026, date: "2026-10-28", rating: 7.0,
 audience: 76615, poster: "/ohrJjtvKciICoeH80z973JnBoHo.jpg", type: "boxoffice", rank: 4 },

  { title: "진격의 거인:홍련의 화살", year: 2015, date: "2015-01-28", rating: 8.1,
 audience: 76397, poster: "/oMuxM0n4EZ4SILoTUsdruJoUAfe.jpg", type: "boxoffice", rank: 5 },
];