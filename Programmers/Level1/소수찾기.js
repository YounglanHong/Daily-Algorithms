// 소수찾기
// https://programmers.co.kr/learn/courses/30/lessons/12921#


// solution #1
// 효율성 실패
function isPrime(n) {
  if(n === 2 || n === 3) return true;
  // 1과 자신 제외(제곱수 포함)
  const root = Math.sqrt(n);
  // for(let i = 2; i * i <= n; i++) {
  for(let i = 2; i <= root; i++) {
     if(n % i === 0) {
        return false;
     } 
  }
  return true;
}

function solution(n) {
  let count = 0;
  // 시간 초과 (1000000 x 1000)
  for(let i = 2; i <= n; i++) {
      if(isPrime(i)) count++;
  }
  return count;
}

// solution #2
// 에라토스테네스의 체(효율성)
function solution(n) {
  let nums = new Array(n+1).fill(0);
  for(let i = 2; i <= n; i++) {
      nums[i] = i;
  }
  // 2 ~ n 까지 숫자의 배수는 0
  for(let i = 2; i <= n; i++) {
      if(nums[i] === 0) continue;
      
      for(let j = i*2; j <= n; j += i) {
          nums[j] = 0;
      }
  }
 
  // 0이 아닌 숫자만 소수 
  nums = nums.filter(v => v !== 0);
  return nums.length;
}