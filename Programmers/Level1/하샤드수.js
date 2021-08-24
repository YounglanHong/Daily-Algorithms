// 하샤드 수
// 하샤드 수: 양의 정수 x의 자릿수의 합으로 x가 나누어짐
// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let sum = x.toString().split("")
             .reduce((acc, curr) => acc + curr*1, 0);
  if(x % sum === 0) return true;
  return false;
}