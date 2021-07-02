// Lesson 3: Time Complexity
// FrogJmp
// Count minimal number of jumps from position X to Y.
// https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

  // X + (D * jump) > Y 
  // jump > (Y - X) / D
  // jump > 75 / 30 = 2.xxx

// Time Complexity: O(1)
function solution(X, Y, D) {
  const jump = Math.ceil((Y - X) / D);
  return jump;
}

// Y >= X
/* 
describe("Minimal number of jumps"), () => {
  test("when X is 30, Y is 30, D is 10"), () => {
    expect(30, 30, 10).toBe(0)
  });

  test("when X is 30, Y is 30, D is 50"), () => {
    expect(30, 30, 50).toBe(0)
  })
}
*/