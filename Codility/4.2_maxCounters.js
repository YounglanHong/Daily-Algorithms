// Lesson 4: Counting Elements
// MaxCounters
// Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

// Performance failed(timeout error)
// Time complexity: O(N * M)
function solution(N, A) {
  // N: number of counters, A: operations
  // 1. Create N length counter and set all values to 0
  // 2. Loop through an array A and check condition
  // 2-1. If A[K] = X(1 <= X <= N), increase X by 1
  // 2-2. If If A[K] = N + 1, set all counters to max
  // 3. Return counter array

  // let counter = Array(N).fill(0);
  let counter = Array.from(Array(N), (_) => 0);
  let maxValue = 0;

  for(let i = 0; i < A.length; i++) {
      if(A[i] <= N) {
          counter[A[i]-1]++;
          // maxValue = Math.max(...counter);
          maxValue = Math.max(maxValue, counter[A[i]-1]); // 💣
      } else if(A[i] === N + 1) {
          counter = Array(N).fill(maxValue);
      }
      // console.log(counter)
  }
  return counter;
}
// 💣 Update maxValue in every loop --> timeout error



// Time complexity: O(N + M)
// Should not update maxCounter inside the first loop
function solution(N, A) {
  let counter = Array(N).fill(0);

  let maxValue = 0, maxCounter = 0;

  // first loop 
  for(let i = 0; i < A.length; i++) {
    if(A[i] === N + 1) {
      maxCounter = maxValue;
    } else if(A[i] <= N) {
      counter[A[i]-1] = Math.max(counter[A[i]-1], maxCounter);
      counter[A[i]-1]++;
      maxValue = Math.max(counter[A[i]-1], maxValue); // Memorize maxValue
    }
    // console.log(counter, maxCounter)
  }
  // Update maxCounter before return
  return counter.map((value) => Math.max(value, maxCounter));
}


