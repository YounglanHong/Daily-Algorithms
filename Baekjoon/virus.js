const fs = require('fs');

const input = fs.readFileSync("input.js").toString().trim().split("\n");
// console.log(input);

const solution = (arr) => {

  const comNum = arr[0].split(" ").map(v => +v)[0];
  
  const graph = Array.from(Array(comNum), () => []);
  // console.log(graph)

  for(let i=2; i< arr.length; i++) {
    let temp = arr[i].split(" ").map(v => +v);
    const [v1, v2] = [temp[0], temp[1]];
    // console.log(v1, v2)

    graph[v1]?.push(v2);
    graph[v2]?.push(v1);
  }
  // console.log(graph)

  // const bfs = (start) => {
  //   const queue = [start],
  //         visited = {};
  //         result = [];
  //   let node; // 탐색할 현재 노드
  //   visited[start] = true;
    
  //   while(queue.length) {
  //     node = queue.shift();
  //     result.push(node);

  //     for(let v of graph[node]) {
  //       if(!visited[v]) {
  //         visited[v] = true;
  //         result.push(v);
  //       }
  //     }
  //   }
  //   console.log(result)
  // }
  
  // bfs(1); // 1번 컴퓨터 
  const visited = {},
        result = [];
  const dfs = (node) => {
    if(!node) return null; 
    
    visited[node] = true;
    result.push(node);

    for(let v of graph[node]) {
      if(!visited[v]) dfs(v);
    }
  }
  dfs(1);
  let virusComputers = result.length - 1; // 1번 컴퓨터는 제외
  console.log(virusComputers);
}
solution(input);