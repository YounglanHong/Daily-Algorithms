// 10773 zero

const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().split("\n").map((v) => +v);
// console.log(input);

const solution = (array) => {
  let count = array[0], sum = 0;
  const stack = [];
  for(let i = 1; i <= count; i++) {
    if(array[i] === 0) {åå
      // 0이면 스택 마지막 요소 제거
      stack.pop();
    } else {
      // 0 아니면 스택에 추가
      stack.push(array[i]);
    }
    console.log(stack);
  }
  for(let j=0; j < stack.length; j++) {
    sum += stack[j];
  }
  console.log(sum);
}

solution(input);