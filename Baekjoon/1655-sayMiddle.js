// 1655-가운데를 말해요
// https://www.acmicpc.net/problem/1655
// 힙
// 정렬로 풀 수 없는 문제
/*
-10000 ~10000
O(N) * N
1 + 2 + 3+ 4 ...+ N
n(n+1)/2 => n ^2
*/
// 이진힙, 이진트리
// 최대힙, 최소힙 NlogN

function solution(N, input) { 
  console.log(typeof N, input); 
  const max = [], min = [];

  for(let i = 0; i < parseInt(N); i++) {
    let num = parseInt(input[i]);
    if(max.length === min.length) {
      max.push(num);
    } else {
      min.push(num);
    }

    max.sort((a, b) => a - b);
    min.sort((a, b) => a - b);

    if(max.length && min.length) {
      if(max[max.length - 1] > min[min.length - 1]) {
        let a = max[max.length - 1];
        let b = min[min.length - 1];

        max.pop();
        min.pop();

        max.push(b);
        min.push(a); // swap
      }
    }
    console.log(max[max.length - 1]);
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  // 입력 파싱
  console.log(input);
  solution(input[0], input.slice(1));
  
  process.exit();
});