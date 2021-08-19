// 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918#


// solution #1
function solution(s) {
  const N = s.length;

  if(N === 4 || N === 6) {
      if(s.includes("e")) return false;
      // Number(s) || parseInt(s) || +s === NaN
      return +s ? true : false;
  }
  return false;    
}

// solution #2
// 정규 표현식
function solution(s) {
  const regex = /^\d{6}$|^\d{4}$/;
  return s.search(regex) < 0 ? false : true;
}