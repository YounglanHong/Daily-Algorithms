// Lesson 6: Sorting
// NumberOfDiscIntersections
// Compute the number of intersections in a sequence of discs.
// https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
// (ref: https://app.codility.com/demo/results/training86S6RE-49X/)

// Time complexity: O(N*log(N)) or O(N)
function solution(A) {
  const N = A.length;
  let intersect = 0;

  // 1. Add start & end point in an array
  const circle = A.map((disc, idx) => [idx - disc, idx + disc]);
  // 2. Sort by start point in an asc order
  circle.sort((a, b) => a[0] - b[0]);
  // [ [ -4, 6 ], [ -1, 1 ], [ 0, 4 ], [ 0, 8 ], [ 2, 4 ], [ 5, 5 ] ]

  // 3. Loop through circle starting from the outer circle
  for(let i = 0; i < N; i++) {
    const [targetStart, targetEnd] = circle[i];
        // 4. Loop througn circle starting from (i+1) circle
      for(let j=i+1; j < N; j++) {
        const [compStart, compEnd] = circle[j];
        // 5. If there is intersects, add count
        if(compStart <= targetEnd) {
          intersect++;
          console.log(intersect);
        // 5-1. If intersects exceeds 10000000, return -1
        if(intersect > 10000000) return -1;
        } else {
          break;
      }
    }
    // console.log(intersect);
    // 5, 2, 2, 2, 0, 0
    // 5, 7, 9, 11, 11, 11
  }
  return intersect;
}


