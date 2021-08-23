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
function solution(n) {
  let total = [];
  for(let i = 1; i <= Math.sqrt(n); i++) {
    if(n % i === 0) {
      total.push(i, n / i); // pair: (3, 4), (2, 6), (1, 12)
    }
  }
  return total.reduce((acc, curr) => acc + curr);
}