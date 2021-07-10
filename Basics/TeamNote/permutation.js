// Permutation(순열)
// 순서 O
// nPr = n! / (n-r)!

// Pick n elements from array
function permutation(arr, n) {
  let result = [];  
  if(n === 1) return arr.map(v => [v]);

  for(let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i);
    let right = arr.slice(i+1);
    let rest = [...left, ...right]; // 현재 인덱스를 제외한 나머지

    let newPermute = permutation(rest, n-1); // 나머지에서 (n-1)개의 순열 구하기
    let permuteSet = newPermute.map(v => [arr[i], ...v]); // 현재 요소와 합치기
    result.push(...permuteSet);
  }
  return result;
}

permutation([1, 2, 3], 2)
// 3P2
// [ [1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2] ]