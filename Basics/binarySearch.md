# Binary Search(이진 탐색)

- 빠른 탐색(분할 정복)
- _정렬된_ 배열
- **Big-O**: `O(1)` --> `O(logN)`

  ```js
  function binarySearch(arr, val) {
    // sorted array
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (arr[mid] !== val && start <= end) {
      // console.log(start, mid, end);
      if (val < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      mid = Math.floor((start + end) / 2);
      // console.count("loop");
    }

    return arr[mid] === val ? mid : -1;
  }

  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
  ```
