// Lesson 2: Arrays
// CyclicRotation
// Rotate an array to the right by a given number of steps.
// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function solution(A, K) {
  if(!A.length) return []; // N: length of A within [0, 100]
  let target = 0;
  while(K > 0) {
    target = A.pop();
    A = [target, ...A];
    K--;
    // console.log(target, A, K)
  }
  return A;
}

/* 
  test("rotated array"), () => {
    expect([], 3).toStrictEqual([])
  })
*/
