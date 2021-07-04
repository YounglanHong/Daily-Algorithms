// Lesson 5: Prefix Sums(구간 합)
// P[k] = P[k-1] + A[k-1]
// range [a, b]

// Time complexity: O(N)
function prefixSum(A) {
  const N = A.length;
  // const P = new Array(N);
  // P[0] = A[0];
  const P = [A[0]];

  for(let i = 1; i < N; i++) {
    P[i] = P[i-1] + A[i];
  }
  return P;
}

// prefixSum([1, 2, 3, 4, 5])
// [1, 3, 6, 10, 15]

function countTotal(a, b) {
  return P[b] - P[a-1];
}

// countTotal(2, 4)
// 12

// Suffix Sums

// Time complexity: O(N)
function suffixSum(A) {
  const N = A.length;
  const S = new Array(N);
  S[N-1] = A[N-1];

  for(let i = N-2; i >= 0; i--) {
    S[i] = S[i+1] + A[i];
  }
  return S;
}

// suffixSum([1, 2, 3, 4, 5])
// [15, 14, 12, 9, 5]

