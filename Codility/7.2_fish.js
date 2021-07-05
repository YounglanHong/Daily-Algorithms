// Lesson 7: Stack and Queue
// Fish
// N voracious fish are moving along a river. Calculate how many fish are alive.
// https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/

// A: size of fish, B: direction of fish - 0: upstream, 1: downstream
// Two fish meets when downstrem + upstream
// Time complexity: O(N)
function solution(A, B) {
  const N = A.length;
  const stack = []; // downstream fish
  let count = 0;

  for(let i = 0; i < N; i++) {
    // downstream
    if(B[i] === 1) {
      stack.push(A[i]);
    // upstream
    } else {
      while(stack.length > 0) {
        if(stack[stack.length - 1] > A[i]) { 
          break; // down eats up
        } else {
          stack.pop(); // up eats down
        }
      }
      if(stack.length === 0) count++;
    }
  }
  return stack.length + count;
}