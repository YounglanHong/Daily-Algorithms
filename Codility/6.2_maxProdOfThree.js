// Lesson 6: Sorting
// MaxProductOfThree
// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/


// 🔑 Handling negative values
// Time complexity: O(N * log(N))
function solution(A) {
  const N = A.length;
  A.sort((a, b) => b - a);
  const prod1 = A[0] * A[1] * A[2]; // 3 pos
  const prod2 = A[0] * A[N-1] * A[N-2]; // 2 neg, 1 pos
  
  return Math.max(prod1, prod2)
}

/* 
describe("Maximal product of triplet"), () => {
  test("given array [-5, 5, -5, 4]"), () => {
    expect([-5, 5, -5, 4]).toBe(125)
  });
  test("given array [-5, -5, -5, 4]"), () => {
    expect([-5, -5, -5, 4]).toBe(100)
  });

  test("given array [-4, -6, 3, 4, 5]"), () => {
    expect([-4, -6, 3, 4, 5]).toBe(120)
  });

  test("given array [4, 7, 3, 2, 1, -3, -5]"), () => {
    expect([4, 7, 3, 2, 1, -3, -5] ).toBe(105)
  });

}
*/