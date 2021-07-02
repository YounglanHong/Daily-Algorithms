// Lesson 1: Iterations
// BinaryGap
// Find longest sequence of zeros in binary representation of an integer.
// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

// 1001: one binary gap of length 2
// 10100: one binary gap of length 1

function solution(N) {
  const binary = N.toString(2);
  let gap = "", start = 1, BG = [];
  if(!binary.includes("0")) return 0; // edge case

  for(let i = start; i < binary.length; i++) {
     if(binary[i] === "0") {
        gap += binary[i];
     } else {
        start = i;
        BG.push(gap.length);
        gap = "";
     } 
  }
  return BG.length ? Math.max(...BG) : 0;
}
