# Graph Traversal(그래프 순회)

- 예시) P2P 네트워킹, 웹 크롤러, 검색·추천 최적화, 최단 거리 문제(GPS 네비게이션, 미로 탈출, AI(우승을 위한 최단거리 등))

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }

  // Add edge
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this.adjacencyList;
  }

  // Remove vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return this.adjacencyList;
  }

  // Remove edge
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
    return this.adjacencyList;
  }

  // DFS
  // Recursive
  // Accept the starting node
  DFS_Recur(start) {
    const result = []; // result array
    const visited = {}; // obj to store visited vertices
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      // If vertex is empty, return early
      if (!vertex) return null;
      // Put the vertex into visited obj
      visited[vertex] = true;
      // Push that vertex into result arr
      result.push(vertex);
      // Loop over adjacencyList for that vertex, visit neighbors
      adjacencyList[vertex].forEach((v) => {
        // If not been visited, invoke helper function
        if (!visited[v]) dfs(v);
      });
    }
    dfs(start);
    return result;
  }

  // Iterative
  // Accept the starting node
  DFS_Iter(start) {
    const stack = [start], // LIFO
      visited = {},
      result = [];
    let vertex; // current vertex
    const adjacencyList = this.adjacencyList;
    // Mark start as visited
    visited[start] = true;
    // Loop while stack is not empty
    while (stack.length) {
      // console.log(stack);
      vertex = stack.pop(); // *** Pop from the end
      result.push(vertex);
      // Loop over adjacencyList for that vertex, visit neighbors
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    return result;
  }

  // BFS
  BFS(start) {
    const queue = [start], // FIFO
      visited = {},
      result = [];
    let vertex; // current vertex
    const adjacencyList = this.adjacencyList;
    // Mark start as visited
    visited[start] = true;
    // Loop while queue is not empty
    while (queue.length) {
      console.log(queue);
      vertex = queue.shift(); // *** Shift from the beginning
      result.push(vertex);
      // Loop over adjacencyList
      // adjacencyList[vertex].slice().reverse().forEach((v) => { // *backwards
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// g.DFS_Recur("A"); // ["A", "B", "D", "E", "C", "F"]
// g.DFS_Iter("A"); // ["A", "C", "E", "F", "D", "B"]
g.BFS("A"); // ["A", "B", "C", "D", "E", "F"]
g.BFS("A"); // ["A", "C", "B", "E", "D", "F"] // *backwards
```
