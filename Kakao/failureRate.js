// 실패율
// 정렬
// https://programmers.co.kr/learn/courses/30/lessons/42889
// https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/

function solution(N, stages) {
  const users = new Array(N).fill(0);
  let totalUsers = stages.length; 
  let failureRate = [], result = [];
  // 각 stage에 몇 명의 사용자 도달
  stages.forEach((stage) => {
     if(stage <= N) {
       users[stage-1]++;
     }
  })
  // stage 별 실패율 계산/ 실패율, 인덱스 객체
  users.forEach((user, idx) => {
     failureRate.push({idx: idx, rate: (user / totalUsers)});
     totalUsers -= user; // 도달한 총 사용자 갱신
  })
  // 실패율의 내림차순으로 정렬
  failureRate
      .sort((a, b) => b.rate - a.rate)
      .forEach((rate) => result.push(rate.idx + 1))
  
  return result;
}