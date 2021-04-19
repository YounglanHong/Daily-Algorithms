// 신규 아이디 추천
// RegExp
// https://programmers.co.kr/learn/courses/30/lessons/72410#

function solution(new_id) {
  // #1: 대문자를 소문자화
  new_id = new_id.toLowerCase();
  // #2: 조건에 맞지 않는 모든 문자 제거
  const regEx1 = /[^a-z0-9\-\_\.]/g;
  new_id = new_id.replace(regEx1, "");
  // #3: 반복되는 마침표는 하나 제거
  const regEx2 = /\.{2}/g;
  while (regEx2.test(new_id)) {
    new_id = new_id.replace(regEx2, ".");
  }
  // #4: 마침표가 처음이나 끝 위치하면 제거
  const regEx3 = /^\.|\.$/g;
  new_id = new_id.replace(regEx3, "");
  // #5: 빈 문자열이면, "a" 대입
  if (!new_id) new_id = "a";
  // #6: 길이가 16자 이상이면, 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  new_id = new_id.substring(0, 15);
  new_id = new_id.replace(regEx3, "");
  // #7: 길이가 2자 이하면, 마지막 문자를 길이가 3이 될 때까지 반복
  const regEx4 = /.$/g;
  while (new_id.length <= 2) {
    new_id += new_id.match(regEx4);
  }
  // console.log(new_id)
  return new_id;
}
