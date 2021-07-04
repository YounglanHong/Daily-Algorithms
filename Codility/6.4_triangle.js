// Lesson 6: Sorting
// Triangle
// Determine whether a triangle can be built from a given set of edges.
// https://app.codility.com/programmers/lessons/6-sorting/triangle/

// triplet (P, Q, R)
// 0 ≤ P < Q < R < N
// A[P] + A[Q] > A[R]
// A[Q] + A[R] > A[P]
// A[R] + A[P] > A[Q]

// Time complexity: O(N*log(N))
function solution(A) {
  // 🔑 Triangular triplet has to be consecutive 3 elements of a sorted array
  const N = A.length;
  A.sort((a, b) => a - b);
  // console.log(A);

  for(let i = 0; i < N - 2; i++) {
    const p = A[i], q = A[i+1], r = A[i+2];
    // console.log(A, p, q, r)

    if(p + q > r && q + r > p && r + p > q) {
      return 1;
    }
  }
  return 0;
}
