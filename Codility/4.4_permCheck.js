// Lesson 4: Counting Elements
// PermCheck
// Check whether array A is a permutation.
// A permutation is a sequence containing each element from 1 to N once, and only once.
// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/


// Time complexity: O(N) or O(N * log(N))
function solution(A) {
  const N = A.length;
  const map = {};

  for(let i = 0; i < N; i++) {
      (map[A[i]]) = (map[A[i]] || 0) + 1;
  }
  
  for(let j = 0; j < N; j++) {
      if(!map.hasOwnProperty(j+1)) {
          return 0;
      }
  }
  return 1;
}


// Time complexity: O(N) or O(N * log(N))
function solution(A) {
  const N = A.length;
  const maxValue = Math.max(...A);
  
  // If max value in A is not equal to N
  // return 0 (duplication)
  if(maxValue !== N) return 0;

  const perm = Array(maxValue).fill(0);

  for(let i = 0; i < N; i++) {
    perm[A[i]-1]++;
  }
  // console.log(perm)

  return (perm.indexOf(0) === -1) ? 1 : 0;
}

/* 
describe("Check permutation"), () => {
  test("given array is [4, 1, 3]"), () => {
    expect([4, 1, 3]).toBe(0)
  });

  test("given array is [1, 1]"), () => {
    expect([1, 1]).toBe(0)
  });
  
  test("given array is [2, 1]"), () => {
    expect([2, 1]).toBe(0)
  });
}
*/


