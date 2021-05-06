// 2021 카카오 신입 공채 1차
// 순위 검색
// https://programmers.co.kr/learn/courses/30/lessons/72412
// https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/

// Solution #1(정확성 통과, 효율성 실패)
const checkMatch = (valI, valQ) => {
  if(valI === valQ || valQ === "-") {
      return true;
  } else {
      return false;
  }
}

function solution(info, query) {
  const infoAll = [];
  let temp = [], queries = [], result = [];
  info.forEach((val) => {
      temp = val.split(" ");
      infoAll.push({ lang: temp[0], group: temp[1], 
                    work: temp[2], food: temp[3], 
                    grade: parseInt(temp[4])})
  });
  temp = [];
  query.forEach((q) => {
      let reg = /and | /g
      temp.push(q.split(reg).filter(el => el !== ""))
  }) 
  while(temp.length) {
    let count = 0;
    for(let info of infoAll) {
        if(checkMatch(info.lang, temp[0][0]) 
          && checkMatch(info.group, temp[0][1])
          && checkMatch(info.work, temp[0][2])
          && checkMatch(info.food, temp[0][3]) 
          && (info.grade >= parseInt(temp[0][4]) | (temp[0][4] === "-"))
          ) {
            count++;
          }
      }
      temp.shift();
      result.push(count);
    }
    return result;
}