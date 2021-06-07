// 2164 card two

// 🔥시간 초과
const fs = require('fs');

const input = fs.readFileSync("input.js").toString();

const solution = (N) => {
  let queue = [];
  for(let i=1; i <= N; i++) {
    queue.push(i);
  }
  // Queue에 요소가 하나 남을 때까지
  while(queue.length > 1) {
    queue.shift(); // 맨 위 요소 버리고,
    queue.push(queue.shift()); // 그 다음 맨 위 요소 아래로 이동
    // console.log(queue)
  }
  console.log(queue.pop());
} 

solution(Number(input));