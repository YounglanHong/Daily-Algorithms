// 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644

// solution #1
function solution(numbers) {
  // 배열에서 두개의 수의 합 오름차순 중복없이 반환
  let sumSet = new Set();
   
  for(let i=0; i < numbers.length; i++) {
    for(let j=i+1; j < numbers.length; j++) {
       sumSet.add(numbers[i]+ numbers[j])
    }
  }
   
  // set을 Array로 변환하기 위해 전개 연산자 사용
  return [...sumSet].sort((a, b) => a - b);
}