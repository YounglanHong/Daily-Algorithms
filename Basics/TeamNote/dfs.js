// recursion
function dfs(graph, start) {
  const result = [], visited = {};

  if(!start) return null; // 정점이 빈 값이면 null 반환

  visited[node] = true; // 현재 노드 방문 처리
  result.push(node); // 결과 배열에 추가
  // 현재 노드의 인접 노드 방문 처리(재귀)
  graph[node].forEach((v) => {
    if(!visited[v]) dfs(v);
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

    graph[node].forEach((v) => {
      if(!visited[v]) {
        visited[v] = true;
        stack.push(v);
      }
    })
  }
}

dfs(graph, start);
