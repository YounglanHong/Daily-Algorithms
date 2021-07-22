// Graph Traversal(그래프 탐색)
// 모든 정점들을 한 번씩 방문(탐색)하는 것이 목적

// BFS(Breadth-First Search)
// 너비 우선 탐색
// 큐
// 긱 간선의 가중치(비용)이 동일한 상태에서 최단 거리

// start 
function bfs(graph, start) {
  const queue = [start], visited = {}, result = [];
  let vertex; // 탐색할 현재 노드
  visited[start] = true; // 시작 노드를 방문 처리
  // 큐가 비어있을 때까지 반복
  while(queue.length) {
    vertex = queue.shift(); // 🔑 
    result.push(vertex);
    // 현재 노드의 방문 안 한 인접 노드 큐에 추가
    for(let v of graph[vertex]) {
      if(!visited[v]) {
        visited[v] = true;
        queue.push(v);
      }
    }
  }
  return result;
} 

bfs(graph, start);

/*******************************************************/

// DFS(Depth-First Search)
// 깊이 우선 탐색
// 스택 또는 재귀함수

// recursion
function dfs(graph, start) {
  const result = [], visited = {};

  if(!start) return null; // 정점이 빈 값이면 null 반환

  visited[node] = true; // 현재 노드 방문 처리
  result.push(node); // 결과 배열에 추가
  // 현재 노드의 인접 노드 방문 처리(재귀)
  graph[vertex].forEach((v) => {
    if(!visited[v]) dfs(graph, v);
  });
  return result;
}

dfs(graph, start);


// iteration
function dfs(graph, start) {
  const stack = [start], visited = {}, result = [];

  let vertex; // 탐색할 현재 노드
  visited[start] = true; // 시작 노드를 방문 처리
  // 스택이 비어있을 때까지 반복
  while(stack.length) {
    vertex = stack.pop(); // 🔑 
    result.push(vertex);

//  for(let v of graph[vertex]) {
    graph[vertex].forEach((v) => {
      if(!visited[v]) {
        visited[v] = true;
        stack.push(v);
      }
    })
  }
}

dfs(graph, start);

// 2차원 인접 리스트
// 각 노드의 연결 정보 표현
const graph = [
  [],        // X
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [7],
  [2, 6, 8],
  [1, 7]
];


/*******************************************************/

// Q1: Find connected component(연결 요소) 
// N x M 행렬
// 1 <= N, M <= 1,000

// DFS
function findComp(N, M) {
  let count = 0;

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
      if(dfs(i, j)) {
        count += 1;
      }
    }
  }
  return count;
}

function dfs(x, y) {
  // 주어진 범위 벗어나는 경우
  if(x <= -1 || x >= n || y <= -1 || y >= m) return false;
  // 현재 노드 방문 안했으면
  if(graph[x][y] === 0) {
    graph[x][y] = 1; // 해당노드 방문 처리
    // 상, 하, 좌, 우 재귀적 호출(연결노드 방문 처리)
    dfs(x-1, y);
    dfs(x, y-1);
    dfs(x+1, y);
    dfs(x-1, y+1); 
    return true;
  }
  return false;
}

// const graph = [
//   [0, 0, 1, 1, 0],
//   [0, 0, 0, 1, 1],
//   [1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0]
// ]


// Q2: Maze(미로 찾기)
// N x M 행렬
// 4 <= N, M <= 200

// BFS
// (1, 1)부터 모든 노드에 대한 최단 거리 값 기록

function maze(N, M) {
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
}

function bfs(x, y) {
  queue.push([x, y]);

  while(queue.length) {
    // 현재 위치에서 상, 하, 좌, 우 방향으로 위치 확인
    for(let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 미로 찾기 공간을 벗어난 경우 무시
      if(nx < 0 || nx >= N || ny < 0 || ny >= M) {
        continue;
      }
      // 벽인 경우 무시
      if(graph[nx][ny] === 0) {
        continue;
      }
      // 해당 노드를 처음 방문하는 경우만 최단 거리 기록
      if(graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny])
      }
    }
  }
  // 가장 오른쪽 아래까지의 최단 거리 반환
  return graph[N-1][M-1];
}

// const graph = [
//   [1, 0, 1, 0, 1, 0],
//   [1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1]
// ]


/*******************************************************/

// Q2: Find the number of islands
// N x M graph
// https://www.geeksforgeeks.org/find-number-of-islands/?ref=lbp

// O(M * N)

// DFS
const N = graph.length, M = graph[0].length;
// Check if a given row, col can be included in DFS
// 1) row & col is within range 2) value is 1 3) not visited
const isSafe = (graph, row, col, visited) => {
  const checkRC = row >= 0 && row < N && col >= 0 && col < M
  && (graph[row][col] === 1 && !visited[row][col]);

  return checkRC;
}

// DFS of 8 neighbors
const dfs = (graph, row, col, visited) => {
  let rowX = [-1, -1, -1, 0, 0, 1, 1, 1];
  let colY = [-1, 0, 1, -1, 1, -1, 0, 1];
  /* 
    dfs(i - 1, j - 1)
    dfs(i - 1, j)
    dfs(i - 1, j + 1)
    dfs(i, j - 1)
    dfs(i, j + 1)
    dfs(i + 1, j - 1)
    dfs(i + 1, j)
    dfs(i + 1, j + 1)
    */

  visited[row][col] = true;

  for(let i = 0; i < 8; i++) {
    let nx = row + rowX[i];
    let ny = col + colY[i];
    if(isSafe(graph, nx, ny, visited)) {
      dfs(graph, nx, ny, visited);
    }
  }
}

// Count num of islands
const countIslands = (graph) => {
  let visited = Array.from(Array(N), (_) => Array(M).fill(false))

  let count = 0;

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
      // Coutn new islands
      if(graph[i][j] === 1 && !visited[i][j]) {
        dfs(graph, i, j, visited);
        count++;
      }
    }
  }
  return count;
}

countIslands(graph);

/*
let graph = [
  [ 1, 1, 0, 0, 0 ], 
  [ 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1] ,
  [0, 0, 0, 0, 0], 
  [1, 0, 1, 0, 1]
]; */