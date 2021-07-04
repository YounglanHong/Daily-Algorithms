// Lesson 5: Prefix Sums
// PassingCars
// Count the number of passing cars on the road.
// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/

// 0 - east, 1 - west
// passing cars (P, Q): (0, 1)
// Time complexity: O(N ** 2) - timeout error
function solution(A) {
  const N = A.length;
  let rest = [], count = 0;
  
  if(A.length === 1) return 0;
  if(count > 1000000000) return -1;

  for(let i = 0; i < N; i++) {
    if(A[i] === 0) {
      rest.push(...A.slice(i+1)) // 💣
    }
  }
   
  rest = rest.filter(v => v === 1);
  count = rest.length;
  return count;
}

// Time complexity: O(N)
function solution(A) {
  // 1. Loop through A
  // 1-1. Subtotal number of 1 (1의 개수 누적합)
  // 1-2. If 0 exists, add subtotal to pair
  // (0을 만나면 누적합을 pair에 합산)
  // 1-3. If pair > 1000000000, return -1
  // 2. Return count

  const N = A.length;
  let sub = 0, pair = 0;

  for(let i = N-1; i >= 0; i--) {
    // west
    if(A[i] === 1) {
      sub++;
    // east (if 0 exists)
    } else {
      pair += sub;
    }
    if(pair > 1000000000) return -1;
  }
  return pair;
}

/* 
describe("Count the number of passing cars"), () => {
  test("given array [0]"), () => {
    expect([0]).toBe(0)
  });

  test("given array [1]"), () => {
    expect([1]).toBe(0)
  });

  test("given array [0, 0, 0, 0, 0, 0, 1, 1]"), () => {
    expect([0, 0, 0, 0, 0, 0, 1, 1]).toBe(12)
  });

  test("given array [0, 1, -2]"), () => {
    expect([0, 1, -2]).toBe(1)
  });

}
*/
