// 2021 카카오 신입 공채 1차
// 메뉴 리뉴얼
// https://programmers.co.kr/learn/courses/30/lessons/72411
// https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/

// Solution #1
// 조합(완전탐색)

const getCombinations = (arr, count) => {
  const result = [];
  if (count === 1) return arr.map((val) => [val]); 

  arr.forEach((pfx, idx, arr) => {
    const rest = arr.slice(idx + 1); // pfx를 제외한 나머지
    const combinations = getCombinations(rest, count - 1); // 나머지에 대한 조합
    combinations.forEach((combination) => {
        let str = pfx;
        for(let char of combination) {
            str += char
        }
        result.push(str);
    })
  });
  return result; 
}

function solution(orders, course) {
    let results = new Set();  // 중복 처리
    
  for(let c of course) {
    let arr = [], obj = {};
      for(let order of orders) {
        const splited = order.split('');
        arr.push(getCombinations(splited, c)); // 각 코스별 모든 조합
      }
      arr = arr.flat(); // 중첩 배열 제거
    
      let temp = [];
      arr.forEach((str) => {
        str = str.split('').sort().join(''); // 중복 제거("WX" vs. "XW" )
        if(obj[str]) { obj[str]++;} 
        else { obj[str] = 1;}
        // 빈도수 2 이상인 메뉴 조합만 분리
        if(obj[str] >= 2) temp.push({"menu": str, "freq": obj[str]});
        temp.sort((a, b) => b.freq - a.freq);  // 빈도수 기준 내림차순 정렬
      })
      // 빈도수 최대인 경우만 결과 set 추가
      for(let t of temp) {
          let maxItem = temp[0].freq;
          if(t && t.freq >= maxItem) {
              results.add(t.menu)
          } else {
              results.add(temp[0].menu);
          }
      }
  }
  return [...results].sort();
}