//1260-dfs-bfs

const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// console.log(input);

const solution = (arr) => {

  const str = arr[0].split(" ").map(v => +v);
  const [N, M, start] = [str[0], str[1], str[2]];
  
  const graph = Array.from(Array(N + 1), () => []);

  for(let i = 1; i < arr.length; i++) {
    let temp = arr[i].split(" ").map(v => +v);
    const [a, b] = [temp[0], temp[1]]

    graph[a]?.push(b);
    graph[b]?.push(a);
    
  }
  // 그래프 정점 오름차순 정렬
  graph.forEach((v) => {
    v.sort((a, b) => a - b);
  })

  const result_dfs = [],
        visited = {};
  // dfs-recursive
  const dfs = (node) => {
    if(!node) return null;
    visited[node] = true;
    result_dfs.push(node);

    for(let v of graph[node]) {
      if(!visited[v]) dfs(v)
    }
  }
  dfs(start);
  console.log(result_dfs.join(" "));

  // bfs
  const bfs = (start) => {
    const queue = [start], // FIFO
          visited = {},
          result_bfs = [];
    let node;  // 탐색할 현재 노드
    visited[start] = true;
    
    while(queue.length) {
      // console.log(queue)
      node = queue.shift();
      result_bfs.push(node);

      for(let v of graph[node]) {
        if(!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      }
    }
    console.log(result_bfs.join(" "))
  }
  bfs(start)
}
solution(input);