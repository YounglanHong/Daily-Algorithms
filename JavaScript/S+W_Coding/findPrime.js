// Summer/Winter Coding
// 조합(재귀)
// https://programmers.co.kr/learn/courses/30/lessons/12977

// solution #1
// 소수 판별
function isPrime(num) {
  if(!num || num === 1) {
      return false;
  } 
  for(let i = 2; i <= num; i++) {
      if(num % i === 0 && num !== i) {
          return false;
      }
  }
  return true;
}
// 조합 구하기
/* 
 arr: [1, 2, 3, 4] // k 
 
 target: 1 => rest: [2, 3, 4] // k - 1
 target: 2 => rest: [3, 4]   //  k - 2
 target: 3 => rest: [4]     // k - 3
 target: 4 => rest: []      // k - 4
*/
function getCombinations(arr, n) {
  const res = [];
  let rest, combis, concated;
  if(n === 1) return arr.map((val) => [val]);
  
  arr.forEach((target, idx, arr) => {
      rest = arr.slice(idx + 1);
      combis = getCombinations(rest, n - 1);
      concated = combis.map((combi) => [target].concat(...combi));
      res.push(...concated);
  })
  return res;
}
// 소수 찾기
function solution(nums) {
  let count = 0, sum = 0;
  
  let combinations = getCombinations(nums, 3);
  combinations.forEach((comb) => {
      sum = comb.reduce((acc, curr) => acc + curr);
      if(isPrime(sum)) count++;
  })
  return count;
}

// solution #2
// 소수 판별
function isPrime(num) {
  if(!num || num === 1) {
      return false;
  } 
  for(let i = 2; i <= num; i++) {
      if(num % i === 0 && num !== i) {
          return false;
      }
  }
  return true;
}
// 소수 찾기
function solution(nums) {
  let count = 0, sum = 0, length = nums.length;
  // 완전 탐색
  for(let i = 0; i < length; i++) {
      for(let j = i+1; j < length; j++) {
          for(let k = j+1; k < length; k++) {
              sum = nums[i] + nums[j] + nums[k];
              if(isPrime(sum)) count++;
          }
      }
  }
  return count;
}