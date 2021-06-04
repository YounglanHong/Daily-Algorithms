// 4949-균형잡힌 세상
// https://www.acmicpc.net/problem/4949

const fs = require('fs');

const input = fs.readFileSync("input.js").toString().split("\n"); 
// console.log(input)

const balanced = (line) => {

  let flag = true;
  let stack = [];

    // 입력의 종료조건
    if(line[0] === ".") {
      return;
    }

    for(let i = 0; i < line.length; i++) {
      if(line[i] === "(" || line[i] === "[") {
        stack.push(line[i]);
      } else if (line[i] === ")") {
        if(stack[stack.length -1] === "(") {
          stack.pop();
        } else {
          flag = false;
          break;
        }
      } else if(line[i] === "]") {
        if(stack[stack.length -1]  === "[") {
          stack.pop();
        } else {
          flag = false;
          break;
        }
      }
    }
    // console.log(stack)
    console.log(flag ? "yes" : "no")
    // return flag ? "yes" : "no"
}

input.forEach(line => {
  balanced(line);
}) 
