// Lesson 9: Maximun slice problem
// MaxDoubleSliceSum
// Find the maximal sum of any double slice.
// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/

// Dynamic Programming(Kadane's Algorithm)
// (ref: https://sustainable-dev.tistory.com/23)
// 최대 부분합(Maximum Subarray Sum)
// A[i]'s subtotal = A[i - 1]'s subtotal + A[i]
/*
function maxSubArraySum(A) {
  let localMax = A[0];
  let globalMax = A[0];

  for(let i = 1; i < A.length; i++) {
    localMax = Math.max(A[i], localMax + A[i]);
    if(localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return globalMax;
} */

//  Time complexity: O(N)
function solution(A) {
  // Sum of slice (X, Y, Z): A[X + 1] + ... + A[Y - 1] + A[Y + 1] + ... + A[Z - 1]
  // (excludes X, Y, Z)
  // * MaxSum within range [X+1, ... Y-1, Y+1, ... Z-1]
  // * Make subtotal starting from front and starting from the end
  // * (SubTotal[1, ... N - 2], SubTotal[N - 2, ... 1])

  if(A.length < 4) return 0; 

  let frontMaxSum = A.map(i => 0);
  let backMaxSum = A.map(i => 0);

  for(let i = 1; i < A.length - 1; i++) {
    frontMaxSum[i] = Math.max(0, frontMaxSum[i - 1] + A[i]);
  }

  for(let i = A.length - 2; i >=1; i--) {
    backMaxSum[i] = Math.max(0, backMaxSum[i+1] + A[i]);
  }

  let maxSum = 0;
  for(let i = 1; i < A.length - 1; i++) {
    maxSum = Math.max(maxSum, frontMaxSum[i - 1] + backMaxSum[i + 1]);
    // console.log(i, maxSum)
  }
  // console.log(frontMaxSum, backMaxSum);
  return maxSum;
}

/*
describe("Max sum of subsequence of array elements"), () => {\
  test("given array is []"), () => {
    expect([]).toBe(0)
  });

  test("given array is [1, 2, 0]"), () => {
    expect([1, 2, 0]).toBe(0)
  });

  test("given array is [3, 2, 6, -1, 4, 5, -1, 2]"), () => {
    expect([3, 2, 6, -1, 4, 5, -1, 2]).toBe(17)
  });

}
*/