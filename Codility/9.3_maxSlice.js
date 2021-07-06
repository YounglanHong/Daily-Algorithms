// Lesson 9: Maximun slice problem
// MaxSliceSum
// Find a maximum sum of a compact subsequence of array elements.
// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/

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

// Time complexity: O(N)
function solution(A) {
  // Sum of a slice (P, Q): A[P] + A[P+1] + ... + A[Q](0 ≤ P ≤ Q < N))
  // (includes P, Q)

  // 1. Set local and globalMaxSum variable
  // 2. (edge case)  if A's length is 0, return 0
  // 3. Loop through an array A
  // 3-1. Update lobalMaxSum to greater value between A[i] and (localMaxSum + A[i])
  // 3-2. If localMaxSum is greater than globalMaxSum, update globalMaxSum
  // 4. Return globalMaxSum

  let localMaxSum = A[0], globalMaxSum = A[0];

  if(A.length === 0) return 0;

  for(let i = 1; i < A.length; i++) {
      // console.log(A[i],localMaxSum + A[i]);
      localMaxSum = Math.max(A[i], localMaxSum + A[i]);
      // console.log(localMaxSum, globalMaxSum)
      if(localMaxSum > globalMaxSum) {
          globalMaxSum = localMaxSum;
      }
      // OR globalMaxSum = Math.max(localMaxSum, globalMaxSum);
  }
  return globalMaxSum;
}

/*
describe("Max sum of subsequence of array elements"), () => {\
  test("given array is []"), () => {
    expect([]).toBe(0)
  });

  test("given array is [3, 2, -6, 4, 0]"), () => {
    expect([3, 2, -6, 4, 0]).toBe(5)
  });

  test("given array is [-1, -2, 3, 7, 4]"), () => {
    expect().toBe(12)
  });

}
*/