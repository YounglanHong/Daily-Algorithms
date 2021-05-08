// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501
// 시간복잡도: O(n)

function solution(absolutes, signs) {
  let sum = 0;
  for(let i=0; i < absolutes.length; i++) {
      sum += (signs[i]) ? absolutes[i] : absolutes[i] * (-1);
  }
  return sum;
}