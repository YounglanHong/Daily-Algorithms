// 수식 최대화
// RegExp
// https://programmers.co.kr/learn/courses/30/lessons/67257

// Solution #1
function solution(expression) {
  // 연산자 우선순위
  const priors = [
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["+", "-", "*"],
    ["+", "*", "-"],
  ];
  let idx,
    cal,
    result = [];

  for (let prior of priors) {
    let newEx = expression.split(/([^0-9])/); // 숫자가 아닌 문자(\D)
    for (let op of prior) {
      while (newEx.includes(op)) {
        idx = newEx.indexOf(op);
        // 각 계산 별로 분리하여 계산
        cal = eval(newEx.slice(idx - 1, idx + 2).join(""));
        // 계산식 결과 대체
        newEx.splice(idx - 1, 3, cal);
      }
    }
    // 계산 결과 저장
    result.push(Math.abs(newEx[0]));
  }
  // 최댓값 반환
  return Math.max(...result);
}
