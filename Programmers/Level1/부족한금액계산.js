// 부족한 금액 계산하기
// https://programmers.co.kr/learn/courses/30/lessons/82612

// solution #1
function solution(price, money, count) {
  let sum = 0;
  for(let i = 1; i <= count; i++) {
     sum += price * i;
  }
  if(money >= sum) return 0;
  return sum - money;
}

// solution #2
// 가우스 공식
function solution(price, money, count) {
  let sum = (count * (price + price * count)) / 2;
  
  return money < sum ? (sum - money) : 0;
}