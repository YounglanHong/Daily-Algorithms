// 12-participant(완주하지 못한 선수)
// Hash
// https://programmers.co.kr/learn/courses/30/lessons/42576

// Solution #1 (❌시간초과❌)
// function solution(participant, completion) {
//   const partCount = {};
//   // 정렬
//   participant.sort();
//   completion.sort();

//   for (let p of participant) {
//     if (!partCount[p]) {
//       partCount[p] = 1;
//     } else {
//       partCount[p]++;
//     }
//     if (!completion.includes(p)) {
//       return p;
//     }
//     completion.splice(completion.indexOf(p), 1);
//   }

//   // 🔑동명이인 처리
//   for (let c of completion) {
//     if (partCount[c] > 1 && completion.length) return c;
//   }
// }

// Solution #2 (통과)
function solution(participant, completion) {
  // 🔑동명이인 처리
  const visited = {};
  let duplicate = [];
  // 🔑정렬
  participant.sort();
  completion.sort();

  for (let i = 0, len = completion.length; i < len; i++) {
    if (participant[i] !== completion[i]) {
      duplicate = participant.splice(i, 1);
    }
    visited[participant[i]] = true;
  }
  for (let p of participant) {
    // duplicate이 빈 배열이고, visited에 참가자가 존재하지 않을 때,
    if (!duplicate.length && !visited[p]) {
      return p;
      // duplicate이 빈 배열이 아닐 때,
    } else if (duplicate.length > 0) {
      return duplicate.pop();
    }
  }
}

// Solution #3
function solution(participant, completion) {
  // 🔑정렬
  participant.sort();
  completion.sort();

  // console.log(participant, completion)
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
