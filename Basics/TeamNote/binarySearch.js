function binarySearch(A, target) {
  const N = A.length;

  let start = 0, end = N - 1;
  let mid = Math.floor((start + end) / 2);
  let result = -1;

  while(A[mid] !== target && start <= end) {

    if(A[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return (A[mid] === target) ? mid : result;
}