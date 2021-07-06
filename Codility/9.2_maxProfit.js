// Lesson 9: Maximun slice problem
// MaxProfit
// Given a log of stock prices compute the maximum possible earning.
// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/

// Time complexity: O(N)
function solution(A) {
  // stock price: A's element,  day: A's index
  // 1. Compare index 0 and 1 element
  //    and Set minIdx(starting point)
  // 2. Loop through an array starting from index 2
  // 2-1. Update profit if former profit is smaller than current profit
  // 2-2. Update minIdx if current index is smaller than minIdx
  // 3. Return profit

  let minIdx = A[0] < A[1] ? 0 : 1;
  let profit = Math.max(A[1] - A[0], 0);

  // edge case
  if(A.length < 2) return 0;

  for(let i = 2; i < A.length; i++) {
      profit = Math.max(A[i] - A[minIdx], profit);
      if(A[i] < A[minIdx]) minIdx = i;
  }
  return profit
}

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
  // stock price: A's element,  day: A's index
  // 1. Loop through an array A
  // 1-1. maxProfit of A[i] is subtraction of smallest value within A[0, i-1] from A[i] 
  //      (A[i] - Math.min(A[0],... A[i-1]))
  // 2. Loop through an array starting from index 1
  // 2-1. Update localMaxProfit 
  // 2-2. Update minPrice if current price is smaller than minPrice
  // 3. Compare global and localMaxProfit, Update globalMaxProfit
  // 4. If globalMaxProfit is 
  // 4-1. greater than 0, return globalMaxProfit
  // 4-2. less than 0, return 0

  if (A.length < 2) return 0;

  let minPrice = A[0];
  let localMaxProfit, globalMaxProfit = 0;

  for(let i = 1; i < A.length; i++) {
    localMaxProfit = A[i] - minPrice;
    if(A[i] < minPrice) minPrice = A[i];

    globalMaxProfit = Math.max(localMaxProfit, globalMaxProfit);
  }

  return globalMaxProfit < 0 ? 0 : globalMaxProfit;

}



/*
describe("Max possible earning"), () => {\
  test("given array is []"), () => {
    expect([]).toBe(0)
  });

  test("given array is [200000]"), () => {
    expect([200000]).toBe(0)
  });

}
*/