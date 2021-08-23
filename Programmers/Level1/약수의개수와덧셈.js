// 약수의 개수와 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/77884

// solution #1
function divisor(num) {
  let count = 0;
  for(let i = 1; i <= num; i++) {
      if(num % i === 0) count++;
  }
  return count;
}

function solution(left, right) {
  let sum = 0;
  
  for(let i = left; i <= right; i++) {
      if(divisor(i) % 2) {
          sum -= i;
      } else {
          sum += i;
      }
  }
  return sum;
}

// solution #2
// 제곱근 정수 = 약수개수 홀수
// 16 [1, 2, 4, 8, 16]'s length	= 5

function solution(left, right) {
  let sum = 0;
  
  for(let i = left; i <= right; i++) {
      if(Number.isInteger(Math.sqrt(i))) {
          sum -= i;
      } else {
          sum += i;
      }
  }
  return sum;
}