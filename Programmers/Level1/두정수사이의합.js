// 두 정수 사이의 합
// https://programmers.co.kr/learn/courses/30/lessons/12912

// solution #1
function solution(a, b) {
  let sum = 0;
  if(a === b) return a;
  
  for(let i = Math.min(a, b); i < Math.max(a, b) + 1; i++) {
      sum += i;
  }
  return sum;
}

// solution #2
// 가우스 공식: 등차수열의 합
// a1 + a2 + .... + an = (1/2) * n * (a1 + an)
function solution(a, b) {
  if(a === b) return a;
  let min = Math.min(a, b); // a1
  let max = Math.max(a, b); // an
  let abs = Math.abs(b-a) + 1; // n

  let sum = (1/2) * abs * (min + max);
  return sum;
}