// Summer/Winter Coding
// 예산
// 정렬
// https://programmers.co.kr/learn/courses/30/lessons/12982

// solution #1
function solution(d, budget) {
  let sum = 0, d_count = 0;
  d.sort((a, b) => a - b); // 오름차순 정렬
  
  for(let i = 0; i < d.length; i++) {
      sum += d[i];
      // 금액 합계가 예산 초과 시
      if(sum > budget) break;
      d_count++;
  }
  return d_count;
}

// solution #2
function solution(d, budget) {
  let d_count = 0;
  d.sort((a, b) => a - b); // 오름차순 정렬
  
  for(let i = 0; i < d.length; i++) {
      budget = budget - d[i];
      // 예산 초과 시
      if(budget < 0) break;
      d_count++;
  }
  return d_count;
}