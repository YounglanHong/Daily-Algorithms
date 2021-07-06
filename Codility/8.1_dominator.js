// Lesson 8: Leader
// Dominator
// Find an index of an array such that its value occurs at more than half of indices in the array.
// https://codility.com/media/train/6-Leader.pdf
// https://app.codility.com/programmers/lessons/8-leader/dominator/

// Correctness failed
function solution(A) {
  // 1. Push consecutive elements
  // 2. Check whether two elements at the top are different
  //  2-1. If they are, remove them from the stack
  //  2-2. If they are not, leave them
  // 3. If size of stack is larger than 0,
  //  3-1. Set dominator as candidate
  //  3-2. If not, return -1
  // 4. Loop through array and check if occurence of   
  // candidate is greater than (n / 2)

  const stack = [];
  let dominator = 0, candidate = 0, count = 0;
  
  for(let i = 0; i < A.length; i++) {
    stack.push(A[i]);
    if(stack.length > 1) {
      let [compA, compB] = stack;
      if(compA !== compB) {
          stack.pop();
          stack.pop();
      }
    }
  }
  candidate = stack.pop();
  if(stack.length > 0) {
    A.forEach((v, j) => {
        if(v === candidate) {
          count++;
          dominator = j;
        }
    })
    // console.log(count)
    if(count > A.length / 2) return dominator;
  } 
  return -1;
}

// Time complexity: O(N*log(N)) or O(N)
function solution(A) {
  // 1. Add occurrence of elements as values in an object
  // 2. Check whether occurrence(value) is greater than halfLength(n / 2)
  //  2-1. If it is, set key as dominator 
  //  3-1. If dominator exists, return index of any dominator
  //  3-2. If not, return -1
  
  const occur = {}, halfLen = (A.length / 2);
  let dominator = undefined;

  A.forEach(el => {
    occur[el] = (occur[el] || 0) + 1;
  })
  
  for (const [k, v] of Object.entries(occur)) {
    if(v > halfLen) {
      dominator = Number(k);
    }
  }
  return dominator ? A.indexOf(dominator) : -1;
}


/*
describe("Find leader in an array"), () => {
  test("given array is [1, 2, 1]"), () => {
    expect([1, 2, 1]).toBeOneOf([0, 2])
  });

  test("given array is [0, 0, 1, 1, 1]"), () => {
    expect([0, 0, 1, 1, 1]).toBeOneOf([2, 3, 4]);
  });
}
*/
