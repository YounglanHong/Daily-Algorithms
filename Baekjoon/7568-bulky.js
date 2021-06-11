// 7568-덩치
// https://www.acmicpc.net/problem/7568

const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
                
const N = parseInt(input.shift());
const inputs = input.map(v => v.split(" "));

let results = [];

for(let i = 0; i < N; i++) {
  let rank = 1;
   for(let j = 0; j < N; j++) {
     if(i !== j) {
      if(inputs[i][0] < inputs[j][0] && inputs[i][1] < inputs[j][1]) rank++;
     }
   }
   results.push(rank);
}
console.log(results.join(" "));
