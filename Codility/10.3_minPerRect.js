// Lesson 10: Prime and composite numbers
// MinPerimeterRectangle
// Find the minimal perimeter(둘레) of any rectangle whose area(넓이) equals N
// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/

// perimeter: 2 * (a + b), area: (a * b)

// Time complexity: O(sqrt(N))
function solution(N) {
  let i = 0;
  let a = 1, b = 1;
  let perimeters = [];

  while(i * i < N) {
    if(N % i === 0) {
      a = i;
      b = N / a;
    }
    perimeters.push(a + b);
    i++;
  }
  if(i * i === N) {
    a = i;
    b = N / a;
    perimeters.push(a + b);
  }
  console.log(perimeters)
}

/*
describe("Find minimal perimeter of"), () => {\
  test("of given number 30"), () => {
    expect(30).toBe(22)
  });

  test("of given number 1"), () => {
    expect(1).toBe(4)
  });

  test("of given number 1000000000"), () => {
    expect(1000000000).toBe(126500)
  });
} */