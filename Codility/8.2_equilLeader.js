// Lesson 8: Leader
// EquiLeader
// Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
// https://app.codility.com/programmers/lessons/8-leader/equi_leader/

// The leader of this array is the value that occurs in MORE THAN half of the elements of A.

// Timeout errors
function findLeader(A, start, end) {
  const occur = {}
  let halfLen = ((end - start) / 2);
  let dominator = -1;

  for(let i = start; i < end; i++) {
    occur[A[i]] = (occur[A[i]] || 0) + 1;
  }
  
  for (const [k, v] of Object.entries(occur)) {
    if(v > halfLen) {
      dominator = Number(k);
    }
  }
  return dominator;
}

function solution(A) {
  let count = 0;
  let frontLeader = 0, backLeader = 0;

  for(let i = 0; i < A.length; i++) {

      frontLeader = findLeader(A, 0, i);
      backLeader = findLeader(A, i, A.length);
      // console.log(frontLeader, backLeader)
      
      if(frontLeader > -1 && backLeader > -1 
      && frontLeader === backLeader) {
        count++;
      }
  }
  return count
}

// Time complexity: O(N)
function solution(A) {
  let fLeader = [];
  let bLeader = [];
  let nums = {};

  // Check from the front
  for(let i = 0; i < A.length; i++) {
    const n = A[i];
    nums[n] = (nums[n] || 0) + 1;

    if(nums[n] > (i + 1) / 2) fLeader[i] = n;
    else if (nums[n] === (i + 1) / 2) fLeader[i] = null;
    else if (nums[fLeader[i - 1]] === (i + 1) / 2) fLeader[i] = null;
    else fLeader[i] = fLeader[i - 1];
  }

  // Check from the back
  nums = {};
  for(let i = A.length - 1; i >= 0; i--) {
    const n = A[i];
    nums[n] = (nums[n] || 0) + 1;

    if(nums[n] > (A.length - i) / 2) bLeader[i] = n;
    else if (nums[n] === (A.length - i) / 2) bLeader[i] = null;
    else if (nums[bLeader[i + 1]] === (A.length - i) / 2) bLeader[i] = null;
    else bLeader[i] = bLeader[i + 1];
  }
  
  // console.log("f: ", fLeader)
  // console.log("b: ", bLeader)

  let count = 0;
  for(let i = 0; i < A.length; i++) {
    if(fLeader[i] !== null &&
      fLeader[i] === bLeader[i+1]) {
      count++;
    }
  }
  return count;
}


/* 
more than half => even, odd
fLeader[0] = A[0];
fLeader[1] = null || A[0];
fLeader[2] = n || null;
fLeader[3] = n || null;
...
*/

/*
describe("Find equil leader in an array"), () => {
    test("given array is [4, 3, 4, 4, 4, 2]"), () => {
    expect([4, 3, 4, 4, 4, 2]).toBe(2)
  });

  test("given array is [0, 0]"), () => {
    expect([1, 2]).toBe(0)
  });

  test("given array is [0, 0]"), () => {
    expect([0, 0]).toBe(1)
  });

  test("given array is [1, 2, 1]"), () => {
    expect([1, 2, 1]).toBe(0)
  });

  test("given array is [0, 0, 1, 1, 1]"), () => {
    expect([0, 0, 1, 1, 1]).toBe(0)
  });

  test("given array is [4, 3, 4, 4, 4, 2]"), () => {
    expect([4, 3, 4, 4, 4, 2]).toBe(2)
  });

  test("given array is [-1000000000, 1000000000]"), () => {
    expect([-1000000000, 1000000000]).toBe(0)
  });
  
}
*/