// Lesson 4: Counting Elements
// FrogRiverOne
// Find the earliest time when a frog can jump to the other side of a river.
// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/


// Performance failed
// Time Complexity: O(N^2)
function solution(X, A) {
  // [1, ... X] range has to be covered
  // const leaves = Array.from(Array(X), (_) => 0);
  const leaves = [];
  for(let i = 0; i < X; i++) {
      leaves.push(0);
  }
  
  for(let i = 0; i < A.length ; i++) {
      leaves[A[i]-1] = A[i];
      if(leaves.every(v => v !== 0)) {
          return i;
      }
  }
  return -1;
}

// Time Complexity: O(N)
function solution(X, A) {
  const leaves = new Set();
  
  for(let i = 0; i < A.length; i++) {
    leaves.add(A[i]);

    if(leaves.size === X) {
        return i;
    }
  }
  return -1;
}

// Time Complexity: O(N)
function solution(X, A) {
  let left = X;
  const touched = {};

  let answer = -1;
  for(let i = 0; i < A.length; i++) {
    const pos = A[i];
    if(pos <=X && touched[pos] === undefined) {
      touched[pos] = true;
      left--;
      if(left === 0) answer = i;
    }
  }
  return answer;
}


