// 16-immigration
// Binary Search
// https://programmers.co.kr/learn/courses/30/lessons/43238

// solution #1
function solution(n, times) {
  // 🔑 최솟값, 최댓값 설정 후 범위를 좁혀서 최소시간 도출
  times.sort((a, b) => a - b); // 시간순 오름차순
  let left = 0,
      right = times[times.length -1] * n,
      mid = Math.floor((left + right) / 2);
  
  while(left <= right) {
      const sum = times.reduce((acc, curr) => acc + Math.floor(mid / curr), 0);
      // console.log(left, mid, right, sum)
      if(sum >= n) {
          right = mid - 1;
      } else {
          left = mid + 1;
      } 
      mid = Math.floor((left + right) / 2);
      // console.log(left, mid, right, sum)
  }
  return left; // 최솟값
}