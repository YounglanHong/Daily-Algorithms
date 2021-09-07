// 복서 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/85002

function solution(weights, head2head) {
  let N = weights.length;
  const boxers = [];
  
  for(let i = 0; i < N; i++) {
      let winCount = 0, weightCount = 0, roundCount = 0, winRate = 0;
      for(let j = 0; j < N; j++) {
          if(head2head[i][j] === "W") {
              winCount++;
              roundCount++;
              if(weights[i] < weights[j]) weightCount++;
          } else if(head2head[i][j] === "L") {
              roundCount++;
          }
      }
      // 승률 = 이긴 횟수 / 싸운 횟수
      winRate = roundCount > 0 
          ? Number(((winCount / roundCount) * 100)) : 0;
      boxers.push({ "id": i+1, "weight": weights[i], "rate": winRate, 
                   "weightCount":  weightCount})
  }
  
  boxers.sort((a, b) => {
      // 1. 승률(내림차순)
      if(a.rate > b.rate) {
          return -1;
      } if(a.rate === b.rate) {
          // 2. 몸무게가 무거운 복서를 이긴 횟수(내림차순)
          if(a.weightCount > b.weightCount) {
              return -1;
          } if(a.weightCount === b.weightCount) {
              // 3. 몸무게(내림차순)
              if(a.weight > b.weight) {
                  return -1;
              } if(a.weight === b.weight) {
                  // 4. 번호(오름차순)
                  if(a.id > b.id) return 1;
              }
          }
      }
  })
  // console.log(boxers)
  return boxers.map(v => v.id);
  
}