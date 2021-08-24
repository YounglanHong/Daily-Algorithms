// 콜라츠 추측
// https://programmers.co.kr/learn/courses/30/lessons/12943

/* 콜라츠 추측: 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측
  1-1. 입력된 수가 짝수라면 2로 나눕니다. 
  1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
  2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
  (* 작업 제한: 500번)
*/

// solution #1
function solution(num) {
  let count = 0;
  while(num !== 1) {
    // even
    if(num % 2 === 0) {
       num = num / 2;
    // odd
    } else {
       num = (num * 3) + 1;
    }
    count++;
  }
  if(count > 499) return -1;
  return count;
}

// 삼항 연산자
function solution(num) {
  let count = 0;
  while(num !== 1) {
    num = (num % 2 === 0) ? (num / 2) : (num * 3) + 1;
    count++;
  }
  if(count > 499) return -1;
  return count;
}

// solution #2
function solution(num) {
   let count = 0;

   while(count < 500) {
     if(num === 1) return count;
     num = (num % 2 === 0) ? (num / 2) : (num * 3) + 1;
     count++;
   }
   return -1;
}