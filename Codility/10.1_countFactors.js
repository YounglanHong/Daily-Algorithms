// Lesson 10: Prime and composite numbers
// CountFactors
// Count factors of given number n
// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/

// Time complexity: O(N) [Timeout error]
// range [1..2,147,483,647]
function solution(N) {
  let count = 0;

  for(let i = 1; i < N + 1; i++) {
      if(N % i === 0) {
          count++;
      }
  }
  return count;
}

// Time complexity: O(sqrt(N))
function solution(N) {  
  let i = 1, count = 0;

  while(i * i < N) {
    if(N % i === 0) {
        count += 2;
    }
    i++;
  }
  if(i * i === N) {
      count += 1;
  }
  return count;
}

/*
describe("Count factors of"), () => {\
  test("given number 24"), () => {
    expect(24).toBe(8)
  });

  test("given number 25"), () => {
    expect(25).toBe(3)
  });

  test("given number 2147483647"), () => {
    expect(2147483647).toBe(2)
  });
}
*/