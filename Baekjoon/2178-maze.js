// 2178-미로찾기
// https://www.acmicpc.net/problem/2178
// 인접행렬, BFS

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// console.log(input);

let arr = input[0].split(" ").map(v => +v);

const [N, M] = [arr[0], arr[1]];
// console.log(N, M)

// 2차원 배열에 입력값 추가
let matrix = [];
for(let i = 1; i < input.length; i++) {
  matrix.push(input[i].split("").map(v => +v));
}
// console.log(matrix);

// 이동할 (상,하,좌,우) 방향 정의
dx = [-1, 1, 0, 0];
dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  
  while(queue.length) {
    [x, y] = queue.shift();
    // console.log(x, y)
    // console.log("q",queue)
    // 현재 위치에서 (상,하,좌,우)로의 다음 위치(next) 확인
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
      // 이동할 수 있는 칸을 방문한 경우만 거리 증가
      if(matrix[nX][nY] === 1) {
        matrix[nX][nY] = matrix[x][y] + 1;
        queue.push([nX, nY])
      }
    }
  }
  // console.log(matrix)
  console.log(matrix[N-1][M-1]);
}

bfs(0, 0);

