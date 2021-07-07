// Lesson 10: Prime and composite numbers
// Flags
// Find the maximum number of flags that can be set on mountain peaks.
// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/

// 1. Find peaks and save index of peak in an array
// 2. Check the condition(distance >= number of flags)
// 3. Return max number of flags

// Correctness failed(40%)
function solution(A) {
  const peak = [];

  for(let i = 1; i < A.length; i++) {
    if(A[i - 1] < A[i] && A[i] > A[i + 1]) peak.push(i);
  }
  // console.log(peak)

  if(peak.length < 2) return peak.length; // [1, 3, 2] // one flag
  let dist = peak[peak.length - 1] - peak[0];

  const placeFlags = num => {
    let target = num;
    let start = peak[0];
    let i = 1;

    while(i < peak.length) {
      if(peak[i] - start >= num) {
        target--;
        if(target === 0) return true;
      }
      i++;
    }
    return false;
  }

  let left = 1;
  // let right = peak.length;
  let right = Math.floor(Math.sqrt(dist));
  let mid;

  while(left <= right) {
    mid = Math.floor((left + right) / 2) 
    if(placeFlags(mid) === true) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // console.log(left, mid, right)
  return mid;
};

// (ref: http://straightdeveloper.com/codility-com-flags-task-solution-with-100-score/)
// 1. Form an array and save index of peak in an array ([1, 3, 5, 10])
// 1-1. Loop through A and check whether element is greater than prev and next element
// 2. Caculate the possible number of flags to put on the peaks
//    (Condition: distance between two flags is less than k(total number of flags))
// 2-1. Calculate max value of k(total number of flags) --> sqrt of distance between first and last peak
// let dist = peak[peak.length - 1] - peak[0]
// let limit = Math.floor(Math.sqrt(dist))

// Time complexity: O(N)
function solution(A) {
  const peak = [];

  for(let i = 1; i < A.length; i++) {
    if(A[i - 1] < A[i] && A[i] > A[i + 1]) peak.push(i);
  }
  // console.log(peak)

  if(peak.length < 2) return peak.length; // A = [1, 3, 2] // one flag
  let dist = peak[peak.length - 1] - peak[0];
  let K = Math.floor(Math.sqrt(dist));

  // possible to set floor(sqrt(N))+1 flags
  for(let i = K + 1; i > 0; i--) {
    let distSum = 0;
    let count = 1;

    for(let j = 0; j < peak.length - 1; j++) {
      let currentPeak = peak[j];
      let nextPeak = peak[j+1];

      let diff = Math.abs(nextPeak - currentPeak);
      // console.log(diff, distSum, count, i)
      if((diff + distSum) >= i) {
        count++;
        distSum = 0;
      } else {
        distSum += diff;
      }
      if(count === i) return count;
    }
  }
}


/*
describe("Find max number of flags"), () => {\
  test("given an array [5]"), () => {
    expect([5]).toBe(0)
  });

  test("given an array [1, 7, 5]"), () => {
    expect([1, 7, 5]).toBe(1)  // one flags
  });

  test("given an array [1, 2, 3, 4, 5]"), () => {
    expect([1, 2, 3, 4, 5]).toBe(0) // no flags
  });

  test("given an array [1, 2, 6, 4, 5]"), () => {
    expect([1, 2, 6, 4, 5]).toBe(1)  // one flags
  });

  // possible to set floor(sqrt(N))+1 flags
  test("given an array [0, 0, 0, 0, 0, 1, 0, 1, 0, 1]"), () => {
    expect([0, 0, 0, 0, 0, 1, 0, 1, 0, 1]).toBe(2)  // two flags
  });
}
*/