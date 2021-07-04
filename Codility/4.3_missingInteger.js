// Lesson 4: Counting Elements
// MissingInteger
// Find the smallest positive integer that does not occur in a given sequence.
// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

// 🔑 Order of an array is not important!
// Time complexity: O(N) or O(N * log(N))
function solution(A) {
  // 1. Create an object to count element of A
  // 2. Loop N(length of A) times
  // 2-1. Find missing index 
  // 2-2. If no missing index, return N + 1
  // 3. If every element is negative int, return 1

  let counter = {}, idx = 0;
  const N = A.length;

  for(let i = 0; i < N; i++) {
      counter[A[i]] = (counter[A[i]] || 0) + 1
  } 
  // 3. 
  if(A.every(el => el < 0)) return 1;

  // 2-1.
  while(idx < N) {
      if(!counter[idx+1]) {
          return idx + 1;
      } 
      idx++;
  }
  // 2-2.
  if(Object.keys(counter).length === N) {
      return N + 1;
  }  
}

// Time complexity: O(N) or O(N * log(N))
function solution(A) {
  // 1. Create an object to count element of A and sort A
  // 2. Loop N(length of A) times
  // 2-1. If element is positive integer(el > 0), add to object
  // 3. Check missing integer in counter 
  // 3-1. For loop within range [1, ... 1000000]
  // 3-2. Use hasOwnProperty to find missing integer

  const counter = {}, N = A.length; 
  A.sort((a, b) => a - b);

  for(let i = 0; i < N; i++) {
    if(A[i] > 0) counter[A[i]] = A[i];
  }

  // for(let j = 1; j < Number.MAX_SAFE_INTEGER; j++) {
  for(let j = 1; j < 1000000; j++) {
    if(!counter.hasOwnProperty(j)) {
      return j;
    }
  }
}



/* 
describe("Find the smallest positive integer"), () => {
  test("given array is [-1, 2, 3, 5, 6, 1]"), () => {
    expect([-1, 2, 3, 5, 6, 1]).toBe(4)
  });

    test("given array is [1, 2, 1, 4, 5, 6, 5]"), () => {
    expect([1, 2, 1, 4, 5, 6, 5]).toBe(3)
  });

  test("given array is [1, 2, 3]"), () => {
    expect([1, 2, 3]).toBe(4)
  });

  test("given array is [-1, -3]"), () => {
    expect([-1, -3]).toBe(1)
  });
  
}
*/