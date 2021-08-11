// 상호 평가
// https://programmers.co.kr/learn/courses/30/lessons/83201


// solution #1
const getGrade = (grade) => {
  if(grade >= 90) return "A";
  else if(grade >= 80) return "B";
  else if(grade >= 70) return "C";
  else if(grade >= 50) return "D";
  else return "F";
}

const getUniqueVal = (arr, min, max, i) => {
 if(arr.indexOf(min) === i) {
    if(arr.filter(v => v === min).length === 1) {
       arr.splice(arr.indexOf(min), 1);
    }
 } else if (arr.indexOf(max) === i) {
    if(arr.filter(v => v === max).length === 1) {
       arr.splice(arr.indexOf(max), 1);
    } 
 } 
 return arr;
}

function solution(scores) {
  const N = scores.length;
  let feedback = [], idx = 0;
  let min = 0, max = 0, grades = "";
  
  while(idx < N) {
      let temp = [];
      for(let i = 0; i < N; i++) {
          temp.push(scores[i][idx]);
      }
      idx++;
      feedback.push(temp);
  }
  feedback.forEach((row, i) => {
      min = Math.min(...row);
      max = Math.max(...row);
      
      // 유일한 최고점 또는 최저점
      getUniqueVal(row, min, max, i);
  })
  
  feedback.forEach((row) => {
      // 초기값 0 없으면 런타임 에러
      let sum = row.reduce((acc, curr, arr) => acc + curr, 0);
      grades += getGrade(sum / row.length);
  })
  return grades;
}