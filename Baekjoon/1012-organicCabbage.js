// 1012-유기농배추
// shttps://www.acmicpc.net/problem/1012

const fs = require("fs");

const input = fs.readFileSync("input.js").toString().split("\n");

const T = parseInt(input[0]); // 테스트 케이스의 개수
// console.log(T);

// 배추밭 가로길이(M), 세로길이(N), 배추 심어진 위치의 개수(K)
const str = input[1].split(" ").map(v => +v);
const [M, N, K] = [str[0], str[1], str[2]];
// console.log(M, N, K);

const matrix = Array.from(Array(N), () => Array(M).fill(0));
for(let i = 2; i < K + 2; i++) {
  let temp = input[i].split(" ").map(v => +v);
  let [b, a] = [temp[0], temp[1]];
  matrix[a][b] = 1;
}
// console.log(matrix);

// 이동할 (상,하,좌,우) 방향 정의
dx = [-1, 1, 0, 0];
dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y])
  // 🔑연결된 배추 밭 어떻게 처리?
  while(queue.length) {
    [x, y] = queue.shift();
    
    // 현재 위치에서 (상,하,좌,우)로의 이동한 다음 위치(next)
    for(let i = 0; i < 4; i++) {
      nX = x + dx[i];
      nY = y + dy[i];

      // (N, M) 범위 벗어난 경우, 건너뛰기
      if(nX < 0 || nY < 0 || nX >= N || nY >= M) {
        continue;
      }
      // 이동할 수 없는 칸(막다른 길)인 경우, 건너뛰기
      if(matrix[nX][nY] === 0) {
        continue;
      }

      if(matrix[nX][nY] === 1) {
        matrix[nX][nY] = matrix[x][y] + 1;
        queue.push([nX, nY]); // 현재 위치 갱신
      }
      // console.log(queue);
    }
    
  }
  console.log(matrix);
}

bfs(0,0)