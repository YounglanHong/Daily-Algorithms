// 17-kth Number
// Sorting
// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];
  for(let i=0; i < commands.length; i++) {
    let begin = commands[i][0] -1
    let end = commands[i][1]
    let target = commands[i][2] -1
    
    let list = array.slice(begin, end).sort((a,b) => a - b);
    answer.push(list[target]);
  }
  return answer;
}