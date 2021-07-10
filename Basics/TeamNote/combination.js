// Combination(조합)
// 순서 X
// nCr = n! / r! * (n-r)!

// Pick n elements from array
function combination(arr, n) {
  let result = [];
  if(n === 1) return arr.map(v => [v]);

  for(let i = 0; i < arr.length; i++) {
    let rest = arr.slice(i+1); // 현재 인덱스 이후 나머지
    let newCombi = combination(rest, n-1); // 나머지에서 (n-1)개의 조합 구하기
    let combiSet = newCombi.map(v => [arr[i], ...v]); // 현재 요소와 합치기
    result.push(...combiSet);
  }
  return result;
}

combination([1, 2, 3], 2)
// 3C2
// [ [1, 2], [1, 3], [2, 3] ]