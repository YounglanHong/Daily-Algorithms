// 멀쩡한 사각형
// https://programmers.co.kr/learn/courses/30/lessons/62048

// solution #1
// gcd(최대공약수)
// w * h - (w + h - gcd) 
const gcd = (n, m) => {
  if(n % m === 0) return m;
  return gcd(m, n % m);
}

function solution(w, h) {
  return w * h - (w + h - gcd(w, h));
}

// solution #2
function solution(w, h){
  const slope = h / w;
  let result = 0;

  for(let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i);
  }
  return ((h * w) - result) * 2;
}
