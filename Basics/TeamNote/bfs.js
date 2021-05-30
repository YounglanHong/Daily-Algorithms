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
    for(let v of graph[node]) {
      if(!visited[v]) {
        visited[v] = true;
        queue.push(v);
      }
    }
  }
  return result;
}

bfs(graph, start);