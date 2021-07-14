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

// Solution #2 
// 🔑문제 해결을 위해서, 지원자들을 그룹별로 적절하게 미리 분류(조합)
// 🔑미리 분류해둔 그룹에서 X점 이상 맞은 지원자 수 카운트(이진 탐색)

function solution(info, query) {
  const answer = [];
  const infoMap = {};
  // 🔑조합
  // ⭐️각 항목 분리하지 않고, 통합하여 하나의 key로 관리
  const combination = (arr, grade, start) => {
      const key = arr.join("");
      const val = infoMap[key];
      let temp = [];
      
      (val) ? infoMap[key].push(grade) : infoMap[key] = [grade];
      
      for(let i=start; i < arr.length; i++) {
          temp = arr.slice();
          temp[i] = "-";
          combination(temp, grade, i+1);
      }
  }
  // info 처리
  for(let el of info) {
      let splited = el.split(" ");
      let grade = parseInt(splited.pop()); 
      combination(splited, grade, 0);
  }
  
  // 오름차순 정렬
  for(let key in infoMap) {
      infoMap[key] = infoMap[key].sort((a, b) => a - b);
  }
  
  // console.log(infoMap)
  // query 처리
  for(let q of query) {
      let queries = q.replace(/ and /g, " ").split(" ");
      let grade = parseInt(queries.pop()); 
      
      let key = queries.join("");
      console.log(infoMap)
      
      // 🔑이진 탐색
      if(infoMap[key]) {
          let lower = 0, upper = infoMap[key].length;
          while(lower < upper) {
              const mid = Math.floor((lower + upper) / 2);
              console.log(infoMap[key], infoMap[key][mid], grade, lower, upper)
              if(infoMap[key][mid] >= grade) {
                  
                  upper = mid;
              } else if(infoMap[key][mid] < grade) {
                  lower = mid + 1;
              }
          }
          answer.push(infoMap[key].length - lower);
      } else {
          answer.push(0);
      }
  }
  return answer;
}