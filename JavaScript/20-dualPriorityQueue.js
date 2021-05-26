// 20-dualPriorityQueue
// https://programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
  const queue = [];
  let max = 0, min = 0;
  for(let operation of operations) {
      const [command, num] = operation.split(" ");
      if(command === "I") {
          queue.push(parseInt(num))
      } else {
          if(parseInt(num) === 1) {
             max = Math.max(...queue);
             queue.splice(queue.indexOf(max), 1);
          } else if(parseInt(num) === -1){
             min = Math.min(...queue);
             queue.splice(queue.indexOf(min), 1);
          }
     }
  }
  max = Math.max(...queue);
  min = Math.min(...queue);

  return queue.length ? [max, min] : [0, 0];
}