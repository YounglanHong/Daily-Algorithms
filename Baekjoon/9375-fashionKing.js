// 9375-패션왕 신해빈
// https://www.acmicpc.net/problem/9375
// https://github.com/YounglanHong/na-toy-problems/blob/master/src/day-05/02.hash.js

const fs = require('fs');

const input = fs.readFileSync("input.js").toString().split("\n");
// console.log(input)

const n = parseInt(input[0]);
// console.log(n);

let idx = 0;
for(let i = 1; i <= n; i++) {
  const clothesObj = {};
  const test = parseInt(input[++idx]);
  for(let j = 1; j <= test; j++) {
    input[j + idx] = input[j + idx].split(" ");
    const [cloth, category] = input[j + idx];
    
    if(clothesObj[category]) {
      clothesObj[category].push(cloth);
    } else {
      clothesObj[category] = [cloth];
    }
  }
  idx += test;
  let answer = 1;
  Object.keys(clothesObj).map((key) => {
    answer *= (clothesObj[key].length + 1);
  });
  // 하나도 고르지 않은 경우 -1('최소 한 개의 의상은 입는다')
  console.log(answer - 1);
}


