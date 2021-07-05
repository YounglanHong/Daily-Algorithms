// Lesson 7: Stack and Queue
// Brackets
// Determine whether a given string of parentheses (multiple types) is properly nested.
// https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/

// Time complexity: O(N)
function solution(S) {
  // 1. Add opening bracket to stack
  // 2. Compare closing bracket with last added bracket of stack
  // 3. If stack size is 0, return 1. else return 0

  const N = S.length;
  const stack = [];

  for(let i = 0; i < N; i++) {
    if(S[i] === '{' || S[i] === '[' || S[i] === '(') {
      stack.push(S[i]);
    } else {
      if(stack.length === 0) return 0; // "}}}{"
      let pop = stack.pop();

      if(S[i] === '}' && pop !== '{') return 0;
      if(S[i] === ']' && pop !== '[') return 0;
      if(S[i] === ')' && pop !== '(') return 0;
    }
  }
  return stack.length === 0 ? 1 : 0;
}
