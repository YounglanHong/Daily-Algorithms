// 직업군 추천하기
// https://programmers.co.kr/learn/courses/30/lessons/84325

// solution #1
function solution(table, languages, preference) {
  const scores = [0, 5, 4, 3, 2, 1];
  let total = [], results = [];

  for(let i = 0; i < table.length; i++) {
      let temp = [], sum = 0;
      for(let lang of languages) {
          let langIdx = table[i].split(" ").indexOf(lang);
          temp.push(langIdx > 0 ? scores[langIdx] : 0);
      }
      for(let j = 0; j < temp.length; j++) {
          sum += temp[j] * preference[j];
      }
      total.push(sum);
  }
  let maxTotal = Math.max(...total);
  total.forEach((v, i) => {
    if(v === maxTotal) {
        results.push(table[i].split(" ")[0]);
    }
  })
  return results.sort()[0]; 
}