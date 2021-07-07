// Lesson 10: Prime and composite numbers
// Peaks
// Divide an array into the maximum number of same-sized blocks, each of which should contain an index P such that A[P - 1] < A[P] > A[P + 1].
// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/peaks/

// Time complexity: O(N * log(log(N)))
// medium anti slow(performance failed)
function solution(A) {
  const N = A.length;
  let peaks = [];

  if(N < 3) return 0;

  // If A's length(N) is prime number and has peak, return 1
  function isPrime(num) {
    let result = false;
  
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if(num % i === 0){
        result = false;
        break;
      } 
      result = true;
    }
    return result;
  }

  for(let i = 1; i < N - 1; i++) {
    if(A[i - 1] < A[i] && A[i + 1] < A[i]) {
      peaks.push(i);
    }
  }

  if(isPrime(N) && peaks.length !== 0) return 1;
  // console.log(peaks)
  
  if(peaks.length === 0) return 0;
  if(peaks.length === 1) return 1;
  
  let from = 0, to = 0; // peak range
  let block = 0, idx = 0;
  // # of blocks <= # of peaks(peaks length)
  for(let i = peaks.length; i > 2; i--) {
    if(N % i === 0) {
      block = N / i;
      idx = 0;
      for(let peak of peaks) {
        from = idx * block;
        to = (idx + 1) * block;
        // console.log(from, peak, to)
        if(peak >= from && peak < to) {
          idx++;
        }
      }
      
      if(idx === i) return i;
    }
  }
}



/*
describe("Max number of same-sized blocks that has at least one peak"), () => {
  test("given an array []"), () => {
    expect([]).toBe(0)
  });

  test("given an array [1000000000]"), () => {
    expect([1000000000]).toBe(0)
  });

  test("given an array [1, 2]"), () => {
    expect([1, 2]).toBe(0)
  });

  // [Prime Length] A's length(N) is prime number
  test("given an array [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]"), () => {
    expect([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]).toBe(1)
  });

  test("given an array [0, 0, 0, 0, 0, 0, 0] "), () => {
    expect([0, 0, 0, 0, 0, 0, 0]).toBe(0)
  });
}
*/
