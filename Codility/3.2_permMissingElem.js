// Lesson 3: Time Complexity
// PermMissingElem
// Find the missing element in a given permutation within range [1,... (N+1)]
// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

// A contains integers in the range [1..(N + 1)], 
// which means that exactly one element is missing

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
}
*/
