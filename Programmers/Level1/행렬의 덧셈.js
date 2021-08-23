// 행렬의 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/12950

// solution #1
function solution(arr1, arr2) {
  const N = arr1.length, M = arr1[0].length;
  let matrix = [], sum = [];
  
  for(let i = 0; i < N; i++) {
      for(let j = 0; j < M; j++) {
          sum.push(arr1[i][j] + arr2[i][j]);
      }
      matrix.push(sum);
      sum = [];
  }
  return matrix;
}

// solution #2
// map 이용
function solution(arr1, arr2) {
  return arr1.map((r, i) => r.map((c, j) => c + arr2[i][j]));
}

// solution #3 
// reduce, spread operator 이용
function solution(arr1, arr2) {
  return arr1.reduce((acc, curr, i) => [...acc, curr.map((val, j) => val + arr2[i][j])], [])
}