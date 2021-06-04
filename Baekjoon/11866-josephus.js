// 11866-요세푸스 
// https://www.acmicpc.net/problem/11866
// 원형 큐

const fs = require('fs');

const input = fs.readFileSync("input.js").toString().split(" ").map((v) => +v);
// console.log(input);

const permute = (arr) => {
  const [N, K] = [arr[0], arr[1]]; 

  // console.log(N, K);

  // const queue = Array.from({length: N}, (v, i) => i+1);
  const queue = [];
  for(let j = 1; j < N + 1; j++) {
    queue.push(j);
  }
  // console.log(queue)
  let result = [];

  while(queue.length !== 0) {
    for(let i = 0; i < K; i++) {
      queue.push(queue.shift()); // K번째 인덱스
    }
    result.push(queue.pop()); // push한 요소
  }
  console.log(`<${result.join(", ")}>`)

}

permute(input);