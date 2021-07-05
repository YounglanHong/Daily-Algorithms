// Lesson 7: Stack and Queue
// StoneWall
// Cover "Manhattan skyline" using the minimum number of rectangles.
// https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
// (ref: https://github.com/dinkar1708/coding_interview/blob/master/codility/stack_queue_stone_wall.py)

// H: array of heights
// Time complexity: O(N)
function solution(H) {
  // min number of blocks needed 
  // --> Don't reuse the same block again
  const N = H.length;

  const stack = [];
  let count = 0;

  for(let i = 0; i < N; i++) {
    while(stack.length > 0 && stack[stack.length -1] > H[i]) {
      stack.pop();
    }
 
    if(stack.length === 0 || stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
      count++;
    }
    console.log(stack)
  } 
  console.log(count)
}