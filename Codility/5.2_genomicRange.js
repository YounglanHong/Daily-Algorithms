// Lesson 5: Prefix Sums
// GenomicRangeQuery
// Find the minimal nucleotide from a range of sequence DNA.
// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/

// DNA sequence: A, C, G and T
// Impact factor: integer 1, 2, 3 and 4

// Time complexity: O(N + M)
function solution(S, P, Q) {
  // 1. Slice array S starting from P to Q ([P, Q])
  // 2. If sliced array includes type ('A', 'C', 'G', 'T'), 
  // push to result array
  // 3. Return result array

  const M = P.length;

  const result = [];
  for(let i = 0; i < M; i++) {
    const query = S.slice(P[i], Q[i] + 1);

    if(query.includes('A')) {
      result.push(1)
    } else if(query.includes('C')) {
      result.push(2)
    } else if(query.includes('G')) {
      result.push(3)
    } else {
      result.push(4)
    }
  }
  return result;
}

/* 
describe("Find min nucleotide from a range of sequence DNA"), () => {
  test("given array ['CGGGA', [1, 1, 1], [50000, 1, 1]]"), () => {
    expect(['CGGGA', [1, 1, 1], [50000, 1, 1]]).toEqual([1, 3, 3])
  });

  test("given array ['CA', [1, 1, 1], [1, 1, 1]]"), () => {
    expect(['CA', [1, 1, 1], [1, 1, 1]]).toEqual([1, 1, 1])
  });

}
*/


