// 모두 0으로 만들기
// 트리 역방향 탐색 & 그리디
// https://programmers.co.kr/learn/courses/30/lessons/76503
// https://prgms.tistory.com/47
// 시간복잡도: O(n)

// Solution #1(실패)
function solution(a, edges) {
  let count = 0;
  let zeroWeight = a.every((a) => a === 0);
  
  edges.forEach((point) => {
    for(let i=0; i < a.length; i++) {
       if(a[point[0]] + a[point[1]] !== 0) {
          if(a[point[0]] > a[point[1]]) {
            a[point[0]]--;
            a[point[1]]++;
          } else {
            a[point[0]]++;
            a[point[1]]--;
          }
       }  
    }   
  })
  return count;
}