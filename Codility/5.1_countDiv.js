// Lesson 5: Prefix Sums
// CountDiv
// Compute number of integers divisible by k in range [a..b].
// https://app.codility.com/programmers/lessons/5-prefix_sums/

// i mod K === 0(divisible)

// Time complexity: O(N) - timeout error(Killed)
function solution(A, B, K) {
  // 1. Loop through range [A, B]
  // 2. If int within range is divisible by K
  // 2-1. Increase count
  // 3. Return count
  let count = 0;

  for(let i = A; i <= B; i++) {
     if(i % K === 0) count++;
  }
  return count;
}

//  Time complexity: O(1)
// includes A and B
function solution(A, B, K) {
  // if(A % K === 0) return count + 1;
  // let count = Math.floor(B / K) - Math.floor(A / K);
  let count = Math.floor(B / K) - Math.floor((A-1) / K);
  
  return count;
}

/* 
describe("Compute number of integers divisible by k"), () => {
  test("given array [0, 2000000000, 1000000]"), () => {
    expect([0, 2000000000, 1000000]).toBe(2000)
  });

  test("given array [6, 11, 2]"), () => {
    expect([6, 11, 2]).toBe(3)
  });

  test("given array [0, 13, 4]"), () => {
    expect([0, 13, 4]).toBe(3)
  });

  test("given array [2000000000, 2000000000, 100]"), () => {
    expect([2000000000, 2000000000, 100]).toBe(0)
  });

  test("given array [0, 0, 11]"), () => {
    expect([0, 0, 11]).toBe(0)
  });


  test("given array [11, 345, 17]"), () => {
    expect([11, 345, 17]).toBe(19)
  });

}
*/



