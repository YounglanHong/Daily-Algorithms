// 입실 퇴실
// https://programmers.co.kr/learn/courses/30/lessons/86048

// solution #1
function solution(enter, leave) {
  let room = {};      // 회의실
  let result = {};
  
  for(let person of enter) {
      room[person] = 0;   // 입실
      const roomCount = Object.keys(room).length;
      
      for(const key in room) {
          if(room[key] === 0) {
              room[key] = roomCount - 1; // (나를 제외하고) 반드시 만나는 사람 수
          } else {
              room[key]++; // 만나는 사람 수 증가
          }
      } 
      
      // 퇴실 체크
      while(room.hasOwnProperty(leave[0])) {
          result[leave[0]] = room[leave[0]];
          delete room[leave[0]]; // 퇴실
          leave.shift();
      }
  }
  return Object.values(result);
}

// solution #2
// Set 이용
function solution(enter, leave) {
  const result = new Array(enter.length).fill(0);
  const room = new Set();

  let entering = enter.shift();
  let leaving = leave.shift();

  while(entering || leaving) {
    if(leaving && room.has(leaving)) {
      room.delete(leaving); // 퇴실
      leaving = leave.shift();
        
    } else if(entering) {
      for(let person of room) {
        result[person - 1]++; // 반드시 만나는 사람(회의실에 있었던 사람)
      }
      result[entering - 1] = room.size; // 반드시 만나는 사람(입실 시 회의실 인원)
      room.add(entering);   // 입실
      entering = enter.shift();
    }
  }
  return result;
}