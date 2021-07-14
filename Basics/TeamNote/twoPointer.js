// https://www.geeksforgeeks.org/two-pointers-technique/

// Searching pairs in a sorted array

function twoPointer(A, X) {
  const N = A.length;
  for(let i = 0; i < N-1; i++) {
    for(let j = i+1; j < N; j++) {
      if(i === j) continue;

      if(A[i] + A[j] === X) return 1;

      if(A[i] + A[j] > X) break;
    }
  }
  return 0;
}

let A = [ 3, 5, 9, 2, 8, 10, 11 ]
let target = 9;

// twoPointer(A, target) // 0

// twoPointer(A, 11) // 1