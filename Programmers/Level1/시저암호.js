// 시저 암호
// https://programmers.co.kr/learn/courses/30/lessons/12926

// solution #1
// upper: 65 ~ 90, lower: 97 ~ 122, space: 32
/* 구간 나누고, 구간 안에서 밀림 계산
   1구간: A(65) ~ Z(90) -> 90이하, 그 외 
   2구간: a(97) ~ z(122) -> 122이하, 그 외
   3구간: 공백(32)
*/

function solution(s, n) {
  let curr = "",
      next = "", 
      res = "";
  for(let i=0; i < s.length; i++) {
      curr = s.charCodeAt(i);
      next = s.charCodeAt(i) + n;
      // A ~ Z
      if(curr >= 65 && curr < 91) {
          if(next <= 90) res += String.fromCharCode(next);
          else res += String.fromCharCode(next - 26);
      // a ~ z
      } else if(curr >= 97 && curr < 123) {
          if(next <= 122) res += String.fromCharCode(next);
          else res += String.fromCharCode(next - 26);
      // 공백
      } else {
          res += " ";
      }
  }
  return res;
}

// solution("Z", 10) // "J"