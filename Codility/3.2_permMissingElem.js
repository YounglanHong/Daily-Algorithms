// Lesson 3: Time Complexity
// PermMissingElem
// Find the missing element in a given permutation within range [1,... (N+1)]
// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

// A contains integers in the range [1..(N + 1)], 
// which means that "exactly one element is missing"
// 1) Sum of numbers between 1 and (N + 1)
// 2) 1) - Accumulate elements in an array === missing element

// Correctness failed
function solution(A) {
  // N within the range [0, ...100,000]
  if(A.length === 0) return 1;
  const perm = Array.from(Array(A.length), (_) => 0);
  A.sort((a, b) => a - b);

  for(let i = 0; i < A.length; i++) {
    perm[i] = i + 1;

    if(A[i] !== perm[i]) {
      return perm[i];
    } 
    console.log(perm, A)
  }
}


// Time Complexity: O(N) or O(N * log(N))
function solution(A) {
  const N = A.length;

  // empty array
  if(N === 0) return 1;
  const permSum = ((N+1) * (N+2)) / 2;
  const arraySum = A.reduce((acc, curr) => acc + curr);
  const missingEl = permSum - arraySum;

  return missingEl;
}


/* 
describe("Find missing element in a given permutation"), () => {
  test("given array is []"), () => {
    expect([]]).toBe(1)
  });

  test("given array is [1]"), () => {
    expect([1]).toBe(2)
  })

  test("given array is [2]"), () => {
    expect([2]).toBe(1)
  })

  test("given array is [2, 3]"), () => {
    expect([2, 3]).toBe(1)
  })

  test("given array is [1, 2, 3]"), () => {
    expect([1, 2, 3]).toBe(4)
  })
}
*/
