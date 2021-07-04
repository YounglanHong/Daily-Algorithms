// Lesson 6: Sorting
// Distinct
// Compute number of distinct values in an array.
// https://app.codility.com/programmers/lessons/6-sorting/distinct/

// 1) Sorting 
// Time complexity: O(N*log(N)) or O(N)
function solution(A) { 
  
  A.sort((a, b) => a - b);
  let count = 0;

  for(let i = 0; i < A.length; i++) {
    if(A[i] !== A[i+1]) {
      count++;
    }
  }
  return count;
}

// 2) Set
function solution(A) {
  let set = new Set();

  for(let v of A) {
    set.add(v);
  }
  return set.size;
}

