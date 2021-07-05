// Lesson 7: Stack and Queue
// Nesting
// Determine whether a given string of parentheses (single type) is properly nested.
// https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/

// Time complexity: O(N)
function solution(S) {
  const stack = [];

  for(let p of S) {
    if(p === '(') {
      stack.push(p);
    } else {
      if(stack.length === 0) return 0; // '))(' or '())'
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0; 
}