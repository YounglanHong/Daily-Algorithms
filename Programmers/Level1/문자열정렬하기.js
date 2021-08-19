// 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915

// solution #1
function solution(strings, n) {
  return strings.sort((a, b) => {
    // 인덱스 n의 문자가 다른 문자열(오름차순)
      if(a[n] > b[n]) {
          return 1;
      } else if(a[n] < b[n]) {
          return -1;
      // 인덱스 n의 문자가 같은 문자열(오름차순)
      } else { // a[n] === b[n]
          if(a > b) return 1;
          else if(a < b) return -1;
          else return 0;
          // return (a > b ? 1 : (a < b ? -1 : 0));
      }
  });
}

// solution #2
// sort 2회(제일 빠른 솔루션)
function solution(strings, n) {
  return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n))
}

// solution #3
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
function solution(strings, n) {
  return strings.sort((a, b) => (a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])));
}