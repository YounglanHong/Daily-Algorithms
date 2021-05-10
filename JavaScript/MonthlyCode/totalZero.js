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



 