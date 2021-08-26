// 짝수와 홀수
// https://programmers.co.kr/learn/courses/30/lessons/12937

// solution #1
function solution(num) {
  let expr = Math.abs(num % 2);
  
  switch(expr) {
    case 1:
      return "Odd";
 /* case -1:
      return "Odd"; */
    case 0:
      return "Even";
  } 
}

// solution #2
// truthy and falsy
function solution(num) {
  if(num % 2) {
    return "Odd"; // 1(truthy)
  } else {
    return "Even" // 0(falsy)
  }
}

// solution #3
// 삼항 연산자
function solution(num) {
  return (num % 2) ? "Odd" : "Even";
}