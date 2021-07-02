// Lesson 2: Arrays
// OddOccurrencesInArray
// Find value that occurs in odd number of elements.
// Returns the value of the unpaired element.
// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

// Performance failed
// Time Complexity: O(N^2)
function solution(A) {
  const pairs = [];

  // for문 안에서 if문으로 배열의 요소 탐색
  for(let i = 0; i < A.length; i++) {
    if(pairs.includes(A[i])) {
      pairs.splice(pairs.indexOf(A[i]), 1);
    } else {
      pairs.push(A[i])
    }
  }
  return pairs[0];
}

// Sorting: 
// Time Complexity: O(N) or O(N*log(N))
function solution(A) {
  const pairs = []; // stack
  A.sort((a, b) => a - b);
  for(let i = 0; i < A.length; i++) {
      let lastEl = pairs[pairs.length - 1];
      if(lastEl === A[i]) {
          pairs.pop();
      } else {
          pairs.push(A[i]);
      }
  }
  return pairs.pop();
}
