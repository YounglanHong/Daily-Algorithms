// 11-print
// Queue
// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  // 인쇄 대기목록
  let queue = Array.from({ length: priorities.length }, (v, i) => i),
    first = 0, // J(맨 앞 문서)
    max = Math.max(...priorities);

  for (let i = 1; i < priorities.length; i++) {
    // 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서 존재하면
    if (first < priorities[i]) {
      // J 대기목록 마지막으로 이동
      queue.push(queue.shift());
      first = queue[0];
    }
    // 탈출조건: queue의 맨 앞 요소의 중요도가 가장 높을 때
    if (max === priorities[first]) break;
  }
  return queue.indexOf(location) + 1; // location의 인쇄 순번
}

// solution([2, 1, 3, 2], 2)       // 1
// solution([1, 1, 9, 1, 1, 1], 0) // 5
// solution([2, 1, 2, 1, 2], 3)    // 5
