// 괄호 회전하기
// 문자열 & 스택
// https://programmers.co.kr/learn/courses/30/lessons/76502
// https://prgms.tistory.com/47
// 시간복잡도: O(n ^ 2)

// Solution #1
// 괄호 같은 쌍인지 판별
const checkMatch = (p1, p2) => {
  if(p1 === "(" && p2 === ")") {
      return true;
  } else if(p1 === "[" && p2 === "]") {
      return true;
  } else if(p1 === "{" && p2 === "}") {
      return true;
  } else {
      return false;
  }
}

// 올바른 괄호 문자열인지 판별
const correctParen = (str) => {
  let stack = [];
  for(let i=0; i < str.length; i++) {
      
      if(str[i] === "(" || str[i] === "[" || str[i] === "{") {
          stack.push(str[i]);
      } else {
          if(checkMatch(stack[stack.length - 1], str[i])) stack.pop();
      }
  }
  return (stack.length === 0) ? true : false;
}

// 괄호 문자열 회전 
const rotate = (str) => {
  let temp = str.substring(1);
  return temp + str[0];
}
// OR const rotate = (str) => str.slice(1) + str[0];

function solution(s) {
 let count = 0;
 // 홀수 경우 제외
 if(s.length % 2 === 1) return 0;
 // 기존 괄호 문자열 체크
 if(correctParen(s)) count++;
 // 🔑 마지막 인덱스는 처음으로 돌아오기 떄문에 제외
 for(let n = 0; n < s.length - 1; n++) {
     // console.log(count)
     s = rotate(s);
     if(correctParen(s)) count++;
 }
 return count;
}

// solution("}}}")  // 0