// Lesson 3: Time Complexity
// TapeEquilibrium
// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|
// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

// Calculate prefix sum through reduce(sums)
// Find absolute value
// Return min value within sums

// Time Complexity: O(N)
function solution(A) {
  const sums = [];
  let partOne = 0;
  let partTwo = A.reduce((acc, curr) => acc + curr);

  for(let i = 0; i < A.length; i++) {
    partOne += A[i];
    partTwo -= A[i];
    // console.log(partOne, partTwo)
    /*
      3 10
      4 9
      6 7
      10 3
      13 0
    */
    sums.push(Math.abs(partOne - partTwo));
  }
  // console.log(sums); // [ 7, 5, 1, 7, 13 ]
  return Math.min(...sums);
}

// Time Complexity: O(N)
function solution(A) {
  const partOne = [A[0]];
  const partTwo = [A[A.length - 1]];

  for(let i = 1; i < A.length; i++) {
    partOne[i] = partOne[i-1] + A[i];
    partTwo[i] = partTwo[i-1] + A[A.length - 1 - i];
    // console.log(i, partOne, partTwo)
  }

  let min = Number.MAX_SAFE_INTEGER;
  for(let p = 0; p < A.length - 1; p++) {
    min = Math.min(
      min, 
      Math.abs(partOne[p] - partTwo[A.length - 2 - p])
    )
    // console.log(min)
  }
  return min;
}
