// 2805-나무자르기
// https://www.acmicpc.net/problem/2805
// 이분 탐색

const fs = require('fs');

const input = fs.readFileSync("input.js").toString().split("\n");

const [N, M] = input[0].split(" ").map(v => +v);

const inputs = input[1].split(" ").map(v => +v);

// inputs.sort((a, b) => a - b);

let left = 1;
let right = 2000000000;
// let mid = Math.floor((left + right) / 2);
// const result = [];

while(left <= right) {
  const mid = parseInt((left + right) / 2);
  const sum = inputs.reduce((acc, curr) => {
    if(curr > mid) {
      return acc + (curr - mid);
    } else {
      return acc;
    }
  }, 0)

  // 높이를 이분탐색
  if(sum >= M) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(left - 1);


