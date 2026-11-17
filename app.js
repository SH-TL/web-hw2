// ===== Part A ===== 

let A1 = 0;
for (let i = 0; i < 10; i++) {
    A1 += ratings[i];
}
console.log(`A1 평균 평점 : ${A1 / 10}`);

let maxA2 = 0;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > ratings[maxA2]) {
        maxA2 = i;
    }
}
console.log(`A2 최고 평점 : ${titles[maxA2]} ${ratings[maxA2]}`);

let A3 = 0;
for (let i = 0; i < 10; i++) {
    if (ratings[i] >= 8.0) {
        A3++;
    }
}
console.log(`A3 8점 이상 : ${A3}편`);

let zerozero = 0;
let ten = 0;
let twenty = 0;
let past = 0;

for (let i = 0; i < 10; i++) {
    if (years[i] >= 2020) {
        twenty++;
    }
    else if (2010 <= years[i] < 2020) {
        ten++;
    }
    else if (2000 <= years[i] < 2010) {
        zerozero++;
    }
    else {
        past++;
    }
}
console.log(`A4 2020년대 ${twenty}편, 2010년대 ${ten}편, 2000년대 ${zerozero}편, 그 이전 ${past}편`);

let A5 = "";
for (let i = 0; i < 10; i++) {
    if (audiences[i] >= 1000000) {
        A5 += titles[i] + " / ";
    }
}
if (A5 == "") {
    A5 = "없음";
}
console.log(`A5 관객 100만 이상 : ${A5}`);


// ===== Part B =====

// average : list ⇒ 평균 평점
function average(list) {
    return averageBy(list, "rating");
}

// best : list ⇒ 최고 평점 영화
function best(list) {
    let top = list[0];
    for (const m of list) {
        if (m.rating > top.rating) {
            top = m;
        }
    }
    return top;
}

// filterByRating : list, min ⇒ 배열
const filterByRating = (list, min) => {
    return list.filter(m => m.rating >= min);
}

// sortBy : list, key, desc ⇒ 배열
function sortBy(list, key, desc) {
    const sign = desc ? -1 : 1;
    return [...list].sort((a, b) => {
        if (typeof a[key] === "string") {
            return a[key].localeCompare(b[key]) * sign;
        }
        return (a[key] - b[key]) * sign;
    });
}

// search : list, keyword ⇒ 배열
function search(list, keyword) {
    const word = keyword.trim().toLowerCase();
    return list.filter(m => m.title.toLowerCase().includes(word));
}

// formatNumber : n ⇒ 문자열
function formatNumber(n) {
    return Number(n).toLocaleString("ko-KR");
}

// yearsSince : dateStr ⇒ 개봉 후 지난 연도
function yearsSince(dateStr) {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

const bestMovie = best(movies);

document.getElementById("out").textContent =
    `전체 10편, 평균 평점 ${average(movies).toFixed(1)}점\n` +
    `최고 평점 ${bestMovie.title} (${bestMovie.rating}점, 개봉한 지 ${yearsSince(bestMovie.date)}년)\n` +
    `관객 1위 ${sortBy(movies, "audience", true)[0].title} (누적 ${formatNumber(sortBy(movies, "audience", true)[0].audience)}명)`;


// ===== Part C =====

function getList(data) {
    return data.results;
}

function averageBy(list, key) {
    let sum = 0;
    for (const m of list) {
        sum += m[key];
    }
    return sum / list.length;
}

console.log(`C1: ${TMDB.page}, ${TMDB.total_pages}, ${TMDB.total_results}, ${getList(TMDB).length}`);

console.log(`C2 상영작 평균 평점: ${averageBy(getList(TMDB), "vote_average").toFixed(1)}`);

console.table(sortBy(getList(TMDB), "vote_average", true).slice(0, 5), ["title", "release_date", "vote_average"]);

console.log(`C4 검색 결과: ${search(getList(TMDB), "검색어").length}`);