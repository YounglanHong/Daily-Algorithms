// 모두 0으로 만들기
// 트리 역방향 탐색 & 그리디
// https://programmers.co.kr/learn/courses/30/lessons/76503
// https://prgms.tistory.com/47
// 시간복잡도: O(n) (n: a.length)

// Solution #1(실패)
function solution(a, edges) {
  // 🔑 가중치 총합이 0이어야 가능한 조건
  let sum = a.reduce((acc, curr) => acc + curr);
  if(sum !== 0) return -1;
  
  edges.sort((a, b) => a[0] - b[0]); // 오름차순 정렬
  
  let count = 0, tree = [];
  
  a.forEach((w, i) => {
      tree.push({"node": i, "weight": w, "edge": [] });
  })
  edges.forEach((edge) => {
      tree[edge[0]].edge.push(edge[1]);
      tree[edge[1]].edge.push(edge[0]);
  })
  // console.log(tree);

  for(let t of tree) {
    // 🌿리프 노드
    // while(a.length !== 0) {
      if(t.edge.length === 1 && t.weight !== 0) {
          let temp = t.weight;
          // tree 가중치 수정
          t.weight = 0;
          tree[t.edge[0]].weight += temp;
          // a 배열 가중치 수정
          a[t.node] = 0;
          a[t.edge[0]] += temp;
          // tree edge 수정
          tree[t.edge[0]].edge = tree[t.edge[0]].edge
              .filter((val) => val !== t.node);
          count += temp;
        } 
  }
  console.log(a, tree, count);
  // [ [ 0, 1 ], [ 0, 3 ], [ 2, 3 ], [ 3, 4 ] ]
}


// Solution #2
// (ref: https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%AA%A8%EB%91%90-0%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-JS)

function solution(a, edges) {
  // 🔑 가중치(배열 a) 총합이 0이어야 가능한 조건
  const tree = new Array(a.length).fill().map(v => []);
  // edge 정보 활용해 양방향 트리 생성
  for(const [u, v] of edges) {
    tree[u].push(v);
    tree[v].push(u);
  }
  // console.log(tree)  
  
  // [시작노드, 부모노드]
  const stack = [ [0, null] ]; 
  // 방문 여부 체크
  const visit = new Array(a.length).fill(false);
  // BigInt 자료형(정수 + n)
  let answer = 0n;
  while(stack.length) {
    const [start, parent] = stack.pop();
    
    // 🌿 리프노드
    // 방문한 노드
    if(visit[start]) {
      a[parent] += a[start];
      // 절대값 & BigInt 자료형
      answer += BigInt(Math.abs(a[start]));
      continue;
    }
    // 미방문 노드 스택에 추가
    stack.push([start, parent]);
    visit[start] = true;
    
    for(const next of tree[start]) {
      if(!visit[next]) {
        stack.push([next, start]);
      }
    }
    // console.log(stack)
  }
  // 루트노드(a[0])부터 탐색 
  // 가중치 총합 0이려면 a[0] === 0
  return a[0] ? -1 : answer; 
}