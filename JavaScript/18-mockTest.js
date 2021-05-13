// 모의 고사
// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  let answer = [];
  const students = [[1, 2, 3, 4, 5],
                 [2, 1, 2, 3, 2, 4, 2, 5],
                 [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  let score = [0, 0, 0];
  
  // students 배열의 길이 만큼 나눈 몫 활용
  for(let i = 0; i < answers.length; i++) {
      if(answers[i] === students[0][i%5]) {
         score[0]++;
      } 
      if(answers[i] === students[1][i%8]) {
         score[1]++;
      }
      if(answers[i] === students[2][i%10]) {
         score[2]++;
      }
  }
  // score 배열 최댓값 비교(중복 처리)
  for(let j=0; j < score.length; j++) {
      let max = Math.max(...score);
      if(max === score[j]) {
          answer.push(j + 1);
      }
  } 
  return answer.sort((a, b) => a - b); // 오름차순 정렬
}