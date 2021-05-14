// 오픈 채팅방
// Map(연관 배열)
// https://programmers.co.kr/learn/courses/30/lessons/42888
// https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/

function solution(record) {
  let result = [];
  let userMap = new Map();
  
  record.forEach(step => {
    let [state, id, nickname] = step.split(" ")
    if(state === "Enter" || state === "Change") {
      userMap.set(id, nickname)
    }
  })
  record.forEach(step => {
    let [state, id] = step.split(" ")
    if(state === "Enter") {
       result.push(`${userMap.get(id)}님이 들어왔습니다.`)
    } else if(state === "Leave") {
       result.push(`${userMap.get(id)}님이 나갔습니다.`)
    }
  })
  return result;
}