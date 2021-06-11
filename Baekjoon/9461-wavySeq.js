// 9461-파도반 수열
// https://www.acmicpc.net/problem/9461

// 수열 조건: P(N) = P(N-2) + P(N-3)

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map((v) => +v);
const T = input[0];

const getSeq = (N) => {
  const P = [0, 1, 1, 1]; // 0번째 인덱스 사용 안함

  for(let i = 4; i <= N; i++) {
    P[i] = P[i-2] + P[i-3];
  }
  console.log(P[N])
}

for(let n = 1; n <= T; n++) {
  getSeq(input[n]);
}





