// 11399-ATM
// https://www.acmicpc.net/problem/11399
// 조합, 누적합 --> 모든 조합 구할 필요 없이 조건 찾기
// 시간 오름 차순 정렬

const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = parseInt(input.shift());

const time = input[0].split(" ").map(v => +v).sort((a, b) => a - b);

let total = 0;

time.reduce((acc, curr, idx, time) => {
  time[idx] = acc + curr;
  return time[idx];
}, 0)

time.forEach(t => total += t);

console.log(total);




