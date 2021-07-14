// https://sharryhong.github.io/2017/01/17/algorism11-gcdlcm/

// n: min, m: max
// 최대 공약수
function gcd(n, m) {
  if(n % m === 0) {
    return m;
  } else {
    return gcd(m, n % m);
  }
}
// 최소 공배수: (n * m) / 최대 공약수 
function lcm(n, m) {
  return n * m / gcd(n, m);
}