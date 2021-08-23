// 약수의 합
// https://programmers.co.kr/learn/courses/30/lessons/12928

// solution #1
function solution(n) {
  let sum = 0;
  
  for(let i = 1; i <= n; i++) {
      if(n % i === 0) sum += i;
  }
  return sum;
}

// solution #2
// 제곱근
// 
function solution(n) {
  let sum = 0;
  if(n === 1) return 1;
    
  for(let i = 0, j = Math.sqrt(n); i < j; i++) {
    if(n % i === 0) {
      sum += i + (n / i); // pair: (3, 4), (2, 6), (1, 12)
    }
  }
  return sum;
}