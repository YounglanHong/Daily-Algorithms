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
  let partOne = 0, partTwo = A.reduce((acc, curr) => acc + curr);

  for(let i = 0; i < A.length - 1; i++) {
    partOne += A[i];
    partTwo -= A[i];
    // console.log(partOne, partTwo)
    sums.push(Math.abs(partOne - partTwo));
  }
  // console.log(sums);
  return Math.min(...sums);
}