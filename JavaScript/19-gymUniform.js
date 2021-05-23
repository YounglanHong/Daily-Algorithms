// 체육복
// 탐욕법: 부분적인 최적해가 전체적인 최적해
// https://programmers.co.kr/learn/courses/30/lessons/42862#

// Solution #1 (정확성 실패)
function solution(n, lost, reserve) {
  let students = [];
  // 체육복 도난당하지 않은 학생들
  for(let i=1; i <= n; i++) {
      if(!lost.includes(i)) {
         students.push(i)
      } 
  }
  
  while(lost.length) {
      let front = 0, back = 0;
      const target = lost.pop();
      front = target - 1;
      back = target + 1;
      
      for(let j=0; j < reserve.length; j++) {
          if(reserve[j] === front) {
              students.push(target);
              reserve.splice(reserve.indexOf(front), 1);
          } else if(reserve[j] === back) {
              students.push(target);
              reserve.splice(reserve.indexOf(back), 1);
          // 도난 당한 사람이 여벌 있는 경우(체육복 하나)
          } else if(reserve[j] === target) {
              students.push(target);
              reserve.splice(reserve.indexOf(target), 1);
          } 
      }
  }
  // console.log(students)
  return students.length;
}

// Solution #2 
// 🔑여벌 체육복을 가져온 학생이 체육복을 도난당했을 가능성
const solution = (n, lost, reserve) => {
    let count = n - lost.length;
    let front = 0, back = 0;
    
    lost = lost.sort((a, b) => a - b); // 오름차순 정렬
    reserve = reserve.sort((a, b) => a - b); // 오름차순 정렬
    
    // 1. 여벌이 있고, 체육복을 도난당한 경우(lost, reserve에 모두 포함)
    lost = lost.filter((l) => {
        let targetIdx = reserve.findIndex(r => r === l);
        if(targetIdx === -1) {
            return l;
        } else {
            reserve.splice(targetIdx, 1);
            count++;
        }
    });  
    
    // 2. 여벌이 없고, 체육복 도난당한경우(앞번호 먼저 빌려야 최대 값)
    for(let l of lost) {
        front = l - 1;
        back = l + 1;
        
        let targetIdx = reserve.findIndex(r => r === front || r === back);
        
        if(targetIdx !== -1) {
            reserve.splice(targetIdx, 1);
            count++;
        } 
    }
    return count; 
};