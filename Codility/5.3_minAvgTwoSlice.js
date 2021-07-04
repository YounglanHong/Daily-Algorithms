// Lesson 5: Prefix Sums
// MinAvgTwoSlice
// Find the minimal average of any slice containing at least two elements.
// https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/

// 🔑 P < Q (slice has at least two elements)
// 🔑 If a < b, Avg(a + b) > a
// 🔑 If (a+b) < (c+d), Avg(a+b+c+d) > (a+b)
// 🔑 el[4+] is a mixture of el[2] & el[3]
// Time complexity: O(N)
function solution(A) {
  // 1. Calculate avg of a slice(0, 1)
  // 1-1. Set 1. result to minAvg
  // 2. Loop through array A starting from 2
  // 3. Calculate avg of 3 el & 2 el
  // 3-1. If caculated avg is less than min avg,
  // Update min avg and min starting position
  // 4. Return min starting position
  
  const N = A.length;
  let minAvg = (A[0] + A[1]) / 2,
  minStartP = 0, tempAvg = 0;

  for(let i = 2; i < N; i++) {
    // el[3]
    tempAvg = (A[i-2] + A[i-1] + A[i]) / 3;
    if(tempAvg < minAvg) {
      minAvg = tempAvg;
      minStartP = i - 2;
    }

    // el[2]
    tempAvg = (A[i-1] + A[i]) / 2;
    if(tempAvg < minAvg) {
      minAvg = tempAvg;
      minStartP = i - 1;
    }
  }

  return minStartP;
}


/* 
describe("Find the minimal average of any slice"), () => {
  test("given array [-10000, 10000]"), () => {
    expect([-10000, 10000]).toBe(0)
  });

  test("given array [4, 2, 2, 5, 1, 5, 8]"), () => {
    expect([4, 2, 2, 5, 1, 5, 8]).toBe(1)
  });

  test("given array [10000, -10000, -2000]"), () => {
    expect([10000, -10000, -2000]).toBe(1)
  });

  test("given array [0, 1, -2]"), () => {
    expect([0, 1, -2]).toBe(1)
  });

}
*/
