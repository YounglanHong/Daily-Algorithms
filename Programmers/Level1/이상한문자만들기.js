// 이상한 문자 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12930

// solution #1
// 매개변수 대소문자 명시 X
function solution(s) {
  // 하나 이상의 공백 문자로 구분   // "bye      world"
  let chars = s.split("");  // 🔑(단어 단위 아닌 한 글자씩)
  let prev = 0; // 공백 이전 인덱스
    
  for(let i = 0; i < chars.length; i++) {
      if(s[i] === " ") prev = i+1;
      // console.log(i, prev, chars[i])
      // 공백 이후 새로운 단어 시작
      if((i - prev) % 2 === 0) {
         chars[i] = chars[i].toUpperCase();
      } else {
         chars[i] = chars[i].toLowerCase();
      }
  } 
  return chars.join("");
}

// solution #2
function solution(s) {
  // 문자열을 단어 단위, 문자 단위로 각각 나누어 조건 파악
  let newStr = s.split(" ").map(word => {
      return word.split("").map((char, i) => {
          return (i % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
      }).join("");
  }).join(" ");
  return newStr;
}


